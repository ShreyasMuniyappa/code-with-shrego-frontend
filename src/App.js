import { useEffect } from 'react';
import './App.css';
import AuthPage from './pages/authPage';
import { Cookies } from "react-cookie";
import {
  Route,
  Routes,
  BrowserRouter as Router,
} from "react-router-dom";
import HomePage from './pages/homePage';

function App() {
  const { cookies } = new Cookies()

  useEffect(() => {
    const user = cookies?.user ? JSON.parse(cookies.user) : {}
    if (!user?.uid && window.location.pathname !== '/sign-in') {
      window.location.href = '/sign-in'
    }
  }, [cookies])

  if (!cookies) {
    return <>Loading...</>
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/sign-in" element={<AuthPage />} />
          <Route exact path="/" element={<HomePage />} />
          <Route path="/*" element={<>Not Found</>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
