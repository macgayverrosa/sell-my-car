import { ReactNode } from "react";

export interface CardWrapperProps {
  children: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  menu?: ReactNode;
  tool?: ReactNode;
}