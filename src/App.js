import React, { useState, useEffect } from 'react';
import Home from './Home';
import Registration from './Registration';
import Login from './Login';

const App = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [bannerData, setBannerData] = useState([]);
  const [listingData, setListingData] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Simulating API calls
    // Replace this with actual API calls
    const fetchBannerData = async () => {
      // API call to fetch banner data
      const response = await fetch('https://mocki.io/v1/783f8c69-af91-45ff-87df-e675c3f11fef');
      const data = await response.json();
      setBannerData(data.data);
    };

    const fetchListingData = async () => {
      // API call to fetch listing data
      const response = await fetch('https://mocki.io/v1/cead1ab5-8153-4557-a587-f6ebb2710769');
      const data = await response.json();
      setListingData(data.data);
    };

    fetchBannerData();
    fetchListingData();

    // Sample video URL
    setVideoUrl('https://www.youtube.com/watch?v=Hgeu5rhoxxY');
  }, []);

  const playVideo = (url) => {
    // Play video logic
    console.log('Playing video: ', url);
  };

  const handleLogin = () => {
    // Handle login logic
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Handle logout logic
    setIsLoggedIn(false);
  };

  return (
    <div>
      <h1>Registration and Login</h1>
      {isLoggedIn ? (
        <div>
          <button onClick={handleLogout}>Logout</button>
          <Home bannerData={bannerData} listingData={listingData} playVideo={playVideo} videoUrl={videoUrl} />
        </div>
      ) : (
        <div>
          <Registration />
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default App;
