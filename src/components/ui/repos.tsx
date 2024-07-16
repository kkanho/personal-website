import { useState, useEffect } from "react";
import axios, { AxiosError } from "axios";
import Repo, { repoProps } from "./repo";
import CardSkeleton from "./card-skeleton";
import { Search } from "lucide-react";
import { Input } from "./input";

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
        <div>
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
            <div id="allrepo" className="mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-4 py-3 mb-5">
                {loading && (
                    <>
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                        <CardSkeleton />
                    </>
                )}
                {!loading && !error && (
                        <>
                        {/* {gitRepos.map((gitRepo: repoProps) => (
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
                        ))} */}
                        {renderedRepos}
                    </>
                )}
            </div>
        </div>
    );
}

export default Repos;