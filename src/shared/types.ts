import { ReactNode } from "react";

export interface PageProps {
  injectedStyles?: string;
  children: ReactNode | ReactNode[];
}
