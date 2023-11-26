import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { Record } from "@/components/SchemaForm/SchemaForm";

// Types
import { FieldValidation } from "@/@types/Schema";

type PasswordInputProps = {
  register: UseFormRegister<Record>;
  label: string;
  dbName: string;
  error: any;
  validation?: FieldValidation;
};

const PasswordInput: FC<PasswordInputProps> = (props) => {
  const { register, label, dbName, validation, error } = props;

  return (
    <div className="flex justify-start gap-3">
      <label className="w-20">{label}</label>
      <input
        type="password"
        className="bg-slate-600"
        {...register(dbName, validation && { ...validation })}
      />
      {error && (
        <span className="text-red-600">There has been an error :(</span>
      )}
    </div>
  );
};

export default PasswordInput;
