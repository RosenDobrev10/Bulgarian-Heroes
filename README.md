# Bulgarian Heroes

Welcome to Bulgarian Heroes.

## Table of Contents

1. [Overview](#overview)
2. [Local installation](#local-installation)
3. [Demo](#demo)
4. [User permissions](#user-permissions)
5. [Features](#features)
6. [Security](#security)
7. [Additional libraries](#additional-libraries)
8. [Application architecture](#application-architecture)
9. [Deployment](#deployment)
10. [Screenshots](#screenshots)
11. [License](#license)

## Overview

An application that allows users to create, like and comment on some of the greatest people from Bulgaria. 
The app was created to be a place to preserve historical and contemporary heroes that make Bulgaria unique.

## Local installation

### To install and preview locally, follow these steps:
1. Clone the repository to your local machine
2. Navigate to the server folder to start the server (cd .\server\)
    - Start the server with (node .\index.js) command to start the back-end
3. Navigate to the client folder (cd .\client\)
    - npm install - command for install all packages and dependencies
    - npm run dev - to start the development server and run the app
    - open your browser and go to http://localhost:5173 to access the application

## Demo

Check out the live demo of Bulgarian Heroes at [https://bulgarian-heroes-rd.vercel.app](https://bulgarian-heroes-rd.vercel.app/)

For a quick exploration, you can use the following demo accounts:

-   **Demo User 1:**

    -   Email: peter@abv.bg
    -   Password: 123456

-   **Demo User 2:**
    -   Email: george@abv.bg
    -   Password: 123456

## User Permissions
-   **All users:**
  
    -   View all heroes.
    -   Use search functionality.
    -   Read comments about heroes.

-   **Not-Logged User:**

    -   Login and register.

-   **Logged-In User (Not Owner):**

    -   Like other users heroes.

-   **Logged-In User (Owner):**
    
    -   Edit and delete own heroes.
    -   Edit and delete own comments.
    -   Profile page with own heroes.
 
## Features
<ins>Public part visible without authentication:</ins>
- **Home page** is accessible by all users, and features a carousel component with buttons to change the current image.
- **Heroes page** presents brief information about all heroes, with button to see detailed information and comments without interactive functionalities.
- **Sign Up** page expects as input email, password and repeat password, <ins>all fields are required to create a new user</ins>
    - Email is validated with regex pattern.  
    - Password should be at least 6 characters long.
    - The password and the repeated password should match.
- **Login page** expects a valid email and password as input

<ins>Private part visible after successful authentication and authorization:</ins>
- **Heroes page** presents brief information about all heroes, with button to see detailed information and comments with interactive functionalities.
    - if the user <ins>isn't the creator</ins> of the hero, one option is available: <ins>like the hero</ins> if it's already liked. 
        - **Book button** is displayed and the trip can be booked.
        - **Like button** is displayed and the trip can be liked. Likes are individual to each boat and are cumulative.
        - when a boat is booked, it dynamically appears in the "My Bookings" list on the user's profile page, providing a real-time visualization of the user's booked trips. 
        - each user has the ability to <ins>book and like a specific boat trip only once</ins>, ensuring a singular reservation and expression of interest for each boat.
    - if the user is the <ins>creator</ins> of the hero:
        - **Edit button** is displayed and the hero can be edited.
        - **Delete button** is displayed and the hero can be deleted.

- **Create page**, each user can create their own hero:
    - all fields in the form are required with different validations, if the form does not meet all the validations, the submit button is disabled and validation error is displayed above the input field.

- **Search page**, users can search among all created heroes for a particular hero, based on name as criteria. If there is a match from the search all results are rendered, users can also access details. If there isn't a match an informative message is displayed.

- **Profile page**:
    - contains a **dynamic list** showcasing all heroes created by the user, featuring links to individual hero details.

- Implemented **error handling** and **data validation** for all forms to prevent crashes caused by entering invalid data.


## Security
The project incorporates several security enhancements:
- The application requires the user to be authenticated to take advantage of the full functionalities.
- **Guards**: By utilizing public and private guards effectively, an application can ensure a balance between providing necessary information publicly, while safeguarding sensitive functionalities and data.
- **404 Page**: An exclusive 404 page is implemented to handle undefined routes gracefully.
- **Error boundary**: catch JavaScript errors anywhere in the child component tree, log those errors, and display a fallback UI instead of crashing the whole app.

## Additional libraries
- [Tailwind](https://tailwindcss.com/) - Used for styling the application.
- [Tailwind Elements](https://tw-elements.com/) - Used for already styled components.
- [React router dom](https://reactrouter.com/) - Handles the routing of the application.
- [Vitest](https://vitest.dev/) - Used for writing unit tests.

## Deployment

### Backend Deployment

The backend of Bulgarian Heroes is deployed on [Render](https://render.com/). Render is a robust platform capable of hosting and managing server-side components. Render ensures the smooth functioning and accessibility of my backend infrastructure.

### Frontend Deployment

The React frontend of Bulgarian Heroes is deployed on [Vercel](https://vercel.com/). Vercel is a powerful platform for effortlessly deploying React applications. This ensures a reliable and performant hosting environment for our user interface.

## Application Architecture

The following application architecture diagram is generated using [dependency-cruiser](https://github.com/sverweij/dependency-cruiser). It visually represents the dependencies within the project.

![Architecture from dependency-cruiser](/client/dependency-graph-main.svg)
![Memelandia_App_React_client_high-level-dependencies](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/b5f29627-783a-4522-b2fe-96131c37c853)

For a detailed analysis of dependencies, you can run dependency-cruiser in your project. To get started, visit the [dependency-cruiser on NPM](https://www.npmjs.com/package/dependency-cruiser)

## Screenshots

### Desktop

#### Home Page - Top three rated memes
![Home Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/9671b565-b2f8-4f60-851c-69719e3b5850)

#### Memeboard Page - Display the Latest Memes with infinite scroll pagination

![Memeboard Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/8ea4e942-8282-47a8-94ec-e2a74c83160a)

#### Login Page - Display the highest rated meme

![Login Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/f70872aa-e273-4fa6-86f6-eac5547551a6)

#### Register Page - Display the second highest rated meme

![Register Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/55c05f9e-0193-4a7c-8219-5ded0615cb82)

#### About Page

![About Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/66dc0888-1766-4c3a-a0cd-f37d7a995d84)

#### Create Page

![Create Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/12f74d18-484c-418c-9fc4-51b053b98cc7)

#### Profile Page

![Profile Page](https://github.com/TodorYadkov/Memelandia_App_React/assets/4013980/61b9ed7f-725c-4f15-bfbf-83fd197de12d)

# License

This project is licensed under the MIT License
