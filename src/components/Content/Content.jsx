import Header from "./Header";
import styled from "styled-components";
import { Route, Routes } from "react-router-dom";
import Users from "./Users";
import UserPage from "./UserPage";
import { useState } from "react";

const Wrapper = styled.div`
  margin: 40px;
`;

const Content = (props) => {
  const [currentUser, setCurrentUser] = useState([]);
  console.log(currentUser);

  return (
    <Wrapper>
      <Header />
      <Routes>
        <Route
          path='/users'
          element={
            <Users users={props.users} setCurrentUser={setCurrentUser} />
          }
        />
        <Route
          path='/users/:id'
          element={<UserPage users={props.users} currentUser={currentUser} />}
        />
      </Routes>
    </Wrapper>
  );
};
export default Content;
