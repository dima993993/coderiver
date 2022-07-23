import { Grid } from "@mui/material";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-solid-svg-icons";

// const UserBlock = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   & img {
//     width: 40px;
//   }
//   & div {
//     display: flex;
//     align-items: center;
//   }
//   & div:first-child {
//     width: 30%;
//     & span {
//       font-size: 18px;
//     }
//   }
//   & span {
//     margin: 0 10px;
//   }
//   & div:last-child {
//     border-left: 1px solid #cccccc;
//   }
// `;

const Header = () => {
  return (
    <>
      <Grid container>
        <Grid item xs={9}>
          <div>Users</div>
        </Grid>
        <Grid item xs={3}>
          {/* <UserBlock>
            <div>
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <span>
                <FontAwesomeIcon icon={faBell} />
              </span>
            </div>
            <div>
              <span>Name User</span>
              <span>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' />
              </span>
            </div>
          </UserBlock> */}
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
