# Kollege

A College Based Data Management System.

- There are three roles: Teacher, HOD and Student.

## Login Details

PS: BE KIND :)

### Teacher

**username:** faiyaz  
**pwd:** faiyaz

Teacher can add or edit

- Notes
- Attendance
- Internal Marks
- Time Schedule

### HOD

**username:** aryank  
**pwd:** aryank123

HOD can do everything Teacher can.  
HOD can also

- Approve new Teacher
- Add New Paper

### Student

**username:** lamineyamal  
**pwd:** aryank123

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


### Allowing requests without headers during development

Inside config/corsOptions.js, uncomment "|| !origin" part during development

```javascript
 if (
      allowedOrigins.indexOf(origin) !== -1
      //! comment out/remove in production
       || !origin
    )
```

### Adding HOD

Since admin isn't added yet - HOD manages most things.  
You'll need to add an HOD manually.  
🚀 Use a REST API client like Postman/Thunder Client.

Request Method: **POST**  
Request Address: **<http://localhost:3500/staff>**  
    // the port should be where you host the server, 3500 by default, and not the react port i.e, 3000
Request Body:

```javascript
  {
"name":"...",
"email":"...",
"department":"Computer",
"username":"...",
"password":"...",
"role":"HOD"
  }
```

- ❗Don't forget to fill **"..."** with necessary details instead of leaving it as it is.

#### NOTE

Don't forget to comment out "|| !origin" Inside config/corsOptions.js after development.

```javascript
 if (
      allowedOrigins.indexOf(origin) !== -1
      //! comment out/remove in production
      // || !origin
    )
```

### Still getting errors?

Go to config/corsOptions.js. Make sure your front-end address is included in allowedOptions:

```javascript
const allowedOrigins = [
  "http://localhost:3000",
  // Add the address if you host your front-end somewhere
  "https://example.address.com",
];
```

## Contact

Errors are bound to happen and the documentation is incomplete.  
I'd love to hear feedbacks and suggestions.  

