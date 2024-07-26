

import React from 'react';
import { makeStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Button, createTheme } from '@mui/material';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  'https://websitedemos.net/eggcellent-restaurant-04/wp-content/uploads/sites/1220/2023/03/hero-01.jpg',
  'https://websitedemos.net/eggcellent-restaurant-04/wp-content/uploads/sites/1220/2023/03/hero-02.jpg',
  'https://websitedemos.net/eggcellent-restaurant-04/wp-content/uploads/sites/1220/2023/03/hero-03.jpg'
];

const useStyles = makeStyles({
  swipeableViewsContainer: {
    position: 'relative',
  },
  secondBox: {
    width: '100%',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    color: 'white',
  }
});

function MainSection() {
  const [activeStep, setActiveStep] = React.useState(0);
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const classes = useStyles();

  return (
    <Box className={classes.swipeableViewsContainer}>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((image, index) => (
          <Box key={index}>
            <Box
              component="img"
              sx={{
                display: 'block',
                overflow: 'hidden',
                width: '100%',
                position: 'relative',
              }}
              src={image}
              height="36rem"
            />
          </Box>
        ))}
      </AutoPlaySwipeableViews>
      <Box
        sx={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          opacity: 0.5, // Optional: Adjust opacity for better visibility
        }}
      />
      <Box className={classes.secondBox}>
        <h1 style={{
          fontFamily: 'Alex Brush, cursive',
          fontSize: "100px",
          letterSpacing: "2px",
          marginBottom: "0px"
        }}
          data-aos="flip-left" data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >crack, cook, enjoy</h1>
        <p style={{ fontSize: "20px", margin: "0px" }}>Eggstraordinary flavors for any appetite</p>
        <Button style={{ fontFamily: 'Anton,sans-serif', fontSize: "20px", marginTop: "3rem" }} variant='outlined' sx={{ border: "1px solid white",
          "&:hover": { border: "1px solid white" },
          borderRadius: "20px", color: "white", fontSize: "1rem", fontWeight: "bold" }}>View menu</Button>
      </Box>
    </Box>
  );
}

export default MainSection;
