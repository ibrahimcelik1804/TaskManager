import {
  ChartCircle,
  Clock,
  CloseCircle,
  TickCircle,
} from 'iconsax-react-native';
import {AppColors} from '../theme/color';

export const status = {
  ONGOING: 1,
  PENDING: 2,
  COMPLATED: 3,
  CANCEL: 4,
};

export const tasksValues = [
  {
   status: 1,
    title: 'Ongoing',
    color: AppColors.ONGOING,
    icon: <ChartCircle size="40" color={AppColors.WHITE} />,
  
  },
  {
    status: 2,
    title: 'Pending',
    color: AppColors.PENDING,
    icon: <Clock size="40" color={AppColors.WHITE} />,
 
  },
  {
    status: 3,
    title: 'Complated',
    color: AppColors.COMPLATED,
    icon: <TickCircle size="40" color={AppColors.WHITE} />,

  },
  {
    status: 4,
    title: 'Cancel',
    color: AppColors.CANCEL,
    icon: <CloseCircle size="40" color={AppColors.WHITE} />,

  },
];
