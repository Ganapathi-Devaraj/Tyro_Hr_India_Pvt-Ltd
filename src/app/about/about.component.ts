import { Component } from '@angular/core';
import {  } from '@angular/router';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  leaders = [
    {
      image: '../assets/common/saran.jpg',
      name: 'Dr. Saranraj S MBA',
      designation: 'Managing director',
      about: '✨ Saranraj – Founder of Tyro HR India Pvt Ltd\n\nSaranraj is the visionary founder of Tycoon Recruitment Organization Pvt Ltd (Tyro HR India), a dynamic leader in the HR and recruitment industry. With a strong passion for empowering organizations through strategic talent acquisition, Saranraj established Tyro HR India with the mission of bridging the gap between exceptional talent and top-tier companies. With over 10 years of experience in the HR domain, Saranraj has played a pivotal role in shaping innovative hiring solutions and fostering a thriving HR community. His leadership style emphasizes integrity, efficiency, and long-term partnerships, ensuring that every client and candidate receives personalized, result-driven service.\n\nSaranraj’s dedication to excellence and continuous learning has made Tyro HR India a trusted name in the industry, known for delivering high-quality recruitment services, organizing impactful HR events, and recognizing the best HR professionals across the nation. Driven by a vision to redefine recruitment and human resource strategies, Saranraj continues to lead Tyro HR India towards greater heights, making a significant difference in the careers of countless professionals and the growth of organizations.'
    },
    {
        image: '',
        name: 'Mrs. V. Subasaranya',
        designation: 'Managing Director',
        about: '✨ Mrs. V. Subasaranya – Managing Director of Tyro HR India Pvt Ltd\n\nMrs. V. Subasaranya is the dynamic Managing Director of Tycoon Recruitment Organization Pvt Ltd (Tyro HR India), steering the company towards excellence in the HR and recruitment sector. With a strong foundation in leadership, strategic management, and organizational growth, she has been instrumental in enhancing Tyro HR India vision of connecting outstanding talent with leading businesses.\n\nWith a career spanning over a decade, Mrs. Subasaranya brings unparalleled expertise in people management, operational excellence, and business development. Her leadership focuses on building strong client relationships, fostering innovation, and maintaining the highest standards of integrity and professionalism.\n\nThrough her guidance, Tyro HR India has expanded its reach, delivering exceptional recruitment solutions, organizing transformative HR events, and creating a vibrant community of HR professionals. Mrs. Subasaranya’s commitment to continuous improvement, inclusivity, and ethical leadership has established Tyro HR India as a benchmark for success in the industry, empowering both organizations and individuals to achieve their goals.'
      }
  ];
  
  selectedLeader: any = null;
  
  openModal(leader: any) {
    this.selectedLeader = leader;
  }
  
}
