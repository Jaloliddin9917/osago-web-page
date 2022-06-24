import React from "react";
import "./form-input.style.scss";
import { Button } from "@nextui-org/react";
import TextField from "@mui/material/TextField";
import { nameValidation } from './validation';

import { useForm, Controller, useFormState } from "react-hook-form";


const FormInput = ({ defaultValues, onFormSubmit, isLoading }) => {
  const { handleSubmit, control } = useForm({defaultValues});
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
        name="name"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Name"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.name?.message}
            helperText={errors?.name?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="country"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Country"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.country?.message}
            helperText={errors?.country?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="logo"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Logo"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.logo?.message}
            helperText={errors?.logo?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="slogan"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Slogan"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.slogan?.message}
            helperText={errors?.slogan?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="head_quaters"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Head_quaters"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.head_quaters?.message}
            helperText={errors?.head_quaters?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="website"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Website"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.website?.message}
            helperText={errors?.website?.message}
          />
        )}
      />
      <Controller
        control={control}
        name="established"
        rules={nameValidation}
        render={({ field }) => (
          <TextField
            label="Established"
            onChange={(e) => field.onChange(e)}
            value={field.value}
            fullWidth={true}
            size="small"
            margin="normal"
            className="auth-form__input"
            error={!!errors.established?.message}
            helperText={errors?.established?.message}
          />
        )}
      />
      <Button auto shadow type="submit">
        <span style={{ color: "white" }}>Submit</span>
      </Button>
    </form>
  );
};

export default FormInput;
