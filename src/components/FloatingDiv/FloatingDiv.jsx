import React from "react";

const FloatinDiv = ({img, text1, text2}) => {
  const divStyle = {
    justifyContent: 'space-around',
    background: 'white',
    boxShadow: 'var(--boxShadow)',
    borderRadius: '17px',
    display: 'flex',
    alignItems: 'center',
    padding: '0px 28px 0px 0px',
    height: '4.5rem'
  };

  const imgStyle = {
    transform: 'scale(0.4)'
  };

  const spanStyle = {
    fontFamily: 'sans-serif',
    fontSize: '16px',
    color: 'black' 
  };

  return (
    <div style={divStyle}>
      <img src={img} alt="" style={imgStyle} />
      <span style={spanStyle}>
        {text1}
        <br/>
        {text2}
      </span>
    </div>
  );
};

export default FloatinDiv;
