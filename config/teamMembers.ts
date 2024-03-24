import type { TeamMembers } from "../types/TeamMembers";
import { v4 as uuid } from "uuid";
import thepmsquare from "../public/avatars/thepmsquare.png";

const introText: string =
  "We are a group of programmers building an end-to-end encrypted chat app from the ground up. Leveraging our design and coding skills, we're creating a safe and user-friendly platform. Our unique twist? Custom-built components with modular application design. All while continuing to learn and iterate throughout the development process.";

const teamMembers: TeamMembers = [
  {
    id: uuid(),
    imageSrc: thepmsquare.src,
    name: "Parth Mangtani",
    userName: "thepmsquare",
    link: "https://thepmsquare.github.io/",
    about: "Full stack application developer.",
  },
];
export { introText, teamMembers };
