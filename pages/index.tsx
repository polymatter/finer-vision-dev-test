import type { NextPage } from 'next'
import Head from 'next/head'
import Section1 from '../components/Section1'
import styled, { ThemeProvider } from "styled-components";
import theme from "../shared/colors";
import { useState } from "react";
import Section2 from '../components/Section2';
import Section3 from '../components/Section3';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
  background: ${props => props.theme.background};
`;

const Wrapper = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px #777777;
`;

const Home: NextPage = () => {
  const [openedSection, setOpenedSection] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <div>
        <Head>
          <title>Finer Vision Dev Test {openedSection}</title>
          <meta name="description" content="A developer test for Finer Vision" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Main>
          <Wrapper>
            <Section1 isOpen={openedSection === 1} onClick={() => setOpenedSection(1)} nextSection={() => setOpenedSection(2)} />
            <Section2 isOpen={openedSection === 2} onClick={() => setOpenedSection(2)} nextSection={() => setOpenedSection(3)}/>
            <Section3 isOpen={openedSection === 3} onClick={() => setOpenedSection(3)} nextSection={() => {}}/>
          </Wrapper>
        </Main>
      </div>
    </ThemeProvider>
  )
}

export default Home
