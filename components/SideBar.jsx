import SideBarLink from "./SideBarLink";
import { makeStyles } from "@material-ui/styles";
import { useRouter } from "next/router";
import { Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    height: "85vh",
  },
});

const SideBar = () => {
  const classes = useStyles();
  const router = useRouter();
  return router.pathname.includes("admin") ? (
    <div className={classes.root}>
      <SideBarLink text="Home" href="admin" />
      <SideBarLink text="Upload an Image" href="admin/upload-photo" />
      <SideBarLink text="Manage Photos" href="admin/manage-photos" />
      <SideBarLink text="Edit Theme" href="admin/edit-theme" />
      <Button>Deploy Changes</Button>
    </div>
  ) : (
    <div className={classes.root}>
      <SideBarLink text="Home" href="" />
      <SideBarLink text="Climbing" href="climbing" />
      <SideBarLink text="Not Climbing" href="notclimbing" />
      <SideBarLink text="Portraits" href="portraits" />
      <SideBarLink text="About" href="about" />
      <SideBarLink text="Contact" href="contact" />
    </div>
  );
};
export default SideBar;
