import styled from "styled-components";
import Button from "../Common/Button";
import Checkbox from "../Common/CheckBox";
import SmallTable from "../Common/SmallTable";
import TableUsers from "../Common/Table";

const unresolvedTickets = [
  { firstColumn: "Waiting on Futurer Request", secondColumn: 4230 },
  { firstColumn: "Awaiting Customer Response", secondColumn: 1005 },
  { firstColumn: "Awaiting Developer Fix", secondColumn: 914 },
  { firstColumn: "Pending", secondColumn: 281 },
];

const tasks = [
  {
    firstColumn: "Create new task",
    secondColumn: (
      <Button
        title={"+"}
        color={"#F0F1F7"}
        radius={"7px"}
        textColor={"#9FA2B4"}
        fontSize={"16px"}
        fontWeight={"900"}
      />
    ),
  },
  {
    firstColumn: <Checkbox title={"Finish ticket update"} id={1} />,
    secondColumn: <Button title={"URGENT"} color={"#FEC400"} radius={"7px"} />,
  },
  {
    firstColumn: <Checkbox title={"Create new ticket exemple"} id={2} />,
    secondColumn: <Button title={"NEW"} color={"#29CC97"} radius={"7px"} />,
  },
  {
    firstColumn: <Checkbox title={"Update ticket report"} id={3} />,
    secondColumn: (
      <Button
        title={"DEFAULT"}
        color={"#F0F1F7"}
        textColor={"#9FA2B4"}
        radius={"7px"}
      />
    ),
  },
];

const WrapperTable = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > * {
    width: 45%;
  }
`;

const Users = (props) => {
  return (
    <>
      <TableUsers users={props.users} setCurrentUser={props.setCurrentUser} />
      <WrapperTable>
        <SmallTable
          table={unresolvedTickets}
          title={"Unresolver Tickets"}
          subTitle={"Group:Support"}
          link={"View details"}
        />
        <SmallTable
          table={tasks}
          title={"Tasks"}
          subTitle={"Today"}
          link={"View all"}
        />
      </WrapperTable>
    </>
  );
};

export default Users;
