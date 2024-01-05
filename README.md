Welcome to the documentation for my Full Stack Bike Rental Website built with Next.js 13. 

This project was initiated with the goal of exploring the backend, even though the primary focus is frontend development. The aim is to gain a deeper understanding of how the backend works with this stack, enabling more informed discussions with both frontend and backend developers. Below, you'll find detailed information on the technologies used, installation instructions, and other relevant details to get you started.

This project incorporates a powerful stack to deliver a seamless and efficient bike rental experience.

## Technologies Used

1. **Next.js 13:** The foundation of our project, providing a powerful and flexible framework for building React applications with server-side rendering.

2. **React:** A declarative and efficient JavaScript library for building user interfaces. Used extensively throughout the project to create dynamic and responsive components.

3. **Tailwind CSS:** A utility-first CSS framework that simplifies the process of styling our components. It ensures a consistent and visually appealing design across the entire application.

4. **Prisma:** A modern database toolkit that simplifies database access in our Next.js application. It enables us to interact with the database seamlessly using a type-safe query builder.

5. **MongoDB:** A NoSQL database used to store and manage our application's data efficiently. Prisma handles the communication between Next.js and MongoDB.

6. **NextAuth 2023:** A complete authentication solution for Next.js applications, providing secure and customizable authentication flows.

## Project Structure

The project is organized into the following main directories:

- **`pages/`:** Contains the pages for the Next.js application.

- **`components/`:** Holds reusable React components used throughout the application.

- **`styles/`:** Includes global styles and Tailwind CSS configurations.

- **`prisma/`:** Configuration and migration files for the Prisma database.

- **`public/`:** Static assets such as images, fonts, and other resources.

- **`utils/`:** Utility functions and helper modules.

## Installation

Follow these steps to set up and run the project locally:

1. Clone the repository:

   ```bash
   git clone https://github.com/Mat2dr/bike2rent.git

2. Navigate to the project directory:

   ```bash
   cd bike2rent
   
3. Install dependencies:

    ```bash
   npm install

4. Set up the environment variables:

Create a .env.local file based on the provided .env.example template.
Add your MongoDB connection string and other necessary variables.
Run the application.

   ```bash
   npm run dev

The application should now be accessible at http://localhost:3000. Explore the various features and functionalities provided by this webapp Website!

## Contributing
We welcome contributions from the community. Feel free to submit bug reports, feature requests, or pull requests..

Happy coding! 🚴‍♂️🚴‍♀️
