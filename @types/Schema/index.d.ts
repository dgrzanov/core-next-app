export type Schema = {
  name: string;
  apiPath: string;
  fields: Field[];
};

type BasicField = {
  name: string;
  db_name: string;
};

type Field = BasicField &
  (
    | TextField
    | NumberField
    | DateField
    | PasswordField
    | BooleanField
    | PickerField
  );

type TextField = {
  type: "text";
  validation?: BasicValidation & TextValidation;
};

type NumberField = {
  type: "number";
  validation?: BasicValidation & NumberValidation;
};

type DateField = {
  type: "date";
  validation?: BasicValidation & DateValidation;
};

type PasswordField = {
  type: "password";
  validation?: BasicValidation & TextValidation;
};

type BooleanField = {
  type: "boolean";
  validation?: BasicValidation;
};

type PickerField = {
  type: "picker";
  options: PickerOptions;
  validation?: BasicValidation;
};

export type FieldValidation = BasicValidation &
  (TextValidation | NumberValidation | DateValidation);

export type BasicValidation = {
  required?: boolean;
  validateCallback?: Function | Object;
};

export type TextValidation = {
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
};

export type NumberValidation = {
  min?: number;
  max?: number;
};

export type DateValidation = {};

export type PickerOptions = {
  labels: string[];
  values: number[] | string[];
};
