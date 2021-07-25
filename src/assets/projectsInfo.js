import weatherScreenshot from './screenshots/screenshot-weather.jpg';

const projectsInfo = [
  {
    index: 1,
    title: 'Coach Roach',
    liveUrl: 'https://coachroach.me/',
    githubUrl: 'https://github.com/busy-boys/coach-roach',
    description:
      ' A malleable record keeping platform optimised to meet niche internal training structures. Coach Roach is highly customizable and built on bootstrap to allow companies to adjust the appearance of the service to fit corporate branding.It is hosted on a digitalocean VPS running dokku.',
    tech: 'node.js, mySQL, sequelize, express, handlebars, bootstrap, charts.js, axios, dokku, github actions',
    thumbnail:
      'https://github.com/busy-boys/project-2/blob/main/assets/screenshots/coaching.gif?raw=true',
  },
  {
    index: 2,
    title: 'moovie.pro',
    liveUrl: 'https://moovie.pro',
    githubUrl: 'https://github.com/busy-boys/movie-master',
    description:
      ' moovie.pro is a service for comparing financial information about movies that is CPI adjusted for a faircomparison. It takes into account box-office performance as well as the movies cost of production, this allows us to simply show the user a profit multiplier that allows easy comparison of the financial success of the films.',
    tech: 'JavaScript, CSS, HTML, omdb API, tmdb API, Utelly API, bulma CSS, netlify',
    thumbnail:
      'https://github.com/busy-boys/movie-master/blob/main/assets/moovie-pro.gif?raw=true',
  },
  {
    index: 3,
    title: 'Tech Blog',
    liveUrl: 'https://holst-tech-blog.herokuapp.com/',
    githubUrl: 'https://github.com/daveholst/tech-blog',
    description:
      'A Tech Blog written from the ground up. The webapp is built on a Content Management System that includes he ability to post, comment and manage users contributions. It features an authorization system that uses hashed and salted passwords as well as session storage so users can remain logged in.',
    tech: 'node.js mySQL, sequelize, bcrypt, express, handlebars, bulma CSS, heroku',
    thumbnail:
      'https://github.com/daveholst/tech-blog/blob/main/assets/tech-blog.gif?raw=true',
  },
  {
    index: 4,
    title: 'Weather Dashboard',
    liveUrl: 'https://daveholst.github.io/weather-dashboard/',
    githubUrl: 'https://github.com/daveholst/weather-dashboard',
    description:
      'A frontend app that collects weather forecast information from the Open Weather Map API. Locations can be saved and managed through local storage. I have also incorporated a windy.com widget to show wind direction and velocity in the area.',
    thumbnail: weatherScreenshot,
  },
];

export default projectsInfo;