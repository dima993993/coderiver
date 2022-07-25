import styled from "styled-components";

const WrapperBtn = styled.span`
  padding: 5px 10px;
  color: #ffffff;
  border-radius: 20px;
  font-size: 12px;
  background-color: ${(props) => props.color};
`;

const Button = ({ color, title }) => {
  return <WrapperBtn color={color}>{title}</WrapperBtn>;
};

export default Button;
