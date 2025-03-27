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
  {
    stateName: "Idaho",
    stateAbbreviation: "ID",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://labor.idaho.gov/dnn/Wage-Hour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://labor.idaho.gov/dnn/Wage-Hour",
      },
      workplaceSafety: {
        agency: "Idaho Division of Occupational Safety and Health",
        link: "https://labor.idaho.gov/dnn/IDOSH",
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
        enforcementAgency: "Idaho Human Rights Commission",
        link: "https://humanrights.idaho.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://labor.idaho.gov/dnn/Leave-Laws",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://labor.idaho.gov/dnn/Labor-Laws",
      },
    },
  },
  {
    stateName: "Indiana",
    stateAbbreviation: "IN",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.in.gov/dol/2366.htm",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.in.gov/dol/2366.htm",
      },
      workplaceSafety: {
        agency: "Indiana Occupational Safety and Health Administration",
        link: "https://www.in.gov/dol/iosha.htm",
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
        enforcementAgency: "Indiana Civil Rights Commission",
        link: "https://www.in.gov/icrc/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.in.gov/dol/2366.htm",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.in.gov/dol/2366.htm",
      },
    },
  },
  {
    stateName: "Iowa",
    stateAbbreviation: "IA",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.iowaworkforcedevelopment.gov/labor-laws",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.iowaworkforcedevelopment.gov/labor-laws",
      },
      workplaceSafety: {
        agency: "Iowa Occupational Safety and Health",
        link: "https://www.iowaworkforcedevelopment.gov/iowa-osha",
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
        enforcementAgency: "Iowa Civil Rights Commission",
        link: "https://icrc.iowa.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.iowaworkforcedevelopment.gov/labor-laws",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.iowaworkforcedevelopment.gov/labor-laws",
      },
    },
  },
  {
    stateName: "Kansas",
    stateAbbreviation: "KS",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.dol.ks.gov/wagehour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.dol.ks.gov/wagehour",
      },
      workplaceSafety: {
        agency: "Kansas Department of Labor",
        link: "https://www.dol.ks.gov/safetyhealth",
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
        enforcementAgency: "Kansas Human Rights Commission",
        link: "https://www.khrc.net/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.dol.ks.gov/wagehour",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.dol.ks.gov/wagehour",
      },
    },
  },
  {
    stateName: "Kentucky",
    stateAbbreviation: "KY",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://labor.ky.gov/Pages/default.aspx",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://labor.ky.gov/Pages/default.aspx",
      },
      workplaceSafety: {
        agency: "Kentucky Labor Cabinet",
        link: "https://labor.ky.gov/Pages/default.aspx",
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
        enforcementAgency: "Kentucky Commission on Human Rights",
        link: "https://kchr.ky.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://labor.ky.gov/Pages/default.aspx",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://labor.ky.gov/Pages/default.aspx",
      },
    },
  },
  {
    stateName: "Louisiana",
    stateAbbreviation: "LA",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.laworks.net/Labor/Labor_WageHour.asp",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.laworks.net/Labor/Labor_WageHour.asp",
      },
      workplaceSafety: {
        agency: "Louisiana Workforce Commission",
        link: "https://www.laworks.net/WorkersComp/OSH_SafetyConsultation.asp",
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
        enforcementAgency: "Louisiana Commission on Human Rights",
        link: "https://lchr.louisiana.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.laworks.net/Labor/Labor_WageHour.asp",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.laworks.net/Labor/Labor_WageHour.asp",
      },
    },
  },
  {
    stateName: "Maine",
    stateAbbreviation: "ME",
    rightsCategories: {
      minimumWage: {
        rate: "$13.80 per hour (2023)",
        details: "Adjusted annually for inflation",
        link:
          "https://www.maine.gov/labor/labor_laws/wagehour/minimumwage.html",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.maine.gov/labor/labor_laws/wagehour/overtime.html",
      },
      workplaceSafety: {
        agency: "Maine Department of Labor",
        link: "https://www.maine.gov/labor/safetyhealth/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Maine Human Rights Commission",
        link: "https://www.maine.gov/mhrc/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 40 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Up to 10 weeks paid family leave through state program",
        },
        link: "https://www.maine.gov/labor/labor_laws/leave.html",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link:
          "https://www.maine.gov/labor/labor_laws/collectivebargaining.html",
      },
    },
  },
  {
    stateName: "Maryland",
    stateAbbreviation: "MD",
    rightsCategories: {
      minimumWage: {
        rate: "$13.25 per hour (2023)",
        details: "$15 by 2025",
        link: "https://www.dllr.state.md.us/labor/wage/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.dllr.state.md.us/labor/wage/",
      },
      workplaceSafety: {
        agency: "Maryland Occupational Safety and Health",
        link: "https://www.dllr.state.md.us/labor/mosh/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Maryland Commission on Civil Rights",
        link: "https://mccr.maryland.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 30 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Up to 12 weeks paid family leave starting 2025",
        },
        link: "https://www.dllr.state.md.us/paidleave/",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://www.dllr.state.md.us/labor/collectivebargaining/",
      },
    },
  },
  {
    stateName: "Michigan",
    stateAbbreviation: "MI",
    rightsCategories: {
      minimumWage: {
        rate: "$10.10 per hour (2023)",
        details: "Tipped wage: $3.84/hour",
        link: "https://www.michigan.gov/leo/bureaus-agencies/wagehour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.michigan.gov/leo/bureaus-agencies/wagehour",
      },
      workplaceSafety: {
        agency: "Michigan Occupational Safety and Health Administration",
        link: "https://www.michigan.gov/leo/bureaus-agencies/miosha",
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
          "Height",
          "Weight",
        ],
        enforcementAgency: "Michigan Department of Civil Rights",
        link: "https://www.michigan.gov/mdcr",
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
        link: "https://www.michigan.gov/leo/bureaus-agencies/wagehour",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employment Relations Act"],
        link: "https://www.michigan.gov/leo/bureaus-agencies/wagehour",
      },
    },
  },
  {
    stateName: "Minnesota",
    stateAbbreviation: "MN",
    rightsCategories: {
      minimumWage: {
        rate: "$10.59 per hour (2023, large employers)",
        details: "Small employer rate: $8.63/hour",
        link:
          "https://www.dli.mn.gov/business/employment-practices/minnesota-minimum-wage-law",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 48 in a week",
        details: "Different for some industries",
        link:
          "https://www.dli.mn.gov/business/employment-practices/minnesota-overtime-and-hours-worked",
      },
      workplaceSafety: {
        agency: "Minnesota Occupational Safety and Health",
        link: "https://www.dli.mn.gov/business/workplace-safety-and-health",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Minnesota Department of Human Rights",
        link: "https://mn.gov/mdhr/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 30 hours worked, up to 48 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Up to 12 weeks unpaid leave for small employers",
        },
        link:
          "https://www.dli.mn.gov/business/employment-practices/earned-sick-and-safe-time",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employment Labor Relations Act"],
        link: "https://www.mmb.state.mn.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Mississippi",
    stateAbbreviation: "MS",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link:
          "https://www.mdc.ms.gov/divisions/workers-compensation/wage-hour-division/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link:
          "https://www.mdc.ms.gov/divisions/workers-compensation/wage-hour-division/",
      },
      workplaceSafety: {
        agency: "Mississippi Workers' Compensation Commission",
        link: "https://www.mwcc.ms.gov/",
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
        enforcementAgency: "Mississippi Department of Employment Security",
        link: "https://mdes.ms.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link:
          "https://www.mdc.ms.gov/divisions/workers-compensation/wage-hour-division/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: false,
        keyRegulations: ["Right-to-work law"],
        link:
          "https://www.mdc.ms.gov/divisions/workers-compensation/wage-hour-division/",
      },
    },
  },
  {
    stateName: "Missouri",
    stateAbbreviation: "MO",
    rightsCategories: {
      minimumWage: {
        rate: "$12.00 per hour (2023)",
        details: "Adjusted annually for inflation",
        link: "https://labor.mo.gov/minimum-wage",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://labor.mo.gov/minimum-wage",
      },
      workplaceSafety: {
        agency: "Missouri Department of Labor",
        link: "https://labor.mo.gov/safety-health",
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
        enforcementAgency: "Missouri Commission on Human Rights",
        link: "https://labor.mo.gov/mchr",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://labor.mo.gov/minimum-wage",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://labor.mo.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Montana",
    stateAbbreviation: "MT",
    rightsCategories: {
      minimumWage: {
        rate: "$9.95 per hour (2023)",
        details: "Adjusted annually for inflation",
        link: "https://erd.dli.mt.gov/labor-standards",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://erd.dli.mt.gov/labor-standards",
      },
      workplaceSafety: {
        agency: "Montana Department of Labor and Industry",
        link: "https://erd.dli.mt.gov/safety-health",
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
        enforcementAgency: "Montana Human Rights Bureau",
        link: "https://erd.dli.mt.gov/human-rights",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://erd.dli.mt.gov/labor-standards",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://erd.dli.mt.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Nebraska",
    stateAbbreviation: "NE",
    rightsCategories: {
      minimumWage: {
        rate: "$10.50 per hour (2023)",
        details: "$15 by 2026",
        link: "https://dol.nebraska.gov/wagehour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://dol.nebraska.gov/wagehour",
      },
      workplaceSafety: {
        agency: "Nebraska Department of Labor",
        link: "https://dol.nebraska.gov/safety",
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
        enforcementAgency: "Nebraska Equal Opportunity Commission",
        link: "https://neoc.nebraska.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://dol.nebraska.gov/wagehour",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://dol.nebraska.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Nevada",
    stateAbbreviation: "NV",
    rightsCategories: {
      minimumWage: {
        rate: "$10.25 per hour (2023, without health benefits)",
        details: "$11.25 with health benefits",
        link:
          "https://labor.nv.gov/Employers/Wage_and_Hour_Information/Minimum_Wage/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "2x for hours over 8 in a day for some employees",
        link:
          "https://labor.nv.gov/Employers/Wage_and_Hour_Information/Overtime/",
      },
      workplaceSafety: {
        agency: "Nevada Division of Industrial Relations",
        link: "https://dir.nv.gov/OSHA/Home/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Nevada Equal Rights Commission",
        link: "https://detr.nv.gov/Page/Equal_Rights_Commission/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "0.01923 hours per hour worked (about 40 hours/year)",
        },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link:
          "https://labor.nv.gov/Employers/Wage_and_Hour_Information/Paid_Leave/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://labor.nv.gov/Employers/Labor_Relations/",
      },
    },
  },
  {
    stateName: "New Hampshire",
    stateAbbreviation: "NH",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.nh.gov/labor/wage-hour/index.htm",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.nh.gov/labor/wage-hour/index.htm",
      },
      workplaceSafety: {
        agency: "New Hampshire Department of Labor",
        link: "https://www.nh.gov/labor/occupational-safety/index.htm",
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
          "Marital status",
        ],
        enforcementAgency: "New Hampshire Commission for Human Rights",
        link: "https://www.nh.gov/hrc/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.nh.gov/labor/wage-hour/index.htm",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://www.nh.gov/labor/labor-relations/index.htm",
      },
    },
  },
  {
    stateName: "New Jersey",
    stateAbbreviation: "NJ",
    rightsCategories: {
      minimumWage: {
        rate: "$14.13 per hour (2023)",
        details: "$15 by 2024 for most employees",
        link: "https://www.nj.gov/labor/wageandhour/lawregs/minimum_wage.shtml",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.nj.gov/labor/wageandhour/lawregs/overtime.shtml",
      },
      workplaceSafety: {
        agency: "New Jersey Department of Labor",
        link: "https://www.nj.gov/labor/wps/index.shtml",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "New Jersey Division on Civil Rights",
        link:
          "https://www.njoag.gov/about/divisions-and-offices/division-on-civil-rights-home/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 30 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Up to 12 weeks paid family leave through state program",
        },
        link: "https://www.nj.gov/labor/earnedsick/workers/",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://www.nj.gov/labor/laborrelations/",
      },
    },
  },
  {
    stateName: "New Mexico",
    stateAbbreviation: "NM",
    rightsCategories: {
      minimumWage: {
        rate: "$12.00 per hour (2023)",
        details: "Adjusted annually for inflation",
        link: "https://www.dws.state.nm.us/Minimum-Wage-Information",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.dws.state.nm.us/Minimum-Wage-Information",
      },
      workplaceSafety: {
        agency: "New Mexico Environment Department",
        link: "https://www.env.nm.gov/occupational-health-safety/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "New Mexico Human Rights Bureau",
        link: "https://www.dws.state.nm.us/Human-Rights-Bureau",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 30 hours worked, up to 64 hours/year",
        },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.dws.state.nm.us/Minimum-Wage-Information",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public sector collective bargaining"],
        link: "https://www.dws.state.nm.us/Labor-Relations",
      },
    },
  },
  {
    stateName: "North Carolina",
    stateAbbreviation: "NC",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link:
          "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-time-worked-and-wages-earned/wage-and-hour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link:
          "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-time-worked-and-wages-earned/wage-and-hour",
      },
      workplaceSafety: {
        agency: "North Carolina Department of Labor",
        link: "https://www.labor.nc.gov/workplace-safety-and-health",
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
        enforcementAgency: "North Carolina Department of Labor",
        link:
          "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-discriminationharassment-and-retaliation",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link:
          "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-time-worked-and-wages-earned/wage-and-hour",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: false,
        keyRegulations: ["Right-to-work law"],
        link:
          "https://www.labor.nc.gov/workplace-rights/employee-rights-regarding-union-membership",
      },
    },
  },
  {
    stateName: "North Dakota",
    stateAbbreviation: "ND",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.nd.gov/labor/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.nd.gov/labor/",
      },
      workplaceSafety: {
        agency: "North Dakota Workforce Safety & Insurance",
        link: "https://www.workforcesafety.com/",
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
        enforcementAgency: "North Dakota Department of Labor",
        link: "https://www.nd.gov/labor/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.nd.gov/labor/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.nd.gov/labor/",
      },
    },
  },
  {
    stateName: "Ohio",
    stateAbbreviation: "OH",
    rightsCategories: {
      minimumWage: {
        rate: "$10.10 per hour (2023)",
        details: "Tipped wage: $5.05/hour",
        link:
          "https://com.ohio.gov/wps/portal/gov/com/divisions-and-programs/industrial-compliance/wage-and-hour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link:
          "https://com.ohio.gov/wps/portal/gov/com/divisions-and-programs/industrial-compliance/wage-and-hour",
      },
      workplaceSafety: {
        agency: "Ohio Bureau of Workers' Compensation",
        link: "https://www.bwc.ohio.gov/",
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
        enforcementAgency: "Ohio Civil Rights Commission",
        link: "https://crc.ohio.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link:
          "https://com.ohio.gov/wps/portal/gov/com/divisions-and-programs/industrial-compliance/wage-and-hour",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employees Collective Bargaining Act"],
        link: "https://serb.ohio.gov/",
      },
    },
  },
  {
    stateName: "Oklahoma",
    stateAbbreviation: "OK",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://oklahoma.gov/odol.html",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://oklahoma.gov/odol.html",
      },
      workplaceSafety: {
        agency: "Oklahoma Department of Labor",
        link: "https://oklahoma.gov/odol.html",
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
        enforcementAgency: "Oklahoma Human Rights Commission",
        link: "https://www.ok.gov/ohrc/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://oklahoma.gov/odol.html",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://oklahoma.gov/odol.html",
      },
    },
  },
  {
    stateName: "Oregon",
    stateAbbreviation: "OR",
    rightsCategories: {
      minimumWage: {
        rate: "$13.50-$14.75 per hour (2023, varies by region)",
        details: "Portland metro highest, adjusted annually",
        link: "https://www.oregon.gov/boli/workers/Pages/minimum-wage.aspx",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        details: "Different rules for manufacturing",
        link: "https://www.oregon.gov/boli/workers/Pages/overtime.aspx",
      },
      workplaceSafety: {
        agency: "Oregon Occupational Safety and Health",
        link: "https://osha.oregon.gov/Pages/index.aspx",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Oregon Bureau of Labor and Industries",
        link: "https://www.oregon.gov/boli/Pages/index.aspx",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 30 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Paid Family Leave program starting 2023",
        },
        link:
          "https://www.oregon.gov/boli/workers/Pages/paid-leave-oregon.aspx",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employee Collective Bargaining Act"],
        link: "https://www.oregon.gov/erlb/Pages/index.aspx",
      },
    },
  },
  {
    stateName: "Pennsylvania",
    stateAbbreviation: "PA",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link:
          "https://www.dli.pa.gov/Individuals/Labor-Management-Relations/llc/Pages/default.aspx",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link:
          "https://www.dli.pa.gov/Individuals/Labor-Management-Relations/llc/Pages/default.aspx",
      },
      workplaceSafety: {
        agency: "Pennsylvania Department of Labor & Industry",
        link:
          "https://www.dli.pa.gov/Individuals/Workplace-Safety/Pages/default.aspx",
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
        ],
        enforcementAgency: "Pennsylvania Human Relations Commission",
        link: "https://www.phrc.pa.gov/Pages/default.aspx",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link:
          "https://www.dli.pa.gov/Individuals/Labor-Management-Relations/llc/Pages/default.aspx",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employee Relations Act"],
        link:
          "https://www.dli.pa.gov/Individuals/Labor-Management-Relations/plrb/Pages/default.aspx",
      },
    },
  },
  {
    stateName: "Rhode Island",
    stateAbbreviation: "RI",
    rightsCategories: {
      minimumWage: {
        rate: "$13.00 per hour (2023)",
        details: "$15 by 2025",
        link: "https://dlt.ri.gov/laborstandards/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://dlt.ri.gov/laborstandards/",
      },
      workplaceSafety: {
        agency: "Rhode Island Department of Labor and Training",
        link: "https://dlt.ri.gov/occupational-safety",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Rhode Island Commission for Human Rights",
        link: "https://richr.ri.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 35 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Temporary Caregiver Insurance program provides 4 weeks",
        },
        link:
          "https://dlt.ri.gov/individuals/unemployment-insurance/temporary-disability-insurance-tdi-temporary-caregiver-insurance-tci",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employee Arbitration Act"],
        link: "https://dlt.ri.gov/labor-relations",
      },
    },
  },
  {
    stateName: "South Carolina",
    stateAbbreviation: "SC",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.scjustice.org/workplace-rights/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.scjustice.org/workplace-rights/",
      },
      workplaceSafety: {
        agency: "South Carolina Department of Labor",
        link: "https://www.scosha.llronline.com/",
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
        enforcementAgency: "South Carolina Human Affairs Commission",
        link: "https://schac.sc.gov/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.scjustice.org/workplace-rights/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: false,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.scjustice.org/workplace-rights/",
      },
    },
  },
  {
    stateName: "South Dakota",
    stateAbbreviation: "SD",
    rightsCategories: {
      minimumWage: {
        rate: "$10.80 per hour (2023)",
        details: "Adjusted annually for inflation",
        link: "https://dlr.sd.gov/labor_law/default.aspx",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://dlr.sd.gov/labor_law/default.aspx",
      },
      workplaceSafety: {
        agency: "South Dakota Department of Labor and Regulation",
        link: "https://dlr.sd.gov/safety/default.aspx",
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
        enforcementAgency: "South Dakota Division of Human Rights",
        link: "https://dlr.sd.gov/human_rights/default.aspx",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://dlr.sd.gov/labor_law/default.aspx",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://dlr.sd.gov/labor_law/default.aspx",
      },
    },
  },
  {
    stateName: "Tennessee",
    stateAbbreviation: "TN",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://www.tn.gov/workforce.html",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.tn.gov/workforce.html",
      },
      workplaceSafety: {
        agency: "Tennessee Occupational Safety and Health Administration",
        link: "https://www.tn.gov/workforce/section/safety-health.html",
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
        enforcementAgency: "Tennessee Human Rights Commission",
        link: "https://www.tn.gov/humanrights.html",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.tn.gov/workforce.html",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: false,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.tn.gov/workforce.html",
      },
    },
  },
  {
    stateName: "Utah",
    stateAbbreviation: "UT",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://laborcommission.utah.gov/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://laborcommission.utah.gov/",
      },
      workplaceSafety: {
        agency: "Utah Labor Commission",
        link:
          "https://laborcommission.utah.gov/divisions/occupational-safety-and-health/",
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
        enforcementAgency: "Utah Antidiscrimination and Labor Division",
        link:
          "https://laborcommission.utah.gov/divisions/antidiscrimination-and-labor/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://laborcommission.utah.gov/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://laborcommission.utah.gov/",
      },
    },
  },
  {
    stateName: "Vermont",
    stateAbbreviation: "VT",
    rightsCategories: {
      minimumWage: {
        rate: "$13.18 per hour (2023)",
        details: "Adjusted annually for inflation",
        link: "https://labor.vermont.gov/wage-and-hour",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://labor.vermont.gov/wage-and-hour",
      },
      workplaceSafety: {
        agency: "Vermont Occupational Safety and Health Administration",
        link: "https://labor.vermont.gov/vosha",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Vermont Human Rights Commission",
        link: "https://hrc.vermont.gov/",
      },
      leavePolicies: {
        sickLeave: {
          required: true,
          details: "1 hour per 52 hours worked, up to 40 hours/year",
        },
        familyLeave: {
          available: true,
          details: "Up to 12 weeks paid family leave starting 2023",
        },
        link: "https://labor.vermont.gov/family-leave",
      },
      unionizationRights: {
        rightToWorkState: false,
        publicSectorUnions: true,
        keyRegulations: ["Public Employee Labor Relations Act"],
        link: "https://labor.vermont.gov/labor-relations",
      },
    },
  },
  {
    stateName: "Virginia",
    stateAbbreviation: "VA",
    rightsCategories: {
      minimumWage: {
        rate: "$12.00 per hour (2023)",
        details: "$15 by 2026",
        link: "https://www.doli.virginia.gov/labor-law/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://www.doli.virginia.gov/labor-law/",
      },
      workplaceSafety: {
        agency: "Virginia Department of Labor and Industry",
        link: "https://www.doli.virginia.gov/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "Gender identity",
          "National origin",
          "Age",
          "Disability",
        ],
        enforcementAgency: "Virginia Division of Human Rights",
        link: "https://www.dhrm.virginia.gov/human-rights",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://www.doli.virginia.gov/labor-law/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://www.doli.virginia.gov/labor-law/",
      },
    },
  },
  {
    stateName: "West Virginia",
    stateAbbreviation: "WV",
    rightsCategories: {
      minimumWage: {
        rate: "$8.75 per hour (2023)",
        details: "Adjusted annually for inflation",
        link: "https://labor.wv.gov/Wage-Hour/Pages/default.aspx",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://labor.wv.gov/Wage-Hour/Pages/default.aspx",
      },
      workplaceSafety: {
        agency: "West Virginia Division of Labor",
        link: "https://labor.wv.gov/Pages/default.aspx",
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
        enforcementAgency: "West Virginia Human Rights Commission",
        link: "https://hrc.wv.gov/Pages/default.aspx",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://labor.wv.gov/Wage-Hour/Pages/default.aspx",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://labor.wv.gov/Wage-Hour/Pages/default.aspx",
      },
    },
  },
  {
    stateName: "Wisconsin",
    stateAbbreviation: "WI",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://dwd.wisconsin.gov/er/labor_standards/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://dwd.wisconsin.gov/er/labor_standards/",
      },
      workplaceSafety: {
        agency: "Wisconsin Department of Workforce Development",
        link: "https://dwd.wisconsin.gov/safety-health/",
      },
      antiDiscriminationLaws: {
        protectedClasses: [
          "Race",
          "Color",
          "Religion",
          "Sex",
          "Sexual orientation",
          "National origin",
          "Age",
          "Disability",
          "Marital status",
        ],
        enforcementAgency: "Wisconsin Department of Workforce Development",
        link: "https://dwd.wisconsin.gov/er/discrimination/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://dwd.wisconsin.gov/er/labor_standards/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://dwd.wisconsin.gov/er/labor_relations/",
      },
    },
  },
  {
    stateName: "Wyoming",
    stateAbbreviation: "WY",
    rightsCategories: {
      minimumWage: {
        rate: "$7.25 per hour (matches federal minimum)",
        details: "No state minimum wage law",
        link: "https://wyomingworkforce.org/labor-standards/",
      },
      overtimePay: {
        rate: "1.5x regular rate for hours over 40 in a week",
        link: "https://wyomingworkforce.org/labor-standards/",
      },
      workplaceSafety: {
        agency: "Wyoming Department of Workforce Services",
        link: "https://wyomingworkforce.org/occupational-safety/",
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
        enforcementAgency: "Wyoming Department of Workforce Services",
        link: "https://wyomingworkforce.org/discrimination/",
      },
      leavePolicies: {
        sickLeave: { required: false, details: "No state-mandated sick leave" },
        familyLeave: {
          available: false,
          details: "No state-mandated family leave beyond federal FMLA",
        },
        link: "https://wyomingworkforce.org/labor-standards/",
      },
      unionizationRights: {
        rightToWorkState: true,
        publicSectorUnions: true,
        keyRegulations: ["Right-to-work law"],
        link: "https://wyomingworkforce.org/labor-standards/",
      },
    },
  },
];
