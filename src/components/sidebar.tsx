
import CalendarIcon from "./icons/CalendarIcon"
import InfoIcon from "./icons/InfoIcon"
import RepoIcon from "./icons/RepoIcon"
import TechIcon from "./icons/TechIcon"
import { menus } from "./navbar"


const Sidebar = () => {
    return (
        <>
            <div className="hidden
            md:flex flex-col gap-4 z-[9999] p-2 fixed top-[40%] md:right-8 justify-center items-center">
                {menus.map((item, idx) => (
                    <a href={item.path} className="" key={idx}>
                        <div className="w-10 h-10 p-2 rounded-full bg-primary-foreground opacity-90 shadow-2xl hover:opacity-80 hover:shadow-inner border">
                            {
                                item.title=='About' ?  <InfoIcon /> : 
                                item.title=='Tech' ?  <TechIcon /> : 
                                item.title=='Repos' ?  <RepoIcon />:
                                item.title=='TimeLine' ?  <CalendarIcon />:
                                ""
                            }
                            
                        </div>
                    </a>
                ))}
            </div>
        </>
    )
}
export default Sidebar
