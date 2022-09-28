import logoIgnite from '../../assets/logo-ignite.svg'
import styles from './Header.module.css'

export const Header = () => {
  const { header, h__image, h__title } = styles;

  return (
    <header className={header}>
      <img className={h__image} src={logoIgnite} alt="Ignite Logo" />
      <h1 className={h__title}>Feed</h1>
    </header>
  )
}