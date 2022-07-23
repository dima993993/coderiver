import Header from "./Header";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 40px;
`;

const Content = () => {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
};
export default Content;
