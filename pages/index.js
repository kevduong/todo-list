import { Fragment } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import StyledWrapper from '../components/elements/Wrapper';

const Main = styled.div`
  background: linear-gradient(to left,#CEFCED,#D6BBF8);
`;

const Index = () => (
  <Main>
    <Head>
      <title>Todo List 📋</title>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    </Head>
    <Nav />
    <StyledWrapper />
  </Main>
);

export default Index;