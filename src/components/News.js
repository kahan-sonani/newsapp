import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NewsItem from './NewsItem'

export default function News(props) {

    const pageSize = 8
    const [category, setCategory] = useState('General')
    const [articles, setArticles] = useState([])
    const [n, setN] = useState(0)
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)

    const handleNextClick = () => {
        setPage(page + 1);
    }

    const handleDropDownChange = (category) => {
        setCategory(category)
    }

    const fetchMoreData = () => {
        handleNextClick()
    }

    useEffect(() => {
        setLoading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b0d03cf5e4e84271b21d3b89c993ce36&page=${page}&pageSize=${pageSize}${category === 'None' ? '' : `&category=${category}`}`
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(articles.concat(data.articles))
                setN(data.totalResults)
                setLoading(false)
            })
    }, [page])

    useEffect(() => {
        setLoading(true)
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=b0d03cf5e4e84271b21d3b89c993ce36&page=${page}&pageSize=${pageSize}${category === 'None' ? '' : `&category=${category}`}`

        fetch(url)
            .then(response => response.json())
            .then(data => {
                setArticles(data.articles)
                setN(data.totalResults)
                setLoading(false)
            })


    }, [category])

    return (
        <div className='container my-5 d-flex flex-column align-items-center'>
            <div className="container mb-4 d-flex flex-wrap align-items-center flex-column">
                <h2 className='text-center'>{`${props.heading}${category === 'None' ? '' : ` - ${category}`}`}</h2>
                <h6 className='text-muted mb-4'>{`${n} results`}</h6>
                <div className="dropdown">
                    <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                        {category}
                    </button>
                    <ul className="dropdown-menu dropdown-menu-light bg-light" aria-labelledby="dropdownMenuButton2">
                        <li><button onClick={() => handleDropDownChange('Business')} className="dropdown-item"> Business</button></li>
                        <li><button onClick={() => handleDropDownChange('Entertainment')} className="dropdown-item"> Entertainment</button></li>
                        <li><button onClick={() => handleDropDownChange('General')} className="dropdown-item"> General</button></li>
                        <li><button onClick={() => handleDropDownChange('Health')} className="dropdown-item"> Health</button></li>
                        <li><button onClick={() => handleDropDownChange('Science')} className="dropdown-item"> Science</button></li>
                        <li><button onClick={() => handleDropDownChange('Sports')} className="dropdown-item"> Sports</button></li>
                        <li><button onClick={() => handleDropDownChange('Technology')} className="dropdown-item"> Technology</button></li>
                    </ul>
                </div>
            </div>

            <div className="container d-flex flex-wrap justify-content-center">
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== n}
                ></InfiniteScroll>
                {articles.map((element) =>
                    <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} key={element.url} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} />
                )}
            </div>
            {loading && <div className="spinner-border my-4" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>}
        </div>
    )
}
