import React, { useEffect } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Location: React.FC = () => {
  useEffect(() => {
    const map = L.map('map').setView([38.7081, -121.281], 13); // Set the latitude and longitude coordinates

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Map data © <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
      maxZoom: 18,
    }).addTo(map);

    L.marker([38.7081, -121.281])
      .addTo(map) // Set the marker position
      .bindPopup('7635 Auburn Blvd, Citrus Heights, CA 95610') // Add the address as a popup message
      .openPopup();
  }, []);

  return (
    <div className="flex flex-col items-center w-full mt-5">
      <div className="w-full flex justify-center">
        <h4 className="p-10 text-4xl">Located In Sacramento California</h4>
      </div>
      <div className="w-11/12 m-4" id="map" style={{ height: '400px' }} />
    </div>
  );
};

export default Location;
