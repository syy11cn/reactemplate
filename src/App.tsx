import { useRoutes } from 'react-router-dom'
import Footer from './components/footer'
import { routes } from './routes'

const App = () => {
  return <>
    <p>hello world</p>
    {useRoutes(routes)}
    <Footer></Footer>
  </>
}

export default App
