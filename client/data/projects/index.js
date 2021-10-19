import React from 'react';
import { pomodoroGo, pocketTrade, globalSnacker } from '../../img/projects';

import { ExternalIcon, GithubIcon } from '../../img/icons';
import { postgres, react, redux } from '../../img/logos';

export const projectsData = [
  {
    title: 'PomodoroGo',
    description: `A chrome extension that improves productivity by combining a web-site blocker, focus timer and data dashboard.`,
    image: './assets/Dashboard.png',
    role: 'Full Stack Developer',
    type: 'Group Project',
    stack: [react, postgres, redux],
    buttons: [
      {
        text: 'View Repo',
        link: 'https://github.com/rfmcmillan/pomodoro-go-1',
        linkAriaLabel: 'View Github repository for PomodoroGo',
        icon: <GithubIcon />,
      },
      {
        text: 'View Site',
        link: 'https://pomodoro-go-1.herokuapp.com/home',
        linkAriaLabel: 'View the hosted version of PomodoroGo',
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: 'Global Snacker',
    description: `An e-commerce site that sells snacks from around the world.`,
    image: './assets/GlobalSnackerHome.png',
    role: 'Full Stack Developer',
    type: 'Group Project',
    stack: [react, postgres, redux],
    buttons: [
      {
        text: 'View Repo',
        link: 'https://github.com/rfmcmillan/Grace-Shopper-2101',
        linkAriaLabel: 'View Github repository for Global Snacker',
        icon: <GithubIcon />,
      },
      {
        text: 'View Site',
        link: 'https://global-snacker-1.herokuapp.com/',
        linkAriaLabel: 'View the hosted version of Global Snacker',
        icon: <ExternalIcon />,
      },
    ],
  },
  {
    title: 'PocketTrade',
    description: `A portfolio management app that allows an investor to quickly rebalance their portfolio.`,
    image: './assets/PocketTrade.png',
    role: 'Full Stack Developer',
    type: 'Group Project',
    stack: [react, postgres, redux],
    buttons: [
      {
        text: 'View Repo',
        link: 'https://github.com/rfmcmillan/pocket-trade',
        linkAriaLabel: 'View Github repository for Global Snacker',
        icon: <GithubIcon />,
      },
      {
        text: 'View Site',
        link: 'https://pocket-trade.herokuapp.com/#/',
        linkAriaLabel: 'View the hosted version of Global Snacker',
        icon: <ExternalIcon />,
      },
    ],
  },
];
