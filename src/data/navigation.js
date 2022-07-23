import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faTicket } from "@fortawesome/free-solid-svg-icons";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { faUsers } from "@fortawesome/free-solid-svg-icons";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faMedal } from "@fortawesome/free-solid-svg-icons";

export const navigationItems = [
  { title: "Overview", link: "/overview", icon: faChartPie },
  { title: "Users", link: "/users", icon: faTicket },
  { title: "Ideas", link: "/ideas", icon: faLightbulb },
  { title: "Contacts", link: "/contacts", icon: faUsers },
  { title: "Agents", link: "/agents", icon: faUserTie },
  { title: "Articles", link: "/articles", icon: faBook },
];

export const settingsItems = [
  { title: "Settings", link: "/settings", icon: faGear },
  { title: "Subscription", link: "/subscription", icon: faMedal },
];
