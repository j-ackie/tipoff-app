import { FC } from 'react';
import { StyleSheet, TextInput, TextInputProps } from 'react-native';
import { View } from 'react-native';
import TipoffText from './TipoffText';

interface TipoffTextInputProps extends TextInputProps {
  label?: string;
}

const TipoffTextInput: FC<TipoffTextInputProps> = ({
  label,
  style,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <TipoffText style={styles.label}>{label}</TipoffText>
      <TextInput style={[styles.input, style]} {...props} />
    </View>
  );
};

export default TipoffTextInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 10,
  },
  label: {
    fontSize: 20,
  },
  input: {
    paddingHorizontal: 15,
    color: 'white',
    borderColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
  },
});
