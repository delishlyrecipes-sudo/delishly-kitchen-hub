export interface Recipe {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  featuredImage: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
  prepTime: number;
  cookTime: number;
  totalTime: number;
  calories: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
  tags: string[];
  author: string;
  rating: number;
  ratingCount: number;
  createdAt: string;
}

export const categories = [
  { name: "Breakfast", emoji: "🥞", count: 24 },
  { name: "Lunch", emoji: "🥗", count: 38 },
  { name: "Dinner", emoji: "🍝", count: 52 },
  { name: "Desserts", emoji: "🍰", count: 31 },
  { name: "Snacks", emoji: "🥨", count: 19 },
  { name: "Drinks", emoji: "🥤", count: 15 },
  { name: "Vegan", emoji: "🌱", count: 27 },
  { name: "30-Min Meals", emoji: "⏱️", count: 43 },
];

export const recipes: Recipe[] = [
  {
    id: "1",
    title: "Creamy Tuscan Garlic Chicken",
    slug: "creamy-tuscan-garlic-chicken",
    shortDescription: "Sun-dried tomatoes, garlic, and spinach in a creamy parmesan sauce over tender chicken breasts.",
    featuredImage: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800&q=80",
    ingredients: [
      { item: "Chicken breasts", amount: "4 pieces" },
      { item: "Sun-dried tomatoes", amount: "1/2 cup" },
      { item: "Fresh spinach", amount: "2 cups" },
      { item: "Heavy cream", amount: "1 cup" },
      { item: "Parmesan cheese", amount: "1/2 cup" },
      { item: "Garlic cloves", amount: "4 minced" },
      { item: "Olive oil", amount: "2 tbsp" },
      { item: "Italian seasoning", amount: "1 tsp" },
    ],
    instructions: [
      "Season chicken breasts with salt, pepper, and Italian seasoning.",
      "Heat olive oil in a large skillet over medium-high heat. Sear chicken 5-6 minutes per side until golden. Remove and set aside.",
      "In the same skillet, sauté minced garlic for 30 seconds until fragrant.",
      "Add sun-dried tomatoes and cook for 2 minutes.",
      "Pour in heavy cream and stir in parmesan cheese until melted and smooth.",
      "Add fresh spinach and cook until wilted, about 2 minutes.",
      "Return chicken to the skillet, spoon sauce over the top, and simmer for 5 minutes.",
      "Serve immediately over pasta or with crusty bread."
    ],
    prepTime: 10,
    cookTime: 25,
    totalTime: 35,
    calories: 420,
    servings: 4,
    difficulty: "Easy",
    category: "Dinner",
    tags: ["chicken", "italian", "creamy", "quick"],
    author: "Chef Maria",
    rating: 4.8,
    ratingCount: 234,
    createdAt: "2024-12-01",
  },
  {
    id: "2",
    title: "Fluffy Japanese Soufflé Pancakes",
    slug: "fluffy-japanese-souffle-pancakes",
    shortDescription: "Impossibly fluffy and jiggly pancakes that melt in your mouth, topped with fresh berries and maple syrup.",
    featuredImage: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
    ingredients: [
      { item: "Egg yolks", amount: "2" },
      { item: "Egg whites", amount: "3" },
      { item: "Cake flour", amount: "1/4 cup" },
      { item: "Sugar", amount: "2 tbsp" },
      { item: "Milk", amount: "2 tbsp" },
      { item: "Vanilla extract", amount: "1 tsp" },
      { item: "Baking powder", amount: "1/2 tsp" },
      { item: "Cream of tartar", amount: "1/4 tsp" },
    ],
    instructions: [
      "Whisk egg yolks, milk, and vanilla together until smooth.",
      "Sift in cake flour and baking powder, fold gently until combined.",
      "In a separate bowl, beat egg whites with cream of tartar until foamy, then gradually add sugar and beat to stiff peaks.",
      "Fold 1/3 of the meringue into the yolk mixture, then gently fold in the rest.",
      "Heat a non-stick pan on the lowest heat. Place ring molds and fill halfway with batter.",
      "Cover and cook for 6-7 minutes until the bottom is golden.",
      "Carefully flip and cook another 5-6 minutes covered.",
      "Remove molds and serve immediately with berries and maple syrup."
    ],
    prepTime: 15,
    cookTime: 15,
    totalTime: 30,
    calories: 280,
    servings: 2,
    difficulty: "Medium",
    category: "Breakfast",
    tags: ["pancakes", "japanese", "breakfast", "fluffy"],
    author: "Chef Yuki",
    rating: 4.9,
    ratingCount: 187,
    createdAt: "2024-11-15",
  },
  {
    id: "3",
    title: "Mediterranean Quinoa Power Bowl",
    slug: "mediterranean-quinoa-power-bowl",
    shortDescription: "A vibrant and nutritious bowl packed with quinoa, roasted veggies, feta, and a lemon-tahini dressing.",
    featuredImage: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    ingredients: [
      { item: "Quinoa", amount: "1 cup" },
      { item: "Cherry tomatoes", amount: "1 cup" },
      { item: "Cucumber", amount: "1 diced" },
      { item: "Kalamata olives", amount: "1/3 cup" },
      { item: "Feta cheese", amount: "1/2 cup" },
      { item: "Chickpeas", amount: "1 can" },
      { item: "Tahini", amount: "3 tbsp" },
      { item: "Lemon juice", amount: "2 tbsp" },
    ],
    instructions: [
      "Cook quinoa according to package directions. Let cool slightly.",
      "Roast chickpeas with olive oil and cumin at 400°F for 20 minutes until crispy.",
      "Whisk together tahini, lemon juice, garlic, and water for the dressing.",
      "Halve cherry tomatoes and dice cucumber.",
      "Assemble bowls: quinoa base, topped with veggies, chickpeas, olives, and feta.",
      "Drizzle generously with lemon-tahini dressing.",
      "Garnish with fresh herbs and a squeeze of lemon."
    ],
    prepTime: 15,
    cookTime: 20,
    totalTime: 35,
    calories: 380,
    servings: 3,
    difficulty: "Easy",
    category: "Lunch",
    tags: ["healthy", "vegan-option", "mediterranean", "bowl"],
    author: "Chef Maria",
    rating: 4.7,
    ratingCount: 156,
    createdAt: "2024-11-28",
  },
  {
    id: "4",
    title: "Classic Tiramisu",
    slug: "classic-tiramisu",
    shortDescription: "Layers of espresso-soaked ladyfingers and mascarpone cream dusted with rich cocoa powder.",
    featuredImage: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800&q=80",
    ingredients: [
      { item: "Mascarpone cheese", amount: "500g" },
      { item: "Ladyfinger biscuits", amount: "24 pieces" },
      { item: "Espresso", amount: "1.5 cups" },
      { item: "Egg yolks", amount: "4" },
      { item: "Sugar", amount: "1/2 cup" },
      { item: "Heavy cream", amount: "1 cup" },
      { item: "Cocoa powder", amount: "for dusting" },
      { item: "Kahlúa (optional)", amount: "2 tbsp" },
    ],
    instructions: [
      "Brew espresso and let it cool. Mix in Kahlúa if using.",
      "Beat egg yolks with sugar until thick and pale, about 4 minutes.",
      "Add mascarpone and beat until smooth and creamy.",
      "In a separate bowl, whip heavy cream to soft peaks and fold into mascarpone mixture.",
      "Quickly dip each ladyfinger into espresso (don't soak!) and arrange in a single layer in a dish.",
      "Spread half the mascarpone cream over the ladyfingers.",
      "Repeat with another layer of dipped ladyfingers and remaining cream.",
      "Cover and refrigerate for at least 6 hours, preferably overnight. Dust with cocoa before serving."
    ],
    prepTime: 30,
    cookTime: 0,
    totalTime: 390,
    calories: 350,
    servings: 8,
    difficulty: "Medium",
    category: "Desserts",
    tags: ["italian", "dessert", "no-bake", "classic"],
    author: "Chef Luca",
    rating: 4.9,
    ratingCount: 312,
    createdAt: "2024-10-20",
  },
  {
    id: "5",
    title: "Spicy Thai Basil Stir-Fry",
    slug: "spicy-thai-basil-stir-fry",
    shortDescription: "A fiery and aromatic stir-fry with ground pork, Thai basil, and chilies served over jasmine rice.",
    featuredImage: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800&q=80",
    ingredients: [
      { item: "Ground pork", amount: "400g" },
      { item: "Thai basil leaves", amount: "2 cups" },
      { item: "Thai chilies", amount: "3-5 sliced" },
      { item: "Garlic cloves", amount: "5 minced" },
      { item: "Soy sauce", amount: "2 tbsp" },
      { item: "Oyster sauce", amount: "1 tbsp" },
      { item: "Fish sauce", amount: "1 tbsp" },
      { item: "Jasmine rice", amount: "for serving" },
    ],
    instructions: [
      "Cook jasmine rice according to package directions.",
      "Heat oil in a wok over very high heat until smoking.",
      "Add garlic and chilies, stir-fry for 30 seconds.",
      "Add ground pork, breaking it up, and cook until browned (3-4 minutes).",
      "Add soy sauce, oyster sauce, fish sauce, and a pinch of sugar.",
      "Toss in Thai basil leaves and stir until just wilted.",
      "Serve immediately over steamed jasmine rice with a fried egg on top."
    ],
    prepTime: 10,
    cookTime: 10,
    totalTime: 20,
    calories: 450,
    servings: 2,
    difficulty: "Easy",
    category: "Dinner",
    tags: ["thai", "spicy", "quick", "stir-fry"],
    author: "Chef Yuki",
    rating: 4.6,
    ratingCount: 98,
    createdAt: "2024-12-05",
  },
];

export const getFeaturedRecipes = () => recipes.slice(0, 3);
export const getTrendingRecipes = () => recipes.slice(2, 5);
export const getRecipeBySlug = (slug: string) => recipes.find(r => r.slug === slug);
