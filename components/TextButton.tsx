import { PressableProps, StyleProp, StyleSheet, ViewStyle } from 'react-native';
import PressableOpacity from './PressableOpacity';
import TipoffText from './TipoffText';
import AvailableIcon from '@/constants/availableIcon';
import { FC } from 'react';
import Icon from './Icon';

interface TextButtonProps extends PressableProps {
  style?: StyleProp<ViewStyle>;
  title: string;
  leftIcon?: AvailableIcon;
  toggle?: boolean;
}

const TextButton: FC<TextButtonProps> = ({
  style,
  title,
  disabled,
  leftIcon,
  toggle,
  ...props
}) => {
  return (
    <PressableOpacity
      {...props}
      style={[
        styles.container,
        style,
        { backgroundColor: toggle ? 'white' : 'black' },
      ]}
      disabled={disabled}
    >
      {leftIcon !== undefined && <Icon name={leftIcon} size={25} />}
      <TipoffText style={{ color: toggle ? 'black' : 'white' }}>
        {title}
      </TipoffText>
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
