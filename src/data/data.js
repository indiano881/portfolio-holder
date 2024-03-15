


//constructor
function Project(title, datum, description, designLink, projectLink, whatILearned, biggestStruggle, category, skill1, skill2, skill3) {
    this.title=title;
    this.datum=datum;
    this.description=description;
    this.designLink=designLink;
    this.projectLink=projectLink;
    this.whatILearned=whatILearned;
    this.biggestStruggle=biggestStruggle;
    this.category=category;
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
    "EJS and working with partials. Routing with express, Super cool feature with opening hours",
    "At the moment of this project was still anxious to make hamburger menu. Routing the subpages and adjust the path of the server was a nightmare",
    "Webpage",
    "EJS",
    "Express",
    "Javascript"
    )

const mastermind = new Project(
    "Mastermind",
    "2023-12-18",
    "A classic game done in a extremely user friendly way, expecially for mobile",
    "I designed my self in order for players to use only one finger to play",
    "https://indiano881.github.io/Mastermind-5thAttempt/",
    "Splitting a big project in smaller functions, coding with JQuery and the importance of Git",
    "I start the project and quit 4 times before making the final version. I start to use Git only at the 5th and it helped me a lot. The white peg function was the most difficult part of the game",
    "Game",
    "JQuery",
    "Git",
    "Functions and nested logic"
)
