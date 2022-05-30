import { RouteProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Pressable } from "react-native";
import { NavigationStackProps, RootStackParams } from "../../routes/app.routes";
import Avatar from "../Avatar";
import {
	CardPetAge,
	CardContent,
	CardPetNickname,
	CardPetName,
	CardView,
	CardPetSiutation,
} from "./styles";

export default function Card() {
	const navigation = useNavigation<NavigationStackProps>();
	function navigateTo() {
		navigation.navigate("Pet", { id: 1 });
	}

	const { dogName, dogNickname, dogSituation, dogAge } = {
		dogName: "Alaska",
		dogNickname: "Benzinho",
		dogSituation: "safe",
		dogAge: "7",
	};
	return (
		<Pressable onPress={navigateTo}>
			<CardView>
				<Avatar path={""} />
				<CardContent>
					<CardPetName>{dogName}</CardPetName>
					<CardPetNickname>{dogNickname}</CardPetNickname>
					<CardPetSiutation>{dogSituation}</CardPetSiutation>
					<CardPetAge>{dogAge}</CardPetAge>
				</CardContent>
			</CardView>
		</Pressable>
	);
}
