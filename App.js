// Imports;
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Expo import;
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

// Files;
import { HomeScreen, LoginScreen, RegisterScreen } from "./screens/Index";

// Splash Setting;
SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 300);

const Stack = createNativeStackNavigator();
export default function App() {
  // Custom Fonts;
  let [fontsLoaded] = useFonts({
    "Quicksand-Regular": require("./assets/fonts/Quicksand-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/Quicksand-Bold.ttf"),
    "Quicksand-SemiBold": require("./assets/fonts/Quicksand-SemiBold.ttf"),
    "Quicksand-Medium": require("./assets/fonts/Quicksand-Medium.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Kinda Splash Screen */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />

        {/* Authentication Screens; */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
