# Kollege

A College Based Data Management System.

- There are three roles: Teacher, HOD and Student.

## Login Details

PS: BE KIND :)

### Teacher

**username:** Delphine  
**pwd:** Delphine123

Teacher can add or edit

- Notes
- Attendance
- Internal Marks
- Time Schedule

### HOD

**username:** Moriah  
**pwd:** Moriah123

HOD can do everything Teacher can.  
HOD can also

- Approve new Teacher
- Add New Paper

### Student

**username:** Bret  
**pwd:** Bret

Or register a new Student and Login.  
You can also login with the First Name of any student in the class.

Student can view

- Notes
- Attendance
- Internal Marks

Attendance and Marks needs to be added by the teacher first.  
Student can also join or leave a Paper(Subject).

## Tech Stack

**Front-End:** <img src="https://cdn.svgporn.com/logos/react.svg" height="12" width="12"> React, <img src="https://cdn.svgporn.com/logos/tailwindcss-icon.svg" height="12" width="12"> TailwindCSS

**Server:** <img src="https://cdn.svgporn.com/logos/nodejs-icon.svg" height="12" width="12"> NodeJS, ExpressJS

**Database:** <img src="https://cdn.svgporn.com/logos/mongodb-icon.svg" height="12" width="12">MongoDB, Mongoose

## Other Features

- Profile
- Dark Theme
- Mobile Responsive


## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1.  **Backend Setup**:
    - Navigate to `kollege_api`: `cd kollege_api`
    - Create a `.env` file with your `DATABASE_URI`
    - Install dependencies: `npm install`
    - Start server: `npm start` (Runs on port 3500)

2.  **Frontend Setup**:
    - Navigate to root directory: `cd ..`
    - Install dependencies: `npm install`
    - Start app: `npm start` (Runs on port 3000)

## Deployment

The project is configured for Vercel.
- **Frontend**: Deployed to root.
- **Backend**: Deployed to `/api/*`.

**Important:** Add `DATABASE_URI` to your Vercel Project Settings > Environment Variables.
