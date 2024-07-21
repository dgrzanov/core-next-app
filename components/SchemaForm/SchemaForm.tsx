"use client";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

// Custom components
import TextInput from "./Inputs/TextInput";
import PasswordInput from "./Inputs/PasswordInput";
import BooleanInput from "./Inputs/BooleanInput";
import PickerInput from "./Inputs/PickerInput";
import DateInput from "./Inputs/DateInput";
import { Button } from "@/components/ui/button";

// Types
import { Schema } from "@/@types/Schema";

type SchemaFormProps = {
  schema: Schema;
};

export type Record = {
  [key: string]: any;
};

const SchemaForm: FC<SchemaFormProps> = (props) => {
  const { schema } = props;

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Record>();

  const onSubmit: SubmitHandler<Record> = (data) => {
    console.log("Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      {schema.fields.map((field) => {
        switch (field.type) {
          case "text": {
            return (
              <TextInput
                key={`${field.db_name}-input`}
                register={register}
                label={field.name}
                dbName={field.db_name}
                validation={field.validation}
                error={errors[field.db_name]}
              />
            );
          }
          case "password": {
            return (
              <PasswordInput
                key={`${field.db_name}-input`}
                register={register}
                label={field.name}
                dbName={field.db_name}
                validation={field.validation}
                error={errors[field.db_name]}
              />
            );
          }
          case "boolean": {
            return (
              <BooleanInput
                key={`${field.db_name}-input`}
                register={register}
                label={field.name}
                dbName={field.db_name}
                validation={field.validation}
                error={errors[field.db_name]}
              />
            );
          }
          case "picker": {
            return (
              <PickerInput
                key={`${field.db_name}-input`}
                register={register}
                label={field.name}
                dbName={field.db_name}
                options={field.options}
                validation={field.validation}
                error={errors[field.db_name]}
              />
            );
          }
          case "date": {
            return (
              <DateInput
                key={`${field.db_name}-input`}
                register={register}
                setValue={setValue}
                label={field.name}
                dbName={field.db_name}
                validation={field.validation}
                error={errors[field.db_name]}
              />
            );
          }
        }
      })}
      <Button type="submit" className="w-40">
        Login
      </Button>
    </form>
  );
};

export default SchemaForm;
