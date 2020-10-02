import Form from "../components/Form";
import firebase from "../firebase";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("Please enter a valid email")
    .email()
    .label("Email"),
  password: Yup.string()
    .required()
    .min(6, "Password must have at least 6 characters")
    .label("Password"),
  confirm: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Confirmation password must match password"
  ),
});

const RegisterScreen = ({ navigation }) => {
  const [signInError, setSignInError] = useState("");

  async function handleOnSubmit(values) {
    const { email, password, confirm } = values;
    if (confirm) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
          setSignInError(error.message);
        });
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((error) => {
          setSignInError(error.message);
        });
    }
    navigation.navigate("ScheduleScreen");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Form
          initialValues={{
            email: "",
            password: "",
            confirm: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => handleOnSubmit(values)}
        >
          <Form.Field
            name="email"
            leftIcon="email"
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
          />
          <Form.Field
            name="password"
            leftIcon="lock"
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Field
            name="confirm"
            leftIcon="lock"
            placeholder="Confirm password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
          />
          <Form.Button
            style={{ fontColor: "white", fontSize: 15 }}
            title={(values) => (values.confirm ? "Sign up" : "Log in")}
          />
          {<Form.ErrorMessage error={signInError} visible={true} />}
        </Form>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default RegisterScreen;
