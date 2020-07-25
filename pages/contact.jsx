import styled from "styled-components";
import SideBar from "../components/SideBar";

const ContactForm = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const ContactPage = () => {
  return (
    <div>
      <SideBar />
      <ContactForm>
        <input placeholder="email" />
        <input placeholder="name" />
        <textarea placeholder="Content" />
      </ContactForm>
    </div>
  );
};
export default ContactPage;
