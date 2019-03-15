// NOTE - You must have a level with the name "start".  This is used as the first level in the game.

var game = {
    background_image: "intro-bg.jpg",
    levels: {

        start: {
            message: "You wake up to realize your in the middle of nowhere. You're in a field and you don't even know how you got there. There is a sign hanging from your neck saying: Find the Key and save your friend. You look to your left and right there are different houses. You chose to go",
            choices: [
                {
                    text: "The Left House",
                    nextLevel: "lefthouse",
                },

                {
                    text: "The Right House",
                    nextLevel: "righthouse",
                },
            ]
        },

        righthouse: {
            background_image: "righthousehallway.png",
            message: "You choose to go right and you see a nice fancy house.You wonder if you shoud take a peek and go inside.You see on both sides doors. The first two doors at the front of hallway sticks out to you. One is on the left the other is on the right",
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
            message: "You don't see anything inside so you go back out and go to the other door",            
            choices: [
                    {
                    text: "Enter the Other Room",
                    nextLevel: "rightdoor",
                    },
                ]
             },
        rightdoor: {
            message: "You see a raven sitting on the window and around it's neck is a key and a note",
            choices: [
                {
                text: "Take the key and note",
                nextLevel: "afterBird",
                },
                
                {
                text: "Leave the Room",
                 nextLevel: "hallway",
                },
            ]
        },
        afterBird: {
            message: "The notes says: You found the key now find your friend...Time is ticking so I'll hurry up if I was you. So you either",
            choices: [
                {
                text: "Look For You Friend",
                nextLevel: "lookForFriend",
                },
                
                {
                text: "Save Yourself",
                 nextLevel: "saveYourself",
                },
            ]
        },
        hallway: {
            message: "You walked back to the front door and you see something move in the shadows. Then it moves towards you, so you",
            choices: [
                {
                text: "Panic and Run out the house",
                nextLevel: "leaveRightHouse",
                },
                
                {
                text: "Stay Calm and Pretend you don't see it.",
                 nextLevel: "calmNoSee",
                },
            ]
        },
        leaveRightHouse: {
            message: "You ran as fast as you could and as far as you can. However, you wasn't no match for your killer. You didn't save your friend and you died.",
            choices: [
                {
                text: "Start Over",
                nextLevel: "start",
                },
            ]
        },
               
        lookForFriend: {
            message: "You heard screaming from the wall. You walked over it and said 'Anyone here?' A voice from the wall that was oddly familiar said 'Help me~'",
            choices: [
                {
                text: "Look For A Way Through The Wall ",
                nextLevel: "findingFriend",
                },
                
                {
                text: "Leave Them Behind",
                nextLevel: "hallway",
                },
            ]
        },
        findingFriend: {
            message: "You see this hook hanging from the wall and you",
            choices: [
                {
                text: "Touched It ",
                nextLevel: "hook",
                },
                
                {
                text: "Leave It Alone",
                nextLevel: "noHook",
                },
            ]
        },
        hook: {
            message: "You pulled on it and the wall opened up. You see your friend and she runs to you and grabbed your hand. They want to leave so you",
            choices: [
                {
                text: "Let Her Lead ",
                nextLevel: "theyEscaping",
                },
                
                {
                text: "Lead Them Instead",
                nextLevel: "youEscaping",
                },
            ]
        }    
    
    }
};
