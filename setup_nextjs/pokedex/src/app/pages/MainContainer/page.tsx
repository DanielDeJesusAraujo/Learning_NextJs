import { ReactNode } from 'react'
import Header from '../../../components/header/page'
import Footer from '../../../components/footer/page'
import styles from './page.module.css'

function MainContainer({ children }: { children: ReactNode }) {
  return (
    <main className={styles.main_conteiner}>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainContainer