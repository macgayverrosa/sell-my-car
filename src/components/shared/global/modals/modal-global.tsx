"use client";

import ModalHeader from "./modal-header";
import ModalButton from "./modal-button";
// import ModalFooter from "./modal-footer";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import IsLoading from "@/components/shared/animations/is-loading";

export interface ModalProps {
  tool: any;
  content: any;
  act: string;
  size?: string;
}

export default function ModalGlobal(props: ModalProps) {
  function checkContent() {
    if (props.content === false) {
      return <IsLoading />;
    } else {
      return props.content;
    }
  }

  const size = props.size || "w-full";
  return (
    <Dialog>
      <ModalButton tool={props.tool} act={props.act} />
      <DialogContent
        className={
          size + ` max-w-[700px] md:max-w-2/3 max-h-11/12 overflow-auto `
        }
      >
        <ModalHeader tool={props.tool} func={props.act} />
        <div className="space-y-4 p-5 pb-10 md:grid">
          <div className="flex flex-col lg:flex-row lg:space-x-12 lg:space-y-0">
            <div className="flex-1">{checkContent()}</div>
          </div>
        </div>
        {/* <ModalFooter act={props.act} tool={props.tool} func={props.act} submitting={props.submitting} /> */}
      </DialogContent>
    </Dialog>
  );
}
