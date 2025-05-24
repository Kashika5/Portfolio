const greeting = {
    title: "Hi, I'm Kashika Arora",
    logo_name: "Kashika Arora",
    logo_img_show: false, // if true than show image(logo) in home page instant of text(logo)
    logo_img: "https://logo.vdev.in/name?name=name",
    full_name: "Kashika Arora",
    email: "email id",
    subTitle:
    "I am a BTech graduate in Computer Science from IP University, with a strong foundation in software development, algorithms, and problem-solving.. I'm a passionate learner who's always willing to learn and work across technologies and domains. I love to explore new technologies and leverage. Apart from that I also love to guide and mentor newbies. I'm currently into Web Development and working on my MERN Website",
    Programming: true,  // if true, Show 'Programming' section in home page, if false than not show
    developer: true,  // if true, Show 'Full Stack Development' section in home page, if false than not show
    designer: true,  // if true, Show 'designer' section in home page, if false than not show
    cloud_infra_architecture:true,  // if true, Show 'cloud_infra_architecture' section in home page, if false than not show
    data_Science: true,  // if true, Show 'data_Science' section in home page, if false than not show
    ml_ai: true,  // if true, Show 'ml_ai' section in home page, if false than not show
    Robotic: true,  // if true, Show 'Robotic' section in home page, if false than not show
    gamedev: true,  // if true, Show 'gamedev' section in home page, if false than not show
};

const BlogData = {
    // this show your dev.to blog in your Portfolio blog
    show_Blog: true,  // if true it Show your DEV.to article in Blog Section, if false than Blog Section convert to skill Section.
    devto_username: "Kashika",
    Blog_Bio : [
        // this is visible in '/blog' section if show_Blog: true, else show in skill section
        
    ]
};


const socialMedia = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "facebook",
        img: "https://logo.vdev.in/img?tool=facebook0",
        link: "https://www.facebook.com/kashika.arora.315/"
    },
    {
        icon: "twitter",
        img: "https://logo.vdev.in/img?tool=twitter",
        link: "Your twitter link"
    },
    {
        icon: "instagram",
        img: "https://logo.vdev.in/img?tool=instagram",
        link: "https://www.instagram.com/_kashika_arora/"
    },
    {
        icon: "github",
        img: "https://logo.vdev.in/img?tool=github",
        link: "https://github.com/"
    },
    {
        icon: "gitlab",
        img: "https://logo.vdev.in/img?tool=gitlab",
        link: "Your gitlab link"
    },
    {
        icon: "devto",
        img: "https://logo.vdev.in/img?tool=dev",
        link: "Your devto link"
    },
    {
        icon: "linkedin",
        img: "https://logo.vdev.in/img?tool=linkedin",
        link: "https://www.linkedin.com/in/kashika-arora-234531228/"
    },
    {
        icon: "mail",
        img: "https://logo.vdev.in/img?tool=mail",
        link: "mailto:kashikaarora17@gmail.com"
    }

];

const ProgrammingSkill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "c-programming",
        img: "https://logo.vdev.in/img?tool=c-programming"
    },
    {
        icon: "java",
        img: "https://logo.vdev.in/img?tool=java"
    },
    {
        icon: "python",
        img: "https://logo.vdev.in/img?tool=python"
    },

];

const DevSkill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "html",
        img: "https://logo.vdev.in/img?tool=html"
    },
    {
        icon: "css",
        img: "https://logo.vdev.in/img?tool=css3"
    },
    {
        icon: "js",
        img: "https://logo.vdev.in/img?tool=javascript"
    },
    {
        icon: "node",
        img: "https://logo.vdev.in/img?tool=node"
    },
    {
        icon: "sass",
        img: "https://logo.vdev.in/img?tool=sass"
    },
    {
        icon: "react",
        img: "https://logo.vdev.in/img?tool=react"
    },
    {
        icon: "vue",
        img: "https://logo.vdev.in/img?tool=vue-js"
    },
    {
        icon: "npm",
        img: "https://logo.vdev.in/img?tool=npm"
    },
    {
        icon: "yarn",
        img: "https://logo.vdev.in/img?tool=yarn"
    },
    {
        icon: "python",
        img: "https://logo.vdev.in/img?tool=python"
    },
    {
        icon: "wordpress",
        img: "https://logo.vdev.in/img?tool=wordpress"
    },
    {
        icon: "rust",
        img: "https://logo.vdev.in/img?tool=rust"
    }

];

