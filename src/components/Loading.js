import React from 'react';
import '../loading.css';

export default function Loading() {
  return (
    <div className="loading-wrapper">
      <h1 className="loading-text">Loading...</h1> {/* add loading text */}
      <div className="container">
        <div className="row rowc">
          <div className="circle c1"></div>
          <div className="circle c2"></div>
        </div>
        <div className="row2 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row3 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row4 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row5 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row6 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row7 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row8 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row9 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row10 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row11 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row12 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
        <div className="row13 rowc"><div className="circle c1"></div><div className="circle c2"></div></div>
      </div>
    </div>
  );
}
