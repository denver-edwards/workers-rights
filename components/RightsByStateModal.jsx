import { useState, useEffect } from "react";
import { statesWorkersRights } from "@/lib/statesWorkersRights";

export default function StateWorkersRights({ stateAbbreviation }) {
  const stateData = statesWorkersRights.find(
    (state) => state.stateAbbreviation === stateAbbreviation
  );

  if (!stateData) return <div>State not found</div>;

  return (
    <div>
      <h1>{stateData.stateName} Workers' Rights</h1>
      <h2>Minimum Wage</h2>
      <p>Rate: {stateData.rightsCategories.minimumWage.rate}</p>
      <p>Details: {stateData.rightsCategories.minimumWage.details}</p>
      <a href={stateData.rightsCategories.minimumWage.link}>Official Source</a>
    </div>
  );
}
