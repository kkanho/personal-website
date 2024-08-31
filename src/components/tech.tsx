import Marquee from 'react-fast-marquee'
import { Card, CardContent, CardDescription } from './ui/card'


import ReactIcon from './icons/ReactIcon'
import NextIcon from './icons/NextIcon'

import JavaIcon from './icons/JavaIcon'
import CppIcon from './icons/CppIcon'
import PHPIcon from './icons/PHPIcon'
import PythonIcon from './icons/PythonIcon'
import HTMLIcon from './icons/HTMLIcon'
import CSSIcon from './icons/CSSIcon'
import JavaScriptIcon from './icons/JavaScriptIcon'
import TypeScriptIcon from './icons/TypeScriptIcon'

import DockerIcon from './icons/DockerIcon'
import NodejsIcon from './icons/NodejsIcon'
import NginxIcon from './icons/NginxIcon'
import FirebaseIcon from './icons/FirebaseIcon'

import BootstrapIcon from './icons/BootstrapIcon'
import TailwindIcon from './icons/TailwindIcon'
import MUIIcon from "./icons/MUIIcon";
import { Button } from './ui/button'
import { LayoutGrid } from 'lucide-react'
import { useState } from 'react'

const Techs = [
    {
        title: "Next",
        icon: <NextIcon />
    },
    {
        title: "React",
        icon: <ReactIcon />
    },
    {
        title: "TypeScript",
        icon: <TypeScriptIcon />
    },
    {
        title: "JavaScript",
        icon: <JavaScriptIcon />
    },
    {
        title: "Python",
        icon: <PythonIcon />
    },
    {
        title: "PHP",
        icon: <PHPIcon />
    },
    {
        title: "Java",
        icon: <JavaIcon />
    },
    {
        title: "C++",
        icon: <CppIcon />
    },
    {
        title: "CSS",
        icon: <CSSIcon />
    },
    {
        title: "HTML",
        icon: <HTMLIcon />
    },
    {
        title: "Bootstrap",
        icon: <BootstrapIcon />
    },
    {
        title: "Material UI",
        icon: <MUIIcon />
    },
    {
        title: "Tailwind",
        icon: <TailwindIcon />
    },
    {
        title: "Nodejs",
        icon: <NodejsIcon />
    },
    {
        title: "Firebase",
        icon: <FirebaseIcon />
    },
    {
        title: "Nginx",
        icon: <NginxIcon />
    },
    {
        title: "Docker",
        icon: <DockerIcon />
    },
]

const Tech = () => {

    const [gridView, setGridView] = useState<boolean>(true)
    
    const handleView = () => {
        setGridView(prev => !prev)
    }


    return (
        <div id="techStack">
            <div className='flex justify-between'>
                <div className='text-3xl'>Tech</div> 
                <Button type='button' size="icon" variant="outline" onClick={handleView}>
                    <LayoutGrid />
                </Button>
            </div>
            {
                !gridView?
                    <div className='max-w-screen-md m-auto py-3 grid grid-cols-3  sm:grid-cols-4 sm:gap-4 '>
                        {
                            Techs.map((tech, i) => (
                                <Card key={i} className='h-40 w-40 flex flex-col justify-center items-center'>
                                    <CardContent className='h-1/2 w-1/2 p-0'>
                                        {tech.icon}
                                    </CardContent>
                                    <CardDescription className='text-xl'>
                                        {tech.title}
                                    </CardDescription>
                                </Card>
                            ))
                        }
                    </div>
                :
                    <Marquee autoFill pauseOnClick speed={100} className="py-3 overflow-hidden z-50">
                        {
                            Techs.map((tech, i) => (
                                <Card key={i} className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                                    <CardContent className='h-1/2 w-1/2 p-0'>
                                        {tech.icon}
                                    </CardContent>
                                    <CardDescription className='text-xl'>
                                        {tech.title}
                                    </CardDescription>
                                </Card>
                            ))
                        }
                    </Marquee>
            }
            
        </div>
        )
}

export default Tech