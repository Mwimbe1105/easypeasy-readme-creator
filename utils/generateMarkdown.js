function generateMarkdown(data, userInfo) {

  // Generate Table of Contents conditionally based on data
  let draftToC = `## Table of Contents`;

  if (data.UserName!== '') { draftToC += `
  * [UserName](#UserName)` };

  if (data.Email !== '') { draftToC += `
  * [Email](#Email)` };

  if (data.Title !== '') { draftToC += `
  * [Title](#Title)` };

  if (data.Description !== '') { draftToC += `
  * [Description](#Description)` };

  if (data.Installation !== '') { draftToC += `
  * [Installation](#Installation)` };

  if (data.License !== '') { draftToC += `
  * [License](#License)` };

  if (data.Contributor !== '') { draftToC += `
  * [Contributor](#Contributor)` };

  if (data.Test !== '') { draftToC += `
  * [Test](#Test)` };

  // Add Table of Contents to markdown
  userInfo += draftToC;
 
  // Add License section since License is required to Table of Contents
  userInfo += `
  * [License](#license)`;
  

  // Optional Installation section
  if (data.installation !== '') {
  
    userInfo +=
  `
  
  ## Installation
  
  *Steps required to install project and how to get the development environment running:*
  
  ${data.installation}`
  };
  

  // Optional Usage section
  if (data.usage !== '') {
  
    userInfo +=
  
  `
  
  ## Usage 
  
  *Instructions and examples for use:*
  
  ${data.usage}`
  };
  
  
  // Optional Contributing section
  if (data.contributing !== '') {
  `
  
  ## Contributing
  
  *If you would like to contribute it, you can follow these guidelines for how to do so.*
  
  ${data.contributing}`
  };
  

  // Optional Tests section
  if (data.tests !== '') {
  
  userInfo +=
  `
  
  ## Tests
  
  *Tests for application and how to run them:*
  
  ${data.tests}`
  };


  // License section is required
 userInfo +=
  `
  
  ## License
  
  ${data.license}
  `;
return generateMarkdown}

module.exports = generateMarkdown;