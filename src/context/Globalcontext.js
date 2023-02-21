import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider(props) {
  const [containerHeight, setContainerHeight] = useState("100vh");

  let value = { containerHeight, setContainerHeight };
  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
