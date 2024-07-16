"use client";

import * as React from "react";
import { TrendingUp } from "lucide-react";
import { Label, Pie, PieChart } from "recharts";

import {
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import axios, { AxiosError } from "axios";
import { repoProps } from "../ui/repo";


const chartConfig = {
    repos: {
        label: "repos",
    },
    javascript: {
        label: "JavaScript",
        color: "hsl(var(--chart-javascript))",
    },
    typescript: {
        label: "TypeScript",
        color: "hsl(var(--chart-typescript))",
    },
    php: {
        label: "PHP",
        color: "hsl(var(--chart-php))",
    },
    html: {
        label: "HTML",
        color: "hsl(var(--chart-html))",
    },
    java: {
        label: "Java",
        color: "hsl(var(--chart-java))",
    },
    other: {
        label: "Other",
        color: "hsl(var(--chart-other))",
    },
} satisfies ChartConfig;



export function DonutChart() {

    const [gitRepos, setGitRepos] = React.useState<repoProps[]>([]);
    const [error, setError] = React.useState<null | string | string[]>(null);

    React.useEffect(() => {

        const fetchRepos = localStorage.getItem('fetchRepos')

        if (fetchRepos) {
            const data = JSON.parse(fetchRepos)
            setGitRepos(data);
        } else {
            const fetchRepos = async () => {
                try {
                    const response = await axios.get(
                        "https://api.github.com/users/kkanho/repos?&sort=pushed&per_page=100"
                    );
                    setGitRepos(response.data);
                    localStorage.setItem('fetchRepos', JSON.stringify(response.data))
                } catch (error) {
                    const err = error as AxiosError
                    console.log(err.response?.data)
                    setError("error");
                }
            };

            fetchRepos();
        }
    }, []);

    // console.log(gitRepos)
    error && console.log(error)

    const numOfRepo = gitRepos.length
    const languages = gitRepos.map(repo => repo.language)

    const langCounts = new Map<string, number>()
    for (const language of languages) {
        langCounts.set(language, (langCounts.get(language) || 0) + 1)
    }
    
    // console.log(langCounts)
    const other = numOfRepo-langCounts.get("JavaScript")-langCounts.get("TypeScript")-langCounts.get("PHP")-langCounts.get("HTML")-langCounts.get("Java")

    const chartData = [
        { language: "javascript", repos: langCounts.get("JavaScript"), fill: "var(--color-javascript)" },
        { language: "typescript", repos: langCounts.get("TypeScript"), fill: "var(--color-typescript)" },
        { language: "php", repos: langCounts.get("PHP"), fill: "var(--color-php)" },
        { language: "html", repos: langCounts.get("HTML"), fill: "var(--color-html)" },
        { language: "java", repos: langCounts.get("Java"), fill: "var(--color-java)" },
        { language: "other", repos: other, fill: "var(--color-other)" },
    ];


    // const totalRepos = React.useMemo(() => {
    //     return chartData.reduce((acc, curr) => acc + curr.repos, 0);
    // }, []);

    return (
        <div className="flex flex-col">
            <CardContent className="flex-1 pb-0">
                <ChartContainer
                    config={chartConfig}
                    className="mx-auto aspect-square max-h-[250px]"
                >
                    <PieChart>
                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent hideLabel />}
                        />
                        <Pie
                            data={chartData}
                            dataKey="repos"
                            nameKey="language"
                            innerRadius={60}
                            strokeWidth={5}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-3xl font-bold"
                                                >
                                                    {/* {totalRepos.toLocaleString()} */}
                                                    {numOfRepo}
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    repos
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </Pie>
                    </PieChart>
                </ChartContainer>
            </CardContent>
            <CardFooter className="flex-col gap-2 text-sm">
                <div className="flex items-center gap-2 font-medium leading-none text-muted-foreground">
                    No. of projects done so far{" "} 
                    <TrendingUp className="h-4 w-4"/>
                </div> 
                <div className="flex items-center gap-2 font-medium leading-none text-muted-foreground underline">
                    <a href="/#allrepo">
                        View all     
                    </a>
                </div>
            </CardFooter>
        </div>
    );
}
