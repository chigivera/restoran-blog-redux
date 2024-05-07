import React, { useContext, useEffect, useState } from 'react';
import Article from './Article';

const ArticleList = ({articles,loading}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of articles per page
 
    // Calculate pagination values
    const indexOfLastArticle = currentPage * itemsPerPage;
    const indexOfFirstArticle = indexOfLastArticle - itemsPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    // Change page
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };
    if (loading) {
        return <div>Loading...</div>; // You can replace this with a spinner component if you have one
      }
    if (articles.length === 0) {
        return <div className='text-3xl flex w-full h-96 justify-center items-center'>No articles found</div>;
      }
    return (
        <div className="article-list ">
            <ul className='grid md:grid-cols-2 min-h-96'>
                {currentArticles.map(item => (
                    <Article key={item.id} {...item} />
                ))}
            </ul>
            <div className="flex flex-col items-center">
                <span className="text-sm text-gray-700 dark:text-gray-400">
                    Showing <span className="font-semibold text-gray-900 dark:text-white">{indexOfFirstArticle + 1}</span> to <span className="font-semibold text-gray-900 dark:text-white">{Math.min(indexOfLastArticle, articles.length)}</span> of <span className="font-semibold text-gray-900 dark:text-white">{articles.length}</span> Entries
                </span>
                <div className="inline-flex mt-2 xs:mt-0">
                    <button 
                        className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        onClick={prevPage} 
                        disabled={currentPage === 1}
                    >
                        <svg className="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                        </svg>
                        Prev
                    </button>
                    <button 
                        className={`flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white ${indexOfLastArticle >= articles.length ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        onClick={nextPage} 
                        disabled={indexOfLastArticle >= articles.length}
                    >
                        Next
                        <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );  
}

export default ArticleList;
