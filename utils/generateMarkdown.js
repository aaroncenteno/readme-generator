const generateList = commalist => {
    listarray = commalist.split(",")
    listarray = listarray.map(listitem => "*" + listitem)
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
    objectLicense = objectLicense.map(itemLicense => "*" + itemLicense)
    return objectLicense.join(" \n")
}


// function to generate markdown for README
function generateMarkdown(data) {
    const {title, description, installation, usage, license, contributing, test, username, email} = data
    return `# ${data.title}
  
  `;
  }
  
  module.exports = generateMarkdown;