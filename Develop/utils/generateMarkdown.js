

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ## Description 
  ${data.description}
  
  
  ## Table of Contents
  * [License](#license)
  * [Contributors](#contributors)
  * [Instalation](#instalation)
  * [Usage](#usage)
  * [Tests](#tests)
  * [Repo](#repo)
  * [URL](#url)
  * [Questions](#questions)
  
 
  ## License 
  This project is license under ${data.license}

  ## Contributors
  ${data.contributors}.  To contribute contact ${data.name} (contact info below)
    

  ## Instalation
  Directions for instalation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Tests
  To run a test...
  ${data.test}

  ## Repo
  The Github repo is https://github.com/${data.repo}

  ## URL
  ${data.url}

  ## Questions
  If you have any questions about this projects, please contact me directly at ${data.userEmail}. You can view more of my projects at https://github.com/${data.userName}.`;

}


module.exports = generateMarkdown;
