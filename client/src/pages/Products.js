import React, { useState ,useEffect} from "react";
import { Grid, Paper, TextField, Button, Typography,Select,MenuItem ,InputLabel,FormControl} from "@mui/material";
import axios from '../axios/instance'
import NavBar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Products =()=>{
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [category,setCategory] = useState('')
    const [image, setImage] = useState("");
    const [data,setData] = useState([])
    let imageName
    const paperStyle = {
        height: "60vh",
        width: "26vw",
        padding: 20,
        margin: "20px auto",
      };

      const getCategory = async()=>{
        const result =await axios({
          method:'get',
          url:'/categories'
        })
        console.log("response after fetching categories",result)
        setData(result.data.data)
      }
      useEffect(()=>{
        getCategory()
      },[])
      const BtnStyle = { margin: "4px 0" };

      const handleChange = (event) => {
        setCategory(event.target.value);
      };

      const handleProducts=async(e)=>{
        e.preventDefault()

        try {
          const response =await axios({
            method:'post',
            url:'/addproduct',
            data:{
              name:name,
              price:price,
              category:category,
              image:image
            }
          })
          console.log("response after adding product",response)
          toast("product added")
        } catch (error) {
          console.log(error)
          toast("internal server error")
        }
     
        

      }

      const handleImageUpload=(e)=>{
        const files = e.target.files[0]
        
        imageName = files.name
        console.log("file is here",files.name)
        TransformFile(files)
      }
    
      const TransformFile=(file)=>{
        const reader = new FileReader()
        if(file)
        {
            reader.readAsDataURL(file)
            reader.onloadend = ()=>{
                setImage(reader.result)
            }
        }
        else{
            setImage('')
        }
    
      }
    console.log("data is",data)

    return(<>
    <Grid>
      <NavBar/>
    <Paper elevation={10} style={paperStyle}>
    <Grid align="center">
          <h2>Add Products</h2>
        </Grid>
    
    <form onSubmit={handleProducts}>
    <TextField
          size="small"
          label="Name"
          fullWidth
          required
          onChange={(e) => setName(e.target.value)}
          style={BtnStyle}
          value={name}
        />
          <TextField
          size="small"
          label="Price"
          fullWidth
          required
          onChange={(e) => setPrice(e.target.value)}
          style={BtnStyle}
          value={price}
        />
        <InputLabel id="demo-simple-select-label">Choose Category</InputLabel>
        <Select
        label='category'
        labelId="demo-simple-select-label"
        size="small"
        value={category}
        fullWidth
        placeholder="choose category"
        onChange={handleChange}>
            {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
          {data.map((item)=>(
            <MenuItem key={item._id } value={item.name}>{item.name}</MenuItem>
          ))}
        </Select>
        <Button variant="outlined" component="label" fullWidth style={BtnStyle}>
          Image
          <input type="file" accept="image/" onChange={handleImageUpload} required />
        </Button>
        <Button variant="contained" color="primary" fullWidth style={BtnStyle} type="submit">
          Submit
        </Button>
    </form>
    <ToastContainer />
    </Paper>
    </Grid>
    
    </>)
}

export default Products