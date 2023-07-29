import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { AppRoutes } from './routes'
import { Reset } from 'styled-reset'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Reset />
    <RouterProvider router={AppRoutes} />
  </React.StrictMode>,
)
