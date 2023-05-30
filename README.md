[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ab9c80f5bc49485c905584e838e73368)](https://app.codacy.com?utm_source=gh&utm_medium=referral&utm_content=&utm_campaign=Badge_grade)

# Activity Tracker App (Frontend)
This is the frontend application for the Activity Tracker app. It provides a beautiful user interface and various functionalities to track and manage activities.

## Installation

1. Clone the repository:

   ```shell
   git clone https://github.com/your-username/activity-tracker-frontend.git
   ```
2. Navigate to the project directory:
   ```shell
    cd activity-tracker-backend
    ```
3. Install the dependencies:
    ```shell
    npm i
    ```
4. Start the server:
    ```shell
    npm run dev
    ```
The server will start running on the specified port.

## Usage
The Activity Tracker app provides an intuitive and user-friendly interface for tracking and managing your activities.

#3 Home Page
The home page features a navigation bar with a logo and sign-in/sign-up buttons. It also includes a carousel with a register button and a voucher section. The footer section contains additional information and links.

## Login Page
The login page allows users to log in to their accounts. It presents a login form that interacts with the backend to authenticate users. Upon successful login, users are redirected to the dashboard page.

## Signup Page
The signup page enables new users to create an account. It includes a signup form that collects user information and communicates with the backend to register new users. After successful signup, users can proceed to the dashboard.

## Dashboard Page
The dashboard page serves as the central hub for managing activities. It includes a sidebar slider with options like logout and history. The main content area displays various features.

## Add Activity
The "Add Activity" button on the dashboard opens a modal containing a form to add a new activity. Users can provide details such as the activity name, date, duration, and any additional notes. After submitting the form, the activity is added to the user's list of activities.

## Activity Cards
The activities added by the user are rendered as cards on the dashboard. Each card represents an activity and displays relevant information such as the activity name, date, and duration. The card may also include an edit button and a delete button for managing the activity.

## Pagination
To improve usability and manage large activity lists, pagination is implemented. Only a limited number of activity cards (e.g., 4) are displayed per page. Users can navigate between pages to view additional activities.

## Dependencies
The application uses vite: it is a build tool that aims to provide a faster and leaner development experience for modern web projects.

The frontend application relies on several dependencies to provide its functionality and design:

@headlessui/react
@material-tailwind/react
@reduxjs/toolkit
antd
axios
bootstrap
postcss-import
react
react-bootstrap
react-dom
react-icons
react-redux
react-router
react-router-dom
tailwind
Make sure to install these dependencies before running the application.

## Contributing
Contributions to the Activity Tracker app are welcome! If you would like to contribute, please follow the guidelines outlined in the contribution guidelines file.

## License
This project is licensed under the MIT License. You can find more details in the LICENSE file.

Feel free to customize and enhance this README file to suit your project's specific needs.