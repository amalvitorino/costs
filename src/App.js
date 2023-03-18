import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import Container from './components/layout/Container';
import Footer from './components/layout/Footer';
import Navabar from './components/layout/Navbar';
import Company from './components/pages/Company';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import NewProject from './components/pages/NewProject';
import Project from './components/pages/Projects';

function App() {
  return (
    <Router>
      
      <Navabar/>

      <Container costumClass="min-height">
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
          <Route path='/company' element={<Company />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/newproject' element={<NewProject />} />

        </Routes>
      </Container>

      <Footer />
    </Router>

  )
}

export default App;
