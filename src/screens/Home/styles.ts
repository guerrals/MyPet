import styled from "styled-components/native";

export const PetsScrollView = styled.ScrollView``;

export const PetsContentContainer = styled.View`
	margin: 0px 15px;
`;

export const PetsHeaderContainer = styled.View`
	flex-direction: row;
	align-items: center;
	padding-bottom: 5px;
	justify-content: space-between;
`;

export const PetsHeaderTextIcon = styled.View`
	flex-direction: row;
	align-items: center;
`;

export const PetsHeaderText = styled.Text`
	font-size: 24px;
	font-weight: bold;
	margin-right: 5px;
`;

export const PetsAddButton = styled.TouchableOpacity`
	background-color: #dedede;
	border-radius: 99999px;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
`;

export const PetsAddButtonText = styled.Text``;
