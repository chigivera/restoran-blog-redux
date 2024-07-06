import React, { useState } from 'react';
import Layout from "./Layout";
import { AuthProvider } from "./context/AuthContext";
import About from "./pages/About";
import AddArticle from "./pages/AddArticle";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ShowArticle from "./pages/ShowArticle";
import Welcome from "./pages/Welcome";
import PrivateRoute from './PrivateRoute';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


const routes = [  
  { path: '/', title: 'Home', element: <Home />, isProtected: false },
  // { path: '/welcome', title: 'Welcome', element: <Welcome />, isProtected: false },
  // { path: '/about', title: 'About Us', element: <About />, isProtected: false },
  { path: '/add-article', title: 'Add Article', element: <AddArticle />, isProtected: false },
  { path: '/show-article/:id', title: 'Show Article', element: <ShowArticle />, isProtected: false },
  // { path: '/login', title: 'Login', element: <Login />, isProtected: false },
];

function App() {

  return (
    <div className="App">

          <Router>
            <Layout>
              <Routes>
                {routes.map((route, index) => (
                  route.isProtected ? 
                    <Route 
                    key={index} 
                      path={route.path} 
                      element={<PrivateRoute>{route.element}</PrivateRoute>} 
                      />
                      : 
                    <Route 
                      key={index} 
                      path={route.path} 
                      element={route.element} 
                    />
                ))}
              </Routes>
            </Layout>
          </Router>
    </div>
  );
}

export default App;
