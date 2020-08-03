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
import Link from "next/link";
import { useRouter } from "next/router";

const useStyles = makeStyles(() => ({
  textStyles: {
    color: "#E6714A",
    // marginLeft: "60px",
    margin: "0 auto",
    fontWeight: 500,
    "&:hover": {
      cursor: "pointer",
    },
  },
  iconStyles: {
    color: "#E6714A",
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
          <InstagramIcon className={classes.iconStyles} />
        </Button>
        <Link href="/">
          <Typography className={classes.textStyles} variant="h5">
            Kyle Garrett Photography
          </Typography>
        </Link>
        {/* <DropDownMenu /> */}
      </Toolbar>
    </AppBar>
  );
};

const DropDownMenu = () => {
  const [open, setOpen] = useState(null);
  const router = useRouter();
  const classes = useStyles();

  function handleBurgerIconClick(event) {
    setOpen(event.currentTarget);
  }

  function handleClose() {
    setOpen(null);
  }

  console.log(router);

  return (
    <div>
      <Button onClick={handleBurgerIconClick}>
        <MenuIcon className={classes.iconStyles} />
      </Button>
      {router.route !== "/admin" ? (
        <Menu
          id="dropdown-menu"
          anchorEl={open}
          keepMounted
          open={Boolean(open)}
          onClose={handleClose}
        >
          <Link href="/climbing">
            <MenuItem onClick={handleClose}>Climbing</MenuItem>
          </Link>
          <Link href="/portraits">
            <MenuItem onClick={handleClose}>Portraits</MenuItem>
          </Link>
          <Link href="/notclimbing">
            <MenuItem onClick={handleClose}>Not Climbing</MenuItem>
          </Link>
          <Link href="/about">
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Link>
          <Link href="/contact">
            <MenuItem onClick={handleClose}>Contact</MenuItem>
          </Link>
        </Menu>
      ) : (
        <Menu
          id="dropdown-menu"
          anchorEl={open}
          keepMounted
          open={Boolean(open)}
          onClose={handleClose}
        >
          <Link href="/climbing">
            <MenuItem onClick={handleClose}>Manage Pictures</MenuItem>
          </Link>
          <Link href="/portraits">
            <MenuItem onClick={handleClose}>Upload An Image</MenuItem>
          </Link>
          <Link href="/notclimbing">
            <MenuItem onClick={handleClose}>Logout</MenuItem>
          </Link>
        </Menu>
      )}
    </div>
  );
};

export default Header;
