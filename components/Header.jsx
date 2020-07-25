import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import InstagramIcon from "@material-ui/icons/Instagram";
import MenuIcon from "@material-ui/icons/Menu";
import { useState } from "react";

const useStyles = makeStyles(() => ({
  textStyles: {
    color: "rgba(0, 0, 0, 0.87)",
    // marginLeft: "60px",
    margin: "0 auto",
    fontWeight: 500,
  },
}));

function handleInstaIconClick() {
  window.open("https://www.instagram.com/kylegarrettphoto/");
}

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Button onClick={handleInstaIconClick}>
          <InstagramIcon color="action" />
        </Button>
        <Typography className={classes.textStyles} variant="h5">
          Kyle Garrett Photography
        </Typography>
        <DropDownMenu />
      </Toolbar>
    </AppBar>
  );
};

const DropDownMenu = () => {
  const [open, setOpen] = useState(null);

  function handleBurgerIconClick(event) {
    setOpen(event.currentTarget);
  }

  function handleClose() {
    setOpen(null);
  }

  return (
    <div>
      <Button onClick={handleBurgerIconClick}>
        <MenuIcon color="action" />
      </Button>
      <Menu
        id="dropdown-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
      >
        <MenuItem>Climbing</MenuItem>
        <MenuItem>Portraits</MenuItem>
        <MenuItem>Not Climbing</MenuItem>
        <MenuItem>About</MenuItem>
        <MenuItem>Contact</MenuItem>
      </Menu>
    </div>
  );
};

export default Header;
