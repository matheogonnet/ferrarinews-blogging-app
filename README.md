# Blogging Application - ECE School Webtech Project
![Ferrari Logo](app/public/images/ferrari.png)

### Ferrari News : The most easily accessible news about the legendary Italian car manufacturer


## Table of Contents

- [Introduction](#introduction)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Deliverables](#deliverables)
- [Functionality](#functionality)
- [Miscellaneous](#miscellaneous)
- [Contributing](#contributing)
- [Authors](#authors)

## Introduction

Ferrari News is a specialized blogging platform for Ferrari enthusiasts that brings the thrill and prestige of the Ferrari brand into the digital space. Our platform allows users to share and engage with content centered around their passion for Ferrari cars, from historical models to the latest releases.

This project was developed as part of a web development course at ECE Engineering School, using **React** and **Next.js** to build a modern, dynamic, and responsive web application.

## Technologies Used

### React
React is a popular JavaScript library for building user interfaces, particularly single-page applications (SPAs). It allows developers to create reusable components and manage application state efficiently, leading to a more modular and maintainable codebase.

### Next.js
Next.js is a powerful React framework that provides features such as server-side rendering (SSR) and static site generation (SSG), making it ideal for building high-performance, SEO-friendly applications. It also simplifies routing and API integration, which were crucial for this project.

## Prerequisites

Before you begin, ensure you have met the following requirements:
- You have installed the latest version of [Node.js and npm](https://nodejs.org/).
- You have a basic understanding of JavaScript, React, and Next.js concepts.
- You have access to a terminal on your local machine.

## Installation

To install Ferrari News, follow these steps:

1. Clone the repository from GitHub:
   ```bash
   git clone https://github.com/matheogonnet/ferrarinews-blogging-app.git
    ```
2. Navigate to the project directory:
    ```bash
    cd ferrari-news
    ```
3. Install the required libraries and dependencies:
    ```bash
    npm install
    ```

## Usage

To run Ferrari News locally:

1. Start the development server:
   ```bash
   npm run dev
    ```
2. Open your browser and navigate to `http://localhost:3000`.  
To view the deployed version on Vercel, simply visit the provided Vercel URL in the Deliverables section.

## Deliverables 

- Deploy App Link: *https://ferrari-news.vercel.app*

## Functionality

### Key Features

#### Home Page
The home page features a dynamic carousel showcasing the most popular articles, along with a search bar that allows users to quickly find content by keyword. The layout is clean and responsive, designed to work across various devices.

#### User Authentication
The application integrates GitHub OAuth2 for user authentication, allowing users to sign in securely and access personalized features like profile management and post creation.

#### Post Creation and Management
Users can create blog posts using a rich text editor, with the option to add images through the Unsplash API integration. Each user has full control over their posts, including editing and deleting capabilities.

#### Commenting System
A robust comment system is in place, enabling users to engage in discussions. Only comment authors can delete their own comments, ensuring a respectful and controlled community environment.

#### Search Functionality
Full-text search functionality allows users to search through posts by keywords, making it easy to find content relevant to their interests.

#### Light/Dark Mode
A theme toggle feature allows users to switch between light and dark mode, enhancing the reading experience according to their preferences.

#### External API Integration
The Unsplash API is used to provide high-quality images for blog posts, enhancing the aesthetic appeal of the content.

### Known Working Features
- **GitHub OAuth2 authentication**: Seamless login experience for users.
- **Post creation, editing, and deletion**: Users can fully manage their blog posts.
- **Comment system**: Users can comment on posts, with authorship control over deletion.
- **Responsive design**: The application is optimized for both desktop and mobile use.
- **Search functionality**: Efficient full-text search allows users to find articles by keywords.
- **Light/dark mode toggle**: A customizable user interface that enhances accessibility.
- **Carousel of most-liked articles**: Highlights popular content on the homepage.

## Miscellaneous

### Course Feedback

The course provided a comprehensive introduction to modern web technologies. The hands-on approach with labs and projects like this one was highly beneficial. However, the course could benefit from more real-world case studies and examples, particularly focusing on the deployment and scaling of web applications.

### Project Reuse

- ✅ We authorize the professors to use our project as an example for the next year students.

---

## Contributing

*This project was realized as part of the 2023 Web Course at the ECE Engineering School. All contributions were made by students as part of their coursework.*

---

## Authors

- Mathéo GONNET, SI gr04
- Gabriel HENAUX, SI gr04
- Tanguy VELAY, SI gr04


---