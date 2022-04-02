import { useDark } from '~/utils'

const Footer = () => {
  const [isDark, toggleDark] = useDark()

  return <>
    {/* Toggle dark mode. */}
    <button className={isDark ? 'i-carbon-sun' : 'i-carbon-moon'} onClick={() => toggleDark()}></button>
    {/* Github icon. */}
    <button className="icon-btn i-carbon-github"></button>
  </>
}

export default Footer
