

const nodes = [
    {
        date: "Sep 2021",
        institution:"Hong Kong Community College (HKCC)",
        title: "Associate in Information Technology",
        details: "Start programming!!!"
    },
    {
        date: "Sep 2023 - (Now)",
        institution:"Hong Kong Polytechnic University (PolyU)",
        title: "BSc in Computing",
        details: ""
    },
    // {
    //     date: "Now",
    //     institution:"",
    //     title: "",
    //     details: ""
    // }
]

const Timeline = () => {
    return (
        <div id="timeline">
            <div className='text-3xl'>My Timeline</div>
            <div className="relative wrap overflow-hidden py-3">
                <div className="absolute border-opacity-20 h-full border border-primary left-2 lg:left-1/2"></div>
                <div className="flex gap-4 lg:gap-0 lg:justify-center items-center w-full">
                    <div className="lg:order-1 w-4 h-4 rounded-full z-10 flex items-center bg-primary shadow-xl"></div>
                </div>
                {
                    nodes.map((node, i) => (
                        <div key={i+1} className={`flex gap-4 lg:gap-0 justify-between items-center w-full ${(i%2==0)? "lg:flex-row-reverse lg:text-end" : ""}`}>
                            <div className="order-1 sm:w-2/12 md:4/12 lg:w-5/12"></div>
                            <div className="lg:order-1 w-4 h-4 rounded-full z-10 flex items-center bg-primary shadow-xl">
                                {
                                    (nodes.length == i+1) &&
                                        <div className="rounded-full h-4 w-4 bg-indigo-500 animate-ping"></div>
                                }
                                {/* <div className="mx-auto font-semibold text-lg text-accent text-slate-900">{i+1}</div> */}
                            </div>
                            <div className="lg:order-1 w-full sm:w-10/12 md:w-8/12 lg:w-5/12 py-4">
                                <div className="text-sm text-muted-foreground">
                                    {node.date}
                                </div>
                                <div className="text-lg font-extrabold">
                                    {node.institution}
                                </div>
                                <div className="italic font-bold">
                                    {node.title}
                                </div>
                                <div className=" text-muted-foreground line-clamp-3">
                                    {node.details}
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default Timeline