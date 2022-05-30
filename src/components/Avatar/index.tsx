import React from "react";
import { AvatarImage, AvatarView } from "./styles";
import Alaska from "../../assets/images/alaska.jpeg";

type AvatarProps = {
	path: string;
};
export default function Avatar({ path }: AvatarProps) {
	// Usar o path para resgatar imagem
	return (
		<AvatarView>
			<AvatarImage source={Alaska} resizeMode="center" />
		</AvatarView>
	);
}
