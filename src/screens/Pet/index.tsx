import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useRef } from "react";
import { RootStackParams } from "../../routes/app.routes";
import {
	AbsoluteContainer,
	PetImage,
	PetImageContainer,
	PetName,
	PetView,
	SectionContainer,
	SectionHeaderTitle,
	SectionsContainer,
	SectionsHeaderTitle,
} from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { Dimensions } from "react-native";
import Alaska from "../../assets/images/alaska.jpeg";
import { Animated } from "react-native";
import { AvatarTouchable } from "../../components/Header/styles";
import ScreenList from "../../components/OptionsList";
import { SafeAreaView } from "react-native-safe-area-context";
type RouteProps = RouteProp<RootStackParams, "Pet">;
export default function Pet() {
	/* const scrollY = useRef(new Animated.Value(0)).current; */
	/* const route = useRoute<RouteProps>();
	const id = route.params?.id; */

	const { dogName, dogNickname, dogSituation, dogAge } = {
		dogName: "Alaska",
		dogNickname: "Benzinho",
		dogSituation: "safe",
		dogAge: "7",
	};
	return (
		<SafeAreaView>
			<PetView
			/* scrollEventThrottle={16}
			onScroll={Animated.event([
				{ nativeEvent: { contentOffSet: { y: scrollY } } },
			])} */
			>
				<PetImageContainer>
					<PetImage
						width={Dimensions.get("screen").width}
						height={400}
						source={Alaska}
						resizeMode="cover"
					/>
					<AbsoluteContainer>
						<PetName>{dogName}</PetName>
					</AbsoluteContainer>
				</PetImageContainer>
				<SectionsContainer>
					<SectionsHeaderTitle>
						Informações do Pet
					</SectionsHeaderTitle>
					<SectionContainer>
						<SectionHeaderTitle>Saúde</SectionHeaderTitle>
					</SectionContainer>
					<SectionContainer>
						<SectionHeaderTitle>Saúde</SectionHeaderTitle>
					</SectionContainer>
					<SectionContainer>
						<SectionHeaderTitle>Saúde</SectionHeaderTitle>
					</SectionContainer>
					<SectionContainer>
						<SectionHeaderTitle>Saúde</SectionHeaderTitle>
					</SectionContainer>
				</SectionsContainer>
			</PetView>
		</SafeAreaView>
	);
}
