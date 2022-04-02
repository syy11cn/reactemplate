import { useRoutes } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  return <div>
    <p>hello world</p>
    {useRoutes(routes)}
  </div>
}

export default App
