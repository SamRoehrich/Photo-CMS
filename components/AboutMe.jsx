import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginRight: "3rem",
    marginTop: "3rem",
    backgroundColor: theme.palette.background.default,
  },
  text: {
    fontSize: 20,
  },
}));

const AboutMe = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <Typography variant="body1" className={classes.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet
        ex justo. Proin porta ullamcorper interdum. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Vestibulum leo nulla, porttitor quis
        fringilla in, suscipit at dui. Integer viverra non augue non semper.
        Fusce sed ornare risus. Cras convallis nec nibh eget dapibus. Cras sed
        tellus nulla. In ac tempus dolor. Donec eget lectus in odio sodales
        elementum. Nulla facilisi. Donec lacinia massa velit. Nullam interdum
        arcu ac mattis bibendum. Suspendisse tellus metus, blandit non metus ut,
        fermentum sollicitudin erat. Vivamus vitae justo nunc. Maecenas nec eros
        consequat, accumsan nulla vel, elementum diam. Morbi gravida cursus
        molestie. Praesent ullamcorper mi in dictum elementum. Ut metus lorem,
        auctor facilisis lectus non, pellentesque vulputate turpis. Vestibulum a
        fermentum eros. Phasellus laoreet ex sit amet nunc pretium, vitae
        lacinia velit gravida. Pellentesque fringilla magna sit amet leo
        rhoncus, et ornare odio interdum. Donec ut lacus faucibus leo tincidunt
        placerat sit amet vitae quam. Proin tempor turpis vel felis porttitor,
        in dignissim libero dictum. Nam vel velit nec urna tincidunt accumsan.
        Etiam et erat tempor, commodo mauris sed, auctor lorem. Integer vel
        nulla ultricies, viverra massa dapibus, luctus metus. Donec scelerisque
        condimentum ante, sed lacinia dolor ornare ac. Interdum et malesuada
        fames ac ante ipsum primis in faucibus. Vivamus euismod vehicula dolor
        ut interdum. Mauris vehicula purus sit amet augue eleifend, condimentum
        molestie libero vestibulum. Fusce ac feugiat purus. Integer eu mattis
        massa. Maecenas pretium leo vitae ultrices auctor. Praesent id sagittis
        libero. Curabitur blandit quam lectus, pharetra tincidunt arcu imperdiet
        quis. Praesent placerat suscipit sapien faucibus aliquam. Integer enim
        leo, pharetra eget sem in, tristique porttitor dui. Nulla tempor sodales
        pulvinar. Phasellus posuere consectetur elementum. Nullam et laoreet
        est. Donec rhoncus venenatis consectetur. Cras neque orci, ultricies
        quis nulla pharetra, consectetur hendrerit odio. Etiam fermentum justo
        ac fermentum viverra. Curabitur elementum, enim non imperdiet tincidunt,
        nisl nulla dignissim augue, ac interdum ex justo et mauris. Interdum et
        malesuada fames ac ante ipsum primis in faucibus. Nulla blandit neque
        eget malesuada fringilla. Integer eu odio mi. Fusce at semper velit.
        Donec tempus ex ipsum, in hendrerit urna rutrum eget. Sed lectus ligula,
        condimentum dapibus elit a, auctor dignissim nisi. Vivamus sagittis non
        massa et rhoncus. Curabitur elit dui, lacinia nec odio dapibus,
        venenatis tristique orci. In sit amet elementum dui, ac gravida augue.
        Vestibulum varius diam eget fermentum egestas. Nulla risus tortor,
        semper interdum porttitor nec, dignissim volutpat tellus. Aliquam
        accumsan felis non ex condimentum vulputate. Vivamus placerat ultrices
        nulla a imperdiet. Sed enim orci, aliquam nec pellentesque at, cursus
        eget massa.
      </Typography>
    </Paper>
  );
};
export default AboutMe;
