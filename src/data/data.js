


//constructor
function Project(title, datum, description, designLink, projectLink, whatILearned, biggestStruggle, skill1, skill2, skill3) {
    this.title=title;
    this.datum=datum;
    this.description=description;
    this.designLink=designLink;
    this.projectLink=projectLink;
    this.whatILearned=whatILearned;
    this.biggestStruggle=biggestStruggle;
    this.skill1=skill1;
    this.skill2=skill2;
    this.skill3=skill3
}

const tiramisuPortal= new Project(
    "Tiramisu Portal",
    "2024-03-01",
    "I love tiramisu and I decide to make a portal in which I could show different recepies, tell the story, the origin of this amazing Italian dessert",
    "https://dribbble.com/shots/21728647-Black-Walnut-Bakery",
    "https://tiramisu-portal.onrender.com",
    "EJS and working with partials. Routing with express",
    "At the moment of this project was still anxious to make hamburger menu. Routing the subpages and adjust the path of the server was a nightmare",
    "EJS",
    "Express",
    "Javascript"
    )