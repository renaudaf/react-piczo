import React, { useState } from "react";

import pictures from "../data/pictures";

const Context = React.createContext();

const ContextProvider = ({ children }) => {
  const [allPhotos] = useState(pictures);

  return (
    <Context.Provider value={{ allPhotos }}>
      {children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
