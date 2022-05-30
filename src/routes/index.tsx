import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import AppRoutes from "./app.routes";

// import { Container } from './styles';

export default function Router() {
	return (
		<NavigationContainer>
			<AppRoutes />
		</NavigationContainer>
	);
}
