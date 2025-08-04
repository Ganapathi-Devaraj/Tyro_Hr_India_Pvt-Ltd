import { Component } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent {
  announcements = [
    {
      title: 'Awards & Recognition',
      shortDescription: 'Honoring top HR professionals with prestigious awards.',
      fullDescription: 'We recognize HR leaders who bring transformation in their organizations.',
      image: 'https://i.pinimg.com/736x/3f/f0/8c/3ff08c25a291e640a2e6e444b805a078.jpg'
    },
    {
      title: 'Software Services',
      shortDescription: 'Providing best-in-class software development and consulting services.',
      fullDescription: 'We offer web and mobile app development, cloud solutions, and custom software.',
      image: 'https://i.pinimg.com/736x/58/7c/64/587c64c62c9d12cc1d94217782e7b02a.jpg'
    },
    {
      title: 'HR Meetups',
      shortDescription: 'Exclusive networking events for HR professionals to connect and grow.',
      fullDescription: 'Our HR meetups focus on leadership, innovation, and industry trends.',
      image: 'https://i.pinimg.com/736x/80/b3/92/80b392b2022ba48ef01f22973b6d66df.jpg'
    },
    {
      title: 'Software Development Training',
      shortDescription: 'Join our Full Stack Development course and upgrade your skills.',
      fullDescription: 'This course covers Angular, Node.js, MySQL, and cloud deployment with hands-on labs.',
      image: 'https://i.pinimg.com/736x/67/1b/0d/671b0d66e9c2c3706e8b4d464985df29.jpg'
    }
  ];

  selectedAnnouncement: any;

  openModal(announcement: any) {
    this.selectedAnnouncement = announcement;
    const modal = new (window as any).bootstrap.Modal(document.getElementById('announcementModal'));
    modal.show();
  }
}