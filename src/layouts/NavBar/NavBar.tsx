import { AppBar, Toolbar, IconButton, Typography, Button } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Paths from "../../routes/Paths";
import MenuIcon from "@mui/icons-material/Menu";
import "./Navbar.scss";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <AppBar position="static" className="NavBar">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Vite Playground
        </Typography>
        <Button
          color="inherit"
          component={RouterLink}
          to={Paths.home}
          className={location.pathname === Paths.home ? "active" : ""}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={RouterLink}
          to={Paths.contact}
          className={location.pathname === Paths.contact ? "active" : ""}
        >
          Contact
        </Button>
        <Button color="inherit" component={RouterLink} to={"/fdsfdsgdg"}>
          Not Found
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default NavBar;
