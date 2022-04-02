import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  return <>
    <p>hello world</p>
    {useRoutes(routes)}
  </>
}

export default App
