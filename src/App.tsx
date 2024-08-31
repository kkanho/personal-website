import Navbar from "./components/navbar";
import Repos from "./components/repos";
import PersonalDetail from "./components/personalDetail";
import Tech from "./components/tech";
import Footer from "./components/footer";
import { Separator } from "./components/ui/separator";
import Timeline from "./components/timeline";
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
          </div>
          <Footer /> 
        </div>
      </>
    );
}

export default App;
