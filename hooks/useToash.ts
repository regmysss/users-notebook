import { ToashContext } from "@/contexts/ToashContext";
import { useContext } from "react";

export const useToash = () => useContext(ToashContext);