import { Box, IconButton } from '@mui/material';
import {
  
  SearchOutlined,
  ExitToAppOutlined, // 1. Import the ExitToAppOutlined icon
} from '@mui/icons-material';
import { useNavigate, Link } from 'react-router-dom';
import { auth } from "../firebase";

const Navbar = () => {
  const navigate = useNavigate(); // Hook to access the navigation function

  const handleLogout = () => {
   auth.signOut().then(() => {
      navigate("/"); // Replace "/login" with the actual path to your login page
    });
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      height="60px"
      backgroundColor="grey"
      color="black"
      position="fixed"
      top="0"
      left="0"
      zIndex="2"
    >
      <Box
        width="80%"
        margin="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box
          sx={{ ':hover': { cursor: "pointer" } }}
          color="blue"
        >
          TosmosListings
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          columnGap="20px"
          zIndex="2"
        >
          <Link to="">Home</Link>
          <Link to="/messages">Messages</Link>
          <Link to="">Listings</Link>

          <IconButton sx={{ color: "black" }}>
            <SearchOutlined />
          </IconButton>

          {/* Logout Button */}
          <IconButton sx={{ color: "black" }} onClick={handleLogout}>
            <ExitToAppOutlined />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
