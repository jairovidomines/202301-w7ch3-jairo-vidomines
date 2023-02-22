import styled from "styled-components";

const TaskCardStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0px 0px 2px #919191;
  color: #1d1e1e;
  margin: 5px 5px;
  padding: 15px 15px;

  button {
    border: none;
    background-color: #fff;
  }

  i {
    color: #a4a4a4;
    font-size: 20px;
    cursor: pointer;
  }

  @media (min-width: 600px) {
    i {
      font-size: 15px;
    }
  }
`;
export default TaskCardStyled;
