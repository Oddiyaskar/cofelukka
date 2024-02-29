import React from 'react';
import './App.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Onepage from './Components/1page/1page';
import TwoPage from './Components/2page/2page';
import ThreePage from './Components/3page/3page';
import Error from './Components/Page/Error/Error';
import Home from './Components/Page/Home/Home';
import Profile from './Components/Page/Profile/Profile';
import { Context } from './Components/Context/Theme';

function App() {
  const navigate = useNavigate()
  const {theme} = React.useContext(Context)

  return (
    <div className={`app app__${theme}`}>
      <button className='app__btn' onClick={() => navigate('Profile')}>Profile</button>
      <button className='app__btn' onClick={() => navigate(1)}>Oldinga</button>
      <button className='app__btn' onClick={() => navigate(-1)}>Orqaga</button>

      <Header />

      <Routes>
        <Route path='' element={<Home />} />
        <Route path='Home' element={<Onepage />} />
        <Route path='About' element={<TwoPage />} />
        <Route path='Create' element={<ThreePage />} />
        <Route path='Profile' element={<Profile />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;