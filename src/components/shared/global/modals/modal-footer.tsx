// import { Button } from "@/components/ui/button";
// import {
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { ArrowLeftCircle, Edit, PlusCircle, Trash } from "lucide-react";


// export interface ModalFooterProps {
//   act: string;
//   tool: any;
//   func: string;
//   submitting: any;
// }

// export default function ModalFooter({
//   act,
//   tool,
//   func,
//   submitting,
// }: ModalFooterProps) {
//   const toolFooter = tool.TITLE;

//   const closeModal = () => {
//     document.dispatchEvent(
//       new KeyboardEvent("keydown", {
//         key: "Escape",
//         keyCode: 27,
//         which: 27,
//         bubbles: true,
//       })
//     );
//   };

//   const getButtonText = () => {
//     if (submitting) {
//       switch (act) {
//         case "Add":
//           return "Adding...";
//         case "Edit":
//           return "Editing...";
//         case "Delete":
//           return "Deleting...";
//         default:
//           return act;
//       }
//     }
//     return act + " " + (tool?.SINGULAR || "");
//   };

//   return (
//     <DialogFooter className="p-10 pt-0">
//       {/* <DialogPrimitive.Close>
//       <Button className="mr-4" variant={"ghost"}>
//         <ArrowLeftCircle className="mr-1 h-5 w-5" /> Return
//       </Button>
//     </DialogPrimitive.Close> */}

//       <Button type="submit" disabled={submitting}>
//         {func === "Add" ? <PlusCircle className="mr-1 h-5 w-5" /> : ""}
//         {act === "Edit" ? <Edit className="mr-1 h-5 w-5" /> : ""}
//         {act === "Delete" ? <Trash className="mr-1 h-5 w-5" /> : ""}
//         {submitting ? `${func}ing...` : func + " " + toolFooter}
//       </Button>


//       <Button
//         className="mr-4"
//         variant={"ghost"}
//         type="button"
//         onClick={() => closeModal()}
//       >
//         <ArrowLeftCircle className="mr-1 h-4 w-4" /> Return
//       </Button>
//       <Button
//         type="submit"
//         disabled={submitting}
//         className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
//       >
//         {act === "Add" ? <PlusCircle className="mr-2 h-5 w-5" /> : ""}
//         {act === "Edit" ? <Edit className="mr-2 h-5 w-5" /> : ""}
//         {act === "Delete" ? <Trash className="mr-2 h-5 w-5" /> : ""}
//         {getButtonText()}
//         {/* {submitting ? `${act}ing...` : act + " " + tool?.singular} */}
//       </Button>


//     </DialogFooter>
//   );
// }
