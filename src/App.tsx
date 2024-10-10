import Navbar from "./components/parts/navbar";
import Repos from "./components/parts/repos";
import PersonalDetail from "./components/parts/personalDetail";
import Tech from "./components/parts/tech";
import Footer from "./components/parts/footer";
import Timeline from "./components/parts/timeline";
import ContactMe from "./components/parts/contact";

import { Separator } from "./components/ui/separator";
import Sidebar from "./components/sidebar";

function App() {
    return (
      <>
        <div className="spotlight min-h-min w-full">
          <Navbar />
          <Sidebar />
          <div className="container flex flex-col gap-12 justify-between px-2 sm:px-4 md:px-8 lg:px-24">
              <PersonalDetail />
              <Separator />
              <Tech />
              <Separator />
              <Repos />
              <Separator />
              <Timeline />
              <Separator />
              {/* <ContactMe />
              <Separator /> */}
          </div>
          <Footer /> 
        </div>
      </>
    );
}

export default App;
