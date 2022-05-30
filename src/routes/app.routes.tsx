import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import Home from "../screens/Home";
import Pet from "../screens/Pet";
import PetForm from "../screens/PetForm";

export type RootStackParams = {
	Home: undefined;
	Pet: { id: number };
	PetForm: undefined;
};

export type NavigationStackProps = NativeStackNavigationProp<RootStackParams>;

// import { Container } from './styles';
const Stack = createNativeStackNavigator();

export default function AppRoutes() {
	return (
		<Stack.Navigator initialRouteName="Home">
			<Stack.Screen
				name="Home"
				component={Home}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="Pet"
				component={Pet}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name="PetForm"
				component={PetForm}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
