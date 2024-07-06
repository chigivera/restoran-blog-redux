import React, { useContext, useEffect, useState } from 'react';
import ArticleList from '../components/ArticleList';
import Categories from '../components/Categories';
import Search from '../components/Search';
import { useDispatch, useSelector } from 'react-redux';
import { getArticles,getCategories, fetchArticlesByCategory,fetchArticlesByQuery} from '../state/blog/blogSlice'
const Home = () => { 
    const { articles,categories, loading } = useSelector((store) => store.blog);
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [query, setQuery] = useState('');

    useEffect(() => {
        dispatch(getArticles())
        dispatch(getCategories())
        if (query !== '') {
            dispatch(fetchArticlesByQuery(query))
        }
        if (selectedCategory) {
            dispatch(fetchArticlesByCategory(selectedCategory))

        }
   
    }, [ selectedCategory, query]);
    return (
        <div className='home'>
            <ul className="flex w-full justify-center flex-col-reverse md:flex-row">
                <li className='w-3/6'>
                    <ArticleList 
                    articles={articles}
          
                    />
                </li>   
                <li>
                    <div className="md:w-0.5 md:h-full md:bg-slate-400">
                    </div>
                </li>
                <li className=''>
                        <Search query={query} setQuery={setQuery} />
                    <Categories categories={categories} setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />
                </li>
            </ul>
        </div>
    );
}

export default Home;
