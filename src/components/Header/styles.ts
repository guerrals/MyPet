import styled from "styled-components/native";

interface HeaderViewProps {
	statusBarHeight: number;
}

export const HeaderView = styled.View<HeaderViewProps>`
	flex-direction: row;
	padding-top: ${(prop) => `${prop.statusBarHeight}px `};
	padding-left: 16px;
	padding-right: 16px;
	padding-bottom: 44px;
	background-color: blueviolet;
`;

export const HeaderContent = styled.View`
	flex: 1;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
`;

export const AvatarTouchable = styled.TouchableOpacity`
	width: 45px;
	height: 45px;
	border-radius: 99999px;
	background-color: #dedede;
	justify-content: center;
	align-items: center;
`;

export const TutorName = styled.Text`
	font-size: 18px;
	font-weight: 700;
	color: white;
`;

export const TutorImage = styled.Image``;
