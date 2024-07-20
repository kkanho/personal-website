import Marquee from 'react-fast-marquee'
import { Card, CardContent, CardDescription } from './card'


import ReactIcon from '../icons/ReactIcon'
import NextIcon from '../icons/NextIcon'

import JavaIcon from '../icons/JavaIcon'
import CppIcon from '../icons/CppIcon'
import PHPIcon from '../icons/PHPIcon'
import PythonIcon from '../icons/PythonIcon'
import HTMLIcon from '../icons/HTMLIcon'
import CSSIcon from '../icons/CSSIcon'
import JavaScriptIcon from '../icons/JavaScriptIcon'
import TypeScriptIcon from '../icons/TypeScriptIcon'

import DockerIcon from '../icons/DockerIcon'
import NodejsIcon from '../icons/NodejsIcon'
import NginxIcon from '../icons/NginxIcon'
import FirebaseIcon from '../icons/FirebaseIcon'

import BootstrapIcon from '../icons/BootstrapIcon'
import TailwindIcon from '../icons/TailwindIcon'
import MUIIcon from "../icons/MUIIcon";


const Tech = () => {
    return (
        <div id="techStack">
            <div className='text-3xl'>Tech</div>
            <Marquee autoFill pauseOnClick speed={100} className="py-3 overflow-hidden z-50">
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <NextIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Next
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <ReactIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        React
                    </CardDescription>
                </Card>
                

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <TypeScriptIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        TypeScript
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <JavaScriptIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        JavaScript
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <PythonIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Python
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <PHPIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        PHP
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <JavaIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Java
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <CppIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        C++
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <CSSIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        CSS
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <HTMLIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        HTML
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <BootstrapIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Bootstrap
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <MUIIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Material UI
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <TailwindIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Tailwind
                    </CardDescription>
                </Card>



                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <NodejsIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Nodejs
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <FirebaseIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Firebase
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <NginxIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Nginx
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <DockerIcon />
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Docker
                    </CardDescription>
                </Card>
            </Marquee>
        </div>
        )
}

export default Tech