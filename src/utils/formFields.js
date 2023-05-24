const signinFields = [
  {
    id: "email-address",
    name: "email",
    type: "email",
    isRequired: true,
    placeholder: "Email address",
    pattern: "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder: "Password",
    pattern: "(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}",
  },
];

const signupFields = [
  {
    id: "username",
    name: "username",
    type: "text",
    isRequired: true,
    placeholder: "Username",
    pattern: "^(?=.{3,20}$)[a-zA-Z]+$"
    ,
  },
  {
    id: "email-address",
    name: "email",
    type: "email",
    isRequired: true,
    placeholder: "Email address",
    pattern: "/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,}$/",
  },
  {
    id: "password",
    name: "password",
    type: "password",
    isRequired: true,
    placeholder: "Password",
    pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$",
  },
  {
    id: "confirm-password",
    name: "confirm-password",
    type: "password",
    isRequired: true,
    placeholder: "Confirm Password",
    pattern: "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,20}$",
  },
];

const activityFields = [
  {
      labelText: "Activity Type",
      labelFor: "activitytype",
      id: "activitytype",
      name: "Activitytype",
      type: "select",
      isRequired: true,
      placeholder: "Select Activity Type",
      options: [
          { value: "option1", label: "Option 1" },
          { value: "option2", label: "Option 2" },
          { value: "option3", label: "Option 3" },
          { value: "option4", label: "Option 4" },
          { value: "option5", label: "Option 5" },
      ],
  },
  {
      labelText: "Description",
      labelFor: "description",
      id: "description",
      name: "Description",
      type: "textarea",
      isRequired: true,
      placeholder: "Enter Description",
  },
  {
      labelText: "Date",
      labelFor: "date",
      id: "date",
      name: "Date",
      type: "date",
      isRequired: true,
      placeholder: "Select Date",
  },
  {
      labelText: "Time",
      labelFor: "time",
      id: "time",
      name: "Time",
      type: "time",
      isRequired: true,
      placeholder: "Select Time",
  },
];


export { signinFields, signupFields, activityFields };
