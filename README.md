# Project Overview

## Project

Link to project fullstack [here](https://job-tracker-em.netlify.app/).
Link to project frontend [here](https://github.com/emestiza/Project-2-Frontend).
Link to project backend [here](https://github.com/emestiza/Project-2-Backend).

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description | Complete
|Day 1| Wireframes / Priority Matrix / Timeline `backend` and `frontend`| Complete
|Day 2| Working RestAPI | Complete
|Day 3| Core Application Structure (HTML, CSS, etc.) | Complete
|Day 4| MVP & Bug Fixes | Complete
|Day 5| Final Touches and Present | Complete

## Project Description

The goal of this project is to build a job application tracker full stack application. In the backend an API is built using Node.js, Express.js, MongoDB, and Mongoose. The API has two models and one association. There is Create, Read, Update, and Destroy (CRUD) functionality built throughout the application. In the frontend JavaScript and jQuery are used to communicate with and leverage the backend API. The fronend also has a responsive design for mobile, tablet, and desktops. The mobile navigation is responsive such that it expands and collapses when a user clicks on the hamburger icon.

## Google Sheet

Link to Google sheet with projects [here](https://docs.google.com/spreadsheets/d/1A-BPvETOegMvze6amsGrhtmqROJjC3dzMqY2djCe__Q/edit#gid=0).

## Wireframes

Below are links to wireframes that show the application blueprint for mobile, tablet, and desktop display sizes.  

- [Mobile](https://res.cloudinary.com/dssciwyew/image/upload/v1596210699/Mobile%20P2.png)
- [Tablet](https://res.cloudinary.com/dssciwyew/image/upload/v1596210699/Tablet%20P2.png)
- [Desktop](https://res.cloudinary.com/dssciwyew/image/upload/v1596210699/Desktop%20P2.png)

## Time/Priority Matrix 

Here is a full list of features that have been [prioritized](https://res.cloudinary.com/dssciwyew/image/upload/v1596243605/Priority%20Matrix%20Backend%20P2.png) based on the `Time and Priority` Matix. 

### MVP/PostMVP

The functionality will then be divided into two separate lists: MPV and PostMVP. The MVP list includes functionality that will be implemented upon project completion.  

#### MVP

- Create and setup JavaScript files for backend
- Create and setup controllers, models, and routes for backend
- Create and setup server for backend
- Test API in Postman
- Deploy server via Heroku

#### PostMVP 

- Use seed data

## Functional Components

Based on the initial logic defined in the previous sections, the logic is broken down further into functional components.

#### MVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Backend Structure | H | 2hrs| 2hrs | 2hrs |
| Controllers | H | 2hrs| 1hr | 1hr |
| Models | H | 2hrs| 1hr | 1hr |
| Routes | H | 2hrs| 1hr | 1hr |
| Server | H | 2hrs| 1hr | 1hr |
| API Deployment | H | 2hrs| 2hrs | 2hrs |
| Debugging & Testing | M | 8hrs| 8hrs | 8hrs |
| Total | H | 20hrs| 16hrs | 16hrs |

#### PostMVP
| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Seed Data | L | 2hrs | 2hrs | 2hrs|
| Total | H | 2hrs| 2hrs | 2hrs |

## Additional Libraries
 This section lists all supporting libraries and thier role in the project. 

- Express.js is used to build an API 
- Node.js is used to build a server 

## Code Snippet

This code snippet enables the creation of an object vis Postman. 

```
// Create - Post
const create = async (req, res) => {
  try {
    const newJob = await job.create(req.body);
    res.status(200).json(newJob);
  } catch (error) {
    res.status(400).send(error);
  }
};
```

## Issues and Resolutions
**ERROR**: The seed data could not be pulled in Postman                               
**RESOLUTION**: Created a new route for seed data
