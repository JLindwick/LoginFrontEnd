
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import MainPage from '../screens/MainPage'
import Welcome from '../screens/Welcome'
import Login from '../screens/Login'
import SignUp from '../screens/SignUp'
const StackNavigator = createStackNavigator(
  {
    MainPage: {
      screen: MainPage
    },
    Welcome: {
      screen: Welcome
    },
    SignUp: {
        screen: SignUp
    },
    Login: {
        screen: Login
    }
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
    mode: 'modal'
  }
)

export default createAppContainer(StackNavigator)
