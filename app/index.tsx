import { ImageBackground, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { Ionicons } from "@expo/vector-icons";

type Props = {};

const WelcomeScreen = (props: Props) => {
  return (
    <>
      <Stack.Screen options={{headerShown: false}} />
      <ImageBackground source={require("@/assets/images/ecommerce-splash.jpg")} style={{flex: 1}} resizeMode="cover">
      <View style={styles.container}>
        <LinearGradient colors={["transparent", "rgba(255, 255, 255, 0.9)", "rgba(255, 255, 255, 1)"]} style={styles.background}>
          <View style={styles.wrapper}>
          <Text style={styles.title}>Istore</Text>
          <Text style={styles.description}>
            Vous plateforme de consommation
            qui met en relation des professionnels comme des particuliers au Gabon, souhaitant
            donner vendre, louer ou acheter des biens ou services.
          </Text>
          <View style={styles.socialLoginWrapper}>
            <Link href={"/signin"} asChild>
              <Pressable style={styles.button}>
                <Ionicons name="mail-outline" size={20} color={Colors.black} />
                <Text style={styles.btnTxt}>Continuer avec l'email</Text>
              </Pressable>
            </Link>
			<Link href={"/signin"} asChild>
              <Pressable style={styles.button}>
                <Ionicons name="logo-google" size={20} color={Colors.black} />
                <Text style={styles.btnTxt}>Continuer avec Google</Text>
              </Pressable>
            </Link>
			<Link href={"/signin"} asChild>
              <Pressable style={styles.button}>
                <Ionicons name="logo-apple" size={20} color={Colors.black} />
                <Text style={styles.btnTxt}>Continuer avec Apple</Text>
              </Pressable>
            </Link>
          </View>
          <Link href={"/signup"} asChild>
            <Pressable>
              <Text>Go to SignUp Screen</Text>
            </Pressable>
          </Link>
          </View>
      </LinearGradient>
    </View>
    </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  background: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'flex-end',
  },
  wrapper: {
    paddingBottom: 50,
    paddingHorizontal: 20,
    alignItems: 'center'
  },
  title: {
    fontSize: 22,
    color: Colors.primary,
    fontWeight: '700',
    letterSpacing: 2.4,
    marginBottom: 5
  },
  description: {
    fontSize: 14,
    color: Colors.gray,
    letterSpacing: 1.2,
    lineHeight: 30,
    marginBottom: 20
  },
  socialLoginWrapper: {

  },
  button: {
    flexDirection: 'row',
    padding: 10,
    borderColor: Colors.gray,
    borderWidth: StyleSheet.hairlineWidth,
	borderRadius: 25,
    alignItems: 'center',
	justifyContent: 'center',
	gap: 5,
	marginBottom: 15,
  },
  btnTxt: {
	fontSize: 14,
	fontWeight: 600,
	color: Colors.black,
  },
});
