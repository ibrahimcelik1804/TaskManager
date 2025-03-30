import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Header from '../../components/home/Header';
import FloatActionButton from '../../components/uı/floatActionButton';
import {SCREENS} from '../../utils/router';
import TaskCard from '../../components/home/taskCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const {ADDTASKS, TASKDETAIL, TASKS} = SCREENS;

const Home = ({navigation}) => {
  const [tasks, setTasks] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [ongoing, setOngoing] = useState(0);
  const [pending, setPending] = useState(0);
  const [complated, setComplated] = useState(0);
  const [cancel, setCancel] = useState(0);

  const getTasks = async () => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      setTasks(savedTask ? JSON.parse(savedTask) : []);
      let ongoingCount = 0;
      let pendingCount = 0;
      let complatedCount = 0;
      let cancelCount = 0;

      for (const task of JSON.parse(savedTask)) {
        if (task.status === 1) {
          ongoingCount++;
        }
        if (task.status === 2) {
          pendingCount++;
        }
        if (task.status === 3) {
          complatedCount++;
        }
        if (task.status === 4) {
          cancelCount++;
        }
        setOngoing(ongoingCount);
        setPending(pendingCount);
        setComplated(complatedCount);
        setCancel(cancelCount);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const clearAllData = async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {}
  };

  useEffect(() => {
    getTasks();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getTasks();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item, index) => item.id || index.toString()}
        ListHeaderComponent={
          <Header
            ongoing={ongoing}
            complated={complated}
            pending={pending}
            cancel={cancel}
          />
        }
        data={tasks}
        renderItem={({item}) => <TaskCard item={item} />}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      />

      <FloatActionButton onPress={() => navigation.navigate(ADDTASKS)} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
