import styled from "styled-components";

const Wrapper = styled.div`
  & input[type="checkbox"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & input[type="checkbox"] + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  & input[type="checkbox"] + label::before {
    content: "";
    display: inline-block;
    width: 1em;
    height: 1em;
    flex-shrink: 0;
    flex-grow: 0;
    border: 1px solid #adb5bd;
    border-radius: 50%;
    margin-right: 0.5em;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 50% 50%;
  }
  & input[type="checkbox"]:checked + label::before {
    border-color: #0b76ef;
    background-color: #0b76ef;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%23fff' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
  }
`;

const Checkbox = ({ title, id }) => {
  return (
    <Wrapper>
      <input type='checkbox' id={id} />
      <label for={id}>{title}</label>
    </Wrapper>
  );
};

export default Checkbox;
