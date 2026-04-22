'use client'

import { useState, useEffect } from 'react'
import styles from './styles.module.scss'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`${styles.header} ${scrolled ? styles['header--scrolled'] : ''}`}>
      <div className={`container ${styles.header__inner}`}>
        <a href="#hero" className={styles.header__logo} onClick={closeMenu}>
          Tiago Schmidt
        </a>

        <nav className={`${styles.header__nav} ${menuOpen ? styles['header__nav--open'] : ''}`}>
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className={styles.header__link}
              onClick={closeMenu}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className={styles.header__actions}>
          <button
            className={`${styles.header__burger} ${menuOpen ? styles['header__burger--open'] : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
