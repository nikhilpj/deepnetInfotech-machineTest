import React, { useState } from 'react'
import axios from '../axios/instance'
import { Grid, Paper, TextField, Button, } from "@mui/material";
import NavBar from '../components/Navbar';
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubCategory = ()=>{
    const {id} = useParams()
    const [subCategory,setSubCategory] = useState('')
    const handleSubCategory = async(e)=>{
        e.preventDefault()
        try {
            console.log('subcategory',subCategory)
        console.log("id",id)
        const response =await axios({
            method:'post',
            url:`/add/subcategory/${id}`,
            data:{
                subCategory:subCategory
            }
        })
        console.log("response after adding subcategory",response)
        toast("added subcategory")
        } catch (error) {
            console.log("error",error)
            toast(error.message)
        }
        
    }
    const paperStyle = {
        height: "45vh",
        width: "26vw",
        padding: 20,
        margin: "20px auto",
      };

      const BtnStyle = { margin: "6px 0" };

    return(<>
    <Grid>
     < NavBar/>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center" sx={{marginTop:'3px'}}>
          <h2>Add SubCategory</h2>
        </Grid>
    
    <form onSubmit={handleSubCategory}>
    <TextField
          size="small"
          label="Add Sub-Category"
          fullWidth
          required
          onChange={(e) => setSubCategory(e.target.value)}
          style={BtnStyle}
          value={subCategory}
        />
        <Button variant="contained" color="primary" fullWidth style={BtnStyle} type="submit">
          Submit
        </Button>
    
    </form>
    <ToastContainer />
    </Paper>
    </Grid>
    </>)
}

export default SubCategory