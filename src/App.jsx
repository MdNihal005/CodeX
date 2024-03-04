import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";

import Navbar from "./components/Navbar";
import { useState } from "react";
import HomePage from "./components/HomePage";
import { Route, Routes } from "react-router-dom";
import HelpDesk from "./components/HelpDesk";
import NotificationsPage from "./components/NotificationsPage";
import ResourcesPage from "./components/ResourcesPage";
const darkTheme = (theme) =>
  createTheme({
    palette: {
      mode: theme ? "light" : "dark",
      primary: {
        main: "#56108a",
      },
      secondary: {
        main: "#767fd6",
      },
      Heading: {
        main: "#ffb366",
      },
    },
  });
const App = () => {
  const [theme, setTheme] = useState(1);
  return (
    <ThemeProvider theme={darkTheme(theme)}>
      <Navbar color="primary" child={setTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Help Desk" element={<HelpDesk />} />
        <Route path="/Notifications" element={<NotificationsPage />} />
        <Route path="/Resources" element={<ResourcesPage />} />
      </Routes>
    </ThemeProvider>
  );
};
export default App;
