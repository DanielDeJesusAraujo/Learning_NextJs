import React from 'react'
import styles from './page.module.css'
import MainContainer from '../components/MainContainer'

function About() {
  return (
    <MainContainer>
      <section className={styles.main_conteiner}>
        <section className={styles.content}>
          <h2>Bem-vindo à nossa incrível Pokédex Online!</h2>
          <p>
            Nossa Pokédex é a plataforma definitiva para todos os treinadores e entusiastas de 
            Pokémon que desejam mergulhar fundo no mundo dos monstrinhos de bolso. Com uma 
            combinação de tecnologias de ponta, incluindo React, Next.js, TypeScript, Fetch API, 
            Context API e a poderosa biblioteca Chart.js, criamos uma experiência envolvente e 
            informativa para os fãs de todas as idades.
          </p>
          <h2>Explore a Grandeza Pokémon</h2>
          <p>
            Nossa plataforma permite que você mergulhe em um universo repleto de informações detalhadas 
            sobre todos os Pokémon conhecidos. Com uma interface intuitiva e elegante, você pode facilmente 
            procurar seus Pokémon favoritos e explorar suas estatísticas, habilidades, tipos, evoluções e 
            muito mais. Cada Pokémon é apresentado em um card ricamente projetado, oferecendo uma 
            visão abrangente de suas características únicas.
          </p>
          <h2>Tecnologia que Impulsiona a Jornada</h2>
          <p>
            Utilizamos o poderoso ecossistema de desenvolvimento React e Next.js para criar uma 
            experiência de usuário rápida e fluida. O TypeScript garante um código mais seguro e 
            uma manutenção mais eficiente, enquanto a Fetch API possibilita a 
            busca rápida e confiável de dados Pokémon atualizados. A Context API é empregada para 
            gerenciar o estado global da aplicação, proporcionando uma navegação tranquila entre os 
            diferentes Pokémon. E, é claro, a integração da biblioteca Chart.js permite q
            sualize as estatísticas dos Pokémon em gráficos interativos.
          </p>
          <h2>Uma Jornada Interativa</h2>
          <p>
            Na nossa Pokédex, a exploração vai além da mera visualização de informações. Você pode 
            interagir com os cards dos Pokémon, alternando entre diferentes formas, evoluções e habilidades. 
            Nossa plataforma é projetada para encorajar a descoberta e a aprendizagem, permitindo que os 
            treinadores compreendam profundamente os atributos e a história por trás de cada Pokémon.
            Seja você um treinador experiente ou alguém que está apenas começando a jornada, nossa Pokédex é 
            um recurso inestimável para satisfazer sua curiosidade sobre o vasto mundo de Pokémon. Explore, 
            aprenda e divirta-se enquanto mergulha na riqueza de informações que temos a oferecer.
            Prepare-se para uma experiência de Pokémon como nenhuma outra. Bem-vindo à nossa Pokédex Online, 
            onde os Pokémon ganham vida através da tecnologia e da paixão!
          </p>
        </section>
      </section>
    </MainContainer>
  )
}

export default About