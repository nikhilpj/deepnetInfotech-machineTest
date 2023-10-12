import { Box, Typography ,Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import {Link}  from 'react-router-dom'
import axios from '../axios/instance'
import Navbar from '../components/Navbar'

const AllCategory = ()=>{

const [data,setData] = useState([])


const handleEdit = ()=>{

}

const getData = async()=>{
  try {
    const response =await axios({
      method:'get',
      url:'/categories'
    })
    console.log("fetching all details",response)
    setData(response.data.data)
  } catch (error) {
    console.log("eroor is ",error)
  }
}

useEffect(()=>{
  getData()
},[])

const columns = [
    { field: "_id", headerName: "_id",width:"300" },
    { field: "name", headerName: "categoryName" ,width:"250"},
    { field: "Add", headerName: "Add subcategory" ,width:'200',renderCell: (params) =>{ return params.row.Add }},
    { field: "View", headerName: "View products" ,width:'200',renderCell: (params) =>{ return params.row.View }}
  ];

  // const rows = data.map((items)=>({
  //   ...items,
  //   blockUnblockButton:(
  //     <Button  onClick={()=>handleEdit(items._id)}>
        
  //       {items.isBlocked ? 'UnBlock' :'Block'}
        
  //     </Button>
  //   ),
  // }))

  // const rows = data ? data.map((items) =>({ ...items,Add:(<Link to={`/admin/edit/${items._id}`}><Button >Add</Button></Link>),View:<Button onClick={()=>handleDelete(items._id)}>View</Button>)}) : [];

const handleview = (id)=>{

}

  const rows = data
  ? data.map((items) => ({
      ...items,
      Add: (
        <Link to={`/add/subcategory/${items._id}`}>
          <Button>Add</Button>
        </Link>
      ),
      View:( <Link to={`/view/${items._id}`}><Button >View</Button></Link>),
    })
  )
  : [];


    return(<>
    <Navbar/>
    <Box margin={'50px '}>
      
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: "center", mt: 3, mb: 3 }}
      >
        Category management
      </Typography>
      <DataGrid
      autoHeight {...rows}
        columns={columns}
        rows={rows}
        getRowId={(row) => row._id}
      ></DataGrid>
      
    </Box>
    
    </>)
}

export default AllCategory