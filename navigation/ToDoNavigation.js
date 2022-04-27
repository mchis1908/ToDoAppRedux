import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import TaskScreen from "../screen/TaskScreen";
import AddTask from "../screen/AddTask";
const appNavigater = createStackNavigator({
  Task: TaskScreen,
  Add: AddTask,
});

export default createAppContainer(appNavigater);
