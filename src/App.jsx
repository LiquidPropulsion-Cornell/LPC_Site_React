import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './Home';
import Members from './Members';
import Subteams from './Subteams';
import TopBar from './TopBar';
function App() {

  return (
    <BrowserRouter>
      <div>
        <TopBar />
        <Routes>
          <Route path="/" element={
            <Navigate replace to={`/home`} />
          } />
          <Route path="/home" element={<Home />} />
          <Route path="/members" element={<Members />} />
          <Route path="/subteams" element={<Subteams />} />
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
