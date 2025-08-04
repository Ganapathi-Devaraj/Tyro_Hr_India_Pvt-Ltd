import { Component } from '@angular/core';

@Component({
  selector: 'app-soft-training',
  templateUrl: './soft-training.component.html',
  styleUrls: ['./soft-training.component.css']
})
export class SoftTrainingComponent {

  courses = [
    {
      
      title: 'Full Stack Development',
      image: 'https://i.pinimg.com/736x/8b/49/70/8b49703700bbccfb3351ac970b8f13e3.jpg',
      introduction: 'Master both frontend and backend technologies with our Full Stack Development course. Build complete web applications from scratch.',
      overview: 'This course covers client-side and server-side development including HTML, CSS, JavaScript, Angular, Node.js, Express, and databases.',
      scope: ['Frontend Development', 'Backend Development', 'Database Integration', 'API Development', 'Deployment'],
      future: 'Career as Full Stack Developer, Web Developer, Frontend/Backend Developer, Software Engineer, or Tech Lead.',
      offers: [
        'Access to Development Lab',
        'Real-time Projects',
        'Internship Opportunity',
        'Completion Certificate'
      ],
      syllabus: `1. HTML, CSS, JavaScript Basics
    2. Advanced Frontend - Angular
    3. Backend Development - Node.js, Express
    4. Database Integration - MySQL, MongoDB
    5. API Development & Integration
    6. Deployment & Hosting
    7. Live Project Work`
    },
    {
      title: 'Cloud Computing',
      image: 'https://i.pinimg.com/236x/6d/49/22/6d4922c2e1b67b7aebf47e0b81878030.jpg',
      introduction: 'Learn to manage, deploy, and secure applications on the cloud with our Cloud Computing course.',
      overview: 'This course covers cloud fundamentals, cloud services, deployment models, AWS, Azure, Google Cloud, and DevOps basics.',
      scope: ['Cloud Architecture', 'Deployment Models', 'Cloud Security', 'DevOps Integration'],
      future: 'Career as Cloud Engineer, Cloud Administrator, Solutions Architect, DevOps Engineer.',
      offers: [
        'Cloud Lab Access',
        'Real-time Cloud Projects',
        'Internship Opportunity',
        'Completion Certificate'
      ],
      syllabus: `1. Cloud Fundamentals & Architecture
    2. Cloud Service Models - IaaS, PaaS, SaaS
    3. AWS, Azure & Google Cloud Overview
    4. Cloud Deployment & Security
    5. DevOps Basics & CI/CD Pipeline
    6. Cloud Project Implementation`
    },
    {
      title: 'Frontend Development',
      image: 'https://i.pinimg.com/736x/4b/29/df/4b29df76450698bd84605aea9e85d583.jpg',
      introduction: 'Learn how to design and develop stunning user interfaces with our Frontend Development course.',
      overview: 'This course covers HTML, CSS, JavaScript, Bootstrap, and Angular frameworks to build interactive and responsive web applications.',
      scope: ['UI Design', 'Responsive Web Development', 'JavaScript Programming', 'Angular Framework'],
      future: 'Career as Frontend Developer, UI Developer, Web Designer, Angular Developer.',
      offers: [
        'Frontend Lab Access',
        'Real-time UI Projects',
        'Internship Opportunity',
        'Completion Certificate'
      ],
      syllabus: `1. HTML, CSS & JavaScript Basics
    2. Bootstrap Framework
    3. Responsive Web Design
    4. JavaScript & DOM Manipulation
    5. Angular Fundamentals
    6. UI Development Projects`
    },
    {
      title: 'Backend Development',
      image: 'https://i.pinimg.com/736x/03/14/53/031453c0f824f1ff8fd6f26476b54c21.jpg',
      introduction: 'Learn to build powerful server-side applications with our Backend Development course.',
      overview: 'This course covers server-side programming, API development, database integration, and deployment using Node.js, Express, and SQL/NoSQL databases.',
      scope: ['API Development', 'Database Integration', 'Authentication & Authorization', 'Server Deployment'],
      future: 'Career as Backend Developer, API Developer, Database Developer, Node.js Developer, Software Engineer.',
      offers: [
        'Backend Lab Access',
        'Real-time API Projects',
        'Internship Opportunity',
        'Completion Certificate'
      ],
      syllabus: `1. Introduction to Backend Development
    2. Node.js & Express Framework
    3. RESTful API Development
    4. Database Integration - MySQL, MongoDB
    5. Authentication & Security
    6. API Testing & Documentation
    7. Live Backend Project`
    },
    
    {
      title: 'Testing & QA',
      image: 'https://i.pinimg.com/736x/f5/e2/e3/f5e2e3b52b3e9c5084c057810fa01c86.jpg',
      introduction: 'Ensure quality and reliability with our Testing and QA course. Learn manual and automation testing techniques.',
      overview: 'Covers testing lifecycle, test case design, defect management, Selenium, and continuous testing.',
      scope: ['Manual Testing', 'Automation Testing', 'Performance Testing', 'Security Testing'],
      future: 'Career as QA Analyst, Automation Tester, Test Lead, or Performance Tester.',
      offers: [
        'Test Lab Access',
        'Hands-on Projects',
        'Internship Support',
        'Completion Certificate',
        'Tools: Selenium, JMeter, Postman'
      ],
      syllabus: `1. Testing Fundamentals
    2. Manual Testing Techniques
    3. Automation Tools - Selenium, JMeter
    4. Defect Reporting & Test Management
    5. API Testing using Postman
    6. Real-time Testing Project`
    },
    
    {
      title: 'UI/UX Design',
      image: 'https://i.pinimg.com/736x/d6/3f/31/d63f3160fb7c9d18e3389a57da3b81a3.jpg',
      introduction: 'Design visually appealing and user-friendly interfaces with our UI/UX Design course.',
      overview: 'Covers design principles, user research, wireframing, prototyping, and interactive design tools like Figma & Adobe XD.',
      scope: ['User Interface Design', 'User Experience Research', 'Prototyping', 'Design Tools'],
      future: 'Career as UI Designer, UX Researcher, Product Designer, Interaction Designer, or Visual Designer.',
      offers: [
        'Design Lab Access',
        'Hands-on UI/UX Projects',
        'Internship Opportunity',
        'Completion Certificate',
        'Tools: Figma, Adobe XD'
      ],
      syllabus: `1. Introduction to UI/UX Design
    2. User Research & Personas
    3. Wireframing & Prototyping
    4. Visual Design Principles
    5. Interactive Design using Figma & Adobe XD
    6. Real-time Design Project`
    }
  ];

