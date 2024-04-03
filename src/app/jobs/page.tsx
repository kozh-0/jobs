import Jobs from "@/Components/Jobs";
import { Suspense } from "react";

export default function page() {
  return (
    <div>
      <Suspense fallback={<div>SuspenseLoading...</div>}>
        <Jobs />
      </Suspense>
    </div>
  );
}
