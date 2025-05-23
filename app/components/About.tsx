import { Progress } from '@radix-ui/react-progress';
import ecommercial from '../../public/assets/ecommercial.png';
import Image from 'next/image';
import landing from '../../public/assets/landing.png';
import dash from '../../public/assets/dash.png';
import project2 from '../../public/assets/project2.png';
import project1 from '../../public/assets/project1.png';

export default function About() {
    return(
        <section id='about' className='bg-black text-white py-20 px-4 w-full'>
            <div className="max-w-7xl mx-auto">
                <h2 className='text-4xl md:text-6xl font-bold mb-8'>About <span className='text-purple-300'>Me</span></h2>
                <div className='grid md:grid-cols-3 gap-8'>
                    <h3 className='text-xl md:text-2xl font-bold mb-2'>01. Background</h3>
                    <p className='text-white/50 mb-6 md:col-span-2'>I&apos;m a passionate computer science student and full-stack web developer specializing in Next.js, TypeScript, and modern web technologies. Currently pursuing my bachelor&apos;s degree while actively developing web applications and exploring cutting-edge technologies. My focus is on creating performant, scalable, and user-friendly web solutions.</p>
                    <div className='rounded-lg p-4 mb-4 border border-white/20 md:col-span-3 overflow-x-auto'>
                        <code className='text-sm text-white/50 whitespace-nowrap'>
                            const skills = [<br />&apos;Next.js&apos;<br /> &apos;TypeScript&apos;<br /> &apos;React&apos;<br /> &apos;Node.js&apos;<br /> &apos;Tailwind CSS&apos;<br /> &apos;PostgreSQL&apos;<br /> &apos;MongoDB&apos;<br /> &apos;Prisma&apos;<br /> &apos;Git&apos;<br /> &apos;Docker&apos;];
                        </code>
                    </div>
                </div>

                <div className='mt-18 grid md:grid-cols-2 gap-4 md:gap-8'>
                    <h3 className='text-xl md:text-2xl font-bold mb-2'>02. Projects</h3>
                    <p className='text-white/50 mb-6 md:col-span-2'>A collection of my recent projects showcasing my expertise in full-stack development, focusing on modern web technologies and best practices.</p>
                    
                    <div className='border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/5 transition-colors group'>
                        <h3 className='text-xl md:text-2xl font-bold mb-2'>E-commerce Platform</h3>
                        <p className='text-white/50'>A full-stack e-commerce solution with real-time inventory, secure payments, and an intuitive admin dashboard. Built with Next.js 14 and TypeScript.</p>
                        <div className='mt-4 relative border border-white/20 rounded-lg p-4 w-full h-[180px] md:h-[220px] overflow-hidden group-hover:border-purple-500/30 transition-colors'>
                            <Image 
                                src={landing} 
                                alt='E-commerce Platform' 
                                className='rounded-lg object-contain bg-white group-hover:scale-105 transition-transform duration-500'
                                fill
                            />
                        </div>
                    </div>

                    <div className='border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/5 transition-colors group'>
                        <h3 className='text-xl md:text-2xl font-bold mb-2'>E-commerce Platform</h3>
                        <p className='text-white/50'> An e-commerce platform with a landing page and a dashboard for managing orders and inventory.</p>
                        <div className='mt-4 relative border border-white/20 rounded-lg p-4 w-full h-[180px] md:h-[220px] overflow-hidden group-hover:border-purple-500/30 transition-colors'>
                            <Image 
                                src={ecommercial} 
                                alt='E-Commerce Platform' 
                                className='rounded-lg object-contain bg-white group-hover:scale-105 transition-transform duration-500'
                                fill
                            />
                        </div>
                    </div>

                    <div className='border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/5 transition-colors group'>
                        <h3 className='text-xl md:text-2xl font-bold mb-2'>Admin Dashboard</h3>
                        <p className='text-white/50'>A modern admin dashboard for managing orders and inventory.</p>
                        <div className='mt-4 relative border border-white/20 rounded-lg p-4 w-full h-[180px] md:h-[220px] overflow-hidden group-hover:border-purple-500/30 transition-colors'>
                            <Image 
                                src={dash} 
                                alt='Dashboard' 
                                className='rounded-lg object-cover group-hover:scale-105 transition-transform duration-500'
                                fill
                            />
                        </div>
                    </div>

                    <div className='border border-white/20 rounded-lg p-4 md:p-6 hover:bg-white/5 transition-colors group'>
                            <h3 className='text-xl md:text-2xl font-bold mb-2'>Family Tracker</h3>
                            <p className='text-white/50'>A family tracker app with a dashboard for managing family members and a map for tracking their location.</p>
                        <div className='mt-4 relative border border-white/20 rounded-lg p-4 w-full h-[180px] md:h-[220px] overflow-hidden group-hover:border-purple-500/30 transition-colors'>
                            <Image 
                                src={project2} 
                                alt='Family Tracker' 
                                className='rounded-lg object-cover group-hover:scale-105 transition-transform duration-500'
                                fill
                            />
                        </div>
                    </div>
                </div>

                <div className='border border-white/20 rounded-lg mt-8 p-4 md:p-6'>
                    <h3 className='text-xl md:text-2xl font-bold mb-4'>03. Skills</h3>
                    <p className='text-white/50 mb-6'>My technical expertise spans across frontend and backend development, with a focus on modern web technologies and best practices.</p>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                        <div className='border border-white/20 rounded-lg p-4 hover:bg-white/5 transition-colors'>
                            <h4 className='text-purple-300 font-medium mb-3'>Frontend</h4>
                            <ul className='text-white/50 space-y-2 text-sm'>
                                <li>Next.js & React</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                                <li>Framer Motion</li>
                            </ul>
                        </div>
                        <div className='border border-white/20 rounded-lg p-4 hover:bg-white/5 transition-colors'>
                            <h4 className='text-purple-300 font-medium mb-3'>Backend</h4>
                            <ul className='text-white/50 space-y-2 text-sm'>
                                <li>Node.js & Express</li>
                                <li>PostgreSQL & MongoDB</li>
                                <li>Prisma ORM</li>
                                <li>REST & GraphQL APIs</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='grid md:grid-cols-2 gap-4 md:gap-8 mt-8'>
                    <div className='border border-white/20 rounded-lg p-4 md:p-6'>
                        <h3 className='text-xl md:text-2xl font-bold mb-4'>04. Skills Progress</h3>
                        <div className='space-y-6'>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label className='text-sm font-medium'>Frontend</label>
                                    <span className='text-sm text-purple-300'>90%</span>
                                </div>
                                <Progress value={90} className='h-2 bg-white/10 rounded-full overflow-hidden'>
                                    <div className='h-full bg-purple-500 transition-all duration-500 ease-out' style={{ width: '90%' }} />
                                </Progress>
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label className='text-sm font-medium'>Backend</label>
                                    <span className='text-sm text-purple-300'>75%</span>
                                </div>
                                <Progress value={75} className='h-2 bg-white/10 rounded-full overflow-hidden'>
                                    <div className='h-full bg-purple-500 transition-all duration-500 ease-out' style={{ width: '75%' }} />
                                </Progress>
                            </div>
                            <div>
                                <div className='flex justify-between mb-2'>
                                    <label className='text-sm font-medium'>DevOps</label>
                                    <span className='text-sm text-purple-300'>60%</span>
                                </div>
                                <Progress value={60} className='h-2 bg-white/10 rounded-full overflow-hidden'>
                                    <div className='h-full bg-purple-500 transition-all duration-500 ease-out' style={{ width: '60%' }} />
                                </Progress>
                            </div>
                        </div>
                    </div>

                    <div className='border border-white/20 rounded-lg p-4 md:p-6'>
                        <h3 className='text-xl md:text-2xl font-bold mb-4'>05. Approach</h3>
                        <p className='text-white/50'>I believe in writing clean, maintainable code and following best practices. My development approach focuses on performance, scalability, and user experience. I&apos;m constantly learning and adapting to new technologies while maintaining a strong foundation in core web development principles.</p>
                        <div className='mt-6 relative h-[180px] md:h-[200px] overflow-hidden rounded-lg border border-white/20 group hover:border-purple-500/30 transition-colors'>
                            <Image 
                                src={project1}
                                alt='Development Approach'
                                fill
                                className='object-cover group-hover:scale-105 transition-transform duration-500'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}