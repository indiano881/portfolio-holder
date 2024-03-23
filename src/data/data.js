function Person(name, surname, email, phone, skills, educationMain, educationSubtitle, languages, text1, text2, text3, image, title) {
    this.name= name;
    this.surname=surname;
    this.email= email;
    this.phone= phone;
    this.skills= skills;
    this.educationMain=educationMain;
    this.educationSubtitle=educationSubtitle;
    this.languages=languages;
    this.text1=text1;
    this.text2=text2;
    this.text3=text3;
    this.image=image;
    this.title=title
}

const davide = new Person(
    "Davide",
    "Baldi",
    "d.baldi88@gmail.com",
    "+46 (0)72 564 99 33",
    "HTML, CSS, JS, JQuery, EJS, React, Node.js, Express.js, Git, Github",
    "YH- Frontend/App Developer",
    "Changemaker Education AB - Sep 2023-June 2025",
    "English, Swedish and Italian",
    "Enthusiastic and dedicated coding student.",
    "Proficient in HTML, CSS, JavaScript, Node, React, GIT and responsive design principles.",
    "Appassionate about “nerdy” stuff like Git (Yes, I love it!), React, servers and in general back-end development.",
    "davide.png",
    "Fullstack Developer"
)
export default davide;

function Project(title, datum, description, designLink, projectLink, whatILearned, biggestStruggle, category, skill1, skill2, skill3, image, imageSmall) {
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
    this.skill3=skill3;
    this.image=image;
    this.imageSmall= imageSmall
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
    "Javascript",
    "tiramisu.png",
    "tiramisuSmall.png"
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
    "Functions and nested logic",
    "mastermind.png",
    "mastermindSmall.png"
)

const portfolioHolder = new Project(
    "Portfolio holder",
    "20214-03-31",
    "Second react project, my personal webpage",
    "https://dribbble.com/shots/18363312-Richard-Freelancer-Portfolio",
    "This website",
    "Still don t know :)",
    "I want to make all the feature I always been scared to make: super cool hamburger menu, animations, slides, and cool click events",
    "React",
    "Vite",
    "React",
    "Props and States",
    "portfolio.png",
    "portfolioSmall.png"
)

const newspaper =new Project(
    "Newspaper",
    "20214-03-14",
    "First react project, newspaper",
    "https://dribbble.com/shots/20329247-Newspaper-Website-Design",
    "soon",
    "React, working by components, props and refresh JS methods",
    "The mental abstraction that you need to have to navigate and connecte the components properly",
    "Newspaper",
    "React",
    "Props",
    "Methods like filter, map, includes",
    "newspaper.png",
    "newspaperSmall.png"
)

export const projectArray= [tiramisuPortal, mastermind, portfolioHolder, newspaper];

