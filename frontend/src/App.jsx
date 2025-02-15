import './index.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { QueryClient, QueryClientProvider  } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

// PAGES
import Home from './pages/Home/Home';
import Contacts from './pages/Contacts/Contacts';
import Products from './pages/Products/Products';
import NavBar from './components/NavBar';

// COMPONENTS



const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Router>
            <NavBar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/contacts" element={<Contacts />} />
          </Routes>

      </Router>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
