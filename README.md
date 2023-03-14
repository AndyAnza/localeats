# local Eats

**Local Eats** is a web application that allows users to post their favorite selfmade dishes along with information about where the dish can be bought, the time when the dish is available, and the price. 
The application is built using HTML, CSS (tailwind), javascript, Node.js, Express.js, SQL, Sequelize, Bcrypt for password security, and uses the Geolocation API of the browser.

##Table of Contents
Features
Getting Started
Technologies Used
Contributing
License

##Features
-Users can post their favorite selmade dishes along with information about where the dish can be bought, the location, the time, and price.
-Users can search for dishes by location or by the name of the dish.
-Users can view a map showing the locations of all the dishes posted.
-Users can sign up and log in to the application to post and view dishes.
-Users' passwords are hashed and salted using bcrypt for security.
-The application uses geolocation to determine the user's current location.

##Getting Started
To run the application locally, follow these steps:

1.Clone the repository to your local machine.
2.Install the dependencies using npm install.
3.Create a .env file in the root directory of the project and add the necessary environment variables. See .env.example for an example of the required variables.
4.Start the application using npm start.
5.Open your web browser and navigate to http://localhost:3000.

##Contributing
Contributors are welcome! Please follow these guidelines:

-Fork the repository.
-Create a new branch for your changes.
-Make your changes and commit them with descriptive commit messages.
-Push your changes to your forked repository.
-Create a pull request to merge your changes into the main repository.

##License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).