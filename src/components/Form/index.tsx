import React from "react";
import { Text, Button } from "react-native";
import { useForm, Controller } from "react-hook-form";
import {
	FormButton,
	FormIconContainer,
	FormIconInputContainer,
	FormInput,
	FormTitleText,
	FormView,
} from "./styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
export default function Form() {
	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			fullName: "",
			nickname: "",
			age: "",
			breed: "",
			nationality: "",
			favorite_toy: "",
		},
	});
	const onSubmit = (data) => console.log(data);

	return (
		<FormView>
			<FormTitleText>Cadastre o seu Pet</FormTitleText>

			<Controller
				control={control}
				rules={{
					required: true,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormIconInputContainer>
						<FormIconContainer>
							<MaterialCommunityIcons
								name="dog"
								size={24}
								color="black"
							/>
						</FormIconContainer>
						<FormInput
							placeholder="Nome"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					</FormIconInputContainer>
				)}
				name="fullName"
			/>
			{errors.fullName && <Text>This is required.</Text>}

			<Controller
				control={control}
				rules={{
					maxLength: 100,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormIconInputContainer>
						<FormIconContainer>
							<AntDesign name="heart" size={24} color="black" />
						</FormIconContainer>
						<FormInput
							placeholder="Apelido carinhoso"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					</FormIconInputContainer>
				)}
				name="nickname"
			/>
			{errors.nickname && <Text>This is required.</Text>}

			<Controller
				control={control}
				rules={{
					max: 25,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormIconInputContainer>
						<FormIconContainer>
							<MaterialIcons
								name="date-range"
								size={24}
								color="black"
							/>
						</FormIconContainer>
						<FormInput
							placeholder="Idade"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					</FormIconInputContainer>
				)}
				name="age"
			/>
			{errors.age && <Text>This is required.</Text>}

			<Controller
				control={control}
				rules={{
					maxLength: 100,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormIconInputContainer>
						<FormIconContainer>
							<FontAwesome5 name="dog" size={24} color="black" />
						</FormIconContainer>
						<FormInput
							placeholder="Raça"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					</FormIconInputContainer>
				)}
				name="breed"
			/>
			{errors.breed && <Text>This is required.</Text>}

			<Controller
				control={control}
				rules={{
					maxLength: 100,
				}}
				render={({ field: { onChange, onBlur, value } }) => (
					<FormIconInputContainer>
						<FormIconContainer>
							<Fontisto name="flag" size={24} color="black" />
						</FormIconContainer>
						<FormInput
							placeholder="Nacionalidade"
							onBlur={onBlur}
							onChangeText={onChange}
							value={value}
						/>
					</FormIconInputContainer>
				)}
				name="nationality"
			/>
			{errors.nationality && <Text>This is required.</Text>}

			<FormButton title="Salvar" onPress={handleSubmit(onSubmit)} />
		</FormView>
	);
}
