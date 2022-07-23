import styled from "styled-components";
import { navigationItems, settingsItems } from "../../data/navigation";
import NavItems from "./NavItems";

const AsideWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #363740;
  & > div:first-child {
    font-size: 20px;
    color: #dde2ff;
    text-align: center;
    padding: 20px 0;
  }
`;
const Separator = styled.div`
  margin: 20px 0;
  width: 100%;
  height: 1px;
  background-color: #9fa2b4;
`;

const Aside = () => {
  return (
    <AsideWrapper>
      <div>Dashboard</div>
      {navigationItems.map((el, index) => (
        <NavItems key={index} {...el}></NavItems>
      ))}
      <Separator />
      {settingsItems.map((el, index) => (
        <NavItems key={index} {...el}></NavItems>
      ))}
    </AsideWrapper>
  );
};

export default Aside;
