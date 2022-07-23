import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Link = styled.div`
  & a {
    color: #9fa2b4;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    font-weight: 200;
    transition: 0.3s;
  }
  & a:hover {
    background-color: #9fa2b4;
    color: #dde2ff;
  }
  & a > * {
    margin: 0 7px;
  }
  & a span {
    font-size: 12px;
  }
`;

const NavItems = (props) => {
  return (
    <Link>
      <NavLink to={props.link}>
        <span>
          <FontAwesomeIcon icon={props.icon} />
        </span>
        <p>{props.title}</p>
      </NavLink>
    </Link>
  );
};

export default NavItems;
