import Navbar from "@/components/ui/navbar";
import Repos from "./components/ui/repos";
import PersonalDetail from "./components/ui/personalDetail";
import Tech from "./components/ui/tech";
import Footer from "./components/ui/footer";
import { Separator } from "./components/ui/separator";
import Timeline from "./components/ui/timeline";
import Sidebar from "./components/ui/sidebar";

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
          </div>
          <Footer /> 
        </div>
      </>
    );
}

export default App;
