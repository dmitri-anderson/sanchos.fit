import { useEffect, useState } from 'react'
import Button from './components/Button'
import { ShoppingBasket, XmarkCircle } from '@vectoricons/atlas-icons-react'
import './App.scss'

function App() {
  const [theme, setTheme] = useState<'rosepine' | 'rosepine-dawn'>('rosepine')

  useEffect(() => {
    const el = document.documentElement
    const existing = el.getAttribute('data-theme')
    if (existing === 'rosepine' || existing === 'rosepine-dawn') {
      setTheme(existing)
    } else {
      el.setAttribute('data-theme', 'rosepine')
      setTheme('rosepine')
    }
  }, [])

  const toggleTheme = () => {
    const next = theme === 'rosepine' ? 'rosepine-dawn' : 'rosepine'
    document.documentElement.setAttribute('data-theme', next)
    setTheme(next)
  }

  return (
    <>
      <div className="stack">
        <Button label="buy now" iconComponent={ShoppingBasket} variant="primary" onClick={toggleTheme} />
        <Button label="cancel" iconComponent={XmarkCircle} variant="secondary" />
      </div>
    </>
  )
}

export default App
