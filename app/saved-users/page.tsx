import { Metadata } from "next";
import SavedUsers from "./SavedUsers";

export const metadata: Metadata = {
  title: "Saved Users",
  description: "A list of users saved to the database.",
};

export default function Home() {
  return (<SavedUsers />);
}
