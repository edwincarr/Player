<div id="top"></div>


<br />
<div align="center">

<h3 align="center">Player</h3>

  <p align="center">
    Soundcloud like website with a modern reskin
    <br />
    <a href="https://github.com/edwincarr/solo-project"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://player-scc.onrender.com">View Demo</a>
    ·
    <a href="https://github.com/edwincarr/solo-project/issues">Report Bug</a>
    ·
    <a href="https://github.com/edwincarr/solo-project/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Screenshot 2022-04-07 174500](https://user-images.githubusercontent.com/69633370/162325160-f92f3c32-1873-459a-a87b-5ec40ac1df1d.png)

<p align="right">(<a href="#top">back to top</a>)</p>



### Built With
<img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"  height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" height=40/><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg" height=40/><img src="https://icongr.am/devicon/express-original.svg?size=128&color=ffffff" height=50/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"  height=40/><img  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"  height=40/>

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/edwincarr/solo-project
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Create a PSQL user with CREATEDB PASSWORD
   ```js
   CREATE USER <name> WITH CREATEDB PASSWORD <'password'>;
   ```
   
4. Create a .env file to access the backend based on the .env.example within the respective directory
      - input desired information into .env


5. Create Database, Migrate, and Seed models.
   ```sh
   npx dotenv sequelize db:create
   npx dotenv sequelize db:migrate
   npx dotenv sequelize db:seed:all
   ```
   
6. Start the backend in the backend directory
   ```sh
   npm start
   ```
   
8. Start the frontend in the frontend directory, this should open the project in your default browser. If not, navigate to http://localhost:3000
   ```sh
   npm start
   ```
   
9. From here you can create and sign in as a user and begin using TBD NAME


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/edwincarr/solo-project](https://github.com/edwincarr/solo-project)
