[](https://img.shields.io/badge/Microverse-blueviolet)

# Car deal Finder- React-Rails Side project 

> This is a side project that uses Rails as an API server and uses React as the frontend using the API endponits to display RESTful routes displaying car models.

This app is designed follwing a real world senerio with given designs, and I had to personalize the content.[Find project specifications here](https://scottscheapflights.com/). As the name of the app suggests, it helps users to find good, cheap and affordable car deals, so the name `Car Hub`. Car deals can connect with buyers and get a great deal of car deals.


<div align="center">

[![View Code](https://img.shields.io/badge/View%20-Code-green)](https://github.com/errea/Car-deal-finder-Backend)
[![Github Issues](https://img.shields.io/badge/Github%20-Issues-red)](https://github.com/errea/Car-deal-finder-Backend/issues)
[![GitHub Pull Requests](https://img.shields.io/badge/GitHub-Pull%20Requests-blue)](https://github.com/errea/Hello-world-rails-react/pull/1)
[![Frontend API Repo](https://img.shields.io/badge/Frontend-%20Repo-purple)](https://github.com/errea/Car-Deal-Finder)
[![API DOCS](https://img.shields.io/badge/API-Documentation%50-yellow)]()

</div>

<p align="center">
<a href="#with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#gs">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
<a href="#author">Authors</a>
</p>


># Project requirements
  ## Basics

1. Proper authenticated login.

2. In the navigation panel, the user can see links to:

* Car items that you selected as a theme.
* "Reserve" form.
* "My reservations".
* "Add Car that you selected as a theme"
* "Delete  Car that you selected as a theme" 


3. On the main page, the user can see a list of Car
When the user selects a specific item, they can see the details page with its full description

4. In the details page, the user can click the "Reserve" button .

When the user clicks the "Add item" link in the navigation panel they can see a form for adding a new item.

5. When the user clicks the "Delete item" link in the navigation panel they can see a list of all items with title and "Delete" button.
   
6. When the user clicks the "Delete" button, the selected item is marked as removed and does not show on the main list anymore.
   
7. To reserve an appointment, the user has to select a date and city (username and selected item are autofilled).


8. When the user clicks the "My reservations" link in the navigation panel they can see a list of their reservations (with information about item name, date and city)

9. Add full documentation for your API.

10. Implement proper user authentication from the front-end to the server.
Make sure that the "Add item" and "Delete item" links are accessible only by 
users who are admins.

># Inspiration behind Site projects
 [Checkout this link](https://scottscheapflights.com/)

># Technical set up
1. Set up the repository/repositories on GitHub and use Gitflow.
   
2. You should use Postgres as your database
   
3. Use Rails to create backend API.
   
4. Use React & Redux to create frontend UI.

## 📝 Contents
 
## 🔧 Built with<a name = "with"></a>


- React/Redux
- Hooks
- React Routes
- React-dom
- HTML, CSS, JavaScript (ES6)
- Ruby
- Rails
- jwt gem. 
- rack-cors 
- gem 'react-rails'
- gem 'webpacker', '~> 5.0'
- gem 'spring'
- PostgreSQL
- react 17.0.2
- react_ujs 2.6.1
- react-redux 7.2.5
- react-router-dom 5.3.0
- redux 4.1.1
- redux-logger
- redux-thunk
- Linters: Rubocop, ESLint
- NPM
- Functional based Components with React Hooks 
- Virtual DOM
- [Webpack config](hhttps://webpack.js.org/guides/getting-started/)
- ES6 Modules 
- [Gitflow](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/git-github/articles/gitflow.md)
- Use [React Router](https://reactrouter.com/).
- Use styles in a React app. [CSS modules](https://github.com/css-modules/css-modules).


## Getting Started <a name = "gs"></a>
> To get a local copy up and running follow these simple example steps.

<details>
  <summary>Get instructions</summary>


To get a local copy up and running follow these simple example steps:

- On the project, GitHub page, navigate to the [main page of the repository](https://github.com/errea/Car-deal-finder-Backend)

- Click on a button named `code`

- Copy the project URL as displayed on HTTPS tab

- If you're running Windows Operating System, open your command prompt. On Linux, Open your terminal

- Change the current working directory to the location where you want the cloned directory to be made. Leave as it is if the current location is where you want the project to be.

- Type `git clone`, and then paste the URL you copied in Step 3.<br>

  `$ git clone https://github.com/errea/Car-deal-finder-Backend.git` <em>Press Enter key</em><br>

- Your local copy will be created.

- Please note that you must have Git installed on your PC, this can be done [here](https://gist.github.com/derhuerst/1b15ff4652a867391f03)

- After you get the project aiming to the desired directory, you need now to install dependencies by running npm install.


  ### Database Setup

- In your terminal, while in the root dir of your Rails project, type <code>bin/rails db:setup</code> to create your local databases, load the schema, and initialize with the seed data.

## Usage

1. In your terminal, run <code>bin/rails server</code> while inside the root directory of the repository files
2. Go to your browser of choice and enter this URL: [http://localhost:3000](http://localhost:3000)
3. \[Optional\] if you want to make changes to the JavaScript file and see changes immediately, run `./bin/webpack-dev-server`
4. Refresh the page to see a different greeting message! 😸

**Note:<br>_ These commands will not stop on their own. If you change something in your project files, it will recompile and reload the page in your browser. To exit, hit "ctrl + c"_**


## Live Preview

- [Rails]() API features.


## :star: [Live Demo]() :star:

## React Fronted App 
[App](https://github.com/errea/Car-Deal-Finder)

## API Documentation
[API DOC LINK]()

## Linters
To run the linters included in this repository, go to the root directory of your repository and copy/paste the following commands into your terminal:
(**Note:** Make sure you run `npm install` before you do this)
- for ESlint, `npx eslint <path of file>`
- for Rubocop, `rubocop .`

```
$ cd <folder>
```

~~~bash
$ git clone https://github.com/errea/Car-deal-finder-Backend.git
$ cd Hello-world-rails-react
~~~

Run `bundle Install` to install the node modules and webpacker.

Run `yarn build` to build the bundler.

Run `yarn start`  opens on `http://localhost:8080/` in your browser.

## Set up
* Open your terminal and locate the folder you want to clone the repository and follow the steps above to install

</details>

### Github Actions

To make sure the linters' checks using Github Actions work properly, you should follow the next steps:

1. On your recently forked repo, enable the GitHub Actions in the Actions tab.
   
2. Create the `feature/branch` and push.
   
3. Start working on your milestone as usual.
   
4. Open a PR from the `feature/branch` when your work is done.


## Project Structure

    Car-deal-finder-Backend Project
    └── node_modules
    └── .github\workflows
        └── linters.yml
    /src
    |---/components
    |---/redux
        |--- /Cars
                | cars.js
        | cofigureStore.js
    | index.js
    └── .eslintrc.json
    └── .gitignore
    └── .hintrc
    └──.stylelintrc.json
    └── MIT.md
    └── package-lock.json
    └── package.json
    └──README.md
### Install Dependencies
1. If you are not in your system terminal/command prompt already, please open it and go to the directory where you cloned the remote repository or extracted the project files.
2. While in the project root directory, type `bundle install`. This command will install all the necessary gems in your system.
3. Then you can type <code>yarn install --check-files</code>.
## ✒️  Authors <a name = "author"></a>

👤 **Eri**

- Github: [@errea](https://github.com/errea)
- Twitter: [@Erreakay](https://github.com/errea)
- Linkedin: [Eri Okereafor](https://www.linkedin.com/in/eri-ngozi-okereafor/)
  
## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/errea/Car-deal-finder-Backend/issues)
## 👍 Show your support

- Microverse: [@microverse](https://www.microverse.org/)
  

## Acknowledgments

- Microverse
  
## 📝 License

This project is [MIT]() licensed.