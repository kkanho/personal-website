import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Link, Switch, Route } from "react-router-dom";
import { ModeToggle } from "../mode-toggle";

// const getScroll = () => {
// 	return {
//         top: window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop  || 0,
//         left: window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft || 0
//     }
// }

export default function Navbar() {
    const [state, setState] = useState(false);
    // const [hide, setHide] = useState(false)

    // useEffect(() => {
    //     if (getScroll().top > 20) {
    //         setHide(true)
    //     }
    //     console.log(getScroll().top)
    // }, [])


    const menus = [
        { title: "About", path: "/#aboutme" },
        { title: "Tech", path: "/#techStack" },
        { title: "Repos", path: "/#allrepo" },
        // { title: "Blog", path: "/" },
        // { title: "Contact", path: "/" },
    ];

    return (
        <nav className="w-full mb-4">
            <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:px-8">
                <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link to="/">
                        <h1 className="text-3xl font-bold themeGradientText hover:scale-110 duration-200">
                            Kan Ho
                        </h1>
                    </Link>
                    <div className="md:hidden">
                        <button
                            className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            <Menu />
                        </button>
                    </div>
                </div>

                <div
                    className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  ${
                        state ? "block" : "hidden"
                    }`}
                >
                    <div className="flex flex-col md:flex-row">
                        <ul className="flex-1 justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                            {/* <Switch>
                                {menus.map((item, idx) => (
                                    <li
                                        key={idx}
                                        className="text-gray-600 transition-all hover:themeGradientText hover:scale-110 duration-200"
                                    >
                                        <Route path={item.path}>
                                            {item.title}
                                        </Route>
                                    </li>
                                ))}
                            </Switch> */}
                            {menus.map((item, idx) => (
                                <li
                                    key={idx}
                                    className="text-gray-600 transition-all hover:themeGradientText hover:scale-110 duration-200"
                                >
                                    <a href={item.path}>
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="pt-4 md:pt-0">
                            <ModeToggle />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
