import "./Form.css";

const Form = (): JSX.Element => {
  return (
    <>
      <div className="form">
        <span className="form__label">Add a task</span>
        <input
          placeholder="Write your task here"
          className="form__input"
          aria-label="Field to create a task"
          type="text"
        />
        <button className="form__button" aria-label="Create a task button">
          Create
        </button>
      </div>
    </>
  );
};

export default Form;
