import { useState } from "react";
import { useHashNavigation } from "./hooks/useHashNavigation";
import Contact from "./pages/Contact";
import Single from "./pages/Single";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";

function App() {
  const { page, param } = useHashNavigation();
  const pageContent = getPageContent(page,param);
  return (
    <>
      <Header page={page} />
      <div className="container mx-auto my-4 px-10">
        {pageContent}
      </div>
    </>
  );
}

function getPageContent(page,param) {
  if(page === "home") {
    return <Home/>;
  } else if(page === "post") {
    return <Single postId={param} />;
  } else if(page === "contact") {
    return <Contact />;
  } else {
    return <NotFound page={page} />
  }
}

export default App;
