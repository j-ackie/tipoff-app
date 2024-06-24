import { FC, PropsWithChildren } from 'react';
import TipoffText from './TipoffText';
import { StyleSheet } from 'react-native';

const Label: FC<PropsWithChildren> = ({ children }) => {
  return <TipoffText style={styles.label}>{children}</TipoffText>;
};

export default Label;

const styles = StyleSheet.create({
  label: {
    fontSize: 20,
  },
});
