const quizCategories = [
    {
        name: "Car Quiz",
        icon: "🏎️",
        description: "Supercars, engines and racing",
        questions: [
            {
                question: "Who makes the Mustang?",
                answers: ["Ford", "BMW", "Ferrari", "Toyota"],
                correct: "Ford"
            },
            {
                question: "Where is Lamborghini from?",
                answers: ["Germany", "Italy", "Japan", "USA"],
                correct: "Italy"
            }
        ]
    },

    {
        name: "Gaming Quiz",
        icon: "🎮",
        description: "Test your gaming knowledge",
        questions: [
            {
                question: "Who created Minecraft?",
                answers: ["Mojang", "Nintendo", "Sony", "Valve"],
                correct: "Mojang"
            },
            {
                question: "What is the main currency in Fortnite?",
                answers: ["Coins", "V-Bucks", "Gems", "Gold"],
                correct: "V-Bucks"
            }
        ]
    },

    {
        name: "Sports Quiz",
        icon: "⚽",
        description: "Football and other sports",
        questions: []
    },

    {
        name: "Space Quiz",
        icon: "🌌",
        description: "Explore the universe",
        questions: []
    }
];

console.log(quizCategories);
