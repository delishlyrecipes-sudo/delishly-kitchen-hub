export interface Recipe {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  featuredImage: string;
  ingredients: { item: string; amount: string }[];
  instructions: string[];
  article: string;
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
    article: `Sun-dried tomatoes, garlic, and spinach come together in a creamy parmesan sauce that transforms ordinary chicken breasts into something truly extraordinary. This Creamy Tuscan Garlic Chicken is one of those recipes that looks and tastes like it belongs in a fine Italian restaurant, yet it comes together in just 35 minutes on a single skillet.

## Why This Recipe Works

The magic of this dish lies in layering flavors. Searing the chicken first creates a golden crust and locks in moisture. Using the same pan to build the sauce means every bit of caramelized goodness from the chicken gets folded into the cream. The sun-dried tomatoes add a concentrated sweetness and slight tang, while the fresh spinach wilts down into silky ribbons that weave through the sauce beautifully.

## How to Make Creamy Tuscan Garlic Chicken

Start by seasoning your chicken breasts generously with salt, pepper, and Italian seasoning. Heat olive oil in a large skillet over medium-high heat and sear the chicken for five to six minutes per side until golden brown. Remove the chicken and set it aside.

In the same skillet, sauté the minced garlic for about thirty seconds until fragrant. Be careful not to burn it. Add the sun-dried tomatoes and cook for two minutes to release their oils. Pour in the heavy cream, then stir in the grated parmesan cheese until it melts into a smooth, velvety sauce.

Toss in the fresh spinach and let it wilt down for about two minutes. Return the chicken to the skillet, spooning the sauce generously over each breast. Let everything simmer together for five minutes so the chicken absorbs those incredible flavors.

## Serving Suggestions

This dish pairs perfectly with a bed of al dente linguine, creamy mashed potatoes, or simply a chunk of warm crusty bread to soak up every last drop of that sauce. For a lighter option, serve it alongside roasted asparagus or a simple arugula salad dressed with lemon and olive oil.

## Tips for the Best Results

Use thin chicken breasts or pound thicker ones to an even thickness so they cook evenly. Do not rush the searing step as that golden crust is essential for both flavor and texture. If your sauce is too thick, add a splash of chicken broth to loosen it. Leftovers reheat beautifully the next day and the flavors deepen overnight.`,
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
    article: `These impossibly fluffy Japanese soufflé pancakes are a true showstopper at the breakfast table. Unlike traditional pancakes, these jiggly clouds of deliciousness get their incredible height and airy texture from a carefully whipped meringue folded into the batter.

## The Secret to Perfect Soufflé Pancakes

The key is all in the meringue. You need stiff, glossy peaks that hold their shape when you lift the whisk. Cream of tartar stabilizes the egg whites and helps them maintain volume as you fold them into the yolk mixture. Be patient and gentle during folding — overmixing will deflate the batter and you will end up with flat pancakes.

## Step-by-Step Guide

Start by whisking egg yolks with milk and vanilla until smooth. Sift in cake flour and baking powder, then fold gently until just combined. In a separate, spotlessly clean bowl, beat egg whites with cream of tartar until foamy. Gradually add sugar while continuing to beat until you reach stiff peaks.

Fold one third of the meringue into the yolk mixture to lighten it, then gently fold in the remaining meringue in two additions. Use ring molds on a non-stick pan set to the lowest heat. Fill each mold halfway, cover with a lid, and let them cook low and slow for six to seven minutes. Flip carefully and cook another five to six minutes.

## Topping Ideas

Fresh berries with maple syrup is the classic choice. You can also try whipped cream with matcha powder, a drizzle of honey with sliced bananas, or a dusting of powdered sugar with a squeeze of lemon. The pancakes are mildly sweet on their own, so bold toppings work beautifully.

## Common Mistakes to Avoid

Never use a bowl with any trace of grease when whipping egg whites. Make sure your pan is on the absolute lowest heat setting. Resist the urge to peek by lifting the lid too often. And most importantly, serve immediately because these pancakes deflate within minutes of leaving the pan.`,
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
    article: `This Mediterranean Quinoa Power Bowl is everything you want in a healthy meal: vibrant, satisfying, and bursting with flavor. Packed with protein-rich quinoa, crispy roasted chickpeas, and a creamy lemon-tahini dressing, it is proof that eating well does not mean sacrificing taste.

## Why Quinoa Bowls Are Perfect for Meal Prep

Quinoa bowls are endlessly customizable and hold up well in the fridge for three to four days. The grains stay fluffy, the roasted chickpeas retain a pleasant texture, and the dressing can be stored separately to keep everything fresh. Make a big batch on Sunday and enjoy effortless lunches all week.

## Building the Perfect Bowl

Cook your quinoa according to package directions and let it cool slightly so it does not wilt the fresh vegetables. While the quinoa cooks, toss drained chickpeas with olive oil and cumin, then roast them at 400 degrees for twenty minutes until golden and crispy.

For the dressing, whisk together tahini, fresh lemon juice, a small clove of minced garlic, and enough water to reach a pourable consistency. Season with salt and a pinch of cumin. This dressing is the soul of the bowl so taste it and adjust until it is perfectly balanced between nutty, tangy, and savory.

Assemble your bowls with a generous base of quinoa, then arrange halved cherry tomatoes, diced cucumber, kalamata olives, crumbled feta, and those crispy chickpeas on top. Drizzle generously with dressing and finish with fresh herbs and a squeeze of lemon.

## Variations to Try

Make it fully vegan by swapping feta for avocado slices. Add roasted red peppers or artichoke hearts for extra Mediterranean flair. For more protein, top with grilled halloumi or a soft-boiled egg. The base formula stays the same but the possibilities are endless.`,
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
    article: `Few desserts command as much reverence as a perfectly made Classic Tiramisu. This iconic Italian creation layers espresso-soaked ladyfingers with a cloud-like mascarpone cream, all finished with a generous dusting of cocoa powder. It is elegant, indulgent, and surprisingly easy to make at home.

## The History Behind Tiramisu

Tiramisu translates to "pick me up" or "lift me up" in Italian, a fitting name for a dessert powered by espresso and rich cream. While its exact origins are debated between the Veneto and Friuli Venezia Giulia regions, one thing is certain: it has become one of the most beloved desserts in the world since its rise to fame in the 1970s and 1980s.

## Mastering the Mascarpone Cream

The cream is the heart of any great tiramisu. Beat egg yolks with sugar until they become thick, pale, and ribbon-like, which takes about four minutes of vigorous whisking. Add the mascarpone and beat until silky smooth. In a separate bowl, whip heavy cream to soft peaks, then fold it into the mascarpone mixture. This creates a cream that is rich yet light, holding its shape between layers without feeling heavy.

## The Espresso Dip

Brew strong espresso and let it cool completely. You can add a tablespoon or two of Kahlúa or Marsala wine for depth, but it is entirely optional. The critical technique here is to dip each ladyfinger quickly — a brief two-second plunge on each side. If you soak them too long they will turn to mush and your tiramisu will collapse into a soggy mess.

## Assembly and Patience

Layer the dipped ladyfingers in a single layer in your dish, then spread half the mascarpone cream evenly over the top. Repeat with a second layer of dipped ladyfingers and the remaining cream. Cover tightly and refrigerate for at least six hours, though overnight is ideal. The resting time allows the flavors to meld and the ladyfingers to soften into a perfect cake-like texture. Dust generously with cocoa powder just before serving.

## Pro Tips

Use high-quality mascarpone — it makes a noticeable difference. Make sure your espresso is strong but not bitter. And always assemble in a glass dish so you can admire those beautiful layers.`,
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
    article: `If you have ever eaten Pad Krapow at a Thai street stall, you know the magic of Spicy Thai Basil Stir-Fry. It is loud, aromatic, and unapologetically bold — a dish where fiery chilies, pungent garlic, and fragrant Thai basil collide in a sizzling wok to create something unforgettable.

## What Makes Thai Basil Stir-Fry Special

This is not a subtle dish. The flavor profile is a perfect storm of salty soy sauce, umami-rich oyster sauce, funky fish sauce, and the sharp heat of fresh Thai chilies. Thai basil, with its anise-like flavor, adds an aromatic layer that regular basil simply cannot replicate. When it hits the hot wok and wilts instantly, it releases a fragrance that fills the entire kitchen.

## The Wok Technique

The secret to great stir-fry is high heat and speed. Get your wok screaming hot until the oil is shimmering and just beginning to smoke. Add garlic and sliced chilies first for a quick thirty-second sear. Then add the ground pork, breaking it into small crumbles with your spatula. Cook it until browned and slightly crispy on the edges, about three to four minutes.

Add your sauce mixture — soy sauce, oyster sauce, fish sauce, and a pinch of sugar to balance the salt. Toss everything together, then throw in two generous cups of Thai basil leaves. Stir just until the basil wilts, which takes only seconds. Over-cooking the basil kills its flavor.

## Serving It Right

The traditional way to serve Pad Krapow is over steamed jasmine rice with a crispy fried egg on top. The runny yolk acts as an extra sauce that ties everything together. Make sure your rice is fluffy and freshly steamed so it absorbs the juices from the stir-fry.

## Adjusting the Heat

Thai chilies are seriously hot. For a milder version, remove the seeds or use just one or two chilies instead of five. You can also substitute with serrano peppers for less intensity. For maximum heat, leave the seeds in and add a teaspoon of chili flake on top.`,
  },
];

export const getFeaturedRecipes = () => recipes.slice(0, 3);
export const getTrendingRecipes = () => recipes.slice(2, 5);
export const getRecipeBySlug = (slug: string) => recipes.find(r => r.slug === slug);
