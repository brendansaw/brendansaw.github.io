import {FaGithub, FaKeyboard, FaYoutube} from "react-icons/fa";
import GreenMapsPicture from "../../images/projects/greenmaps.png";
import EFCPicture from "../../images/projects/escapefromcorona.png";
import GrocerEasePicture from "../../images/projects/grocerease.png";
import WebScraperPicture from "../../images/projects/googlewebscraper.png";
import HackChanPicture from "../../images/projects/hackchan.png";
import BazaarTickerPicture from "../../images/projects/bazaarticker.png";

const projects = [
    {
        "name": "GreenMaps",
        "image_src": GreenMapsPicture,
        "img_link": "https://github.com/GreenMaps-app",
        "related_links": [
            <li>
                <FaGithub/> <a href="https://github.com/GreenMaps-app">GitHub</a>
                <ul>
                    <li>
                        <a href="https://github.com/GreenMaps-app/GreenMaps">Mobile App</a>
                    </li>
                    <li>
                        <a href="https://github.com/GreenMaps-app/MapAPI">API</a>
                    </li>
                </ul>
            </li>,
            <li>
                <FaKeyboard/> <a href="https://garagehackbox.azurewebsites.net/hackathons/2355/projects/109707" disabled>HackBox Submission (Not Available to Public)</a>
            </li>
        ],
        "tech_stack": [
            <li>Mobile app written in Xamarin</li>,
            <li>REST API written using C#, ASP.NET Core, Entity Framework Core and hosted on Azure</li>,
            <li>Azure SQL database</li>
        ],
        "description":
            `This project was developed for the Microsoft Student Hackathon 2021 hosted by The Garage.
                The application was a mobile app that served a map, allowing users to add pins to the map
                that represented environmental concerns in their area.
                Users are able to resolve these issues on the map and all data would persist in a database.`
    },
    {
        "name": "Escape From Corona",
        "image_src": EFCPicture,
        "img_link": "https://github.com/brendansaw/CMPT-276-Escape-From-Corona",
        "related_links": [
            <li>
                <FaGithub/> <a href="https://github.com/brendansaw/CMPT-276-Escape-From-Corona">GitHub</a>
            </li>,
            <li>
                <FaYoutube/> <a href="https://www.youtube.com/watch?v=l2fZTEQB7kQ">Youtube Video</a>
            </li>
        ],
        "tech_stack": [
            <li>Game developed using Java</li>,
            <li>Game UI created using JavaFX</li>,
            <li>Tested with JUnit, achieved >90% code coverage for game logic</li>
        ],
        "description":
            `This project was developed for my Intro to Software Engineering (CMPT 276) course at SFU. 
                The game utilized original assets designed by our team, and we designed the UI using
                JavaFX. Involved heavy usage of design patterns and object-oriented programming for game elements and logic.`
    },
    {
        "name": "GrocerEase",
        "image_src": GrocerEasePicture,
        "img_link": "https://github.com/brendansaw/GrocerEase",
        "related_links": [
            <li>
                <FaGithub/> <a href="https://github.com/brendansaw/GrocerEase">GitHub</a>
            </li>,
            <li>
                <FaYoutube/> <a href="https://www.youtube.com/watch?v=RWnEtEzcuxQ">Youtube Implementation Demo</a>
            </li>,
            <li>
                <FaYoutube/> <a href="https://www.youtube.com/watch?v=xqoePmk6ymU">Youtube Application Demo</a>
            </li>
        ],
        "tech_stack": [
            <li>Website written using Python Flask as the backend and Jinja2 as the templating language</li>,
            <li>Connected website to MySQL database</li>
        ],
        "description":
            `This project was developed for my Database Systems (CMPT 354) course at SFU. 
                The website required extensive database design to form relations between different database tables.
                We did not use any object-relational mapping as the course requirements stated that we execute
                raw SQL queries.`
    },
    {
        "name": "Google Marketplace Web Scraper",
        "image_src": WebScraperPicture,
        "img_link": "https://github.com/brendansaw/Google-Fan-Web-Scraper",
        "related_links": [
            <li>
                <FaGithub/> <a href="https://github.com/brendansaw/Google-Fan-Web-Scraper">GitHub</a>
            </li>,
            <li>
                <FaKeyboard/> <a href="https://devpost.com/software/google-shopping-wrapper">DevPost Submission</a>
            </li>,
        ],
        "tech_stack": [
            <li>Front-end of website written using React</li>,
            <li>API written using Python Django</li>,
            <li>BeautifulSoup4 used to scrape Google Marketplace</li>
        ],
        "description":
            `This project was developed for the SystemHacks 2021: ScuffedHacks hackathon. 
                The hackathon had the theme of making a website as 'scuffed' or abnormal as possible. 
                We designed a satirical website with similar namesake to another popular website, 
                that served the purpose of scraping Google Marketplace
                when the user searched for an item. No database was used in this project.`
    },
    {
        "name": "HackChan",
        "image_src": HackChanPicture,
        "img_link": "https://github.com/brendansaw/HackChan",
        "related_links": [
            <li>
                <FaGithub/> <a href="https://github.com/brendansaw/HackChan">GitHub</a>
            </li>,
            <li>
                <FaKeyboard/> <a href="https://event.hackhub.com/event/stormhacks_2021/submissions/4741">HackHub Submission</a>
            </li>,
            <li>
                <FaYoutube/> <a href="https://www.youtube.com/watch?v=_SNEVu3u5Pc">Youtube Video</a>
            </li>
        ],
        "tech_stack": [
            <li>Front-end of website written using React</li>,
            <li>API written using Node.js and Express JS</li>,
            <li>PostgreSQL database used to store message information</li>,
            <li>Hosted on Heroku</li>
        ],
        "description":
            `This project was developed for the StormHacks 2021 hackathon. We designed an anonymous messaging board
                that allowed users to create message threads and reply to other user threads.`
    },
    {
        "name": "Bazaar Ticker",
        "image_src": BazaarTickerPicture,
        "img_link": "https://github.com/brendansaw/BazaarTicker",
        "related_links": [
            <li>
                <FaGithub/> <a href="https://github.com/brendansaw/BazaarTicker">GitHub</a>
            </li>,
            <li>
                <FaYoutube/> <a href="https://www.youtube.com/watch?v=a6I32UoBe_Q">Youtube Video</a>
            </li>
        ],
        "tech_stack": [
            <li>Front-end of website written using JavaScript and jQuery</li>,
            <li>Data processing and database handling using PHP</li>,
            <li>MySQL database used to store historical item prices and emails</li>,
            <li>Hosted on AWS</li>
        ],
        "description":
            `This was a personal project that aimed to serve our needs of providing notifications for when
                in-game prices dropped or reached a certain level. The app called a publicly-served API from Hypixel
                to get item price data and existing buy/sell orders in the market. 
                Cron-jobs were set up in our AWS LAMP stack to get an aggregated price for every minute and every hour 
                in the last 24 hours to provide historical data for the user, as the external
                API only served immediate data.`
    },
];

export default projects;