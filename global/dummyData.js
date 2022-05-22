import { icons } from ".";
import images from "./images";

const trendingRecipes = [
    {
        id: 1,
        name: "Spaghetti With Shrimp Sauce",
        image: images.spagetti,
        duration: "35 mins",
        serving: 1,
        category: "Pasta",
        author: {
            profilePic: images.UserProfile5,
            name: "Maria",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.pasta,
                description: "Spaghetti pasta",
                quantity: "100g"
            },
            {
                id: 2,
                icon: icons.oil,
                description: "Olive Oil",
                quantity: "2 tbsp"
            },
            {
                id: 3,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 4,
                icon: icons.tomato,
                description: "Campari tomatoes",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.salt,
                description: "Salt",
                quantity: "¾ tbsp"
            },
            {
                id: 6,
                icon: icons.pepper,
                description: "Black Pepper",
                quantity: "¼ tbsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                profilePic: images.UserProfile3
            },
            {
                id: 4,
                profilePic: images.UserProfile3
            }
        ],
        steps:[
            {
                id:1,
                stepno:"1.",
                descriptionsteps:"Peel shrimp and place skin, heads, and tails into a large saucepan. Fill pan with water and bring to a boil. Reduce heat to low and let simmer.",
                
            },
            {
                id:2,
                stepno:"2.",
                descriptionsteps:"Combine tomatoes and 1/2 the parsley in a blender; puree until smooth."
            },
            {
                id:3,
                stepno:"3.",
                descriptionsteps:"Heat olive oil in a separate pan over medium heat. Add onion, bell pepper, and chile pepper; cook and stir until softened. Add garlic; cook until fragrant but not browned."
            },
            {
                id:4,
                stepno:"4.",
                descriptionsteps:"Pour pureed tomato mixture into the pan with the peppers. Add water, tomato paste, oregano, salt, and black pepper. Stir well; add paprika. Let sauce simmer on low to medium heat until juices have reduced."
            },
            {
                id:5,
                stepno:"5.",
                descriptionsteps:"Strain shrimp shells from the water. Bring water back to a boil and add spaghetti. Cook spaghetti, stirring occasionally, until tender yet firm to the bite. Reserve 1 cup of the cooking water and drain the rest."
            },
            {
                id:6,
                stepno:"6.",
                descriptionsteps:"In the meantime, add shrimp to the tomato sauce. Add the reserved water, stir well, and cook until shrimp is pink, about 3 minutes.Plate spaghetti and spoon the sauce on top; garnish with the remaining parsley."
            }
        ]
    },
    {
        id: 2,
        name: "Malaysian Chicken Satay",
        image: images.satay,
        duration: "50 mins",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile8,
            name: "Mandy",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chicken,
                description: "Boneless Chicken Thighs",
                quantity: "1kg"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass stalk",
                quantity: "1 stalk"
            },
            {
                id: 3,
                icon: icons.onion,
                description: "Large Onion",
                quantity: "1"
            },
            {
                id: 4,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "5"
            },
            {
                id: 5,
                icon: icons.coriander,
                description: "Coriander",
                quantity: "1 tsp"
            },

        ],
        viewers: [
            {
                id: 1,
                profilePic: images.UserProfile5
            },
            {
                id: 2,
                profilePic: images.UserProfile4
            },
            {
                id: 3,
                profilePic: images.UserProfile1
            },
            {
                id: 4,
                profilePic: images.UserProfile2
            },
            {
                id: 5,
                profilePic: images.UserProfile3
            }
        ],
        steps:[
            {
                id:1,
                stepno:"1.",
                descriptionsteps:"To begin, blend all satay spice mix ingredients together in a food processor until it achieves the consistency of a smooth, fine paste. Set 3 tbsp of the spice mix aside for making the peanut sauce",
                
            },
            {
                id:2,
                stepno:"2.",
                descriptionsteps:"Place the rest of the spice mix into a container with the chicken pieces and leave to marinade in the fridge for at least 4 hours, or preferably overnight"
            },
            {
                id:3,
                stepno:"3.",
                descriptionsteps:"To make the peanut sauce for the satay, add all the ingredients (including the reserved 3 tbsp of spice paste) to a medium-sized saucepan. Place over a medium heat and bring to boil, stirring every now and then to prevent it sticking to the bottom. Reduce the heat to low and simmer for 5 minutes until the sauce thickens. Set aside."
            },
            {
                id:4,
                stepno:"4.",
                descriptionsteps:"Soak the skewers in water for 10 minutes. Skewer the chicken pieces onto skewers so that there are 6 pieces per skewer."
            },
            {
                id:5,
                stepno:"5.",
                descriptionsteps:"To cook the skewers, you can use a flat-top griddle plate, a grill preheated to high or a barbecue. Turn the skewers frequently to char each side for around 5 minutes or until the chicken is cooked through."
            },
            {
                id:6,
                stepno:"6.",
                descriptionsteps:"Serve with the peanut sauce and freshly cut cucumber and red onion."
            }
        ]
    },
    {
        id: 3,
        name: "Sarawak Laksa",
        image: images.laksa,
        duration: "30 mins",
        serving: 1,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile9,
            name: "Jessie",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 2,
                icon: icons.lemongrass,
                description: "Lemongrass",
                quantity: "2 stalks"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "2"
            },
            {
                id: 4,
                icon: icons.shrimp,
                description: "Fresh Shrimp",
                quantity: "100g"
            },
            {
                id: 5,
                icon: icons.shallot,
                description: "Shallot",
                quantity: "4"
            },
            {
                id: 6,
                icon: icons.pasta,
                description: "vermicelli",
                quantity: "100g"
            },


        ],
        viewers: [
            {
                id: 1,
                name: "User 1",
                profilePic: images.UserProfile1
            },
            {
                id: 2,
                name: "User 2",
                profilePic: images.UserProfile2
            },
            {
                id: 3,
                name: "User 3",
                profilePic: images.UserProfile3
            }
        ],
        steps:[
            {
                id:1,
                stepno:"1.",
                descriptionsteps:"Heat a non-stick pan over medium heat.",
                
            },
            {
                id:2,
                stepno:"2.",
                descriptionsteps:"Pour in egg mixture. Cook until set, popping any air bubbles with a knife. Flip over and cook other side."
            },
            {
                id:3,
                stepno:"3.",
                descriptionsteps:"Remove from pan and slice into thin strips. Set aside."
            },
            {
                id:4,
                stepno:"4.",
                descriptionsteps:"Add chillies, shallots, garlic, lemongrass, candlenuts, ginger, galangal, coriander, cumin, tamarind puree, water and oil into a food processor or blender. Blitz to make a smooth paste."
            },
            {
                id:5,
                stepno:"5.",
                descriptionsteps:"Heat a pot or pan over medium heat. Pour in the paste and cook for 40 mins, stirring occasionally."
            },
            {
                id:6,
                stepno:"6.",
                descriptionsteps:"Add sugar, curry powder, paprika and salt, and cook for 5 mins, stirring constantly."
            },
            {
                id:7,
                stepno:"7.",
                descriptionsteps:"Set paste aside."
            },
            {
                id:8,
                stepno:"8.",
                descriptionsteps:"Add water to a pot and bring to a boil over high heat."
            },
            {
                id:9,
                stepno:"9.",
                descriptionsteps:"Reduce heat to medium and add the prawns. Cook for 2-3 mins or until pink and cooked through, then remove and set aside."
            },
            {
                id:10,
                stepno:"10.",
                descriptionsteps:"Add chicken breast and poach for 5-7 mins or until cooked. Remove chicken and cool before shredding with a fork."
            },
            {
                id:11,
                stepno:"11.",
                descriptionsteps:"Add laksa paste and reserved prawn shells and heads."
            },
            {
                id:12,
                stepno:"12.",
                descriptionsteps:"Bring to a boil over medium-high heat, then cover and reduce heat to low. Simmer for 30 mins."
            },
            {
                id:13,
                stepno:"13.",
                descriptionsteps:"Strain the stock to remove prawn heads, shells and other impurities, and bring the stock to a boil again."
            },
            {
                id:14,
                stepno:"14.",
                descriptionsteps:"Add coconut milk to the soup and season with salt and sugar to taste."
            },
            {
                id:15,
                stepno:"15.",
                descriptionsteps:"Soak vermicelli according to the packet instructions. Then, blanch together with the Hokkien noodles for 1 min. Drain and place into bowls."
            },
            {
                id:16,
                stepno:"16.",
                descriptionsteps:"Blanch the bean sprouts for 30 secs. Drain and place onto top of noodles."
            },
            {
                id:17,
                stepno:"17.",
                descriptionsteps:"Top with chicken meat, cooked prawns, omelette strips."
            },
            {
                id:18,
                stepno:"18.",
                descriptionsteps:"Finally, ladle soup over until all the ingredients are covered. Garnish with coriander and serve with a lime wedge."
            }
        ]
    },
    {
        id: 4,
        name: "Nasi Lemak",
        image: images.nasiLemak,
        duration: "1 hour",
        serving: 10,
        isBookmark: true,
        category: "Local",
        author: {
            profilePic: images.UserProfile7,
            name: "Ali Baba",
        },
        ingredients: [
            {
                id: 1,
                icon: icons.chilli,
                description: "Dried Chilli",
                quantity: "30g"
            },
            {
                id: 2,
                icon: icons.garlic,
                description: "Garlic cloves",
                quantity: "3"
            },
            {
                id: 3,
                icon: icons.egg,
                description: "Egg",
                quantity: "10"
            },
            {
                id: 4,
                icon: icons.rice,
                description: "rice",
                quantity: "1kg"
            },
            {
                id: 5,
                icon: icons.anchovy,
                description: "Dried anchovies",
                quantity: "3 cups"
            },


        ],
        viewers: [

        ],
        steps:[
            {
                id:1,
                stepno:"1.",
                descriptionsteps:"Start with the sambal. Remove and discard the stalks from the dried chillies, then roughly break them up and put in a small pan of boiling water.",
                
            },
            {
                id:2,
                stepno:"2.",
                descriptionsteps:"Simmer for 15 minutes, then drain, reserving a little of the cooking water (a teaspoon or so). Meanwhile, trim and deseed the fresh chillies and peel and roughly chop the shallots, garlic and ginger."
            },
            {
                id:3,
                stepno:"3.",
                descriptionsteps:"Whizz or pound the soaked dried chillies with their reserved soaking liquid to make a paste, then add the fresh chillies, shallots, garlic and ginger, break down into a puree, then crumble in the belacan."
            },
            {
                id:4,
                stepno:"4.",
                descriptionsteps:"Heat the oil in a wok or small pan over a medium heat, add the paste and fry, stirring often so it doesn’t burn, until the oil separates out; add a little water if it begins to stick."
            },
            {
                id:5,
                stepno:"5.",
                descriptionsteps:"Stir in a teaspoon of tamarind, a teaspoon of sugar and a good pinch of salt, adjust to taste, then turn down the heat and fry, still stirring regularly, until the oil separates again."
            },
            {
                id:6,
                stepno:"6.",
                descriptionsteps:"Rinse the rice, then soak it in cold water for 20 minutes. Drain and put in a medium saucepan with the coconut milk – if there’s a big lump of cream on top, save this for later."
            },
            {
                id:7,
                stepno:"7.",
                descriptionsteps:"Add salt and enough water to come up to the first joint of a finger poked in to the top of the rice."
            },
            {
                id:8,
                stepno:"8.",
                descriptionsteps:"Tie the pandan leaves in a knot, so they fit the pot better, then nestle into the rice."
            },
            {
                id:9,
                stepno:"9.",
                descriptionsteps:"Stir well, bring to a simmer, then cover, turn down the heat slightly and leave to cook for 10 minutes. Quickly add the coconut cream, put a clean tea towel on top, cover again and leave for 15 minutes."
            },
            {
                id:10,
                stepno:"10.",
                descriptionsteps:"Fry the peanuts in a dry pan until you can smell them toasting, then set aside. Heat the oil in the same pan, fry the anchovies until crisp and golden, then tip them on to a piece of kitchen paper to drain."
            },
            {
                id:11,
                stepno:"11.",
                descriptionsteps:"Boil the eggs for seven to nine minutes, depending on how hard-boiled you like them, then cool under running water, peel and halve. Cut the cucumber into thick slices."
            },
            {
                id:12,
                stepno:"12.",
                descriptionsteps:"To serve, put a mound of rice on each plate, add a spoonful of sambal to the side, then add the peanuts, anchovies, eggs and cucumber alongside. Serve the rest of the sambal on the table for people to help themselves."
            }
        ]
    },

]

const categories = trendingRecipes

export default {
    trendingRecipes,
    categories
}