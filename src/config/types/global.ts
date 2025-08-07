import { LucideIcon } from "lucide-react";

export interface GlobalConfig {
    APP_NAME: string;
    APP_VERSION: string;
    APP_DESCRIPTION: string;
    APP_AUTHOR: string;
    APP_COPYRIGHT: string;
    APP_LOGO: string;
    APP_LOGO_ALT: string;
}

export interface GlobalModuleProps {
    NAME: string;
    SINGULAR?: string;
    HREF: string;
    ICON?: LucideIcon;
    FORMATTED_NAME?: string;
}