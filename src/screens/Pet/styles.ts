import styled from "styled-components/native";

export const PetView = styled.ScrollView``;

export const PetImageContainer = styled.View`
	justify-content: center;
	align-items: center;
	position: relative;
`;

export const PetImage = styled.Image`
	height: 350px;
`;

export const PetName = styled.Text`
	font-size: 24px;
	font-weight: 600;
	color: white;
`;

export const PetAge = styled.Text`
	top: 0px;
	right: 0px;
`;
export const PetNickname = styled.Text`
	font-size: 16px;
	font-weight: 400;
	color: grey;
`;
export const PetSiutation = styled.Text`
	font-size: 16px;
	font-weight: 400;
	color: grey;
`;

export const AbsoluteContainer = styled.View`
	position: absolute;
	left: 0px;
	bottom: 0px;
	padding-left: 20px;
	padding-bottom: 20px;
`;

export const SectionsHeaderTitle = styled.Text`
	font-size: 24px;
	font-weight: 600;
	margin-top: 10px;
`;
export const SectionsContainer = styled.View`
	flex: 1;
	margin: 0px 20px;
`;
export const SectionContainer = styled.View`
	padding: 15px;
	margin: 20px 0px;
	border-radius: 7px;
	background-color: #fff;
	height: 180px;
	box-shadow: 3px 3px 3px black;
	elevation: 5;
`;
export const SectionHeaderTitle = styled.Text`
	font-size: 18px;
	font-weight: 500;
`;
