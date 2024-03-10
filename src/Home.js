import React from 'react';

const Home = ({ bannerData, listingData, playVideo, videoUrl }) => (
  <div>
    <h2>Home Page</h2>
    {/* Banner section */}
    {bannerData.map((item) => (
      <div key={item.card_name}>
        <h3>{item.card_name}</h3>
        <div>
          {item.content_list.map((content) => (
            <img
              key={content.content_id}
              src={content.image_url}
              alt={content.name}
              onClick={() => playVideo(videoUrl)}
            />
          ))}
        </div>
      </div>
    ))}

    {/* Listing section */}
    {listingData.map((item) => (
      <div key={item.card_name}>
        <h3>{item.card_name}</h3>
        <div>
          {item.content_list.map((content) => (
            <img
              key={content.content_id}
              src={content.image_url}
              alt={content.name}
              onClick={() => playVideo(videoUrl)}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Home;
