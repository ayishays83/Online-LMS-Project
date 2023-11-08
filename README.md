# FullStack Learning Management System (LMS)
A dynamic Learning Management System (LMS) built with Next.js, React.js, Tailwind CSS, GraphQL with Hygraph, and Clerk to provide an interactive and feature-rich educational platform.
# Overview
This repository houses a FullStack Learning Management System (LMS) that leverages modern web technologies to create a comprehensive educational platform.
# Features
  * User Management: Easily manage users, roles, and permissions using Clerk.
  * Course Creation: Instructors can create and manage courses, including adding materials, assignments, and assessments.
  * Enrollment System: Students can enroll in courses and track their progress.
  * Real-time Updates: Utilizes GraphQL with Hygraph for real-time data communication.
  * Responsive Design: Built with Next.js and Tailwind CSS for a mobile-friendly and modern UI

# Technologies Used
  * Next.js: A React framework for server-rendered React applications.
  * React.js: A popular JavaScript library for building user interfaces.
  * Tailwind CSS: A utility-first CSS framework for quickly building custom designs.
  * GraphQL with Hygraph: A GraphQL server and query language implementation.
  * Clerk: A developer-first authentication and user management system.
# Getting Started
## Prerequisites
  * Node.js and npm installed on your machine.
## Installation
1. Clone this repository to your local machine.
2. Install the project dependencies using npm.
<pre>
  npm install
</pre>
1.Start the development server.
  <pre>
  npm run dev
</pre>
# .env.local
To run this project locally, you'll need to create a .env.local file in the project root and configure the required environment variables. You can use the .env.example file as a template to set up your environment variables. Ensure that you add your own values to these variables:
<pre>
 # Clerk authentication
CLERK_API_KEY=YOUR_CLERK_API_KEY
NEXT_PUBLIC_HYGRAPH_KEY=YOUR_HYGRAPH_KEY
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
</pre>
# Demo Preview
[Demo Vedio](https://clipchamp.com/watch/RLn4WjVxjok)

