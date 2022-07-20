import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Details = () => {
    return (
        <Box sx={{width:'75%',mx:'auto',my:8,textAlign: 'left'}}>
            <Typography variant='h4'>Welcome to <span style={{color:'red'}}>Digital Computer & Training Center</span> : Where IT Leaders are Created</Typography>
            <Typography sx={{my:2}} variant='h6'>Digital Computer & Training Center, one of the leading IT training institutes in Bangladesh offers the best training opportunities. It has been playing a vital role to eradicate the unemployment problem since 2008. Enriched with quality training this institute has never failed to help the individuals to reveal their talents making harmony between creativity and IT. No matter what is your background, we are offering 30 courses for you conducted by experienced trainers to advance your skills.</Typography>
            <Typography variant='h6'>Digital Computer & Training Center has tremendously well-decorated two campuses with upgraded equipment. Our students are very much happy with our culture, environment and outstanding training method. We are passionate about providing good service to our students. Thus, the students of this institute turn out to be successful marketers and establish their careers in various companies as well. We dedicatedly provide flexible training options such as online training, 24/7 support, lifetime post-training support, job placement and so on. We always maintain the standards of excellence which are visible on Facebook Reviews and Google Reviews.</Typography>
        </Box>
    );
};

export default Details;