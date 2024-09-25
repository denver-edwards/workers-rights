import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function GetInvolved() {
  return (
    <div>
      <Header />
      <main className="flex flex-col items-center justify-center py-10">
        <div className="items-center justify-center flex flex-col  w-4/5">
          <h1 className="text-5xl font-bold mb-2 text-center text-gray-800">
            Get Involved
          </h1>

          <div className="py-2 font-thin text-sm">
            The best way to spread the message is to let your firends and family
            know their rights as worker! No one should have to work 40+ hours to
            have a barely living wage. Nor risk life or limb for a conglomerate
            that doesnt care one way or another about your safety.
          </div>

          <div
            id="unionizing"
            className="items-center justify-center flex flex-col pb-10"
          >
            <h3 className="text-2xl font-semibold mt-6 text-center text-gray-800">
              Start or Join a Union
            </h3>

            <div className="py-2 px-6 font-thin text-sm">
              Unionizing gives workers collective bargaining power, ensuring
              fair wages, better working conditions, and protection against
              unfair treatment.
            </div>

            {unionResources.map((resource, index) => {
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

          <div
            id="co-op"
            className="items-center justify-center flex flex-col pb-10"
          >
            <h3 className="text-2xl font-semibold mt-6 text-center text-gray-800">
              Start or Join a Worker Collective
            </h3>

            <div className="py-2 px-6 font-thin text-sm">
              <a
                className="text-blue-700 hover:text-blue-900 hover:underline"
                href="https://institute.coop/what-worker-cooperative"
              >
                Worker collectives
              </a>{" "}
              give employees a unified voice, enabling them to advocate for fair
              wages, improved working conditions, and greater protection from
              exploitation. By working together, they can drive meaningful
              change and create a more equitable workplace.
            </div>

            {collectiveResources.map((resource, index) => {
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

          <div id="share" className="items-center justify-center flex flex-col">
            <h3 className="text-2xl font-semibold mt-6 text-center text-gray-800">
              Share, Share, Share!
            </h3>

            <div className="py-2 px-6 font-thin text-sm"></div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const unionResources = [
  {
    name: "How to Join a Union",
    link: "https://www.unionplus.org/page/how-join-union",
  },
  {
    name: "Who Can Form and Join a Union",
    link: "https://www.workcenter.gov/who-can-form-and-join-a-union/",
  },
  {
    name: "AFL-CIO - How to Form a Union",
    link: "https://aflcio.org/formaunion",
  },
  {
    name: "National Labor Relations Board - Unionization Process",
    link:
      "https://www.nlrb.gov/sites/default/files/attachments/pages/node-184/steps-to-forming-a-union-final-412.pdf",
  },
];

const collectiveResources = [
  {
    name: "Cooperative Development Institute - Co-op Start-up Guide",
    link: "https://cdi.coop/resource-center/co-op-start-up-guide/",
  },
  {
    name: "Democracy at Work Institute - Resource Library",
    link: "https://institute.coop/resources/starting-worker-cooperative",
  },
  {
    name: "U.S. Federation of Worker Cooperatives - Resources for Startups",
    link: "https://www.usworker.coop/clinic/startups/",
  },
];
