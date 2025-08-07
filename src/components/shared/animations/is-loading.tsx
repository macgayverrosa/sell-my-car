// import { Icons } from "../global/icons";
import { LoadingBars } from "./is-loading-bars";

export default function IsLoading() {
  return (
    <div className="container py-8">

      <div className="flex flex-col gap-8">
        <div className="flex flex-col items-center">
          <LoadingBars size="md" color="primary" count={7} />
          <span className="mt-2 text-xl font-light">Getting your tools up...</span>
          {/* <Icons.logo className="w-20 l-20" /> */}
        </div>
      </div>
    </div>
  );
}