const DesignSkill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "figma",
        img: "https://logo.vdev.in/img?tool=figma"
    },
    {
        icon: "sketch",
        img: "https://logo.vdev.in/img?tool=sketch"
    },
    {
        icon: "adobe-after-effects",
        img: "https://logo.vdev.in/img?tool=adobe-after-effects"
    },
    {
        icon: "adobe-xd",
        img: "https://logo.vdev.in/img?tool=adobe-xd"
    },
    {
        icon: "adobe-illustrator",
        img: "https://logo.vdev.in/img?tool=adobe-illustrator"
    },
    {
        icon: "adobe-photoshop",
        img: "https://logo.vdev.in/img?tool=adobe-photoshop"
    },
    {
        icon: "adobe-premiere-pro",
        img: "https://logo.vdev.in/img?tool=adobe-premiere-pro"
    }

];
const cloud_infra_architecture_Skill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "gcp",
        img: "https://logo.vdev.in/img?tool=google_cloud"
    },
    {
        icon: "aws",
        img: "https://logo.vdev.in/img?tool=amazon-web-services"
    },
    {
        icon: "azure",
        img: "https://logo.vdev.in/img?tool=azure"
    },
    {
        icon: "kubernetes",
        img: "https://logo.vdev.in/img?tool=kubernetes"
    },
    {
        icon: "travis",
        img: "https://logo.vdev.in/img?tool=travis"
    },
    {
        icon: "linode",
        img: "https://logo.vdev.in/img?tool=linode"
    },
    {
        icon: "oracle",
        img: "https://logo.vdev.in/img?tool=oracle"
    }

];
const data_Science_Skill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.vdev.in/img?tool=python"
    },
    {
        icon: "kaggle",
        img: "https://logo.vdev.in/img?tool=kaggle"
    },
    {
        icon: "tensorflow",
        img: "https://logo.vdev.in/img?tool=tensorflow"
    },
    {
        icon: "jupyter",
        img: "https://logo.vdev.in/img?tool=jupyter"
    }

];
const Ml_ai_Skill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "python",
        img: "https://logo.vdev.in/img?tool=python"
    },
    {
        icon: "tensorflow",
        img: "https://logo.vdev.in/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.vdev.in/img?tool=arduino"
    }

];

const RoboticSkill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "tensorflow",
        img: "https://logo.vdev.in/img?tool=tensorflow"
    },
    {
        icon: "arduino",
        img: "https://logo.vdev.in/img?tool=arduino"
    },
    {
        icon: "python",
        img: "https://logo.vdev.in/img?tool=python"
    },

];

const Gamedev_Skill = [
    // https://logo.vdev.in/ all logo list
    // you can use by changing tool name
    {
        icon: "unity",
        img: "https://logo.vdev.in/img?tool=unity"
    },
    {
        icon: "c-programming",
        img: "https://logo.vdev.in/img?tool=c-programming"
    },
    {
        icon: "c-sharp",
        img: "https://logo.vdev.in/img?tool=c-sharp-logo"
    }

];


const projects = [
    {
        id: "1",
        name: "project 1",
        Description: "Movie App",
        Code_Link: "https://github.com/Kashika5/movie-max",
        Live_link: "https://movixmod.netlify.app/",
        tool_used: "React",
        img: "/projects.jpg"
    },
    {
        id: "2",
        name: "project 2",
        Description: "React Native Chat App",
        Code_Link: "https://github.com/Kashika5/react-native-chat-app",
        Live_link: "this is Live link",
        tool_used: "React Native",
        img: "/projects.jpg"
    },
    {
        id: "3",
        name: "project 3",
        Description: "Virtual AI Desktop Assistant",
        Code_Link: "https://github.com/Kashika5/virtual-AI-desktop",
        Live_link: "this is Live link",
        tool_used: "Python",
        img: "/projects.jpg"
    }
];
const certificate = [
    {
        id: "1",
        name: "Software Engineer Intern",
        Description: "Escorts Kubota Limited",
        Link: "https://www.escortskubota.com/",
        
    },
    {
        id: "2",
        name: "Software Engineer Intern",
        Description: "NHPC Limited",
        Link: "https://www.nhpcindia.com/",
        img: ""

    },
    {
        id: "3",
        name: "Research Trainee",
        Description: "Defense Research & Development Organization",
        Link: "https://drdo.gov.in/drdo/labs-and-establishments/centre-artificial-intelligence-robotics-cair",
        img: ""
    }
];

