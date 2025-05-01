import React from "react";

const Loader = () => {
  return <div style={{     width: '100%',
    height: '100vh',
    position: 'fixed',
    zIndex: '555555',
    backgroundColor: '#000000cc',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'}}>
      <img style={{height:'10rem'}} src="https://cdn.pixabay.com/animation/2025/03/21/22/20/22-20-10-448_512.gif"  alt="" />
    </div>;
};

export default Loader;
