export type Schema = {
  name: string;
  apiPath: string;
  fields: [
    {
      name: string;
      db_name: string;
      type: string;
      validation?: FieldValidation;
    }
  ];
};

export type FieldValidation = BasicValidation &
  (TextValidation | NumberValidation | DateValidation);

export type BasicValidation = {
  required?: boolean;
  validateCallback?: Function | Object;
};

export type TextValidation = {
  minLength?: Number;
  maxLength?: Number;
  pattern?: RegExp;
};

export type NumberValidation = {
  min?: Number;
  max?: Number;
};

export type DateValidation = {};
