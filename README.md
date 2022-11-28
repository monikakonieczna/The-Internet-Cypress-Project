<h1>
  Practice test automation with <a href="https://cypress.io"> <img width="140" alt="Cypress Logo" src="https://s4-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/113/000/resized/logo_landscape_(1).png?1643756332" /> </a> on <a href="http://the-internet.herokuapp.com/">The Internet</a>
</h1>

> **Note**
>
> **<a href="http://the-internet.herokuapp.com/">The Internet</a>** is site from Dave Haeffner and Elemental Selenium with several concise examples of web elements and interactions. It is recommended when you want to practice interactions on specific elements.
>
## Cypress Features
This tests are purely for Cypress features practice. Therefore the list of used features you can find below:
+ Fixtures - Loading single fixture and access credentials 
+ <a href="https://github.com/4teamwork/cypress-drag-drop">Drag and Drop plugin</a>
+ <a href="https://github.com/cypress-io/cypress/tree/develop/npm/xpath">Xpath plugin</a>
+ <a href="https://github.com/dmtrKovalenko/cypress-real-events">Real events plugin</a>
+ <a href="https://github.com/cypress-io/cypress/tree/develop/npm/grep">Grep plugin</a>
+ Shadow DOM
+ Hover and Hidden Elements
+ File download, File read
+ Interaction with DOM using commands such as .click(), .righclick(), .type(), .clear(), .check(), .trigger() etc.
+ Aliasing
+ Java Script alerts
+ Key presses

## CI
Additionally those tests are configured to run in GitHub workflow. It is using GitHub Actions to run tests after git actions such as: PUSH, PULL REQUEST.
It is possible to trigger GitHUb Workflow also manually. Configuration files can be found in directory: .github/workflows.

| CI  | Trigger | Basic config file |
| --- | ---- | ---- |
| GitHub Actions | manual | [github_actions_manual.yml](.github/workflows/github_actions_manual.yml) | 
| GitHub Actions | push | [cypress-docker-image.yml](.github/workflows/cypress-docker-image.yml) | 
| GitHub Actions | pull_request | [github_actions_pr.yml](.github/workflows/github_actions_pr.yml) | 



## Getting Started

### Prerequisites

The only requirement for this project is to have [Node.js](https://nodejs.org/en/) **version 18.12.1** installed on your machine.

### Start Cypress

```shell
npm run cy:open
```


