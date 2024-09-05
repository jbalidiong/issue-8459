import { StatusBar } from "expo-status-bar";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Text, View, Button, StyleSheet} from "react-native";
import { auth } from "./firebase/firebase";

export default function App() {
	const creatUser = async (e) =>{

		createUserWithEmailAndPassword(auth, "test@sample.com", "test1234")
		.then((userCredential) => {
			console.log(userCredential);
		})
		.catch((err) => {
			console.log(err.code, err.message);
		});
	}
	const styles = StyleSheet.create({
		content:{justifyContent: "center",
		alignItems: "center",
		flex: 1
		}
	})
	return (
		<View style={styles.content}>
			<Text>Open up App.js to start working on your app!</Text>
			<Button onPress={creatUser} title="Create User"/>
			<StatusBar style="auto" />
		</View>
	);
}