import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export function LoginScreen() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>BLIP</Text>
        <Text style={styles.subtitle}>Sign in to access Blip Wallet</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          style={styles.input}
        />
        <TextInput
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          style={styles.input}
        />

        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={() => {}}
        >
          Sign In
        </Button>

        <Button mode="text" onPress={() => {}} style={styles.textButton}>
          Don't have an account? Sign Up
        </Button>
      </View>

      <View style={styles.socialLogin}>
        <Text style={styles.socialText}>Social Login</Text>

        <View style={styles.socialButtons}>
          <Button
            mode="outlined"
            style={styles.socialButton}
            onPress={() => {}}
          >
            Google
          </Button>

          <Button
            mode="outlined"
            style={styles.socialButton}
            onPress={() => {}}
          >
            Twitter
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 60,
    marginBottom: 40,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#512DA8",
  },
  subtitle: {
    fontSize: 16,
    textAlign: "center",
    marginTop: 10,
    color: "#666",
  },
  form: {
    marginBottom: 30,
  },
  input: {
    marginBottom: 15,
  },
  button: {
    marginTop: 10,
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#512DA8",
  },
  buttonLabel: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 5,
  },
  textButton: {
    marginTop: 15,
  },
  socialLogin: {
    marginTop: 20,
  },
  socialText: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    color: "#666",
  },
  socialButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  socialButton: {
    width: "45%",
  },
});
