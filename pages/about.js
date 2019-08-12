import Nav from '../components/Nav/Nav';
import styled from 'styled-components';

const Main = styled.div`
  background: linear-gradient(to left,#CEFCED,#D6BBF8);
  height: 100vh;
  border: none;
`;

export default function About() {
  return (
    <Main>
      <Nav />
      <p>This is an about page</p>
    </Main>
  )
}