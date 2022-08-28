import * as yup from "yup";

export const formData = {
  id: "state-of-phage-2020",
  name: "State of Phage 2020",
  description: "Give us info about yourself",
  settings: {
    submitText: "Press this big button!"
  },
  submitHandler: (data) => {
    console.log('[formtest submit.handler] Submitting with data:', data)
  },
  fields: [
    {
      name: "Intro",
      description: "### Description here!",
      fieldType: "Descriptor",
      styles: {
        labelClasses: "font-bold",
        descriptionClasses: "w-full",
        formletClasses: "mb-16",
      }
    },
    {
      name: "email",
      label: `Your official email address`,
      description: `This e-mail address will appear as your presenter e-mail address in the abstract.`,
      placeholder: `jane.doe@cmu.edu`,
      fieldType: "Input",
      type: "email",
      styles: {
        formletClasses: "mb-16",
        fieldClasses: "w-full"
      }
    },
    {
      name: "textArea",
      label: `Some big text area (optional)`,
      placeholder: `Enter some text`,
      rows: 2,
      fieldType: "Textarea",
      styles: {
        formletClasses: "mb-16",
        fieldClasses: "w-full"
      }
    },
    {
      name: "testCheck",
      label: `woof woof`,
      description: `__meow meow??__`,
      fieldType: "Checkbox",
      styles: {
        formletClasses: "mb-16",
        fieldClasses: ""
      }
    },
  ],
  yup: {
    initialValues: {
      email: undefined,
      textArea: "Some value once told me",
      testCheck: true,
    },
    validators: {
      email: yup
        .string()
        .email("use a real email!")
        .required("email required!"),
      textArea: yup.string().required("hey, write something here."),
      testCheck: yup.boolean(),
    }
  }
};
