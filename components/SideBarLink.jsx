import styled from "styled-components";
import { Button } from "@material-ui/core";

const SideBarButton = styled(Button)`
  height: 100px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

const SideBarLink = ({ text }) => {
  return (
    <SideBarButton>
      <p>{text}</p>
    </SideBarButton>
  );
};
export default SideBarLink;
