import AvailableIcon from '@/constants/availableIcon';
import Icon from './Icon';
import PressableOpacity from './PressableOpacity';
import { FC } from 'react';
import { PressableProps, StyleSheet } from 'react-native';

interface IconButtonProps extends PressableProps {
  name: AvailableIcon;
}

const IconButton: FC<IconButtonProps> = ({ name, ...props }) => {
  return (
    <PressableOpacity style={styles.container} {...props}>
      <Icon name={name} size={20} />
    </PressableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
