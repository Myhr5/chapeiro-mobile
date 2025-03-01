import Home from "./screens/home/home.jsx";
import Login from "./screens/login/login.jsx";
import Register from "./screens/register/register.jsx";
import Register2 from "./screens/register2/register2.jsx";


import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function Routes() {
    return <NavigationContainer>
        <Stack.Navigator>

            <Stack.Screen name="home" component={Home} options={{
                headerShown: false
            }} />

            <Stack.Screen name="register2" component={Register2} options={{
                //headerShown: false
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />

            <Stack.Screen name="register" component={Register} options={{
                //headerShown: false
                headerShadowVisible: false,
                title: "",
                headerBackTitle: "Voltar"
            }} />

            <Stack.Screen name="login" component={Login} options={{
                headerShown: false
            }} />

        </Stack.Navigator>
    </NavigationContainer>
}

export default Routes;