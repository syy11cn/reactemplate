export function useDark() {
  const [value, setValue] = useState<string>(window.localStorage.getItem('color-schema') || 'auto')
  const toggleDark = () => {
    const newValue = value === 'auto' ? 'dark' : 'auto'
    setValue(newValue)
    window.localStorage.setItem('color-schema', newValue)
  }
  const isDark = value === 'dark'

  if (document)
    useEffect(() => { document.documentElement.classList.toggle('dark', isDark) })

  return [isDark, toggleDark] as [boolean, () => void]
}
