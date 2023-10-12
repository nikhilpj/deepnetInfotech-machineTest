import { Box, Typography ,Button} from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { useState } from "react";

const AllCategory = ()=>{

const [data,setData] = useState([])


const handleEdit = ()=>{

}

const columns = [
    { field: "_id", headerName: "_id",width:"250" },
    { field: "CategoryName", headerName: "categoryName" ,width:"300"},
    
  ];

  const rows = data.map((items)=>({
    ...items,
    blockUnblockButton:(
      <Button  onClick={()=>handleEdit(items._id)}>
        
        {items.isBlocked ? 'UnBlock' :'Block'}
        
      </Button>
    ),
  }))

    return(<>
    <Box margin={'70px '}>
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