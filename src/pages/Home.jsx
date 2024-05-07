import React, { useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import Categories from '../components/Categories';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles, getCategories, fetchArticlesByCategory, filterArticlesByQuery } from '../state/blog/blogSlice';

const Home = () => {
    const { filteredArticles, articles, categories, loading } = useSelector((store) => store.blog);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        dispatch(getArticles());
        dispatch(getCategories());
    }, [dispatch]);

    useEffect(() => {
        console.log(filteredArticles)
        if (query !== '') {
            dispatch(filterArticlesByQuery(query));
        }
    }, [query, dispatch]);

    useEffect(() => {
        if (selectedCategory) {
            dispatch(fetchArticlesByCategory(selectedCategory));
        }
    }, [selectedCategory, dispatch]);

    return (
        <div className='home p-4'>
            <ul className="flex w-full justify-center flex-col-reverse md:flex-row">
                <li className='w-3/6'>
                    <ArticleList
                        articles={query !== '' ? filteredArticles:articles}
                        loading={loading}
                    />  
                </li>
                <li>
                    <div className="hidden md:block md:w-0.5 md:h-full md:bg-slate-400"></div>
                </li>
                <li className='md:pl-2'>
                    <Search query={query} setQuery={setQuery} />
                    <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                </li>
            </ul>
        </div>
    );
}

export default Home;
