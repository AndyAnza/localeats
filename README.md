# Local Eats  
  
  **Local Eats** is a web application that allows users to post their favorite selfmade dishes along with information about where the dish can be bought, the time when the dish is available, and the price. 
The application is built using HTML, CSS (tailwind), javascript, Node.js, Express.js, SQL, Sequelize, Bcrypt for password security, and uses the Geolocation API of the browser.  

    Made with love by  

    Diana Laura Solano Castillo @SolanoD94  
    Andrea R. Anza @AndyAnza  
    Luis Omar Duran Vega @0mar77  
    Mauricio Treviño @mauri-tech  
    Freddy Corona @cryptovoyager  


    The deployed application can be found at https://localeats.heroku.app  



  
  

## Table of Contents  

##### Features  
##### Images
##### Getting Started  
##### Technologies Used  
##### Contributing  
##### License  


## Features  
  
-Users can post their favorite selmade dishes along with information about where the dish can be bought, the location, the time, and price.  
-Users can search for dishes by location or by the name of the dish.  
-Users can view a map showing the locations of all the dishes posted.  
-Users can sign up and log in to the application to post and view dishes.  
-Users' passwords are hashed and salted using bcrypt for security.  
-The application uses geolocation to determine the user's current location.  


## Images  

![0ebdb231-9ff6-4d5a-873d-c25ab65bbff7](https://user-images.githubusercontent.com/118081015/228124658-30f64da7-5cea-4228-af69-0c94941f902a.jpg)
![5d5aede2-170a-438b-851d-028f0e0b10ba](https://user-images.githubusercontent.com/118081015/228124383-42c2aea8-8129-4c9d-b74d-a69a949f412e.jpg)
![73c54bd5-1a73-4eb4-8106-91327713a7c5](https://user-images.githubusercontent.com/118081015/228124830-4d6145f5-914d-4694-9d1d-a4ced9c9a9ef.jpg)
![ed0ce216-0d05-4760-839f-e254d0853647](https://user-images.githubusercontent.com/118081015/228124914-2892870d-66c5-4759-82aa-558c90dd69d4.jpg)


  
## Getting Started
    
 To run the application locally, follow these steps:
  
1. Clone the repository to your local machine.  
2. Install the dependencies using npm install.  
3. Create a .env file in the root directory of the project and add the necessary environment variables. See .env.example for an example of the required variables. 
4. Create new database in mysql using db/schema.sql
5. Populate database if needed with starting dummy data using npm run seeds/seed.js
6. Start Tailwind using npm run styles.  
7. Open a new terminal and start the application using npm run start.  
8. Open your web browser and navigate to http://localhost:3000.    


## Contributing  
  
Contributors are welcome! Please follow these guidelines:  
  
-Fork the repository.  
-Create a new branch for your changes.  
-Make your changes and commit them with descriptive commit messages.  
-Push your changes to your forked repository.  
-Create a pull request to merge your changes into the main repository.  
  
  
## License  
  
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).