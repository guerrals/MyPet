import React from "react";
import { View } from "react-native";
import { AvatarImage, AvatarTouchableOpacity } from "./styles";
import Alaska from "../../assets/images/alaska.jpeg";

type AvatarTouchableProps = {
	path: string;
};

export default function AvatarTouchable({ path }: AvatarTouchableProps) {
	// Adicionar path
	return (
		<AvatarTouchableOpacity>
			<AvatarImage source={Alaska} />
		</AvatarTouchableOpacity>
	);
}
