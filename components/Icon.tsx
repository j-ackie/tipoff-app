import AvailableIcon from '@/constants/availableIcon';
import { Ionicons } from '@expo/vector-icons';
import { FC } from 'react';

interface IconProps {
  name: AvailableIcon;
  size: number;
  color?: string;
}

const Icon: FC<IconProps> = ({ name, size, color = 'black' }) => {
  switch (name) {
    case AvailableIcon.GOOGLE:
      return <Ionicons name="logo-google" size={size} color={color} />;
    default:
      throw 'Icon does not exist';
  }
};

export default Icon;
