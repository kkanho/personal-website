import React, { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Repo, { repoProps, topicList } from "./repo";
import CardSkeleton from "./ui/card-skeleton";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { Badge } from "./ui/badge";

function Repos() {

    const [gitRepos, setGitRepos] = useState<repoProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<null | string | string[]>(null);
    const [value, setValue] = useState("");

    useEffect(() => {

        const fetchRepos = localStorage.getItem('fetchRepos')

        if (fetchRepos) {
            const data = JSON.parse(fetchRepos)
            setGitRepos(data);
            setLoading(false);
        } else {
            const fetchRepos = async () => {
                try {
                    const response = await axios.get(
                        "https://api.github.com/users/kkanho/repos?&sort=pushed&per_page=100"
                    );
                    setGitRepos(response.data);
                    setLoading(false);
                    localStorage.setItem('fetchRepos', JSON.stringify(response.data))
                } catch (error) {
                    const err = error as AxiosError
                    console.log(err.response?.data)
                    setError("error");
                    setLoading(false);
                }
            };

            fetchRepos();
        }
    }, []);
    // console.log(gitRepos)
    error && console.log(error)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {

        const target = e.target as HTMLElement

        value == target.innerText ? 
            setValue("") 
        : 
            setValue(target.innerText)
    }

    // Filter gitRepos based on input value
    const filteredRepos = gitRepos.filter((gitRepo) => {
        const repoName = gitRepo.name.toLowerCase()
        const repoDescription = gitRepo.description?.toLowerCase()
        const repoLanguage = gitRepo.language?.toLowerCase()
        const repoTopic = gitRepo.topics?.map((topic) => topic.toLowerCase())
    
        return repoName?.includes(value.toLowerCase()) ||
        repoDescription?.includes(value.toLowerCase()) ||
        repoLanguage?.includes(value.toLowerCase()) ||
        repoTopic?.includes(value.toLowerCase()) 
    });

    

    // Render the filtered repos
    const renderedRepos = filteredRepos.map((gitRepo) => (
        <Repo
            key={gitRepo.id}
            id={gitRepo.id}
            name={gitRepo.name}
            html_url={gitRepo.html_url}
            homepage={gitRepo.homepage}
            forks_count={gitRepo.forks_count}
            stargazers_count={gitRepo.stargazers_count}
            topics={gitRepo.topics}
            description={gitRepo.description}
            created_at={gitRepo.created_at}
            updated_at={gitRepo.updated_at}
            language={gitRepo.language}
        />
    ));

    return (
        <div id="allrepo">
            <div className="flex justify-between">
                <div className='text-3xl'>Repos</div>
                <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search here..."
                        className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
                        onChange={handleChange}
                    />
                </div>
            </div>
            <div className="container hidden py-3 md:flex gap-4 flex-wrap">
                {
                    topicList.map((topic,  i) => (
                        <Badge key={i} className={`capitalize text-nowrap ${(value == topic)? "opacity-65" : "opacity-100"}`} onClick={handleClick}>{topic}</Badge>
                    ))
                }
            </div>
            <div className="mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  justify-items-center justify-center gap-4 py-3 mb-5">
                {loading && (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                )}
                {!loading && !error && (
                    <>
                        {renderedRepos}
                    </>
                )}
            </div>
        </div>
    );
}

export default Repos;
