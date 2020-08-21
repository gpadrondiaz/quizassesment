# Lucid UI Code Assessment

Welcome to the code assessment for Lucid's UI Team.

## Application

The purpose of this exercise is to build a [React](https://reactjs.org) application based on the provided mockups and requirements below:

### Quiz App

The application is a Quiz interface - a UI that shows a set of 10 questions and lets the user select an answer for each one.


### Requirements

1. The UI should fetch the questions data from an API (provided in this repository). More details in [API instructions](#api-instructions)

2. The application should display one question per time, randomly selected from the set of questions.  
   
3. When the user finishes the Quiz, the UI should display a summary page with the results, including:

- Number of correct answers
- Number of incorrect answers
- Total number of questions answered
- The final score (%)
- A button to restart the Quiz with a different questions

### Setup

This repo provides a React application bootstrap. To get setup, run these commands:
 
- Install dependencies:

```sh
npm install
```

- Run it locally

```sh
npm start
```

The command above will:

- Start an HTTP server for the API (localhost:4000);
- Start an HTTP server (powered by react-scripts) for the front-end (localhost:3000);

