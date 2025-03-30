import {StyleSheet, Text, View} from 'react-native';
import {Formik} from 'formik';
import {Button, Input, Radio, RadioGroup} from '@ui-kitten/components';
import uuid from 'react-native-uuid';
import CustomDatePicker from '../../components/uı/CustomDatePicker';
import {taskSchema} from '../../utils/validationSchema';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {status} from '../../utils/consttant';
import {SCREENS} from '../../utils/router';

const AddTask = ({navigation}) => {
  const saveTask = async values => {
    try {
      // Daha önceden kaydedilmiş veriyi AsyncStorage'dan getiriyoruz.
      const savedTasks = await AsyncStorage.getItem('tasks');

      // Eğer kayıtlı veri varsa JSON.parse ile nesneye çeviriyoruz, yoksa boş bir dizi oluşturuyoruz.
      let myTask = savedTasks ? JSON.parse(savedTasks) : [];

      // Yeni eklemek istediğimiz 'values' değerini mevcut görevler dizisine ekliyoruz.
      myTask.push(values);

      // Güncellenen diziyi JSON formatına çevirerek AsyncStorage'a kaydediyoruz.
      await AsyncStorage.setItem('tasks', JSON.stringify(myTask));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Formik
        initialValues={{
          id: uuid.v4(),
          title: 'AsyncStorage',
          description: 'React Native için kalıcı depolama.',
          startDate: null,
          endDate: null,
          category: null,
          status: status.ONGOING,
        }}
        validationSchema={taskSchema}
        onSubmit={values => saveTask(values)}>
        {({values, errors, handleSubmit, handleChange, setFieldValue}) => (
          <View>
            <Input
              style={{marginVertical: 10}}
              size="large"
              label="Title :"
              value={values.title}
              onChangeText={handleChange('title')}
              status={errors ? 'danger' : 'success'}
              caption={errors.title}
            />
            <Input
              style={{marginVertical: 10}}
              size="large"
              label="Description :"
              value={values.description}
              onChangeText={handleChange('description')}
              status={errors ? 'danger' : 'success'}
              caption={errors.description}
            />
            <CustomDatePicker
              date={values.startDate}
              onSelectDate={date => setFieldValue('startDate', date)}
              size="large"
              style={{marginVertical: 10}}
              label={'Start Date :'}
              status={errors ? 'danger' : 'success'}
              caption={errors.startDate}
            />
            <CustomDatePicker
              date={values.endDate}
              onSelectDate={date => setFieldValue('endDate', date)}
              size="large"
              style={{marginVertical: 10}}
              label={'End Date :'}
              status={errors ? 'danger' : 'success'}
              caption={errors.endDate}
            />
            <RadioGroup
              selectedIndex={values.category}
              onChange={index => setFieldValue('category', index)}>
              <Radio status="success">Software</Radio>
              <Radio status="success">Desing</Radio>
              <Radio status="success">Operation</Radio>
            </RadioGroup>
            <Button
              onPress={() => {
                handleSubmit();
                navigation.navigate(SCREENS.TASKS);
              }}
              style={{marginTop: 30}}
              status="success">
              CREATE
            </Button>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default AddTask;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
});
