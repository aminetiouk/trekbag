import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App'

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('❌ Root element not found in the DOM!');
}

createRoot(rootElement as HTMLElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);