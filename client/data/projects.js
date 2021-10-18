import React from 'react';
import { pomodoroGo, portfolio, tastetest, unite } from '../img/projects';

import { ExternalIcon, GithubIcon } from '../img/icons';
import { html, postgres, react, redux } from '../img/logos';

export const projectsData = [
  {
    title: 'PomodoroGo',
    description: `A chrome extension that improves productivity by combining a web-site blocker, focus timer and data dashboard.`,
    image: pomodoroGo,
    role: 'Full Stack Developer',
    type: 'Group Project',
    stack: [react, postgres],
  },
  {
    title: 'Taste Test',
    description: `A small application that helps calculate some simple rankings and statistics for family held
     taste tests. Created as project led approach to learning Svelte.`,
    image: tastetest,
    role: 'Front End Developer',
    type: 'Personal Project',
    stack: [],
    buttons: [
      {
        text: 'View Git Project',
        link: 'https://github.com/benlammers/taste-test',
        linkAriaLabel: 'View Github repository for taste test',
        icon: <GithubIcon />,
      },
      {
        text: 'View Site',
        link: 'https://taste-test.vercel.app/',
        linkAriaLabel: 'View the hosted version of Taste Test',
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: 'Unite',
    description: `An application that provides the ability to RSVP and view details for our wedding.
      Developed with a focus on completing my first full stack application and practicing semantic HTML.`,
    image: unite,
    role: 'Full Stack Developer',
    type: 'Personal Project',
    stack: [react, redux, postgres],
    buttons: [
      {
        text: 'View Frontend Repo',
        link: 'https://github.com/benlammers/unite-frontend',
        linkAriaLabel: 'View Github repository for the frontend of Unite',
        icon: <GithubIcon />,
      },
      {
        text: 'View API Repo',
        link: 'https://github.com/benlammers/unite-api',
        linkAriaLabel: 'View Github repository for the API of Unite',
        icon: <GithubIcon />,
      },
      {
        text: 'View Site',
        link: 'https://benandmadison.ca',
        linkAriaLabel: 'View the hosted version of Unite',
        icon: <ExternalIcon />,
      },
    ],
  },
];
