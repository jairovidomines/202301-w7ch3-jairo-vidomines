import { useState } from "react";
import useApi from "../../hooks/useApi";
import "./Form.css";
import FormStyled from "./FormStyled";

const Form = (): JSX.Element => {
  const { addTask } = useApi();

  const [formValue, setFormValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const newTask = {
      id: Math.floor(Math.random() * 1000),
      name: formValue,
      isDone: false,
    };

    setFormValue("");
    addTask(event, newTask);
  };

  return (
    <>
      <FormStyled className="form" onSubmit={handleSubmit}>
        <label className="form__label">Add a task</label>
        <input
          onChange={handleChange}
          placeholder="Write a new task"
          value={formValue}
          className="form__input"
          type="text"
        />
        <button type="submit" className="form__button">
          Add
        </button>
      </FormStyled>
    </>
  );
};

export default Form;
