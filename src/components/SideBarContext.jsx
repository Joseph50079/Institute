import  { createContext, useContext, useState } from "react";
import PropTypes from 'prop-types';

// Create a Context for Sidebar
const SidebarContext = createContext();

// Provide the Sidebar context to child components
export const SidebarProvider = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  return (
    <SidebarContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
};
SidebarProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Custom hook to use Sidebar context
// Custom hook to use Sidebar context
export const useSidebar = () => useContext(SidebarContext);
