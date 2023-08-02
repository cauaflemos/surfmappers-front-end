import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Reset } from 'styled-reset'
import GlobalStyle from './global/theme'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="light"
    />
      <Reset />
      <GlobalStyle />
      <RouterProvider router={AppRoutes} />
    <ToastContainer />
  </React.StrictMode>,
)
