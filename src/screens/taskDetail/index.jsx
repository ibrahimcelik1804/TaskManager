import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {tasksValues, status} from '../../utils/consttant';
import moment from 'moment';
import {setCategory} from '../../utils/category';
import {Button} from '@ui-kitten/components';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SCREENS} from '../../utils/router';

const TaskDetail = ({route, navigation}) => {
  const {item} = route.params;

  const deleteTask = async newStatus => {
    try {
      const savedTasks = await AsyncStorage.getItem('tasks');
      if (savedTasks === null) {
        return;
      }
      const tasks = JSON.parse(savedTasks);
      const filteredTasks = tasks.filter(task => task.id !== item.id);
      await AsyncStorage.setItem('tasks', JSON.stringify(filteredTasks));

      console.log('görev silindi');
      navigation.navigate(SCREENS.TASKS, {refresh: true});
    } catch (error) {
      console.error('Görev silinirken bir hata oluştu.', error);
    }
  };
  const updateTask = async newStatus => {
    try {
      const savedTask = await AsyncStorage.getItem('tasks');
      if (savedTask === null) {
        return;
      }
      const tasks = JSON.parse(savedTask);
      // güncellenecek görevi bul
      const updatedTask = tasks.map(task => {
        if (task.id === item.id) {
          return {...task, status: newStatus};
        }
        return task;
      });
      // güncellenecek veriyi depola
      await AsyncStorage.setItem('tasks', JSON.stringify(updatedTask));
      console.log('görev güncellendi');
    } catch (error) {
      console.log('Görev güncellerken hata oluştu', error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Title :</Text>
          <Text>{item?.title}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Description :</Text>
          <Text>{item?.description}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Start Date :</Text>
          <Text> {moment(item.startDate).format('DD.MM.YYYY')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>End Date :</Text>
          <Text> {moment(item.endDate).format('DD.MM.YYYY')}</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Status :</Text>
          <Text>
            {tasksValues.find(task => task.status === item?.status)?.title}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 15,
          }}>
          <Text style={{fontSize: 18, fontWeight: '500'}}>Cateory:</Text>
          <Text>{setCategory(item?.category)}</Text>
        </View>
      </ScrollView>
      <View style={{bottom: 20}}>
        <Button
          onPress={() => updateTask(status.PENDING)}
          style={styles.buttom}
          status="primary">
          PENDİNG
        </Button>
        <Button
          onPress={() => updateTask(status.COMPLATED)}
          style={styles.buttom}
          status="success">
          COMPLATED
        </Button>
        <Button
          onPress={() => updateTask(status.CANCEL)}
          style={styles.buttom}
          status="danger">
          CANCEL
        </Button>
        <Button onPress={deleteTask} style={styles.buttom} status="warning">
          DELETE
        </Button>
      </View>
    </View>
  );
};

export default TaskDetail;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: AppColors.WHITE, padding: 10},
  buttom: {marginVertical: 5},
});
