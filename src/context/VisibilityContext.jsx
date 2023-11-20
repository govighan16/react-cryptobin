import { createContext, useContext, useState } from "react";

const VisibilityContext = createContext();

export const useVisibility = () => {
  return useContext(VisibilityContext);
};

export const VisibilityProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible((prevVisibility) => !prevVisibility);
  };

  return (
    <VisibilityContext.Provider value={{ isVisible, toggleVisibility }}>
      {children}
    </VisibilityContext.Provider>
  );
};
