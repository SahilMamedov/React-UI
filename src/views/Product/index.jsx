import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Goods from './Goods';
import axios from "axios"
import {useEffect,useState} from "react"
import {NavLink} from "react-router-dom"

export default function Product() {
  const [data,setData] = useState([])
  useEffect (() => {

      axios.get('https://62cc91b58042b16aa7d15551.mockapi.io/goods')
      .then(function(products){
          setData(products.data)
      })
  },[])
  return (
    
    <>
      <CssBaseline />
      <Container sx={{ bgcolor: '#cfe8fc', height: '100vh',}}>

        <Box className='d-flex flex-wrap mt-5' >
       
        {data.map(obj=>
        <NavLink key={obj.id}  to={`/FullInfoProduct/${obj.id}`}>
        <Goods {...obj}/>
        </NavLink>
        )}
       
     
        </Box>
        
      </Container>
    </>
  );
}
