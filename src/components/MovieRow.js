import React from "react";
import './MovieRow.css';

function MovieRow ({title, itens}){
    return (
        <div className="movieRow">
            <h2>{title}</h2>
            <div className="movieRow--listarea">
                <div className="movieRow--list">
                {itens.results.length > 0 && itens.results.map((item, key)=>(
                    <div key={key} className='movieRow--item'>
                        <img src= {`https://image.tmdb.org/t/p/w300${item.poster_path}`} alt={item.original_title}/>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default MovieRow;