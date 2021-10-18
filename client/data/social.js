import React from 'react';
import { GithubIcon, GmailIcon, LinkedinIcon } from './../img/icons';

export const socialData = [
  {
    icon: <GithubIcon />,
    aValues: {
      href: 'https://github.com/rfmcmillan',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Open Github profile for Russel McMillan',
    },
    className: 'socialGithub',
  },
  {
    icon: <GmailIcon />,
    aValues: {
      href: 'mailto:rfmcmillan@gmail.com',
      ariaLabel: 'Send mail to rfmcmillan@gmail.com',
    },
    className: 'socialGmail',
  },
  {
    icon: <LinkedinIcon />,
    aValues: {
      href: 'https://www.linkedin.com/in/russelmcmillan/',
      target: '_blank',
      rel: 'noopener noreferrer',
      ariaLabel: 'Open LinkedIn profile for Russel McMillan',
    },
    className: 'socialLinkedin',
  },
];
