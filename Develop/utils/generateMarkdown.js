

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Description 
  ${data.description}
  ## Table of Contents
  * [License](#license)
  * [Contributing](#contributing)
  * [Repo](#repo)
  * [Questions](#questions)
 
  
 
  ## License 
  This project is license under ${data.license}

  ## Contributors
  ${data.contributors}.  
    To contribute contact ${data.name} (contact info below)

  ## Repo
  The Github repo is ${data.repo}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.userEmail}. You can view more of my projects at https://github.com/${data.userName}.`;

}


module.exports = generateMarkdown;
