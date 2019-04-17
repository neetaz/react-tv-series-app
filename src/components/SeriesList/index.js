import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const SeriesListItem = props => {
    console.log(props.list);
    return (
        <li key={props.list.show.id}>
            <Link to={`/series/${props.list.show.id}`}>
                {props.list.show.name}
            </Link>
        </li>
    )
}
const SeriesList = props => {
    return (
        <div>
            <ul className="series-list">
                {props.list.map((series, i) =>
                    <SeriesListItem key={series.show.id} list={series} />
                )}
            </ul>
        </div>
    )

}

export default SeriesList