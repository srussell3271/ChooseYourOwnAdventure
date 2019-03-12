// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    music: "98_Lost_Mine.mp3",
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up to realize your in the middle of nowhere. You're in a field and you don't even know how you got there. There is a sign hanging from your neck saying: Find the Key and save your friend. You look to your left and right there are different houses. You chose to go",
            choices: [
                {
                    text: "The Right House",
                    nextLevel: "righthouse",
                },

                {
                    text: "The Left House",
                    nextLevel: "lefthouse",
                },
            ]
        },

        righthouse: {
            background_image: "righthousehallway.png",
            message: "You choose to go right and you see a nice fancy house.You wonder if you shoud take a peak and go inside.You see on both sides doors. The first two doors at the front of hallway sticks out to you. One is on the left the other is on the right",
            choices: [
                {
                    text: "Left Door",
                    nextLevel: "leftdoor",
                },
                {
                    text: "Right door",
                    nextLevel: "rightdoor",
                },
            ]
        },

        lefthouse: {
            message: "Some adventurer you are...",
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
                },
            ]
        },
        leftdoor: {
            message: "A bird flew in with a key and notes. It flies to you and you took the key off.",          
            choices: [
                {
                    text: "Start over",
                    nextLevel: "start",
        },
    }
};
