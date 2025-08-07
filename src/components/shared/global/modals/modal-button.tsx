import { DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { PlusCircle, Trash, Pencil, Eye } from "lucide-react";

export interface ModalHeaderProps {
  tool: any;
  act: string;
}

export default function ModalButton({ tool, act }: ModalHeaderProps) {
  let btModal;
  if (act === "Add") {
    btModal = (
      <Button className="h-10 ml-2 text-white capitalize">
        <PlusCircle className="h-5 w-5 " />
        <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
          {act} {tool.SINGULAR}
        </span>
      </Button>
    );
  }
  if (act === "View") {
    btModal = (
      <div className="relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent">
        <Eye className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> {act}
      </div>
    );
  }

  if (act === "Delete") {
    btModal = (
      <div className="relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent">
        <Trash className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> {act}
      </div>
    );
  }
  if (act === "Edit") {
    btModal = (
      <div className="relative flex cursor-pointer items-center rounded-sm px-2 py-1.5 text-sm transition-colors focus:bg-accent focus:text-accent-foreground hover:bg-accent">
        <Pencil className="mr-2 h-3.5 w-3.5 text-muted-foreground/70" /> {act}
      </div>
    );
  }

  return <DialogTrigger asChild>{btModal}</DialogTrigger>;
}
