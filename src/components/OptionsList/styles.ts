import styled from "styled-components/native";

export const ScreenView = styled.View`
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

export const ItemContainer = styled.View`
	margin: 10px 20px;
	align-items: center;
`;

export const Item = styled.TouchableOpacity`
	background-color: #dedede;
	width: 60px;
	height: 60px;
	justify-content: center;
	align-items: center;
	border-radius: 99999px;
`;
