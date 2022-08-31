import * as yup from "yup";
// import { speciesData } from "./species.js"
import { countries } from "./countries.js"
// import { keywords } from "./keywords.js"


export const formData = {
  id: "vom-2022-abstracts",
  name: "### VoM 2022 Abstract Submission Form",
  description: ``,
  settings: {
    submitText: "Submit your Abstract",
    submittingText: "Submitting your answers...",
    successText: `<div class="_center"><img class="sop-square _center mb-4" alt="Vom2022 Logo" src="/cover.jpeg" /></div>
    \n\n
    \n\n ### Thank you for your abstract submission!
    \n\n The Scientific Committee will review your abstract, and the organizing committee will reach out to you some time in the spring of 2022.
    \n\n ~ Team VoM2022`,
    pageErrorText: "Please correct the following errors before continuing:",
    resetText: "Are you sure you want to start over?",
    resetButton: true,
    resetButtonPreText: "Want to start over?",
    resetButtonText: "Just reset the form!",
    startOverButton: true,
    startOverText: "Fill out another survey",
    startOverPreText: undefined,
    startOverButtonClasses: '',
    logErrors: false,
    tocText: "###### Outline",
    showTOConPages: [1, 2, 3, 4, 5],
    showCompleted: true,
    completedTextBefore: 'Thank you to ',
    completedTextAfter: ' phage researchers who have submitted abstracts!',

  },
  styles: {
    formName: 'mb-4',
    formDescription: '_divider-bottom',
    formIntro: 'mb-4',
    formletContainer: '__formletContainer',
    contentContainer: '_divider-bottom',
    formletFieldContainer: 'mb-4',
    nextButtonClasses: "__action",
    prevButtonClasses: "__outline __soft",
    pageName: "__formletPageName mb-4",
    pageDescription: "__formletPageDescription mb-4",
    successBox: "",
    resetButtonClasses: "_p-4",
    pageTOC: "Card-light  _p-4 Card-light paraWrap",
    surveysCompleted: "Card-light _card _p-4 Card-active",
  },
  submitHandler: (data) => {
    console.log('[formtest submit.handler] Submitting with data:', data)
  },
  pages: [
    'intro', 'profile', 'authors', 'abstract', 'review'
  ],
  intro: {
    label: "Introduction",
    name: "## Getting Started",
    description: `
    \n\n Thank you for your interest in submitting an abstract for Viruses of Microbes 2022, in Portugal!
    \n\n Your abstract will be saved as you fill out and make progress. Please keep the Abstract ID, as you will need it to reference your abstract in the future.
    \n\n We ask you for your contact details so we can reach out if problems arise, but our name and email will be kept private, and we will not share or sell your name or email.
    \n\n By starting the survey, you are also [agreeing to our terms and conditions](https://phage.directory/policies#top)`,
    nextText: "Save & Continue",
    fields: [
      {
        name: "name",
        label: `__Your Full Name *__`,
        placeholder: `Betty Kutter`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle __required",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "email",
        label: `__Email *__`,
        description: `Please use your official e-mail as this will be printed under your name in the abstract book.`,
        placeholder: `betty.kutter@evergreen.edu`,
        fieldType: "Input",
        type: "email",
        styles: {
          // formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle __required",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "vom_id",
        label: `__VoM2022 Registration ID__`,
        description: `Please indicate your VoM2022 registration ID.`,
        placeholder: `1234567`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "mt-8 mb-4",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle ",
        }
      },
      // {
      //   name: "abstract_id",
      //   label: `__Abstract ID__`,
      //   description: `If you want to continue editing your abstract (from previous forms), provide your abstract ID`,
      //   placeholder: `1234567`,
      //   fieldType: "Input",
      //   type: "text",
      //   styles: {
      //     formletClasses: "mt-8 mb-4",
      //     fieldClasses: "w-full"
      //   }
      // },
    ]
  },
  profile: {
    label: "Profile & Preferences",
    name: "## Profile & Preferences",
    description: "Tell us who you are, and your abstract presentation preferences",
    nextText: "Save & Continue",
    fields: [
      {
        name: "institution",
        label: `__Institution / Affiliation *__`,
        description: "Your university and/or organization",
        placeholder: `e.g. Evergreen State College`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "my-8",
          labelClasses: "__required",
          fieldClasses: ""
        }
      },
      // {
      //   name: "country",
      //   label: `__Country *__`,
      //   placeholder: `e.g. United States`,
      //   fieldType: "Input",
      //   type: "text",
      //   styles: {
      //     formletClasses: "mt-8 mb-4",
      //     fieldClasses: "w-full"
      //   }
      // },
      {
        name: 'country',
        label: `__Country *__`,
        description: "Where you are currently based?",
        fieldType: "Select",
        emptystate: 'e.g. United States',
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__required",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__italic",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft __first-active',
        },
        selectOptions: {
          placeholder: 'Click here to choose your country of residence ',
        },
        options: countries
      },

      {
        name: 'keywords',
        label: `__Keywords *__`,
        description: `Please choose or enter at least 3 keywords that describe your abstract`,
        fieldType: "Select",
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__required",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__italic",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft __first-active',
        },
        selectOptions: {
          placeholder: 'Click here to add keywords',
          isCreatable: true,
          isMulti: true,
        },
        options: [] // has to be done on server as API, since Airtable key // keywords().then((kw) => (kw.sort((a, b) => a.name.localeCompare(b.name, 'en', { sensitivity: 'base' }))))
      },

      {
        name: "abstract_pref",
        label: `__Presentation Preference *__`,
        description: "As of June 1, we only accept submissions from invited speakers.",
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__required",
          labelContainer: "paraWrap pb-2 inline-block",
        },
        options: [
          {
            value: "Invited Speaker",
            label: "Invited Speaker"
          },
          // {
          //   value: "Oral Presentation",
          //   label: "Oral Presentation"
          // },
          // {
          //   value: "Poster Presentation",
          //   label: "Poster Presentation"
          // },
          // {
          //   value: "(Virtual) Oral Presentation",
          //   label: "(Virtual) Oral Presentation"
          // },
          // {
          //   value: "(Virtual) Poster Presentation",
          //   label: "(Virtual) Poster Presentation"
          // },
        ]
      },
      {
        name: "abstract_session",
        label: `__Preferred Session *__`,
        description: "Choose a session that best fits your presentation",
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__required",
          labelContainer: "paraWrap pb-2 inline-block",
        },
        options: [
          {
            value: "Agro-food, veterinary and environmental biotechnology applications",
            label: "Agro-food, veterinary and environmental biotechnology applications",
          },
          {
            value: "Biotechnology applications in health care",
            label: "Biotechnology applications in health care",
          },
          {
            value: "Ecology and evolution of microbial viruses",
            label: "Ecology and evolution of microbial viruses",
          },
          {
            value: "Virus structures and function",
            label: "Virus structures and function",
          },
          {
            value: "Virus-host interaction: host defence and viral evasion mechanisms",
            label: "Virus-host interaction: host defence and viral evasion mechanisms",
          },
          {
            value: "Virus-host interaction: molecular mechanisms",
            label: "Virus-host interaction: molecular mechanisms",
          },
          {
            value: "Virus-host interaction: overcoming cell barriers",
            label: "Virus-host interaction: overcoming cell barriers",
          }
        ]
      },


      {
        name: "position",
        label: `__Career Stage *__`,
        description: `(Optional) Please let us know your career stage. This information will only be seen by core Viruses of Microbes organizers.`,
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__required",
          labelContainer: "paraWrap pb-2 inline-block",
        },
        options: [
          {
            value: "Prefer not to say",
            label: "Prefer not to say",
          },
          {
            value: "Student",
            label: "Student"
          },
          {
            value: "Post-doc",
            label: "Post-doc"
          },
          {
            value: "Pre-tenure faculty",
            label: "Pre-tenure faculty"
          },
          {
            value: "Tenured faculty",
            label: "Tenured faculty"
          },
          {
            value: "Industry",
            label: "Industry"
          },
          {
            value: "Government",
            label: "Government"
          },
        ]
      },
      {
        name: "notes",

        label: `__Notes or Special Instructions__`,
        description: `If you have special requests or notes for the organizing committee, please leave them here`,
        fieldType: "Textarea",
        rows: 4,
        styles: {
          formletClasses: "mt-8 mb-4",
          fieldClasses: "w-full",
          labelContainer: "paraWrap pb-2 inline-block",
        }
      },
    ]
  },
  authors: {
    label: "Authors & Affiliations",
    name: "## Authors & Affiliations",
    description: "Tell us about your authors and affiliations",
    nextText: "Save & Continue",
    fields: [
      {
        name: "abstract_authors",
        label: `__Abstract Authors *__`,
        description: `Enter abstract authors here. Add each author on its own line, as shown in the following example. If author has affiliation(s) please add the affiliation number(s) to the end of the line as shown. Please add a star to the presenting author, and add correspondence information below. <br><br>Use this example as a guide: <br>
<div class='Card-light _card _p-4'><em>James Bond 1*</em><br>
<em>Abraham Lincoln 2,3</i></div>`,
        fieldType: "Textarea",
        rows: 8,
        styles: {
          formletClasses: "mt-8 mb-4",
          fieldClasses: "w-full",
          labelClasses: "__required",
        }
      },
      {
        name: "abstract_affiliations",
        label: `__Abstract Author Affiliations *__`,
        description: `Enter affiliation organizations here. <br>Add each organization on its own line. Institution name required, but school, department, and address are optional, as shown below. The affiliations are numbered automatically based on their positioning in the list. Please update your author affiliation number(s) accordingly.<br><br>Use this example as a guide: <br>
<div class='Card-light _card _p-4'><em>Organization One</em><br>
<em>Organization Two</em>`,
        fieldType: "Textarea",
        rows: 8,
        type: "text",
        styles: {
          formletClasses: "mt-8 mb-4",
          fieldClasses: "w-full",
          labelClasses: "__required",
        }
      },
      {
        name: "abstract_correspondence",
        label: `__Abstract Author Correspondence__`,
        description: `Optional, but highly encouraged, so others know how to contact you. <br><br>Example: <br>
Dr. Kutter: betty.kutter@evergreen.edu`,
        placeholder: `Author email address(es)`,
        fieldType: "Textarea",
        styles: {
          formletClasses: "mt-8 mb-4",
          fieldClasses: "w-full",
        }
      },
    ]
  },
  abstract: {
    label: "Abstract",
    name: "## Abstract",
    description: "Enter the title and body text of your abstract.",
    nextText: "Save & Continue",
    fields: [

      // need a way to preview the title, text, and rest of the abstract

      // also need to implement "Richtext" field type with TipTap from Vue

      {
        name: "abstract_title",
        label: `__Abstract Title *__`,
        description: `Please keep your title under 120 characters.`,
        fieldType: "Richtext",
        settings: {
          showCharCount: false,
          maxLength: 120,
          minLength: 10,
          showMaxRemaining: true,
          showMinChars: false,
          placeholder: "The title of your abstract"
        },
        styles: {
          formletClasses: "mt-8 mb-4 tiptap_headline tiptap_serif _divider-bottom",
          fieldClasses: "w-full",
          labelClasses: "__required",
        }
      },
      {
        name: "abstract_text",
        label: `__Abstract Text *__`,
        description: `Please keep the body of your abstract under 2000 characters.`,
        fieldType: "Richtext",
        settings: {
          maxLength: 2000,
          minLength: 50,
          showMaxRemaining: true,
          showMinChars: false,
          placeholder: "The main text of your abstract"
        },
        styles: {
          formletClasses: "mt-8 mb-4 tiptap_tall tiptap_serif",
          fieldClasses: "w-full",
          labelClasses: "__required",
        }
      },
    ]
  },
  review: {
    label: "Review & Submit",
    name: "## Review & Submit",
    description: `When you’re ready, officially submit your abstract at the bottom right of the page. Once you’ve officially submitted your abstract, a copy of the abstract will be e-mailed to you, and you won’t be able to edit your abstract anymore.`,
    fields: [
    ]
  },


  yup: {
    initialValues: {

      // Intro: yup.mixed().notRequired(), // ignore descriptors

      // pt1 + pt2
      name: undefined,
      email: undefined,
      vom_id: undefined,
      abstract_id: undefined,

      // pt2
      institution: undefined,
      country: undefined,
      abstract_pref: undefined,
      abstract_session: undefined,
      position: undefined,
      keywords: [],
      notes: undefined,

      // pt3
      abstract_authors: `James Bond 1*
Abraham Lincoln 2,3
      `,
      abstract_affiliations: `Organization One
Organization Two
Organization Three
      `,
      abstract_correspondence: undefined,

      // pt4
      abstract_title: { content: undefined, charCount: 0 },
      abstract_text: { content: undefined, charCount: 0 },

    },
    validators: {
      // pt1
      name: yup.string().required('Please fill out your name'),
      email: yup.string()
        .email("Please fill out a real email address")
        .required("Please fill out your email address"),
      // vom_id: yup.string().required('Please enter your VoM2022 Registration ID'),
      vom_id: yup.string(),
      abstract_id: yup.string(),

      // pt2
      institution: yup.string().required("Please fill out your organizations and affiliations"),
      country: yup.object({ value: yup.string().required('Please tell us which country you currently reside') }).nullable(),
      position: yup.object({ value: yup.string().required('Please indicate your career stage') }).nullable(),
      abstract_session: yup.object({ value: yup.string().required('What session are you interested in presenting?') }).nullable(),
      abstract_pref: yup.object({ value: yup.string().required('How do your prefer to present your abstract?') }).nullable(),
      notes: yup.string(),

      // pt3
      abstract_authors: yup.string().required("Please fill out the abstract authors "),
      abstract_affiliations: yup.string().required('Please fill out the abstract author affiliations'),
      abstract_correspondence: yup.string(),
      keywords: yup.array(yup.mixed()).min(3, "Please add at least three keywords that describe your abstract").required('Please indicate at least three keywords for your abstract'),

      // pt4
      abstract_title: yup.object({
        content: yup.string().required("Please fill out the title of the abstract"),
        charCount: yup.number().min(10, "Please enter more than 10 characters").max(120, "Please keep the title under 120 characters"),
      }).nullable(),
      abstract_text: yup.object({
        content: yup.string().required("Please fill out the body of the abstract"),
        charCount: yup.number().min(50, "Please enter more than 50 characters").max(2000, "Please keep the text under 2000 characters"),
      }).nullable()
    }
  }
};
