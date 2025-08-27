import { Metadata } from "next";
import LookForUsers from "./LookForUsers";

export const metadata: Metadata = {
  title: "Look for Users",
  description: "Find and save users from an external API.",
};

export default function Home() {
  return (<LookForUsers />);
}
