import React, { useEffect } from 'react'
import placeholderImage from './news-placeholder.webp'

export default function NewsItem(props) {
    const { title, description, imageUrl, newsUrl, author, publishedAt } = props;
    const date = new Date(publishedAt)

    return (<div className="card my-2 mx-2" style={{ width: '18rem' }}>
        <img src={imageUrl === null ? placeholderImage : imageUrl} className="card-img-top" alt="..." />
        <div className="card-body d-flex flex-column justify-content-sm-between">
            <div>
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle-sm mb-2 text-muted">{author !== null ? `By ${author} on ${date.toDateString()}` : `${date.toDateString()}`}</h6>
                <p className="card-text">{description}</p>
            </div>
            <br />
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read more</a>
        </div>
    </div>)

}
