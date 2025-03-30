import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, Text, View} from 'react-native';
import {SCREENS} from '../utils/router';
import Home from '../screens/home';
import AddTask from '../screens/addTask';
import TaskDetail from '../screens/taskDetail';

const Stack = createNativeStackNavigator();
const {TASKS, ADDTASKS, TASKDETAIL} = SCREENS;

const RootNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={TASKS} component={Home} />
      <Stack.Screen name={ADDTASKS} component={AddTask} />
      <Stack.Screen name={TASKDETAIL} component={TaskDetail} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

const styles = StyleSheet.create({});
