import { createRoot } from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'

const root = createRoot(document.querySelector('#root') as HTMLElement)
root.render(<App />)
