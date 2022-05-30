import React from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Form from "../../components/Form";

// import { Container } from './styles';

export default function PetForm() {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<Form />
		</SafeAreaView>
	);
}
