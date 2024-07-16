import Navbar from "@/components/ui/navbar";
import Repos from "./components/ui/repos";
import PersonalDetail from "./components/ui/personalDetail";
import Tech from "./components/ui/tech";
import Footer from "./components/ui/footer";
import { Separator } from "./components/ui/separator";


function App() {
    return (
      <div className="spotlight min-h-min w-full">
        <Navbar />
        <div className="container flex flex-col gap-12 lg:px-24 justify-between">
            <PersonalDetail />
            <Separator />
            <Tech />
            <Separator />
            <Repos />
        </div>
        <Footer /> 
      </div>
    );
}

export default App;
