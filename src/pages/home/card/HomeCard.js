import React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const HomeCard = () => {
    return (
        <Box sx={{display:'flex',justifyContent:'space-evenly',width:'75%',mx:'auto'}}>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ pt:2,pb:5}}>
        <Box>
          <img style={{width:'25%',height:'5rem',marginBottom:'15px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
        </Box>
          <Typography variant="h6" color="text.secondary">
          10 YEARS OF EXCELLENCE
          </Typography>
      </CardActionArea>
    </Card>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ pt:2,pb:5 }}>
        <Box>
          <img style={{width:'25%',height:'5rem',marginBottom:'15px'}} src="https://i.ibb.co/Lrwh3NZ/download.jpg" alt="" />
        </Box>
          <Typography variant="h6" color="text.secondary">
          5000+ TRAINED STUDENTS
          </Typography>
      </CardActionArea>
    </Card>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ pt:2,pb:5 }}>
        <Box>
          <img style={{width:'25%',height:'5rem',marginBottom:'15px'}} src="https://i.ibb.co/3sBt1B5/download-1.jpg" alt="" />
        </Box>
          <Typography variant="h6" color="text.secondary">
          1600+ JOB PLACEMENT
          </Typography>
      </CardActionArea>
    </Card>
          <Card sx={{ maxWidth: 345 }}>
      <CardActionArea sx={{ pt:2,pb:5 }}>
        <Box>
          <img style={{width:'25%',height:'5rem',marginBottom:'15px'}} src="https://www.futureeducators.org/wp-content/uploads/teacher-with-ideas.jpg" alt="" />
        </Box>
          <Typography variant="h6" color="text.secondary">
          100+ EXPERT TRAINERS
          </Typography>
      </CardActionArea>
    </Card>
        </Box>
    );
};

export default HomeCard;