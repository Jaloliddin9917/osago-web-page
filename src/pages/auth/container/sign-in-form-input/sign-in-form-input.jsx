import React from "react";
import "./sign-in-form-input.style.scss";
import { Button } from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import { loginValidation, passwordValidation } from "./validation";

import { useForm, Controller, useFormState } from "react-hook-form";

const SignInFormInput = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { handleSubmit, control } = useForm({ defaultValues });
  const { errors } = useFormState({
    control,
  });

  const onSubmit = handleSubmit((data) => {
    onFormSubmit(data);
  });

  return (
    <form className="auth-form__form" onSubmit={onSubmit}>
      <Controller
        control={control}
        name="email"
        rules={loginValidation}
        render={({ field }) => (
          <TextField
            label="Email"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.email?.message}
            helperText={errors?.email?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        rules={passwordValidation}
        render={({ field }) => (
          <TextField
            label="Password"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.password?.message}
            helperText={errors?.password?.message}
          />
        )}
      />
      <Button className="login-button" margin={30} auto shadow type="submit">
        <span style={{ color: "white" }}>Submit</span>
      </Button>
    </form>
  );
};

export default SignInFormInput;
