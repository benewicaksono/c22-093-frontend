import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// use react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import AllCourses from './AllCourses';
import DetailCourse from './DetailCourse';
import Register from './Register';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  { path: '/courses', element: <AllCourses /> },
  { path: '/courses/:key', element: <DetailCourse /> },
  { path: '/register', element: <Register /> },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
