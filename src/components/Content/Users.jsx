import TableUsers from "../Common/Table";

const Users = (props) => {
  return (
    <TableUsers users={props.users} setCurrentUser={props.setCurrentUser} />
  );
};

export default Users;
