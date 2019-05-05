import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: colors.lighter,
    padding: metrics.basePadding,
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: metrics.basePadding,
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
  },
  formInput: {
    borderWidth: 1,
    borderColor: colors.light,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    paddingLeft: metrics.basePadding,
    flex: 0.9,
  },
  formIcon: {
    flex: 0.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatList: {
    marginVertical: metrics.baseMargin * 2,
  },
  error: {
    color: colors.danger,
    textAlign: 'center',
  },
});

export default styles;
