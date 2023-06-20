import {
  EuiGlobalToastList,
  EuiProvider,
  EuiThemeProvider,
} from "@elastic/eui";
import { EuiThemeColorMode } from "@elastic/eui/src/services/theme";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useAppSelector } from "./app/hooks";
import { setToasts } from "./app/slices/MeetingSlice";
import ThemeSelector from "./components/ThemeSelector";
import CreateMeeting from "./pages/CreateMeeting";
import Dashboard from "./pages/Dashboard";
import JoinMeeting from "./pages/JoinMeeting";
import Login from "./pages/Login";
import Meeting from "./pages/Meeting";
import MyMeetings from "./pages/MyMeetings";
import OneOnOneMeeting from "./pages/OneOnOneMeeting";
import VideoConference from "./pages/VideoConference";
import Signup from "./signup/SignUp";
import SignUpP from "./signup/register/premium/SignUpP";
import LoginsP from "./signup/register/premium/LoginsP";
import Pay from "./signup/register/premium/Pay";
import Logins from "./signup/Logins";

import Register from "./signup/register/Register";
import Head from "./homePage/Head";
import Work from "./paint/Work";
import Worker from "./paint/Worker";
import Filesharing from "./filesharing/Filesharing";

export default function App() {
  const dispatch = useDispatch();
  const isDarkTheme = useAppSelector((zoomApp) => zoomApp.auth.isDarkTheme);
  const [isInitialEffect, setIsInitialEffect] = useState(true);
  const toasts = useAppSelector((zoom) => zoom.meetings.toasts);

  const removeToast = (removedToast: { id: string }) => {
    dispatch(
      setToasts(
        toasts.filter((toast: { id: string }) => toast.id !== removedToast.id)
      )
    );
  };
  const [theme, setTheme] = useState<EuiThemeColorMode>("light");
  useEffect(() => {
    const theme = localStorage.getItem("zoom-theme");
    if (theme) {
      setTheme(theme as EuiThemeColorMode);
    } else {
      localStorage.setItem("zoom-theme", "light");
    }
  }, []);

  useEffect(() => {
    if (isInitialEffect) setIsInitialEffect(false);
    else {
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDarkTheme]);

  const overrides = {
    colors: {
      LIGHT: { primary: "#0b5cff" },
      DARK: { primary: "#0b5cff" },
    },
  };

  return (
    <ThemeSelector>
      <EuiProvider colorMode={theme}>
        <EuiThemeProvider modify={overrides}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/create" element={<CreateMeeting />} />
            <Route path="/create1on1" element={<OneOnOneMeeting />} />
            <Route path="/videoconference" element={<VideoConference />} />
            <Route path="/mymeetings" element={<MyMeetings />} />
            <Route path="/join/:id" element={<JoinMeeting />} />
            <Route path="/meetings" element={<Meeting />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Head />} />



          {/* react using on this step */}
            <Route path="/signup" element={<Signup/>} />
            <Route path="/" element={<Head/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/logins" element={<Logins/>} />
            <Route path="/SignUpP" element={<SignUpP/>} />
            <Route path="/LoginsP" element={<LoginsP/>} />
            <Route path="/Pay" element={<Pay/>} />

            {/* paint */}
            <Route path="/work" element={<Work/>} />
            <Route path="/worker" element={<Worker/>} />
            <Route path="/filesharing" element={<Filesharing/>} />


          </Routes>
          <EuiGlobalToastList
            toasts={toasts}
            dismissToast={removeToast}
            toastLifeTimeMs={4000}
          />
        </EuiThemeProvider>
      </EuiProvider>
    </ThemeSelector>
  );
}
