import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  ArrowCircleRight,
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import {AppColors} from '../../theme/color';

const Header = ({ongoing, pending, complated, cancel}) => {
  const tasks = [
    {
      id: 1,
      title: 'Ongoing',
      color: AppColors.ONGOING,
      icon: <ChartCircle size="32" color={AppColors.WHITE} />,
      count: ongoing,
    },
    {
      id: 2,
      title: 'Pending',
      color: AppColors.PENDING,
      icon: <Clock size="32" color={AppColors.WHITE} />,
      count: pending,
    },
    {
      id: 3,
      title: 'Complated',
      color: AppColors.COMPLATED,
      icon: <TickCircle size="32" color={AppColors.WHITE} />,
      count: complated,
    },
    {
      id: 4,
      title: 'Cancel',
      color: AppColors.CANCEL,
      icon: <CloseCircle size="32" color={AppColors.WHITE} />,
      count: cancel,
    },
  ];

  return (
    <View style={styles.container}>
      {tasks.map(item => (
        <TouchableOpacity
          key={item.id}
          style={[styles.item, {backgroundColor: `${item.color}`}]}>
          {item.icon}
          <View
            style={{
              marginTop: 20,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View style={{}}>
              <Text
                style={{
                  color: AppColors.WHITE,
                  fontSize: 18,
                  fontWeight: '600',
                  marginBottom: 5,
                }}>
                {item.title}
              </Text>
              <Text
                style={{
                  color: AppColors.WHITE,
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                {item.count} Task
              </Text>
            </View>
            <ArrowCircleRight
              size="32"
              color={AppColors.WHITE}
              variant="Bulk"
            />
          </View>
        </TouchableOpacity>
      ))}
      <Text style={{fontSize: 20, fontWeight: '700'}}>All Tasks</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  item: {
    width: '47%',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
  },
});
