/** @format */

import { renderCommonScreens } from "@navigation/CommonScreens";
import { LOGIN_SCREEN_KEY } from "@navigation/Routes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "@screens/Login/LoginScreen";
import React, { useRef } from "react";

const MainStack = createStackNavigator();

const App: () => JSX.Element = () => {
  const navigationRef: any = useRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <MainStack.Navigator>
        <MainStack.Screen
          name={LOGIN_SCREEN_KEY}
          component={LoginScreen}
          options={{
            headerShown: false,
            gestureEnabled: false,
            animationEnabled: false,
          }}
        />
        {renderCommonScreens(MainStack)}
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
