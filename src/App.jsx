import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Alert from './components/layouts/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import { GithubProvider } from './context/github/GithubContext.js';
import { AlertProvider } from './context/alert/AlertContext';
import User from './components/pages/User';

function App() {
  return (
    <GithubProvider>
      <AlertProvider>
        <Router>
          <div className="flex-col justify-betweenv  ">
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
