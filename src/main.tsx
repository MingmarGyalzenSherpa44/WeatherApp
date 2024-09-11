import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import "./sass/index.scss"
import WeatherProvider from './contexts/WeatherContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WeatherProvider>
    <App />
    </WeatherProvider>
  </StrictMode>
)
