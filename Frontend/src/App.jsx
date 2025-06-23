// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import CreateDeal from './pages/CreateDeal.jsx';
import ViewDeals from './pages/ViewDeals.jsx';
import Home from './pages/Home.jsx';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className='min-h-screen w-full'>

      <Router>
        <Header />

        {/* Main content area */}
        <Routes>
          <Route path="/" element={<Register />} />         {/* Home route */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/create-deal" element={<CreateDeal />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
