import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticle,getArticles } from '../state/blog/blogSlice';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../components/Loading';
const ShowArticle = () => {
    const { id } = useParams(); // Get article ID from URL params
    const {article} = useSelector(store => store.blog)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getArticle(id))
        
    }, []);
    if (!article) {
        return <Loading/>;
    }
    return (
        <div className='flex w-full justify-center'>
            <ul>
                <li>
                    <p className="text-3xl">{article.title}</p>
                </li>
                <li>
                    <img className="h-auto max-w-full" src={article.imageUrl} alt={article.title} />
                </li>
                <li className='max-w-md'>
                    <p className=''>
                        {article.description}
                    </p>
                </li>
            </ul>
        </div>
    );
}

export default ShowArticle;
