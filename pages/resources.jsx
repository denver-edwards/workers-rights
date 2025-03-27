import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Resources() {
  return (
    <div>
      <Header />

      <main className="flex flex-col items-center justify-center py-10">
        <div className="px-4 w-4/5">
          <h1 className="text-5xl font-bold mb-2 text-center text-gray-800">
            Resources
          </h1>

          <div className="py-2 font-thin text-sm">
            These government websites provide detailed information on various
            workers&apos; rights, including minimum wage, overtime, workplace
            safety, anti-discrimination laws, and more. They can serve as
            authoritative sources for users to learn about their rights and find
            additional resources.
          </div>

          <div className="items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold my-6 text-center text-gray-800">
              Federal Government Resources
            </h3>

            {federalResources.map((resource, index) => {
              return (
                <div key={index} className="py-1">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline "
                  >
                    {resource.name}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold my-6 text-center text-gray-800">
              Labor Unions & Workers&apos; Advocacy Organizations
            </h3>

            {advocacyResources.map((resource, index) => {
              return (
                <div key={index} className="py-1">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {resource.name}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold my-6 text-center text-gray-800">
              Educational/Informational Resources
            </h3>

            {educationResources.map((resource, index) => {
              return (
                <div key={index} className="py-1">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {resource.name}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold my-6 text-center text-gray-800">
              Legal Aid & Assistance
            </h3>

            {legalResources.map((resource, index) => {
              return (
                <div key={index} className="py-1">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {resource.name}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold my-6 text-center text-gray-800">
              Some Infographics{" "}
            </h3>

            {infographics.map((resource, index) => {
              return (
                <div key={index} className="py-1">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 hover:text-blue-900 hover:underline"
                  >
                    {resource.name}
                  </a>
                </div>
              );
            })}
          </div>

          <div className="font-thin text-sm pt-12">
            <p>
              These additional resources cover a range of sources, from labor
              unions and advocacy groups to educational websites and legal aid
              services. They can provide users with a more diverse set of
              information, support, and guidance on workers&apos; rights.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const federalResources = [
  {
    name: "U.S. Department of Labor - Workers' Rights",
    link: "https://www.dol.gov/agencies/whd/workers",
  },
  {
    name: "Occupational Safety and Health Administration (OSHA)",
    link: "https://www.osha.gov/workers",
  },
  {
    name: "National Labor Relations Board (NLRB)",
    link: "https://www.nlrb.gov/about-nlrb/rights-we-protect/your-rights",
  },
  {
    name: "Equal Employment Opportunity Commission (EEOC)",
    link: "https://www.eeoc.gov/laws-guidance",
  },
];

const advocacyResources = [
  {
    name: "AFL-CIO",
    link: "https://aflcio.org/",
  },
  {
    name: "National Employment Law Project",
    link: "https://www.nelp.org/",
  },
  {
    name: "National Women's Law Center",
    link: "https://nwlc.org/",
  },
  {
    name: "ACLU Workers' Know Your Rights",
    link: "https://www.aclu.org/know-your-rights",
  },
];

const educationResources = [
  {
    name: "A Better Balance - Rights Hub",
    link: "https://www.abetterbalance.org/know-your-rights/",
  },
  {
    name: "Workplace Fairness - Employee Rights",
    link: "https://www.workplacefairness.org/",
  },
  {
    name: "FindLaw - Employee Rights",
    link: "https://www.findlaw.com/employment.html",
  },
  {
    name: "Nolo - Employee Rights",
    link: "https://www.nolo.com/legal-encyclopedia/employee-rights",
  },
];

const legalResources = [
  {
    name: "American Bar Association - Legal Aid",
    link: "https://www.americanbar.org/groups/legal_services/flh-home/",
  },
  {
    name: "LawHelp.org - Find Legal Aid",
    link: "https://www.lawhelp.org/",
  },
  {
    name: "National Association of Consumer Advocates",
    link: "https://www.consumeradvocates.org/",
  },
];

const infographics = [
  {
    name: "Union Membership in the U.S. (2020)",
    link: "https://cdn.statcdn.com/Infographic/images/normal/17146.jpeg",
  },
  {
    name: "American Support for Unions",
    link: "https://cdn.statcdn.com/Infographic/images/normal/19196.jpeg",
  },
  {
    name: "Steps to Forming a Union",
    link:
      "https://www.nlrb.gov/sites/default/files/attachments/pages/node-184/steps-to-forming-a-union-final-412.pdf",
  },
];
