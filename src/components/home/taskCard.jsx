import {Pressable, StyleSheet, Text, View} from 'react-native';
import moment from 'moment';
import {tasksValues} from '../../utils/consttant';
import {useNavigation} from '@react-navigation/native';
import {SCREENS} from '../../utils/router';
import {setCategory} from '../../utils/category';

const TaskCard = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(SCREENS.TASKDETAIL, {item: item})}
      style={styles.container}>
      <View
        style={{
          backgroundColor: tasksValues.find(
            task => task.status === item?.status,
          )?.color,
          padding: 3,
          borderRadius: 10,
          alignSelf: 'center',
        }}>
        {tasksValues.find(task => task.status === item?.status)?.icon}
      </View>
      <View style={{marginLeft: 10, flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: '600', color: 'black'}}>
          {item.title}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontSize: 15,
              marginVertical: 2,
              fontWeight: '400',
              color: 'gray',
            }}>
            {item.description}
          </Text>
          <Text
            style={{
              fontSize: 15,
              marginVertical: 2,
              fontWeight: '400',
              color: 'gray',
            }}>
            {setCategory(item.category)}
          </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: '300', color: 'gray'}}>
            {moment(item.startDate).format('DD.MM.YYYY')} -
            {moment(item.endDate).format('DD.MM.YYYY')}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
});
