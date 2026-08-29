import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Aditya Shashikant Kamble',
        title: 'Full Stack Developer',
        subtitle: 'Software Developer • Web Developer • UI/UX Designer | Turning ideas into seamless digital experiences — where clean code, creative design, and intuitive interfaces come together',
        bio: 'Passionate Full Stack Developer focused on building modern, scalable, and user-friendly web applications. I turn ideas into impactful digital solutions through clean code, intuitive design, strong performance, and secure technology.',
        avatar: '/about/aditya.jpg',
        location: 'Maharashtra, India',
        email: 'adityakamble692006@gmail.com',
        phone: '+91 75584 33644',
        resumeUrl: '/resume',
        website: 'https://aadiiportfolio.vercel.app/',
        languages: [
            { name: 'Marathi', level: 'Native' },
            { name: 'English', level: 'Limited Working' },
            { name: 'Hindi', level: 'Elementary' },
        ],
        socialLinks: [
            {
                platform: 'GitHub',
                url: 'https://github.com/adityakamble69',
                icon: 'github',
                username: 'adityakamble69',
            },
            {
                platform: 'LinkedIn',
                url: 'https://www.linkedin.com/in/adityakamble69',
                icon: 'linkedin',
                username: 'Aditya Kamble',
            },
            {
                platform: 'Instagram',
                url: 'https://www.instagram.com/aadii_.yy',
                icon: 'instagram',
                username: 'aadii_.yy',
            },
            {
                platform: 'Twitter',
                url: '',
                icon: 'twitter',
                username: '',
            },
            {
                platform: 'Discord',
                url: 'https://discord.com/users/adityakamble69',
                icon: 'discord',
                username: 'adityakamble69',
            },
            {
                platform: 'Spotify',
                url: '',
                icon: 'spotify',
                username: '',
            },
        ],
    },
    projects: [
        {
            id: 'project-1',
            slug: 'learnsphere-online-learning-platform',
            title: 'LearnSphere — Online Learning Platform',
            description: 'LearnSphere is a fully functional Learning Management System (LMS) designed to provide an interactive and responsive online learning experience for students and administrators.',
            longDescription: 'LearnSphere is a fully functional Learning Management System built using pure HTML5, CSS3, and JavaScript (ES6+) without any external frameworks or libraries. The platform provides a complete e-learning experience with course discovery, enrollment, lesson tracking, interactive quizzes, progress monitoring, certificates, student dashboards, profiles, and role-based admin functionality.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Google Fonts',
                'CSS Variables',
                'sessionStorage'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/LearnSphere.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Web Developer',
            customTimeline: '2025-26',
            team: 'Personal Project',

            highlights: [
                'Complete Learning Management System',
                'Interactive Courses & Quizzes',
                'Student & Admin Dashboards',
                'Progress Tracking & Certificates'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Student Learning Experience',
                    items: [
                        '**Course Catalog**: Browse, search, and filter available courses by category, difficulty level, and price.',
                        '**Course Learning**: Follow lessons through a video-player simulation with lesson-by-lesson progress tracking.',
                        '**Interactive Quizzes**: Complete multiple-choice quizzes with scoring and instant feedback.',
                        '**Progress Tracking**: Monitor course completion percentages and individual lesson progress.',
                        '**Certificates**: Automatically generate a certificate when a course reaches 100% completion.'
                    ]
                },

                {
                    title: 'Student Dashboard & Profile',
                    items: [
                        '**Student Dashboard**: View enrolled courses, learning statistics, progress, and course recommendations.',
                        '**User Profile**: Manage personal information including name, email, bio, and password.',
                        '**Achievements**: Display learning achievements and completed courses.',
                        '**Session Management**: Maintain user login sessions using browser sessionStorage.'
                    ]
                },

                {
                    title: 'Admin Management',
                    items: [
                        '**Admin Dashboard**: View an overview of platform statistics and learning activity.',
                        '**Course Management**: Add, edit, delete, and manage available courses.',
                        '**User Management**: View registered users, roles, and course enrollments.',
                        '**Analytics**: Display revenue statistics, category enrollment data, and top-performing courses.',
                        '**Role-Based Access**: Provide different interfaces and capabilities for students and administrators.'
                    ]
                },

                {
                    title: 'UI, Performance & Responsiveness',
                    items: [
                        '**Responsive Design**: Optimized layouts for mobile, tablet, and desktop screens.',
                        '**Dynamic Rendering**: Generate and update interface components dynamically using JavaScript data.',
                        '**Design System**: Use CSS variables, reusable components, animations, and utility styles for consistent UI.',
                        '**SPA-like Navigation**: Maintain a consistent application experience across multiple HTML pages.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/LearnSphere.git\ncd LearnSphere',
                    type: 'code'
                },

                {
                    title: 'Open the Project',
                    code: 'Open index.html in any modern browser such as Chrome, Firefox, or Edge.',
                    type: 'code'
                },

                {
                    title: 'Run with Local Server (Recommended)',
                    code: 'python -m http.server 8000\n# Then open http://localhost:8000',
                    type: 'code'
                },

                {
                    title: 'Demo Credentials',
                    code: 'Student:\nEmail: arjun@email.com\nPassword: 123456\n\nAdmin:\nEmail: admin@learnsphere.com\nPassword: admin123',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Managing User Authentication Without a Backend',
                    solution: 'Implemented browser-based session management using sessionStorage to maintain login state and differentiate between student and administrator roles.'
                },

                {
                    problem: 'Tracking Course and Lesson Progress',
                    solution: 'Built JavaScript-based progress tracking that records lesson completion and calculates course completion percentages dynamically.'
                },

                {
                    problem: 'Implementing Interactive Learning Features',
                    solution: 'Developed a client-side quiz engine capable of handling multiple-choice questions, calculating scores, and providing immediate feedback to learners.'
                },

                {
                    problem: 'Supporting Different User Roles',
                    solution: 'Implemented role-based access and separate student and admin interfaces, allowing each user type to access relevant dashboards and functionality.'
                },

                {
                    problem: 'Maintaining a Responsive User Interface',
                    solution: 'Created a CSS design system using variables, reusable components, responsive layouts, animations, and utility styles to provide a consistent experience across mobile, tablet, and desktop devices.'
                }
            ]
        },
        {
            id: 'project-2',
            slug: 'gym-management-system',
            title: 'Gym Management System',
            description: 'A complete Gym Management System designed to streamline gym operations including member management, trainer management, memberships, attendance, payments, workouts, diet plans, and fitness progress.',
            longDescription: 'The Gym Management System is a comprehensive fitness management platform designed to simplify day-to-day gym operations. It provides dedicated modules for administrators, members, and trainers, allowing gyms to manage memberships, attendance, payments, workout plans, diet plans, classes, equipment, notifications, and reports from a centralized system. The platform also includes advanced concepts such as QR-based attendance, AI-powered workout and diet recommendations, analytics dashboards, responsive design, and dark mode.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript',
                'React.js',
                'Tailwind CSS',
                'Bootstrap',
                'PHP / Node.js / Django',
                'MySQL / MongoDB / PostgreSQL'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Postman',
                'XAMPP / WAMP'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/GYM-Management.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Web Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Multi-Role Gym Management',
                'Attendance & Payment Management',
                'Workout & Diet Tracking',
                'AI Fitness Recommendations'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Admin Management',
                    items: [
                        '**Admin Dashboard**: Monitor gym activity through analytics, statistics, and centralized management tools.',
                        '**Member Management**: Manage member registrations, profiles, memberships, and account information.',
                        '**Trainer Management**: Add, manage, and assign trainers to gym members.',
                        '**Membership Plans**: Create and manage different membership plans and subscription information.',
                        '**Payment & Billing**: Track membership payments, fees, and billing information.',
                        '**Attendance Management**: Monitor and manage member attendance records.',
                        '**Equipment Management**: Keep track of gym equipment and related information.',
                        '**Reports & Analytics**: Generate useful reports and analyze gym operations and performance.',
                        '**Class & Session Management**: Organize classes, training sessions, and member bookings.',
                        '**Notifications**: Provide notifications for important gym activities and updates.'
                    ]
                },

                {
                    title: 'Member Experience',
                    items: [
                        '**Registration & Login**: Allow members to create accounts and securely access their profiles.',
                        '**Profile Management**: View and manage personal member information.',
                        '**Workout Tracking**: Track assigned workouts and fitness activities.',
                        '**Diet Plan Tracking**: Follow personalized diet recommendations and nutrition plans.',
                        '**Attendance History**: View previous gym attendance records.',
                        '**Online Fee Payment**: Support digital membership fee and payment workflows.',
                        '**Progress Tracking**: Monitor fitness progress and improvements over time.',
                        '**Fitness Goals**: Set and track individual fitness goals.'
                    ]
                },

                {
                    title: 'Trainer Management',
                    items: [
                        '**Assigned Members**: Trainers can view and manage their assigned gym members.',
                        '**Workout Creation**: Create and assign customized workout plans.',
                        '**Session Management**: Manage training sessions and schedules.',
                        '**Attendance Overview**: Monitor attendance information for assigned members.',
                        '**Diet Recommendations**: Provide diet and nutrition recommendations.',
                        '**Progress Updates**: Track and update member fitness progress.'
                    ]
                },

                {
                    title: 'Advanced Features',
                    items: [
                        '**QR Code Attendance**: Provide a faster attendance workflow using QR-based check-ins.',
                        '**Face Recognition Attendance**: Support automated attendance through facial recognition concepts.',
                        '**AI Workout Suggestions**: Provide intelligent workout recommendations based on fitness requirements.',
                        '**AI Diet Recommendations**: Generate personalized diet and nutrition suggestions.',
                        '**Real-Time Dashboard**: Present gym activity and statistics through dynamic dashboard interfaces.',
                        '**Responsive Design**: Provide an interface optimized for desktop, tablet, and mobile screens.',
                        '**Dark Mode**: Offer an alternative dark-themed interface for improved usability.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/GYM-Management.git\ncd GYM-Management',
                    type: 'code'
                },

                {
                    title: 'Install Dependencies',
                    code: 'npm install',
                    type: 'code'
                },

                {
                    title: 'Run Project',
                    code: 'npm start',
                    type: 'code'
                },

                {
                    title: 'Development Tools',
                    code: 'Use VS Code for development.\nUse Postman for API testing when backend/API services are configured.\nUse XAMPP/WAMP when running a PHP-based local environment.',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Managing Multiple User Roles',
                    solution: 'Designed separate Admin, Member, and Trainer modules so each type of user can access functionality relevant to their responsibilities.'
                },

                {
                    problem: 'Managing Gym Attendance',
                    solution: 'Implemented attendance management with support for QR-based attendance and explored automated attendance concepts such as face recognition.'
                },

                {
                    problem: 'Centralizing Gym Operations',
                    solution: 'Created a centralized management system covering members, trainers, memberships, payments, workouts, diet plans, classes, equipment, notifications, and reports.'
                },

                {
                    problem: 'Tracking Member Fitness Progress',
                    solution: 'Integrated workout tracking, diet plans, fitness goals, attendance history, and progress monitoring to provide a more complete member-management experience.'
                },

                {
                    problem: 'Providing Actionable Gym Analytics',
                    solution: 'Added dashboard analytics and reporting functionality to help administrators monitor members, payments, attendance, and overall gym operations.'
                },

                {
                    problem: 'Creating a Modern User Experience',
                    solution: 'Implemented responsive layouts, professional dashboard interfaces, dark mode, and dynamic UI components to make the system accessible across different screen sizes.'
                }
            ]
        },

        {
            id: 'project-3',
            slug: 'codeline-internship-management-system',
            title: 'Codeline — Internship Management System',
            description: 'Codeline is a web-based Internship Management System designed to automate intern task assignment, submission tracking, performance evaluation, communication, and administrative workflows.',
            longDescription: 'Codeline is a centralized Internship Management System developed to simplify and automate the management of interns. The platform provides dedicated Admin and Intern panels where administrators can create batches, assign daily tasks, review submissions, provide grades and remarks, monitor performance analytics, and communicate with interns. Interns can view assigned tasks, submit GitHub or deployed project links, track their task history and rankings, request edit permissions, manage their profiles, and communicate with administrators. The system uses Google Apps Script as its backend and Google Sheets as its database.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Google Apps Script',
                'Google Sheets',
                'GET / POST APIs'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Google Apps Script',
                'Google Sheets'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Codeline-Website.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Web Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Complete Internship Management',
                'Task Assignment & Evaluation',
                'Performance Ranking & Analytics',
                'Admin–Intern Communication'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Admin Management',
                    items: [
                        '**Admin Dashboard**: Monitor internship activity through real-time statistics, performance metrics, and analytics.',
                        '**Intern Management**: Add, manage, and monitor interns throughout their internship lifecycle.',
                        '**Batch Management**: Create internship batches and organize interns into groups with support for batch-wise task assignments.',
                        '**Task Assignment**: Assign daily tasks to entire batches or individual interns.',
                        '**Submission Review**: Review submitted GitHub repositories and deployed project links.',
                        '**Task Evaluation**: Approve or reject submissions while providing grades and feedback remarks.',
                        '**Incomplete Intern Tracking**: Identify interns with incomplete or pending tasks.',
                        '**Edit Permission Management**: Review and approve requests from interns who need permission to modify submissions.',
                        '**Intern Communication**: Communicate directly with interns through the integrated chat system.'
                    ]
                },

                {
                    title: 'Intern Experience',
                    items: [
                        '**Daily Tasks**: View tasks assigned by administrators and track daily internship activities.',
                        '**Task Submission**: Submit GitHub repository links or deployed project URLs for evaluation.',
                        '**Task History**: Review previously submitted tasks along with grades and evaluation status.',
                        '**Performance Tracking**: Monitor individual performance, rankings, completed tasks, and progress.',
                        '**Edit Requests**: Request permission to edit or resubmit previously submitted work.',
                        '**Profile Management**: Update personal information, bio, and profile avatar.',
                        '**Batch Overview**: View other interns within the same internship batch.',
                        '**Activity Heatmap**: Track internship activity using a GitHub-style contribution heatmap.',
                        '**Admin Chat**: Communicate directly with administrators through the platform.'
                    ]
                },

                {
                    title: 'Authentication & Security',
                    items: [
                        '**Admin Authentication**: Dedicated login functionality for administrators.',
                        '**Intern Authentication**: Separate authentication flow for interns.',
                        '**First-Time Password Setup**: Allow newly registered interns to configure their initial password.',
                        '**OTP Password Reset**: Provide OTP-based password recovery functionality.',
                        '**Session-Based Authentication**: Maintain authenticated user sessions throughout the application.',
                        '**Permission-Based Actions**: Restrict editing and administrative operations according to user permissions.'
                    ]
                },

                {
                    title: 'Performance & Gamification',
                    items: [
                        '**Ranking System**: Rank interns based on their completed tasks and overall performance.',
                        '**Achievement Levels**: Provide progression levels including Bronze, Silver, Gold, Platinum, Diamond, and Master.',
                        '**Performance Analytics**: Display average grades, approval percentages, active interns, and top performers.',
                        '**Activity Heatmap**: Visualize intern activity using a GitHub-inspired contribution heatmap.',
                        '**Real-Time Insights**: Give administrators a centralized overview of internship performance and activity.'
                    ]
                },

                {
                    title: 'Communication & UI',
                    items: [
                        '**Admin–Intern Chat**: Provide direct communication between administrators and interns.',
                        '**Automatic Message Cleanup**: Chat messages are automatically deleted after 48 hours.',
                        '**Responsive Design**: Support desktop, tablet, and mobile screen sizes.',
                        '**Dark Theme**: Provide a modern dark-themed interface.',
                        '**Sidebar Navigation**: Organize application functionality through intuitive sidebar navigation.',
                        '**Smooth Animations**: Add visual transitions and animations for a polished user experience.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Codeline-Website.git\ncd Codeline-Website',
                    type: 'code'
                },

                {
                    title: 'Open Project',
                    code: 'Open index.html in a modern web browser.\nFor local development, use VS Code with a Live Server extension.',
                    type: 'code'
                },

                {
                    title: 'Configure Backend',
                    code: 'Set up the Google Apps Script backend and connect it to the project.\nConfigure the required Google Sheets database and API endpoints.',
                    type: 'code'
                },

                {
                    title: 'Run Application',
                    code: 'Start the frontend using a local development server.\nEnsure the Google Apps Script API is deployed and accessible before using backend-powered features.',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Managing Internship Tasks at Scale',
                    solution: 'Implemented batch-wise and individual task assignment so administrators can efficiently distribute daily tasks to multiple interns while retaining the ability to customize assignments.'
                },

                {
                    problem: 'Tracking Intern Performance',
                    solution: 'Developed a performance tracking system that combines task completion, grades, approval status, rankings, and activity data to provide administrators with clear performance insights.'
                },

                {
                    problem: 'Automating Submission Evaluation',
                    solution: 'Created a centralized submission workflow where interns submit GitHub or deployed links and administrators can review, approve, reject, grade, and provide remarks from the admin panel.'
                },

                {
                    problem: 'Building Authentication Without a Traditional Backend',
                    solution: 'Used Google Apps Script as the application backend with session-based authentication, first-time password setup, and OTP-based password recovery.'
                },

                {
                    problem: 'Maintaining Communication Between Admins and Interns',
                    solution: 'Integrated an Admin–Intern chat system with automatic message cleanup after 48 hours to provide lightweight communication while limiting unnecessary data retention.'
                },

                {
                    problem: 'Making Internship Progress Engaging',
                    solution: 'Implemented a gamified ranking system with multiple achievement levels and a GitHub-style activity heatmap to encourage consistent participation and make progress visually understandable.'
                },

                {
                    problem: 'Providing Actionable Administrative Insights',
                    solution: 'Built an analytics dashboard displaying total interns, active versus inactive users, approval percentage, average grades, and top performers to reduce manual monitoring.'
                }
            ]
        },

        {
            id: 'project-4',
            slug: 'personal-portfolio-website',
            title: 'Personal Portfolio Website',
            description: 'A modern and responsive personal portfolio website built to showcase professional skills, projects, education, experience, and personal profile through an interactive user interface.',
            longDescription: 'The Personal Portfolio Website is a modern, responsive, and interactive portfolio designed to present my professional journey as a Full Stack Developer. Built from scratch using HTML5, CSS3, and Vanilla JavaScript, the website includes dedicated sections for profile, about, resume, skills, services, projects, and contact information. It features a dark-themed interface, smooth animations, project filtering, modal-based project details, responsive sidebar navigation, and client-side form validation.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Ionicons',
                'Google Fonts (Poppins)'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Portfolio.git',
            demoUrl: 'https://adityakamble69.github.io/Portfolio/',

            startDate: '2026-05-15',
            role: 'Web Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Responsive Personal Portfolio',
                'Interactive Project Showcase',
                'Dark Theme & Smooth Animations',
                'Dynamic Navigation & Filtering'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Profile & About',
                    items: [
                        '**Profile Section**: Present personal introduction, contact information, location, and social media links.',
                        '**About Section**: Provide a professional summary, technical interests, skills, and services.',
                        '**Services Showcase**: Highlight the development and technical services offered.'
                    ]
                },

                {
                    title: 'Resume & Professional Profile',
                    items: [
                        '**Education Timeline**: Display academic background and educational milestones.',
                        '**Experience Section**: Showcase professional experience and relevant career details.',
                        '**Skills Visualization**: Present technical skills using visual progress indicators.',
                        '**Professional Overview**: Combine education, experience, and skills into a centralized resume section.'
                    ]
                },

                {
                    title: 'Portfolio & Projects',
                    items: [
                        '**Project Showcase**: Display completed projects with relevant information and visual assets.',
                        '**Category Filtering**: Filter projects between Web Design and Web Development categories.',
                        '**Live Project Links**: Provide direct access to deployed projects.',
                        '**Modal System**: Display additional project information through interactive modal popups.'
                    ]
                },

                {
                    title: 'UI, UX & Interactivity',
                    items: [
                        '**Dark Theme**: Provide a modern dark-themed visual experience.',
                        '**Responsive Design**: Adapt the interface for desktop, tablet, and mobile devices.',
                        '**Sidebar Navigation**: Provide convenient navigation between portfolio sections, including a mobile-friendly sidebar.',
                        '**Smooth Animations**: Add transitions and animations to improve the overall browsing experience.',
                        '**SPA-like Navigation**: Switch between portfolio sections dynamically without requiring a traditional multi-page workflow.',
                        '**Interactive UI**: Use JavaScript to control navigation, modals, filtering, and other interface interactions.'
                    ]
                },

                {
                    title: 'Contact & Validation',
                    items: [
                        '**Contact Form**: Provide visitors with a dedicated form for getting in touch.',
                        '**Form Validation**: Validate user input on the client side using JavaScript and the browser checkValidity() API.',
                        '**User-Friendly Interface**: Provide clear form interactions and feedback for visitors.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Portfolio.git\ncd Portfolio',
                    type: 'code'
                },

                {
                    title: 'Open Project',
                    code: 'Open index.html in a modern web browser.',
                    type: 'code'
                },

                {
                    title: 'Run with Live Server (Recommended)',
                    code: 'Open the project in VS Code.\nStart the project using the Live Server extension.\nThen open the generated local URL in your browser.',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://adityakamble69.github.io/Portfolio/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Creating a Professional Portfolio Without a Framework',
                    solution: 'Built the complete portfolio interface from scratch using semantic HTML, custom CSS, and Vanilla JavaScript while maintaining a reusable and organized structure.'
                },

                {
                    problem: 'Supporting Multiple Screen Sizes',
                    solution: 'Implemented responsive CSS layouts and a mobile sidebar navigation system to provide a consistent experience across desktop, tablet, and mobile devices.'
                },

                {
                    problem: 'Creating Interactive Project Discovery',
                    solution: 'Developed a JavaScript-based project filtering system that allows visitors to quickly switch between Web Design and Web Development projects.'
                },

                {
                    problem: 'Managing SPA-like Navigation',
                    solution: 'Implemented dynamic JavaScript navigation between portfolio sections to create a smooth single-page application-like browsing experience.'
                },

                {
                    problem: 'Presenting Detailed Project Information',
                    solution: 'Created a reusable modal popup system that allows additional project information to be displayed without navigating away from the portfolio.'
                },

                {
                    problem: 'Building a Modern Visual Experience',
                    solution: 'Combined a dark-themed design, Poppins typography, Ionicons, custom CSS styling, transitions, and animations to create a modern developer-focused portfolio.'
                },

                {
                    problem: 'Validating Contact Form Input',
                    solution: 'Implemented client-side form validation using JavaScript and the browser checkValidity() API to prevent invalid form submissions.'
                }
            ]
        },
        {
            id: 'project-5',
            slug: 'arcocafe-cafe-website',
            title: 'ArcoCafe — Café Website',
            description: 'ArcoCafe is a modern and responsive café website designed to showcase the café, menu, gallery, online ordering, and table reservation experience.',
            longDescription: 'ArcoCafe is a modern café website built with HTML5, CSS3, and Vanilla JavaScript. The project provides a complete digital presence for a café with dedicated pages for the home experience, menu, image gallery, online ordering, and table reservations. The interface focuses on an attractive café-oriented design, responsive layouts, interactive elements, and a smooth browsing experience across different devices.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Responsive Web Design'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/ArcoCafe.git',
            demoUrl: 'https://arco-cafe.vercel.app/',

            startDate: '2026-05-15',
            role: 'Web Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Modern Café Website',
                'Interactive Menu & Ordering',
                'Table Reservation System',
                'Responsive Gallery Experience'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Café Experience',
                    items: [
                        '**Modern Homepage**: Present the café brand, atmosphere, offerings, and key actions through an engaging landing page.',
                        '**Responsive Layout**: Provide a consistent browsing experience across desktop, tablet, and mobile devices.',
                        '**Navigation System**: Connect the major café experiences through dedicated pages for menu, gallery, ordering, and reservations.'
                    ]
                },

                {
                    title: 'Menu & Ordering',
                    items: [
                        '**Digital Menu**: Allow customers to browse available food and beverage offerings.',
                        '**Order Page**: Provide a dedicated interface for customers to select items and place an order.',
                        '**Interactive Ordering Flow**: Use JavaScript to handle client-side interactions within the ordering experience.',
                        '**User-Friendly Interface**: Organize menu and ordering content in a visually appealing café-oriented layout.'
                    ]
                },

                {
                    title: 'Reservation System',
                    items: [
                        '**Table Reservations**: Provide customers with a dedicated reservation page for booking a table.',
                        '**Reservation Form**: Collect the information required to process a customer reservation.',
                        '**Interactive Form Handling**: Use JavaScript to manage reservation-related interactions and user input.'
                    ]
                },

                {
                    title: 'Gallery & Visual Experience',
                    items: [
                        '**Café Gallery**: Showcase café interiors, food, beverages, and atmosphere through a dedicated gallery page.',
                        '**Visual Presentation**: Use imagery to strengthen the café brand and provide visitors with a preview of the experience.',
                        '**Responsive Gallery**: Adapt the visual content for different screen sizes.'
                    ]
                },

                {
                    title: 'UI & Frontend Development',
                    items: [
                        '**Vanilla JavaScript**: Implement interactive functionality without relying on a frontend framework.',
                        '**Custom CSS Design**: Create the visual identity and responsive layouts using a dedicated stylesheet.',
                        '**Multi-Page Architecture**: Organize different café experiences into separate HTML pages.',
                        '**Responsive Design**: Ensure the website remains usable and visually consistent across devices.',
                        '**Interactive Components**: Use JavaScript to enhance forms, ordering interactions, and other client-side functionality.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/ArcoCafe.git\ncd ArcoCafe',
                    type: 'code'
                },

                {
                    title: 'Open Project',
                    code: 'Open index.html in a modern web browser.',
                    type: 'code'
                },

                {
                    title: 'Run with Live Server',
                    code: 'Open the project in VS Code.\nStart the project using the Live Server extension.\nThen open the generated local URL in your browser.',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://arco-cafe.vercel.app/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Creating a Complete Digital Presence for a Café',
                    solution: 'Organized the website into dedicated home, menu, gallery, ordering, and reservation pages so customers can access the most important café services from a single platform.'
                },

                {
                    problem: 'Designing an Attractive Food & Beverage Experience',
                    solution: 'Used custom CSS layouts and visual content to create a café-focused interface that emphasizes menu items, atmosphere, and brand presentation.'
                },

                {
                    problem: 'Implementing Ordering Interactions',
                    solution: 'Used Vanilla JavaScript to handle client-side ordering interactions and provide customers with an intuitive way to select and manage items.'
                },

                {
                    problem: 'Handling Table Reservations',
                    solution: 'Created a dedicated reservation interface with structured customer input and JavaScript-powered interactions for a smoother booking experience.'
                },

                {
                    problem: 'Presenting Café Visuals Effectively',
                    solution: 'Developed a dedicated gallery page to showcase the café environment, food, and beverages while maintaining responsive layouts across screen sizes.'
                },

                {
                    problem: 'Maintaining Responsive Design Without a Framework',
                    solution: 'Implemented responsive layouts using custom HTML and CSS rather than depending on a frontend framework, keeping the project lightweight and straightforward to maintain.'
                }
            ]
        },
        {
            id: 'project-6',
            slug: 'beacon-website',
            title: 'Beacon — Developer-Focused Website',
            description: 'Beacon is a modern web platform designed to present and demonstrate a powerful developer-oriented product through dedicated feature, integration, security, setup, and tracking experiences.',
            longDescription: 'Beacon is a modern multi-page website built with HTML5, CSS3, and Vanilla JavaScript. The project provides a polished product experience with dedicated pages covering core features such as citations, integrations, security, setup, and tracking. It also includes a dedicated demo page, custom 404 page, responsive layouts, interactive JavaScript functionality, and a production deployment on Vercel.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Responsive Web Design'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Beacon-Website.git',
            demoUrl: 'https://beacon-website-five.vercel.app/',

            startDate: '2026-05-15',
            role: 'Web Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Modern Product Website',
                'Feature-Based Documentation',
                'Interactive Demo Experience',
                'Responsive Multi-Page Design'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Core Product Experience',
                    items: [
                        '**Landing Page**: Introduce Beacon through a dedicated homepage designed to communicate the product and its primary capabilities.',
                        '**Demo Experience**: Provide a dedicated demo page for showcasing the product functionality.',
                        '**Feature Navigation**: Organize product information into focused pages for different capabilities and use cases.',
                        '**Responsive Interface**: Provide a consistent experience across desktop, tablet, and mobile screen sizes.'
                    ]
                },

                {
                    title: 'Feature Documentation',
                    items: [
                        '**Citation Features**: Provide a dedicated page explaining and presenting Beacon citation-related functionality.',
                        '**Integration Features**: Showcase available integrations and how the platform can connect with external systems or services.',
                        '**Security Features**: Present security-focused capabilities and product considerations.',
                        '**Setup Guide**: Provide dedicated setup and configuration information for getting started with Beacon.',
                        '**Tracking Features**: Explain tracking-related capabilities through a dedicated feature page.'
                    ]
                },

                {
                    title: 'Navigation & User Experience',
                    items: [
                        '**Multi-Page Architecture**: Separate major product capabilities into dedicated HTML pages for clear navigation.',
                        '**Interactive Navigation**: Use JavaScript to provide dynamic user interactions throughout the website.',
                        '**Consistent Design System**: Maintain consistent styling, layouts, typography, and components across pages.',
                        '**Responsive Layouts**: Adapt content and navigation for different screen sizes.',
                        '**Product-Oriented UX**: Structure content around features, benefits, setup, integrations, and demonstrations.'
                    ]
                },

                {
                    title: 'Demo & Error Handling',
                    items: [
                        '**Interactive Demo Page**: Include a dedicated demo experience for presenting Beacon functionality.',
                        '**Custom 404 Page**: Provide a dedicated error page when users navigate to unavailable routes.',
                        '**Feature-Specific Pages**: Allow visitors to explore individual capabilities without overwhelming the main landing page.',
                        '**Visual Product Presentation**: Use structured sections and interactive elements to make technical features easier to understand.'
                    ]
                },

                {
                    title: 'Deployment',
                    items: [
                        '**GitHub Integration**: Maintain the complete source code through a public GitHub repository.',
                        '**Vercel Deployment**: Deploy the production website using Vercel.',
                        '**Static Hosting**: Deliver the HTML, CSS, and JavaScript application without requiring a complex server-side runtime.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Beacon-Website.git\ncd Beacon-Website',
                    type: 'code'
                },

                {
                    title: 'Open Project',
                    code: 'Open index.html in a modern web browser.',
                    type: 'code'
                },

                {
                    title: 'Run with Live Server',
                    code: 'Open the project in VS Code.\nStart the project using the Live Server extension.\nThen open the generated local URL in your browser.',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://beacon-website-five.vercel.app/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Presenting a Technical Product Clearly',
                    solution: 'Organized the website into dedicated feature pages covering citations, integrations, security, setup, and tracking so visitors can explore individual capabilities without navigating a complex interface.'
                },

                {
                    problem: 'Creating a Consistent Multi-Page Experience',
                    solution: 'Used shared HTML, CSS, and JavaScript patterns to maintain consistent navigation, visual styling, layouts, and interactions across the different pages.'
                },

                {
                    problem: 'Explaining Complex Features',
                    solution: 'Separated technical capabilities into focused sections and dedicated pages, making product functionality easier to understand and explore.'
                },

                {
                    problem: 'Building an Interactive Product Demo',
                    solution: 'Created a dedicated demo page and used Vanilla JavaScript to add interactive behavior without relying on a frontend framework.'
                },

                {
                    problem: 'Handling Invalid Routes',
                    solution: 'Implemented a custom 404 page to provide users with a controlled and branded experience when accessing unavailable pages.'
                },

                {
                    problem: 'Supporting Different Screen Sizes',
                    solution: 'Implemented responsive CSS layouts so the website remains usable and visually consistent across desktop, tablet, and mobile devices.'
                },

                {
                    problem: 'Deploying a Lightweight Static Website',
                    solution: 'Kept the frontend framework-free and deployed the static HTML, CSS, and JavaScript application through Vercel for straightforward production hosting.'
                }
            ]
        },
        {
            id: 'project-7',
            slug: 'cinematic-hero',
            title: 'Cinematic Hero — Interactive Landing Page',
            description: 'Cinematic Hero is a visually immersive React landing page focused on creating a cinematic, modern, and engaging hero experience for the web.',
            longDescription: 'Cinematic Hero is a modern frontend project built with React and Vite, designed around a cinematic hero experience. The project focuses on creating an immersive first impression through visually rich layouts, interactive UI elements, smooth animations, and a polished responsive design. The application uses a component-based React architecture and Vite for a fast development and production workflow.',

            techStack: [
                'React',
                'JavaScript (ES6+)',
                'Vite',
                'HTML5',
                'CSS3'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Vite',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Cinematic-Hero.git',
            demoUrl: 'https://cinematic-hero-tawny.vercel.app/',

            startDate: '2026-05-15',
            role: 'Frontend Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Cinematic Hero Experience',
                'React Component Architecture',
                'Modern Interactive UI',
                'Responsive Design'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Cinematic Hero Experience',
                    items: [
                        '**Immersive Hero Section**: Create a visually engaging hero area designed to immediately capture the visitor’s attention.',
                        '**Modern Visual Design**: Combine typography, imagery, spacing, colors, and layered UI elements to create a cinematic visual identity.',
                        '**Interactive Presentation**: Use React-powered interactions to make the hero experience more engaging than a traditional static landing page.'
                    ]
                },

                {
                    title: 'React Architecture',
                    items: [
                        '**Component-Based UI**: Build the interface using reusable React components for better organization and maintainability.',
                        '**Modern React Setup**: Use the Vite-powered React development environment for fast development and optimized builds.',
                        '**Dynamic Rendering**: Manage UI behavior and interactions through React rather than relying entirely on static HTML.'
                    ]
                },

                {
                    title: 'UI & User Experience',
                    items: [
                        '**Responsive Design**: Adapt the interface to different desktop, tablet, and mobile screen sizes.',
                        '**Smooth Interactions**: Add polished transitions and interactive states to improve the overall browsing experience.',
                        '**Visual Hierarchy**: Use structured layouts and typography to guide visitors toward the most important content and actions.',
                        '**Modern Interface**: Focus on a clean, premium, and visually driven frontend experience.'
                    ]
                },

                {
                    title: 'Performance & Development',
                    items: [
                        '**Vite Development Environment**: Use Vite for fast local development and efficient production builds.',
                        '**Hot Module Replacement**: Take advantage of Vite HMR for rapid frontend development and instant feedback.',
                        '**Component Reusability**: Structure the React application around reusable UI components.',
                        '**Linting**: Use Oxlint configuration to help maintain code quality during development.'
                    ]
                },

                {
                    title: 'Deployment',
                    items: [
                        '**Production Deployment**: Deploy the completed React application to Vercel.',
                        '**GitHub Integration**: Maintain the source code in a public GitHub repository.',
                        '**Modern Frontend Hosting**: Use Vercel to provide a fast and accessible production deployment.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Cinematic-Hero.git\ncd Cinematic-Hero',
                    type: 'code'
                },

                {
                    title: 'Install Dependencies',
                    code: 'npm install',
                    type: 'code'
                },

                {
                    title: 'Start Development Server',
                    code: 'npm run dev',
                    type: 'code'
                },

                {
                    title: 'Production Build',
                    code: 'npm run build\nnpm run preview',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://cinematic-hero-tawny.vercel.app/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Creating an Engaging First Impression',
                    solution: 'Focused the interface around a cinematic hero experience with strong visual hierarchy, immersive presentation, and interactive frontend elements.'
                },

                {
                    problem: 'Building a Maintainable Frontend',
                    solution: 'Used React components to break the interface into reusable and manageable pieces rather than implementing the entire experience as a single static page.'
                },

                {
                    problem: 'Delivering a Modern Development Workflow',
                    solution: 'Used Vite to provide fast development startup, hot module replacement, and an efficient production build workflow.'
                },

                {
                    problem: 'Maintaining Responsive Visual Quality',
                    solution: 'Implemented responsive frontend layouts so the cinematic presentation remains effective across desktop, tablet, and mobile screen sizes.'
                },

                {
                    problem: 'Balancing Visual Design and Performance',
                    solution: 'Structured the application as a lightweight React frontend and used Vites optimized build process to prepare the project for production deployment.'
                },

                {
                    problem: 'Deploying the React Application',
                    solution: 'Configured the project for production deployment on Vercel and connected the hosted application with the GitHub-based development workflow.'
                }
            ]
        },
        {
            id: 'project-8',
            slug: 'ai-medical-report-analyzer',
            title: 'AI Medical Report Analyzer',
            description: 'AI Medical Report Analyzer is a full-stack healthcare application that uses OCR and Generative AI to extract, analyze, and explain information from medical reports in a simple and accessible format.',
            longDescription: 'AI Medical Report Analyzer is a full-stack AI-powered healthcare application designed to help users understand complex medical reports. Users can upload PDF or image-based reports, extract their contents using Tesseract OCR, and send the extracted information to Google Gemini for AI-powered analysis. The application combines a modern React and TypeScript frontend with a Flask backend and provides dedicated APIs for report uploads, OCR processing, AI analysis, authentication placeholders, and backend health monitoring. The system is intended for informational purposes and is not a medical diagnostic tool.',

            techStack: [
                'React',
                'TypeScript',
                'Tailwind CSS',
                'Vite',
                'Flask',
                'Python',
                'Tesseract OCR',
                'Google Gemini AI',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Vite',
                'Postman',
                'Tesseract OCR',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/AI-Medical-Report-Analyzer.git',
            demoUrl: 'https://ai-medical-report-analyzer-eta.vercel.app/',

            startDate: '2026-05-15',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'AI-Powered Medical Report Analysis',
                'OCR-Based Report Extraction',
                'Gemini AI Integration',
                'React + Flask Full-Stack Architecture'
            ],

            category: 'AI & Machine Learning',

            features: [
                {
                    title: 'Medical Report Processing',
                    items: [
                        '**PDF & Image Upload**: Allow users to upload medical reports in supported PDF and image formats.',
                        '**OCR Text Extraction**: Use Tesseract OCR to extract readable text from uploaded report images and documents.',
                        '**Report Processing Pipeline**: Connect file upload, OCR extraction, and AI analysis into a unified workflow.',
                        '**Extracted Text Analysis**: Send the processed report content to the AI analysis service for interpretation.'
                    ]
                },

                {
                    title: 'AI-Powered Analysis',
                    items: [
                        '**Google Gemini Integration**: Use Gemini AI to analyze extracted medical report information.',
                        '**Report Explanation**: Transform complex report information into easier-to-understand insights.',
                        '**AI-Assisted Interpretation**: Provide informational analysis based on the content extracted from the uploaded report.',
                        '**Structured Analysis Workflow**: Separate OCR extraction from AI analysis through dedicated backend API endpoints.'
                    ]
                },

                {
                    title: 'Frontend Experience',
                    items: [
                        '**React Interface**: Build the application using a modern component-based React architecture.',
                        '**TypeScript**: Use static typing to improve frontend code organization and reliability.',
                        '**Tailwind CSS**: Create a modern and responsive user interface using utility-first styling.',
                        '**Vite**: Use Vite for fast development and optimized frontend builds.',
                        '**Responsive Experience**: Design the interface to work across different screen sizes.'
                    ]
                },

                {
                    title: 'Backend & API',
                    items: [
                        '**Flask Backend**: Provide a lightweight Python backend for report processing and AI integration.',
                        '**Upload API**: Expose `POST /api/upload/` for uploading reports and returning extracted OCR text.',
                        '**Analysis API**: Expose `POST /api/analysis/` for sending extracted report text to the AI analysis system.',
                        '**Authentication API**: Provide register and login endpoints as placeholders for future authentication integration.',
                        '**Health Check**: Provide `GET /api/health` to verify backend availability.',
                        '**Environment Configuration**: Store the Gemini API key through environment configuration rather than hard-coding credentials.'
                    ]
                },

                {
                    title: 'Development & Architecture',
                    items: [
                        '**Full-Stack Separation**: Maintain independent `frontend` and `backend` applications for clearer architecture and development.',
                        '**REST-Based Communication**: Connect the React frontend with the Flask backend through HTTP APIs.',
                        '**OCR Integration**: Combine Tesseract with the backend to process image-based medical documents.',
                        '**AI Integration**: Connect the extracted report text with Google Gemini for intelligent analysis.',
                        '**Production Deployment**: Deploy the frontend application through Vercel.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/AI-Medical-Report-Analyzer.git\ncd AI-Medical-Report-Analyzer',
                    type: 'code'
                },

                {
                    title: 'Frontend Setup',
                    code: 'cd frontend\nnpm install\nnpm run dev',
                    type: 'code'
                },

                {
                    title: 'Backend Setup',
                    code: 'cd backend\npython -m venv venv\n\n# Windows\nvenv\\Scripts\\activate\n\n# macOS / Linux\nsource venv/bin/activate\n\npip install -r requirements.txt',
                    type: 'code'
                },

                {
                    title: 'Environment Configuration',
                    code: 'cp .env.example .env\n# Add your GEMINI_API_KEY to the .env file',
                    type: 'code'
                },

                {
                    title: 'Run Backend',
                    code: 'cd backend\npython app.py\n# Backend runs at http://localhost:5000',
                    type: 'code'
                },

                {
                    title: 'Install Tesseract OCR',
                    code: '# Windows: Install Tesseract OCR from the UB Mannheim distribution\n# macOS:\nbrew install tesseract\n# Linux:\nsudo apt install tesseract-ocr',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://ai-medical-report-analyzer-eta.vercel.app/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Extracting Text From Medical Documents',
                    solution: 'Integrated Tesseract OCR into the Flask backend to extract text from uploaded image-based reports and documents before sending the content for AI analysis.'
                },

                {
                    problem: 'Processing Different Report Formats',
                    solution: 'Created a report upload API capable of accepting PDF and image files and routing the uploaded content through the appropriate extraction workflow.'
                },

                {
                    problem: 'Connecting OCR With Generative AI',
                    solution: 'Separated the OCR and AI processing stages into dedicated APIs, allowing extracted report text to be passed to Google Gemini for subsequent analysis.'
                },

                {
                    problem: 'Building a Full-Stack AI Workflow',
                    solution: 'Developed a React and TypeScript frontend alongside a Flask Python backend and connected both layers through REST API endpoints.'
                },

                {
                    problem: 'Secure AI Configuration',
                    solution: 'Configured the Gemini API key through environment variables instead of exposing the credential directly in the application source code.'
                },

                {
                    problem: 'Handling Healthcare-Related Information Responsibly',
                    solution: 'Positioned the AI output as informational analysis rather than medical diagnosis, while keeping authentication and database functionality as placeholders for a future production-ready implementation.'
                },

                {
                    problem: 'Creating a Modern Frontend for a Technical Workflow',
                    solution: 'Used React, TypeScript, Tailwind CSS, and Vite to build a structured and responsive interface around the report upload, extraction, and analysis workflow.'
                }
            ]
        },
        {
            id: 'project-9',
            slug: 'student-attendance-app',
            title: 'Student Attendance App — Smart Attendance Management System',

            description: 'A mobile-first digital attendance management system for colleges, schools, and coaching institutes with role-based access, smart attendance methods, leave management, reports, notifications, and academic management.',

            longDescription: 'Student Attendance App is a full-stack, mobile-first attendance management system designed to replace traditional paper-based attendance registers. The platform provides dedicated workflows for Admins, Teachers, and Students, with support for manual attendance as well as QR code, GPS geofencing, and OTP-based attendance. It also includes leave management, subject-wise attendance reports, class and subject administration, JWT authentication, cloud media storage, push notifications, and a Node.js REST API backed by MySQL.',

            techStack: [
                'React Native',
                'TypeScript',
                'Node.js',
                'Express.js',
                'MySQL',
                'JWT',
                'Cloudinary',
                'Firebase Cloud Messaging',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Node.js',
                'MySQL',
                'Android Studio',
                'Postman'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Student-Attendance-App.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Multi-Role Attendance Management',
                'QR, GPS & OTP Attendance',
                'Real-Time Notifications',
                'Attendance Analytics & Reports'
            ],

            category: 'Mobile & Full Stack Development',

            features: [
                {
                    title: 'Role-Based Management',
                    items: [
                        '**Admin Panel**: Manage students, teachers, classes, divisions, subjects, and teacher assignments.',
                        '**Teacher Panel**: Manage attendance sessions, monitor students, and review attendance records.',
                        '**Student Panel**: View attendance statistics, subject-wise attendance, attendance history, and leave status.',
                        '**Role-Based Navigation**: Provide dedicated application flows and screens based on the authenticated user role.'
                    ]
                },

                {
                    title: 'Smart Attendance',
                    items: [
                        '**Manual Attendance**: Allow teachers to manually mark student attendance.',
                        '**QR Code Attendance**: Support attendance marking through QR-based sessions.',
                        '**GPS Geofencing**: Use location-based validation to restrict attendance to an appropriate physical area.',
                        '**OTP Attendance**: Provide OTP-based attendance verification as an additional attendance method.',
                        '**Attendance Records**: Maintain attendance data for individual students and subjects.'
                    ]
                },

                {
                    title: 'Leave Management',
                    items: [
                        '**Leave Applications**: Allow students to submit leave requests through the application.',
                        '**Approval Workflow**: Enable teachers and administrators to approve or reject leave requests.',
                        '**Leave Status Tracking**: Allow students to monitor the current status of submitted requests.',
                        '**Attendance Integration**: Connect leave information with the broader attendance management workflow.'
                    ]
                },

                {
                    title: 'Reports & Analytics',
                    items: [
                        '**Overall Attendance**: Display an overall attendance percentage for students.',
                        '**Subject-Wise Statistics**: Break attendance information down by individual subjects.',
                        '**Attendance History**: Allow users to review historical attendance records.',
                        '**Exportable Reports**: Support generation and export of attendance reports.',
                        '**Academic Insights**: Provide administrators and teachers with attendance information for monitoring student participation.'
                    ]
                },

                {
                    title: 'Authentication & Security',
                    items: [
                        '**JWT Authentication**: Use access and refresh tokens for authenticated API sessions.',
                        '**Role Guards**: Restrict backend operations according to Admin, Teacher, and Student permissions.',
                        '**Protected APIs**: Secure attendance, user, academic, and management endpoints through authentication middleware.',
                        '**Rate Limiting**: Include backend middleware for controlling excessive API requests.',
                        '**Environment Configuration**: Keep database credentials, JWT secrets, Firebase credentials, and Cloudinary configuration outside the source code.'
                    ]
                },

                {
                    title: 'Notifications & Media',
                    items: [
                        '**Firebase Cloud Messaging**: Send push notifications for attendance and leave-related events.',
                        '**Cloudinary Integration**: Support cloud-based profile photo/media storage.',
                        '**Notification Workflows**: Keep users informed about important attendance and leave status changes.',
                        '**Profile Management**: Support user profile information and media within the application.'
                    ]
                },

                {
                    title: 'Backend Architecture',
                    items: [
                        '**Node.js + Express**: Provide the REST API and application server.',
                        '**MySQL Database**: Store users, academic structures, attendance records, leaves, and related application data.',
                        '**MVC-Style Organization**: Separate controllers, models, routes, middleware, and services for maintainability.',
                        '**Service Layer**: Isolate specialized functionality such as QR generation, OTP handling, geolocation, and report generation.',
                        '**Health Monitoring**: Provide an API health-check endpoint to verify backend availability.'
                    ]
                },

                {
                    title: 'Mobile Application',
                    items: [
                        '**React Native**: Build the cross-platform mobile application using a component-based architecture.',
                        '**TypeScript**: Provide static typing for improved maintainability and development reliability.',
                        '**Shared Components**: Reuse common UI components across Admin, Teacher, Student, and authentication screens.',
                        '**Navigation System**: Provide separate navigation stacks for different user roles.',
                        '**Custom Hooks & Context**: Manage reusable application logic, authentication state, and theme-related functionality.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Student-Attendance-App.git\ncd Student-Attendance-App',
                    type: 'code'
                },

                {
                    title: 'Database Setup',
                    code: 'mysql -u root -p < database/attendance.sql',
                    type: 'code'
                },

                {
                    title: 'Backend Setup',
                    code: 'cd backend\ncp .env.example .env\nnpm install\nnpm run dev',
                    type: 'code'
                },

                {
                    title: 'Backend Environment',
                    code: 'DB_PASSWORD=your_mysql_password\nJWT_ACCESS_SECRET=some_random_string\nJWT_REFRESH_SECRET=another_random_string',
                    type: 'code'
                },

                {
                    title: 'Verify Backend',
                    code: 'GET http://localhost:4000/api/v1/health',
                    type: 'code'
                },

                {
                    title: 'Mobile Setup',
                    code: 'cd mobile\nnpm install\nnpm run android\n# or\nnpm run ios',
                    type: 'code'
                },

                {
                    title: 'Android Emulator Configuration',
                    code: 'Update the API base URL in mobile/services/api.ts:\nhttp://10.0.2.2:4000',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Supporting Multiple User Roles',
                    solution: 'Designed separate Admin, Teacher, and Student workflows with role-based navigation, protected APIs, and permission guards so each user receives the appropriate functionality.'
                },

                {
                    problem: 'Providing Multiple Attendance Methods',
                    solution: 'Implemented an extensible attendance architecture supporting traditional manual marking alongside QR code, GPS geofencing, and OTP-based verification.'
                },

                {
                    problem: 'Preventing Unauthorized Attendance',
                    solution: 'Combined authenticated user sessions with QR, location, and OTP validation mechanisms to provide stronger controls around attendance recording.'
                },

                {
                    problem: 'Managing Academic Structures',
                    solution: 'Created centralized management for classes, divisions, subjects, students, and teacher assignments, allowing attendance records to be associated with the correct academic context.'
                },

                {
                    problem: 'Handling Attendance & Leave Workflows',
                    solution: 'Connected attendance records with student leave applications and approval workflows so teachers and administrators can manage attendance-related activities from a unified platform.'
                },

                {
                    problem: 'Delivering Real-Time User Notifications',
                    solution: 'Integrated Firebase Cloud Messaging to provide push notifications for attendance updates and leave-status changes.'
                },

                {
                    problem: 'Building a Scalable Backend',
                    solution: 'Structured the Node.js and Express backend using controllers, models, routes, middleware, and services, making specialized functionality easier to maintain and extend.'
                },

                {
                    problem: 'Supporting Mobile Development',
                    solution: 'Built the mobile client with React Native and TypeScript, using shared components, role-based navigation, contexts, services, hooks, and utility modules to keep the application organized.'
                }
            ]
        },
        {
            id: 'project-10',
            slug: 'techsprint',
            title: 'TechSprint — Interactive Web Experience',

            description: 'TechSprint is a modern interactive web application built with Svelte and Vite, focused on delivering a fast, component-driven, and visually engaging frontend experience.',

            longDescription: 'TechSprint is a modern frontend web application developed using Svelte and Vite. The project uses Svelte components to create an interactive and maintainable user interface while leveraging Vite for fast development and optimized production builds. The application is organized with dedicated source, public, and documentation directories and is deployed as a production web experience through Vercel.',

            techStack: [
                'Svelte',
                'JavaScript',
                'Vite',
                'HTML5',
                'CSS3'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Vite',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/TechSprint.git',
            demoUrl: 'https://tech-sprint-woad.vercel.app/',

            startDate: '2026-05-15',
            role: 'Frontend Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Svelte Component Architecture',
                'Vite-Powered Development',
                'Interactive User Interface',
                'Responsive Web Experience'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Svelte Frontend',
                    items: [
                        '**Component-Based Architecture**: Build the interface using reusable Svelte components for improved organization and maintainability.',
                        '**Reactive UI**: Use Svelte reactivity to update interface elements efficiently based on application state.',
                        '**Clean Component Structure**: Keep application logic and UI presentation organized inside the `src` directory.',
                        '**Modern Frontend Development**: Use Svelte to create an interactive experience without the overhead of a larger frontend framework.'
                    ]
                },

                {
                    title: 'Development Experience',
                    items: [
                        '**Vite Development Server**: Use Vite for fast local development and rapid feedback during implementation.',
                        '**Hot Module Replacement**: Take advantage of Vites HMR workflow for efficient component development.',
                        '**Fast Production Builds**: Use Vites build system to generate optimized production assets.',
                        '**VS Code Integration**: Use the Svelte VS Code extension and project configuration for improved development and editor support.'
                    ]
                },

                {
                    title: 'User Experience',
                    items: [
                        '**Interactive Interface**: Build dynamic UI behavior using Svelte components and reactive state.',
                        '**Responsive Design**: Structure the application to provide a usable experience across different screen sizes.',
                        '**Modern Visual Experience**: Combine component-based development with custom styling to create a polished frontend.',
                        '**Efficient Navigation & Interaction**: Organize interface functionality into manageable components rather than relying on a monolithic page.'
                    ]
                },

                {
                    title: 'Project Organization',
                    items: [
                        '**Source Directory**: Keep application components and frontend logic organized inside `src`.',
                        '**Public Assets**: Maintain static assets separately inside the `public` directory.',
                        '**Documentation**: Include a dedicated `Docs` directory for project-related documentation.',
                        '**Configuration Files**: Use `svelte.config.js`, `vite.config.js`, and `jsconfig.json` to configure the development environment.'
                    ]
                },

                {
                    title: 'Deployment',
                    items: [
                        '**Production Deployment**: Deploy the Svelte application through Vercel.',
                        '**GitHub Integration**: Maintain the source code in a public GitHub repository.',
                        '**Static Frontend Hosting**: Deliver the compiled frontend through a production-ready hosting platform.',
                        '**Vite Build Pipeline**: Use the Vite production build process before deployment.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/TechSprint.git\ncd TechSprint',
                    type: 'code'
                },

                {
                    title: 'Install Dependencies',
                    code: 'npm install',
                    type: 'code'
                },

                {
                    title: 'Start Development Server',
                    code: 'npm run dev',
                    type: 'code'
                },

                {
                    title: 'Production Build',
                    code: 'npm run build',
                    type: 'code'
                },

                {
                    title: 'Preview Production Build',
                    code: 'npm run preview',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://tech-sprint-woad.vercel.app/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Building an Interactive Frontend Without React',
                    solution: 'Used Sveltes component-based and reactive architecture to create an interactive application while keeping the frontend lightweight and focused.'
                },

                {
                    problem: 'Maintaining Reusable UI Components',
                    solution: 'Organized the application around Svelte components so individual interface elements can be developed, maintained, and reused independently.'
                },

                {
                    problem: 'Creating a Fast Development Workflow',
                    solution: 'Integrated Vite with Svelte to provide fast development startup, hot module replacement, and rapid feedback while building the application.'
                },

                {
                    problem: 'Keeping Project Assets Organized',
                    solution: 'Separated application source code, static assets, and documentation into dedicated directories, making the project easier to navigate and maintain.'
                },

                {
                    problem: 'Preparing the Application for Production',
                    solution: 'Used Vites production build process to compile and optimize the Svelte application before deploying it to Vercel.'
                },

                {
                    problem: 'Delivering a Responsive User Experience',
                    solution: 'Implemented responsive frontend styling and component layouts so the application remains accessible across desktop, tablet, and mobile screen sizes.'
                }
            ]
        },
        {
            id: 'project-11',
            slug: 'web-scrap-browser-automation-scraping-api',
            title: 'Web-Scrap — Browser Automation Scraping API',

            description: 'Web-Scrap is a browser-automation scraping API that accepts a URL and returns a screenshot and/or extracted webpage text using Playwright and a real headless Chromium browser.',

            longDescription: 'Web-Scrap is a Python-based browser automation and web scraping service designed to handle modern JavaScript-heavy websites. Instead of relying only on traditional HTTP requests and HTML parsers, the application uses Playwright with headless Chromium to load webpages like a real browser and extract rendered content. The project exposes an API through FastAPI, providing a foundation for URL-based scraping, screenshot generation, text extraction, health monitoring, and future scraping workflows.',

            techStack: [
                'Python',
                'FastAPI',
                'Playwright',
                'Chromium',
                'Uvicorn',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Python',
                'Playwright',
                'Chromium',
                'Swagger UI'
            ],

            status: 'ongoing',

            repoUrl: 'https://github.com/adityakamble69/Web-Scrap.git',
            demoUrl: '#',

            startDate: '2026-08-27',
            role: 'Backend Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Browser-Based Web Scraping',
                'JavaScript-Heavy Website Support',
                'Screenshot & Text Extraction',
                'FastAPI REST Service'
            ],

            category: 'Web Scraping & Automation',

            features: [
                {
                    title: 'Browser-Based Scraping',
                    items: [
                        '**Real Browser Automation**: Use Playwright with headless Chromium to load webpages in an actual browser environment.',
                        '**JavaScript Support**: Handle dynamically rendered and JavaScript-heavy websites that may not work correctly with simple HTTP requests.',
                        '**URL-Based Scraping**: Accept a target URL through the API and process the webpage automatically.',
                        '**Rendered Content Extraction**: Extract information after the webpage has been loaded and rendered by the browser.'
                    ]
                },

                {
                    title: 'Data Extraction & Outputs',
                    items: [
                        '**Text Extraction**: Return extracted webpage text from the target URL.',
                        '**Screenshot Generation**: Capture screenshots of rendered webpages for visual inspection or downstream processing.',
                        '**Multiple Output Types**: Support workflows where the caller can request extracted text, screenshots, or both.',
                        '**Browser Rendering**: Capture content from the final rendered state rather than relying only on the initial HTML response.'
                    ]
                },

                {
                    title: 'REST API',
                    items: [
                        '**FastAPI Backend**: Provide a lightweight and modern Python API layer for scraping operations.',
                        '**Scraping Endpoint**: Accept a URL through an API request and return the requested scraping outputs.',
                        '**Health Endpoint**: Expose `/health` to verify that the service is running correctly.',
                        '**Swagger Documentation**: Provide automatically generated API documentation through FastAPI at `/docs`.',
                        '**Uvicorn Server**: Run the FastAPI application using Uvicorn with reload support during development.'
                    ]
                },

                {
                    title: 'Project Architecture',
                    items: [
                        '**Application Package**: Organize backend implementation under the `app/` package.',
                        '**Documentation**: Maintain planning, architecture, rules, design, and progress information inside the `docs/` directory.',
                        '**Testing Structure**: Maintain a dedicated `tests/` directory for automated testing.',
                        '**Environment Configuration**: Include `.env.example` for environment-specific configuration.',
                        '**Dependency Management**: Maintain Python dependencies through `requirements.txt`.'
                    ]
                },

                {
                    title: 'Developer Experience',
                    items: [
                        '**Simple Local Setup**: Create a Python virtual environment and install the required dependencies.',
                        '**Chromium Installation**: Download the Playwright-managed Chromium browser as part of the setup process.',
                        '**Interactive API Documentation**: Use Swagger UI to test and explore available API endpoints.',
                        '**Development Reloading**: Run the API with Uvicorn reload enabled for faster development.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Web-Scrap.git\ncd Web-Scrap',
                    type: 'code'
                },

                {
                    title: 'Create Virtual Environment',
                    code: 'python -m venv venv\n\n# Windows\nvenv\\Scripts\\activate\n\n# macOS / Linux\nsource venv/bin/activate',
                    type: 'code'
                },

                {
                    title: 'Install Dependencies',
                    code: 'pip install -r requirements.txt',
                    type: 'code'
                },

                {
                    title: 'Install Chromium',
                    code: 'playwright install chromium',
                    type: 'code'
                },

                {
                    title: 'Run Server',
                    code: 'uvicorn app.main:app --reload',
                    type: 'code'
                },

                {
                    title: 'Check API Health',
                    code: 'curl http://localhost:8000/health',
                    type: 'code'
                },

                {
                    title: 'API Documentation',
                    code: 'Open http://localhost:8000/docs in your browser.',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Scraping JavaScript-Heavy Websites',
                    solution: 'Used Playwright with a real headless Chromium browser so webpages can execute JavaScript and render dynamic content before extraction.'
                },

                {
                    problem: 'Traditional HTTP Scraping Limitations',
                    solution: 'Moved beyond a simple requests-based scraping approach by introducing browser automation, allowing the service to interact with websites closer to how a normal browser would.'
                },

                {
                    problem: 'Extracting Rendered Content',
                    solution: 'Built the scraping workflow around browser-rendered pages so the API can capture content after client-side rendering has completed.'
                },

                {
                    problem: 'Providing Multiple Useful Outputs',
                    solution: 'Designed the scraping service to support both webpage screenshots and extracted text, making the API useful for both data extraction and visual inspection.'
                },

                {
                    problem: 'Making the Scraper Accessible to Other Applications',
                    solution: 'Wrapped the browser automation functionality inside a FastAPI REST service, allowing external applications to submit URLs and consume structured scraping results.'
                },

                {
                    problem: 'Making the API Easy to Test',
                    solution: 'Used FastAPIs automatic OpenAPI generation and Swagger UI so developers can inspect and test the available endpoints directly from the browser.'
                },

                {
                    problem: 'Maintaining a Scalable Project Structure',
                    solution: 'Separated application code, tests, documentation, environment configuration, and dependency management into dedicated project directories and files.'
                }
            ]
        },
        {
            id: 'project-12',
            slug: 'ebms-employee-branch-management-system',
            title: 'EBMS — Employee & Branch Management System',

            description: 'EBMS is a full-featured Employee and Branch Management System designed to centralize HR, operations, attendance, payroll, recruitment, employee performance, tasks, assets, and branch administration.',

            longDescription: 'EBMS is a comprehensive HR and operations management platform built using plain HTML, CSS, JavaScript, Google Apps Script, and Google Sheets. The system provides dedicated workflows for Super Admins, HR users, Branch Managers, and Employees. It centralizes employee records, branch management, attendance, GPS-based self-punching, QR attendance, leave requests, salary and payslip management, recruitment, performance tracking, tasks, assets, documents, expenses, holidays, notifications, and administrative settings. The frontend communicates with a Google Apps Script Web App through GET/POST JSON APIs, while Google Sheets acts as the database.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Google Apps Script',
                'Google Sheets',
                'REST API',
                'JSON',
                'PropertiesService'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Google Apps Script',
                'Google Sheets',
                'Google Chrome'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/EBMS-WEBSITE.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Complete HR & Employee Management',
                'GPS & QR-Based Attendance',
                'Payroll & Recruitment Management',
                'Google Sheets-Based Backend'
            ],

            category: 'Web Development',

            features: [
                {
                    title: 'Employee & Branch Management',
                    items: [
                        '**Employee Management**: Create, manage, and monitor employee records including departments, designations, joining dates, employment types, shifts, and status.',
                        '**Branch Management**: Manage multiple branches with contact information, managers, locations, latitude, longitude, and GPS radius configuration.',
                        '**Department & Designation Management**: Organize employees through branch-specific departments and designations.',
                        '**Shift Management**: Create shift templates and assign employees to specific shifts.',
                        '**Shift Assignments**: Support date-specific shift overrides for individual employees.'
                    ]
                },

                {
                    title: 'Attendance & Leave',
                    items: [
                        '**Attendance Management**: Record employee in-time and out-time information through the centralized attendance module.',
                        '**GPS Geofencing**: Use branch latitude, longitude, and configured radius to support location-based employee self-punching.',
                        '**QR Attendance**: Provide a QR-based attendance workflow for employee check-ins.',
                        '**Leave Requests**: Allow employees to submit leave applications with leave type, dates, duration, and reasons.',
                        '**Leave Approval**: Enable authorized HR and management users to review and approve or reject leave requests.',
                        '**Attendance History**: Maintain employee attendance records based on email and date.'
                    ]
                },

                {
                    title: 'Payroll & Employee Finance',
                    items: [
                        '**Salary Management**: Maintain employee salary structures including basic salary, HRA, allowances, PF deductions, and effective dates.',
                        '**Salary Slips**: Generate monthly salary slips containing present days, absent days, gross salary, deductions, and net salary.',
                        '**Expense Management**: Allow expense records to be submitted with category, amount, date, description, and receipt information.',
                        '**Expense Approval**: Support administrative review and approval of employee expenses.',
                        '**Bank Details**: Manage employee bank account information required for payroll processing.'
                    ]
                },

                {
                    title: 'HR & Recruitment',
                    items: [
                        '**Recruitment Management**: Manage job openings, candidates, and recruitment pipelines.',
                        '**Candidate Pipeline**: Track candidates through stages such as applied, screening, HR calling, interviews, offer, hold, hired, and rejected.',
                        '**Employee Conversion**: Support automatic conversion of a hired candidate into an employee record.',
                        '**Employee Documents**: Store employee documents such as profile photos, identity documents, and education or experience records.',
                        '**HR Documents**: Generate and manage HR letters including offer, appointment, and warning documents.'
                    ]
                },

                {
                    title: 'Performance & Task Management',
                    items: [
                        '**Performance Management**: Record monthly KPI data, scores, remarks, reviewers, and review dates.',
                        '**Task Management**: Create and assign tasks to employees with due dates, priorities, submission links, and review information.',
                        '**Kanban Workflow**: Track tasks through `todo`, `in_progress`, `in_review`, and `completed` states.',
                        '**Targets**: Provide administrative functionality for monitoring employee or branch-related targets.',
                        '**Performance Insights**: Centralize employee performance information for HR and management review.'
                    ]
                },

                {
                    title: 'Assets, Documents & Notifications',
                    items: [
                        '**Asset Management**: Track company assets, serial numbers, assignments, issue dates, return dates, and status.',
                        '**Document Management**: Maintain employee-related documents and generated HR documents.',
                        '**Notifications**: Generate notifications for important activities across different modules.',
                        '**Activity Logging**: Record system activities through centralized activity and notification functions.',
                        '**Holiday Management**: Manage branch-specific and recurring holidays.'
                    ]
                },

                {
                    title: 'Authentication & Security',
                    items: [
                        '**Role-Based Authentication**: Support dedicated access for super administrators, HR users, branch managers, and employees.',
                        '**Token-Based Sessions**: Implement custom session tokens using Google Apps Script PropertiesService.',
                        '**Session Expiration**: Configure sessions to expire after eight hours while automatically extending valid sessions.',
                        '**Protected Operations**: Restrict administrative and employee operations based on authenticated user roles.',
                        '**Central API Endpoint**: Route frontend requests through a single Google Apps Script Web App API URL.'
                    ]
                },

                {
                    title: 'Backend Architecture',
                    items: [
                        '**Google Apps Script Backend**: Use Google Apps Script as the server-side application layer.',
                        '**Google Sheets Database**: Use a Google Spreadsheet as the database, with individual tabs representing application tables.',
                        '**GET/POST API**: Handle read operations through `doGet(e)` and write operations through `doPost(e)`.',
                        '**JSON Communication**: Exchange structured request and response data between the frontend and Apps Script backend.',
                        '**Serverless Infrastructure**: Run the backend on Googles infrastructure without requiring a traditional server or external database.',
                        '**Centralized Configuration**: Store business-tunable settings such as annual leave and monthly targets inside the settings sheet.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/EBMS-WEBSITE.git\ncd EBMS-WEBSITE',
                    type: 'code'
                },

                {
                    title: 'Frontend Setup',
                    code: 'Open the project in VS Code.\nThe frontend consists of HTML, CSS, and JavaScript files and does not require npm dependencies.',
                    type: 'code'
                },

                {
                    title: 'Google Sheets Database',
                    code: 'Create the required Google Spreadsheet.\nCreate the required database tabs such as employees, branches, attendance, leave_requests, salaries, tasks, notifications, and other configured modules.',
                    type: 'code'
                },

                {
                    title: 'Google Apps Script Backend',
                    code: 'Open Google Apps Script.\nAdd the backend .gs files from the project documentation.\nConfigure the Google Sheet ID and required settings.\nDeploy the Apps Script project as a Web App.',
                    type: 'code'
                },

                {
                    title: 'Configure API URL',
                    code: 'Update API_URL in app.js with the deployed Google Apps Script Web App URL.',
                    type: 'code'
                },

                {
                    title: 'Run Application',
                    code: 'Open index.html using a local development server such as VS Code Live Server.\nEnsure the Google Apps Script Web App is deployed and accessible before using backend-powered features.',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Building a Complete HR Platform Without a Traditional Backend',
                    solution: 'Used Google Apps Script as the backend and Google Sheets as the database, allowing the application to provide server-side functionality without requiring a dedicated server or external database infrastructure.'
                },

                {
                    problem: 'Managing Multiple Employee Roles',
                    solution: 'Implemented role-aware authentication and workflows for super administrators, HR users, branch managers, and employees so each role can access appropriate functionality.'
                },

                {
                    problem: 'Supporting Location-Based Attendance',
                    solution: 'Stored branch latitude, longitude, and radius information and used these values to power GPS geofencing for employee self-punch attendance.'
                },

                {
                    problem: 'Managing Complex HR Data',
                    solution: 'Separated employee, branch, department, designation, attendance, leave, salary, performance, task, asset, document, and notification information into dedicated Google Sheet tabs that function as database tables.'
                },

                {
                    problem: 'Implementing Payroll Workflows',
                    solution: 'Created salary and salary-slip data structures capable of representing basic salary, allowances, deductions, attendance days, gross salary, and net salary for monthly payroll processing.'
                },

                {
                    problem: 'Building a Recruitment Pipeline',
                    solution: 'Implemented a structured candidate pipeline that tracks applicants from initial application through screening, interviews, offer, hiring, or rejection, with hired candidates capable of becoming employee records.'
                },

                {
                    problem: 'Maintaining Secure Sessions',
                    solution: 'Implemented custom token-based sessions using Google Apps Script PropertiesService, with eight-hour token expiration and automatic extension for valid requests.'
                },

                {
                    problem: 'Connecting a Large Frontend to a Serverless Backend',
                    solution: 'Established a centralized GET/POST JSON API contract through a Google Apps Script Web App, allowing the many frontend modules to communicate with a common backend interface.'
                },

                {
                    problem: 'Keeping Administrative Operations Centralized',
                    solution: 'Built dedicated dashboards and modules for attendance, employees, recruitment, salary, performance, tasks, assets, expenses, documents, holidays, notifications, and settings so HR and management activities can be handled from one system.'
                }
            ]
        },
        {
            id: 'project-13',
            slug: 'marginalia-full-stack-blog-application',
            title: 'Marginalia — Full-Stack Blog Application',

            description: 'Marginalia is a full-stack blogging platform where users can create, manage, discover, and share blog posts through a clean and responsive web interface.',

            longDescription: 'Marginalia is a full-stack blogging platform built with a dependency-free HTML, CSS, and JavaScript frontend and a Node.js/Express REST API backend. The application uses Supabase PostgreSQL for persistent data storage and bcrypt with JWT for authentication and protected sessions. Users can register and log in, create and manage their own blog posts, upload or provide cover images, search and filter public posts, view individual shareable posts, and manage their personal dashboard. The platform also includes responsive navigation, protected routes, session-expiration handling, and a modular backend architecture.',

            techStack: [
                'HTML5',
                'CSS3',
                'JavaScript (ES6+)',
                'Node.js',
                'Express.js',
                'Supabase',
                'PostgreSQL',
                'JWT',
                'bcrypt',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Node.js',
                'Supabase',
                'Render',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/BLOG-APP.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Full-Stack Blog Platform',
                'JWT Authentication & Protected Routes',
                'Blog CRUD with Search & Filtering',
                'Supabase PostgreSQL Integration'
            ],

            category: 'Full Stack Development',

            features: [
                {
                    title: 'Authentication & Security',
                    items: [
                        '**User Registration**: Allow new users to create accounts using their name, email, and password.',
                        '**User Login**: Authenticate users and issue JWT-based sessions.',
                        '**Password Hashing**: Secure stored passwords using bcrypt hashing.',
                        '**JWT Sessions**: Use JSON Web Tokens to authenticate protected API requests.',
                        '**Protected Routes**: Restrict dashboard and blog-editor functionality to authenticated users.',
                        '**Session Expiration**: Automatically detect expired or invalid sessions and redirect users back to the login page.'
                    ]
                },

                {
                    title: 'Blog Management',
                    items: [
                        '**Create Posts**: Authenticated users can create new blog posts with titles, content, categories, and cover images.',
                        '**Read Posts**: Display public blog posts through the main feed and individual post pages.',
                        '**Update Posts**: Allow users to edit their own previously published posts.',
                        '**Delete Posts**: Allow authenticated authors to remove their own posts.',
                        '**Cover Images**: Support cover images through external URLs or uploaded/base64 image data.',
                        '**Personal Posts**: Provide users with access to only their own posts through the personal dashboard.'
                    ]
                },

                {
                    title: 'Discovery & Content',
                    items: [
                        '**Public Blog Feed**: Browse posts published by users across the platform.',
                        '**Live Search**: Search posts by title or content.',
                        '**Category Filtering**: Filter blog posts by category.',
                        '**Individual Post Pages**: Provide a dedicated and shareable page for each blog post.',
                        '**Newest-First Feed**: Display the latest blog content first for a chronological browsing experience.'
                    ]
                },

                {
                    title: 'Personal Dashboard',
                    items: [
                        '**Author Dashboard**: Give logged-in users a centralized view of their own blog posts.',
                        '**Post Statistics**: Display statistics such as total posts and categories used.',
                        '**Publishing Information**: Show information about the users most recently published content.',
                        '**Profile Card**: Present the authors profile information alongside their content.',
                        '**Content Management**: Provide quick access to creating, editing, and managing personal posts.'
                    ]
                },

                {
                    title: 'Backend & API',
                    items: [
                        '**Express REST API**: Provide backend functionality through a modular Node.js and Express API.',
                        '**Authentication Controllers**: Separate registration and login logic into dedicated authentication controllers.',
                        '**Blog Controllers**: Centralize blog creation, retrieval, updating, and deletion logic.',
                        '**JWT Middleware**: Verify bearer tokens before allowing access to protected resources.',
                        '**REST Endpoints**: Provide dedicated endpoints for authentication, public posts, personal posts, and post management.',
                        '**Environment Configuration**: Store database credentials, JWT secrets, and deployment configuration through environment variables.'
                    ]
                },

                {
                    title: 'Database & Architecture',
                    items: [
                        '**Supabase PostgreSQL**: Use Supabase as the hosted PostgreSQL database platform.',
                        '**Users Table**: Store registered user information securely.',
                        '**Blogs Table**: Store blog posts and their associated metadata.',
                        '**Row Level Security**: Enable PostgreSQL Row Level Security on application tables.',
                        '**Service Role Backend Access**: Keep database access behind the Express backend rather than exposing database credentials to the frontend.',
                        '**Modular Structure**: Separate configuration, controllers, middleware, models, routes, and server initialization.'
                    ]
                },

                {
                    title: 'Frontend Experience',
                    items: [
                        '**Dependency-Free Frontend**: Build the client using plain HTML, CSS, and JavaScript without a frontend framework or build step.',
                        '**Responsive Design**: Support layouts ranging from small mobile devices to wide desktop screens.',
                        '**Mobile Navigation**: Provide a responsive mobile navigation sheet for smaller screens.',
                        '**Fluid Typography**: Adapt typography and layouts to different viewport sizes.',
                        '**Dynamic API Integration**: Use JavaScript to communicate with the Express REST API and update page content dynamically.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/BLOG-APP.git\ncd BLOG-APP',
                    type: 'code'
                },

                {
                    title: 'Set Up Supabase',
                    code: 'Create a Supabase project.\nOpen the SQL Editor.\nRun backend/models/schema.sql to create the users and blogs tables.\nCopy the Supabase Project URL and service role key.',
                    type: 'code'
                },

                {
                    title: 'Backend Setup',
                    code: 'cd backend\nnpm install\ncp .env.example .env',
                    type: 'code'
                },

                {
                    title: 'Environment Configuration',
                    code: 'PORT=5000\nSUPABASE_URL=https://your-project-ref.supabase.co\nSUPABASE_SERVICE_ROLE_KEY=your-service-role-key\nJWT_SECRET=some-long-random-string\nJWT_EXPIRES_IN=7d\nCLIENT_ORIGIN=http://127.0.0.1:5500',
                    type: 'code'
                },

                {
                    title: 'Run Backend',
                    code: 'npm run dev\n# or\nnpm start',
                    type: 'code'
                },

                {
                    title: 'Run Frontend',
                    code: 'npx serve frontend\n# or use the VS Code Live Server extension',
                    type: 'code'
                },

                {
                    title: 'Configure API',
                    code: 'Update frontend/js/config.js:\n\nconst CONFIG = {\n    API_BASE: "http://localhost:5000/api"\n};',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Building a Full-Stack Application Without a Frontend Framework',
                    solution: 'Created the frontend entirely with HTML, CSS, and Vanilla JavaScript while using modular JavaScript logic to communicate with the REST API and dynamically manage application state.'
                },

                {
                    problem: 'Implementing Secure User Authentication',
                    solution: 'Combined bcrypt password hashing with JWT-based authentication and Express middleware to protect user-specific operations and prevent unauthorized blog modifications.'
                },

                {
                    problem: 'Managing Blog CRUD Operations',
                    solution: 'Implemented dedicated REST endpoints and controller logic for creating, reading, updating, and deleting blog posts while ensuring users can only modify their own content.'
                },

                {
                    problem: 'Protecting User-Owned Content',
                    solution: 'Used JWT authentication middleware together with backend ownership checks to restrict personal dashboard data and blog modification operations to the authenticated author.'
                },

                {
                    problem: 'Providing Fast Content Discovery',
                    solution: 'Implemented server-supported search and category filtering so users can quickly find relevant posts from the public blog feed.'
                },

                {
                    problem: 'Managing Database Access Securely',
                    solution: 'Placed Supabase database access behind the Express backend and stored the Supabase service-role key in environment variables instead of exposing it through the frontend.'
                },

                {
                    problem: 'Maintaining a Responsive Blogging Experience',
                    solution: 'Implemented responsive layouts, mobile navigation, and fluid typography so the blogging platform remains usable across phones, tablets, and desktop devices.'
                },

                {
                    problem: 'Handling Expired Sessions',
                    solution: 'Added frontend session handling that detects invalid or expired authentication tokens and redirects users to the login page with an appropriate message.'
                },

                {
                    problem: 'Keeping the Backend Maintainable',
                    solution: 'Organized the Express application into controllers, routes, middleware, configuration, models, and server initialization rather than placing all application logic in a single file.'
                }
            ]
        },
        {
            id: 'project-14',
            slug: 'lifeline-blood-donation-camp-management-platform',
            title: 'Lifeline — Blood Donation Camp Management Platform',

            description: 'Lifeline is a full-stack blood donor network that connects blood donors, recipients, and blood donation camps through a centralized web platform.',

            longDescription: 'Lifeline is a full-stack Blood Donor Network platform designed to simplify and accelerate the process of finding compatible blood donors during emergencies. The platform allows users to register as blood donors, search for donors based on blood group and city, raise emergency blood requests, discover and register for blood donation camps, and manage donation-related information. The system is built with a modern Svelte frontend, a Node.js and Express REST API backend, and a MySQL database.',

            techStack: [
                'Svelte',
                'Vite',
                'Tailwind CSS v4',
                'Node.js',
                'Express.js',
                'MySQL',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Postman',
                'MySQL Workbench',
                'Vite'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Blood-Donation-Camp-Management-Platform.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Blood Donor Network',
                'Emergency Blood Requests',
                'Blood Donation Camp Management',
                'Blood Group & City-Based Donor Search'
            ],

            category: 'Healthcare & Full Stack Development',

            features: [
                {
                    title: 'Blood Donor Management',
                    items: [
                        '**Donor Registration**: Allow users to register themselves as blood donors and provide the information required for donor discovery.',
                        '**Donor Network**: Maintain a centralized network connecting registered blood donors with people searching for compatible blood.',
                        '**Blood Group Search**: Allow users to search for donors according to their required blood group.',
                        '**City-Based Search**: Filter donor results based on city to make it easier to find geographically relevant donors.',
                        '**Donor Discovery**: Provide a streamlined workflow for locating potentially compatible donors during urgent situations.'
                    ]
                },

                {
                    title: 'Emergency Blood Requests',
                    items: [
                        '**Emergency Requests**: Allow users to raise emergency blood requests when blood is urgently required.',
                        '**Blood Group Information**: Associate emergency requests with the required blood group.',
                        '**Location Information**: Use city/location information to help identify relevant donors.',
                        '**Centralized Requests**: Bring urgent blood requirements into one platform where donors can be discovered more efficiently.',
                        '**Faster Donor Matching**: Reduce the time required to manually search for compatible blood donors during emergencies.'
                    ]
                },

                {
                    title: 'Blood Donation Camp Management',
                    items: [
                        '**Camp Management**: Provide functionality for managing blood donation camps through the platform.',
                        '**Camp Discovery**: Allow users to view available blood donation camps.',
                        '**Camp Registration**: Enable donors and users to register for blood donation camps.',
                        '**Centralized Camp Information**: Keep donation-camp-related information available through a single web application.',
                        '**Donation Coordination**: Connect donors with organized blood donation events.'
                    ]
                },

                {
                    title: 'Frontend Experience',
                    items: [
                        '**Svelte Application**: Build the frontend using Sveltes component-based architecture.',
                        '**Vite Development Environment**: Use Vite for fast development and optimized production builds.',
                        '**Tailwind CSS v4**: Create the interface using a modern utility-first styling system.',
                        '**Responsive UI**: Provide a responsive experience suitable for desktop, tablet, and mobile devices.',
                        '**Interactive Components**: Use Svelte components and reactive behavior to create a dynamic user experience.'
                    ]
                },

                {
                    title: 'Backend & REST API',
                    items: [
                        '**Node.js Backend**: Provide the server-side application layer using Node.js.',
                        '**Express.js API**: Implement RESTful API endpoints using Express.js.',
                        '**REST Architecture**: Separate frontend presentation from backend business logic through HTTP-based APIs.',
                        '**Health Check**: Provide `/api/health` for checking backend availability.',
                        '**Development Server**: Run the backend through npm scripts using a development configuration or production start command.'
                    ]
                },

                {
                    title: 'Database Management',
                    items: [
                        '**MySQL Database**: Use MySQL as the primary relational database.',
                        '**Structured Schema**: Maintain the database structure through the projects `database/schema.sql` file.',
                        '**Relational Data Management**: Store donor, request, camp, and related platform information using a relational database.',
                        '**MySQL Workbench Support**: Use MySQL Workbench as a development and database-management tool.',
                        '**Dedicated Database Layer**: Keep database schema and backend logic separated from the frontend application.'
                    ]
                },

                {
                    title: 'Development & Testing',
                    items: [
                        '**Postman Collection**: Include a Postman collection inside the documentation for testing API functionality.',
                        '**API Testing**: Validate backend REST endpoints independently from the frontend.',
                        '**Project Documentation**: Maintain architecture, design, requirements, rules, phases, and project-memory documentation.',
                        '**Modular Structure**: Separate frontend, backend, database, and documentation into dedicated project directories.',
                        '**Completed Testing**: The repository marks the testing phase as completed.'
                    ]
                },

                {
                    title: 'Project Architecture',
                    items: [
                        '**Frontend Layer**: Svelte, Vite, and Tailwind CSS provide the user-facing application.',
                        '**Backend Layer**: Node.js and Express provide the REST API and server-side functionality.',
                        '**Database Layer**: MySQL stores the applications persistent data.',
                        '**API Communication**: The frontend communicates with the backend through REST APIs.',
                        '**Separation of Concerns**: Keep UI, server logic, database schema, and documentation organized into independent project areas.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Blood-Donation-Camp-Management-Platform.git\ncd Blood-Donation-Camp-Management-Platform',
                    type: 'code'
                },

                {
                    title: 'Frontend Setup',
                    code: 'cd frontend\nnpm install',
                    type: 'code'
                },

                {
                    title: 'Backend Setup',
                    code: 'cd backend\ncp .env.example .env\nnpm install',
                    type: 'code'
                },

                {
                    title: 'Configure Database',
                    code: 'CREATE DATABASE lifeline;\n\n# Import the schema\nmysql -u root -p lifeline < database/schema.sql',
                    type: 'code'
                },

                {
                    title: 'Configure Environment',
                    code: 'Update backend/.env with your local MySQL credentials and other backend configuration values.',
                    type: 'code'
                },

                {
                    title: 'Run Frontend',
                    code: 'cd frontend\nnpm run dev\n# Runs at http://localhost:5173',
                    type: 'code'
                },

                {
                    title: 'Run Backend',
                    code: 'cd backend\nnpm run dev\n# or\nnpm start\n# Runs at http://localhost:5000',
                    type: 'code'
                },

                {
                    title: 'Check Backend Health',
                    code: 'http://localhost:5000/api/health',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Reducing the Time Required to Find Blood Donors',
                    solution: 'Created a centralized donor network where users can search for compatible donors by blood group and city instead of relying on disconnected or manual donor searches.'
                },

                {
                    problem: 'Handling Emergency Blood Requirements',
                    solution: 'Implemented emergency blood requests so urgent requirements can be represented within the platform and connected with the donor-search workflow.'
                },

                {
                    problem: 'Coordinating Blood Donation Camps',
                    solution: 'Added dedicated camp management and camp-registration functionality to connect donors with organized blood donation events.'
                },

                {
                    problem: 'Building a Modern Frontend',
                    solution: 'Used Svelte with Vite and Tailwind CSS v4 to create a responsive, component-driven frontend with a modern development workflow.'
                },

                {
                    problem: 'Connecting the Frontend With Backend Services',
                    solution: 'Built a Node.js and Express REST API layer that separates frontend presentation from server-side business logic and database operations.'
                },

                {
                    problem: 'Managing Structured Healthcare-Related Data',
                    solution: 'Used MySQL as a relational database and maintained a dedicated SQL schema to organize the applications donor, request, and camp-related data.'
                },

                {
                    problem: 'Testing REST API Functionality',
                    solution: 'Included a Postman collection and dedicated API testing workflow so backend endpoints can be tested independently from the frontend.'
                },

                {
                    problem: 'Maintaining a Scalable Project Structure',
                    solution: 'Separated the application into frontend, backend, database, and documentation directories, making each layer easier to develop, test, and maintain.'
                },

                {
                    problem: 'Delivering a Responsive Healthcare Platform',
                    solution: 'Combined Svelte components with Tailwind CSS responsive utilities to make the donor and camp management experience accessible across different device sizes.'
                }
            ]
        },
        {
            id: 'project-15',
            slug: 'hackathon-team-matcher',
            title: 'Hackathon Team Matcher — Smart Team Formation Platform',

            description: 'Hackathon Team Matcher is a platform that helps students find compatible hackathon teammates based on skills, preferred roles, experience, and interests.',

            longDescription: 'Hackathon Team Matcher (PS-03) is a full-stack collaboration platform designed to solve the challenge of finding suitable teammates for hackathons. Students can discover potential teammates based on their technical skills, preferred roles, experience, and interests, making it easier to form balanced and compatible teams. The platform uses a SvelteKit and Tailwind CSS frontend, a Node.js and Express.js backend, and Supabase PostgreSQL for database and authentication functionality. The project follows a documented product, architecture, design, rules, and phased development workflow.',

            techStack: [
                'Svelte',
                'SvelteKit',
                'Tailwind CSS',
                'Node.js',
                'Express.js',
                'Supabase',
                'PostgreSQL',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Supabase',
                'Node.js',
                'Postman',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Hackethon-Team-Matcher.git',
            demoUrl: 'https://hackethon-team-matcher.vercel.app/',

            startDate: '2026-08-01',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Skill-Based Team Matching',
                'Hackathon Teammate Discovery',
                'Supabase Authentication & Database',
                'SvelteKit Full-Stack Architecture'
            ],

            category: 'Web Development & Collaboration',

            features: [
                {
                    title: 'Team Matching',
                    items: [
                        '**Skill-Based Matching**: Help students discover teammates based on their technical and professional skills.',
                        '**Role Matching**: Match participants according to their preferred roles within a hackathon team.',
                        '**Experience Matching**: Consider participant experience when helping users find suitable teammates.',
                        '**Interest-Based Discovery**: Use shared interests to identify potentially compatible collaborators.',
                        '**Compatibility-Focused Teams**: Make team formation more intentional by considering multiple participant attributes rather than simple random matching.'
                    ]
                },

                {
                    title: 'Participant Profiles',
                    items: [
                        '**Developer Profiles**: Allow students to represent their skills, experience, interests, and preferred hackathon roles.',
                        '**Skill Information**: Display relevant technical skills to help other participants understand potential contributions.',
                        '**Role Preferences**: Capture the type of role a participant wants to take within a team.',
                        '**Experience Details**: Include experience information as part of the teammate discovery process.',
                        '**Interest Information**: Help users discover collaborators with similar areas of interest.'
                    ]
                },

                {
                    title: 'Hackathon Collaboration',
                    items: [
                        '**Teammate Discovery**: Provide a centralized platform for students looking for hackathon collaborators.',
                        '**Team Formation**: Make it easier to move from individual participant profiles toward compatible teams.',
                        '**Complementary Skills**: Encourage teams to combine participants with different but complementary capabilities.',
                        '**Student Collaboration**: Focus the platform specifically on helping students collaborate during hackathons.',
                        '**Problem-Solving Focus**: Address the common difficulty of finding suitable teammates before or during a hackathon.'
                    ]
                },

                {
                    title: 'Frontend Experience',
                    items: [
                        '**SvelteKit Application**: Build the frontend using SvelteKit and Svelte components.',
                        '**Tailwind CSS**: Use Tailwind CSS for responsive and consistent interface styling.',
                        '**Component-Based UI**: Structure the application using reusable frontend components.',
                        '**Responsive Interface**: Provide an experience that can adapt to different screen sizes.',
                        '**Modern Web Architecture**: Use a contemporary SvelteKit application structure for navigation and frontend functionality.'
                    ]
                },

                {
                    title: 'Backend & API',
                    items: [
                        '**Node.js Backend**: Provide the server-side application layer using Node.js.',
                        '**Express.js**: Implement backend API functionality using Express.js.',
                        '**REST API**: Allow the frontend to communicate with backend functionality through API endpoints.',
                        '**Environment Configuration**: Keep Supabase credentials, API configuration, and server settings in environment variables.',
                        '**Separated Architecture**: Maintain the backend independently inside the `server` directory.'
                    ]
                },

                {
                    title: 'Database & Authentication',
                    items: [
                        '**Supabase Integration**: Use Supabase for backend database and authentication functionality.',
                        '**PostgreSQL Database**: Store platform data using PostgreSQL.',
                        '**Row Level Security**: Configure PostgreSQL Row Level Security to protect database records.',
                        '**Supabase Authentication**: Use Supabase authentication infrastructure for user identity and access.',
                        '**Secure Database Access**: Keep the Supabase service-role key on the server while exposing only the required public configuration to the frontend.'
                    ]
                },

                {
                    title: 'Project Architecture',
                    items: [
                        '**Client Application**: Keep the SvelteKit frontend inside the `client` directory.',
                        '**Server Application**: Keep Node.js and Express backend code inside the `server` directory.',
                        '**Database Configuration**: Maintain Supabase/database-related configuration separately from application presentation.',
                        '**Documented Architecture**: Maintain dedicated documentation covering the product requirements, architecture, design, rules, and development phases.',
                        '**Environment-Based Configuration**: Use separate environment configuration for frontend and backend services.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Hackethon-Team-Matcher.git\ncd Hackethon-Team-Matcher',
                    type: 'code'
                },

                {
                    title: 'Create Supabase Project',
                    code: 'Create a new Supabase project.\nRun the SQL defined in architecture.md §6.\nEnable the required Row Level Security policies.\nCopy the Supabase Project URL, anon key, and service_role key.',
                    type: 'code'
                },

                {
                    title: 'Backend Setup',
                    code: 'cd server\ncp .env.example .env\nnpm install\nnpm run dev',
                    type: 'code'
                },

                {
                    title: 'Backend Environment',
                    code: 'SUPABASE_URL=your_supabase_project_url\nSUPABASE_SERVICE_ROLE_KEY=your_service_role_key\nPORT=3000',
                    type: 'code'
                },

                {
                    title: 'Frontend Setup',
                    code: 'cd client\ncp .env.example .env\nnpm install\nnpm run dev',
                    type: 'code'
                },

                {
                    title: 'Frontend Environment',
                    code: 'PUBLIC_SUPABASE_URL=your_supabase_project_url\nPUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key\nPUBLIC_API_URL=http://localhost:3000',
                    type: 'code'
                },

                {
                    title: 'Run Application',
                    code: '# Frontend\nhttp://localhost:5173\n\n# Backend\nhttp://localhost:3000',
                    type: 'code'
                },

                {
                    title: 'Live Website',
                    code: 'https://hackethon-team-matcher.vercel.app/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Finding Compatible Hackathon Teammates',
                    solution: 'Created a dedicated platform that matches students based on multiple factors including skills, preferred roles, experience, and interests instead of relying on random team formation.'
                },

                {
                    problem: 'Representing Different Participant Strengths',
                    solution: 'Designed participant profiles around skills, roles, experience, and interests so potential teammates can better understand what each person can contribute to a team.'
                },

                {
                    problem: 'Building a Modern Frontend',
                    solution: 'Used SvelteKit and Tailwind CSS to create a component-driven, responsive frontend for participant discovery and team formation.'
                },

                {
                    problem: 'Separating Frontend and Backend Responsibilities',
                    solution: 'Created independent client and server applications, with SvelteKit handling the frontend experience and Node.js/Express providing the backend API layer.'
                },

                {
                    problem: 'Managing User and Matching Data',
                    solution: 'Used Supabase PostgreSQL as the central database for persistent application data and configured Row Level Security to protect records.'
                },

                {
                    problem: 'Implementing Secure Authentication',
                    solution: 'Integrated Supabase authentication while keeping privileged service-role credentials restricted to the backend environment.'
                },

                {
                    problem: 'Maintaining a Structured Development Process',
                    solution: 'Created dedicated product, architecture, design, rules, phases, and memory documentation to keep the project requirements and development progress organized.'
                },

                {
                    problem: 'Preparing the Application for Deployment',
                    solution: 'Separated frontend and backend environment configuration and deployed the frontend application through Vercel.'
                }
            ]
        },
        {
            id: 'project-16',
            slug: 'syntaxbeats-glassmorphism-music-player',
            title: 'SyntaxBeats — Glassmorphism Music Player',

            description: 'SyntaxBeats is a stylish glassmorphism music player designed for coders, featuring gender-based music selection, automatic YouTube playback, customizable playlists, and an immersive visual experience.',

            longDescription: 'SyntaxBeats is a modern web-based music player designed specifically around a developer-focused aesthetic. The application uses a glassmorphism interface and allows users to choose between Male and Female music experiences, after which music automatically plays from YouTube. Playlist data is maintained through dedicated JavaScript files, while background imagery can be customized for each experience. The project is built with Svelte, Vite, and Tailwind CSS and is structured for straightforward customization and deployment to static hosting platforms.',

            techStack: [
                'Svelte',
                'JavaScript',
                'Vite',
                'Tailwind CSS',
                'HTML5',
                'CSS3',
                'YouTube'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'Vite',
                'YouTube',
                'Vercel'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Naadify.git',
            demoUrl: '#',

            startDate: '2026-08-27',
            role: 'Frontend Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Glassmorphism Music Player',
                'Male & Female Music Modes',
                'Automatic YouTube Playback',
                'Customizable Playlists'
            ],

            category: 'Web Development & Creative UI',

            features: [
                {
                    title: 'Music Experience',
                    items: [
                        '**Male/Female Selection**: Let users choose between two dedicated music experiences before playback begins.',
                        '**Automatic Playback**: Start music automatically after the user makes the Male/Female selection.',
                        '**YouTube Music Source**: Use YouTube videos as the source for music playback.',
                        '**Dedicated Playlists**: Maintain separate male and female playlist configurations for easy customization.',
                        '**Track Metadata**: Store track titles and artist information alongside YouTube video IDs.'
                    ]
                },

                {
                    title: 'Visual Design',
                    items: [
                        '**Glassmorphism UI**: Build the player around a modern frosted-glass visual style.',
                        '**Developer-Focused Aesthetic**: Create a visual experience intended specifically for programmers and coding sessions.',
                        '**Immersive Backgrounds**: Use separate background imagery for the Male and Female player experiences.',
                        '**Modern Interface**: Combine translucent surfaces, visual layering, and custom backgrounds to create an engaging music-player experience.',
                        '**Responsive Layout**: Structure the interface for different viewport sizes and devices.'
                    ]
                },

                {
                    title: 'Playlist Customization',
                    items: [
                        '**Male Playlist**: Manage tracks through `src/lib/data/playlist.male.js`.',
                        '**Female Playlist**: Manage tracks through `src/lib/data/playlist.female.js`.',
                        '**Easy Track Management**: Add or remove playlist objects without changing the main player implementation.',
                        '**YouTube ID Configuration**: Connect tracks by replacing placeholder YouTube IDs with real video IDs.',
                        '**Artist & Title Metadata**: Configure the displayed track title and artist information directly in playlist data.'
                    ]
                },

                {
                    title: 'Player Experience',
                    items: [
                        '**User-Gesture Playback**: Use the Male/Female selection click as the user interaction that unlocks browser autoplay-with-sound behavior.',
                        '**Player Screen**: Centralize the main music-player experience inside the Svelte player screen component.',
                        '**Dynamic Backgrounds**: Change the visual environment according to the selected music mode.',
                        '**Continuous Music Experience**: Create a focused player designed to remain in the background while users code or work.'
                    ]
                },

                {
                    title: 'Frontend Architecture',
                    items: [
                        '**Svelte Components**: Build the player interface using reusable Svelte components.',
                        '**Vite**: Use Vite for fast development and production builds.',
                        '**Tailwind CSS**: Use utility-based styling to construct the modern interface.',
                        '**Data Separation**: Keep playlist information separate from UI components for easier customization.',
                        '**Static Asset Management**: Maintain background images inside the `static/images` directory.'
                    ]
                },

                {
                    title: 'Deployment',
                    items: [
                        '**Static Build**: Generate the production application into the `build/` directory.',
                        '**Vercel Support**: Deploy the generated static build to Vercel.',
                        '**Netlify Support**: Support deployment to Netlify as another static hosting option.',
                        '**GitHub Pages Support**: The generated build can also be deployed to GitHub Pages or another static hosting provider.',
                        '**Production Preview**: Use `npm run preview` to test the production build locally before deployment.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Naadify.git\ncd Naadify',
                    type: 'code'
                },

                {
                    title: 'Install Dependencies',
                    code: 'npm install',
                    type: 'code'
                },

                {
                    title: 'Start Development Server',
                    code: 'npm run dev\n# Open the local URL printed by Vite\n# Usually http://localhost:5173',
                    type: 'code'
                },

                {
                    title: 'Add Songs',
                    code: 'Edit:\nsrc/lib/data/playlist.male.js\nsrc/lib/data/playlist.female.js\n\nReplace REPLACE_WITH_YOUTUBE_ID_x with the actual YouTube video ID and provide the track title and artist.',
                    type: 'code'
                },

                {
                    title: 'Customize Backgrounds',
                    code: 'Replace:\nstatic/images/bg-male.jpg\nstatic/images/bg-female.jpg\n\nKeep the same filenames or update the paths in src/lib/components/PlayerScreen.svelte.',
                    type: 'code'
                },

                {
                    title: 'Production Build',
                    code: 'npm run build\nnpm run preview',
                    type: 'code'
                },

                {
                    title: 'Deploy',
                    code: 'Deploy the generated build/ directory to Vercel, Netlify, GitHub Pages, or another static hosting provider.',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Browser Autoplay Restrictions',
                    solution: 'Designed the Male/Female selection as the initial user gesture so browser autoplay-with-sound policies can be satisfied before music playback begins.'
                },

                {
                    problem: 'Creating an Immersive Developer Experience',
                    solution: 'Used a glassmorphism-inspired interface, dedicated background imagery, and focused music-player presentation to create an environment suitable for coding sessions.'
                },

                {
                    problem: 'Managing Multiple Music Experiences',
                    solution: 'Separated Male and Female playlists into independent JavaScript data files, allowing each experience to be customized without modifying the core player logic.'
                },

                {
                    problem: 'Making Playlist Updates Simple',
                    solution: 'Represented tracks as playlist objects containing YouTube video IDs, titles, and artists, making it easy to add or remove songs directly from the data files.'
                },

                {
                    problem: 'Handling External Music Sources',
                    solution: 'Integrated YouTube as the music source and designed the player around YouTube video IDs, while documenting that unavailable or invalid IDs can cause individual tracks to fail silently.'
                },

                {
                    problem: 'Keeping the UI Maintainable',
                    solution: 'Used Svelte components and separated playlist data and static images from the player interface to keep the project organized and customizable.'
                },

                {
                    problem: 'Preparing for Static Deployment',
                    solution: 'Configured the application to generate a static production build through Vite, making it suitable for deployment on platforms such as Vercel, Netlify, and GitHub Pages.'
                }
            ]
        },
        {
            id: 'project-17',
            slug: 'tazza-restaurant-management-platform',
            title: 'Tazza — Restaurant Management & Online Ordering Platform',

            description: 'Tazza is a full-stack restaurant management and online ordering platform that combines food ordering, table reservations, event bookings, VIP services, customer accounts, and restaurant administration in one system.',

            longDescription: 'Tazza is a PHP and MySQL-powered restaurant management platform designed to provide customers with a complete digital dining experience. The platform includes a restaurant website, dynamic food menu, customer authentication, online food ordering, cart management, table booking, VIP booking, event and catering services, payment verification, customer dashboards, and administrative management. The system also integrates PHPMailer for email-related workflows and FPDF for generating PDF documents.',

            techStack: [
                'PHP',
                'MySQL',
                'HTML5',
                'CSS3',
                'JavaScript',
                'SQL',
                'PHPMailer',
                'FPDF'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'XAMPP',
                'MySQL',
                'phpMyAdmin'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Tazza.git',
            demoUrl: '#',

            startDate: '2026-05-15',
            role: 'Full Stack Developer',
            customTimeline: '2026',
            team: 'Personal Project',

            highlights: [
                'Online Food Ordering',
                'Table & VIP Booking',
                'Event & Catering Booking',
                'Restaurant Admin Dashboard'
            ],

            category: 'Full Stack Web Development',

            features: [
                {
                    title: 'Restaurant Website',
                    items: [
                        '**Restaurant Landing Page**: Present the restaurant, its services, popular dishes, customer testimonials, and food-related information.',
                        '**Digital Menu**: Display popular dishes with images, pricing, ratings, and food categories.',
                        '**Restaurant Services**: Promote online food delivery, table booking, event catering, premium membership, and food donation services.',
                        '**Responsive Interface**: Provide a restaurant-focused interface designed for different screen sizes.',
                        '**Dynamic PHP Pages**: Use PHP-powered pages to connect the customer-facing experience with backend functionality.'
                    ]
                },

                {
                    title: 'Online Food Ordering',
                    items: [
                        '**Food Ordering**: Allow customers to browse restaurant dishes and place food orders online.',
                        '**Shopping Cart**: Manage selected food items through cart functionality.',
                        '**Cart Management**: Add, update, and remove food items from the customers order.',
                        '**Checkout Workflow**: Provide a dedicated checkout process for completing food orders.',
                        '**Order Management**: Connect customer orders with backend processing and dashboard functionality.'
                    ]
                },

                {
                    title: 'Table & VIP Booking',
                    items: [
                        '**Table Reservation**: Allow customers to pre-book available restaurant tables.',
                        '**Seat Selection**: Provide selectable restaurant seating based on the restaurants floor / seat configuration.',
                        '**Meal-Time Booking**: Support booking availability around breakfast, lunch, and dinner periods.',
                        '**VIP Booking**: Provide a dedicated VIP booking workflow separate from standard table booking.',
                        '**Admin Control**: Allow the administrator to enable or disable table booking functionality.'
                    ]
                },

                {
                    title: 'Events & Catering',
                    items: [
                        '**Event Booking**: Provide functionality for customers to request or book restaurant services for events.',
                        '**Bulk Food Booking**: Support larger food requirements for occasions such as weddings and other events.',
                        '**Catering Services**: Provide a dedicated workflow for off-site catering requirements.',
                        '**Event Management**: Connect customer event requests with restaurant administration.'
                    ]
                },

                {
                    title: 'Customer Accounts',
                    items: [
                        '**User Registration & Login**: Provide customer authentication through PHP session-based workflows.',
                        '**Password Recovery**: Include forgot-password and password-reset functionality.',
                        '**Customer Dashboard**: Provide logged-in customers with a dedicated dashboard.',
                        '**Session Management**: Maintain authenticated user sessions across protected pages.',
                        '**Premium Membership**: Support premium/VIP customer functionality and associated restaurant benefits.'
                    ]
                },

                {
                    title: 'Payments & Verification',
                    items: [
                        '**Payment Workflow**: Include dedicated payment-processing and verification pages.',
                        '**Payment Verification**: Provide server-side payment verification workflows before completing relevant transactions.',
                        '**Order Payment Flow**: Connect payment-related processing with food ordering functionality.',
                        '**VIP Payment Flow**: Maintain separate payment verification functionality for VIP bookings.'
                    ]
                },

                {
                    title: 'Admin & Management',
                    items: [
                        '**Admin Dashboard**: Provide a centralized dashboard for restaurant administration.',
                        '**Booking Management**: Manage customer table and VIP booking information.',
                        '**Order Management**: Provide administrative access to restaurant orders.',
                        '**System Controls**: Configure features such as whether table booking is currently available.',
                        '**Customer Management**: Manage customer-related information through the administrative system.'
                    ]
                },

                {
                    title: 'Email & Document Services',
                    items: [
                        '**PHPMailer Integration**: Include PHPMailer for application email functionality.',
                        '**Password Recovery Emails**: Support email-based password reset workflows.',
                        '**PDF Generation**: Use FPDF for generating PDF-based documents or reports.',
                        '**Automated Communication**: Connect backend workflows with customer communication where required.'
                    ]
                },

                {
                    title: 'Backend & Database',
                    items: [
                        '**PHP Backend**: Implement server-side application logic using PHP.',
                        '**MySQL Database**: Store users, restaurant data, bookings, orders, and other application information in MySQL.',
                        '**MySQLi Connectivity**: Use MySQLi-based database connections throughout the application.',
                        '**Session-Based Authentication**: Use PHP sessions for customer and administrator authentication.',
                        '**Server-Side Validation**: Process important forms and booking operations through PHP handlers.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Tazza.git\ncd Tazza',
                    type: 'code'
                },

                {
                    title: 'Install Local Server',
                    code: 'Install XAMPP or another PHP + MySQL development environment.\nStart Apache and MySQL from the XAMPP Control Panel.',
                    type: 'code'
                },

                {
                    title: 'Project Setup',
                    code: 'Copy the Tazza project into the XAMPP htdocs directory.\n\nExample:\nC:\\xampp\\htdocs\\Tazza',
                    type: 'code'
                },

                {
                    title: 'Database Setup',
                    code: 'Open phpMyAdmin.\nCreate the required MySQL database.\nImport the project SQL/database file if provided by the project configuration.',
                    type: 'code'
                },

                {
                    title: 'Configure Database Connection',
                    code: 'Update includes/connection.php with your local MySQL database credentials.',
                    type: 'code'
                },

                {
                    title: 'Configure Environment',
                    code: 'Copy .env.example to .env and configure any required application credentials or environment-specific settings.',
                    type: 'code'
                },

                {
                    title: 'Run Application',
                    code: 'Start Apache and MySQL in XAMPP.\nOpen:\nhttp://localhost/Tazza/',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Building a Complete Digital Restaurant Experience',
                    solution: 'Combined the restaurant presentation layer with ordering, booking, event, VIP, authentication, and administrative functionality to create a unified restaurant platform.'
                },

                {
                    problem: 'Managing Restaurant Table Reservations',
                    solution: 'Created a dedicated table-booking workflow with selectable seats and meal-time availability while allowing administrators to enable or disable the booking feature.'
                },

                {
                    problem: 'Supporting Different Booking Types',
                    solution: 'Separated normal table reservations, VIP bookings, and event/catering bookings into dedicated workflows so each type of restaurant service can be handled independently.'
                },

                {
                    problem: 'Implementing Online Food Ordering',
                    solution: 'Added menu browsing, cart management, checkout, and order-processing pages to allow customers to purchase restaurant food through the website.'
                },

                {
                    problem: 'Handling Customer Authentication',
                    solution: 'Implemented PHP session-based authentication with login, registration, logout, forgot-password, password-reset, and protected dashboard workflows.'
                },

                {
                    problem: 'Managing Payment Verification',
                    solution: 'Created dedicated payment-verification pages and handlers to process payment-related workflows separately for standard orders and VIP bookings.'
                },

                {
                    problem: 'Connecting Multiple Features to a Relational Database',
                    solution: 'Used MySQL with PHP/MySQLi database connectivity to persist customer, order, booking, and administrative information.'
                },

                {
                    problem: 'Supporting Customer Communication',
                    solution: 'Integrated PHPMailer to handle application email requirements such as account and password-recovery communication.'
                },

                {
                    problem: 'Generating Documents',
                    solution: 'Integrated FPDF to support PDF generation for relevant application documents and administrative workflows.'
                },

                {
                    problem: 'Managing Restaurant Operations',
                    solution: 'Created an administrative dashboard and supporting management pages to give restaurant administrators centralized control over bookings, customers, orders, and configurable services.'
                }
            ]
        },
        {
            id: 'project-18',
            slug: 'urban-infrastructure-cascade-simulator',
            title: 'Urban Infrastructure Cascade Simulator',

            description: 'An interactive smart-city simulation platform that models interconnected urban infrastructure as a dynamic dependency graph and simulates how failures cascade across critical services.',

            longDescription: 'Urban Infrastructure Cascade Simulator is an interactive decision-support and educational simulation platform designed to model cascading failures across interconnected urban infrastructure systems. The application represents critical services such as power, water, hospitals, emergency services, public transport, communication, residential areas, waste management, and industrial services as a directed weighted dependency graph. Users can select or create disruption scenarios, simulate failures tick-by-tick, observe propagation through the infrastructure network, monitor live impact metrics, and trigger recovery actions to watch the system stabilize. The simulator is deterministic and reproducible, allowing the same scenario and configuration to produce the same results. It is deliberately designed as a simulation tool and does not connect to or control real-world infrastructure.',

            techStack: [
                'React 18',
                'TypeScript',
                'Vite',
                'Tailwind CSS 3',
                'React Flow',
                'Node.js',
                'Express.js',
                'PostgreSQL',
                'Vitest',
                'Testing Library',
                'REST API'
            ],

            tools: [
                'VS Code',
                'Git',
                'GitHub',
                'PostgreSQL',
                'Supabase',
                'Postman',
                'ESLint',
                'Prettier'
            ],

            status: 'completed',

            repoUrl: 'https://github.com/adityakamble69/Urban-Infrastructure-Cascade-Simulator.git',
            demoUrl: '#',

            startDate: '2026-08-01',
            role: 'Team Lead / Full-Stack Developer',
            customTimeline: '2026',
            team: 'Team Project',

            highlights: [
                'Deterministic Cascade Simulation',
                'Interactive Infrastructure Dependency Graph',
                'Real-Time Impact & Recovery Metrics',
                'PostgreSQL + Offline Simulation Fallback'
            ],

            category: 'Smart Cities & Urban Infrastructure',

            features: [
                {
                    title: 'Infrastructure Dependency Modeling',
                    items: [
                        '**Dynamic Infrastructure Graph**: Represent critical urban services as nodes connected through directed, weighted dependency edges.',
                        '**Critical Services**: Model systems including Power Grid, Water Supply, Hospitals, Emergency Services, Public Transport, Residential Areas, Communication Networks, Waste Management, and Industrial Services.',
                        '**Dependency Strength**: Assign weighted dependency relationships that determine how strongly failures propagate between services.',
                        '**Interactive Graph**: Visualize infrastructure dependencies using React Flow with pan, zoom, and node-level inspection.',
                        '**Dependency Inspection**: Select individual services to inspect their dependencies and dependent services.'
                    ]
                },

                {
                    title: 'Cascade Failure Simulation',
                    items: [
                        '**Failure Propagation Engine**: Simulate how stress from failed or degraded infrastructure propagates through dependent services.',
                        '**Tick-Based Simulation**: Process disruptions and infrastructure state transitions one simulation tick at a time.',
                        '**Multiple Disruptions**: Support multiple simultaneous infrastructure disruptions.',
                        '**Severity-Based Failures**: Configure initial disruption severity and timing for supported scenarios.',
                        '**State Transitions**: Model `HEALTHY`, `DEGRADED`, and `FAILED` infrastructure states.',
                        '**Propagation Events**: Record failure, degradation, propagation, and recovery events in a simulation timeline.'
                    ]
                },

                {
                    title: 'Recovery & Stabilization',
                    items: [
                        '**Recovery Engine**: Allow users to trigger recovery actions on affected infrastructure services.',
                        '**Recovery States**: Transition services through `RECOVERING → RECOVERED → HEALTHY` states.',
                        '**Cascade Unwinding**: Re-evaluate dependent services as infrastructure is restored.',
                        '**Recovery Time Measurement**: Calculate the time required for the system to return to a stable state.',
                        '**Automatic Stabilization Detection**: Consider a simulation stable after three consecutive ticks without state changes or when the configured duration limit is reached.'
                    ]
                },

                {
                    title: 'Simulation Metrics',
                    items: [
                        '**Affected Services**: Count the number of services that leave the healthy state during a simulation.',
                        '**Cascade Depth**: Calculate the longest propagation chain originating from the initial disruption.',
                        '**Recovery Time**: Measure simulation time from disruption until complete stabilization.',
                        '**System Impact Percentage**: Calculate the weighted portion of the infrastructure network affected according to service criticality.',
                        '**Live Metrics**: Update simulation metrics as the cascade progresses.'
                    ]
                },

                {
                    title: 'Scenario Management',
                    items: [
                        '**Built-In Scenarios**: Provide a deterministic Power Grid Failure scenario as the standard demonstration workflow.',
                        '**Scenario Creation**: Allow users to create and save simulation scenarios.',
                        '**Scenario Replay**: Re-run saved scenarios to verify deterministic results.',
                        '**Disruption Configuration**: Select one or multiple services and configure disruption parameters.',
                        '**Reproducible Results**: Ensure identical scenario configurations produce identical simulation outcomes.',
                        '**Scenario CRUD API**: Provide backend endpoints for scenario management with request validation.'
                    ]
                },

                {
                    title: 'Interactive User Experience',
                    items: [
                        '**Cinematic Landing Experience**: Introduce the urban infrastructure problem before entering the simulator.',
                        '**Interactive Simulator**: Provide graph visualization, simulation controls, scenario management, metrics, and timeline views.',
                        '**Real-Time Visualization**: Animate infrastructure state changes as the cascade progresses.',
                        '**Event Timeline**: Display the chronological sequence of infrastructure failures, propagation, and recovery events.',
                        '**Light/Dark Theme**: Allow users to switch between light and dark interface themes.',
                        '**Responsive Layout**: Reflow the graph, metrics, controls, and timeline for mobile viewport sizes.'
                    ]
                },

                {
                    title: 'Frontend Architecture',
                    items: [
                        '**React 18**: Build the interactive simulator using a component-based React architecture.',
                        '**TypeScript**: Use static typing across frontend components and simulation logic.',
                        '**Vite**: Provide a fast modern frontend development and build environment.',
                        '**Tailwind CSS 3**: Implement responsive utility-based styling.',
                        '**React Flow**: Render and interact with the urban infrastructure dependency graph.',
                        '**Lucide React**: Provide interface icons.',
                        '**Client-Side Simulation**: Run the deterministic simulation engine entirely in the browser when backend services are unavailable.'
                    ]
                },

                {
                    title: 'Backend & REST API',
                    items: [
                        '**Node.js + Express**: Provide the server-side API layer for simulation and scenario management.',
                        '**TypeScript Backend**: Maintain type-safe backend services and controllers.',
                        '**REST API**: Connect the frontend and backend through JSON-based REST endpoints.',
                        '**Graph Service**: Provide infrastructure graph data and relationships.',
                        '**Scenario Service**: Handle scenario creation, retrieval, updates, and validation.',
                        '**Simulation Service**: Provide server-side simulation functionality.',
                        '**Metrics Service**: Calculate simulation metrics on the backend.',
                        '**Centralized Error Handling**: Validate requests and provide consistent backend error responses.'
                    ]
                },

                {
                    title: 'Database & Offline Architecture',
                    items: [
                        '**PostgreSQL**: Persist infrastructure services, dependencies, scenarios, disruptions, simulation runs, events, snapshots, and metrics.',
                        '**Supabase Compatibility**: Support hosted PostgreSQL deployments such as Supabase.',
                        '**Deterministic In-Memory Fallback**: Continue operating with seeded in-memory data when PostgreSQL is unavailable.',
                        '**Offline Fallback**: Allow the demonstration simulator to continue functioning without network connectivity.',
                        '**Database Migrations**: Provide migration commands for initializing the PostgreSQL schema.',
                        '**Database Seeding**: Seed the deterministic infrastructure network and demonstration data.'
                    ]
                },

                {
                    title: 'Testing & Validation',
                    items: [
                        '**Vitest Testing**: Use Vitest for frontend simulation, component, and backend route testing.',
                        '**Propagation Tests**: Verify dependency-stress accumulation and `HEALTHY → DEGRADED → FAILED` transitions.',
                        '**Recovery Tests**: Verify recovery-state transitions and dependent-service de-escalation.',
                        '**Metrics Tests**: Validate cascade depth, affected-service counts, and recovery-time calculations.',
                        '**Component Tests**: Test simulation controls, scenario management, and simulation timeline behavior.',
                        '**Backend API Tests**: Validate scenario request contracts and API behavior.',
                        '**Determinism Testing**: Confirm that repeated execution of the same reference scenario produces identical results.'
                    ]
                }
            ],

            installation: [
                {
                    title: 'Clone Repository',
                    code: 'git clone https://github.com/adityakamble69/Urban-Infrastructure-Cascade-Simulator.git\ncd Urban-Infrastructure-Cascade-Simulator-main',
                    type: 'code'
                },

                {
                    title: 'Backend Setup',
                    code: 'cd backend\nnpm install\ncp .env.example .env',
                    type: 'code'
                },

                {
                    title: 'Configure Backend',
                    code: 'DATABASE_URL=your_database_url\nPORT=5000\nCORS_ORIGIN=http://localhost:5173',
                    type: 'code'
                },

                {
                    title: 'Initialize Database',
                    code: 'npm run migrate\nnpm run seed',
                    type: 'code'
                },

                {
                    title: 'Start Backend',
                    code: 'npm run dev',
                    type: 'code'
                },

                {
                    title: 'Frontend Setup',
                    code: 'cd frontend\nnpm install\ncp .env.example .env',
                    type: 'code'
                },

                {
                    title: 'Configure Frontend',
                    code: 'VITE_API_URL=http://localhost:5000',
                    type: 'code'
                },

                {
                    title: 'Start Frontend',
                    code: 'npm run dev\n# Application available at http://localhost:5173',
                    type: 'code'
                },

                {
                    title: 'Run Tests',
                    code: '# Frontend tests\ncd frontend\nnpm run test\n\n# Backend tests\ncd backend\nnpm run test',
                    type: 'code'
                }
            ],

            challengesAndSolutions: [
                {
                    problem: 'Modeling Complex Urban Infrastructure Dependencies',
                    solution: 'Represented critical city services as nodes in a directed weighted dependency graph, allowing the simulator to model how failures in one service can affect dependent systems.'
                },

                {
                    problem: 'Simulating Cascading Failures Deterministically',
                    solution: 'Implemented a deterministic stress-accumulation propagation engine where failed dependencies contribute their full dependency strength and degraded dependencies contribute half their strength, producing reproducible results for identical scenarios.'
                },

                {
                    problem: 'Modeling Both Failure and Recovery',
                    solution: 'Implemented separate propagation and recovery engines so infrastructure can transition from healthy to degraded or failed and later recover through recovering and recovered states.'
                },

                {
                    problem: 'Making Complex Infrastructure Data Understandable',
                    solution: 'Used React Flow to transform the dependency network into an interactive graph where users can pan, zoom, select nodes, and inspect dependencies and dependents.'
                },

                {
                    problem: 'Measuring the Severity of Cascading Failures',
                    solution: 'Created dedicated metrics for affected services, cascade depth, recovery time, and weighted system impact percentage so users can quantitatively understand simulation outcomes.'
                },

                {
                    problem: 'Keeping the Simulator Functional Without a Database',
                    solution: 'Implemented deterministic in-memory and offline fallbacks so the core simulation remains usable even when the PostgreSQL backend is unreachable.'
                },

                {
                    problem: 'Maintaining Consistency Between Frontend and Backend',
                    solution: 'Mirrored the core propagation and simulation logic across the frontend and backend so simulations can run client-side while maintaining equivalent server-side behavior.'
                },

                {
                    problem: 'Validating Simulation Correctness',
                    solution: 'Built Vitest test suites covering propagation thresholds, recovery transitions, metrics calculations, UI behavior, API contracts, and deterministic scenario replay.'
                },

                {
                    problem: 'Creating a Decision-Support Experience Without Real Infrastructure Risk',
                    solution: 'Designed the application strictly as an educational and decision-support simulator rather than connecting it to real infrastructure, devices, or operational control systems.'
                },

                {
                    problem: 'Supporting Different Devices and Presentation Modes',
                    solution: 'Implemented responsive layouts and light/dark themes, with the graph, metrics, controls, and timeline adapting to smaller mobile viewport widths.'
                }
            ]
        }
    ],
    experiences: [
        {
            id: `prof-new-1`,
            company: `Asterisc Technocart Pvt Ltd`,
            position: `Web Developer Intern`,
            description: `Working as a Web Developer Intern at Asterisc Technocart Pvt Ltd, contributing to the design and development of responsive, user-friendly web applications using modern web technologies.`,
            responsibilities: [
                `Design and develop responsive web interfaces focused on usability, accessibility, and cross-device compatibility.`,
                `Build and maintain front-end components while integrating efficient back-end functionalities to support scalable web applications.`,
                `Collaborate with the development team to implement new features, improve existing functionality, and troubleshoot technical issues.`,
            ],
            skills: [
                `Web Development`,
                `Frontend Development`,
                `Responsive Design`,
                `JavaScript`,
                `Backend Development`,
                `UI/UX`,
            ],
            startDate: `2026-01-01`,
            isOngoing: true,
            location: `India · On-site`,
            type: `internship`,
            externalLink: ``,
            logo: `/assets/asterisc-technocart-logo.webp`,
            logoBg: `bg-white`,
        },
        {
            id: `prof-new-2`,
            company: `Codomax Digital Solutions`,
            position: `Full Stack Web Development Intern`,
            description: `Selected for the Full Stack Web Development Internship Program at Codomax Digital Solutions, gaining practical industry exposure through hands-on projects, real-world assignments, and structured technical learning.`,
            responsibilities: [
                `Develop and enhance full-stack web applications through hands-on projects and practical industry assignments.`,
                `Work with modern web development technologies to build responsive, functional, and user-friendly web solutions.`,
                `Complete assigned development tasks, submit project work, and track progress through the Codomax Digital Solutions Internship Portal.`,
                `Apply technical and problem-solving skills to real-world development assignments while following professional development practices.`,
            ],
            skills: [
                `Full Stack Web Development`,
                `Frontend Development`,
                `Backend Development`,
                `Web Development`,
                `JavaScript`,
                `Responsive Design`,
            ],
            startDate: `2026-08-11`,
            isOngoing: true,
            location: `Santhoshapuram, Chennai, Tamil Nadu, India · On-site`,
            type: `internship`,
            externalLink: `https://codomaxdigital.in`,
            logo: `/assets/codomax-logo.webp`,
            logoBg: `bg-white`,
        },
        {
            id: `vol-new-1`,
            company: `Techfest, IIT Bombay`,
            position: `College Ambassador`,
            description: `Selected as a College Ambassador for Techfest, IIT Bombay, Asia's largest science and technology festival, contributing to student engagement, outreach, innovation, and peer leadership while gaining access to certified courses and internship opportunities.`,
            responsibilities: [
                `Promote Techfest, IIT Bombay initiatives, events, and opportunities among students and peers.`,
                `Drive student engagement and awareness by communicating Techfest programs, activities, and participation opportunities.`,
                `Encourage peers to participate in technology, innovation, and creativity-focused events and initiatives.`,
                `Represent Techfest within the college community while contributing to outreach and the overall success of Techfest 2026-27.`,
            ],
            skills: [
                `Leadership`,
                `Communication`,
                `Student Outreach`,
                `Community Engagement`,
                `Event Promotion`,
                `Networking`,
            ],
            startDate: `2026-07-01`,
            isOngoing: true,
            location: `Mumbai, Maharashtra, India · Hybrid`,
            type: `volunteer`,
            externalLink: `https://techfest.org`,
            logo: `/assets/techfest-iit-bombay-logo.webp`,
            logoBg: `bg-white`,
        },
    ],
    education: [
        {
            id: 'edu-1',
            institution: 'Kamla Nehru Mahavidhyalaya',
            degree: 'Bachelor of Vocational Education',
            major: 'Software Development',
            startDate: '2024-15-08',
            isOngoing: true,
            gpa: '8.7/10.00',
            activities: [
                'Full Stack Web Development Projects',
                'Frontend & Backend Development',
                'Open Source Contributions',
                'Web Development Workshops & Hackathons'
            ],
            achievements: [
                'Built responsive and scalable full stack web applications',
                'Developed secure REST APIs and database-driven applications',
                'Created user-friendly interfaces using modern frontend technologies',
                'Successfully deployed and maintained web applications'
            ],
        },
        // {
        //     id: 'edu-2',
        //     institution: 'SMAN 88 Jakarta',
        //     degree: 'High School Diploma',
        //     major: 'Science (IPA)',
        //     startDate: '2020-06-01',
        //     endDate: '2023-06-30',
        //     isOngoing: false,
        //     activities: ['Science Studies'],
        //     achievements: [
        //         'Strong foundation in mathematics and physics',
        //         'Analytical thinking development',
        //     ],
        // },
    ],
    achievements: [
        // {
        //     id: 'ach-1',
        //     title: 'Top 15/90 - Data Mining ADIKARA 2024',
        //     issuer: 'Telkom University',
        //     date: '2024-10-01',
        //     description: 'Achieved top 15 ranking in data mining competition, applying advanced ML models to complex datasets.',
        //     category: 'award',
        // },

        {
            id: 'cert-01',
            title: 'Build a free website with WordPress',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'MTY7RNV70VMA',
            credentialUrl: 'https://coursera.org/verify/MTY7RNV70VMA',
            type: 'Project',
            tags: ['WordPress', 'Web Development'],
            category: 'certification',
            image: '/certificate/wordpress_page-0001.jpg',
        },
        {
            id: 'cert-02',
            title: 'Introduction to Project Management with ClickUp',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'SPVVROECY9G',
            credentialUrl: 'https://coursera.org/verify/SPVVROECY9G',
            type: 'Project',
            tags: ['Project Management', 'ClickUp'],
            category: 'certification',
            image: '/certificate/project management with clickup_page-0001.jpg',
        },
        {
            id: 'cert-03',
            title: 'Marketing Design with Easil',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: '06H8HPUXFKE9',
            credentialUrl: 'https://coursera.org/verify/06H8HPUXFKE9',
            type: 'Project',
            tags: ['Marketing', 'Graphic Design', 'Easil'],
            category: 'certification',
            image: '/certificate/marketing design with easil_page-0001.jpg',
        },
        {
            id: 'cert-04',
            title: 'Creating a Free Business Page with Blogger',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'CT9WSGIVQ4EE',
            credentialUrl: 'https://coursera.org/verify/CT9WSGIVQ4EE',
            type: 'Project',
            tags: ['Blogger', 'Web Development', 'Business'],
            category: 'certification',
            image: '/certificate/Creating a Free Business Page with Blogger_page-0001.jpg',
        },
        {
            id: 'cert-05',
            title: 'Graphic design: pop your LinkedIn with 3D effect using Canva',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'RT9IOWQBE9EM',
            credentialUrl: 'https://coursera.org/verify/RT9IOWQBE9EM',
            type: 'Project',
            tags: ['Graphic Design', 'Canva', 'LinkedIn', '3D Design'],
            category: 'certification',
            image: '/certificate/Graphic design pop your Linkedin_page-0001.jpg',
        },
        {
            id: 'cert-06',
            title: 'Create Your First Python Program From UST',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'OOIXQ68A5G9',
            credentialUrl: 'https://coursera.org/verify/OOIXQ68A5G9',
            type: 'Project',
            tags: ['Python', 'Programming', 'Machine Learning'],
            category: 'certification',
            image: '/certificate/Create Your First Python Program From UST_page-0001.jpg',
        },
        {
            id: 'cert-07',
            title: 'How to design Facebook and IG stories using Canva',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: '2U63350KKWVO',
            credentialUrl: 'https://coursera.org/verify/2U63350KKWVO',
            type: 'Project',
            tags: ['Canva', 'Graphic Design', 'Social Media'],
            category: 'certification',
            image: '/certificate/How to design Facebook and IG stories using Canva_page-0001.jpg',
        },
        {
            id: 'cert-08',
            title: 'Getting started with Azure IoT Hub',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'AGVFCLQ8XFCQ',
            credentialUrl: 'https://coursera.org/verify/AGVFCLQ8XFCQ',
            type: 'Project',
            tags: ['Azure', 'IoT', 'Cloud Computing'],
            category: 'certification',
            image: '/certificate/Getting started with Azure IOT Hub_page-0001.jpg',
        },
        {
            id: 'cert-09',
            title: 'Build a computer vision app with Azure Cognitive Services',
            issuer: 'Microsoft / Coursera',
            date: '2026-08-28',
            credentialId: 'TXU9K9URAXH2',
            credentialUrl: 'https://coursera.org/verify/TXU9K9URAXH2',
            type: 'Project',
            tags: ['Microsoft Azure', 'Computer Vision', 'AI', 'Cognitive Services'],
            category: 'certification',
            image: '/certificate/Build a computer vision app with Azure Cognitive_page-0001.jpg',
        },
        {
            id: 'cert-10',
            title: 'SketchUp: how to start modelling simple 3D objects',
            issuer: 'Coursera',
            date: '2026-08-28',
            credentialId: 'KLKY49YNOETK',
            credentialUrl: 'https://coursera.org/verify/KLKY49YNOETK',
            type: 'Project',
            tags: ['SketchUp', '3D Modeling', '3D Design'],
            category: 'certification',
            image: '/certificate/SketchUp how to start modelling simple 3D objects.jpg',
        },
        {
            id: 'cert-11',
            title: 'Master Class - Machine Learning',
            issuer: 'IPCS Global Nagpur',
            date: '2026-08-16',
            credentialId: undefined,
            credentialUrl: undefined,
            type: 'Certificate',
            tags: ['Machine Learning', 'Artificial Intelligence'],
            category: 'certification',
            image: '/certificate/machine learning.jpg',
        },
        {
            id: 'cert-12',
            title: 'Cracking Meta & Google Ads 2026 - Data, Automation & Attribution',
            issuer: 'WsCube Tech',
            date: '2026-08-11',
            credentialId: 'WS/2026/M/59708',
            credentialUrl: undefined,
            type: 'Certificate',
            tags: ['Google Ads', 'Meta Ads', 'Data', 'Automation', 'Attribution'],
            category: 'certification',
            image: '/certificate/Data,Automation & attribution.jpg',
        },
    ],
    techStack: [
        { name: 'JavaScript', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' },
        { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' },
        { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' },
        { name: 'PHP', icon: 'https://cdn.simpleicons.org/php', category: 'language' },
        { name: 'React', icon: 'https://cdn.simpleicons.org/react', category: 'framework' },
        { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' },
        { name: 'Svelte', icon: 'https://cdn.simpleicons.org/svelte', category: 'framework' },
        { name: 'SvelteKit', icon: 'https://cdn.simpleicons.org/svelte', category: 'framework' },
        { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' },
        { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express', category: 'framework' },
        { name: 'Flask', icon: 'https://cdn.simpleicons.org/flask', category: 'framework' },
        { name: 'Tailwind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' },
        { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql', category: 'database' },
        { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase', category: 'database' },
        { name: 'Google Apps Script', icon: 'https://cdn.simpleicons.org/googleappsscript', category: 'tool' },
        { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'tool' },
        { name: 'JWT', icon: 'https://cdn.simpleicons.org/jsonwebtokens', category: 'tool' },
    ],
    hardSkills: [
        { name: 'Full Stack Development', level: 'expert', category: 'software', description: 'Engineering scalable web applications from responsive frontends to secure backends and databases.' },
        { name: 'REST API Design', level: 'advanced', category: 'software', description: 'Designing and building REST APIs with Express.js, Flask, and FastAPI for real production apps.' },
        { name: 'Authentication & Security', level: 'advanced', category: 'software', description: 'Implementing JWT auth, bcrypt hashing, and Row Level Security across multiple production apps.' },
        { name: 'System Analysis', level: 'advanced', category: 'software', description: 'Translating requirements into scalable technical architecture, backed by documented PRDs and phased plans.' },
        { name: 'SQL & Relational Databases', level: 'expert', category: 'data', description: 'Designing and optimizing schemas across MySQL, PostgreSQL, and Supabase for real-world applications.' },
        { name: 'Frontend Engineering', level: 'expert', category: 'software', description: 'Building responsive, component-based interfaces with React, SvelteKit, and Tailwind CSS.' },
        { name: 'DevOps & Deployment', level: 'intermediate', category: 'devops', description: 'Deploying full-stack apps to Vercel, Render, and traditional hosting with environment-based config.' },
        { name: 'Browser Automation & Scraping', level: 'intermediate', category: 'other', description: 'Building headless-browser scraping services with Playwright and FastAPI.' },
        { name: 'OCR & AI Integration', level: 'intermediate', category: 'ai', description: 'Integrating Tesseract OCR and Google Gemini into a full-stack healthcare workflow.' },
        { name: 'Mobile Development', level: 'intermediate', category: 'software', description: 'Building cross-platform mobile apps with React Native, including GPS and biometric features.' },
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Innovative debugging and algorithmic optimization' },
        // { name: 'Systemic Thinking', description: 'Designing robust, scalable end-to-end architectures' },
        { name: 'Critical Thinking', description: 'Analytical approach to solving complex engineering challenges' },
        { name: 'Continuous Learning', description: 'Staying updated with state-of-the-art AI research' },
        { name: 'Analytical Thinking', description: 'Breaking down complex data into actionable insights' },
        { name: 'Adaptability', description: 'Quickly mastering new frameworks and AI models' },
        { name: 'Leadership', description: 'Leading engineering teams and managing complex projects' },
        { name: 'Communication', description: 'Translating complex AI concepts for stakeholders' },
        { name: 'Teamwork', description: 'Collaborative development in cross-functional agile teams' },
        { name: 'Research Skills', description: 'In-depth literature review and academic contribution' },
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' },
        { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' },
        { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' },
        { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' },
        { name: 'MySQL Workbench', icon: 'https://cdn.simpleicons.org/mysql', category: 'devops' },
        { name: 'Supabase', icon: 'https://cdn.simpleicons.org/supabase', category: 'devops' },
        { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'devops' },
        { name: 'XAMPP', icon: 'https://cdn.simpleicons.org/xampp', category: 'devops' },
        { name: 'Figma', icon: 'https://cdn.simpleicons.org/figma', category: 'design' },
        { name: 'Linux', icon: 'https://cdn.simpleicons.org/linux', category: 'devops' },
    ],
    faqs: [
        {
            question: 'What services do you offer?',
            answer: 'I build full-stack web applications end to end — React/Next.js and SvelteKit on the frontend, Node.js/Express, Flask, or Google Apps Script on the backend, and MySQL, PostgreSQL/Supabase, or Google Sheets for data. I also build mobile apps with React Native and automation tools with Python.',
        },
        {
            question: 'What technologies are you exploring?',
            answer: 'Currently exploring browser automation with Playwright, deeper AI integration (OCR + LLMs) in full-stack apps, and refining my SvelteKit and Supabase workflows.',
        },
        {
            question: 'Are you available for opportunities?',
            answer: 'Yes! I\'m open to internships, freelance projects, and collaborations in full-stack web development, mobile apps, and automation. Feel free to reach out!',
        },
    ],
 
    blogs: [
        {
            id: 'blog-1',
            slug: 'why-i-still-reach-for-svelte',
            title: 'Why I Still Reach for SvelteKit in 2026',
            excerpt: 'Comparing React and SvelteKit after shipping real projects in both — what actually changes day to day.',
            content: 'A practical comparison based on building MedFlow, Lifeline, and Hackathon Team Matcher in SvelteKit versus React-based projects...',
            image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-08-20',
            category: 'software-development',
            tags: ['SvelteKit', 'React', 'Frontend'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '5'
        },
        {
            id: 'blog-2',
            slug: 'google-apps-script-as-a-backend',
            title: 'Using Google Apps Script as a Real Backend',
            excerpt: 'How I built a full internship management system (Codeline) on Apps Script and Google Sheets — and where it breaks down.',
            content: 'Google Apps Script is usually dismissed as a toy, but for small-to-mid scale internal tools it can replace a traditional backend entirely...',
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-08-10',
            category: 'software-development',
            tags: ['Google Apps Script', 'Backend', 'Google Sheets'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '6'
        },
        {
            id: 'blog-3',
            slug: 'designing-a-cascade-failure-simulator',
            title: 'Designing a Deterministic Cascade Failure Simulator',
            excerpt: 'Notes from building the Urban Infrastructure Cascade Simulator — modeling dependency graphs and making failure propagation reproducible.',
            content: 'One of the hardest parts of the Urban Infrastructure Cascade Simulator was making sure the same scenario always produced the same result...',
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-08-05',
            category: 'software-development',
            tags: ['React Flow', 'System Design', 'Hackathon'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '7'
        },
        {
            id: 'blog-4',
            slug: 'jwt-auth-without-overengineering',
            title: 'JWT Auth Without Overengineering It',
            excerpt: 'A simple, battle-tested Express + JWT + bcrypt pattern I reuse across projects like Marginalia and the Student Attendance App.',
            content: 'Every project needs auth, and every project tempts you to over-architect it. Here is the pattern I default to...',
            image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-07-28',
            category: 'software-development',
            tags: ['Node.js', 'Express', 'JWT', 'Security'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '5'
        },
        {
            id: 'blog-5',
            slug: 'row-level-security-supabase',
            title: 'Row Level Security Saved Me From Myself',
            excerpt: 'What I learned setting up Supabase RLS policies for MedFlow and Hackathon Team Matcher instead of trusting the frontend.',
            content: 'The first time I skipped RLS "just for now," it cost me an afternoon of debugging a data leak in staging...',
            image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-07-15',
            category: 'software-development',
            tags: ['Supabase', 'PostgreSQL', 'Security'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '6'
        },
        {
            id: 'blog-6',
            slug: 'building-under-hackathon-pressure',
            title: 'What Leading a Hackathon Team Actually Teaches You',
            excerpt: 'Lessons from leading SyntaxSquad across multiple hackathons — task splitting, scope cuts, and judge Q&A prep.',
            content: 'Leading a team under a 24-36 hour clock is a different skill than solo coding. Here is what changed how I plan...',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-07-01',
            category: 'about-me',
            tags: ['Hackathon', 'Leadership', 'Team'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '5'
        },
        {
            id: 'blog-7',
            slug: 'gps-geofencing-attendance',
            title: 'Building GPS Geofencing for Attendance Apps',
            excerpt: 'How the Student Attendance App validates location before marking attendance, and the edge cases that broke my first version.',
            content: 'GPS-based attendance sounds simple until you account for GPS drift, indoor signal loss, and users at the edge of a geofence...',
            image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-06-20',
            category: 'software-development',
            tags: ['React Native', 'Geolocation', 'Mobile'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '6'
        },
        {
            id: 'blog-8',
            slug: 'phi-and-mysql-still-work',
            title: 'PHP and MySQL Still Ship Real Products',
            excerpt: 'Building Tazza, a full restaurant ordering and booking platform, reminded me why the "boring" stack still wins for a lot of projects.',
            content: 'Everyone wants to reach for the newest framework, but for Tazza the constraints (shared hosting, simple deploy) made PHP the right call...',
            image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-06-05',
            category: 'software-development',
            tags: ['PHP', 'MySQL', 'Web Development'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '5'
        },
        {
            id: 'blog-9',
            slug: 'ocr-plus-gemini-medical-reports',
            title: 'Pairing OCR with Gemini to Explain Medical Reports',
            excerpt: 'Notes on the AI Medical Report Analyzer — combining Tesseract OCR with Google Gemini, and being careful about what the AI is allowed to claim.',
            content: 'The tricky part of this project was not the pipeline, it was deciding what the AI should never say...',
            image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-05-25',
            category: 'applied-ai',
            tags: ['OCR', 'Gemini', 'Healthcare', 'Flask'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '6'
        },
        {
            id: 'blog-10',
            slug: 'from-first-html-page-to-full-stack',
            title: 'From My First HTML Page to Full Stack',
            excerpt: 'A short reflection on how building 15+ real projects changed how I think about picking a stack.',
            content: 'My journey into web development did not start with a framework, it started with a plain index.html file...',
            image: 'https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2000&auto=format&fit=crop&fm=webp',
            date: '2026-05-10',
            category: 'about-me',
            tags: ['Career', 'Web Development', 'About Me'],
            author: { name: 'Aditya', avatar: '/about/aditya.jpg' },
            readTime: '4'
        }
    ],
    gallery: [
        {
            id: 'gal-1',
            title: 'CPS Lab Research',
            description: 'Deep Learning research workshop at Cyber Physical System Laboratory.',
            date: '2025-01-20',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'research'
        },
        {
            id: 'gal-2',
            title: 'Smart City Symposium',
            description: 'Presenting AIoT solutions for sustainable urban development.',
            date: '2024-12-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Placeholder video
            thumbnail: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'event'
        },
        {
            id: 'gal-3',
            title: 'Neural Network Visualization',
            description: 'Custom visualization of a Convolutional Neural Network architecture.',
            date: '2024-11-30',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'technical'
        },
        {
            id: 'gal-4',
            title: 'Blockchain Hackathon',
            description: 'Building decentralized finance solutions in 48 hours.',
            date: '2024-10-25',
            type: 'image',
            url: 'https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'event'
        },
        {
            id: 'gal-5',
            title: 'IoT Prototype Demo',
            description: 'Testing real-time sensor integration with cloud platforms.',
            date: '2024-09-15',
            type: 'video',
            url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
            thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2000&auto=format&fit=crop&fm=webp',
            category: 'technical'
        }
    ],
};
