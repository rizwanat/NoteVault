This is a React Native app that provides users with access to free advice, along with various other features like user authentication, note-taking, and profile management. The app is designed to showcase the integration of multiple functionalities commonly used in modern mobile applications.

Landing Page: 
The app begins with a visually appealing landing page, featuring a prominent "Free Advice" button. This button serves as a testing ground for Axios GET requests, allowing users to fetch random pieces of advice.

Sign Up and Login: 
Upon clicking the "Get Free Advice" button, users can navigate to the sign-up page. If they already have an account, they can choose to proceed to the login page instead. During the sign-up process, the app ensures that the user's password meets minimum length requirements and matches the confirmation password to avoid mistakes.

User Authenticatio: n
User authentication is handled using AsyncStorage, a local storage mechanism in React Native. Once users successfully log in, their authentication status is preserved, and they can access other app features without having to log in repeatedly.

Dashboard with Counter: 
The main dashboard greets users upon successful login and prominently displays a counter. The counter provides a simple yet interactive element to engage users and showcases React Native's state management capabilities.

Notes Saving Feature: 
The app includes a note-taking feature allowing users to create and manage personal notes. Each note consists of a title and a description. The notes are displayed using the FlatList component, demonstrating efficient rendering of large lists in React Native.

Profile Management: 
Users can navigate to the profile page to update their personal information. The profile page allows users to modify their name, contact details, and other relevant information. Additionally, users can update their profile pictures by either selecting images from the gallery or capturing a new photo using the device's camera.

Drawer Navigation: 
For easy navigation between various pages, the app implements a drawer navigation menu accessible from the dashboard. This approach enhances user experience and allows users to seamlessly switch between different sections of the app.

Logout: 
To conclude the user's session, the app provides a "Logout" option in the drawer navigation. Clicking this option redirects users back to the landing page, requiring them to log in again to access protected features.

Technologies Used: 
React Native: A JavaScript framework for building cross-platform mobile applications.
Axios: A popular HTTP client for making API requests.
AsyncStorage: A local storage mechanism for saving key-value pairs on the user's device.
FlatList: A component in React Native for rendering efficiently scrolling lists.
React Navigation: A routing and navigation library for handling navigation in React Native apps.
