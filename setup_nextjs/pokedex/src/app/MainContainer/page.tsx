import React from 'react'
import Header from '../components/header/page'
import Footer from '../components/footer/page'

function MainContainer({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default MainContainer