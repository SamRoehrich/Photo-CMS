import { useSpring, animated } from "react-spring";

const SpringPage = () => {
  const props = useSpring({ opacity: 1, from: { opacity: 0 } });
  return <animated.div style={props}>I will fade in</animated.div>;
};
export default SpringPage;
