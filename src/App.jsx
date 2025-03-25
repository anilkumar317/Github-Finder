import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/layouts/Alert';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import { GithubProvider } from './context/github/GithubContext.jsx';
import { AlertProvider } from './context/alert/AlertContext';
import GithubContext from './context/github/GithubContext';
import User from './pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex-col justify-between ">
            <Navbar title="Github Finder" />
            <Alert />
            <main className="container  mx-auto px-3 pb-12 ">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/user/:login" element={<User />} />
                <Route path="/notfound" element={<NotFound />} />
                <Route path="/*" element={<NotFound />} />
              </Routes>
            </main>
          </div>
        </Router>
      </AlertProvider>
    </GithubProvider>
  );
}

export default App;
