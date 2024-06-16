import { PressableProps, StyleSheet } from 'react-native';
import PressableOpacity from './PressableOpacity';
import TipoffText from './TipoffText';
import AvailableIcon from '@/constants/availableIcon';
import { FC } from 'react';
import Icon from './Icon';

interface TextButtonProps extends PressableProps {
  title: string;
  leftIcon?: AvailableIcon;
}

const TextButton: FC<TextButtonProps> = ({ title, leftIcon, ...props }) => {
  return (
    <PressableOpacity {...props} style={styles.container}>
      {leftIcon !== undefined && <Icon name={leftIcon} size={25} />}
      <TipoffText>{title}</TipoffText>
    </PressableOpacity>
  );
};

export default TextButton;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    padding: 5,
    gap: 10,
  },
});
