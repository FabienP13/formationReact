import { lazy, Suspense, useState } from "react";
import { useHashNavigation } from "./hooks/useHashNavigation";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import { ErrorBoundary } from "react-error-boundary";
import { Alert } from "./components/Alert";

function App() {
  const { page, param } = useHashNavigation();
  const pageContent = getPageContent(page,param);
  return (
    <>
      <Header page={page} />
      <div className="container mx-auto my-4 px-10">
        <ErrorBoundary FallbackComponent={PageError}>
          {pageContent}
        </ErrorBoundary>
        
      </div>
    </>
  );
}

function PageError({error}) {
  return <Alert type="danger">{error.toString()}</Alert>;
}

function getPageContent(page,param) {
  if(page === "home") {
    return <Home/>;
  } else if(page === "post") {
    const SingleLazy  = lazy(()=> import("./pages/Single"));
    return <Suspense fallback={<div>Chargement des composants en cours</div>}>
      <SingleLazy postId={param} />
      </Suspense>;
  } else if(page === "contact") {
    return <Contact />;
  } else {
    return <NotFound page={page} />
  }
}

export default App;
