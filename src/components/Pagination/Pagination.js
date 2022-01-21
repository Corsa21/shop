import React from 'react';
import './Pagination.scss';




export default function Pagination() {
return (
        <div className='pagination'>
            <button className='pagination__button'>{'<'}</button>
            { new Array(6).fill("").map(
                (el, index) => <button key={index} className='pagination__button'>{index+1}</button>
            ) 
            }
            <button className='pagination__button'>{'>'}</button>
        </div>
    );
}
