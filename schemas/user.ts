import { Schema } from "@/@types/Schema";

const User: Schema = {
  name: "User",
  apiPath: "api/users",
  fields: [
    {
      name: "Username",
      db_name: "username",
      type: "text",
      validation: {
        required: true,
      },
    },
    {
      name: "Password",
      db_name: "password",
      type: "password",
      validation: {
        required: true,
        minLength: 8,
      },
    },
    {
      name: "Admin",
      db_name: "is_admin",
      type: "boolean",
    },
		{
			name: "Gender",
			db_name: "gender",
			type: "picker",
			options: {
				labels: ["Male", "Female"],
				values: ["M", "F"],
			}
		}
  ],
};

export default User;
