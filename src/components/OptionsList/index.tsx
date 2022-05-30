import React from "react";
import { Text } from "react-native";
import { Item, ItemContainer, ScreenView } from "./styles";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
// import { Container } from './styles';

export default function ScreenList() {
	return (
		<ScreenView>
			<ItemContainer>
				<Item>
					<MaterialIcons
						name="local-hospital"
						size={24}
						color="black"
					/>
				</Item>
				<Text>Saúde</Text>
			</ItemContainer>
			<ItemContainer>
				<Item>
					<Foundation name="guide-dog" size={24} color="black" />
				</Item>
				<Text>Passeio</Text>
			</ItemContainer>
			<ItemContainer>
				<Item>
					<FontAwesome5 name="dog" size={24} color="black" />
				</Item>
				<Text>Adestrar</Text>
			</ItemContainer>
			<ItemContainer>
				<Item>
					<Fontisto name="hotel" size={24} color="black" />
				</Item>
				<Text>Viagem</Text>
			</ItemContainer>
		</ScreenView>
	);
}
