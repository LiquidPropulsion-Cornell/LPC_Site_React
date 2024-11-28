import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Subteams from './Subteams';
function App() {

  return (
    <BrowserRouter basename="/LPC_Site_React">
      <Routes>
        <Route path="/" element={
          <Navigate replace to={`/home`} />
        } />
        <Route path="/home" element={<Home />} />
        <Route path="/members" element={<Members />} />
        <Route path="/subteams" element={<Subteams />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
