import styled from "styled-components";

const WrapperBtn = styled.span`
  padding: 5px 10px;
  color: ${(props) => props.textColor || "#ffffff"};
  border-radius: ${(props) => props.radius};
  background-color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize || "12px"};
  font-weight: ${(props) => props.fontWeight || "300"};
`;

const Button = ({ color, title, radius, textColor, fontSize, fontWeight }) => {
  return (
    <WrapperBtn
      color={color}
      radius={radius}
      textColor={textColor}
      fontSize={fontSize}
      fontWeight={fontWeight}>
      {title}
    </WrapperBtn>
  );
};

export default Button;
