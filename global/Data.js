import { icons } from ".";



export const filterData = [{name:"Fast Food",image:require("../assets/kindpng_33759.png"),id:'0'},
                           {name:"Salad",image:require("../assets/kindpng_875509.png"),id:'1'},
                           {name:"Pasta",image:require("../assets/kindpng_1147180.png"),id:'2'},
                           {name:"Dessert",image:require("../assets/kindpng_2793494.png"),id:'3'},
                           {name:"Chinese",image:require("../assets/kindpng_1492779.png"),id:'4'},
                           {name:"Mexican",image:require("../assets/kindpng_1552872.png"),id:'5'},
                           {name:"Sea Food",image:require("../assets/kindpng_2166434.png"),id:'6'},
                          ];

                          export const filterData2 = [{name:"Fast Food",image:require("../assets/kindpng_33759.png"),id:'0'},
                           {name:"Salad",image:require("../assets/kindpng_875509.png"),id:'1'},
                           {name:"Pasta",image:require("../assets/kindpng_1147180.png"),id:'2'},
                           {name:"Dessert",image:require("../assets/kindpng_2793494.png"),id:'3'},
                           {name:"Chinese",image:require("../assets/kindpng_1492779.png"),id:'4'},
                           {name:"Mexican",image:require("../assets/kindpng_1552872.png"),id:'5'},
                           {name:"Sea Food",image:require("../assets/kindpng_2166434.png"),id:'6'},
                           {name:"Chinese Food",image:require("../assets/food-png-2968.png"),id:'7'},
                           {name:"Mexican Food",image:require("../assets/438-4384378_enjoy-our-delicious-authentic-mexican-food-mexican-food.png"),id:'8'},
                           {name:"Ocean Dish",image:require("../assets/PngItem_39582.png"),id:'9'},
                          ];

                          export const recipeData=[
                              {recipeName:"Chicken Burger",duration:"60",
                               serving:1,images:require("../assets/chicken-burger-cheese-tomatoes-lettuce-sauce-slate-black-background-close-up-180733098.jpg"),
                            averageReview:4.9,numberofReview:272,foodType:"Fast Food",
                            productData:[{name:"Yuca French Fries",duration:"60 mins",image:require("../assets/161-1617907_yucca-frita-18-yuca-frita-de-panama.png")},
               {name:"Crispy Turnip 'Fries'",duration:"35 mins",image:require("../assets/image.jpg")}                
],
                    id:0},

                    {recipeName:"French Fries",duration:"20",
                    serving:1,images:require("../assets/different-types-french-fries-January162020-min.jpg"),
                 averageReview:5.2,numberofReview:346,foodType:"Fast Food",
                 productData:[{name:"Yuca French Fries",duration:"60 mins",image:require("../assets/161-1617907_yucca-frita-18-yuca-frita-de-panama.png")},
                 {name:"Crispy Turnip 'Fries'",duration:"35 mins",image:require("../assets/image.jpg")}                
  ],
         id:1},
         
         {recipeName:"Pepperoni Pizza",duration:"2 hrs 35",
         serving:6,images:require("../assets/Pepperoni-Pizza-480x270.png"),
      averageReview:4.9,numberofReview:272,foodType:"Fast Food",
  productData:[{name:"Yuca French Fries",duration:"60 mins",image:require("../assets/161-1617907_yucca-frita-18-yuca-frita-de-panama.png")},
               {name:"Crispy Turnip 'Fries'",duration:"35 mins",image:require("../assets/image.jpg")}                
],
id:2},
                          ]

                          export const productData = [
                            {name:"Asian Zucchini-and-Chicken Burgers",duration:"20 mins",image:require("../assets/145-1457143_burger-king-hainanese-malaysia-hd-png-download.png"),id:0},
                            {name:"Buffalo Chicken Burgers with Blue Cheese Dressing",duration:"35 mins",image:require("../assets/1434149709-burgers-05.jpg"),id:1},
                            {name:"Crispy Turnip 'Fries",duration:"35 mins",image:require("../assets/image.jpg"),id:2},                
                  ];
                 
                  export const productData2 = [
                    {name:"Asian Zucchini-and-Chicken Burgers",duration:"20 mins",image:require("../assets/145-1457143_burger-king-hainanese-malaysia-hd-png-download.png"),id:0},
                    {name:"Buffalo Chicken Burgers with Blue Cheese Dressing",duration:"35 mins",image:require("../assets/1434149709-burgers-05.jpg"),id:1},
                    {name:"Yuca French Fries",duration:"60 mins",image:require("../assets/161-1617907_yucca-frita-18-yuca-frita-de-panama.png"),id:2},                
          ];

                              
          export const ingredientsData = [
            {
               id: 1,
               icon: icons.chicken,
               description:"Chicken Breast",
               quantity: "    1 lb"
           },
           {
              id:2,
              icon: icons.breadcrumbs,
              description:"Breadcrumbs",
              quantity:" 1/3 cup"
           },
           {
            id:3,
            icon: icons.tomato,
            description:"Tomato",
            quantity:"             1/4 tsp"
         },
         {
            id:4,
            icon: icons.pepper,
            description:"Pepper",
            quantity:"             1/4 tsp"
         },
         {
            id:5,
            icon:icons.onion,
            description:"Sliced Onion",
            quantity:"   1/4 tsp"
         },
         {
            id:6,
            icon:icons.mayonnaise,
            description:"Mayonnaise",
            quantity:"    1/4 tsp"
         },
         {
            id:7,
            icon:icons.salt,
            description:"Salt",
            quantity:"                   1/4 tsp"
         },
         {
            id:8,
            icon:icons.cucumber,
            description:"Cucumber",
            quantity:"       1/4 tsp"
         },
         {
            id:9,
            icon:icons.milk,
            description:"Milk",
            quantity:"                  1/3 cup"
         },
         {
            id:10,
            icon:icons.worcestershire,
            description:"Worcestershire",
            quantity:" 1 tsp"
         },
         {
            id:11,
            icon:icons.burgerbuns,
            description:"Burger Buns",
            quantity:"            2"
         },
          ];
                    

         export const recipescreenData = [
            {
               id:1,
               stepno:"1.",
               descriptionsteps:"Combine chicken, bread crumbs, milk, chopped green onions, Worcestershire sauce and salt and pepper and form into patties.",
               
           },
           {
               id:2,
               stepno:"2.",
               descriptionsteps:"Barbeque or fry for approximately 5 minutes per side or until meat thermometer registers 165°F (74°C)."
           },
           {
               id:3,
               stepno:"3.",
               descriptionsteps:"Serve on a whole wheat bun or in a pita shell garnished with sliced tomato, cucumber, green onion, lettuce and mayonnaise."
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

         export const gallerydata = [
            {
               id:1,
               image:require("../../src/assets/chicken-burger-cheese-tomatoes-lettuce-sauce-slate-black-background-close-up-180733098.jpg")
            },
            {
               id:2,
               image:require("../../src/assets/Pepperoni-Pizza-480x270.png")
            },
            {
               id:3,
               image:require("../../src/assets/different-types-french-fries-January162020-min.jpg")
            }
         ]