import Marquee from 'react-fast-marquee'
import { Card, CardContent, CardDescription } from './card'

const Tech = () => {
    return (
        <div id="techStack">
            <div className='text-3xl'>Tech</div>
            <Marquee autoFill pauseOnClick speed={60} className="py-3 overflow-hidden z-50">
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C9.35329 14.5 10.6088 14.0871 11.6492 13.3799L6 6.57712V11.25C6 11.6642 5.66421 12 5.25 12C4.83579 12 4.5 11.6642 4.5 11.25V4.5C4.5 4.184 4.69807 3.9019 4.99529 3.79458C5.29251 3.68726 5.62511 3.77775 5.82699 4.02085L13.3008 13.0209C13.5622 13.3357 13.523 13.802 13.2127 14.0687C11.813 15.272 9.99057 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 8.76428 15.8926 9.50473 15.6916 10.2065C15.5936 10.5489 15.4733 10.8818 15.3325 11.2037C15.1665 11.5832 14.7243 11.7562 14.3448 11.5902C13.9653 11.4242 13.7922 10.982 13.9583 10.6025C14.0725 10.3413 14.1701 10.0712 14.2496 9.79351C14.4125 9.2247 14.5 8.6232 14.5 8C14.5 4.41015 11.5899 1.5 8 1.5ZM10.5 3.75C10.9142 3.75 11.25 4.08579 11.25 4.5V7.5C11.25 7.91421 10.9142 8.25 10.5 8.25C10.0858 8.25 9.75 7.91421 9.75 7.5V4.5C9.75 4.08579 10.0858 3.75 10.5 3.75Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Next
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M4.84989 2.37195C4.59895 2.51683 4.33488 2.91636 4.30424 3.78785C4.28968 4.20181 3.9423 4.52559 3.52835 4.51103C3.11439 4.49647 2.79061 4.1491 2.80516 3.73514C2.84273 2.66673 3.1806 1.60366 4.09989 1.07291C5.02179 0.540653 6.11484 0.782356 7.06128 1.28727C7.42674 1.48224 7.56495 1.93656 7.36998 2.30201C7.17501 2.66747 6.72069 2.80568 6.35524 2.61072C5.5818 2.1981 5.10158 2.22663 4.84989 2.37195ZM8.87139 3.67284C9.19036 3.40858 9.66315 3.45293 9.92741 3.7719C10.4818 4.44103 11.0136 5.20405 11.4963 6.04018C12.5366 7.84191 13.178 9.68785 13.3509 11.2362C13.4372 12.0091 13.4108 12.7446 13.2303 13.3754C13.0484 14.011 12.6941 14.5863 12.0999 14.9293C11.381 15.3444 10.5509 15.2855 9.79114 15.0089C9.02868 14.7313 8.24395 14.2056 7.49586 13.5228C7.18993 13.2435 7.16831 12.7691 7.44756 12.4632C7.72681 12.1573 8.20119 12.1356 8.50712 12.4149C9.16624 13.0165 9.78567 13.4105 10.3043 13.5994C10.8257 13.7892 11.1537 13.7436 11.3499 13.6303C11.5143 13.5354 11.6797 13.342 11.7882 12.9627C11.8981 12.5787 11.9328 12.0529 11.8602 11.4026C11.7152 10.1045 11.1591 8.45607 10.1973 6.79018C9.75492 6.02396 9.27081 5.33055 8.77232 4.72886C8.50807 4.40989 8.55242 3.93709 8.87139 3.67284Z"></path> <path fillRule="nonzero" clipRule="nonzero" d="M14.5 8.20557C14.5 7.91581 14.286 7.48735 13.5466 7.02507C13.1954 6.80549 13.0887 6.34276 13.3083 5.99154C13.5279 5.64032 13.9906 5.53361 14.3418 5.75319C15.2483 6.31993 16 7.14407 16 8.20557C16 9.27009 15.2442 10.0958 14.3337 10.663C13.9821 10.882 13.5195 10.7746 13.3005 10.423C13.0815 10.0714 13.189 9.60887 13.5405 9.38985C14.2846 8.92635 14.5 8.4962 14.5 8.20557ZM11.3626 11.0378C11.432 11.4462 11.1572 11.8335 10.7488 11.9029C9.89219 12.0484 8.96547 12.1274 8 12.1274C5.91954 12.1274 4.00018 11.76 2.57286 11.1355C1.86032 10.8238 1.23659 10.4332 0.780529 9.9615C0.320977 9.48616 0 8.89166 0 8.20557C0 7.37549 0.466082 6.68599 1.08548 6.16636C1.70712 5.64485 2.55471 5.22808 3.52013 4.92164C3.91494 4.79633 4.33657 5.01479 4.46189 5.40959C4.5872 5.80439 4.36874 6.22603 3.97394 6.35135C3.12334 6.62134 2.4724 6.96078 2.04954 7.31553C1.62442 7.67217 1.5 7.97899 1.5 8.20557C1.5 8.39536 1.58476 8.6353 1.85895 8.91891C2.13663 9.20613 2.57464 9.49905 3.17409 9.76131C4.37076 10.2848 6.07639 10.6274 8 10.6274C8.88475 10.6274 9.72732 10.5549 10.4976 10.424C10.906 10.3547 11.2933 10.6295 11.3626 11.0378Z"></path> <path fillRule="nonzero" clipRule="nonzero" d="M4.87192 13.6303C5.12286 13.7752 5.6009 13.8041 6.37095 13.3949C6.73673 13.2005 7.19082 13.3395 7.38519 13.7052C7.57957 14.071 7.44062 14.5251 7.07484 14.7195C6.13079 15.2211 5.04121 15.4601 4.12192 14.9293C3.20003 14.3971 2.86282 13.3296 2.82687 12.2575C2.81299 11.8435 3.13733 11.4967 3.55131 11.4828C3.96529 11.4689 4.31215 11.7932 4.32603 12.2072C4.35541 13.0834 4.62023 13.485 4.87192 13.6303ZM3.98778 9.49712C3.59944 9.35301 3.40145 8.92138 3.54556 8.53304C3.84786 7.71839 4.24274 6.8763 4.72548 6.04018C5.76571 4.23845 7.04361 2.75996 8.29806 1.83609C8.92431 1.37487 9.57441 1.02999 10.211 0.870901C10.8524 0.71059 11.5278 0.729863 12.1219 1.07291C12.8408 1.48795 13.2049 2.23634 13.3452 3.03257C13.486 3.83168 13.4232 4.77409 13.2058 5.7634C13.1169 6.16796 12.7169 6.42388 12.3124 6.33501C11.9078 6.24613 11.6519 5.84612 11.7408 5.44155C11.9322 4.56992 11.9637 3.83647 11.868 3.29288C11.7717 2.7464 11.5681 2.48524 11.3719 2.37195C11.2076 2.27705 10.9574 2.23049 10.5747 2.32614C10.1871 2.42301 9.71442 2.65588 9.18757 3.04388C8.13584 3.81846 6.98632 5.12428 6.02452 6.79018C5.58214 7.55639 5.22369 8.32235 4.95185 9.0549C4.80774 9.44323 4.37611 9.64122 3.98778 9.49712Z"></path> <path d="M9.45925 8.06618C9.45925 8.81694 8.85063 9.42556 8.09987 9.42556C7.34911 9.42556 6.7405 8.81694 6.7405 8.06618C6.7405 7.31542 7.34911 6.70681 8.09987 6.70681C8.85063 6.70681 9.45925 7.31542 9.45925 8.06618Z" ></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        React
                    </CardDescription>
                </Card>
                
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM4.75 6.5C4.75 6.08579 5.08579 5.75 5.5 5.75H9.25C9.66421 5.75 10 6.08579 10 6.5C10 6.91421 9.66421 7.25 9.25 7.25H8.25V12.5C8.25 12.9142 7.91421 13.25 7.5 13.25C7.08579 13.25 6.75 12.9142 6.75 12.5V7.25H5.5C5.08579 7.25 4.75 6.91421 4.75 6.5ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        TypeScript
                    </CardDescription>
                </Card>
                
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M0 1.75C0 0.783501 0.783502 0 1.75 0H14.25C15.2165 0 16 0.783502 16 1.75V3.75C16 4.16421 15.6642 4.5 15.25 4.5C14.8358 4.5 14.5 4.16421 14.5 3.75V1.75C14.5 1.61193 14.3881 1.5 14.25 1.5H1.75C1.61193 1.5 1.5 1.61193 1.5 1.75V14.25C1.5 14.3881 1.61193 14.5 1.75 14.5H15.25C15.6642 14.5 16 14.8358 16 15.25C16 15.6642 15.6642 16 15.25 16H1.75C0.783501 16 0 15.2165 0 14.25V1.75ZM8.25 5.75C8.66421 5.75 9 6.08579 9 6.5V10.5C9 11.5048 8.72399 12.2584 8.15514 12.7324C7.61223 13.1848 6.95384 13.25 6.5 13.25C6.08579 13.25 5.75 12.9142 5.75 12.5C5.75 12.0858 6.08579 11.75 6.5 11.75C6.84617 11.75 7.06277 11.6902 7.19486 11.5801C7.301 11.4916 7.5 11.2452 7.5 10.5V6.5C7.5 6.08579 7.83578 5.75 8.25 5.75ZM11.2757 6.58011C11.6944 6.08164 12.3507 5.75 13.25 5.75C14.0849 5.75 14.7148 6.03567 15.1394 6.48481C15.4239 6.78583 15.4105 7.26052 15.1095 7.54505C14.8085 7.82958 14.3338 7.81621 14.0493 7.51519C13.9394 7.39898 13.7204 7.25 13.25 7.25C12.7493 7.25 12.5306 7.41836 12.4243 7.54489C12.2934 7.70065 12.25 7.896 12.25 8C12.25 8.104 12.2934 8.29935 12.4243 8.45511C12.5306 8.58164 12.7493 8.75 13.25 8.75C13.3257 8.75 13.3988 8.76121 13.4676 8.78207C14.1307 8.87646 14.6319 9.17251 14.9743 9.58011C15.3684 10.0493 15.5 10.604 15.5 11C15.5 11.396 15.3684 11.9507 14.9743 12.4199C14.5556 12.9184 13.8993 13.25 13 13.25C12.1651 13.25 11.5352 12.9643 11.1106 12.5152C10.8261 12.2142 10.8395 11.7395 11.1405 11.4549C11.4415 11.1704 11.9162 11.1838 12.2007 11.4848C12.3106 11.601 12.5296 11.75 13 11.75C13.5007 11.75 13.7194 11.5816 13.8257 11.4551C13.9566 11.2993 14 11.104 14 11C14 10.896 13.9566 10.7007 13.8257 10.5449C13.7194 10.4184 13.5007 10.25 13 10.25C12.9243 10.25 12.8512 10.2388 12.7824 10.2179C12.1193 10.1235 11.6181 9.82749 11.2757 9.41989C10.8816 8.95065 10.75 8.396 10.75 8C10.75 7.604 10.8816 7.04935 11.2757 6.58011Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        JavaScript
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M3 1.60001C2.86193 1.60001 2.75 1.71193 2.75 1.85001V11.4003C2.75 11.4896 2.79769 11.5722 2.87509 11.6168L7.73381 14.4194C7.80942 14.463 7.90231 14.464 7.97886 14.4221L13.1201 11.6048C13.2002 11.5609 13.25 11.4769 13.25 11.3856V1.85001C13.25 1.71193 13.1381 1.60001 13 1.60001H3ZM1.25 1.85001C1.25 0.883508 2.0335 0.100006 3 0.100006H13C13.9665 0.100006 14.75 0.883509 14.75 1.85001V11.3856C14.75 12.0248 14.4015 12.6131 13.841 12.9203L8.69968 15.7375C8.16383 16.0311 7.51363 16.024 6.98434 15.7187L2.12562 12.9162C1.58382 12.6037 1.25 12.0258 1.25 11.4003V1.85001ZM5 4.35001C5 3.93579 5.33579 3.60001 5.75 3.60001H10.3654C10.7796 3.60001 11.1154 3.93579 11.1154 4.35001V10.4462C11.1154 10.7302 10.9549 10.9899 10.7008 11.117L8.3931 12.2708C8.18196 12.3764 7.93343 12.3764 7.72228 12.2708L5.41459 11.117C5.1605 10.9899 5 10.7302 5 10.4462V9.86924C5 9.45502 5.33579 9.11924 5.75 9.11924C6.16421 9.11924 6.5 9.45502 6.5 9.86924V9.98263L8.05769 10.7615L9.61539 9.98263V8.31154H7C6.58579 8.31154 6.25 7.97576 6.25 7.56154C6.25 7.14733 6.58579 6.81154 7 6.81154H9.61539V5.10001H5.75C5.33579 5.10001 5 4.76422 5 4.35001Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        CSS
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fillRule="evenodd" clipRule="evenodd" d="M12 6.036c-2.667 0-4.333 1.325-5 3.976 1-1.325 2.167-1.822 3.5-1.491.761.189 1.305.738 1.906 1.345C13.387 10.855 14.522 12 17 12c2.667 0 4.333-1.325 5-3.976-1 1.325-2.166 1.822-3.5 1.491-.761-.189-1.305-.738-1.907-1.345-.98-.99-2.114-2.134-4.593-2.134zM7 12c-2.667 0-4.333 1.325-5 3.976 1-1.326 2.167-1.822 3.5-1.491.761.189 1.305.738 1.907 1.345.98.989 2.115 2.134 4.594 2.134 2.667 0 4.333-1.325 5-3.976-1 1.325-2.167 1.822-3.5 1.491-.761-.189-1.305-.738-1.906-1.345C10.613 13.145 9.478 12 7 12z"></path></g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Tailwind
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                    <svg className="fill-black dark:fill-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M4.98488 2C3.61546 2 2.60217 3.19858 2.64753 4.49844C2.69105 5.74725 2.63451 7.36461 2.22732 8.68359C1.81892 10.0064 1.1282 10.8444 0 10.952V12.1666C1.1282 12.2742 1.81892 13.1122 2.22732 14.4351C2.63451 15.754 2.69105 17.3714 2.64753 18.6202C2.60217 19.9199 3.61546 21.1186 4.98508 21.1186H19.0169C20.3864 21.1186 21.3995 19.9201 21.3541 18.6202C21.3106 17.3714 21.3671 15.754 21.7743 14.4351C22.1829 13.1122 22.8718 12.2742 24 12.1666V10.952C22.8718 10.8444 22.1829 10.0064 21.7743 8.68359C21.3671 7.36481 21.3106 5.74725 21.3541 4.49844C21.3995 3.19878 20.3864 2 19.0169 2H4.98468H4.98488ZM16.2712 13.7687C16.2712 15.5586 14.9361 16.6441 12.7206 16.6441H8.94915C8.84127 16.6441 8.7378 16.6012 8.66152 16.5249C8.58523 16.4486 8.54237 16.3452 8.54237 16.2373V6.88136C8.54237 6.77347 8.58523 6.67001 8.66152 6.59372C8.7378 6.51743 8.84127 6.47458 8.94915 6.47458H12.6991C14.5464 6.47458 15.7588 7.47525 15.7588 9.01166C15.7588 10.09 14.9433 11.0555 13.9041 11.2245V11.2809C15.3187 11.4361 16.2712 12.4156 16.2712 13.7687ZM12.3094 7.76407H10.1589V10.8015H11.9701C13.3702 10.8015 14.1423 10.2377 14.1423 9.2299C14.1423 8.28556 13.4784 7.76407 12.3094 7.76407ZM10.1589 12.0068V15.3542H12.3885C13.8462 15.3542 14.6184 14.7692 14.6184 13.6699C14.6184 12.5704 13.8246 12.0066 12.2947 12.0066H10.1589V12.0068Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Bootstrap
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M3 1.5C2.86193 1.5 2.75 1.61193 2.75 1.75V11.3003C2.75 11.3896 2.79769 11.4722 2.87509 11.5168L7.73381 14.3194C7.80942 14.363 7.90231 14.364 7.97886 14.3221L13.1201 11.5048C13.2002 11.4609 13.25 11.3769 13.25 11.2856V1.75C13.25 1.61193 13.1381 1.5 13 1.5H3ZM1.25 1.75C1.25 0.783502 2.0335 0 3 0H13C13.9665 0 14.75 0.783503 14.75 1.75V11.2856C14.75 11.9248 14.4015 12.5131 13.841 12.8203L8.69968 15.6375C8.16383 15.9311 7.51363 15.924 6.98434 15.6187L2.12562 12.8162C1.58382 12.5037 1.25 11.9258 1.25 11.3003V1.75ZM5 4.25C5 3.83579 5.33579 3.5 5.75 3.5H10.3654C10.7796 3.5 11.1154 3.83579 11.1154 4.25C11.1154 4.66421 10.7796 5 10.3654 5H6.5V6.71154H10.3654C10.7796 6.71154 11.1154 7.04732 11.1154 7.46154V10.3462C11.1154 10.6302 10.9549 10.8899 10.7008 11.017L8.3931 12.1708C8.18196 12.2764 7.93343 12.2764 7.72228 12.1708L5.41459 11.017C5.1605 10.8899 5 10.6302 5 10.3462V9.76923C5 9.35502 5.33579 9.01923 5.75 9.01923C6.16421 9.01923 6.5 9.35502 6.5 9.76923V9.88263L8.05769 10.6615L9.61539 9.88263V8.21154H5.75C5.33579 8.21154 5 7.87575 5 7.46154V4.25Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        HTML
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M7.58638 0.102166C7.8199 -0.0340553 8.10867 -0.0340553 8.34219 0.102166L14.5565 3.72717C14.7869 3.86157 14.9286 4.10825 14.9286 4.375V11.625C14.9286 11.8918 14.7869 12.1384 14.5565 12.2728L8.34219 15.8978C8.10867 16.0341 7.8199 16.0341 7.58638 15.8978L6.03281 14.9916C5.67502 14.7829 5.55417 14.3236 5.76288 13.9658C5.97159 13.6081 6.43083 13.4872 6.78862 13.6959L7.96429 14.3817L13.4286 11.1942V4.80578L7.96429 1.61828L2.5 4.80578V11.1942L3.6168 11.8457C3.96098 11.9561 4.38611 11.9831 4.68576 11.8507C4.82477 11.7893 4.95031 11.6893 5.04968 11.5107C5.15426 11.3227 5.25 11.0098 5.25 10.5V5.25C5.25 4.83579 5.58579 4.5 6 4.5C6.41421 4.5 6.75 4.83579 6.75 5.25V10.5C6.75 11.1902 6.62104 11.7716 6.36047 12.2399C6.09471 12.7176 5.71466 13.036 5.29192 13.2228C4.48562 13.579 3.59523 13.433 3.04999 13.2371C3.00686 13.2216 2.96525 13.2022 2.92567 13.1791L1.3721 12.2728C1.14168 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14168 3.86157 1.3721 3.72717L7.58638 0.102166ZM8.24655 5.28323C8.64339 4.81081 9.26318 4.5 10.1042 4.5C10.8847 4.5 11.4792 4.76756 11.8815 5.19314C12.166 5.49417 12.1527 5.96885 11.8516 6.25338C11.5506 6.53792 11.0759 6.52455 10.7914 6.22352C10.7038 6.13087 10.5202 6 10.1042 6C9.66182 6 9.47952 6.14753 9.39511 6.24802C9.28615 6.37774 9.25 6.54184 9.25 6.625C9.25 6.70816 9.28615 6.87226 9.39511 7.00198C9.47952 7.10247 9.66182 7.25 10.1042 7.25C10.1782 7.25 10.2497 7.26073 10.3173 7.28072C10.9368 7.37001 11.4089 7.64784 11.7326 8.03323C12.1049 8.47643 12.2292 8.99983 12.2292 9.375C12.2292 9.75017 12.1049 10.2736 11.7326 10.7168C11.3358 11.1892 10.716 11.5 9.87501 11.5C9.0945 11.5 8.49996 11.2324 8.09768 10.8069C7.81315 10.5058 7.82652 10.0311 8.12755 9.74662C8.42857 9.46208 8.90325 9.47546 9.18779 9.77648C9.27536 9.86913 9.459 10 9.87501 10C10.3174 10 10.4997 9.85247 10.5841 9.75198C10.693 9.62226 10.7292 9.45816 10.7292 9.375C10.7292 9.29184 10.693 9.12774 10.5841 8.99802C10.4997 8.89753 10.3174 8.75 9.87501 8.75C9.80097 8.75 9.72943 8.73927 9.66188 8.71928C9.04237 8.62999 8.57028 8.35216 8.24655 7.96677C7.87427 7.52357 7.75 7.00017 7.75 6.625C7.75 6.24983 7.87427 5.72643 8.24655 5.28323Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Nodejs
                    </CardDescription>
                </Card>

                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                    <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M7.62016 0.102166C7.85488 -0.0340553 8.14512 -0.0340553 8.37984 0.102166L14.626 3.72717C14.8576 3.86157 15 4.10825 15 4.375V11.625C15 11.8918 14.8576 12.1384 14.626 12.2728L8.37984 15.8978C8.14512 16.0341 7.85488 16.0341 7.62016 15.8978L1.374 12.2728C1.14241 12.1384 1 11.8918 1 11.625V4.375C1 4.10825 1.14241 3.86157 1.374 3.72717L7.62016 0.102166ZM2.50769 4.80578V11.1942L8 14.3817L13.4923 11.1942V4.80578L8 1.61828L2.50769 4.80578ZM4.98331 4.55709C5.265 4.441 5.58925 4.50517 5.80484 4.71967L10.0462 8.93934V5.25C10.0462 4.83579 10.3837 4.5 10.8 4.5C11.2163 4.5 11.5538 4.83579 11.5538 5.25V10.75C11.5538 11.0533 11.3702 11.3268 11.0885 11.4429C10.8068 11.559 10.4825 11.4948 10.2669 11.2803L6.02564 7.06066V10.75C6.02564 11.1642 5.68813 11.5 5.27179 11.5C4.85546 11.5 4.51795 11.1642 4.51795 10.75V5.25C4.51795 4.94665 4.70162 4.67318 4.98331 4.55709Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Nginx
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.79 1.574h3.866c.14 0 .252.11.252.246v5.186a.25.25 0 01-.252.246H6.344c-.975 0-1.766.77-1.766 1.72v1.162a.25.25 0 01-.253.243H1.867a.25.25 0 01-.253-.246V6.177a.25.25 0 01.252-.246H7.98c.418 0 .757-.33.757-.737a.747.747 0 00-.757-.738H5.537V1.82a.25.25 0 01.253-.246zm5.632 2.592V1.82c0-.95-.79-1.72-1.766-1.72H5.79c-.976 0-1.767.77-1.767 1.72v2.636H1.867C.89 4.456.1 5.226.1 6.176v3.955c0 .95.79 1.72 1.766 1.72h2.46c.085 0 .17-.006.252-.017v2.346c0 .95.79 1.72 1.766 1.72h3.866c.976 0 1.767-.77 1.767-1.72v-2.636h2.156c.976 0 1.767-.77 1.767-1.72V5.868c0-.95-.79-1.72-1.767-1.72h-2.458c-.086 0-.17.005-.253.017zm-5.33 5.974V8.994a.25.25 0 01.252-.246h3.312c.976 0 1.766-.77 1.766-1.72V5.866a.25.25 0 01.253-.243h2.458c.14 0 .253.11.253.246v3.954a.25.25 0 01-.252.246H8.02a.747.747 0 00-.757.737c0 .408.339.738.757.738h2.442v2.636a.25.25 0 01-.253.246H6.344a.25.25 0 01-.252-.246v-4.04z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Python
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M7.19792 3.06C5.60434 3.06 4.3125 4.34978 4.3125 5.9408V12.3472C4.3125 13.5362 3.34711 14.5 2.15625 14.5C0.965386 14.5 0 13.5362 0 12.3472C0 11.9164 0.349778 11.5672 0.78125 11.5672C1.21272 11.5672 1.5625 11.9164 1.5625 12.3472C1.5625 12.6746 1.82833 12.94 2.15625 12.94C2.48417 12.94 2.75 12.6746 2.75 12.3472V5.9408C2.75 3.48821 4.7414 1.5 7.19792 1.5C9.22509 1.5 10.9355 2.85396 11.4715 4.70551C13.9858 4.78385 16 6.84348 16 9.3728C16 9.41167 15.9972 9.44987 15.9917 9.48721C15.9972 9.52454 16 9.56274 16 9.6016V13.72C16 14.1508 15.6502 14.5 15.2187 14.5H7.19792C6.76644 14.5 6.41667 14.1508 6.41667 13.72V9.6016C6.41667 9.17082 6.76644 8.8216 7.19792 8.8216C8.79149 8.8216 10.0833 7.53182 10.0833 5.9408C10.0833 4.34978 8.79149 3.06 7.19792 3.06ZM14.4458 9.48719C14.4403 9.44986 14.4375 9.41166 14.4375 9.3728C14.4375 7.75995 13.2076 6.43389 11.6332 6.27844C11.48 8.3122 9.95487 9.96383 7.97917 10.3133V12.94H10.4271V11.2032C10.4271 10.7724 10.7769 10.4232 11.2083 10.4232C11.6398 10.4232 11.9896 10.7724 11.9896 11.2032V12.94H14.4375V9.6016C14.4375 9.56274 14.4403 9.52453 14.4458 9.48719Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        PHP
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M4.45262 0.77086C4.71879 0.451461 5.19348 0.408307 5.51288 0.674473C6.27367 1.30846 6.56914 2.05693 6.4059 2.79543C6.26691 3.42419 5.82892 3.87253 5.4875 4.11099C5.27416 4.29388 5.18522 4.43743 5.14847 4.52681C5.11339 4.61211 5.11415 4.67467 5.12613 4.72887C5.15746 4.87054 5.29291 5.0395 5.44856 5.14327C5.7945 5.37389 5.88798 5.84129 5.65735 6.18722C5.42673 6.53316 4.95933 6.62664 4.61339 6.39602C4.26717 6.1652 3.80036 5.70682 3.65602 5.05387C3.49275 4.31537 3.78822 3.56689 4.54901 2.9329L4.5799 2.90715L4.61336 2.88485C4.76901 2.78108 4.90445 2.61213 4.93577 2.47046C4.94775 2.41627 4.94851 2.3537 4.91343 2.2684C4.87525 2.17555 4.78076 2.02424 4.54901 1.83112C4.22961 1.56495 4.18646 1.09026 4.45262 0.77086ZM9.1224 2.77835C9.38857 3.09775 9.34542 3.57244 9.02602 3.83861C8.79427 4.03173 8.69978 4.18303 8.66159 4.27588C8.62651 4.36119 8.62728 4.42375 8.63926 4.47794C8.67057 4.61962 8.80602 4.78857 8.96166 4.89233C9.3076 5.12296 9.40108 5.59035 9.17045 5.93629C8.93983 6.28223 8.47243 6.3757 8.1265 6.14508C7.78027 5.91426 7.31347 5.45587 7.16913 4.80292C7.00588 4.06442 7.30136 3.31595 8.06214 2.68196C8.38154 2.41579 8.85624 2.45895 9.1224 2.77835ZM0.207849 7.59455C0.29163 7.25942 0.59274 7.02432 0.938179 7.02432H12.4962C12.8417 7.02432 13.1428 7.25942 13.2266 7.59455C13.3354 8.03003 13.3631 8.58563 13.3041 9.20747H15.1472C15.563 9.20747 15.9 9.54451 15.9 9.96027C15.9 10.6991 15.8551 11.8958 15.103 12.8984C14.3624 13.8856 13.0731 14.5203 11.0103 14.5882C10.7408 14.9262 10.444 15.2603 10.1177 15.5866C9.97652 15.7278 9.78504 15.8071 9.58538 15.8071H3.84904C3.64938 15.8071 3.4579 15.7278 3.31672 15.5866C1.86788 14.1377 0.999928 12.5367 0.537609 11.1148C0.0832301 9.7174 0.000142552 8.42537 0.207849 7.59455ZM9.26725 14.3015C9.54933 14.0025 9.80359 13.6979 10.0322 13.3914C10.965 12.1406 11.4703 10.8584 11.691 9.80577C11.7965 9.30267 11.8334 8.87025 11.8284 8.52994H1.60604C1.59838 9.05604 1.69095 9.79279 1.96944 10.6493C2.34144 11.7933 3.02818 13.0942 4.16717 14.3015H9.26725ZM12.0935 12.9643C13.0969 12.7691 13.6142 12.3739 13.8986 11.9949C14.1788 11.6214 14.3043 11.176 14.3577 10.7131H13.0182C12.8197 11.4239 12.5193 12.189 12.0935 12.9643Z"></path> </g></svg>
                    </CardContent>
                    <CardDescription className='text-xl'>
                        Java
                    </CardDescription>
                </Card>
                <Card className='h-40 w-40 mx-4 flex flex-col justify-center items-center'>
                    <CardContent className='h-1/2 w-1/2 p-0'>
                        <svg className="fill-black dark:fill-white" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="nonzero" clipRule="nonzero" d="M5.46619 2.00322C5.46619 1.44916 5.91535 1 6.46941 1H9.47907C10.0331 1 10.4823 1.44915 10.4823 2.00322V5.01288C10.4823 5.09948 10.4713 5.18352 10.4507 5.26368C10.4713 5.34385 10.4823 5.42789 10.4823 5.51449V8.02254H11.7363V6.0161C11.7363 5.60055 12.0732 5.26368 12.4887 5.26368C12.9043 5.26368 13.2411 5.60055 13.2411 6.0161V8.02254H15.2476C15.6631 8.02254 16 8.35941 16 8.77495C16 9.1905 15.6631 9.52737 15.2476 9.52737H13.2113C13.0634 11.3518 12.3727 12.8078 11.2779 13.8375C10.045 14.9972 8.37374 15.5467 6.59481 15.5467C4.97058 15.5467 3.43674 15.0891 2.24224 14.1255C1.03896 13.1549 0.236443 11.7155 0.0125343 9.86728C-0.115917 8.80699 0.763545 8.02254 1.70412 8.02254H1.95492V5.51449C1.95492 4.96043 2.40408 4.51127 2.95814 4.51127H5.46619V2.00322ZM5.46619 6.0161H3.45975V8.02254H5.46619V6.0161ZM1.70412 9.52737C1.63196 9.52737 1.57447 9.55683 1.54064 9.59191C1.51066 9.62299 1.50235 9.65252 1.50644 9.68629C1.68777 11.1831 2.31696 12.2524 3.18705 12.9543C4.06593 13.6632 5.24713 14.0419 6.59481 14.0419C8.071 14.0419 9.34667 13.5882 10.2469 12.7414C11.0115 12.0222 11.5598 10.9686 11.7007 9.52737H1.70412ZM6.97102 8.02254H8.97746V6.0161H6.97102V8.02254ZM6.97102 4.51127H8.97746V2.50483H6.97102V4.51127Z"></path> </g></svg>
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