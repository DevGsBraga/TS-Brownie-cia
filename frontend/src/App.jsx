import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// PAGES
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Products from './pages/Products/Products';
import NavBar from './components/NavBar';

// COMPONENTS




function App() {


  return (
    <>
    <Router>
          <NavBar />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />
        </Routes>

    </Router>
    </>
  )
}

export default App
