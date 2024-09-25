import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ArrowDownIcon from "@patternfly/react-icons/dist/esm/icons/arrow-down-icon";

export default function FAQ() {
  const [openedDiv, setOpenedDiv] = useState();

  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-10">
        <h1 className="text-5xl font-bold mb-8 text-center text-slate-800">
          Frequently Asked Questions (FAQ)
        </h1>

        {workerRightsFAQ.map((q, index) => {
          return (
            <div
              key={index}
              className="mx-24 my-4 w-3/5 cursor-pointer"
              onClick={() => setOpenedDiv(index)}
            >
              <p className="transition-all rounded-lg py-1 px-4 bg-gray-200 hover:bg-gray-400">
                {q.question}{" "}
                <ArrowDownIcon className="inline mb-[.5px] text-gray-700" />
              </p>
              {workerRightsFAQ[openedDiv] === q ? (
                <p className="px-4 pt-2">{q.answer}</p>
              ) : null}
            </div>
          );
        })}
      </main>
      <Footer />
    </div>
  );
}

const workerRightsFAQ = [
  {
    question: "What is the federal minimum wage?",
    answer:
      "The federal minimum wage is $7.25 per hour. Some states have set a higher minimum wage, in which case the higher state minimum wage applies.",
  },
  {
    question: "Am I entitled to overtime pay?",
    answer:
      "Under the Fair Labor Standards Act (FLSA), non-exempt employees must be paid 1.5 times their regular hourly rate for any hours worked over 40 in a workweek. However, there are some exceptions to who qualifies for overtime pay.",
  },
  {
    question: "What are my rights regarding workplace safety?",
    answer:
      "Employers are required to provide a workplace free from recognized hazards that are causing or are likely to cause death or serious physical harm to employees. The Occupational Safety and Health Administration (OSHA) sets and enforces workplace safety standards.",
  },
  {
    question: "Can I join a labor union?",
    answer:
      "Yes, the National Labor Relations Act (NLRA) protects the right of most private-sector employees to join together, with or without a union, to improve their wages and working conditions. Public sector employees may also have union rights under state laws.",
  },
  {
    question: "Am I entitled to family or medical leave?",
    answer:
      "The Family and Medical Leave Act (FMLA) entitles eligible employees of covered employers to take unpaid, job-protected leave for specified family and medical reasons, such as the birth of a child or a serious health condition.",
  },
  {
    question: "What privacy rights do I have in the workplace?",
    answer:
      "Employees have some privacy rights, such as protection against unreasonable searches of personal belongings. However, employers may have the right to monitor workplace activities, including email and internet usage, to a certain extent.",
  },
  {
    question: "Am I protected from retaliation?",
    answer:
      "Yes, federal laws prohibit employers from retaliating against employees for reporting violations of workplace laws, filing a complaint, or participating in an investigation. Retaliation can take the form of termination, demotion, or other adverse actions.",
  },
  {
    question: "Can my employer fire me for any reason?",
    answer:
      "Most employment is 'at-will,' meaning an employer can generally terminate an employee at any time and for any reason, or for no reason at all. However, there are exceptions, such as termination based on discrimination or in violation of an employment contract.",
  },
  {
    question: "What are the child labor laws?",
    answer:
      "The Fair Labor Standards Act (FLSA) sets limits on the hours and types of work that minors can perform. For example, 14- and 15-year-olds are generally limited to 3 hours of work on a school day and 8 hours on a non-school day.",
  },
  {
    question: "How are employee benefits protected?",
    answer:
      "The Employee Retirement Income Security Act (ERISA) sets standards for private-sector employee benefit plans, including pension and health plans. ERISA provides protections for employees' rights and benefits under these plans.",
  },
];
