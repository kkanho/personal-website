import { Chrome, Github, Star } from "lucide-react";
import { Badge } from "./badge";
import { Button } from "./button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./card";
import { Link } from "react-router-dom";
import { processDate } from "@/processDate";


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


const Repo = ({ id, name, html_url, homepage, forks_count, stargazers_count, topics, description, language, created_at, updated_at}: repoProps) => {

    return (
        <Card key={id} className="w-full shadow-md rounded-xl flex flex-col transition-all duration-300 hover:scale-110 hover:rotate-1 overflow-hidden">
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
                        <Badge className="min-w-fit" key={i}>
                            {topic}
                        </Badge>
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