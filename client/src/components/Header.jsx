import * as React from 'react';
import useState from 'react'
// import AppBar from '@mui/material/AppBar';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
// import { makeStyles } from '@material-ui/styles';
import { makeStyles, useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';
import { withRouter } from 'react-router-dom'
import { Button } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
  root: {
    flex: 1,
  },
  appbar:{
    // backgroundColor: 'primary',
    height: 90,
    padding: 10
  },
  menuBtn: {
    //by default theme spacing is 8px, here 2 means 2*8
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down('xs')]:{
      flex: 1,
    }
  },
  headerBtn:{
    display: "flex",
    flex: 1,
    justifyContent: "space-between",
    marginLeft: theme.spacing(14)
    // backgroundColor: '#ff00ff'
  },
  // headerBtnParent:{
  //   display: 'flex',
  //   justifyContent: 'space-between'
  // }
}));

const Header = (props) => {
  const classes = useStyles();
  // console.log(props);
  const { history } = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'));
  // console.log(isMobile);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClick = (pageURL) => {
    history.push(pageURL);
    setAnchorEl(null);
  };
  // const handleClickButton = (pageURL) => {
  //   history.push(pageURL);
  // }

  return (
    <div className={classes.root}>

      <AppBar position="static" className={classes.appbar}>
        <Toolbar>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className={classes.title}>
            Photos
          </Typography>

          <div>
            {isMobile ? (
              <>
                <IconButton
                  size="large"
                  className={classes.menuBtn}
                  aria-controls="menu-appbar"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton> 
                 <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={() => setAnchorEl(null)}
                >
                  <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem>
                  <MenuItem onClick={() => handleMenuClick('/SaleInvoice')}>Sale invoice</MenuItem>
                  <MenuItem onClick={()=>handleMenuClick('/AddStockItems')}>Add Stock items</MenuItem>
                  <MenuItem onClick={()=>handleMenuClick('/ItemsList')}>All stock</MenuItem>
                </Menu>
              </>  
            )        //Mobile theme end 
              :          
               (
              
               <div className={classes.headerBtn}>
              <Button variant="contained" onClick={() => handleMenuClick('/') }>Home</Button>
             <Button variant="contained" onClick={() => handleMenuClick('/SaleInvoice') }>sale invoice</Button>
              <Button variant="contained" onClick={() => handleMenuClick('/AddStockItems') }>Add Stock items</Button>
              <Button variant="contained" onClick={() => handleMenuClick('/ItemsList') }>All stock</Button>
              
                </div>
            )}


          </div>

        </Toolbar>
      </AppBar>


    
    </div>
  );
}
export default withRouter(Header)




















// import React from "react";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

// const options = ["apple", "orange", "grape"];

// export default function App() {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const [selectedIndex, setSelectedIndex] = React.useState(1);

//   const handleClickListItem = event => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuItemClick = (event, index) => {
//     setSelectedIndex(index);
//     setAnchorEl(null);
//   };

//   const handleClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <div>
//       <List component="nav">
//         <ListItem button onClick={handleClickListItem}>
//           open
//         </ListItem>
//       </List>
//       <Menu
//         anchorEl={anchorEl}
//         keepMounted
//         open={Boolean(anchorEl)}
//         onClose={handleClose}
//       >
//         {options.map((option, index) => (
//           <MenuItem
//             key={option}
//             selected={index === selectedIndex}
//             onClick={event => handleMenuItemClick(event, index)}
//           >
//             {option}
//           </MenuItem>
//         ))}
//       </Menu>
//     </div>
//   );
// }


// ......................... 
{/* <Button
        id="basic-button-for-sale"
        aria-controls="basic-menu-for-sale"
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleMenu}
      >
        Sale
      </Button>
      
      <Menu
        id="basic-menu-for-sale"
        anchorEl={anchorEl}
        open={open}
        onClose={ handleMenuClick}
        MenuListProps={{
          'aria-labelledby': 'basic-button-for-sale',
        }}
      >
        {/* <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem> */}
      //   <MenuItem onClick={() => handleMenuClick('/SaleInvoice')}>sale invoice</MenuItem>
      //   <MenuItem onClick={() => handleMenuClick('/SaleReturn')}>sale return</MenuItem>
      // </Menu>
      // {/* Purchase */}
      // <Button
      //   id="basic-button"
      //   aria-controls="basic-menu"
      //   aria-haspopup="true"
      //   aria-expanded={open ? 'true' : undefined}
      //   onClick={handleMenu}
      // >
      //   Purchase
      // </Button>
      // <Menu
      //   id="basic-menu"
      //   anchorEl={anchorEl}
      //   open={open}
      //   onClose={ handleMenuClick}
      //   MenuListProps={{
      //     'aria-labelledby': 'basic-button',
      //   }}
      // >
      //   {/* <MenuItem onClick={() => handleMenuClick('/')}>Home</MenuItem> */}
      //   <MenuItem onClick={() => handleMenuClick('/AddStockItems')}>Purchase invoice</MenuItem>
      //   <MenuItem onClick={() => handleMenuClick('/PurchaseReturn')}>Purchase return</MenuItem>
      // </Menu> */}