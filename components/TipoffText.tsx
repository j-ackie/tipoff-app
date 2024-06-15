import { FC } from 'react';
import { Text, TextProps } from 'react-native';

interface TipoffTextProps extends TextProps {}

const TipoffText: FC<TipoffTextProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default TipoffText;
