import styles from './header.module.scss'

export default function Header() {
  return (
    <header className={styles.nav}>
      <article className={styles.navBrand}>
        <h1 className={styles.navBrandTitle}>
          DogPound
        </h1>
      </article>
      <nav className={styles.navContainer}>
        <ul className={styles.navLinks}>
          <li className={styles.navLink}>Home</li>
          <li className={styles.navLink}>About</li>
          <li className={styles.navLink}>Contact</li>
        </ul>
      </nav>
    </header>
  )
}
