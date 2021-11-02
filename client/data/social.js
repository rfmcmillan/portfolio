import React from 'react';
import { GithubIcon, GmailIcon, LinkedinIcon } from './../img/icons';

export const socialData = [
  {
    fileName: './assets/LinkedIn.svg',
    aValues: {
      href: 'https://www.linkedin.com/in/russelmcmillan/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Open LinkedIn profile for Russel McMillan',
    },
    className: 'socialLinkedin',
  },
  {
    fileName: './assets/GitHub.svg',
    aValues: {
      href: 'https://github.com/rfmcmillan',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Open Github profile for Russel McMillan',
    },
    className: 'socialGithub',
  },
  {
    fileName: './assets/Gmail.svg',
    aValues: {
      href: 'mailto:rfmcmillan@gmail.com',
      ariaLabel: 'Send mail to rfmcmillan@gmail.com',
    },
    className: 'socialGmail',
  },
];
