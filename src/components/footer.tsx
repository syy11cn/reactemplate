import { useDark } from '~/utils'

const Footer = () => {
  const [isDark, toggleDark] = useDark()

  return <>
    {/* Toggle dark mode. */}
    <button className={`icon-btn ${isDark ? 'i-carbon-sun' : 'i-carbon-moon'}`} onClick={() => toggleDark()}></button>
    {/* Github icon. */}
    <a className="icon-btn i-carbon-logo-github" href="https://github.com/syy11cn/reactemplate"></a>
  </>
}

export default Footer
