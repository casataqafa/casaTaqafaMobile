import React from "react"
import { observer } from "mobx-react-lite"
import { ActivityIndicator, Alert, TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Devider,
  FacebookButton,
  GoogleButton,
  Header,
  Screen,
  Text,
  TextField,
} from "../../components"
// import { useNavigation } from "@react-navigation/native"
import { useStores } from "../../models"
import { color, spacing } from "../../theme"
import { SafeAreaView } from "react-native-safe-area-context"
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { UnAuthenticatedNavigatorParamList } from "../../navigators/unauthenticated-nagivator"
import { StackNavigationProp } from "@react-navigation/stack"
import { useNavigation } from "@react-navigation/native"
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

const SOCIALMEDIASECTION: TextStyle = {
  marginTop: spacing[6],
}

const DEVIDER: ViewStyle = {
  marginBottom: spacing[5],
}

const FOOTER: ViewStyle = {
  flex: 1,
  flexDirection: "column",
  justifyContent: "flex-end",
  marginBottom: spacing[7],
}
const FOOTER_CONTENT: ViewStyle = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
  flexWrap: "wrap",
}

const FOOTERTEXTSTYLE: TextStyle = {
  color: color.primary,
  fontSize: 12,
  fontWeight: "normal",
}

const AGREEMENT_STYLE: TextStyle = {
  fontSize: 12,
  fontWeight: "normal",
}

const FULL: ViewStyle = { backgroundColor: color.transparent, flex: 1 }
export const RegisterScreen = observer(function RegisterScreen() {
  // Pull in one of our MST stores
  const { userStore } = useStores()

  // Pull in navigation via hook
  const navigation = useNavigation<StackNavigationProp<UnAuthenticatedNavigatorParamList>>()

  const goback = () => navigation.goBack()
  const goToTermsOfUse = () => navigation.navigate("termsofuse")

  const [activity, setActivity] = React.useState(false)
  const [name, setName] = React.useState("")
  const [validName, setValidName] = React.useState(false)
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

  const validateName = (nameValue: string) => {
    if (nameValue.indexOf(" ") < 0) {
      setName(nameValue)
      setValidName(false)
    } else {
      setName(nameValue)
      setValidName(true)
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

  const StartSignUp = () => {
    if (!validEmail || !validPassword || !validName) {
      Alert.alert(
        "Erreur",
        `Les informations d'e-mail, de mot de passe ou de nom sont manquantes.`,
        [{ text: "OK" }],
      )
    } else {
      setActivity(!activity)
      SignUp()
    }
  }

  const SignUp = async () => {
    const auth = getAuth()
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredentials) => {
        const user = {
          uid: userCredentials.user.uid,
          name,
          email: userCredentials.user.email,
          profilePicture: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?f=y",
          isFirstTime: false,
          hasInterests: false,
        }
        const usr = await userStore.setUserFireStore(user)

        if (usr) {
          setActivity(!activity)
          userStore.setUser(user)
        }
      })
      .catch((error) => {
        Alert.alert("Erreur", `${error.message}`, [{ text: "OK" }])
      })
  }
  return (
    <View style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <Header leftIcon="back" headerText="Register" onLeftPress={goback} />
        <View>
          <View>
            <View style={ANIMATED_TEXT_FIELD_CONTAINER_STYLE}>
              <TextField
                preset={validName === true || name === "" ? "default" : "outlined"}
                placeholder="Name"
                onChangeText={(e) => validateName(e.toString())}
              />
              {validName === true || name === "" ? null : (
                <Animatable.View
                  style={TEXT_CONTAINER_VALIDATION_STYLE}
                  animation="fadeIn"
                  duration={300}
                  easing="linear"
                >
                  <Text style={TEXT_VALIDATION_STYLE} text="Entrez un nom valide" />
                </Animatable.View>
              )}
            </View>

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

            <Button text="Register" onPress={StartSignUp} />
          </View>
          <View style={SOCIALMEDIASECTION}>
            <Devider style={DEVIDER} />
            <GoogleButton />
            <FacebookButton />
          </View>
        </View>
        <SafeAreaView style={FOOTER}>
          <View style={FOOTER_CONTENT}>
            <Text style={AGREEMENT_STYLE} text="By continuing, you agree to our " />
            <Text onPress={goToTermsOfUse} style={FOOTERTEXTSTYLE} text="Terms of service " />
            <Text style={AGREEMENT_STYLE} text="and  " />
            <Text onPress={goToTermsOfUse} style={FOOTERTEXTSTYLE} text="Privacy Policy." />
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
