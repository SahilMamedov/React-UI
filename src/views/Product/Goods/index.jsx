import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button, ListItem } from '@mui/material';




export default function Goods({ImageUrl,ProductAboutInformation,ProductPrice}) {
    // const [data,setData] = useState([])
    // useEffect (() => {

    //     axios.get('https://62cc91b58042b16aa7d15551.mockapi.io/goods')
    //     .then(function(products){
    //         setData(products.data)
    //     })
    // },[])
    

    const HandleClick =()=>{
        // axios.get('https://62cc91b58042b16aa7d15551.mockapi.io/goods')
        // .then(function(res){
        // res.data.forEach(item => {
        //     console.log(item.id);
        // });
        // })
        //console.log();
      //  data.map(item => console.log(item.id));
    }

  return (
    
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image={ImageUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
         {ProductAboutInformation}
        </Typography>
        <Typography color="text.secondary">
         {ProductPrice}
        </Typography>
      </CardContent>
      <Typography className='d-flex justify-content-center'>
        
        
        
      <Button onClick={HandleClick} variant="contained">Sumbit</Button>
      </Typography>
    </Card>
  );
    }
