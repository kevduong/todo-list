import Head from 'next/head';
import HeaderNav from '../components/HeaderNav/HeaderNav';
import StyledWrapper from '../components/elements/Wrapper';

const Index = () => (
  <div>
    <Head>
      <title>Todo List</title>
      <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css" />
    </Head>
    <HeaderNav />
    <StyledWrapper />
  </div>
);

export default Index;