import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import InputField from '@/components/InputField'
import SocialLoginButtons from '@/components/SocialLoginButton'
import { Ionicons } from '@expo/vector-icons'
import { Colors } from "@/constants/Colors";

type Props = {}

const SignInScreen = (props: Props) => {
  return (
    <>
		<Stack.Screen options={{headerTitle: 'Connexion', headerLeft: () => (
			<TouchableOpacity onPress={() => router.back()}>
				<Ionicons name='close' size={24} color={Colors.black} />
			</TouchableOpacity>
		)}} />
    	<View style={styles.container}>
        	<Text style={styles.title}>Connectez-vous à Istore</Text>
			<InputField 
				placeholder="Adresse Email" 
				placeholderTextColor={Colors.gray}
				autoCapitalize="none"
				keyboardType="email-address"
			/>
			<InputField 
				placeholder="Mot de passe" 
				placeholderTextColor={Colors.gray}
				secureTextEntry={true}
			/>
			<TouchableOpacity style={styles.btn} onPress={() => {
        router.dismissAll();
        router.push('/(tabs)');
      }}>
				<Text style={styles.btnTxt}>Connexion</Text>
			</TouchableOpacity>

			<Text style={styles.loginTxt}>
				Vous n'avez pas de compte ? {" "}
				<Link href={"/signup"} asChild>
					<TouchableOpacity>
						<Text style={styles.loginTxtSpan}>Créez votre compte</Text>
					</TouchableOpacity>
				</Link>
			</Text>
			<View style={styles.divider} />
			<SocialLoginButtons emailHref={'/signin'} />
		</View>
    </>
  )
}

export default SignInScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  padding: 20,
  backgroundColor: Colors.background
  },
  title: {
  fontSize: 24,
  fontWeight: '600',
  letterSpacing: 1.2,
  color: Colors.black,
  marginBottom: 50
  },
  inputField: {
  backgroundColor: Colors.white,
  paddingVertical: 12,
  paddingHorizontal: 18,
  alignSelf: 'stretch',
  borderRadius: 5,
  fontSize: 16,
  color: Colors.black,
  marginBottom: 20
  },
  btn: {
  backgroundColor: Colors.primary,
  paddingVertical: 14,
  paddingHorizontal: 18,
  alignSelf: 'stretch',
  alignItems: 'center',
  borderRadius: 5,
  marginBottom: 20
  },
  btnTxt: {
  color: Colors.white,
  fontSize: 16,
  fontWeight: '600'
  },
  loginTxt: {
  marginBottom: 30,
    fontSize: 14,
    color: Colors.black,
    lineHeight: 24
  },
  loginTxtSpan: {
    color: Colors.primary,
    fontWeight: '600'
  },
  divider: {
  borderTopColor: Colors.gray,
  borderTopWidth: StyleSheet.hairlineWidth,
  width: '30%',
  marginBottom: 30
  }
})