import * as yup from "yup";
import { speciesData } from "./species.js"

export const formData = {
  id: "state-of-phage-2020",
  name: "## The State of Phage 2020 Survey",
  description: `
  \n\n #### Welcome to the State of Phage 2020 survey!
  \n\n The phage field is clearly growing around the world, but we realized that no one has collected a bird’s eye view of what everyone is working on. From our conversations with researchers, we believe that phage research activity and diversity of approaches is greater than the published literature would suggest. We created the State of Phage 2020 survey to fill this gap. We hope it will help researchers learn more about how their phage research approaches compare with others around the world, and that it will help establish a baseline for the current state of phage research so we can collectively track how it grows and evolves over time.
  \n\n #### Who is this for?
  \n\n Phage researchers (academia, government, industry) at any stage, as well as phage classroom instructors and students
  \n\n #### Why take part?
  \n\n ##### Find out how your lab compares to other phage labs around the world
  \n\n Are you the only one working on phages targeting a certain host in your corner of the world? Are your phage and strain collections larger than the average? Do they come from sources few others are exploring? How do your methods of phage characterization and analysis differ from those of others?
  \n\n ##### Add your lab’s voice to a collective effort to show the robust and diverse state of phage research
  \n\n The phage field is growing, but not everyone can see that. Contribute to a collective effort to show onlookers (especially prospective funders, medical professionals, industry, and talented early career scientists) how far the phage research field has already come, and to demonstrate growth, maturity and changes in phage research over time.
  \n\n #### What to expect
  \n\n This survey comes in five parts, and will take about 15-30 minutes in total to complete. We will ask you about your career stage, your lab‘s bacterial strain collection, your lab‘s phage collection, the methods your lab uses to study phages, where you like to publish, and a few other questions. Your progress will be continuously saved to your browser (in case you accidentally close it, or if you want to take a break). <br>
  \n\n Phage Directory will compile the results at the end of 2020 and publish a report in our newsletter [Capsid & Tail](https://phage.directory/capsid) in 2021. We hope to run this survey annually in order to observe trends in the phage research field.
  \n\n - __Are we missing an interesting question or angle?__ We welcome any questions, comments, corrections, and feedback! Send us (Jessica and Jan) an email at hello@phage.directory!
  \n\n - __Please share this survey__ with your phage friends and collaborators! The more respondents, the better results we’ll get!
  \n\n
  ~ Jessica & Jan, [Phage Directory](https://phage.directory)

  `,
  settings: {
    submitText: "Submit your survey answers",
    submittingText: "Submitting your answers...",
    successText: `<div class="text-center"><img class="sop-square text-center mb-0" alt="State of Phage Survey Logo" src="/state_of_phage_kema_sq_icon.png" /></div>
    \n\n
    \n\n ### Thanks a million!
    \n\n We've received your responses! Thank you so much for sticking with us and completing the survey, it's going to be well worth it to see the responses! We will publish the results in our newsletter Capsid & Tail (https://phage.directory/capsid) sometime next year. 
    \n\n If you filled in your email address, you will receive a copy of your responses.
    \n\n Oh, and please share this survey with your phage friends. The more people take it, the more exciting the results!
    \n\n ~ Jessica & Jan, Phage Directory`,
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
    showTOConPages: [1, 2, 3, 4, 5, 6],
    showCompleted: true,
    completedTextBefore: 'Thank you to the ',
    completedTextAfter: ' phage fans who have completed the survey! Please help the community by spreading the word!',

  },
  styles: {
    formName: 'mb-16',
    formDescription: 'mb-24',
    formIntro: 'mb-16',
    formletContainer: '__formletContainer px-8',
    contentContainer: 'mb-16',
    formletFieldContainer: 'mb-16',
    nextButtonClasses: "__action",
    prevButtonClasses: "__outline __soft",
    pageName: "__formletPageName mb-0",
    pageDescription: "__formletPageDescription mb-16",
    successBox: "",
    resetButtonClasses: "p-8",
    pageTOC: "Card-light p-8 paraWrap",
    surveysCompleted: "Card-light p-8 __active",
  },
  submitHandler: (data) => {
    console.log('[formtest submit.handler] Submitting with data:', data)
  },
  pages: [
    'intro', 'profile', 'strains', 'phages', 'tools', 'research'
  ],
  intro: {
    label: "Introduction",
    name: "### Before we get started",
    description: `
    \n\n We ask for some information about you so we are able to ask followup questions. Your name and email will be kept private, and we will not share or sell your name or email.
    \n\n By starting the survey, you are also [agreeing to our terms and conditions](https://phage.directory/policies#top)`,
    nextText: "Start the Survey",
    fields: [
      // {
      //   name: "Intro",
      //   description: "### Description here!",
      //   fieldType: "Descriptor",
      //   styles: {
      //     labelClasses: "__questionTitle",
      //     descriptionClasses: "w-full",
      //     formletClasses: "mb-8",
      //   }
      // },
      {
        name: "name",
        label: `Your Name`,
        // description: `This e-mail address will appear as your presenter e-mail address in the abstract.`,
        placeholder: `Jessica Sacher`,
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
        label: `Your official email address`,
        description: `We will use this to send you a copy of your responses. We might also reach out to you for additional questions`,
        placeholder: `jessica@phage.directory`,
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
        name: "sendResponses",
        label: `Send a copy of your responses`,
        description: `If you’d like us to send you a copy of your survey responses, check this box!`,
        fieldType: "Checkbox",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
    ]
  },
  profile: {
    label: "Part 1: Your research profile",
    name: "### Part 1: Tell us a little about your research profile",
    // description: ``,
    nextText: "Next: Your strains",
    fields: [
      {
        name: "orgs",
        label: `Your organization/affiliation`,
        description: `This could include your university, institute, or the phage biotech company you work for`,
        placeholder: `Phage Directory`,
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
        name: "labname",
        label: `Whose lab do you work in?`,
        description: `This could include the name of your PI, lab head, or company`,
        placeholder: `e.g. Iredell Lab`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "professionalStage",
        label: `Your current professional stage`,
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle __required",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "undergrad",
            label: "Undergraduate student"
          },
          {
            value: "masters",
            label: "Master’s student"
          },
          {
            value: "phd",
            label: "PhD / Doctoral student"
          },
          {
            value: "postdoc",
            label: "Post-doctoral fellow"
          },
          {
            value: "prof-early",
            label: "Professor (early career)"
          },
          {
            value: "prof-senior",
            label: "Professor (senior)"
          },
          {
            value: "government",
            label: "Government"
          },
          {
            value: "industry",
            label: "Industry"
          },
        ]
      },
      {
        name: "jobs",
        label: `What are your job responsibilities?`,
        // description: "",
        showOtherCheckbox: true, // if true, uses an "Other" checkbox to open the area, otherwise open by default
        otherLabel: 'Other (add your own answer)',
        fieldType: "CheckInput",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        subformlet: {
          fields: [
            {
              name: "moreJobs",
              placeholder: 'Let us know what else you do',
              fieldType: "Textarea",
              styles: {
                formletClasses: "mb-0 inline-block w-full",
                fieldClasses: "",
              },
            },
          ],
          yup: {
            initialValues: {
              moreJobs: undefined,
            },
            validators: {
              moreJobs: yup.string(),
            },
          },
        },
        options: [
          {
            value: "student",
            label: "Student"
          },
          {
            value: "teaching",
            label: "Teaching"
          },
          {
            value: "research",
            label: "Academic research"
          },
          {
            value: "industry-rnd",
            label: "Industry research"
          },
        ]
      },
      {
        name: "country",
        label: `Country`,
        description: `What country is your research predominantly conducted in?`,
        placeholder: `Canada`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "=",
          labelClasses: "__questionTitle __required",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "phageYears",
        label: `How many years have you worked with phages?`,
        // description: `This e-mail address will appear as your presenter e-mail address in the abstract.`,
        placeholder: 2,
        fieldType: "Input",
        type: "number",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle __required",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "experiences",
        label: `Have you in the past: <span class="_font-small _font-normal">(Check all that apply)</span>`,
        // description: "",
        fieldType: "Checkboxgroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "isolated",
            label: "Isolated phages"
          },
          {
            value: "char-wetlab",
            label: "Characterized phages in a wet lab"
          },
          {
            value: "char-bioinfo",
            label: "Characterized or analyzed phages genetically with bioinformatics"
          },
          {
            value: "seaphages-taught",
            label: "Taught SEA-PHAGES"
          },
          {
            value: "not-seaphages",
            label: "Taught an undergraduate phage course that isn't SEA-PHAGES"
          },
          {
            value: "seaphages-student",
            label: "Participated in SEA-PHAGES as a student"
          },
          {
            value: "published",
            label: "Published a phage paper in a peer-reviewed journal or on a preprint server"
          },
          {
            value: "deposited-phages",
            label: "Deposited phages into a phage repository like ATCC or NCTC"
          },
          {
            value: "sent-research",
            label: "Sent phages to other researchers"
          },
          {
            value: "sent-therapy",
            label: "Tested or shared your phages on behalf of a prospective phage therapy patient"
          },
          {
            value: "clinical-prep",
            label: "Prepared and purified phages for clinical / therapeutic use"
          },
          {
            value: "sold-licensed",
            label: "Sold or licensed phages"
          },
        ]
      },
    ]
  },
  strains: {
    label: "Part 2: Your lab’s strains",
    name: "### Part 2: Tell us about your lab’s strain collection",
    description: "We’d like to learn more about the bacterial strains your lab has collected.",
    nextText: "Next: Your phages",
    fields: [
      {
        name: "strainColSize",
        label: `How big is your lab’s bacterial strain collection?`,
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "0 strains",
            label: "0 strains"
          },
          {
            value: "1-10 strains",
            label: "1-10 strains"
          },
          {
            value: "11-50 strains",
            label: "11-50 strains"
          },
          {
            value: "51-200 strains",
            label: "51-200 strains"
          },
          {
            value: "+200 strains",
            label: "&gt; 200 strains"
          },
        ]
      },
      {
        fieldType: "SelectRadio",
        id: 'strainSources',
        name: 'strainSources',
        label: "Where did the strains in your lab’s collection come from?",
        emptystate: 'Choose a source, then estimate how many came from that source',
        hideSelect: true,
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__questionTitle",
          fieldClasses: 'inline-block',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft',
        },
        selectOptions: {
          placeholder: 'Click here to choose one or more sources (or type your own) ',
        },
        options: [
          { value: 'strainsrc--self-isolated', label: 'Isolated in our lab' },
          { value: 'strainsrc--collaborators', label: 'Received from collaborators' },
          { value: 'strainsrc--culture-collection', label: 'Ordered from culture collection' },
          { value: 'strainsrc--unknown', label: 'Not sure / Unknown' },
        ],
        subformlet: {
          fields: [
            {
              name: "strainSourceAmounts",
              label: `How many strains came from this source?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "none",
                  label: "None",
                },
                {
                  value: "few",
                  label: "A few",
                },
                {
                  value: "most",
                  label: "Many / Most",
                },
                {
                  value: "all",
                  label: "All",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              strainSourceAmounts: "none",
            },
            validators: {
              strainSourceAmounts: yup.mixed(),
            },
          },
        },
      },
      {
        fieldType: "SelectRadio",
        id: 'strainSampleSources',
        name: 'strainSampleSources',
        label: "What type of source were the strains in your lab’s collection originally isolated from?",
        emptystate: 'Choose a source, then estimate how many came from that source',
        // hideSelect: true,
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__questionTitle",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft',
        },
        selectOptions: {
          placeholder: 'To add a source, type it here and press enter',
        },
        options: [
          { value: 'strainsamplesrc--environmental', label: 'Environmental' },
          { value: 'strainsamplesrc--clinical', label: 'Clinical' },
          { value: 'strainsamplesrc--animal', label: 'Animal' },
          { value: 'strainsamplesrc--unknown', label: 'Not sure / Unknown' },
        ],
        subformlet: {
          fields: [
            {
              name: "strainSampleSourceAmounts",
              label: `How many strains came from this source?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "none",
                  label: "None",
                },
                {
                  value: "few",
                  label: "A few",
                },
                {
                  value: "most",
                  label: "Many / Most",
                },
                {
                  value: "all",
                  label: "All",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              strainSampleSourceAmounts: "none",
            },
            validators: {
              strainSampleSourceAmounts: yup.mixed(),
            },
          },
        },
      },
      {
        id: 'strainList',
        name: 'strainList',
        label: 'Which bacterial strains do you have in your lab?',
        fieldType: "SelectRadio",
        emptystate: 'Select one or more species, then indicate how many different strains your lab has of that species',
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__italic",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft __first-active',
        },
        selectOptions: {
          placeholder: 'Click here to choose one or more species (or type your own) ',
        },
        options: speciesData,
        subformlet: {
          fields: [
            {
              name: "strainSize",
              label: `How many different strains does your lab have of this species?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "0 strains",
                  label: "None",
                },
                {
                  value: "1-10 strains",
                  label: "1-10",
                },
                {
                  value: "11-50 strains",
                  label: "11-50",
                },
                {
                  value: "50+ strains",
                  label: "&gt; 50",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              strainSize: "0 strains",
            },
            validators: {
              strainSize: yup.mixed(),
            },
          },
        },
      },
    ]
  },
  phages: {
    label: "Part 3: Your lab’s phages",
    name: "### Part 3: Tell us about your lab’s phages",
    description: "We’d like to learn more about the phages your lab has collected and how you've studied them.",
    nextText: "Next: Tools & Methods",
    fields: [
      {
        name: "phageColSize",
        label: `How big is your lab’s phage collection?`,
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "0 phages",
            label: "0 phages"
          },
          {
            value: "1-10 phages",
            label: "1-10 phages"
          },
          {
            value: "11-50 phages",
            label: "11-50 phages"
          },
          {
            value: "51-200 phages",
            label: "51-200 phages"
          },
          {
            value: "+200 phages",
            label: "&gt; 200 phages"
          },
        ]
      },

      {
        name: "phagesSequenced",
        label: "How many of your lab’s phages are sequenced?",
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "No phages sequenced",
            label: "None of our lab’s phages are sequenced",
          },
          {
            value: "A few phages sequenced",
            label: "A few of our lab’s phages are sequenced",
          },
          {
            value: "Many phages sequenced",
            label: "Many or most of our lab’s phages are sequenced",
          },
          {
            value: "All phages sequenced",
            label: "All of our lab’s phages are sequenced",
          },
        ]
      },
      {
        name: "phagesCharacterized",
        label: `How many of your lab’s phages are characterized?`,
        fieldType: "Radiogroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "No phages characterized",
            label: "None of our lab’s phages are characterized",
          },
          {
            value: "A few phages characterized",
            label: "A few of our lab’s phages are characterized",
          },
          {
            value: "Many phages characterized",
            label: "Many or most of our lab’s phages are characterized",
          },
          {
            value: "All phages characterized",
            label: "All of our lab’s phages are characterized",
          },
        ]
      },
      {
        fieldType: "SelectRadio",
        id: 'charMethodTypes',
        name: 'charMethodTypes',
        label: 'When your lab characterizes a phage, which methods does it use?',
        description: "For each method, estimate how many of your phages your lab has characterized in this way.",
        emptystate: "Start by adding a method in the box above",
        // hideSelect: true,
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__questionTitle",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft',
        },
        selectOptions: {
          placeholder: 'To add a method, type it here and press enter',
        },
        options: [
          { value: 'charmethod--antibiotic-synergy', label: 'Antibiotic synergy testing' },
          { value: 'charmethod--bioinformatics', label: 'Bioinformatics analysis' },
          { value: 'charmethod--burst-size', label: 'Burst size analysis' },
          { value: 'charmethod--genome-sequencing', label: 'Genome sequencing and annotation' },
          { value: 'charmethod--host-range', label: 'Host range analysis' },
          { value: 'charmethod--in-vivo', label: 'In vivo studies' },
          { value: 'charmethod--microscropy', label: 'Microscopy' },
          { value: 'charmethod--proteomics', label: 'Proteomics' },
          { value: 'charmethod--receptor', label: 'Receptor analysis' },
          { value: 'charmethod--stability', label: 'Stability analysis' },
          { value: 'charmethod--transcriptomics', label: 'Transcriptomics' },
        ],
        subformlet: {
          fields: [
            {
              name: "charMethodTypesAmounts",
              label: `How many phages in your lab were characterized in this way?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "none",
                  label: "None",
                },
                {
                  value: "few",
                  label: "A few",
                },
                {
                  value: "most",
                  label: "Many / Most",
                },
                {
                  value: "all",
                  label: "All",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              charMethodTypesAmounts: "none",
            },
            validators: {
              charMethodTypesAmounts: yup.mixed(),
            },
          },
        },
      },
      {
        name: "phageColActivity",
        label: `Is your lab actively: <span class="_font-small _font-normal">(Check all that apply)</span>`,
        // description: "Check all that apply",
        fieldType: "Checkboxgroup",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "expanding-collection",
            label: "Expanding its phage collection"
          },
          {
            value: "isolating-collection",
            label: "Isolating new phages"
          },
          {
            value: "acquiring-collection",
            label: "Acquiring phages from phage repositories"
          },
          {
            value: "depositing-collection",
            label: "Depositing phages into a phage repository"
          },
        ]
      },
      {
        name: "difficultPhageHosts",
        label: `Which hosts are most difficult for your lab to find phages against?`,
        description: `Which hosts has your lab tried and failed to find phages against?`,
        rows: 2,
        fieldType: "Textarea",
        placeholder: "e.g. Escherichia coli",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        fieldType: "SelectRadio",
        id: 'phageSources',
        name: 'phageSources',
        label: 'Where did the phages in your lab come from?',
        emptystate: 'Choose a source, then estimate how many phages came from that source',
        hideSelect: true,
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__questionTitle",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft',
        },
        selectOptions: {
          placeholder: 'Click here to choose one or more sources (or type your own) ',
        },
        options: [
          { value: 'phsrc--self-isolated', label: 'Isolated in our lab' },
          { value: 'phsrc--collaborators', label: 'Received from collaborators' },
          { value: 'phsrc--culture-collection', label: 'Ordered from culture collection' },
          { value: 'phsrc--unknown', label: 'Not sure / Unknown' },
        ],
        subformlet: {
          fields: [
            {
              name: "phageSourceAmounts",
              // label: `Approximately how many phages come from this source?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "none",
                  label: "None",
                },
                {
                  value: "few",
                  label: "A few",
                },
                {
                  value: "most",
                  label: "Many / Most",
                },
                {
                  value: "all",
                  label: "All",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              phageSourceAmounts: "none",
            },
            validators: {
              phageSourceAmounts: yup.mixed(),
            },
          },
        },
      },
      {
        fieldType: "SelectRadio",
        id: 'phageSampleSources',
        name: 'phageSampleSources',
        label: "From what source were your lab’s phages originally isolated?",
        emptystate: 'Choose a source, then estimate how many phages came from that source',
        // hideSelect: true,
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__questionTitle",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft',
        },
        selectOptions: {
          placeholder: 'To add a sample source type, type it here and press enter',
        },
        options: [
          { value: 'phsamplesrc--environmental', label: 'Environmental' },
          { value: 'phsamplesrc--clinical', label: 'Clinical' },
          { value: 'phsamplesrc--animal', label: 'Animal' },
          { value: 'phsamplesrc--unknown', label: 'Not sure / Unknown' },
        ],
        subformlet: {
          fields: [
            {
              name: "phageSampleSourceAmounts",
              // label: `Approximately how many phages come from this source?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "none",
                  label: "None",
                },
                {
                  value: "few",
                  label: "A few",
                },
                {
                  value: "most",
                  label: "Many / Most",
                },
                {
                  value: "all",
                  label: "All",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              phageSampleSourceAmounts: "none",
            },
            validators: {
              phageSampleSourceAmounts: yup.mixed(),
            },
          },
        },
      },
      {
        id: 'phageHostRange',
        name: 'phageHostRange',
        label: "What is the host range of your lab’s phages?",
        description: "We pre-filled this list with your lab‘s strains you indicated from the previous section. Feel free to add or remove strains from this list.",
        fieldType: "SelectRadio",
        emptystate: 'Select one or more phage host species, then estimate how many different phages your lab has against that species',
        styles: {
          formletClasses: "mb-8",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
          radioItemLabelClasses: "__italic",
          fieldClasses: 'w-full',
          emptystateClasses: '__soft',
          formletContainerClasses: '',
          radioClearSelectClasses: '__radioClearBlue',
          radioItemClasses: '__soft __first-active',
          radioItemContainerClasses: '',
        },
        selectOptions: {
          placeholder: 'Click here to choose one or more phage host species (or type your own) ',
        },
        options: speciesData,
        subformlet: {
          fields: [
            {
              name: "phageSize",
              label: `How many phages does your lab have against this species?`,
              fieldType: "Radiogroup",
              options: [
                {
                  value: "0 phages",
                  label: "None",
                },
                {
                  value: "1-10 phages",
                  label: "1-10",
                },
                {
                  value: "11-50 phages",
                  label: "11-50",
                },
                {
                  value: "50+ phages",
                  label: "&gt; 50",
                },
              ],
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
                labelContainer: ' ',
              },
            },
          ],
          yup: {
            initialValues: {
              phageSize: "0 phages",
            },
            validators: {
              phageSize: yup.mixed(),
            },
          },
        },
      },
    ]
  },
  tools: {
    label: "Part 4: Your lab’s tools",
    name: "### Part 4: Tell us about your lab’s research tools",
    description: "Now we’d like to know a little more about how you like to do your phage research, and what tools and methods you use to get your work done.",
    nextText: "Last part: Beyond the Lab",
    fields: [
      {
        name: "toolsMethods",
        label: `Which tools and methods has your lab used in the past two years?`,
        // description: "",
        showOtherCheckbox: true, // if true, uses an "Other" checkbox to open the area, otherwise open by default
        otherLabel: 'Other tools or methods (add your own answer)',
        fieldType: "CheckInput",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        subformlet: {
          fields: [
            {
              name: "moreTools",
              placeholder: 'Did we miss any tools or methods? Let us know what else you use',
              fieldType: "Textarea",
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
              },
            },
          ],
          yup: {
            initialValues: {
              moreTools: undefined,
            },
            validators: {
              moreTools: yup.mixed(),
            },
          },
        },
        options: [
          {
            value: "bioinformatics",
            label: "Bioinformatics"
          },
          {
            value: "bred",
            label: "BRED"
          },
          {
            value: "clinical-trials",
            label: "Clinical trials"
          },
          {
            value: "crispr",
            label: "CRISPR"
          },
          {
            value: "directed-evolution",
            label: "Directed evolution"
          },
          {
            value: "tox-removal",
            label: "Endotoxin removal"
          },
          {
            value: "in-vivo-models",
            label: "In vivo models"
          },
          {
            value: "seq-internal",
            label: "Genome sequencing (in-house)"
          },
          {
            value: "seq-company",
            label: "Genome sequencing (outsourced to company or core facility)"
          },
          {
            value: "seq-collabs",
            label: "Genome sequencing (outsourced to research collaborators)"
          },
          {
            value: "host-range",
            label: "Host range analysis"
          },
          {
            value: "host-range-plaque",
            label: "Host range analysis (plaque assay)"
          },
          {
            value: "host-range-microtiter",
            label: "Host range analysis (microtiter plate)"
          },
          {
            value: "metagenomics",
            label: "Metagenomics"
          },
          {
            value: "micro",
            label: "Microscopy"
          },
          {
            value: "phage-abr-synergy",
            label: "Phage-antibiotic synergy testing"
          },
          {
            value: "phage-isolation",
            label: "Phage isolation"
          },
          {
            value: "phage-mfg",
            label: "Phage manufacturing / scale up / formulation"
          },
          {
            value: "proteomics",
            label: "Proteomics"
          },
          {
            value: "synbio",
            label: "Synthetic biology"
          },
          {
            value: "transcriptomics",
            label: "Transcriptomics"
          },
        ]
      },
      {
        name: "difficultMethods",
        label: `What tools or methods do you wish you had access to, but currently don’t have access to?`,
        description: `Are these too expensive, slow, or difficult to access?`,
        placeholder: `e.g. electron microsopy, sequencing`,
        rows: 2,
        fieldType: "Textarea",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "bioinfoTools",
        label: `What tools and software do you use for bioinformatics?`,
        placeholder: `Add anything you like (e.g. BLAST, SPAdes, Geneious, GenBank, Excel, R, Python, etc.)`,
        rows: 2,
        fieldType: "Textarea",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
    ]
  },
  research: {
    label: "Part 5: Beyond your lab",
    name: "### Part 5: Tell us about your lab’s views and interactions with collaborators, publishers and funders",
    description: "Thanks for sticking with us until the end! We'd like to wrap up the survey by getting to know a little more about how your lab likes to interact/connect with other labs, companies, journals and funders.",
    fields: [


      {
        name: "publishCategories",
        label: `Have you published in the following categories:`,
        // description: "",
        showOtherCheckbox: true, // if true, uses an "Other" checkbox to open the area, otherwise open by default
        otherLabel: 'Other category (add your own answer)',
        fieldType: "CheckInput",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        subformlet: {
          fields: [
            {
              name: "other",
              placeholder: 'What other categories have you published in?',
              fieldType: "Textarea",
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
              },
            },
          ],
          yup: {
            initialValues: {
              other: undefined,
            },
            validators: {
              other: yup.mixed(),
            },
          },
        },
        options: [
          {
            value: "phage-char",
            label: "Phage characterization"
          },
          {
            value: "phage-display",
            label: "Phage display"
          },
          {
            value: "ecology-evo",
            label: "Phage ecology and evolution"
          },
          {
            value: "synbio-engineered-phages",
            label: "Phage engineering and synthetic biology"
          },
          {
            value: "meta-genomics-bioinfo",
            label: "Phage genomics, metagenomics, bioinformatics"
          },
          {
            value: "phage-host",
            label: "Phage-host interaction"
          },
          {
            value: "phage-immune",
            label: "Phage-immune interactions"
          },
          {
            value: "phage-mfg-prod-formulation",
            label: "Phage manufacturing/production/formulation"
          },
          {
            value: "phage-receptor",
            label: "Phage receptor analysis"
          },
          {
            value: "phage-struct",
            label: "Phage structural biology"
          },
          {
            value: "phage-taxo-phylo-diversity",
            label: "Phage taxonomy, phylogeny, or diversity"
          },
          {
            value: "phage-animal-testing",
            label: "Phage testing in animal models"
          },
          {
            value: "phage-therapy",
            label: "Phage therapy"
          },
          {
            value: "food-agri-vet-phage",
            label: "Phage use in food, agriculture or veterinary medicine"
          },
          {
            value: "prophage",
            label: "Prophage biology"
          },
          {
            value: "quant-bio",
            label: "Quantitative biology"
          },
          {
            value: "rna-phages",
            label: "RNA phages"
          },
          {
            value: "phage-proteins-struct",
            label: "Structure and function of phage proteins"
          },
          {
            value: "phage-def-crispr",
            label: "CRISPR and/or other phage defense mechanisms"
          },
          {
            value: "anycins",
            label: "Lysins/tailocins/pyocins/bacteriocins"
          },
          {
            value: "microbiome",
            label: "Microbiome"
          },
          {
            value: "mobile-genes",
            label: "Mobile genetic elements (eg. PICIs)"
          },
        ]
      },
      {
        name: "journals",
        label: `Where do you like to publish your phage papers?`,
        showOtherCheckbox: true, // if true, uses an "Other" checkbox to open the area, otherwise open by default
        otherLabel: 'Other (add your own answer)',
        fieldType: "CheckInput",
        randomize: true,
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        subformlet: {
          fields: [
            {
              name: "other",
              placeholder: 'What other journals (or preprint servers) have you published your phage work in?',
              fieldType: "Textarea",
              styles: {
                formletClasses: "mb-0 inline-block",
                fieldLabelClasses: "inline-block w-auto input-formlet-outline-hover mr-2 py-1 px-2 cursor-pointer",
                fieldClasses: "cursor-pointer",
              },
            },
          ],
          yup: {
            initialValues: {
              other: undefined,
            },
            validators: {
              other: yup.mixed(),
            },
          },
        },
        options: [
          {
            value: "archives-virology",
            label: "Archives of Virology (Springer)"
          },
          {
            value: "biorxiv",
            label: "bioRxiv"
          },
          {
            value: "cell",
            label: "Cell Host and Microbe"
          },
          {
            value: "frontiers",
            label: "Frontiers in Microbiology"
          },
          {
            value: "asm-mra",
            label: "Microbiology Resource Announcements (ASM)"
          },
          {
            value: "phage-mal",
            label: "PHAGE (Mary Ann Liebert)"
          },
          {
            value: "virology",
            label: "Virology (BMC)"
          },
          {
            value: "viruses",
            label: "Viruses (MDPI)"
          },
        ]
      },
      {
        name: "journalsGood",
        label: `Which journals do you consider respectable places to publish phage papers?`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "journalsBad",
        label: `Which journals do you NOT consider respectable places to publish phage papers?`,
        fieldType: "Input",
        type: "text",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "relationships",
        label: `Does your lab have working relationships with:`,
        fieldType: "Checkboxgroup",
        randomize: true,
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        },
        options: [
          {
            value: "hospitals",
            label: "Hospitals or clinicians"
          },
          {
            value: "tto",
            label: "Technology Transfer Office / IP Office"
          },
          {
            value: "biotech",
            label: "Biotech companies"
          },
          {
            value: "pharma",
            label: "Pharmaceutical companies"
          },
          {
            value: "investors",
            label: "Investors"
          },
          {
            value: "gov-funders",
            label: "Government funding agencies (NIH, NSF, European Research Council, etc.)"
          },
          {
            value: "ngo-funders",
            label: "Private, non-profit or NGO funders (Chan Zuckerberg, Gates, etc.)"
          },
        ]
      },
      {
        name: "howMuchPerResearchPhage",
        label: `What would be a fair way to compensate you for sharing one of your phages with another lab for academic research purposes?`,
        description: `e.g. $200, citations, authorship, research data`,
        rows: 2,
        fieldType: "Textarea",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "howMuchPerDepositPhage",
        label: `What would be a fair way to compensate you for sharing one of your phages with a phage culture collection like ATCC, NCTC, or DSMZ?`,
        description: `e.g. $200, research data, free sequencing, genetic characterization`,
        rows: 2,
        fieldType: "Textarea",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
      {
        name: "howMuchPerBiotechPhage",
        label: `What would be a fair way to compensate you for sharing one of your phages with a company for R&D purposes? What about for commercial purposes?`,
        description: `e.g. $1000, research data, sequencing, citations`,
        rows: 2,
        fieldType: "Textarea",
        styles: {
          formletClasses: "mb-8",
          fieldClasses: "w-full",
          labelClasses: "__questionTitle",
          labelContainer: "mb-2 paraWrap",
        }
      },
    ]
  },



  yup: {
    initialValues: {

      // Intro: yup.mixed().notRequired(), // ignore descriptors

      // pt1 + pt2
      name: undefined,
      email: undefined,
      sendResponses: false,
      orgs: undefined,
      labname: undefined,
      professionalStage: {label:'', value:''},
      country: undefined,
      jobs: [],
      phageYears: undefined,
      experiences: [],

      // pt2
      strainColSize: '0 strains',
      strainSources: [
        { value: "strainsrc--self-isolated", label: "Isolated in our lab", strainSourceAmounts: "none" },
        { value: "strainsrc--collaborators", label: "Received from collaborators", strainSourceAmounts: "none" },
        { value: "strainsrc--culture-collection", label: "Received from culture collection", strainSourceAmounts: "none" },
        { value: "strainsrc--unknown", label: "Not sure / Unknown", strainSourceAmounts: "none" },
      ],
      strainSampleSources: [
        { value: "strainsamplesrc--environmental", label: "Environmental", strainSampleSourceAmounts: "none" },
        { value: "strainsamplesrc--clinical", label: "Clinical", strainSampleSourceAmounts: "none" },
        { value: "strainsamplesrc--animal", label: "Animal", strainSampleSourceAmounts: "none" },
        { value: "strainsamplesrc--unknown", label: "Unknown", strainSampleSourceAmounts: "none" },
      ],
      strainList: [],

      // pt3 
      phageColSize: '0 phages',
      phageColActivity: [],
      phagesSequenced: 'No phages sequenced',
      phagesCharacterized: 'No phages characterized',
      charMethodTypes: [],
      difficultPhageHosts: undefined,
      phageSources: [
        { value: "phsrc--self-isolated", label: "Isolated in our lab", phageSourceAmounts: "none" },
        { value: "phsrc--collaborators", label: "Received from collaborators", phageSourceAmounts: "none" },
        { value: "phsrc--culture-collection", label: "Ordered from culture collection", phageSourceAmounts: "none" },
        { value: "phsrc--unknown", label: "Not sure / Unknown", phageSourceAmounts: "none" },
      ],
      phageSampleSources: [
        { value: "phsamplesrc--environmental", label: "Environmental", phageSampleSourceAmounts: "none" },
        { value: "phsamplesrc--clinical", label: "Clinical", phageSampleSourceAmounts: "none" },
        { value: "phsamplesrc--animal", label: "Animal", phageSampleSourceAmounts: "none" },
        { value: "phsamplesrc--unknown", label: "Unknown", phageSampleSourceAmounts: "none" },
      ],
      phageHostRange: [],
      howMuchPerResearchPhage: undefined,
      howMuchPerDepositPhage: undefined,
      howMuchPerBiotechPhage: undefined,
      charMethods: [],
      charMethodTypes: [],
      phageSources: [],
      phageSampleSources: [],
      phageHostRange: [],

      // pt4
      toolsMethods: [],
      difficultMethods: undefined,
      bioinfoTools: undefined,

      // pt5
      publishCategories: [],
      journals: [],
      journalsGood: [],
      journalsBad: undefined,
      relationships: [],
    },
    validators: {
      // pt1
      name: yup.string().required('Please fill out your name'),
      email: yup.string()
        .email("Please fill out a real email address")
        .required("Please fill out your email address"),
      labname: yup.string(),
      sendResponses: yup.boolean(),
      orgs: yup.string().required("Please fill out your organizations and affiliations"),
      // professionalStage: yup.string().required('Please tell us your career stage'),
      professionalStage: yup.object().shape({
          value: yup.string(),
          label: yup.string(),
        })
        .nullable()
        .required('This field is required.'),
      country: yup.string().required('Please tell us in which country you conduct your research'),
      // job: yup.string().required('Your job responsibility helps us understand the data better. Please give us the best guess.'),
      jobs: yup.array(yup.mixed()).nullable(),
      phageYears: yup.number()
        .typeError('Years of experience is required')
        .min(0, 'Enter 0 or more years of experience')
        .required('Please tell us your number of years of experience with phages'),
      experiences: yup.array(yup.mixed()).nullable(),

      // pt2
      strainColSize: yup.mixed(), // yup.string(),
      // these cause svelte-form-lib to crash for some reason
      // they're not compatible with the initialValues of strainSampleSources
      strainSources: yup.array(yup.mixed()).nullable(),
      strainSampleSources: yup.array(yup.mixed()).nullable(),
      strainList: yup.array(yup.mixed()).nullable(),

      // // pt3
      phagesSequenced: yup.string(),
      // percentSequenced: yup.number()
      //   .typeError('Please give us a rough estimate of your sequenced phages')
      //   .min(0, 'Enter an integer from 0 to 100')
      //   .max(100, 'Enter an integer from 0 to 100')
      //   .integer('Enter an integer from 0 to 100')
      //   .required('Please give us a rough estimate of your sequenced phages'),
      phagesCharacterized: yup.string(),
      // percentCharacterized: yup.number()
      //   .typeError('Please give us a rough estimate of your characterized phages')
      //   .min(0, 'Enter an integer from 0 to 100')
      //   .max(100, 'Enter an integer from 0 to 100')
      //   .integer('Enter an integer from 0 to 100')
      //   .required('Please give us a rough estimate of your characterized phages'),
      charMethodTypes: yup.array(yup.mixed()).nullable(),
      charMethods: yup.array(yup.mixed()).nullable(),
      phageColSize: yup.string(),
      phageColActivity: yup.array(yup.mixed()).nullable(),
      difficultPhageHosts: yup.string(),
      phageSources: yup.array(yup.mixed()).nullable(),
      phageSampleSources: yup.array(yup.mixed()).nullable(),
      phageHostRange: yup.array(yup.mixed()).nullable(),

      // pt4
      toolsMethods: yup.array(yup.mixed()).nullable(),
      difficultMethods: yup.string(),
      bioinfoTools: yup.string(),

      // pt5
      howMuchPerResearchPhage: yup.string(),
      howMuchPerDepositPhage: yup.string(),
      howMuchPerBiotechPhage: yup.string(),
      publishCategories: yup.array(yup.mixed()).nullable(),
      journals: yup.array(yup.mixed()).nullable(),
      journalsGood: yup.string(),
      journalsBad: yup.string(),
      relationships: yup.array(yup.mixed()).nullable(),

    }
  }
};
