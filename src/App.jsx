import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './Home';
import Members from './Members';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Navigate replace to={`/home`} />
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
      </Routes>

    </BrowserRouter>
  )
}

export default App
