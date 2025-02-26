import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';  // Correct BrowserRouter import
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import User from './User.jsx';
import CreateUser from './CreateUser.jsx';
import UpdateUser from './UpdateUser.jsx';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Corrected BrowserRouter */}
      <BrowserRouter>
        <Routes>
          {/* Ensure you are at the right path */}
          <Route path="/" element={<User/>} />
          <Route path="/create" element={<CreateUser />} />
          <Route path="/update" element={<UpdateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
