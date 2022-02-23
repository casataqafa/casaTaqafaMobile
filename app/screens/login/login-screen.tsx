import React from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Alert, TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Header,
  Screen,
  TextField,
  Text,
  Devider,
  GoogleButton,
  FacebookButton,
} from "../../components"
import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { StackNavigationProp } from "@react-navigation/stack"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useStores } from "../../models"
import { UnAuthenticatedNavigatorParamList } from "../../navigators/unauthenticated-nagivator"
import * as Animatable from "react-native-animatable"

const ROOT: ViewStyle = {
  backgroundColor: color.transparent,
  paddingHorizontal: spacing[5],
  flex: 1,
}

const ACTIVITY_INDICATOR_CONTAINER: ViewStyle = {
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  alignItems: "center",
  justifyContent: "center",
}

const ANIMATED_TEXT_FIELD_CONTAINER_STYLE: ViewStyle = {
  marginBottom: spacing[4],
  paddingTop: spacing[1],
}
const TEXT_CONTAINER_VALIDATION_STYLE: ViewStyle = {
  paddingTop: spacing[4],
}

const TEXT_VALIDATION_STYLE: TextStyle = {
  fontWeight: "normal",
  fontSize: 14,
  lineHeight: 14,
  color: color.palette.lightGrey,
}

const TEXTSTYLE: TextStyle = {
  marginTop: spacing[4],
  color: color.primary,
  fontSize: 16,
  fontWeight: "normal",
}

const SOCIALMEDIASECTION: TextStyle = {
  marginTop: spacing[8],
}

const DEVIDER: ViewStyle = {
  marginBottom: spacing[5],
}

const FOOTER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-end",
  marginBottom: spacing[8],
}
const FOOTER_CONTENT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
}

const FOOTERTEXTSTYLE: TextStyle = {
  color: color.primary,
  fontSize: 16,
  fontWeight: "500",
}

const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }

export const LoginScreen = observer(function LoginScreen() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<UnAuthenticatedNavigatorParamList>>()

  const goToRegistration = () => navigation.navigate("register")
  const goToForgotPassword = () => navigation.navigate("forgotPassword")

  const [activity, setActivity] = React.useState(false)
  const [email, setEmail] = React.useState("")
  const [validEmail, setValidEmail] = React.useState(false)
  const [password, setPassword] = React.useState("")
  const [validPassword, setValidPassword] = React.useState(false)

  const validateEmail = (emailValue: string) => {
    const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w\w+)+$/

    if (reg.test(emailValue) === false) {
      setEmail(emailValue)
      setValidEmail(false)
    } else {
      setEmail(emailValue)
      setValidEmail(true)
    }
  }

  const validatePassword = (passwordValue: string) => {
    if (passwordValue.length < 8) {
      setValidPassword(false)
      setPassword(passwordValue)
    } else {
      setValidPassword(true)
      setPassword(passwordValue)
    }
  }

  const StartSignIn = async () => {
    if (!validEmail || !validPassword) {
      Alert.alert("Erreur", "Les informations d'e-mail ou de mot de passe sont manquantes.", [
        { text: "OK" },
      ])
    } else {
      setActivity(!activity)
      SignIn()
    }
  }

  const SignIn = async () => {
    const auth = getAuth()
    signInWithEmailAndPassword(auth, email, password)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      .then((userCredentials) => {
        userStore.getUser(auth.currentUser.uid).then((userData) => {
          const user = {
            uid: auth.currentUser.uid,
            name: userData.name,
            email: userData.email,
            profilePicture: userData.profilePicture,
            isFirstTime: false,
            hasInterests: true,
          }
          setActivity(!activity)
          userStore.setUser(user)
        })
      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          setActivity(!activity)
          // wrong password
        } else if (error.code === "auth/user-not-found") {
          setActivity(!activity)
          // no user with this email
        }
      })
  }

  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Header headerText="Login" />
        <View>
          <View>
            <View style={ANIMATED_TEXT_FIELD_CONTAINER_STYLE}>
              <TextField
                preset={validEmail === true || email === "" ? "default" : "outlined"}
                placeholder="Email"
                onChangeText={(e) => validateEmail(e.toString())}
              />
              {validEmail === true || email === "" ? null : (
                <Animatable.View
                  style={TEXT_CONTAINER_VALIDATION_STYLE}
                  animation="fadeIn"
                  duration={300}
                  easing="linear"
                >
                  <Text style={TEXT_VALIDATION_STYLE} text="Entrez une adresse email valide" />
                </Animatable.View>
              )}
            </View>

            <View style={ANIMATED_TEXT_FIELD_CONTAINER_STYLE}>
              <TextField
                placeholder="Password"
                preset={validPassword === true || password === "" ? "password" : "outlinedPassword"}
                onChangeText={(e) => validatePassword(e.toString())}
              />
              {validPassword === true || password === "" ? null : (
                <Animatable.View
                  style={TEXT_CONTAINER_VALIDATION_STYLE}
                  animation="fadeIn"
                  duration={500}
                  easing="linear"
                >
                  <Text style={TEXT_VALIDATION_STYLE} text="Doit contenir au moin 8 caractères." />
                </Animatable.View>
              )}
            </View>

            <Button text="Login" onPress={StartSignIn} />
            <Text style={TEXTSTYLE} text="Forgot Password?" onPress={goToForgotPassword} />
          </View>
          <View style={SOCIALMEDIASECTION}>
            <Devider style={DEVIDER} />
            <GoogleButton />
            <FacebookButton />
          </View>
        </View>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Text text="Don't have an account? " />
            <Text style={FOOTERTEXTSTYLE} text="Register" onPress={goToRegistration} />
          </View>
          <View></View>
        </SafeAreaView>
      </Screen>
      {activity === false ? null : (
        <View style={ACTIVITY_INDICATOR_CONTAINER}>
          <ActivityIndicator size="large" color={color.primary} />
        </View>
      )}
    </View>
  )
})
