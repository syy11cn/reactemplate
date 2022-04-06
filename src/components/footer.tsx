import { useDark } from '~/utils'

const Footer = () => {
  const [isDark, toggleDark] = useDark()

  return <footer className="mt-8">
    {/* Toggle dark mode. */}
    <button className={`icon-btn ${isDark ? 'i-carbon-sun' : 'i-carbon-moon'}`} onClick={() => toggleDark()}></button>
    {/* Github icon. */}
    <a className="icon-btn i-carbon-logo-github ml-2" href="https://github.com/syy11cn/reactemplate"></a>
  </footer>
}

export default Footer
