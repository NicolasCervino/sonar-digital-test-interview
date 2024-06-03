import './App.css';
import { Route, Routes } from 'react-router-dom';
import JokesPage from './routes/JokesPage';
import FormPage from './routes/FormPage';
import Navbar from './components/Navbar';
import { Container } from '@mui/material';

function App() {

  return (
    <>
      <Navbar />
      <Container sx={{ display: 'flex', flexDirection: 'column', flex: '1', justifyContent: 'center' }}>
        <Routes>
          <Route path='/' element={<JokesPage />} />
          <Route path='/form' element={<FormPage />} />
        </Routes>
      </Container >
    </>
  );
}

export default App;
