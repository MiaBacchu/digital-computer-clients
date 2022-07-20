import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { AiFillPhone } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';

const SharedBanner = () => {
    return (
        <Box sx={{ display: 'flex' }}>
            <Box sx={{width:'50%'}}>
            <Typography sx={{ color:'error.main',py:4,fontWeight: 'bold' }} variant="h4" component="div">
            DIGITAL COMPUTER
            <Typography sx={{ color:'grey.900' }} variant="h4">
            & TRAINING CENTER
            </Typography>
          </Typography>
            </Box>
            <Box sx={{ display: 'flex',width:'50%',justifyContent: 'space-evenly',alignItems: 'center' }}>
            <Typography sx={{ display: 'flex' }}>
            <Typography variant='h4' sx={{bgcolor: 'error.main',color:'white', borderRadius: '50%',p:1,my:'auto',mx:2}}><AiFillPhone/></Typography>
            <Typography variant="h6" component="div" sx={{fontWeight: 'bold'}}>
            +880 185 5878684
            <Typography variant="h6" sx={{fontWeight: 'bold'}}>
            +880 194 7260999
            </Typography>
          </Typography>
            </Typography>
            <Typography sx={{ display: 'flex' }}>
            <Typography variant='h4' sx={{bgcolor: 'error.main',color:'white', borderRadius: '50%',p:1,my:'auto',mx:2}}><AiOutlineMail/></Typography>
            <Typography variant="h6" component="div">
            info@digitalcomputer.com
            <Typography variant="h6">
            info@digitalcomputer.com
            </Typography>
          </Typography>
            </Typography>
            </Box>
        </Box>
    );
};

export default SharedBanner;