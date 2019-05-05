import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.light,
    backgroundColor: colors.white,
    marginVertical: metrics.baseMargin / 2,
    marginHorizontal: metrics.baseMargin * 2,
    padding: metrics.basePadding,
    borderRadius: metrics.baseRadius,
  },
  avatar: {
    borderRadius: 25,
    height: 50,
    width: 50,
  },
  info: {
    flex: 1,
    marginLeft: metrics.baseMargin,
  },
});

export default styles;
