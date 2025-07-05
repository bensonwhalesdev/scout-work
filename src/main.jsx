import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Toaster richColors position="top-center" />
    <RouterProvider router={App} />
  </StrictMode>,
)
