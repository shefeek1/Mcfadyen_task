import './App.css';
import Navbar from './componenets/Navbar';
import {Container} from 'react-bootstrap'
import Home from './componenets/Home';
import Footer from './componenets/Footer';

function App() {
  return (
    <div className="App">
     
      <Navbar />
      <main className='main1 mt-4'>
        <Container fluid>
          <Home/>
        </Container>
      </main>
     
     <Footer/>
    </div>
  );
}

export default App;
