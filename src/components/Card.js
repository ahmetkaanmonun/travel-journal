import React from "react";

export default function Card({ country, image, title, date, description }) {
  return (
    <main className="card">
      <img className="card-image" src={`/assets/images/${image}`}></img>
      <div className="card-content">
        <div className="card-header">
          <img className="marker" src="/assets/images/marker.png"></img>
          <p className="country-name">{country}</p>
          <a href="www.google.com" className="map-link">
            View on Google Maps
          </a>
        </div>
        <h2 className="photo-title">{title}</h2>
        <p className="date">{date}</p>
        <p className="description">{description}</p>
      </div>
    </main>
  );
}
