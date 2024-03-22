# AgriTech Project

![ServiceFinder](public/images/project-image.jpeg)

## Overview

AgriTech is a holistic platform meticulously designed for smallholder farmers in Africa. This initiative harnesses a range of technologies to empower farmers with knowledge, resources, and market access, ultimately fostering increased food production and alleviating hunger.

## Features

- **Search for Services:** Users can search for various services using keywords or location.
- **Google Maps Integration:** Service providers' locations are displayed on an interactive map.
- **Service Details:** Detailed information about each service provider, including contact details and reviews.
- **Responsive Image Carousel:** Users can view service provider images in a dynamic and responsive image carousel.
- **Social Media Sharing:** Share service provider information with friends and family via social media.
- **Real-time Updates:** Firebase is used for real-time updates to keep information current.

## Technologies Used

- React.js: A JavaScript library for building user interfaces.
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- Google Map React: A library for integrating Google Maps into React applications.
- React Elastic Carousel: A responsive carousel component for React applications.
- Framer Motion: A React animation library.
- React Share: A library for adding social sharing functionality to React applications.
- Axios: A promise-based HTTP client for making requests to external APIs.
- Firebase: A cloud-based platform for building web and mobile applications.

## Getting Started

To get started with this project, follow these steps:

1. #### Clone this repository to your local machine:

   ```
    git clone [https://github.com/Konson22/skillfinder]
   ```

2. #### Navigate to the project directory:
   ```
       cd servicefinder-website
   ```
3. #### Install the project dependencies:
   ```
       npm install
   ```
4. #### Configure Firebase:
   - Create a Firebase project on the Firebase Console.
   - Obtain your Firebase configuration (apiKey, authDomain, projectId, etc.).
   - Create a .env.local file in the project root and add your Firebase configuration:
   ```
   REACT_APP_FIREBASE_API_KEY=your_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
   REACT_APP_FIREBASE_PROJECT_ID=your_project_id
   ```
5. #### Start the development server:
   ```
   npm start
   ```
   Open your browser and visit http://localhost:3000 to see the application in action.

## Usage

- Search for services using keywords and location.
- Explore service providers' details by clicking on their markers on the map.
- Navigate through service provider images using the responsive image carousel.
- Share service provider information with friends and family via social media.

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

- Fork the repository.
- Create a new branch for your feature or bug fix.
- Make your changes and ensure the code is properly formatted.
- Create a pull request explaining your changes and why they should be merged.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
