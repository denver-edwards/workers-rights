import { USAMap, USAStateAbbreviation } from "@mirawision/usa-map-react";

export default function StateSelector() {
  const handleStateClick = (stateAbbreviation) => {
    alert(`You clicked on ${stateAbbreviation}`);
  };
  const defaultState = { onClick: handleStateClick, fill: "darkred" };

  return <USAMap defaultState={defaultState} />;
}
