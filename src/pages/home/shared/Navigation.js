import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

  const Navigation = () => {
  
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position='sticky' sx={{ bgcolor: 'white', color:'grey.800'}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Courses
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Admission
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Job Placement
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Freelancing
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Others
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Blog
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ctg Branch
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Contact
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, bgcolor: 'error.main',color:'white',lineHeight: 5 }}>
            Seminars
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Navigation;