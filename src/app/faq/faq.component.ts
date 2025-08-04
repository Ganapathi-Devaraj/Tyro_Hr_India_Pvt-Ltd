import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  faqs = [
    {
      category: "Job Seekers' FAQs – How We Help You Build Your Career",
      subQuestions: [
        { question: "How can I apply for jobs through Tyro HR India Pvt Ltd?", answer: "You can visit our Careers page, submit your resume, and apply for job openings that match your skills and experience." },
        { question: "Does Tyro HR offer career guidance and resume-building support?", answer: "Yes! We provide career counseling, resume-building tips, and interview preparation to help job seekers enhance their career prospects." },
        { question: "Are there any charges for job seekers?", answer: "No, our job placement services are completely free for candidates. We connect you with top employers based on your profile." }
      ]
    },
    {
      category: "Hiring with Tyro HR – Employers' FAQs",
      subQuestions: [
        { question: "How can my company hire employees through Tyro HR?", answer: "We provide end-to-end recruitment services, including sourcing, screening, and placement. Contact us to discuss your hiring needs." },
        { question: "What industries do you specialize in for recruitment?", answer: "We offer IT & Non-IT recruitment, covering industries like technology, healthcare, finance, education, manufacturing, and more." },
        { question: "Do you offer bulk hiring solutions?", answer: "Yes! We specialize in bulk hiring, contract staffing, and executive search for companies needing multiple resources quickly." }
      ]
    },
    {
      category: "HR Events & Networking – Your Questions Answered",
      subQuestions: [
        { question: "What HR events does Tyro HR India Pvt Ltd organize?", answer: "We conduct HR networking meetups, corporate events, workshops, and award programs to connect and recognize HR professionals." },
        { question: "How can I participate in HR events?", answer: "You can register online through our Events page, and we'll provide all the necessary details, including date, venue, and agenda." },
        { question: "Do you offer certificates for attending HR events?", answer: "Yes! Attendees receive certificates of participation, enhancing their professional credentials." }
      ]
    },
    {
      category: "Certification & Award Program – Everything You Need to Know",
      subQuestions: [
        { question: "What is the Certification & Award Program?", answer: "We recognize and certify outstanding HR professionals through our prestigious awards and certification programs." },
        { question: "How can I nominate someone for an HR award?", answer: "Visit our Certification/Award Program page to submit a nomination and review the selection criteria." },
        { question: "Are your certifications recognized in the industry?", answer: "Yes, our certifications are valued by HR professionals and organizations, adding credibility to your career." }
      ]
    },
    {
      category: "FAQs on Software Development & IT Solutions",
      subQuestions: [
        { question: "What software development services do you offer?", answer: "We provide custom software solutions, website and app development, ERP solutions, and AI-based applications for businesses." },
        { question: "Which technologies do you specialize in?", answer: "We work with Angular, React, .NET, Python, Node.js, MySQL, AWS, and more, ensuring modern, scalable solutions." },
        { question: "Do you offer post-development support?", answer: "Yes, we provide ongoing maintenance, updates, and troubleshooting to ensure your software runs smoothly." }
      ]
    },
    {
      category: "Software & HR Training FAQs – Start Your Learning Journey",
      subQuestions: [
        { question: "What training programs do you offer?", answer: "We provide corporate training for HR professionals, IT training (full-stack development, cloud computing, AI), and soft skills development." },
        { question: "How can I enroll in a training course?", answer: "Simply visit our Training Programs page, select a course, and complete the registration form." },
        { question: "Do you offer certification after training?", answer: "Yes! We issue certificates upon successful course completion, helping you boost your career prospects." }
      ]
    }
  ];
}
