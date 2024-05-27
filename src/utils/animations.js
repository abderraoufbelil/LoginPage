export const Slide = {
    initial: { x: 0 },
    animation: {
      x: "100%",
      borderTopLeftRadius: "200px",
      borderBottomLeftRadius: "200px",
      borderTopRightRadius: "20px",
      borderBottomRightRadius: "20px",
      transition: { duration: 0.5 },
    },
    animated: {
      x: 0,
      borderTopRightRadius: "200px",
      borderBottomRightRadius: "200px",
      borderTopLeftRadius: "20px",
      borderBottomLeftRadius: "20px",
      transition: { duration: 0.5 },
    },
  };
  export  const fadeInAnimation = {
    initial: {
      x: -100,
      opacity: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };


  export const fadeAnimation= {
    fadeout: {
      
      opacity: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
    fadein: {
     
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  
  };
  export const fadeAnimation1= {
    fadeout1: {
      
      opacity: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
    fadein1: {
     
      opacity: 1,
      transition: { duration: 0.5, delay: 0.2 },
    },
  
  };