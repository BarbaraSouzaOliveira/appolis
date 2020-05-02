import { createStackNavigator, HeaderTitle } from 'react-navigation-stack'
import {createAppContainer, createMaterialTopTabNavigator} from 'react-navigation'
import Login from './pages/Login'
import Register from './pages/Login/register'
import Home from './pages/Home'



const RoutesStack = createStackNavigator({
  Login,
  Register,
  Home
},
{
  headerMode: 'none'
}

)


const Routes = createAppContainer(RoutesStack)
export default Routes