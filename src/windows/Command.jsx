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
                            // help: {
                            //     description: 'Display all available commands',
                            //     usage: 'help',
                            //     fn: () => 'Available commands: help, about, skills, projects, contact, clear, whoami'
                            // },
                            about: {
                                description: 'About me',
                                usage: 'about',
                                fn: () => 'Hi! I\'m a Full Stack Developer passionate about creating elegant solutions to complex problems. I specialize in React, Node.js, and modern web technologies.'
                            },
                            skills: {
                                description: 'List my technical skills',
                                usage: 'skills',
                                fn: () => 'Languages: JavaScript, Python, SQL\nFrameworks: React, Node.js, Express\nTools: Git, Docker, AWS\nDatabases: MongoDB, PostgreSQL'
                            },
                            projects: {
                                description: 'View my latest projects',
                                usage: 'projects',
                                fn: () => '1. MacOS Portfolio - Built with React & Vite\n2. Task Management App - Full-stack MERN application\n3. Real-time Chat App - Socket.io based communication\n4. E-commerce Platform - Next.js & Stripe integration'
                            },
                            contact: {
                                description: 'Get my contact information',
                                usage: 'contact',
                                fn: () => 'Email: your-email@example.com\nGithub: github.com/yourprofile\nLinkedIn: linkedin.com/in/yourprofile\nTwitter: @yourhandle'
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