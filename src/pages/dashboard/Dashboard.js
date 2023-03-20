import { useState } from "react";
import { ColorModeContext, useMode } from "../../theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import Topbar from "../../components/Topbar";
import Content from "./Content";
import Inventory from "../inventory/inventory";
import Invoice from "../invoice/invoice";
const Dashboard =()=>{
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        <Sidebar isSidebar={isSidebar} />
          <main className="content">
          <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Content />} />
              <Route path="/team"  />
              <Route path="/contacts"  />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/inventory" element={<Inventory />} />
              <Route path="/form"  />
              <Route path="/bar"  />
              <Route path="/pie"  />
              <Route path="/line"  />
              <Route path="/faq"  />
              <Route path="/calendar"  />
              <Route path="/geography"  />
            </Routes>
            
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
 export default Dashboard;