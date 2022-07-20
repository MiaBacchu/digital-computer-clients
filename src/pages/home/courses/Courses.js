import { Box, Card, CardActionArea, Link, Typography } from '@mui/material';
import React from 'react';

const Courses = () => {
    return (
        <div>
        <Box sx={{display: 'flex',width:'75%',mx:'auto',bgcolor:'red'}}>
            <Box sx={{display:'grid',gridTemplateColumns: 'repeat(3, 1fr)',width:1/3}}>
        
            <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                <Typography color="text.secondary">
                    Graphic Design
                    </Typography>
            </CardActionArea>
            </Card>
        
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    Web Design
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    Web Development
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    Digital Marketing
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    Interior Design
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    Networking
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    App Development
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    UI/UX Design
                    </Typography>
            </CardActionArea>
        </Card>
        <Card>
            <CardActionArea sx={{ pt:2,pb:2 }}>
                <Box>
                <img style={{width:'25%',marginBottom:'5px'}} src="https://i.ibb.co/0ntQGpF/10yrseal.png" alt="" />
                </Box>
                    <Typography color="text.secondary">
                    3D Animation
                    </Typography>
            </CardActionArea>
        </Card>
                </Box>
            <Box sx={{display: 'flex',width:2/3}}>
                <Typography sx={{width:'50%'}}>hello</Typography>
                <Typography sx={{width:'50%'}}>hello 2</Typography>
                </Box>
        </Box>
        </div>
    );
};

export default Courses;