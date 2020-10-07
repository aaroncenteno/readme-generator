const generateList = commalist => {
    listarray = commalist.split(",")
    listarray = listarray.map(listitem => "* " + listitem)
    return listarray.join(" \n")
};

const generateBadges = badgeArr => {
    badgeArr = badgeArr.map(itemBadge => {
        if (itemBadge !== "None") {
            return "![License](https://img.shields.io/static/v1?label=License&message=" + itemBadge + "&color=BLUE)"
        }
    })
    return badgeArr.join(" ")
}


const generateObjectLicense = objectLicense => {
    objectLicense = objectLicense.map(itemLicense => "* " + itemLicense)
    return objectLicense.join(" \n")
}


// function to generate markdown for README
function generateMarkdown(data) {
    const {title, description, installation, usage, license, contributing, test, username, email} = data
    return `
${generateBadges(license)}

# ${title}

## Description

${description}

## Table of Contents

* [Installation](#installation)
* [Usage](#usage)
* [License](#licenses)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation 

${installation}

## Usage

${usage}

## Licenses

${generateObjectLicense(license)}

## Contributing

${generateList(contributing)}

## Tests

${test}

## Questions

Contact Information for questions: \n

GitHub: [${username}](https://www.github.com/${username}) \n
E-mail: ${email}
  `;
  }
  
  module.exports = generateMarkdown;