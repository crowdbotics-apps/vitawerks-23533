import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial187870Navigator from '../features/Tutorial187870/navigator';
import NotificationList187842Navigator from '../features/NotificationList187842/navigator';
import Settings187841Navigator from '../features/Settings187841/navigator';
import Settings187833Navigator from '../features/Settings187833/navigator';
import UserProfile187831Navigator from '../features/UserProfile187831/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial187870: { screen: Tutorial187870Navigator },
NotificationList187842: { screen: NotificationList187842Navigator },
Settings187841: { screen: Settings187841Navigator },
Settings187833: { screen: Settings187833Navigator },
UserProfile187831: { screen: UserProfile187831Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
