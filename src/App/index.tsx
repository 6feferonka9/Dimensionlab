import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import { Flow } from '../Components';
import './App.css';

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  height: 40px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #eee;  
  padding: 0 1rem;
`;

function App() {
  return (
    <Container>
      <Header className="App-header">
        App by Martin Mali
      </Header>
      <RecoilRoot>
        <Flow />
      </RecoilRoot>
    </Container>
  );
}

export default App;
