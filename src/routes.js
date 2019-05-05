import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from '~/pages/home';
import Issues from '~/pages/issues';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
    Issues,
  }),
);

export default Routes;
