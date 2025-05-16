import { lazy, Suspense } from "react";
// import ApiLoading from "./ApiLoading";
import {LoaderModal} from "../loader/Loader"

const ApiLoading = lazy(()=>import("./ApiLoading"))

export default function SuspenseUse() {
  return (
    <div>
      <Suspense fallback={<LoaderModal isLoad={true} />}>
        <ApiLoading />
      </Suspense>
    </div>
  );
}
