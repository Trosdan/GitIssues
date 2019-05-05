import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    marginBottom: metrics.baseMargin,
    padding: metrics.basePadding,
    borderWidth: 1,
    borderColor: colors.light,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  info: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: metrics.baseMargin * 2,
  },
  icon: {},
});

export default styles;
