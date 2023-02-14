import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";

const Layout = (): JSX.Element => {
  return (
    <>
      <h1>To Do list</h1>
      <Form />
      <TaskList />
    </>
  );
};

export default Layout;
