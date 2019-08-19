import Nav from '../components/Nav/Nav';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography'
;
const Main = styled.div`
  background: linear-gradient(to left,#CEFCED,#D6BBF8);
  height: 100vh;
  border: none;
`;

const StyledPaper = styled(Paper)`
  background: url('https://66.media.tumblr.com/77d873c4239ac046fcddb443d8f3fc5c/tumblr_mhbaikxIQE1re1fojo1_540.jpg');
  background-size: fill;
  height: 50%;
  width: 50%;
  margin: 0 auto;
  background-repeat: no-repeat;
`;

export default function About() {
  return (
    <Main>
     <Nav />
     <StyledPaper>
      <Typography variant="h6" component="h3" color="primary">
       This page was created for fun and learning!
      </Typography>
     </StyledPaper>
    </Main>
  )
}