## Available Scripts

In the project directory, you can run:

## Minimal requirements:
- The main screen of the app should display text field to enter search parameters and the search results should be coming under it
- Search results must be displayed as soon as you enter search text in the search field
- The search must be done using GET request to https://api.github.com/search/repositories?q=subject, where is the Subject – the request field, and request results analysis.
- The state of the app should be stored in Redux.

## Output of Project:
- project name, and if I click on it, it should take me to the project’s page
- Stargazers_count
- Watchers_count

## Run the Project
 - Go to the directory of project in terminal
 - Run below commands
    - npm install
    - npm update
    - npm start
    - npm build (if you want to create build)

# Details of Project

- Optimise the request to API so the requests are not sent very often (use debounce and minimal character number)
- For React.js: use the CSS processor of your choice or JSS, Styled Components, Emotion.js
- Pls present your expertise in optimisation of the specifics for React apps
- Stylised your code in accordance with the ESLint requirements (we use Airbnb guidelines)
- Utilise some methods for statistical type-format