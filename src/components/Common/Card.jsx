import styled from "styled-components";

const CardItem = styled.div`
  width: 252px;
  height: 134px;
  background-color: #ffffff;
  border-radius: 10px;
  border: 1px solid #9fa2b4;
  text-align: center;
  line-height: 50px;
  cursor: pointer;
  transition: 0.3s;
  & div {
    transition: 0.3s;
  }

  & div:first-child {
    color: #9fa2b4;
  }
  & div:last-child {
    color: #000000;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 2px;
  }
  &:hover div {
    color: blue;
  }
  &:hover {
    border: 1px solid blue;
  }
`;

const Card = (props) => {
  return (
    <CardItem>
      <div>{props.title}</div>
      <div>{props.number}</div>
    </CardItem>
  );
};

export default Card;
