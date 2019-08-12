import { Fragment } from 'react';
import Head from 'next/head';
import Nav from '../components/Nav/Nav';
import StyledWrapper from '../components/elements/Wrapper';
import styled from 'styled-components';

const Main = styled.div`
  background: linear-gradient(to left,#CEFCED,#D6BBF8);
`;

const Index = () => (
  <Main>
    <Head>
      <title>Todo List</title>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
      <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"/>
    </Head>
    <Nav />
    <StyledWrapper />
  </Main>
);

export default Index;