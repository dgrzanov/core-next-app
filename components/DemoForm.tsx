import React from "react";
import SchemaForm from "./SchemaForm/SchemaForm";

// Schemas
import UserSchema from "@/schemas/user";

const DemoForm = () => {
  return <SchemaForm schema={UserSchema} />;
};

export default DemoForm;
