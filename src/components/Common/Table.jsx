import React from "react";
import {
  TableContainer,
  Table,
  TableRow,
  Paper,
  TableBody,
  TableCell,
  TableHead,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

const WrapperTable = styled(TableContainer)`
  margin-top: 40px;
  & .filter_users {
    padding: 25px 15px;
    font-weight: 900;
  }
  & .title_table {
    color: red;
  }
  & a {
    display: flex;
    align-items: center;
    color: #000000;
    & > div:last-child {
      margin-left: 20px;
    }
  }
  & img {
    width: 40px;
  }
  & div > p:last-child {
    color: #c5c7cd;
    fontsize: 12px;
  }
  & .active_city {
    padding: 10px;
    background-color: red;
    color: #ffffff;
    border-radius: 20px;
  }
`;

const TableUsers = (props) => {
  const btnRender = (user) => {
    let geo = user.address.geo.lng;
    if (geo > 60) {
      return <Button title={"HIGH"} color={"#F12B2C"} />;
    } else if (geo < 60 && geo > 0) {
      return <Button title={"LOW"} color={"#FEC400"} />;
    } else {
      return <Button title={"NORMAL"} color={"#29CC97"} />;
    }
  };
  return (
    <WrapperTable component={Paper}>
      <div className='filter_users'>
        <div>All Users</div>
        <div></div>
      </div>
      <Table aria-label='Usres Table'>
        <TableHead>
          <TableRow className='title_table'>
            <TableCell>User Details</TableCell>
            <TableCell>Company Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Distance</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.users.map((user) => (
            <TableRow hover={true} key={user.id}>
              <TableCell>
                <NavLink
                  to={`/users/${user.id}`}
                  onClick={() => props.setCurrentUser(user)}>
                  <div>
                    <img
                      src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                      alt='User'
                    />
                  </div>
                  <div>
                    <p>{user.name}</p>
                    <p>{user.address.city}</p>
                  </div>
                </NavLink>
              </TableCell>
              <TableCell>
                <div>
                  <p>{user.company.name}</p>
                  <p>{user.company.bs}</p>
                </div>
              </TableCell>
              <TableCell>
                <div>
                  <p>{user.email}</p>
                  <p>{user.website}</p>
                </div>
              </TableCell>
              <TableCell>{btnRender(user)}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </WrapperTable>
  );
};

export default TableUsers;
