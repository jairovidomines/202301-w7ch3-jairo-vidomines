import Form from "../Form/Form";
import TaskList from "../TaskList/TaskList";
import image from "../../img/todoist_logo.png";
import LayoutStyled from "./LayoutStyled";

const Layout = (): JSX.Element => {
  return (
    <LayoutStyled>
      <img className="logo-todoist" src={image} alt="Logotipo todoist" />
      <h1>Organize your daily life</h1>
      <Form />
      <TaskList />
    </LayoutStyled>
  );
};

export default Layout;
