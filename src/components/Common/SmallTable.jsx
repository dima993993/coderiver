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

const WrapperTable = styled(TableContainer)`
  width: 48% !important;
  padding: 20px;
  border-radius: 10px !important;
  & p {
    font-size: 12px;
    color: #9fa2b4;
  }
`;

const SmallTable = ({ table, title, subTitle, link }) => {
  return (
    <WrapperTable component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <h2>{title}</h2>
              <p>{subTitle}</p>
            </TableCell>
            <TableCell sx={{ textAlign: "right" }}>
              <NavLink to='/'>{link}</NavLink>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map((el) => (
            <TableRow>
              <TableCell>{el.firstColumn}</TableCell>
              <TableCell sx={{ textAlign: "right" }}>
                {el.secondColumn}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </WrapperTable>
  );
};

export default SmallTable;
