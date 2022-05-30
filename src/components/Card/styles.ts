import styled from "styled-components/native";

export const CardView = styled.View`
	align-items: center;
	flex-direction: row;
	border: 2px solid white;
	border-radius: 7px;
	background-color: #fff;
	margin-bottom: 15px;
	padding: 10px;
	box-shadow: 3px 3px 3px black;
	elevation: 3;
`;

export const CardContent = styled.View`
	flex: 1;
	padding-left: 10px;
	position: relative;
`;

export const CardPetName = styled.Text`
	font-size: 24px;
	font-weight: 600;
	color: black;
`;

export const CardPetAge = styled.Text`
	position: absolute;
	top: 0px;
	right: 0px;
`;
export const CardPetNickname = styled.Text`
	font-size: 16px;
	font-weight: 400;
	color: grey;
`;
export const CardPetSiutation = styled.Text`
	font-size: 16px;
	font-weight: 400;
	color: grey;
`;
