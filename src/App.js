import { useEffect } from 'react';
import List from './artist/List';
import { Header } from "./shared/components";
import Container from '@mui/material/Container';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Details from './artist/Details';
import { useDispatch } from 'react-redux';
import { searchArtist } from './artist/slice/artistSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchArtist('eminem'));
  })
  return (
    <>
      <Header />
      <Container sx={{ marginTop: 5, marginBottom: 5 }}>
        <BrowserRouter>
          <Routes>
            <Route path="/deezer" element={<List />} />
            <Route path="/deezer/artist/:artistId/details" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </>
  );
}

export default App;
