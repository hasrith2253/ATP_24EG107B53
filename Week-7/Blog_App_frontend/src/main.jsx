import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
<<<<<<<< HEAD:Week-5/Week5_Session3/src/main.jsx
// Navbar moved into App.jsx so import removed
import Demo from './components/Demo.jsx'
import FormDemo from './components/Form.jsx'
========
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_API_URL || ''
>>>>>>>> 8aa64fb3 (back):Week-7/Blog_App_frontend/src/main.jsx

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
