
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './beauty/custom.css'
import './beauty/responsive.css'

import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    </BrowserRouter>

)
