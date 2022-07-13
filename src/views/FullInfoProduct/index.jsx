import { useParams } from "react-router-dom"
import {useEffect, useState} from "react"
import axios from "axios"
import { border, color } from "@mui/system"
export default function FullInfoProduct() {


  const {id} = useParams();
  const [data,setData] =useState([])
  useEffect (() => {

    axios.get(`https://62cc91b58042b16aa7d15551.mockapi.io/goods/${id}`)
    .then(function(products){
        setData(products.data)
    })

},[])

 return(
  <div className="d-flex justify-content-center">
    
  <div >
  <img src={data.ImageUrl} alt="" />
  <div className="d-flex justify-content-center">
  <p>{data.ProductAboutInformation}</p>
  
  </div>

  <span className="d-flex justify-content-center">
  <span>{data.ProductPrice}</span>
  </span>

  </div>
  </div>
 )

}
