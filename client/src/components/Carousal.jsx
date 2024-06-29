
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, Button, Typography, Box } from '@mui/material';

const items = [
  {
    name: 'Modern furniture',
    description: 'Find the perfect sofa for your living room.',
    image: '/images/caro1.jpg',
  },
  {
    name: 'Elegant furniture',
    description: 'Add elegance to your dining room with our chairs.',
    image: '/images/caro2.jpg',
  },
  {
    name: 'Elegant furniture',
    description: 'Add elegance to your dining room with our chairs.',
    image: '/images/caro3.jpg',
  },

];

const CarouselComponent = () => {
  return (
    <Carousel>
      {items.map((item, index) => (
        <Paper
          key={index}
          sx={{
            position: 'relative',
            height: '100vh',
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#fff',
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          />
          <Box sx={{ position: 'relative', zIndex: 1 }}>
            <Typography variant="h2" component="h1" gutterBottom>
              {item.name}
            </Typography>
            <Typography variant="h5" component="p" gutterBottom>
              {item.description}
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button variant="contained" color="primary">
                Explore
              </Button>
              <Button variant="contained" color="secondary">
                Buy Furniture
              </Button>
            </Box>
          </Box>
        </Paper>
      ))}
    </Carousel>
  );
};

export default CarouselComponent;
