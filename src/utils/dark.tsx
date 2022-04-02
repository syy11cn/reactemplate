export function useDark() {
  const [value, setValue] = useState<string>(window.localStorage.getItem('colorSchema') || 'auto')
  const toggleDark = () => {
    setValue(value === 'auto' ? 'dark' : 'auto')
    window.localStorage.setItem('colorSchema', value)
  }
  const isDark = value === 'dark'

  if (document)
    useEffect(() => { document.documentElement.classList.toggle('dark', isDark) })

  return [isDark, toggleDark]
}
