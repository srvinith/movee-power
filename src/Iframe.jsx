import React from 'react';

const MapEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0 }}>
      <iframe
        src={`https://www.google.com/maps/d/embed?mid=1MV7L7fypyz6RMQVzDYUkjpazChqu94k&ehbc=2E312F`}
        style={{
          width: '100%',
          height: '100%',
          border: 0,
          overflow:'hidden'
        }}
        allowFullScreen
        loading="lazy"
        title="Google Map Embed"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
