import { Component } from '@angular/core';

@Component({
  selector: 'app-software-dev',
  templateUrl: './software-dev.component.html',
  styleUrls: ['./software-dev.component.css']
})
export class SoftwareDevComponent {
  carouselImages = [
    { src: 'https://i.pinimg.com/736x/71/c2/cc/71c2cc395f4b02800b577308099b8de5.jpg', title: 'Custom Software Development' },
    { src: 'https://i.pinimg.com/736x/6d/72/16/6d7216f28df37c7112a77ae4da8fc40a.jpg', title: 'Web Application Development' },
    { src: 'https://i.pinimg.com/736x/7f/14/40/7f1440dfe3d5b0e6ee9ca1c478ac4fa2.jpg', title: ' Mobile Application Development' },
    { src: 'https://i.pinimg.com/736x/19/c6/fd/19c6fd50689c5f48ceaf8fe4922a3484.jpg', title: ' Enterprise Software Solutions' }
  ];
  services = [
    {
      title: 'Custom Software Development',
      tagline:'"Bespoke Solutions Crafted for Your Business Needs."',
      image: 'https://i.pinimg.com/736x/74/8e/51/748e51a80f29b4c6dd6946cbc56fe3a9.jpg',
      introduction: 'Transform your unique business requirements into powerful software solutions with our Custom Software Development services. We create fully tailored, scalable, and reliable software that aligns perfectly with your business goals and enhances operational efficiency.',
      // other content...
      whyChooseTitle: 'Why Choose Custom Software?',
      whyChoosePoints: [
        'Specifically designed to solve your unique business challenges.',
        'Enhances productivity by automating your business process.',
        'Scalable as your business grows.',
        'Seamless integration with existing systems.',
        'Increases efficiency and reduces operational costs.'
      ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
    {
      title: 'Web Application Development',
      tagline:'"Empowering Your Business with Scalable & Interactive Web Apps."',
      image: 'https://i.pinimg.com/736x/0e/07/80/0e0780cec5095b930a6e5043d683ec03.jpg',
      introduction: 'Deliver seamless digital experiences to your users with our Web Application Development services. We build interactive, high-performance, and secure web applications that help you engage customers and streamline your business operations effectively.',
      // other content...le: 'Why Choose Custom Software?',
      whyChooseTitle: 'Why Choose Web Application Development?',
    whyChoosePoints: [
      'Access your business from anywhere, anytime.',
      'Delivers real-time, responsive, and dynamic web solutions.',
      'Easy integration with third-party services & APIs.',
      'Supports multi-platform accessibility.',
      'Scalable for high traffic and growing user base.'
    ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
    {
      title: ' Mobile Application Development',
      tagline:'"Innovative Mobile Apps to Keep Your Business in Your Customers Hands."',
      image: 'https://i.pinimg.com/736x/27/5d/2f/275d2f2edeab40d1b332c78c4b818819.jpg',
      introduction: 'Stay connected with your customers anytime, anywhere with our Mobile Application Development services. We craft intuitive, innovative, and feature-rich mobile apps tailored for both Android and iOS platforms to accelerate your business growth.',
    // other content...
    whyChooseTitle: 'Why Choose Mobile Application Development?',
    whyChoosePoints: [
      'Connect directly with customers via mobile devices.',
      'Boosts customer engagement and retention.',
      'Provides personalized user experience.',
      'Enables push notifications for real-time updates.',
      'Increases brand visibility and accessibility.'
    ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
    {
      title: ' Enterprise Software Solutions',
      tagline:'"Streamline & Simplify Your Business Operations with Smart Enterprise Software."',
      image: 'https://i.pinimg.com/736x/72/a1/b2/72a1b2d886ae34010dac644911e5c32f.jpg',
      introduction: 'Optimize and automate your complex business processes with our Enterprise Software Solutions. We develop robust, secure, and scalable enterprise applications that ensure smooth workflows and enhanced productivity across your organization.',
    // other content...
    whyChooseTitle: 'Why Choose Enterprise Software Solutions?',
    whyChoosePoints: [
      'Simplifies complex business workflows.',
      'Enhances internal communication & collaboration.',
      'Provides centralized data management.',
      'Increases transparency across departments.',
      'Improves overall business efficiency and decision-making.'
    ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
    {
      title: 'Full Stack Development',
      tagline:'"Complete Frontend & Backend Development Under One Roof."',
      image: 'https://i.pinimg.com/736x/8b/49/70/8b49703700bbccfb3351ac970b8f13e3.jpg',
      introduction: 'Experience end-to-end development services with our Full Stack Development expertise. From stunning front-end designs to powerful back-end systems, we provide complete, cohesive solutions that bring your digital vision to life.',
      // other content...
      whyChooseTitle: 'Why Choose Full Stack Development?',
      whyChoosePoints: [
        'One-stop solution for both frontend & backend development.',
        'Faster project execution & deployment.',
        'Cost-effective compared to hiring separate teams.',
        'Seamless communication between frontend & backend.',
        'Complete ownership & accountability of the project flow.'
      ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
    {
      title: ' UI/UX Design & Prototyping',
      tagline:'"Designing User-Centric & Visually Engaging Software Interfaces."',
      image: 'https://i.pinimg.com/736x/35/a1/e2/35a1e25e38e6a84f770926816c689367.jpg',
      introduction: 'Deliver an outstanding user experience with our UI/UX Design & Prototyping services. We focus on creating visually appealing, user-friendly, and interactive designs that enhance usability and leave a lasting impression on your audience.',
      // other content...
      whyChooseTitle: 'Why Choose UI/UX Design & Prototyping?',
    whyChoosePoints: [
      'Creates visually appealing and user-friendly interfaces.',
      'Enhances user engagement and satisfaction.',
      'Provides a clear, interactive product prototype before development.',
      'Reduces development cost by early identification of design flaws.',
      'Delivers intuitive navigation and better user journey.'
    ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
    {
      title: 'Cloud-Based Application Development',
      tagline:'"Empowering Your Business with Secure & Scalable Cloud Solutions."',
      image: 'https://i.pinimg.com/736x/70/bc/4c/70bc4cc4df0571e62c77f7fd4f352458.jpg',
      introduction: 'Unlock the full potential of the cloud with our Cloud-Based Application Development services. We design and deploy secure, flexible, and scalable cloud applications that enable seamless access, collaboration, and business continuity.',
      // other content...
      whyChooseTitle: 'Why Choose Cloud-Based Application Development?',
      whyChoosePoints: [
        'Accessible from any device, anywhere in the world.',
        'Highly secure, reliable & scalable infrastructure.',
        'Reduces hardware & infrastructure cost.',
        'Supports seamless data backup & recovery.',
        'Offers real-time collaboration and flexibility.'
      ],
      whyChooseUsTitle: 'Why Choose Tyro HR India Pvt Ltd?',
      whyChooseUsPoints: [
        '2+ Years of Software Development Experience',
        'Dedicated & Skilled Developers',
        'Agile Development Approach',
        'On-time Project Delivery',
        'Complete Transparency & Support'
      ],
    },
  ];

  selectedService: any = null;

  openService(service: any) {
    this.selectedService = service;
    const modal = new (window as any).bootstrap.Modal(
      document.getElementById('serviceModal')
    );
    modal.show();
  }


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

  