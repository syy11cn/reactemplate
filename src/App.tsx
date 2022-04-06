import { useRoutes } from 'react-router-dom'
import Footer from './components/footer'
import { routes } from './routes'

const App = () => {
  return <div className="text-center">
    {useRoutes(routes)}
    <Footer></Footer>
  </div>
}

export default App
