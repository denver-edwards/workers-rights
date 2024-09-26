import InfoCard from "@/components/InfoCard";

export default function BasicRights() {
  return (
    <div className="flex flex-col bg-white m-auto p-auto">
      <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
        <div className="flex flex-nowrap lg:ml-40 md:ml-20 ml-10 ">
          {rightsData.map((right, index) => {
            return (
              <InfoCard
                key={index}
                title={right.title}
                description={right.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

const rightsData = [
  {
    title: "Equal Opportunity",
    description:
      "All workers have the right to be free from discrimination based on race, color, religion, sex (including pregnancy, sexual orientation, or gender identity), national origin, age (40 or older), disability, or genetic information.",
  },
  {
    title: "Fair Compensation",
    description:
      "Workers are entitled to receive at least the federal minimum wage and overtime pay for hours worked beyond 40 per week, with some exceptions.",
  },
  {
    title: "Safe Working Conditions",
    description:
      "Employers must provide a workplace free from recognized hazards and comply with OSHA safety and health standards.",
  },
  {
    title: "Freedom of Association",
    description:
      "Workers have the right to join labor unions and engage in collective bargaining.",
  },
  {
    title: "Family and Medical Leave",
    description:
      "Eligible employees can take unpaid, job-protected leave for specified family and medical reasons.",
  },
  {
    title: "Privacy",
    description:
      "Workers have certain privacy rights regarding their personal information and belongings in the workplace.",
  },
  {
    title: "Whistleblower Protections",
    description:
      "Employees are protected from retaliation for reporting violations of various workplace laws.",
  },
  {
    title: "Breaks and Rest Periods",
    description:
      "Many states require employers to provide meal breaks and rest periods, though federal law does not.",
  },
  {
    title: "Termination Rights",
    description:
      "While most employment is 'at-will,' workers have protections against wrongful termination based on discriminatory reasons or in violation of an employment contract.",
  },
];
