/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import _ from 'lodash';


const Pagination = props => {

    const { todosCount, currentPage, pageSize, onPageChange} = props;
    const pagesCount = Math.ceil(todosCount / pageSize);
    if(pageSize === 1) return null;
    const pages = _.range(1, pagesCount+1);


    return ( 
        <nav aria-label="Page navigation" className="">
            <ul className="pagination pagination-sm">
                {pages.map( page => 
                <li key={page} className={page === currentPage ? 'page-item active' : 'page-item'} role="button">
                     <a onClick={()=> onPageChange(page)} className="page-link">{page}</a>
                </li>
                )}
            </ul>
        </nav>
    );
}
 
export default Pagination;