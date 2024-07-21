import React, { FC } from "react";
import { UseFormRegister } from "react-hook-form";

// Custom components
import { Record } from "@/components/SchemaForm/SchemaForm";
import ErrorMessage from "../ErrorMessage";

// Types
import { FieldValidation, PickerOptions } from "@/@types/Schema";

type PickerInputProps = {
  register: UseFormRegister<Record>;
  label: string;
  dbName: string;
  error: any;
  options: PickerOptions;
  validation?: FieldValidation;
};

const PickerInput: FC<PickerInputProps> = (props) => {
  const { register, label, dbName, options, validation, error } = props;

  return (
    <div className="flex justify-start gap-3">
      <label className="w-20">{label}</label>
      <select
        className="select rounded-none bg-slate-600"
        defaultValue={"default"}
        {...register(
          dbName,
          validation && {
            ...validation,
          }
        )}
      >
        <option disabled value="default">
          Pick gender
        </option>
        {options.values.map((val, i) => (
          <option key={`picker-${val}`} value={val}>
            {options.labels[i]}
          </option>
        ))}
      </select>
      {error && <ErrorMessage error={error} validation={validation} />}
    </div>
  );
};

export default PickerInput;
