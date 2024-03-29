export type Schema = {
  name: string;
  apiPath: string;
  fields: Field[];
};

type Field = {
  name: string;
  db_name: string;
  type: "text" | "number" | "date" | "password" | "boolean" | "picker";
	options?: PickerOptions;
  validation?: FieldValidation;
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

export PickerOptions = {
	labels: string[];
	values: number[] | string[];
}
