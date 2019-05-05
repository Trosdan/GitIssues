import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
  },
});

export default styles;
