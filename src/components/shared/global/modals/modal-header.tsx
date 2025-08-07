import {
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export interface ModalHeaderProps {
  tool: any;
  func: string;
}

export default function ModalHeader({ tool, func }: ModalHeaderProps) {
  return (
    <DialogHeader className="ml-4 gap-1">
      <DialogTitle className="capitalize">{func} {tool?.SINGULAR}</DialogTitle>
      <DialogDescription>Trades Wise</DialogDescription>
    </DialogHeader>
  );
}
