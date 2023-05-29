import React from 'react';

function Social(props:any){
    
  const svgStyle = {
    height: '30px',
    width: '30px',
  };

  const pathStyle = {
    fill: 'currentColor',
  };

  return (
    <a href={props.href} target="_blank">
      <svg xmlns="http://www.w3.org/2000/svg" style={svgStyle} fill="currentColor" viewBox="0 0 24 24">
      <path
        style={pathStyle}
        d={props.path}
      />
    </svg>
    </a>
    
  );
};

export default Social;