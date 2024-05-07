import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getArticle } from '../state/blog/blogSlice';
import Loading from '../components/Loading';

const ShowArticle = () => {
  const { id } = useParams(); // Get article ID from URL params
  const { article, loading } = useSelector(store => store.blog);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (!article) {
    return <div className="text-center mt-10">Article not found.</div>;
  }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100 p-6'>
      <div className='bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl w-full'>
        <img className="h-64 w-full object-cover" src={article.imageUrl} alt={article.title} />
        <div className='p-6'>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
          <p className='text-gray-700 mb-4'>{article.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ShowArticle;
