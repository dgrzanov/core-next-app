import { Schema } from "@/@types/Schema";
import React, { FC } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

type SchemaFormProps = {
  schema: Schema;
};
const SchemaForm: FC<SchemaFormProps> = (props) => {
  const { schema } = props;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>();

  const onSubmit: SubmitHandler<InputType> = (data) => {
    alert(JSON.stringify(data));
  };

  console.log(watch("username"));
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <div className="flex justify-start gap-3">
        <label className="w-20">Username:</label>
        <input
          type="text"
          className="bg-slate-600"
          {...(register("username"), { required: true })}
        />
      </div>
      <div className="flex justify-start gap-3">
        <label className="w-20">Password:</label>
        <input
          type="password"
          className="bg-slate-600"
          {...register("password")}
        />
      </div>
      <button type="submit" className="border hover:bg-slate-500">
        Login
      </button>
      {errors.username && <span>This field is required</span>}
    </form>
  );
};

export default SchemaForm;
