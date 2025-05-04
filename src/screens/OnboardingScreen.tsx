import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type RootStackParamList = {
  Login: undefined;
  Home: undefined;
};

type NavigationProp = NativeStackNavigationProp<RootStackParamList, "Login">;

export function OnboardingScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handleGetStarted = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        style={styles.scrollContent}
        contentContainerStyle={styles.contentContainer}
      >
        <Text style={styles.title}>BLIP</Text>
        <Text style={styles.subtitle}>
          The easiest way to connect, swap, and grow with Solana users around
          you
        </Text>

        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/icon.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>

        <View style={styles.features}>
          <FeatureItem
            title="Unified Wallet Experience"
            description="Manage multiple Solana wallets in one simple mobile app"
          />
          <FeatureItem
            title="Bluetooth Discovery"
            description="Instantly find and connect with nearby Solana users using Bluetooth"
          />
          <FeatureItem
            title="Social Trading"
            description="Share positions and trade instantly with other users around you"
          />
          <FeatureItem
            title="Cross-Chain Swaps"
            description="Easily move assets between blockchains powered by Wormhole Intents"
          />
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Button
          mode="contained"
          style={styles.button}
          labelStyle={styles.buttonLabel}
          onPress={handleGetStarted}
        >
          Get Started
        </Button>
      </View>
    </View>
  );
}

type FeatureItemProps = {
  title: string;
  description: string;
};

const FeatureItem = ({ title, description }: FeatureItemProps) => (
  <View style={styles.featureItem}>
    <Text style={styles.featureTitle}>{title}</Text>
    <Text style={styles.featureDescription}>{description}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContent: {
    flex: 1,
    padding: 20,
  },
  contentContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    marginTop: 40,
    color: "#512DA8",
  },
  subtitle: {
    fontSize: 20,
    textAlign: "center",
    marginBottom: 40,
    color: "#666",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 40,
  },
  image: {
    width: "80%",
    height: 200,
  },
  features: {
    marginBottom: 20,
  },
  featureItem: {
    marginBottom: 20,
  },
  featureTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#512DA8",
  },
  featureDescription: {
    fontSize: 16,
    color: "#666",
  },
  footer: {
    marginBottom: 20,
  },
  button: {
    padding: 5,
    borderRadius: 10,
    backgroundColor: "#512DA8",
  },
  buttonLabel: {
    fontSize: 18,
    fontWeight: "bold",
    padding: 5,
  },
});
