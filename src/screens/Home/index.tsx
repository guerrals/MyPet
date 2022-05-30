import React from "react";
import Card from "../../components/Card";
import Header from "../../components/Header";
import ScreenList from "../../components/OptionsList";
import {
	PetsAddButton,
	PetsAddButtonText,
	PetsContentContainer,
	PetsHeaderContainer,
	PetsHeaderText,
	PetsHeaderTextIcon,
	PetsScrollView,
} from "./styles";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NavigationStackProps } from "../../routes/app.routes";
import { SafeAreaView } from "react-native-safe-area-context";
// import { Container } from './styles';

export default function Home() {
	const navigation = useNavigation<NavigationStackProps>();
	return (
		<SafeAreaView>
			<PetsScrollView>
				<Header />
				<PetsContentContainer>
					<ScreenList />
					<PetsHeaderContainer>
						<PetsHeaderTextIcon>
							<PetsHeaderText>Pets</PetsHeaderText>
							<AntDesign name="heart" size={24} color="red" />
						</PetsHeaderTextIcon>
						<PetsAddButton
							onPress={() => navigation.navigate("PetForm")}
						>
							<PetsAddButtonText>
								<AntDesign
									name="plus"
									size={24}
									color="black"
								/>
							</PetsAddButtonText>
						</PetsAddButton>
					</PetsHeaderContainer>
					<Card />
					<Card />
				</PetsContentContainer>
			</PetsScrollView>
		</SafeAreaView>
	);
}
