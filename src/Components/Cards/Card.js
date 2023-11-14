import React from 'react'
import "./Card.css"

function Card({ item }) {
    return (
        <div className={item.mt}>
            <div className="card">
                <div className='user'>
                    <img
                        src={item.img}
                        alt='img' />
                    <div className='user-bar'>
                        <h1>{item.name}</h1>
                        <h2>{item.stat}</h2>
                    </div>
                </div>
                <p>" {item.comment} "</p>
            </div>
        </div>
    )
}

export default Card
