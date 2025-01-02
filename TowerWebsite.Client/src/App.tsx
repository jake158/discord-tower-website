import { Grid, GridItem } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import WelcomePage from './pages/WelcomePage';
import TosPage from './pages/TosPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  return (
    <Router>
      <Grid templateRows="auto 1fr" height="100vh">
        <GridItem>
          <NavBar />
        </GridItem>
        <GridItem bg="teal">
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/tos" element={<TosPage />} />
            <Route path="/dashboard" element={<DashboardPage />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
