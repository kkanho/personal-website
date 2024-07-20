import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader } from "./card";
import { processDate } from "@/processDate";
import { Button } from "./button";
import { DonutChart } from "../chart/donut-chart";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";

type personalDetailProps = {
    avatar_url: string,
    bio: string,
    blog: string,
    email: string,
    followers: number,
    following_url: string,
    html_url: string,
    location: string,
    login: string,
    name: string,
    public_repos: number,
    repos_url: string,
    url: string,
    created_at: string,
}

const today = new Date();

function PersonalDetail() {

    const [personalDetail, setPersonalDetail] = useState<null | personalDetailProps>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string | string[]>(null);

    useEffect(() => {

        const fetchPersonalDetail = localStorage.getItem('fetchPersonalDetail')

        if (fetchPersonalDetail) {
            const data = JSON.parse(fetchPersonalDetail)
            setPersonalDetail(data)
            setLoading(false);
        } else {
            const fetchPersonalDetail = async () => {
                try {
                    const response = await axios.get(
                        "https://api.github.com/users/kkanho"
                    );
                    setPersonalDetail(response.data);
                    setLoading(false);
                    localStorage.setItem('fetchPersonalDetail', JSON.stringify(response.data))
                } catch (error) {
                    const err = error as AxiosError
                    console.log(err.response?.data)
                    setError("error");
                    setLoading(false);
                }
            };
            
            fetchPersonalDetail();
        }
    }, []);

    // console.log(personalDetail)
    error && console.log(error)

    return (
        <div id="aboutme" className="mx-auto flex flex-col gap-4
            md:grid md:grid-flow-col md:grid-rows-2 md:grid-cols-2 md:mt-14
            lg:grid-cols-3">
            {loading && (
                <>
                    
                </>
            )}
            {!loading && !error && (
                <>
                    <Card className="row-start-1 col-start-1 md:row-span-2 flex flex-col flex-auto gap-2 justify-center animate-fadeinup">
                        <CardContent className="text-center text-lg flex flex-col gap-4">
                            <TooltipProvider><Tooltip>
                            <TooltipTrigger className="rounded border-4 border-indigo-600 overflow-hidden m-4 shadow-lg transition-all hover:scale-105 self-center flex justify-center aspect-square md:w-10/12 themeGradientBg animate-fadeinup delay-200">
                                {personalDetail!.avatar_url? (
                                    <div >
                                        <a href={personalDetail!.html_url} className="w-full h-full">
                                            <img src={personalDetail!.avatar_url} alt={personalDetail!.name} className="animate-in fade-in-5 ease-in transition-all duration-1000 w-full h-full" loading="lazy"/>
                                        </a>
                                    </div>
                                    ): ("")
                                }
                            </TooltipTrigger>
                            <TooltipContent>
                                <div className="container text-2xl themeGradientText">
                                    {personalDetail!.name}
                                </div> 
                            </TooltipContent>
                            </Tooltip></TooltipProvider>
                            
                            <div className="container text-xl px-0 text-justify pb-4 border-b-2">
                                {personalDetail!.bio}
                            </div> 
                            <div className="container text-xl pb-4 border-b-2">
                                Based in {personalDetail!.location}
                            </div>
                            {/* <a href={`mailto:${personalDetail!.email}`}> */}
                            <div>
                                <a href={personalDetail!.html_url}>
                                    <Button className="border-primary bg-inherit hover:border-indigo-600 hover:text-indigo-600" variant={"outline"}>
                                        Contact Now
                                    </Button>
                                </a>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="hidden h-80 lg:flex flex-col text-center justify-center align-middle items-center animate-fadeinleft">
                        <CardContent>
                            <div className="text-9xl font-black">
                                {personalDetail!.followers}
                            </div>
                            <div className="text-base text-muted-foreground">
                                Followers
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hidden h-80 lg:flex flex-col text-center justify-center align-middle items-center animate-fadeinup">
                        <CardContent>
                            <DonutChart />
                            {/* <div className="text-9xl">
                                {personalDetail!.public_repos}
                            </div>
                            <div className="text-base text-muted-foreground">
                                Repos
                            </div> */}
                        </CardContent>
                    </Card>
                    <Card className="hidden h-80 md:flex flex-col text-center justify-center align-middle items-center animate-fadeindown overflow-hidden">
                        <CardContent>
                            <div className="text-5xl lg:text-6xl text-wrap themeGradientText font-extrabold">
                                Frontend Developer
                            </div>
                        </CardContent>
                    </Card>
                    <Card className="hidden h-80 md:flex flex-col text-center justify-center align-middle items-center animate-fadeinright">
                        <CardContent>
                            <div className="">
                                <span className="text-9xl font-black">
                                {
                                    Number(today.getFullYear()) - Number(processDate(personalDetail!.created_at).date_year)
                                }
                                </span>Years
                            </div>
                            <div className="text-base text-muted-foreground">
                                Coding Experience
                            </div>
                        </CardContent>
                    </Card>
                </>
            )}
        </div>
    )
}

export default PersonalDetail