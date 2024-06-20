import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import HomeScreen from '../Src/Views/HomeScreen';
import NacionalScreen from '../Src/Views/NacionalScreen';
import InternacionalScreen from '../Src/Views/InternacionalScreen';
import PacotesScreen from '../Src/Views/NacionalScreen';
import LoginScreen from '../Src/Views/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Nacional" component={NacionalScreen} />
                <Stack.Screen name="Internacional" component={InternacionalScreen} />
                <Stack.Screen name="Pacotes" component={PacotesScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                
            </Stack.Navigator>
        </NavigationContainer>
    );
}