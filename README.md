# Project Name: Profilecard.co

## Project Description:
This is a web application where users can create and share their own profile cards. Users can edit, customize, and share their profile cards via QR code. This application is developed using React, Redux Toolkit, and Firebase.

## Installation:

1. Download and install the latest version of Node.js.
2. Download or clone the project files from GitHub.
3. Navigate to the project directory in the console.
4. Run the `npm install` command.
5. Follow the instructions in the `src/services/Firebase.md` file to create your Firebase project and update your Firebase configuration information in the `src/services/firebase.ts` file.
6. Start the application by running the `npm start` command.

# Firebase Configuration

To use Firebase in the application, follow these steps:

1. Go to the [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. In the project overview page, click on the "Add app" button and select "Web".
3. Register the app by giving it a nickname, and click on "Register app".
4. Copy the Firebase SDK configuration keys from the Firebase setup screen, and replace the configuration values in the file `src/services/firebase.ts` with your own Firebase configuration values.
5. Finally, enable the "Authentication" and "Firestore" services in the Firebase Console by clicking on the "Authentication" and "Firestore" tabs in the left sidebar and following the instructions to set them up.

That's it! Once you've completed these steps, you should be able to use Firebase in the application.


## License:
Creative Commons Attribution 4.0 International

This is a Public Archive repository.
