import {Datepicker} from '@ui-kitten/components';
import {StyleSheet, Text, View} from 'react-native';

const CustomDatePicker = props => {
  const {onSelectDate} = props;
  return (
    <Datepicker onSelect={nextDate => onSelectDate(nextDate)} {...props} />
  );
};

export default CustomDatePicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
