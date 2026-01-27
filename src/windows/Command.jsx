import React from 'react'
import MacWindow from './MacWimdow'
import Terminal from "react-console-emulator";
import "./command.scss"
const Command = () => {
    return (
        <div>
            <MacWindow>
                <div className='cli-window'>
                    <Terminal
                        commands={{
                            about: {
                                description: 'About me',
                                usage: 'about',
                                fn: () => 'Hi! I\'m a Front-end Developer passionate about creating elegant UI/UX. I specialize in React-js, and modern web technologies.'
                            },
                            skills: {
                                description: 'List my technical skills',
                                usage: 'skills',
                                fn: () => 'Languages: JavaScript, Python, Java ,HTML,CSS\nFrameworks: React, Redux ,Tailwind CSS \nTools: Git, Github\nDatabases: Sql'
                            },
                            projects: {
                                description: 'View my latest projects',
                                usage: 'projects',
                                fn: () => '1. MacOS Portfolio - Built with React & Vite\n2. Task Management App - Full-stack MERN application\n3. Real-time Chat App - Socket.io based communication\n4. E-commerce Platform - Next.js & Stripe integration'
                            },
                            contact: {
                                description: 'Get my contact information',
                                usage: 'contact',
                                fn: () => 'Email: dhruvaldalwadi1907@gmail.com\nGithub: https://github.com/dhruval1907\nLinkedIn: https://www.linkedin.com/in/dhruval-dalwadi-892144306/\nTwitter: https://x.com/DalwadiaDhruval'
                            },
                            whoami: {
                                description: 'Display current user',
                                usage: 'whoami',
                                fn: () => 'dhruval'
                            },
                            echo: {
                                description: 'Echo a passed string.',
                                usage: 'echo <string>',
                                fn: (...args) => args.join(' ')
                            }
                        }}
                        welcomeMessage={'Welcome to Dhruval\'s Portfolio Terminal!\n\nType "help" to see all available commands.\nStart exploring with: about, skills, projects, contact\n'}
                        promptLabel={'dhruvalwindow:~$'}
                        promptLabelStyle={{ color: ' #2beb1a' }}
                    />
                </div>
            </MacWindow>
        </div>
    )
}

export default Command