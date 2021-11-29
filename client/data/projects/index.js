import React from 'react';
import { pomodoroGo, pocketTrade, globalSnacker } from '../../img/projects';

import { ExternalIcon, GithubIcon } from '../../img/icons';
import {
  postgres,
  react,
  redux,
  express,
  materialUi,
  chai,
  mocha,
  html,
  css,
  nodejs,
  git,
  sequelize,
  webpack,
  jwt,
  heroku,
  chrome,
  alpaca,
  apexCharts,
  googleMaps,
} from '../../img/logos';

export const projectsData = [
  {
    title: 'PomodoroGo',
    description: `A chrome extension that improves productivity by combining a web-site blocker, focus timer and data dashboard.`,
    image: './assets/Dashboard.png',
    role: 'Full Stack Developer',
    type: 'Group Project',
    stack: [
      nodejs,
      react,
      postgres,
      redux,
      express,
      materialUi,
      apexCharts,
      jwt,
      mocha,
      chrome,
    ],
    buttons: [
      {
        text: 'View Site',
        link: 'https://pomodoro-go-1.herokuapp.com/home',
        linkAriaLabel: 'View the hosted version of PomodoroGo',
        icon: <ExternalIcon />,
      },
      {
        text: 'View Repo',
        link: 'https://github.com/rfmcmillan/pomodoro-go-1',
        linkAriaLabel: 'View Github repository for PomodoroGo',
        icon: <GithubIcon />,
      },
    ],
  },
  {
    title: 'RapidRebalance',
    description: `A portfolio management app that allows an investor to quickly rebalance their portfolio.`,
    image: './assets/RapidRebalance - Home.png',
    role: 'Full Stack Developer',
    type: 'Solo Project/Hackathon',
    stack: [nodejs, react, postgres, redux, express, materialUi, alpaca],
    buttons: [
      {
        text: 'View Site',
        link: 'https://rapid-rebalance.herokuapp.com/#/',
        linkAriaLabel: 'View the hosted version of RapidRebalance',
        icon: <ExternalIcon />,
      },
      {
        text: 'View Repo',
        link: 'https://github.com/rfmcmillan/rapid-rebalance',
        linkAriaLabel: 'View Github repository for Rapid-Rebalance',
        icon: <GithubIcon />,
      },
    ],
  },
  {
    title: 'Global Snacker',
    description: `An e-commerce site that sells snacks from around the world.`,
    image: './assets/GlobalSnackerHome.png',
    role: 'Full Stack Developer',
    type: 'Group Project',
    stack: [
      nodejs,
      react,
      postgres,
      redux,
      express,
      materialUi,
      googleMaps,
      jwt,
      mocha,
    ],
    buttons: [
      {
        text: 'View Site',
        link: 'https://global-snacker-1.herokuapp.com/',
        linkAriaLabel: 'View the hosted version of Global Snacker',
        icon: <ExternalIcon />,
      },
      {
        text: 'View Repo',
        link: 'https://github.com/rfmcmillan/Grace-Shopper-2101',
        linkAriaLabel: 'View Github repository for Global Snacker',
        icon: <GithubIcon />,
      },
    ],
  },
];
