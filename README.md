
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://github.com/">
    <img src="images/django_react_logos.png" alt="Logo">
  </a>

  <h3 align="center">Django-React Template</h3>

  <p align="center">
    An very minimal Django-React template to jumpstart any Django-React web application.
    <br/>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
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
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#resources">Resources</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot][product-screenshot]

There are many Django-React boilerplates and some templates on Github. Most of these repos don't simply give you a blank Django-React project to expand code easily - they have many dependencies or seem complicated. In this template, simply edit the React code to change your frontend, and add apps to the Django framework for backend functionality. This template can become a very powerful web application through a fully-featured, rapid-development Django backend, and a UI-centric interactive frontend.

### Built With

Obviously this template was built with Django and React. Most Django code was generated through <code>django-admin</code> and then <code>manage.py</code>, and most React code through <code>create-react-app</code>. Here's links to Django and React:
* [Django](https://www.djangoproject.com/)
* [React](https://reactjs.org/)



<!-- GETTING STARTED -->
## Getting Started

This template assumes you don't know much about Django or React, but you're eager to get started because you know this combo is deadly. To get a local copy up and running follow these simple example steps.

### Prerequisites

For this template to work you need to have [python](https://www.python.org/) and [nodejs](https://nodejs.org/en/) installed.  Update node to the most recent version:
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo and make it your current working directory
   ```sh
   git clone https://github.com/repo.git
   ```
   then 
      ```sh
   cd repo
   ```
   
2. Now you're going to need a virtual environment to install python packages like Django, and manage and keep those packages separate from other projects . You can use <code>virutalenv</code> or [Anaconda](https://www.anaconda.com/) as a python package manger. Both are good options; in either case, you'll want to get the latest version on <code>pip</code> (python package installer):
   ```sh
   python -m pip install --user --upgrade pip
   ```
   
	To use <code>virutalenv</code>:
	 ```sh
   pip install --user virtualenv
   ```
   Create a virtual environment called 'env' (or whatever you want to name your virtual environment):
	  ```sh
   python -m virtualenv env
   ```
   Now activate the environment:
	```sh
   .\env\Scripts\activate   
   ```
   Finally, install Django in the virtual environment:
	```sh
   pip install django   
   ```


<!-- USAGE EXAMPLES -->
## Usage

Now in the main repository folder, you can use <code>python manage.py runserver</code> to start the development django server. The output from the command will give you the IP address and port at which to view the template. From here, the Django backend can be added upon and experimented with live. 

To edit the React frontend, it is easier to go to the frontend directory and <code>npm run start</code> and view it locally on a different port. <b>Since the template application is using the code from the frontend/build folder, you must run <code>npm start build</code> after completing edits in the frontend.</b>


<!-- ROADMAP -->
## Roadmap

Show a fleshed out example of using this template.

Let me know of any issues - See the [open issues](https://github.com/) for a list of proposed features (and known issues).


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to be learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.




<!-- ACKNOWLEDGEMENTS -->
## Resources
Definitely check out the [Django](https://www.djangoproject.com/) and [React](https://reactjs.org/) documentation for tutorials and questions. 

I love this django course, especially for beginners: https://www.dj4e.com/




<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/csouflis/django-react-template
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/csouflis/django-react-template
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/csouflis/django-react-template
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/csouflis/django-react-template
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/csouflis/django-react-template
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/csouflis
[product-screenshot]: images/preview.PNG
