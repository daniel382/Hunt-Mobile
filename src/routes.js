import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Main from './pages/main'

const navigationOptions = {
    headerStyle: { backgroundColor: '#DA552F' },
    headerTintColor: '#FFF'
}

export default createAppContainer(
    createStackNavigator({
        Main: {
            screen: Main,
            navigationOptions
        }
    })
)