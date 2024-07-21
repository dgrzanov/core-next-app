import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

// Custom components
import { Record } from "@/components/SchemaForm/SchemaForm";
import ErrorMessage from "../ErrorMessage";
import { Checkbox } from "@/components/ui/checkbox";

// Types
import { FieldValidation } from "@/@types/Schema";

type TextInputProps = {
  register: UseFormRegister<Record>;
  label: string;
  dbName: string;
  error: any;
  validation?: FieldValidation;
};

const TextInput: FC<TextInputProps> = (props) => {
  const { register, label, dbName, validation, error } = props;

  return (
    <div className="flex justify-start gap-3">
      <label className="w-20" htmlFor={dbName}>
        {label}
      </label>
      <Checkbox
        id={dbName}
        className="self-center"
        {...register(
          dbName,
          validation && {
            ...validation,
          }
        )}
      />
      {error && <ErrorMessage error={error} validation={validation} />}
    </div>
  );
};

export default TextInput;
