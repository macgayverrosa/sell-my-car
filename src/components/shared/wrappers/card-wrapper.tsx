import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CardWrapperProps } from "@/config/types/wrappers";

export const CardWrapper = ({
  header,
  footer,
  menu,
  tool,
  children,
}: CardWrapperProps) => {
  return (
    <Card>
      {header && (
        <CardHeader className="flex flex-row items-start">
          <div className="grid gap-0.5">
            <CardTitle className="group flex items-center gap-2 text-2xl">
              {header}
            </CardTitle>
          </div>
          {tool && <div className="ml-auto flex items-center">{tool}</div>}
          {menu && <div className="ml-2 flex items-center">{menu}</div>}
        </CardHeader>
      )}

      <CardContent className="p-6 text-sm">{children}</CardContent>

      {footer && (
        <CardFooter className="flex flex-row items-center border-t bg-muted/50 px-6 py-3">
          <div className="text-xs text-muted-foreground">
            Updated <time dateTime="2023-11-23">November 23, 2023</time>
          </div>
          <div className="ml-auto">{footer}</div>
        </CardFooter>
      )}
    </Card>
  );
};
