import { NavLink } from "react-router-dom";
import { Grid } from "@mui/material";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Card from "../Common/Card";

const UserBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  & img {
    width: 40px;
  }
  & > * {
    display: flex;
    align-items: center;
  }
  & div:first-child {
    padding-right: 20px;
    border-right: 1px solid #c5c7cd;
    & span {
      font-size: 18px;
      color: #c5c7cd;
    }
    & span:last-child {
      position: relative;
    }
    & span:last-child::after {
      content: "";
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: blue;
      position: absolute;
      left: 10px;
      top: 1px;
      border: 2px solid #e5e5e5;
    }
  }
  & span {
    margin: 0 10px;
    cursor: pointer;
  }
  & > a {
    color: #000000;
    & span:first-child {
      margin-left: 20px;
    }
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <div>Users</div>
        </Grid>
        <Grid item xs={3}>
          <UserBlock>
            <div>
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
            </div>
            <NavLink to='/'>
              <span>Name User</span>
              <span>
                <img
                  src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                  alt='User'
                />
              </span>
            </NavLink>
          </UserBlock>
        </Grid>
        <Cards>
          <Card title={"Active"} number={60} />
          <Card title={"Online"} number={16} />
          <Card title={"Filtred"} number={23} />
          <Card title={"Banned"} number={10} />
        </Cards>
      </Grid>
    </>
  );
};

export default Header;
