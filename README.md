# KOLLEGE

[LocalHost](http://localhost:3000)

A College Based Data Base Management System Project.

- There are two types of roles: Staff[Teacher,HOD] and Student.

## Login Details

### Teacher [staff]

**username:** faiyaz  
**pwd:** faiyaz

Teacher can add or edit

- Notes
- Attendance
- Internal Marks
- Time Schedule

### HOD (Head of Department) [staff]

**username:** aryank  
**pwd:** aryank123

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

**Client:** React, TailwindCSS

**Server:** NodeJS, ExpressJS

**Database:** MongoDB, Mongoose

## Other Features

- Profile
- Dark Theme
- Mobile Responsive

## Setting Up

Clone the project:

```bash
  git clone https://github.com/aryankaushik11/College_mngm
```

Change Directory:

```bash
  cd kollege
```

Install dependencies:

```bash
  npm install
```

Finally,

```bash
  npm start
```


```javascript
baseURL: "http://localhost:300";
```

```javascript
baseURL: "https://example.address.com";
```


## Acknowledgements

- [MERN Stack Tutorial](https://www.youtube.com/watch?v=CvCiNeLnZ00&pp=ygUOZGF2ZSBncmF5IGZ1bGw%3D) by [Dave Gray](https://github.com/gitdagray)
- [React Tutorial](https://www.youtube.com/watch?v=RVFAyFWO4go&pp=ygUOZGF2ZSBncmF5IGZ1bGw%3D) by [Dave Gray](https://github.com/gitdagray)
- [React Icons](https://react-icons.github.io/react-icons/search)
- [React Router](https://reactrouter.com/en/main)
- [React Toastify](https://fkhadra.github.io/react-toastify/introduction)
- [axios](https://axios-http.com/)
- [README Editor](readme.so)
