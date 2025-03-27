export const statesWorkersRights = [
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
    stateName: "Arkansas",
    stateAbbreviation: "AR",
    rightsCategories: {
      minimumWage: {
        rate: "$11.00 per hour (as of 2023)",
        details: "Follows federal minimum wage if lower",
        link: "https://www.dol.gov/agencies/whd/minimum-wage/state#ar",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.labor.ar.gov/",
      },
      workplaceSafety: {
        agency: "Arkansas Department of Labor and Licensing",
        link: "https://www.labor.ar.gov/",
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
        ],
        enforcementAgency: "Arkansas Civil Rights Commission",
        link: "https://acrc.arkansas.gov/",
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
        link: "https://www.dol.gov/agencies/whd/state/family-leave/ar",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.labor.ar.gov/",
      },
    },
  },
  {
    stateName: "California",
    stateAbbreviation: "CA",
    rightsCategories: {
      minimumWage: {
        rate: "$15.50 per hour (as of 2023)",
        details: "Higher in some cities/counties",
        link: "https://www.dir.ca.gov/dlse/",
      },
      overtimePay: {
        rate:
          "1.5x for over 8 hours/day or 40 hours/week; 2x for over 12 hours/day",
        details: "Daily overtime rules unique to California",
        link: "https://www.dir.ca.gov/dlse/FAQ_Overtime.htm",
      },
      workplaceSafety: {
        agency: "Cal/OSHA",
        link: "https://www.dir.ca.gov/dosh/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Gender identity",
          "Sexual orientation",
          "Age",
          "Disability",
          "Marital status",
          "Medical condition",
          "Genetic information",
          "Military/veteran status",
        ],
        enforcementAgency: "California Civil Rights Department",
        link: "https://calcivilrights.ca.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "3 days (24 hours) per year for most employees",
        },
        familyLeave: {
          available: true,
          details:
            "Up to 8 weeks paid family leave through state disability insurance",
        },
        link: "https://www.edd.ca.gov/disability/paid_family_leave.htm",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Agricultural Labor Relations Act"],
        link: "https://www.dir.ca.gov/",
      },
    },
  },
  {
    stateName: "Colorado",
    stateAbbreviation: "CO",
    rightsCategories: {
      minimumWage: {
        rate: "$13.65 per hour (as of 2023)",
        details: "Adjusted annually for inflation",
        link: "https://cdle.colorado.gov/minimum-wage",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week or 12 in a day",
        link: "https://cdle.colorado.gov/wage-and-hour-laws",
      },
      workplaceSafety: {
        agency: "Colorado Division of Labor Standards and Statistics",
        link: "https://cdle.colorado.gov/labor-standards",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
        ],
        enforcementAgency: "Colorado Civil Rights Division",
        link: "https://ccrd.colorado.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour for every 30 hours worked, up to 48 hours per year",
        },
        familyLeave: {
          available: true,
          details:
            "Paid Family and Medical Leave Insurance program starting 2024",
        },
        link: "https://famli.colorado.gov/",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Labor Peace Act"],
        link: "https://cdle.colorado.gov/labor-standards",
      },
    },
  },
  {
    stateName: "Connecticut",
    stateAbbreviation: "CT",
    rightsCategories: {
      minimumWage: {
        rate: "$15.00 per hour (as of 2023)",
        details: "Scheduled increases",
        link:
          "https://portal.ct.gov/DOL/Pages/Wage-and-Workplace-Standards/Minimum-Wage",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://portal.ct.gov/DOL",
      },
      workplaceSafety: {
        agency: "Connecticut Department of Labor",
        link: "https://portal.ct.gov/DOL",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Sexual orientation",
          "Gender identity",
          "Genetic information",
        ],
        enforcementAgency:
          "Connecticut Commission on Human Rights and Opportunities",
        link: "https://portal.ct.gov/CHRO",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "40 hours per year for service workers",
        },
        familyLeave: {
          available: true,
          details: "12 weeks paid leave through state program",
        },
        link: "https://portal.ct.gov/PaidLeave",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Collective Bargaining for State Employees"],
        link: "https://portal.ct.gov/DOL",
      },
    },
  },
  {
    stateName: "Delaware",
    stateAbbreviation: "DE",
    rightsCategories: {
      minimumWage: {
        rate: "$11.75 per hour (as of 2023)",
        details: "Scheduled increases to $15 by 2025",
        link: "https://dol.delaware.gov/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://dol.delaware.gov/",
      },
      workplaceSafety: {
        agency: "Delaware Department of Labor",
        link: "https://dol.delaware.gov/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Sexual orientation",
          "Gender identity",
        ],
        enforcementAgency: "Delaware Department of Labor",
        link: "https://dol.delaware.gov/",
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
        link: "https://dol.delaware.gov/",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: [],
        link: "https://dol.delaware.gov/",
      },
    },
  },
  {
    stateName: "Florida",
    stateAbbreviation: "FL",
    rightsCategories: {
      minimumWage: {
        rate: "$12.00 per hour (as of 2023)",
        details: "Scheduled increases to $15 by 2026",
        link: "https://www.floridajobs.org/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.floridajobs.org/",
      },
      workplaceSafety: {
        agency: "Florida Division of Safety",
        link: "https://www.floridajobs.org/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
        ],
        enforcementAgency: "Florida Commission on Human Relations",
        link: "https://fchr.myflorida.com/",
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
        link: "https://www.floridajobs.org/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.floridajobs.org/",
      },
    },
  },
  {
    stateName: "New York",
    stateAbbreviation: "NY",
    rightsCategories: {
      minimumWage: {
        rate: "$14.20-$15.00 per hour (as of 2023, varies by region)",
        details: "Higher in NYC/Long Island/Westchester",
        link: "https://www.labor.ny.gov/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "Different rules for farm workers",
        link: "https://www.labor.ny.gov/",
      },
      workplaceSafety: {
        agency: "New York State Department of Labor",
        link: "https://www.labor.ny.gov/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Sexual orientation",
          "Gender identity",
          "Military status",
          "Domestic violence victim status",
        ],
        enforcementAgency: "New York State Division of Human Rights",
        link: "https://dhr.ny.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "Up to 56 hours per year for most employees",
        },
        familyLeave: {
          available: true,
          details: "Paid Family Leave program provides up to 12 weeks",
        },
        link: "https://paidfamilyleave.ny.gov/",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Taylor Law for public employees"],
        link: "https://www.labor.ny.gov/",
      },
    },
  },
  {
    stateName: "Georgia",
    stateAbbreviation: "GA",
    rightsCategories: {
      minimumWage: {
        rate:
          "$5.15 per hour (state), but $7.25 federal applies to most employers",
        details: "Only employers not covered by FLSA may pay $5.15",
        link: "https://dol.georgia.gov/minimum-wage",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week (follows FLSA)",
        link: "https://dol.georgia.gov/wage-and-hour",
      },
      workplaceSafety: {
        agency: "Georgia Department of Labor",
        link: "https://dol.georgia.gov/workplace-safety",
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
        ],
        enforcementAgency: "Georgia Commission on Equal Opportunity",
        link: "https://gceo.ga.gov",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://dol.georgia.gov/fmla",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://dol.georgia.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Hawaii",
    stateAbbreviation: "HI",
    rightsCategories: {
      minimumWage: {
        rate: "$12.00 per hour (as of 2023)",
        details: "Scheduled increases to $18 by 2028",
        link: "https://labor.hawaii.gov/wages",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "Daily overtime (over 8 hours) for some industries",
        link: "https://labor.hawaii.gov/wages",
      },
      workplaceSafety: {
        agency: "Hawaii Occupational Safety and Health (HIOSH)",
        link: "https://labor.hawaii.gov/hiosh",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Gender identity",
          "Sexual orientation",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Breastfeeding",
        ],
        enforcementAgency: "Hawaii Civil Rights Commission",
        link: "https://labor.hawaii.gov/hcrc",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 40 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: false,
          details: "No state-mandated paid family leave (unpaid FMLA applies)",
        },
        link: "https://labor.hawaii.gov/paid-sick-leave",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://labor.hawaii.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Illinois",
    stateAbbreviation: "IL",
    rightsCategories: {
      minimumWage: {
        rate: "$13.00 per hour (as of 2023)",
        details: "$15 by 2025; Chicago has higher minimum ($15.80 in 2023)",
        link:
          "https://www2.illinois.gov/idol/Laws-Rules/FLS/Pages/minimum-wage.aspx",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link:
          "https://www2.illinois.gov/idol/Laws-Rules/FLS/Pages/overtime.aspx",
      },
      workplaceSafety: {
        agency: "Illinois OSHA",
        link: "https://www2.illinois.gov/idol/Pages/default.aspx",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Pregnancy",
          "Sexual orientation",
          "Gender identity",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Military status",
          "Arrest record",
        ],
        enforcementAgency: "Illinois Department of Human Rights",
        link: "https://www2.illinois.gov/dhr/Pages/default.aspx",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 40 hours worked (up to 40 hours/year)",
        },
        familyLeave: {
          available: true,
          details:
            "Up to 12 weeks unpaid leave for small employers (not covered by FMLA)",
        },
        link:
          "https://www2.illinois.gov/idol/Laws-Rules/FLS/Pages/paid-sick-leave.aspx",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Illinois Public Labor Relations Act"],
        link:
          "https://www2.illinois.gov/idol/Laws-Rules/FLS/Pages/default.aspx",
      },
    },
  },
  {
    stateName: "Massachusetts",
    stateAbbreviation: "MA",
    rightsCategories: {
      minimumWage: {
        rate: "$15.00 per hour (as of 2023)",
        details: "Tipped wage: $6.75/hour",
        link: "https://www.mass.gov/minimum-wage",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "Sunday/holiday pay required for retail workers",
        link: "https://www.mass.gov/overtime-law",
      },
      workplaceSafety: {
        agency: "Massachusetts Department of Labor Standards",
        link: "https://www.mass.gov/orgs/department-of-labor-standards",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Pregnancy",
          "Sexual orientation",
          "Gender identity",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Military status",
          "Genetic information",
        ],
        enforcementAgency: "Massachusetts Commission Against Discrimination",
        link:
          "https://www.mass.gov/orgs/massachusetts-commission-against-discrimination",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 30 hours worked (up to 40 hours/year)",
        },
        familyLeave: {
          available: true,
          details: "Paid Family and Medical Leave (PFML): Up to 26 weeks/year",
        },
        link: "https://www.mass.gov/paid-family-and-medical-leave",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employee Collective Bargaining"],
        link: "https://www.mass.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Texas",
    stateAbbreviation: "TX",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.twc.texas.gov/jobseekers/minimum-wage-laws-texas",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.twc.texas.gov/jobseekers/overtime-pay-laws-texas",
      },
      workplaceSafety: {
        agency: "Texas Department of Insurance (Workers' Compensation)",
        link: "https://www.tdi.texas.gov/wc/index.html",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Age",
          "Disability",
          "National origin",
        ],
        enforcementAgency: "Texas Workforce Commission",
        link: "https://www.twc.texas.gov/jobseekers/employment-discrimination",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link:
          "https://www.twc.texas.gov/jobseekers/family-and-medical-leave-act-fmla",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: false,
        keyRegulations: [
          "Right-to-work law",
          "No collective bargaining for public employees",
        ],
        link: "https://www.twc.texas.gov/businesses/labor-laws-texas",
      },
    },
  },
  {
    stateName: "Washington",
    stateAbbreviation: "WA",
    rightsCategories: {
      minimumWage: {
        rate: "$15.74 per hour (as of 2023)",
        details: "Adjusted annually for inflation",
        link: "https://www.lni.wa.gov/workers-rights/wages/minimum-wage",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "Agricultural workers qualify after 55 hours/week",
        link: "https://www.lni.wa.gov/workers-rights/wages/overtime",
      },
      workplaceSafety: {
        agency: "Washington Department of Labor & Industries",
        link: "https://www.lni.wa.gov/safety-health",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Pregnancy",
          "Sexual orientation",
          "Gender identity",
          "Age",
          "Disability",
          "Marital status",
          "National origin",
          "Military status",
          "HIV/AIDS status",
        ],
        enforcementAgency: "Washington State Human Rights Commission",
        link: "https://www.hum.wa.gov",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 40 hours worked (no annual cap)",
        },
        familyLeave: {
          available: true,
          details:
            "Paid Family & Medical Leave: Up to 12 weeks (18 for serious conditions)",
        },
        link: "https://paidleave.wa.gov",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employee Collective Bargaining Act"],
        link: "https://www.lni.wa.gov/workers-rights/collective-bargaining",
      },
    },
  },
];
