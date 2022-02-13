import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from './views/Dashboard/Index'
import Akun from './views/Akun/Index'
import DetailAlamat from './views/DetailAlamat/Index'
import SearchAlamat from './views/SearchAlamat/Index'

function App() {
  return (
    <BrowserRouter>
      <main className="App">
        <Routes>
          <Route path="/akun" element={<Akun />} />
          <Route path="/detail-alamat" element={<DetailAlamat />} />
          <Route path="/search-alamat" element={<SearchAlamat />} />
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </BrowserRouter >
  );
}

export default App;

// import './App.css';
// div className="App">