"use client";

import { Form, Formik } from "formik";
import TextInput from "@/app/_components/Forms/TextInput/TextInput";
import Button from "@/app/_components/Button/Button";

const LoginForm = () => (
  <Formik
    initialValues={{
      userid: "",
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    <Form className="hero-login">
      <TextInput
        label="User ID"
        name="userid"
        type="text"
        placeholder="User ID"
      />
      <TextInput
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Button buttonStyle="solid" color="primary" width="wide" type="submit">
        Log In
      </Button>
    </Form>
  </Formik>
);

export default LoginForm;
