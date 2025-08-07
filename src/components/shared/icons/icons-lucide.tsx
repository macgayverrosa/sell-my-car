import React from "react";
import dynamic from "next/dynamic";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

export interface IconsLucideProps extends LucideProps {
  name: keyof typeof dynamicIconImports;
}

const IconsLucide = ({ name, ...props }: IconsLucideProps) => {
  if (!dynamicIconImports[name]) {
    console.error(`Icon "${name}" not found in dynamicIconImports.`);
    return null;
  }
  const Icon = dynamic(dynamicIconImports[name]);
  return <Icon {...props} />;
};

export default IconsLucide;
