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
    -   Write comments.

-   **Logged-In User (Owner):**
    
    -   Edit and delete own heroes.
    -   Edit and delete own comments.
    -   Profile page with own heroes.
 
## Features
<ins>Public part visible without authentication:</ins>
- **Home page** is accessible by all users, and features a carousel component with buttons to change the current image.
- **Heroes page** presents brief information about all heroes, with button to see detailed information and comments sorted by latest without interactive functionalities.
- **Sign Up** page expects as input email, password and repeat password, <ins>all fields are required to create a new user</ins>
    - Email is validated with regex pattern.  
    - Password should be at least 6 characters long.
    - Password and confirm password should match.
- **Login page** expects a valid email and password as input

<ins>Private part visible after successful authentication and authorization:</ins>
- **Heroes page** presents brief information about all heroes, with button to see detailed information and comments with interactive functionalities.
    - if the user <ins>isn't the creator</ins> of the hero, two options are available:
        - **Like button** is displayed and the hero can be liked. Likes are individual to each hero and are cumulative.
        - If the hero is already liked, it shows appropriate message.
        - **Add comment form** is displayed and the user can write a comment about the hero. Also the user can delete and edit his own comments.
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
- [React router dom](https://reactrouter.com/) - Used for handling the routing of the application.
- [Vitest](https://vitest.dev/) - Used for writing unit tests.

## Deployment

### Backend Deployment

The backend of Bulgarian Heroes is deployed on [Render](https://render.com/). Render is a robust platform capable of hosting and managing server-side components. Render ensures the smooth functioning and accessibility of my backend infrastructure.

### Frontend Deployment

The React frontend of Bulgarian Heroes is deployed on [Vercel](https://vercel.com/). Vercel is a powerful platform for effortlessly deploying React applications. This ensures a reliable and performant hosting environment for our user interface.

## Application Architecture

The following application architecture diagram is generated using [dependency-cruiser](https://github.com/sverweij/dependency-cruiser). It visually represents the dependencies within the project.

![Architecture](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/e0f72220-354e-4a8a-ad38-0489a9099a9e)

## Screenshots

### Desktop

#### Home

![Home](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/93f7c933-2d44-402e-9527-1bf4a9ddebac)

#### Heroes

![Heroes](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/6f274644-c043-4317-8d96-5f060cbfa816)

#### Details - Not logged in

![Details - Not Logged In](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/5835c128-a175-4f49-8268-a6520a5798a4)

#### Details - Owner

![Details - Owner](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/28407dcf-9e7a-4951-a66d-56b9d3032c8f)

#### Details - Not owner

![Details - Not Owner](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/e8b5a834-5f2d-4d9c-9176-c43a9eaf0ce5)

#### Comments - Logged in

![Comments logged in](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/e564c5fd-9b57-4367-89bf-1d389649e2f9)

#### No comments - Not logged in

![No comments not logged in](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/a9c8dc19-5e15-4848-ac04-27fe975f0e72)

#### Login

![Login](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/81688b4e-a7a3-45d6-aba0-84a66162ec45)

#### Register

![Register](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/6350f98b-03e5-4530-91a8-cd2d25919fe8)

#### Add

![Add](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/a49ab4a8-2a46-4d8b-8db2-846be7a73cb2)

#### Search

![Search](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/799d5096-92e4-44da-8336-f9f44311497b)

#### Edit

![Edit](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/8048b65c-27b3-4155-a528-463acb0d4791)

#### Profile

![Profile](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/0137faa4-28eb-47b7-8c5c-1494fbc4c970)

#### Not Found

![Not Found](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/9b6338c0-1b57-4954-9397-4571933e497e)

#### Navigation - Logged in

![Navigation - Logged In](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/9300e247-2652-45e9-9ca4-d7c1f94c8e67)

#### Navigation - Not logged in

![Navigation - Not Logged In](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/3b9fce9c-eca2-4113-90f8-159ab58a191b)

#### Footer 

![Footer](https://github.com/RosenDobrev10/Bulgarian-Heroes/assets/104829819/d4b7d6b1-9d1c-40db-a510-03d03b403d32)

# License

This project is licensed under the MIT License
