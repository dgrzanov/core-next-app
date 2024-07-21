import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

// Custom components
import ErrorMessage from "../ErrorMessage";
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
        className="bg-input text-foreground rounded-md p-1 focus:ring focus:ring-ring focus:outline-none"
        {...register(
          dbName,
          validation && {
            ...validation,
            // at least one lowercase letter,
            //          one uppercase letter,
            //          one special character,
            //          one number
            pattern: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
          }
        )}
      />
      {error && <ErrorMessage error={error} validation={validation} />}
    </div>
  );
};

export default PasswordInput;
