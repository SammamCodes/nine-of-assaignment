import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoute from './routes/PrivateRoute.jsx';
import Profile from './components/Profile.jsx';
import Details from './components/Detail';
import TourCards from './components/TourCards';
import ForgotPassword from './components/ForgotPassword';
import MyProfile from './components/MyProfile';
import UpdateProfile from './components/UpdateProfile';
import AdventureDetails from './components/AdventureDetails';
import NotFound from './components/NotFound';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "/forgot-password", element: <ForgotPassword /> },
      { path: "orders", element: <PrivateRoute><Orders /></PrivateRoute> },
      { path: "my-profile", element: <MyProfile></MyProfile> },
      { path: "update-profile", element: <UpdateProfile></UpdateProfile> },
      { path: "profile", element: <PrivateRoute><Profile /></PrivateRoute> },
      { path: "details", element: <PrivateRoute><Details /></PrivateRoute> },
      { path: "adventure", element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute> },
      { path: "/", element: <TourCards /> },
      { path: "*", element: <NotFound></NotFound> } ,
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
