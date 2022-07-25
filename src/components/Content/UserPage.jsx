import styled from "styled-components";

const WrapperUser = styled.div`
  margin-top: 40px;
  padding-bottom: 40px;
  background-color: #ffffff;
  & > div:first-child {
    background-image: url("https://freefrontend.com/assets/img/css-background-patterns/simple-pattern-with-css3.png");
    background-repeat: no-repeat;
    background-size: cover;
    height: 200px;
    width: 100%;
    position: relative;
  }
  & > div:last-child > div {
    margin: 50px;
  }
  & img {
    width: 150px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    position: absolute;
    top: 100%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
  & .title_user {
    text-align: center;
    margin-top: 90px;
  }
`;

const UserPage = (props) => {
  const address = props.currentUser.address;
  return (
    <WrapperUser>
      <div>
        <img
          src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
          alt='User'
        />
      </div>
      <div className='title_user'>
        <h1>{props.currentUser.name}</h1>
        <p>{props.currentUser.company.catchPhrase}</p>
      </div>
      <div>
        <div>
          <h2>Address</h2>
          <p>{`${address.street} ${address.suite}`}</p>
          <p>{`${address.city} ${address.zipcode}`}</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>{props.currentUser.phone}</p>
        </div>
        <div>
          <h2>Website</h2>
          <p>{props.currentUser.website}</p>
        </div>
      </div>
    </WrapperUser>
  );
};

export default UserPage;
