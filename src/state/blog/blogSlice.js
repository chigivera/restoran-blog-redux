import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { createArticle, createCategory, fetchArticle, fetchArticles, fetchCategories, removeArticle, removeCategory, searchArticleByCategory, searchArticleByQuery } from "../../services/blog";

const initialState = {
    article: null,
    articles: [],
    categories: [],
    filteredArticles:[],
    loading: false,
    error: false,
    success:false
};

export const getArticles = createAsyncThunk('article/get', async () => {
    try {
        const res = await fetchArticles();
        return res.data;
    } catch (error) {
        throw Error('Failed to fetch articles');
    }
});

export const getArticle = createAsyncThunk('article/getOne', async (id) => {
    try {
        const res = await fetchArticle(id);
        return res.data;
    } catch (error) {
        throw Error('Failed to fetch article');
    }
});

export const addArticle = createAsyncThunk('article/add', async (data) => {
    try {
        const res = await createArticle(data);
        return res.data;
    } catch (error) {
        throw Error('Failed to add article');
    }
});

export const deleteArticle = createAsyncThunk('article/delete', async (id) => {
    try {
        await removeArticle(id);
        return id;
    } catch (error) {
        throw Error('Failed to delete article');
    }
});

export const getCategories = createAsyncThunk('category/get', async () => {
    try {
        const res = await fetchCategories();
        return res.data;
    } catch (error) {
        throw Error('Failed to fetch categories');
    }
});

export const addCategory = createAsyncThunk('category/add', async (data) => {
    try {
        const res = await createCategory(data);
        return res.data;
    } catch (error) {
        throw Error('Failed to add category');
    }
});
export const deleteCategory = createAsyncThunk('category/delete', async (id) => {
    try {
        await removeCategory(id);
        return id;
    } catch (error) {
        throw Error('Failed to delete category');
    }
});

export const fetchArticlesByQuery = createAsyncThunk(
    'articles/fetchByQuery',
    async (query) => {
      const response = await searchArticleByQuery(query);
      return response.data; // Assuming the API returns a JSON object with a `data` property containing the articles
    }
  );
  
  // Async thunk for searching articles by category
  export const fetchArticlesByCategory = createAsyncThunk(
    'articles/fetchByCategory',
    async (id) => {
      const response = await searchArticleByCategory(id);
      return response.data; // Same assumption as above
    }
  );

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getArticles.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getArticles.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(getArticle.fulfilled, (state, action) => {
                state.article = action.payload
            })
            .addCase(getArticle.rejected, (state) => {
                state.error = true;
            })
            .addCase(getArticles.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addArticle.fulfilled, (state, action) => {
                state.articles.push(action.payload);
            })
            .addCase(addArticle.rejected, (state) => {
                state.error = true;
            })
            .addCase(deleteArticle.fulfilled, (state, action) => {
                state.articles = action.payload
            })
            .addCase(deleteArticle.rejected, (state) => {
                state.error = true;
            })
            .addCase(getCategories.pending, (state) => {
                state.loading = true;
                state.error = false;
            })
            .addCase(getCategories.fulfilled, (state, action) => {
                state.categories = action.payload;
                state.loading = false;
                state.error = false;
            })
            .addCase(getCategories.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
            .addCase(addCategory.fulfilled, (state, action) => {
                state.categories.push(action.payload);
            })
            .addCase(addCategory.rejected, (state) => {
                state.error = true;
            })
            .addCase(deleteCategory.fulfilled, (state, action) => {
                state.categories = state.categories.filter(category => category.id !== action.payload);
            })
            .addCase(deleteCategory.rejected, (state) => {
                state.error = true;
            })
            .addCase(fetchArticlesByQuery.pending, (state) => {
                state.loading = true;
                state.error = false;
              })
              .addCase(fetchArticlesByQuery.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = false;
              })
              .addCase(fetchArticlesByQuery.rejected, (state) => {
                state.loading = false;
                state.error = true;
              })
              .addCase(fetchArticlesByCategory.pending, (state) => {
                state.loading = true;
                state.error = false;
              })
              .addCase(fetchArticlesByCategory.fulfilled, (state, action) => {
                state.articles = action.payload;
                state.loading = false;
                state.error = false;
              })
              .addCase(fetchArticlesByCategory.rejected, (state) => {
                state.loading = false;
                state.error = true;
              });
    }
});
const {reducer} = blogSlice
export default reducer;
