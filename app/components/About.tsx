import { Progress } from '@radix-ui/react-progress';
import project2 from '../../public/assets/project2.png';
import Image from 'next/image';
import { section } from 'motion/react-client';
import project1 from '../../public/assets/project1.png';
import project3 from '../../public/assets/project3.png';
import project4 from '../../public/assets/project4.png';

export default function About() {
    return(
        <section id='about' className='bg-[#000000] text-white py-20 px-4'>
            <h2 className='text-6xl font-bold mb-8'>About <span className='text-purple-300'>Me</span></h2>
            <div className='grid md:grid-cols-3 gap-8'>
                <h3 className='text-2xl font-bold mb-2'>01. Background</h3>
                <p className='text-white/50 mb-6'> I'm a passionate computer science student and aspiring full-stack web developer with a deep love for technology and programming. Since childhood, I've been fascinated by computers and the endless possibilities they offer. Currently, I'm pursuing my bachelor's degree in Computer Science while honing my skills in web development and exploring the exciting world of artificial intelligence.</p>
                <div className='rounded-lg p-4 mb-4 border border-white/20'>
                    <code className='text-sm text-white/50'>
                        {/* const background = [<br />&apos;Computer Science Student&apos;<br />, &apos;Full-Stack Web Developer&apos;<br />, &apos;AI Enthusiast&apos;<br />, &apos;Tech Lover&apos;<br />]; */}
                        const skills = [<br />&apos;HTML&apos;<br /> &apos;CSS&apos;<br /> &apos;JavaScript&apos;<br /> &apos;React&apos;<br /> &apos;Node.js&apos;<br /> &apos;Express&apos;<br /> &apos;next.js&apos;<br /> &apos;postgress&apos;<br /> &apos;tailwindcss&apos;<br /> &apos;typescript&apos;];
                    </code>

                </div>
            </div>
            <div className='mt-18  grid md:grid-cols-2 gap-8'>
                    <h3 className='text-2xl font-bold mb-2'>02. Projects</h3>
                    <p className=' flex text-white/50 mb-6 p-5'>I'm a passionate computer science student and aspiring full-stack web developer </p>
                <div className=' border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>Admin Dashboard</h3>
                    <p className='text-white/50'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
                    <div className=' mt-4 relative border border-white/20 rounded-lg p-4 w-full items-center justify-center h-[220px] lg:w-1/2 mx-auto my-auto  overflow-hidden'>
                        <Image src={project1} alt='Project 1' className='rounded-lg object-cover  '
                        objectFit='cover'
                        layout='fill'/>
                    </div>
                </div>
                <div className=' border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>Family Tracker</h3>
                    <p className='text-white/50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit? </p>
                    <div className=' mt-4 relative border border-white/20 rounded-lg p-4 w-full items-center justify-center h-[220px] lg:w-1/2 mx-auto my-auto  overflow-hidden'>
                        <Image src={project2} alt='Project 1' className='rounded-lg object-cover  '
                        objectFit='cover'
                        layout='fill'/>
                    </div>
                </div>
                <div className=' border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>Note Keeper</h3>
                    <p className='text-white/50'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, quod! </p>
                    <div className=' mt-4 relative border border-white/20 rounded-lg p-4 w-full items-center justify-center h-[220px] lg:w-1/2 mx-auto my-auto  overflow-hidden'>
                        <Image src={project3} alt='Project 1' className='rounded-lg object-cover  '
                        objectFit='cover'
                        layout='fill'/>
                    </div>
                </div>
                <div className=' border border-white/20 rounded-lg p-6'>
                    <h3 className='text-2xl font-bold mb-2'>Move it</h3>
                    <p className='text-white/50'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veritatis, aliquid dicta.</p>
                    <div className=' mt-4 relative border border-white/20 rounded-lg p-4 w-full items-center justify-center h-[220px] lg:w-1/2 mx-auto my-auto  overflow-hidden'>
                        <Image src={project4} alt='Project 1' className='rounded-lg object-cover  '
                        objectFit='cover'
                        layout='fill'/>
                    </div>
                </div>
            </div>
            <div className='border border-white/20 rounded-lg mt-5 p-6'>
                <h3 className='text-2xl font-bold mb-2'>03. Skills</h3>
                <p className='text-white/50 mb-4'>I'm a passionate computer science student and aspiring full-stack web developer</p>
                <div className='grid grid-cols-2 text-center gap-4'>
                    <div className='border border-white/20 rounded-lg p-4'>
                        <h4 className='text-purple-300 font-medium'>Frontend</h4>
                        <ul className='text-white/50 space-y-1 text-sm'>
                            <li>React</li>
                            <li>Tailwind</li>
                            <li>Typescript</li>
                            <li>Next.js</li>
                        </ul>
                    </div>
                    <div className='border border-white/20 rounded-lg p-4'>
                        <h4 className='text-purple-300 font-medium'>Backend</h4>
                        <ul className='text-white/50 space-y-1 text-sm'>
                            <li>Node.js</li>
                            <li>Postgres</li>
                            <li>Express</li>
                            <li>Javascript</li>
                        </ul>
                    </div>
                </div>


                </div>
                    <div className='grid md:grid-cols-2 gap-8 mt-8'>
                        <div className='border border-white/20 rounded-lg p-6'>
                            <div className='space-y-4'>
                                <div>
                                    <label htmlFor="block text-sm font-medium mb-1">frontend</label>
                                    <progress value={90} className='bg-purple-300/20 [&>div]:bg-purple-100/80' />
                                </div>
                                <div className='space-y-4'>
                                    <label htmlFor="block text-sm font-medium mb-1">backend</label>
                                    <progress value={65} className='bg-purple-300/20 [&>div]:bg-purple-100/80' />
                                </div>
                                <div className='space-y-4'>
                                    <label htmlFor="block text-sm font-medium mb-1">devops</label>
                                    <progress value={40} className='bg-purple-300/20 [&>div]:bg-purple-100/80' />
                            </div>
                        </div>
                    </div>
                    
                    <div className='border border-white/20 rounded-lg p-4'>
                        <h3 className='text-2xl font-bold mt-4 mb-2'>04. approach</h3>
                        <p className='text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium ad id ipsum iste eos voluptas ipsam temporibus error alias iusto assumenda magnam sunt ut vel quas fugiat, optio at!</p>
                    </div>
                    </div>

                    <div className='border border-white/20 rounded-lg p-6 '>
                        <div className='relative h-[200px] overflow-hidden p-4 border border-white/20'>
                            <Image 
                            src={project2}
                            alt='...'
                            layout='fill'
                            objectFit='cover'
                            className='rounded-lg'
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <h3 className='text-2xl font-bold mt-4 mb-2'>05. goals</h3>
                            <p className='text-white/50'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi laudantium ad id ipsum iste eos voluptas ipsam temporibus error alias iusto assumenda magnam sunt ut vel quas fugiat, optio at!</p>
                    
                        </div>
                    </div>


        </section>

    )
}