import './App.css';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import Home from './Pages/Home';
import Login from './Pages/Login';
import PostCard from './Components/PostCard';
import Activity from './Pages/Activity';
import Account from './Pages/Account';
import Signup from './Pages/Signup';
import CreatePost from './Components/CreatePost';
import Rules from './Pages/Rules'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { auth } from './Firebase/firebase';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [sidebar,setSidebar]=useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false); // ✅ Wait until Firebase finishes
    });
    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <Router>
      <ToastContainer />
      {user && <Header   setSidebar={setSidebar} />}
      <div className={`flex h-screen ${user ? 'pt-20' : ''}  bg-background`}>
        {user &&sidebar&& <Sidebar/>}
        <div className={`${user&&sidebar?'ml-[13%]':''} flex-1 overflow-y-auto `}>
          <Routes>
            {/* ✅ PROTECTED HOME ROUTE */}
            <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />
            {/* ✅ OPEN ROUTES */}
            <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} />
            <Route path="/signup" element={!user ? <Signup /> : <Navigate to="/" />} />
            {/* ✅ PROTECTED ROUTES */}
            <Route path="/posts" element={user ? <PostCard /> : <Navigate to="/login" />} />
            <Route path="/activity" element={user ? <Activity /> : <Navigate to="/login" />} />
            <Route path="/account" element={user ? <Account /> : <Navigate to="/login" />} />
            <Route path="/create" element={user ? <CreatePost /> : <Navigate to="/login" />} />
             <Route path="/rules" element={user ? <Rules /> : <Navigate to="/login" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
