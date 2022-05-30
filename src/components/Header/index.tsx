import React from "react";
import {
	AvatarTouchable,
	HeaderContent,
	HeaderView,
	TutorImage,
	TutorName,
} from "./styles";
import { Feather } from "@expo/vector-icons";
import { StatusBar } from "react-native";
const statusBarHeight: number = StatusBar.currentHeight
	? StatusBar.currentHeight + 24
	: 64;

export default function Header() {
	const { name } = { name: "Jefferson Guerra" };
	return (
		<HeaderView statusBarHeight={statusBarHeight}>
			<HeaderContent>
				<TutorName>{name}</TutorName>
				<AvatarTouchable>
					<Feather name="user" size={24} color="black" />
				</AvatarTouchable>
			</HeaderContent>
		</HeaderView>
	);
}
