import { Chrome, Github, Star } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Link } from "react-router-dom";
import { processDate } from "@/processDate";

import ReactIcon from './icons/ReactIcon'
import NextIcon from './icons/NextIcon'

import JavaScriptIcon from './icons/JavaScriptIcon'
import TypeScriptIcon from './icons/TypeScriptIcon'
import JavaIcon from './icons/JavaIcon'
import CppIcon from "./icons/CppIcon";
import PHPIcon from './icons/PHPIcon'
import PythonIcon from './icons/PythonIcon'

import DockerIcon from './icons/DockerIcon'
import NginxIcon from './icons/NginxIcon'
import NodejsIcon from './icons/NodejsIcon'
import FirebaseIcon from './icons/FirebaseIcon'

import BootstrapIcon from './icons/BootstrapIcon'
import TailwindIcon from './icons/TailwindIcon'
import MUIIcon from "./icons/MUIIcon";

import GameIcon from "./icons/GameIcon";



export type repoProps = {
    id: number;
    name: string;
    html_url: string;
    homepage: string;
    forks_count: number;
    stargazers_count: number;
    topics: string[];
    description: string;
    language: string;
    created_at: string;
    updated_at: string;
};

export const topicList = [
    "next", "react",
    "javascript", "typescript", "python", "php", "java", "cpp",
    "bootstrap", "tailwind", "material-ui",
    "docker", "firebase", "nginx", "nodejs", 
    "mini-game"
]


const Repo = ({ id, name, html_url, homepage, forks_count, stargazers_count, topics, description, language, updated_at}: repoProps) => {

    return (
        <Card key={id} className="w-full max-w-lg shadow-md rounded-xl flex flex-col transition-all duration-300 hover:scale-110 hover:rotate-1 overflow-hidden">
            <CardHeader className="flex-grow">
                <CardTitle>
                    <a
                        href={html_url}
                        target="_blank"
                        className="text-3xl md:text-2xl"
                    >
                        {name}
                    </a>
                </CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
                <CardDescription className="flex flex-wrap gap-2">
                    {topics?.map((topic, i) => (
                        <div key={i}>
                            {
                                // topicList.includes(topic) ? "" : 
                                <Badge className="capitalize drop-shadow-lg">{topic}</Badge>
                            }
                        </div>
                    ))}
                </CardDescription>
                <CardDescription className="flex flex-wrap pt-4">
                    {topics?.map((topic, i) => (
                        <div key={i}>
                        {
                            (topic == "next")? <div className="w-10 h-10 mr-4"><NextIcon /></div> :
                            (topic == "react")? <div className="w-10 h-10 mr-4"><ReactIcon /></div> :

                            (topic == "javascript")? <div className="w-10 h-10 mr-4"><JavaScriptIcon /></div> :
                            (topic == "typescript")? <div className="w-10 h-10 mr-4"><TypeScriptIcon /></div> :
                            (topic == "python")? <div className="w-10 h-10 mr-4"><PythonIcon /></div> :
                            (topic == "java")? <div className="w-10 h-10 mr-4"><JavaIcon /></div> :
                            (topic == "cpp")? <div className="w-10 h-10 mr-4"><CppIcon /></div> :
                            (topic == "php")? <div className="w-10 h-10 mr-4"><PHPIcon /></div> :
                            
                            (topic == "bootstrap")? <div className="w-10 h-10 mr-4"><BootstrapIcon /></div> :
                            (topic == "material-ui")? <div className="w-10 h-10 mr-4"><MUIIcon /></div> :
                            (topic == "tailwind")? <div className="w-10 h-10 mr-4"><TailwindIcon /></div> :

                            (topic == "docker")? <div className="w-10 h-10 mr-4"><DockerIcon /></div> : 
                            (topic == "firebase")? <div className="w-10 h-10 mr-4"><FirebaseIcon /></div> :
                            (topic == "nginx")? <div className="w-10 h-10 mr-4"><NginxIcon /></div> :
                            (topic == "nodejs")? <div className="w-10 h-10 mr-4"><NodejsIcon /></div> :
                            
                            (topic == "mini-game")? <div className="w-10 h-10 mr-4"><GameIcon /></div> :
                            <div className="w-0"></div>
                        }
                        </div>
                    ))}
                </CardDescription>
            </CardHeader>
                
            <CardContent className="w-full flex flex-col m-auto">
                <div className="pt-4">
                    {
                        (homepage && homepage !== '')?
                            <div className="flex flex-wrap gap-2">
                                <Link to={html_url} className="flex-1 min-w-fit">
                                    <Button className="w-full border-primary bg-inherit hover:border-indigo-600 hover:text-indigo-600" variant={"outline"}>
                                        Code <Github size={"16px"}/>
                                    </Button>
                                </Link>
                                <Link to={homepage} className="flex-1 min-w-fit">
                                    <Button className="w-full hover:text-indigo-600">
                                        Live <Chrome size={"16px"}/>
                                    </Button>
                                </Link>
                            </div> 
                        :
                        <div>
                            <Link to={html_url}>
                                <Button className="w-full border-primary bg-inherit hover:border-indigo-600 hover:text-indigo-600" variant={"outline"}>
                                    View Project <Github size={"16px"}/>
                                </Button>
                            </Link>
                        </div> 
                    }
                    <div className="text-sm text-muted-foreground pt-2 flex justify-end gap-x-3 flex-wrap">
                        {
                            (language && language !== '')?
                                <div className="flex gap-1">
                                    <span className="h-3 w-3 translate-y-1 rounded-full border-2 border-sky-500" />
                                    <div>{language}</div>
                                </div>
                            : ""
                        }
                        {
                            (forks_count > 0)? 
                                <div className="flex gap-1">
                                    <div>{forks_count}</div>
                                </div>
                            :
                                ""
                        }
                        {
                            (stargazers_count > 0)? 
                                <div className="flex gap-0.5">
                                    <Star fill="yellow" className="text-transparent inline-block align-middle -translate-y-0.5"/> 
                                    <div className="inline-block align-middle justify-center">
                                        {stargazers_count}
                                    </div>
                                </div>
                            :
                                ""
                        }
                        <div >
                            Updated {processDate(updated_at).date_month_year}
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

export default Repo