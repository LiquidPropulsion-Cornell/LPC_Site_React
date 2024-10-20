import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './Home';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navigate replace to={`/home`} />
        } />

        <Route path="/home" element={<Home />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
