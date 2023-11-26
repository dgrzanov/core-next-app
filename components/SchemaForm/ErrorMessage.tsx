import React, { FC, useEffect, useState } from "react";
import { FieldError } from "react-hook-form";

// Types
import { FieldValidation } from "@/@types/Schema";

export type ErrorMesageProps = {
  error: FieldError;
  validation?: FieldValidation;
};

const ErrorMessage: FC<ErrorMesageProps> = (props) => {
  const [message, setMessage] = useState("");
  const { error, validation } = props;

  // TODO add more messages
  useEffect(() => {
    switch (error.type) {
      case "required":
        setMessage("This field is required");
        break;
      case "pattern": // TODO add different message for password type
        setMessage("Input does not match the required pattern");
        break;
      case "minLength":
        setMessage(`Minimal length of input is ${validation?.minLength}`);
        break;
      case "maxLength":
        setMessage(`Maximum length of input is ${validation?.maxLength}`);
        break;
      default:
        setMessage("There has been an error");
    }
  }, [error]);

  return <span className="text-red-600">{message}</span>;
};

export default ErrorMessage;
