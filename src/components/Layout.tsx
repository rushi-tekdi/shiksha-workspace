import React from "react";
import { Box } from "@mui/material";
import Sidebar from "./SideBar";

interface LayoutProps {
  children: React.ReactNode;
  selectedKey: string;
  onSelect: (key: string) => void;
}

const Layout: React.FC<LayoutProps> = ({ children, selectedKey, onSelect }) => {
  return (
    <Box display="flex" sx={{ overflowX: 'hidden !important' }} minHeight={"100vh"}>
      <Box sx={{ height: '100vh', '@media (max-width: 900px)': { position: 'absolute' }, '@media (min-width: 900px)': { background: "linear-gradient(to bottom, white, #F8EFDA)" } }}>
        <Sidebar selectedKey={selectedKey} onSelect={onSelect} />
      </Box>
      <Box sx={{ flex: 1, background: '#fff', '@media (min-width: 900px)': { width: 'calc(100% - 251px)', }, width: '100%' }}>{children}</Box>
    </Box>
  )
};

export default Layout;
