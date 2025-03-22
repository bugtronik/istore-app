import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { Href, Link } from "expo-router";
import { Colors } from "@/constants/Colors";
import Google from '@/assets/images/google-logo.svg';
import Animated, { FadeIn, FadeInDown, FadeInRight } from "react-native-reanimated";

type Props = {
    emailHref: Href
};

const SocialLoginButtons = (props: Props) => {
    const {emailHref} = props;
    return (
        <View style={styles.socialLoginWrapper}>
            <Animated.View entering={FadeInDown.delay(300).duration(500)}>
                <Link href={emailHref} asChild>
                    <TouchableOpacity style={styles.button}>
                        <Ionicons name="mail-outline" size={20} color={Colors.black} />
                        <Text style={styles.btnTxt}>Continuer avec l'email</Text>
                    </TouchableOpacity>
                </Link>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(700).duration(500)}>
                <TouchableOpacity style={styles.button}>
                    <Google width={20} height={20} />
                    <Text style={styles.btnTxt}>Continuer avec Google</Text>
                </TouchableOpacity>
            </Animated.View>
            <Animated.View entering={FadeInDown.delay(1100).duration(500)}>
                <TouchableOpacity style={styles.button}>
                    <Ionicons name="logo-apple" size={20} color={Colors.black} />
                    <Text style={styles.btnTxt}>Continuer avec Apple</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    )
}

export default SocialLoginButtons

const styles = StyleSheet.create({
    socialLoginWrapper: {
        alignSelf: "stretch"
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
})