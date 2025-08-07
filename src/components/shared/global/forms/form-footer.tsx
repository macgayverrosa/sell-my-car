import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormFooterProps } from "@/config/types/forms";
import { Edit, PlusCircle, Trash, Undo2 } from "lucide-react";

const FormFooter = ({ act, submitting, tool }: FormFooterProps) => {
  const closeModal = () => {
    document.dispatchEvent(
      new KeyboardEvent("keydown", {
        key: "Escape",
        keyCode: 27,
        which: 27,
        bubbles: true,
      })
    );
  };

  const getButtonText = () => {
    if (submitting) {
      switch (act) {
        case "Add":
          return "Adding...";
        case "Edit":
          return "Editing...";
        case "Delete":
          return "Deleting...";
        default:
          return act;
      }
    }
    return act + " " + (tool?.SINGULAR || "");
  };

  return (
    <div className="pt-7">
      <Separator orientation="horizontal" />
      <div className="flex justify-end gap-2 pt-5">
        <Button
          className="mr-4 col-start-1"
          variant={"ghost"}
          size={"lg"}
          type="button"
          onClick={() => closeModal()}
        >
          <Undo2 className="h-4 w-4" /> Return
        </Button>

        <Button
          type="submit"
          size={"lg"}
          disabled={submitting}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 capitalize"
        >
          {act === "Add" ? <PlusCircle className="h-5 w-5" /> : ""}
          {act === "Edit" ? <Edit className="h-5 w-5" /> : ""}
          {act === "Delete" ? <Trash className="h-5 w-5" /> : ""}
          {getButtonText()}
          {/* {submitting ? `${act}ing...` : act + " " + tool?.singular} */}
        </Button>
      </div>
    </div>
  );
};

export default FormFooter;
