import { statesWorkersRights } from "@/lib/states";

export default function StateWorkersRightsModal({ stateAbbreviation }) {
  const [stateData] = statesWorkersRights.filter(
    (state) => state.stateAbbreviation === stateAbbreviation
  );

  if (!stateData)
    return (
      <div className="p-4 bg-red-50 text-red-700 rounded-lg border border-red-200">
        No workers' rights information found for this state.
      </div>
    );

  // Helper function to render sections consistently
  const renderSection = (title, icon, color, content) => (
    <div className={`bg-${color}-50 p-5 rounded-lg shadow-sm mb-6`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`bg-${color}-100 p-2 rounded-full`}>{icon}</div>
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
      </div>

      <div className="space-y-3 pl-11">{content}</div>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">
          {stateData.stateName} Workers' Rights
        </h1>
        <p className="text-gray-600 mt-1">
          Comprehensive guide to employment laws and regulations
        </p>
      </div>

      {/* Minimum Wage */}
      {renderSection(
        "Minimum Wage",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-blue-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>,
        "blue",
        <>
          <p className="text-gray-700">
            <span className="font-medium">Rate:</span>{" "}
            {stateData.rightsCategories.minimumWage.rate}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Details:</span>{" "}
            {stateData.rightsCategories.minimumWage.details}
          </p>
          <a
            href={stateData.rightsCategories.minimumWage.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 hover:underline"
          >
            Official Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      )}

      {/* Overtime Pay */}
      {renderSection(
        "Overtime Pay",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>,
        "green",
        <>
          <p className="text-gray-700">
            <span className="font-medium">Rate:</span>{" "}
            {stateData.rightsCategories.overtimePay.rate}
          </p>
          {stateData.rightsCategories.overtimePay.details && (
            <p className="text-gray-700">
              <span className="font-medium">Details:</span>{" "}
              {stateData.rightsCategories.overtimePay.details}
            </p>
          )}
          <a
            href={stateData.rightsCategories.overtimePay.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-green-600 hover:text-green-800 hover:underline"
          >
            Official Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      )}

      {/* Workplace Safety */}
      {renderSection(
        "Workplace Safety",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-yellow-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01"
          />
        </svg>,
        "yellow",
        <>
          <p className="text-gray-700">
            <span className="font-medium">Agency:</span>{" "}
            {stateData.rightsCategories.workplaceSafety.agency}
          </p>
          {stateData.rightsCategories.workplaceSafety.keyRegulations && (
            <p className="text-gray-700">
              <span className="font-medium">Regulations:</span>{" "}
              {stateData.rightsCategories.workplaceSafety.keyRegulations.join(
                ", "
              )}
            </p>
          )}
          <a
            href={stateData.rightsCategories.workplaceSafety.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-yellow-600 hover:text-yellow-800 hover:underline"
          >
            Official Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      )}

      {/* Anti-Discrimination Laws */}
      {renderSection(
        "Anti-Discrimination Laws",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-purple-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>,
        "purple",
        <>
          <p className="text-gray-700">
            <span className="font-medium">Protected Classes:</span>{" "}
            {stateData.rightsCategories.antiDiscriminationLaws.protectedClasses.join(
              ", "
            )}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Enforcement Agency:</span>{" "}
            {
              stateData.rightsCategories.antiDiscriminationLaws
                .enforcementAgency
            }
          </p>
          <a
            href={stateData.rightsCategories.antiDiscriminationLaws.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-purple-600 hover:text-purple-800 hover:underline"
          >
            Official Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      )}

      {/* Leave Policies */}
      {renderSection(
        "Leave Policies",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-indigo-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>,
        "indigo",
        <>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Sick Leave:</span>{" "}
              {stateData.rightsCategories.leavePolicies.sickLeave.required
                ? "Required"
                : "Not required"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Details:</span>{" "}
              {stateData.rightsCategories.leavePolicies.sickLeave.details}
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-gray-700">
              <span className="font-medium">Family Leave:</span>{" "}
              {stateData.rightsCategories.leavePolicies.familyLeave.available
                ? "Available"
                : "Not available"}
            </p>
            <p className="text-gray-700">
              <span className="font-medium">Details:</span>{" "}
              {stateData.rightsCategories.leavePolicies.familyLeave.details}
            </p>
          </div>
          <a
            href={stateData.rightsCategories.leavePolicies.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 hover:underline"
          >
            Official Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      )}

      {/* Unionization Rights */}
      {renderSection(
        "Unionization Rights",
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-red-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>,
        "red",
        <>
          <p className="text-gray-700">
            <span className="font-medium">Right-to-Work State:</span>{" "}
            {stateData.rightsCategories.unionizationRights.rightToWorkState
              ? "Yes"
              : "No"}
          </p>
          <p className="text-gray-700">
            <span className="font-medium">Public Sector Unions:</span>{" "}
            {stateData.rightsCategories.unionizationRights.publicSectorUnions
              ? "Allowed"
              : "Not allowed"}
          </p>
          {stateData.rightsCategories.unionizationRights.keyRegulations && (
            <p className="text-gray-700">
              <span className="font-medium">Key Regulations:</span>{" "}
              {stateData.rightsCategories.unionizationRights.keyRegulations.join(
                ", "
              )}
            </p>
          )}
          <a
            href={stateData.rightsCategories.unionizationRights.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-red-600 hover:text-red-800 hover:underline"
          >
            Official Source
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </>
      )}
    </div>
  );
}
