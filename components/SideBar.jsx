import SideBarLink from "./SideBarLink";
import { makeStyles } from "@material-ui/styles";

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
  return (
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
