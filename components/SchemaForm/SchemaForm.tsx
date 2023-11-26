"use client";
import { Schema } from "@/@types/Schema";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextInput from "./Inputs/TextInput";
import PasswordInput from "./Inputs/PasswordInput";

// Types
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
        }
      })}
      <button type="submit" className="border hover:bg-slate-500">
        Login
      </button>
    </form>
  );
};

export default SchemaForm;