  selectedCourse: any = null;
  password: string = '';
  syllabusUnlocked: boolean = false;
  wrongPassword: boolean = false;

  openCourse(course: any) {
    this.selectedCourse = course;
    this.password = '';
    this.syllabusUnlocked = false;
    this.wrongPassword = false;
  }

  closeCourse() {
    this.selectedCourse = null;
  }

  unlockSyllabus() {
    if (this.password === '1234') {
      this.syllabusUnlocked = true;
      this.wrongPassword = false;
    } else {
      this.wrongPassword = true;
    }
  }


  selectedTab = 0;  // Default first tab selected
  techCategories = [
    {
      title: 'Programming Languages',
      id: 'programming-tech',
      technologies: [
        { name: 'JavaScript', icon: 'bi bi-filetype-js', color: '#f7df1e' },
        { name: 'TypeScript', icon: 'bi bi-code-slash', color: '#3178c6' },
        { name: 'Python', icon: 'bi bi-filetype-py', color: '#3776ab' },
        { name: 'Java', icon: 'bi bi-cup-hot-fill', color: '#e76f00' },
        { name: 'C#', icon: 'bi bi-hash', color: '#512bd4' },
        { name: 'Dart', icon: 'bi bi-droplet-fill', color: '#00b4ab' },
        { name: 'Kotlin', icon: 'bi bi-braces', color: '#a97bff' },
        { name: 'Swift', icon: 'bi bi-lightning', color: '#f05138' },
        { name: 'Go', icon: 'bi bi-arrow-right-circle-fill', color: '#00add8' }
      ]
    },
 
    {
      title: 'Cloud',
      id: 'cloud-tech',
      technologies: [
        { name: 'AWS', icon: 'bi bi-cloud-fill', color: '#ff9900' },
        { name: 'Microsoft Azure', icon: 'bi bi-cloud-arrow-up-fill', color: '#0078d4' },
        { name: 'Google Cloud', icon: 'bi bi-cloud-drizzle-fill', color: '#4285f4' },
        { name: 'IBM Cloud', icon: 'bi bi-cloud-haze2-fill', color: '#052f6d' },
        { name: 'Oracle Cloud', icon: 'bi bi-cloud-lightning-fill', color: '#f80000' },
        { name: 'Heroku', icon: 'bi bi-cloud-fog2-fill', color: '#430098' },
        { name: 'Firebase', icon: 'bi bi-fire', color: '#ffcb2b' },
        { name: 'DigitalOcean', icon: 'bi bi-cloud-moon-fill', color: '#0080ff' },
        { name: 'Linode', icon: 'bi bi-cloud-rain-fill', color: '#00b300' },
        { name: 'Netlify', icon: 'bi bi-cloud-sun-fill', color: '#00ad9f' },
        { name: 'Vercel', icon: 'bi bi-triangle-fill', color: '#000000' },
        { name: 'Cloudflare', icon: 'bi bi-shield-fill-check', color: '#f38020' }
      ]
    },
    {
      title: 'Full Stack',
      id: 'fullstack-tech',
      technologies: [
        { name: 'MEAN Stack', icon: 'bi bi-box-fill', color: '#dd0031' },
    { name: 'MERN Stack', icon: 'bi bi-box2-fill', color: '#61dafb' },
    { name: 'Java Full Stack', icon: 'bi bi-cup-hot-fill', color: '#e76f00' },
    { name: '.NET Full Stack', icon: 'bi bi-windows', color: '#512bd4' },
    { name: 'Python Full Stack', icon: 'bi bi-filetype-py', color: '#3776ab' },
    { name: 'Flutter Full Stack', icon: 'bi bi-droplet-fill', color: '#00b4ab' }
      ]
    },
    
    {
      title: 'Database',
      id: 'database-tech',
      technologies: [
        { name: 'MySQL', icon: 'bi bi-database-fill', color: '#00758f' },
        { name: 'MongoDB', icon: 'bi bi-database-check', color: '#4db33d' },
        { name: 'SQL Server', icon: 'bi bi-database-exclamation', color: '#cc2927' }
      ]
    },
    {
      title: 'Frontend',
      id: 'frontend-tech',
      technologies: [
        { name: 'HTML5', icon: 'bi bi-filetype-html', color: '#e34c26' },
        { name: 'CSS3', icon: 'bi bi-filetype-css', color: '#264de4' },
        { name: 'Bootstrap', icon: 'bi bi-bootstrap-fill', color: '#7952b3' },
        { name: 'Tailwind CSS', icon: 'bi bi-wind', color: '#38bdf8' },
        { name: 'JavaScript', icon: 'bi bi-filetype-js', color: '#f7df1e' },
        { name: 'TypeScript', icon: 'bi bi-code-slash', color: '#3178c6' },
        { name: 'Angular', icon: 'bi bi-lightning-fill', color: '#dd0031' },
        { name: 'React', icon: 'bi bi-circle-fill', color: '#61dafb' },
        { name: 'Vue.js', icon: 'bi bi-triangle-fill', color: '#42b883' }
      ]
    }
  ];
}