const ProgrammingBio = [
    "Writing clean, efficient code using Python, JavaScript, and C/C++",
    "Debugging and optimizing code for performance and reliability",
    "Building scalable applications using Object-Oriented and Functional Programming"
];

const DevBio = [
    "Building responsive website front end using React-Redux",
    'Developing mobile applications using Flutter',
    'Creating application backend in Node & Express'
];

const DesignBio = [
    'Designing attractive user interface for mobile and web applications',
    'Customizing logo designs',
    'Editing video'
]


const AboutBio =[
    ' I am experienced in full-stack development using React.js, Node.js, Python, Flutter, and MySQL.',
    ' I am an intern alumnus of organizations like DRDO, NHPC, Escorts Kubota, and sbPowerDev, where I worked on real-world applications.',
    ' I am a BTech graduate in Computer Science from IP University.',
    ' Fun fact: \'Equal is Not Always Equal in Javascript\'',
    ' I am From Faridabad',
    ' I am available on almost every social media. You can message me'
];
const EducationBio =[
    
    'I am BTech graduate in Computer Science from IP University.',
    'I am skilled in core computer science subjects like Data Structures, Algorithms, Operating Systems, DBMS, and Computer Networks.',
    'I am a student with strong academic performance and hands-on experience through internships and projects.',
    'I am trained in modern development frameworks including React.js, Node.js, Flutter, and Python.',
    'I am passionate about applying theoretical knowledge to real-world software development and data analysis challenges.'
    
];
const ProjectsBio =[
    'Real-Time Chat Application',
    'I have created a chat app using React Native (frontend) and Node.js + Socket.io (backend), featuring dummy login, timestamps, and MongoDB-based chat history storage.',
    'Movie App',
    ' I have designed a dynamic movie app using React.js that fetches and displays trending, upcoming, and searched movies using TMDB API. Features include search, filters, detailed movie pages, and responsive UI design.',
    'Virtual AI Desktop Assistant',
    'I have developed a Python-based desktop assistant that performs tasks using voice commands, such as opening applications, searching the web, reading emails, setting reminders, and more — integrating libraries like speech_recognition, pyttsx3, and webbrowser'
];
const ContactBio =[
    'I am a BTech Graduate in Computer Science from IP University',
    ' I am From Faridabad',
    ' I am available on almost every social media. You can message me'

];

const cloud_infra_architecture_Bio = [
    "Deploying applications on AWS, Azure, and Google Cloud",
    "Designing scalable microservices using Docker and Kubernetes",
    "Managing CI/CD pipelines with GitHub Actions and Jenkins",
];

const data_Science_Bio = [
    "Analyzing large datasets using Pandas and NumPy",
    "Developing highly scalable production ready models for various deeplearning and statistical use cases",
    "Visualizing insights with Matplotlib, Seaborn, and Power BI"
];

const Ml_ai_Bio = [
    "Building predictive models using Scikit-learn and TensorFlow",
    "Training and evaluating neural networks for real-world applications",
    "Implementing NLP, Computer Vision, and Recommendation Systems"
];

const RoboticBio = [
    "Programming microcontrollers using Arduino and Raspberry Pi",
    "Integrating sensors and actuators for autonomous systems",
    "Developing robotics control algorithms with ROS"
];

const Gamedev_Bio = [
    "Creating 2D and 3D games using Unity and Unreal Engine",
    'Writing game logic and mechanics with Java and C++',
    "Designing immersive gameplay experiences with animations and audio"
];

export {
    greeting,
    socialMedia,
    DevSkill,
    DesignSkill,
    projects,
    certificate,
    AboutBio,
    EducationBio,
    ProjectsBio,
    ContactBio,
    DevBio,
    DesignBio,
    BlogData,
    ProgrammingSkill,
    RoboticSkill,
    cloud_infra_architecture_Skill,
    data_Science_Skill,
    Ml_ai_Skill,
    Gamedev_Skill,
    cloud_infra_architecture_Bio,
    data_Science_Bio,
    Ml_ai_Bio,
    Gamedev_Bio,
    ProgrammingBio,
    RoboticBio
};
