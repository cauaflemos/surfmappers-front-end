import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Reset } from 'styled-reset'
import GlobalStyle from './global/theme'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <GlobalStyle />
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>,
)
