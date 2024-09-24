import React, { useState } from 'react';
import {useTheme} from '@mui/material';

const CustomClock = ({ numbers }) => {
  const theme = useTheme();
  const calculateAllPoints = (size) => {
    const center = size / 2;

    var h1 = size / 2.2;
    var sl1 = Math.sin(Math.PI / 6) * h1;
    var ll1 = Math.sin(Math.PI / 3) * h1;
    const hpoints1 = `
        ${center - h1},${center}
        ${center - sl1},${center - ll1}
        ${center + sl1},${center - ll1}
        ${center + h1},${center} 
        ${center + sl1},${center + ll1}
        ${center - sl1},${center + ll1}
    `.trim().replace(/\s+/g, ' ');
    var endpoints = [[-h1, 0], [-sl1, -ll1], [sl1, -ll1], [h1, 0], [sl1, ll1], [-sl1, ll1]];

    // far left is 0, top left is 1, top right is 2, etc.
    var h2 = h1 * 0.95;
    var sl2 = Math.sin(Math.PI / 6) * h2;
    var ll2 = Math.sin(Math.PI / 3) * h2;
    const hpoints2 = `
        ${center - h2},${center} 
        ${center - sl2},${center - ll2}
        ${center + sl2},${center - ll2}
        ${center + h2},${center} 
        ${center + sl2},${center + ll2}
        ${center - sl2},${center + ll2}
    `.trim().replace(/\s+/g, ' ');

    const circ1 = ll2;
    const circ2 = circ1 * 0.7;
    const circ3 = circ1 * 0.4;

    return { center, hpoints1, hpoints2, circ1, circ2, circ3, endpoints };
  };

  const size = 400;
  const { center, hpoints1, hpoints2, circ1, circ2, circ3, endpoints } = calculateAllPoints(size);

  // ----------------------------------------------------------------------
  // states and functions necessary to render clickable lines
  // ----------------------------------------------------------------------
  const [strokeColors, setStrokeColors] = useState({
    inner: endpoints.map((_, index) => (index === 0 ? '#fdd71a' : '#252620')), 
    middle: endpoints.map((_, index) => (index === 1 ? '#fdd71a' : '#252620')), 
    outer: endpoints.map((_, index) => (index === 2 ? '#fdd71a' : '#252620')), 
    end: endpoints.map((_, index) => (index === 3 ? '#6dfcff' : '#252620')), 
  });

  const [isClicked, setIsClicked] = useState({
    inner: endpoints.map((_, index) => (index === 0 ? 1 : 0)), 
    middle: endpoints.map((_, index) => (index === 1 ? 1 : 0)),
    outer: endpoints.map((_, index) => (index === 2 ? 1 : 0)),
    end: endpoints.map((_, index) => (index === 3 ? 1 : 0)),
  });

  // Function to render lines based on type and corresponding state
  const renderLines = (scale, positioning, circleType) => {
    return endpoints.map(([x, y], index) => {
      const x2 = center + x * positioning;
      const y2 = center + y * positioning; 

      return (
        <line
          key={index}
          className={circleType}
          x1={x2 - (x * positioning * scale)}
          y1={y2 - (y * positioning * scale)}
          x2={x2}
          y2={y2}
          stroke={strokeColors[circleType][index]} // Use the appropriate stroke color
          strokeWidth={circleType == 'end' ? '20': '10'}
          style={{ cursor: 'pointer' }}
          onClick={() => handleLineClick(index, circleType)} // Pass index and circle type
          isclicked={isClicked[circleType][index]} // Use the appropriate stroke color
          data-index={index}
        />
      );
    });
  };

  // Function to handle line clicks and update corresponding stroke colors
  const handleLineClick = (index, circleType) => {
    setStrokeColors((prevColors) => ({
      ...prevColors,
      [circleType]: prevColors[circleType].map((color, i) => (i === index ? (circleType == 'end' ? '#6dfcff' : '#fdd71a'): '#252620')) // Change color for the clicked line
    }));

    setIsClicked((prevIsClicked) => ({
      ...prevIsClicked,
      [circleType]: prevIsClicked[circleType].map((clicked, i) => (i === index ? 1 : 0)) // Change color for the clicked line
    }));
  };

  // ----------------------------------------------------------------------
  // renders the bulbs on the outside (solution goal)
  // ----------------------------------------------------------------------


  // ----------------------------------------------------------------------
  // return function
  // ----------------------------------------------------------------------
  return (
    <svg width={size} height={size}>
      <defs>
        <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
          <feDropShadow dx="3" dy="3" stdDeviation="5" floodColor="black" floodOpacity="0.5" />
        </filter>
      </defs>
  
      <polygon
        points={hpoints1}
        fill="#213548"
        stroke="black"
        strokeWidth="0"
        filter="url(#shadow)" // Add shadow effect here
      />
  
      <polygon
        points={hpoints2}
        fill="#4d5051"
        stroke="black"
        strokeWidth="0"
        filter="url(#shadow)" // Add shadow effect here
      />
  
      <circle
        cx={center}
        cy={center}
        r={circ1}
        fill="#4d5051"
        stroke="#232628"
        strokeWidth="2"
        filter="url(#shadow)" // Add shadow effect here
      />
      
      {renderLines(0.19, 0.8, 'outer')} {/* Render outer lines */}
  
      <circle
        cx={center}
        cy={center}
        r={circ2}
        fill="#4d5051"
        stroke="#232628"
        strokeWidth="2"
        filter="url(#shadow)" // Add shadow effect here
      />
  
      {renderLines(0.275, 0.55, 'middle')} {/* Render middle lines */}
  
      <circle
        cx={center}
        cy={center}
        r={circ3}
        fill="#4d5051"
        stroke="#232628"
        strokeWidth="2"
        filter="url(#shadow)" // Add shadow effect here
      />
  
      {renderLines(0.5, 0.3, 'inner')} {/* Render inner lines */}

      {renderLines(0.1, 1.01, 'end')} {/* Render inner lines */}

    </svg>
  );
};

export default CustomClock;
