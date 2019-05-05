import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderWidth: 1,
    borderColor: colors.light,
    backgroundColor: colors.white,
    marginVertical: metrics.baseMargin,
    marginHorizontal: metrics.baseMargin * 2,
    borderRadius: metrics.baseRadius,
  },
  filterButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lighter,
    paddingVertical: metrics.basePadding / 3,
  },
  textButton: {
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.black,
  },
  filterButtonS: {
    backgroundColor: colors.regular,
  },
});

export default styles;
