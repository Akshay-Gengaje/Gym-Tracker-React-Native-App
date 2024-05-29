import { AntDesign, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import Home from "../screens/Home";
import Schedule from "../screens/Schedule";
import Note from "../screens/Note";
import User from "../screens/User";

export const tabScreens = [
  {
    name: "Home",
    component: Home,
    icon: ({ color, size }) => (
      <AntDesign name="home" color={color} size={size} />
    ),
  },
  {
    name: "Schedule",
    component: Schedule,
    icon: ({ color, size }) => (
      <MaterialIcons name="schedule" color={color} size={size} />
    ),
  },
  {
    name: "Note",
    component: Note,
    icon: ({ color, size }) => (
      <FontAwesome name="sticky-note" color={color} size={size} />
    ),
  },
  {
    name: "User",
    component: User,
    icon: ({ color, size }) => (
      <AntDesign name="user" color={color} size={size} />
    ),
  },
];
