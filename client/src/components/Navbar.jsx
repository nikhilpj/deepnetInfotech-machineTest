import React,{useEffect, useState} from "react";
import { Link } from "react-router-dom";
import './Navbar.css'
import { Typography } from "@mui/material";

const NavBar = () => {
 
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
       <Link to={'/products'} style={{textDecoration:'none',color:'white'}}><Typography variant="h6" gutterBottom>
        Add products
      </Typography></Link> 
       
        </div>
        <div className="center">
         <Link to={'/'} style={{textDecoration:'none',color:'white'}}> <Typography variant="h4" gutterBottom>
        Nikhil Jose
      </Typography></Link>
        </div>
        <div className="right">
        <Link to={'/allcategory'} style={{textDecoration:'none',color:'white'}}> <Typography variant="h6" gutterBottom>
        view category
      </Typography></Link>
       </div>
      </div>
    </div>
  );
};

export default NavBar;
