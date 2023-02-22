import styled from "styled-components";

const FormStyled = styled.form`
  display: flex;
  justify-content: center;
  gap: 15px;
  align-items: center;
  padding: 30px 10px 30px;

  .form__input {
    border-radius: 8px;
    border-width: 0.5px;
    border-color: #e44232;
    font-size: 16px;
    padding: 10px 10px;
  }

  .form__button {
    border-radius: 8px;
    background-color: #e44232;
    border: none;
    color: #fff;
    padding: 10px;
    font-size: 16px;
  }
`;

export default FormStyled;
