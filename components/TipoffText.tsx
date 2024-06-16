import { FC } from 'react';
import { Text, TextProps } from 'react-native';

interface TipoffTextProps extends TextProps {}

const TipoffText: FC<TipoffTextProps> = ({ children, style, ...props }) => {
  return (
    <Text style={[{ color: 'white' }, style]} {...props}>
      {children}
    </Text>
  );
};

export default TipoffText;
