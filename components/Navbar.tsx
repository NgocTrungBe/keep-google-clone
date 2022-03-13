import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import {makeStyles} from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import {Menu as MenuIcon, Search as SearchIcon,AccountCircle,Clear as ClearIcon} from '@mui/icons-material';

import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import logoImage from '../public/keep_2020q4_48dp.png';
import { borderRadius } from '@mui/system';


const useStyles = makeStyles({
  root:{ 
      backgroundColor:'#fff', 
      boxShadow: 'none', 
      borderBottom: '1px solid #ececec'
  },
  logoImg:{
    width:'100%',
  }

});

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '3px',
  backgroundColor: "#F1F3F4",
 
  '&.active': {
    backgroundColor:'#fff',
    boxShadow: '0 1px 1px 0 rgb(65 69 73 /30%),0 1px 1px 0 rgb(65 69 73 /15%)',
  },
  marginRight: '30px',
  width: '100%',
  height:'48px',
  maxWidth:'720px',
  borderRadius:'8px',
  
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  marginLeft: '56px',
  marginRight: '49px',
  height: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const classes = useStyles();

  const searchRef = React.useRef(null);
  
  
  const handleInputClick = (e) =>{
  
 
          //searchRef.current.classList.add('active');
    
  }
//   const handleProfileMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
 
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>My account</MenuItem>
    </Menu>
  );

 

  return (
   
      <AppBar sx={{backgroundColor:'#fff',boxShadow:'none', borderBottom:'1px solid #ececec'}} position="static">
        <Toolbar sx={{justifyContent: 'space-between'}}>
          <Box sx={{display: 'flex',alignItems:'center',width:'15%',minWidth:'232px'}}>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2,marginRight:'5px'}}
          >
            <MenuIcon />
          </IconButton>
          <Box
          component="img"
          sx={{
            width: '40px',
            height: '40px',
            marginRight:'8px'
          }}
          alt='image'
          src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png'
          >
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' },color:'#5f6368',fontSize:'22px',fontWeight:'400'}}
          >
            Keep
          </Typography>
          </Box>
          
       
          <Box sx={{ display: { xs: 'none', md: 'flex' },justifyContent:'space-between',alignItems: 'center'  ,width:'75%'}}>
           <Search  ref={searchRef}>
           <SearchIconWrapper>
             <IconButton >
             <SearchIcon sx={{color:'#5f6368'}} />
             </IconButton>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              onFocus={handleInputClick}
            />
             <SearchIconWrapper sx={{right:0,top:0}}>
             <IconButton>
            <ClearIcon sx={{color:'#5f6368'}} />
            </IconButton>
            </SearchIconWrapper>
           
           </Search>
            <Box>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
        
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
            </Box>
          </Box>
          <Box sx={{ display: 'flex',alignItems: 'center', width:'10%'}}>
            <IconButton
              size="large"
              aria-label="show more"
             
              aria-haspopup="true"
           
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
  
  );
}

export default Navbar;
