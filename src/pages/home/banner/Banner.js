import { Box, Typography } from '@mui/material';
import React from 'react';

const Banner = () => {
    return (
        <Box sx={{display:'flex',alignItems:'center',m:10}}>
            <Typography sx={{ width:"50%", color:'error.main',py:4,fontWeight: 'bold' }} variant="h1" component="div">
            30+
            <Typography sx={{ color:'grey.800',fontWeight: 'bold' }} variant="h1">Trendy Courses</Typography>
            <Typography sx={{ color:'grey.600',fontWeight: 'bold' }} variant="h3">of all time</Typography>
          </Typography>
          <Box sx={{ width:"50%",color:'grey.900' }} variant="h4">
            <img style={{width:'60%'}} src="https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png" alt="" />
            </Box>
            </Box>
    );
};

export default Banner;