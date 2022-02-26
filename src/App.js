import './App.scss'
import { BrowserRouter as Router} from 'react-router-dom'
import Page from './Components/Page'

function App() {
  return  (
    <Router basename='/'>
    <Page />        
    </Router>
  )

}

export default App
