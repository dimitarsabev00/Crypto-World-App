import { CircularProgress } from "@mui/material";
import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Banner from "../components/Banner/Banner";
import ErrorFallback from "../components/ErrorBoundary";
const CoinsTable = lazy(() => import("../components/CoinsTable"));
const HomePage = () => {
  return (
    <>
      <Banner />
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => {}}>
        <Suspense
          fallback={
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress
                style={{ color: "gold" }}
                size={250}
                thickness={1}
              />
            </div>
          }
        >
          <CoinsTable />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};

export default HomePage;
