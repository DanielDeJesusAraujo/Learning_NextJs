'use client'
import MainContainer from './pages/MainContainer/page'
import Pokedex from './pages/pokedex'

export default function Home() {
  console.log('Home')
  return (
    <MainContainer>
      <Pokedex />
    </MainContainer>
  )
}
