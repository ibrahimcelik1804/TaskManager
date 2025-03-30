import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {AppColors} from '../../theme/color';
import {Add} from 'iconsax-react-native';

const {width, height} = Dimensions.get('window');

const FloatActionButton = props => {
  return (
    <TouchableOpacity {...props} style={styles.container}>
      <Add size="64" color={AppColors.WHITE} />
    </TouchableOpacity>
  );
};

export default FloatActionButton;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: AppColors.ONGOING,
    width: width * 0.2,
    height: width * 0.2,
    borderRadius: width * 0.125,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 40,
    right: 20,
  },
});
