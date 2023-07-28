
import {Box, IconButton} from '@mui/material';
import {
   
    ShoppingBagOutlined,
   
    SearchOutlined,
   
 } from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';






const Navbar = () => {
   



    return ( 
    <Box //outer box
    display = "flex"
    alignItems="center"
     width="100%"
    height = "60px"
    backgroundColor = "grey"
    color = "black"
   position = "fixed"
    top = "0"
    left = "0"
 zIndex = "2"
    >

        <Box // inner box
           width = "80%"
           margin = "auto"
           display = "flex"
           justifyContent="space-between"
           alignItems= "center"
       >
          <Box
            onClick ={() => navigate("/")}
            sx = {{ '5:hover' : {cursor: "pointer"}}} 
            color = "blue"
         >
            TosmosListings
          </Box>


          <Box
          display = "flex"
          justifyContent= "space-between"
          columnGap = "20px"
          z-index = "2"
          >

            
          <Link to="welcome">Home</Link>
          <Link to="/about">About</Link>
          <Link to = "/" >Listings</Link>
            
           <IconButton sx = {{color: "black"}}>
            <SearchOutlined />
           </IconButton>

         

         
           
            
          </Box>

        </Box>


    </Box>
    );
};

export default Navbar;