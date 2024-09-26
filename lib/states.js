const statesWorkersRights = [
  {
    stateName: "Alabama",
    stateAbbreviation: "AL",
    rightsCategories: {
      minimumWage: {
        rate:
          "No state minimum wage law. Federal minimum wage of $7.25 applies",
        details: "No annual increases",
        link: "https://www.dol.gov/agencies/whd/minimum-wage/state#al",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.alabamaag.gov/consumercorner/category/labor-laws",
      },
      workplaceSafety: {
        agency: "Alabama Department of Labor",
        link: "https://labor.alabama.gov/safety/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "National origin",
        ],
        enforcementAgency: "Alabama Department of Labor",
        link: "https://labor.alabama.gov/eeoc/",
      },
      leavePolicies: {
        sickLeave: {
          required: false,
          details: "No state-mandated sick leave",
        },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.dol.gov/agencies/whd/state/family-leave/al",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://labor.alabama.gov/labor_law_handbook.pdf",
      },
    },
  },
  {
    stateName: "Alaska",
    stateAbbreviation: "AK",
    rightsCategories: {
      minimumWage: {
        rate: "$10.85 per hour (as of 2023)",
        details: "Adjusted annually based on inflation",
        link: "https://labor.alaska.gov/lss/whhome.htm",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 8 in a day or 40 in a week",
        details: "Whichever is greater on a daily or weekly basis",
        link: "https://labor.alaska.gov/lss/whfaq.htm",
      },
      workplaceSafety: {
        agency: "Alaska Occupational Safety and Health",
        link: "https://labor.alaska.gov/lss/oshhome.htm",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "National origin",
          "Age",
          "Disability",
          "Marital status",
          "Pregnancy",
          "Parenthood",
          "Sexual Orientation / Gender Identity",
        ],
        enforcementAgency: "Alaska State Commission for Human Rights",
        link: "https://humanrights.alaska.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: false,
          details: "No state-mandated sick leave",
        },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://labor.alaska.gov/lss/whfaq.htm",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employment Relations Act"],
        link: "https://labor.alaska.gov/laborr/home.htm",
      },
    },
  },
  {
    stateName: "Arizona",
    stateAbbreviation: "AZ",
    rightsCategories: {
      minimumWage: {
        rate: "$13.85 per hour (as of 2023)",
        details: "Adjusted annually based on cost of living",
        link: "https://www.azica.gov/labor-minimum-wage-main-page",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "Follows federal FLSA rules",
        link: "https://www.azica.gov/labor-wage-claims-main-page",
      },
      workplaceSafety: {
        agency: "Arizona Division of Occupational Safety and Health",
        keyRegulations: ["OSHA-approved State Plan"],
        link: "https://www.azica.gov/divisions/adosh",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "National origin",
          "Disability",
          "Pregnancy",
          "Retaliation",
        ],
        enforcementAgency: "Arizona Civil Rights Division",
        link: "https://www.azag.gov/civil-rights",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour for every 30 hours worked, up to 40 hours per year",
        },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.azica.gov/labor-earned-paid-sick-time-main-page",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.azica.gov/labor-policy-laws-and-rules",
      },
    },
  },
  {
    stateName: "",
    stateAbbreviation: "",
    rightsCategories: {
      minimumWage: {
        rate: "",
        details: "",
        link: "",
      },
      overtimePay: {
        rate: "",
        details: "",
        link: "",
      },
      workplaceSafety: {
        agency: "",
        keyRegulations: [],
        link: "",
      },
      antiDiscriminationLaws: {
        protectedClasses: [],
        enforcementAgency: "",
        link: "",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "",
        },
        familyLeave: {
          available: true,
          details: "",
        },
        link: "",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: [],
        link: "",
      },
    },
  },
  {
    stateName: "",
    stateAbbreviation: "",
    rightsCategories: {
      minimumWage: {
        rate: "",
        details: "",
        link: "",
      },
      overtimePay: {
        rate: "",
        details: "",
        link: "",
      },
      workplaceSafety: {
        agency: "",
        keyRegulations: [],
        link: "",
      },
      antiDiscriminationLaws: {
        protectedClasses: [],
        enforcementAgency: "",
        link: "",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "",
        },
        familyLeave: {
          available: true,
          details: "",
        },
        link: "",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: [],
        link: "",
      },
    },
  },
  {
    stateName: "",
    stateAbbreviation: "",
    rightsCategories: {
      minimumWage: {
        rate: "",
        details: "",
        link: "",
      },
      overtimePay: {
        rate: "",
        details: "",
        link: "",
      },
      workplaceSafety: {
        agency: "",
        keyRegulations: [],
        link: "",
      },
      antiDiscriminationLaws: {
        protectedClasses: [],
        enforcementAgency: "",
        link: "",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "",
        },
        familyLeave: {
          available: true,
          details: "",
        },
        link: "",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: [],
        link: "",
      },
    },
  },
  {
    stateName: "",
    stateAbbreviation: "",
    rightsCategories: {
      minimumWage: {
        rate: "",
        details: "",
        link: "",
      },
      overtimePay: {
        rate: "",
        details: "",
        link: "",
      },
      workplaceSafety: {
        agency: "",
        keyRegulations: [],
        link: "",
      },
      antiDiscriminationLaws: {
        protectedClasses: [],
        enforcementAgency: "",
        link: "",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "",
        },
        familyLeave: {
          available: true,
          details: "",
        },
        link: "",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: [],
        link: "",
      },
    },
  },
  {
    stateName: "",
    stateAbbreviation: "",
    rightsCategories: {
      minimumWage: {
        rate: "",
        details: "",
        link: "",
      },
      overtimePay: {
        rate: "",
        details: "",
        link: "",
      },
      workplaceSafety: {
        agency: "",
        keyRegulations: [],
        link: "",
      },
      antiDiscriminationLaws: {
        protectedClasses: [],
        enforcementAgency: "",
        link: "",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "",
        },
        familyLeave: {
          available: true,
          details: "",
        },
        link: "",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: [],
        link: "",
      },
    },
  },
];

// {
//   stateName: "",
//   stateAbbreviation: "",
//   rightsCategories: {
//     minimumWage: {
//       rate: "",
//       details: "",
//       link: "",
//     },
//     overtimePay: {
//       rate: "",
//       details: "",
//       link: "",
//     },
//     workplaceSafety: {
//       agency: "",
//       keyRegulations: [],
//       link: "",
//     },
//     antiDiscriminationLaws: {
//       protectedClasses: [],
//       enforcementAgency: "",
//       link: "",
//     },
//     leavePolicies: {
//       sickLeave: {
//         required: true,
//         details: "",
//       },
//       familyLeave: {
//         available: true,
//         details: "",
//       },
//       link: "",
//     },
//     unionizationRights: {
//       rightToWorkState: true,
//       publicSectorUnions: true,
//       keyRegulations: [],
//       link: "",
//     },
//   },
// },

export default statesWorkersRights;
