import axios from "axios";

const blogAPI = axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-type": "application/json"
    }
});


export const fetchArticles = async () => {
    return await blogAPI.get('/articles');
};

export const fetchArticle = async (id) => {
    return await blogAPI.get(`/articles/${id}`);
};



export const createArticle = async (data) => {
    return await blogAPI.post('/articles', data);
};

export const removeArticle = async (id) => {
    return await blogAPI.delete(`/articles/${id}`);
};

export const searchArticleByQuery = async (query) => {
    return await blogAPI.get('/articles', { params: { title: query } });
};
export const searchArticleByCategory = async (categoryId) => {
    return await blogAPI.get(`/articles?category_id=${categoryId}`);
};


export const fetchCategories = async () => {
    return await blogAPI.get('/categories');
};

export const createCategory = async (data) => {
    return await blogAPI.post('/categories', data);
};

export const removeCategory = async (id) => {
    return await blogAPI.delete(`/categories/${id}`);
};