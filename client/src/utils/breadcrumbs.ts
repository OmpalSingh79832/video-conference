import { Link, NavigateFunction } from "react-router-dom";
import { BreadCrumbsType } from "./types";

export const getDashboardBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
  },
];

export const getCreateMeetingBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "/dashboard",
  
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "Create Meeting",
  },
];

export const getOneOnOneMeetingBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "/dashboard",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "Create Meeting",
    href: "/dashboard",
    onClick: () => {
      navigate("/create");
    },
  },
  {
    text: "Create 1 on 1 Meeting",
  },
];

export const getVideoConferenceBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "/dashboard",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "Create Meeting",
    href: "/dashboard",
    onClick: () => {
      navigate("/create");
    },
  },
  {
    text: "Create Video Conference",
  },
];

export const getMyMeetingsBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "/dashboard",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "My Meetings",
  },
];

export const getMeetingsBreadCrumbs = (
  navigate: NavigateFunction
): Array<BreadCrumbsType> => [
  {
    text: "Dashboard",
    href: "/dashboard",
    onClick: () => {
      navigate("/dashboard");
    },
  },
  {
    text: "Meetings",
  },
];
