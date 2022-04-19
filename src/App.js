import List from './artist/List';
import { Header } from "./shared/components";
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './artist/Details';

function App() {
  return (
    <>
      <Header />
      <Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/deezer" element={<List />} />
            <Route path="/artist/:artistId/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
