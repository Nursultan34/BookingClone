import React from 'react';
import './Featured.css';

function Featured() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cdn.britannica.com/57/75757-050-122EC2ED/Changgyong-Palace-background-Seoul.jpg"
          className="featuredIcon"
          alt=""
        />
        <div className="featuredTitles">
            <h1>Seoul</h1>
            <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://img.geliophoto.com/bishkek/00_bishkek.jpg"
          className="featuredIcon"
          alt=""
        />
        <div className="featuredTitles">
            <h1>Bishkek</h1>
            <h2>532 properties</h2>
        </div>
      </div>
    
     
      <div className="featuredItem">
        <img
          src="https://media.cntraveller.com/photos/611bf0fb7048754865719e3a/4:3/w_1704,h_1278,c_limit/view-of-the-liffey-from-liberty-hall-dublin-ireland-conde-nast-traveller-4feb16-Tara-Morgan.jpg"
          className="featuredIcon"
          alt=""
        />
        <div className="featuredTitles">
            <h1>Dublin</h1>
            <h2>530 properties</h2>
        </div>
      </div>
    </div>
  );
}

export default Featured;
