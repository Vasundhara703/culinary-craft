export const kaggleRecipes = [
  {
    id: "kaggle-carbonara",
    title: "Pasta Carbonara",
    description: "Creamy Roman pasta made with crispy pork, eggs, black pepper, and sharp Pecorino cheese. An authentic Italian favorite that has no heavy cream.",
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/3AAdKl1UYZs",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    calories: 550,
    tags: ["Italian", "Pasta", "Dinner", "Kaggle", "Quick Prep"],
    ingredients: [
      { name: "Spaghetti", quantity: 400, unit: "g", alternative: "Penne or Gluten-Free pasta" },
      { name: "Pancetta or Guanciale", quantity: 150, unit: "g", alternative: "Smoked Turkey Bacon or Mushrooms" },
      { name: "Pecorino Romano Cheese", quantity: 0.75, unit: "cup", alternative: "Parmesan Cheese or Nutritional Yeast" },
      { name: "Whole Eggs", quantity: 2, unit: "pcs", alternative: "Silken tofu (vegan swap)" },
      { name: "Egg Yolks", quantity: 2, unit: "pcs", alternative: "Cornstarch mixture" },
      { name: "Black Pepper (Freshly Cracked)", quantity: 1.5, unit: "tsp", alternative: "White pepper" }
    ],
    instructions: [
      { step: 1, text: "Bring a large pot of salted water to a boil. Cook spaghetti according to package instructions.", text_hi: "नमकीन पानी का एक बड़ा बर्तन उबालें। पैकेट के निर्देशानुसार नूडल्स पकाएं।", duration: 8 },
      { step: 2, text: "Sauté the chopped pancetta or guanciale in a dry pan until crispy. Set aside, keeping the fat in the pan.", text_hi: "पैन में कटे हुए बेकन को कुरकुरा होने तक भूनें। फैट को पैन में रखते हुए अलग रख लें।", duration: 5 },
      { step: 3, text: "Whisk the whole eggs, yolks, and Pecorino Romano cheese in a bowl. Stir in lots of cracked black pepper.", text_hi: "एक कटोरे में अंडे, जर्दी और पनीर को एक साथ फेंटें। ढेर सारी पिसी हुई काली मिर्च मिलाएं।", duration: 2 },
      { step: 4, text: "Drain pasta, reserving 1 cup of pasta cooking water. Toss the hot pasta directly in the pan with pancetta fat.", text_hi: "पास्ता का पानी छान लें, 1 कप बचाएं। गरम पास्ता को पैन में बेकन फैट के साथ मिलाएं।", duration: 1 },
      { step: 5, text: "Remove pan from heat. Quickly pour in the egg-cheese mixture and toss vigorously. Add splashes of cooking water to create a creamy sauce. Serve immediately topped with crispy pancetta.", text_hi: "पैन को आंच से हटाएं। अंडे-पनीर का मिश्रण डालें और तेजी से हिलाएं। मलाईदार सॉस बनाने के लिए पास्ता का थोड़ा पानी डालें। परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-tacos-pastor",
    title: "Tacos al Pastor",
    description: "Classic Mexican street food tacos featuring pork shoulder marinated in achiote paste, slow grilled with sweet pineapple on corn tortillas.",
    image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5F_W5N1jGv8",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 6,
    calories: 480,
    tags: ["Mexican", "Street Food", "Pork", "Kaggle", "Grilling"],
    ingredients: [
      { name: "Pork Shoulder (Thin Slices)", quantity: 1, unit: "kg", alternative: "Chicken Thighs or Firm Tofu slices" },
      { name: "Achiote Paste", quantity: 3, unit: "tbsp", alternative: "Guajillo Chili flakes + Paprika" },
      { name: "Canned Chipotle Peppers", quantity: 2, unit: "pcs", alternative: "Chili powder" },
      { name: "White Vinegar", quantity: 0.25, unit: "cup", alternative: "Apple cider vinegar" },
      { name: "Fresh Pineapple (Sliced)", quantity: 0.5, unit: "pc", alternative: "Canned pineapple chunks" },
      { name: "Corn Tortillas", quantity: 12, unit: "pcs", alternative: "Flour tortillas" },
      { name: "Cilantro & Onions (Chopped)", quantity: 0.5, unit: "cup", alternative: "Chives" }
    ],
    instructions: [
      { step: 1, text: "Blend achiote paste, chipotle peppers, vinegar, garlic, oregano, and cumin. Marinate pork slices for at least 2 hours.", text_hi: "अचियोते पेस्ट, मिर्च, सिरका, लहसुन, ओरेगानो और जीरा को पीस लें। सूअर के मांस को 2 घंटे मैरीनेट करें।", duration: 10 },
      { step: 2, text: "Grill the marinated pork slices on medium-high heat until slightly charred. Grill pineapple slices alongside.", text_hi: "मैरीनेट किए गए मांस के टुकड़ों को तेज आंच पर ग्रिल करें। साथ में अनानास भी ग्रिल करें।", duration: 15 },
      { step: 3, text: "Chop the cooked pork and grilled pineapple into bite-sized pieces.", text_hi: "पके हुए मांस और ग्रिल किए गए अनानास को छोटे टुकड़ों में काट लें।", duration: 5 },
      { step: 4, text: "Warm the corn tortillas on a skillet.", text_hi: "मक्के की रोटियों को तवे पर गर्म करें।", duration: 2 },
      { step: 5, text: "Assemble tacos with pork, pineapple, chopped cilantro, onions, and fresh salsa. Serve hot.", text_hi: "रोटी में मांस, अनानास, कटी धनिया, प्याज और साल्सा रखकर परोसें।", duration: 3 }
    ]
  },
  {
    id: "kaggle-sushi-roll",
    title: "Salmon Sushi Roll",
    description: "Standard rolled sushi featuring seasoned rice, raw sushi-grade salmon, creamy avocado, and fresh cucumber wrapped in nori.",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/joweUxPhsOY",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 10,
    servings: 2,
    calories: 360,
    tags: ["Japanese", "Sushi", "Healthy", "Seafood", "Kaggle"],
    ingredients: [
      { name: "Sushi Rice (Cooked)", quantity: 2, unit: "cups", alternative: "Brown rice or Cauliflower rice" },
      { name: "Nori Seaweed Sheets", quantity: 3, unit: "pcs", alternative: "Soy wraps" },
      { name: "Sushi-grade Salmon (Sliced)", quantity: 200, unit: "g", alternative: "Smoked Salmon or Cucumber strips" },
      { name: "Avocado (Sliced)", quantity: 0.5, unit: "pc", alternative: "Cream cheese" },
      { name: "Rice Vinegar", quantity: 2, unit: "tbsp", alternative: "Apple cider vinegar" }
    ],
    instructions: [
      { step: 1, text: "Season cooked sushi rice with rice vinegar, sugar, and salt. Cool to room temperature.", text_hi: "पके हुए चावल में सिरका, चीनी और नमक मिलाएं। सामान्य तापमान पर ठंडा करें।", duration: 10 },
      { step: 2, text: "Place a sheet of nori on a bamboo rolling mat.", text_hi: "नोरी शीट को बांस की चटाई (मैट) पर रखें।", duration: 1 },
      { step: 3, text: "Spread seasoned rice evenly over nori, leaving a 1-inch border at the top.", text_hi: "नोरी पर चावल फैलाएं, ऊपर से 1 इंच किनारा खाली छोड़ दें।", duration: 3 },
      { step: 4, text: "Lay salmon strips and avocado slices horizontally across the center of the rice.", text_hi: "चावल के केंद्र में क्षैतिज रूप से मछली और एवोकाडो स्लाइस रखें।", duration: 2 },
      { step: 5, text: "Roll the bamboo mat firmly, seal the edge with water, and slice into 8 pieces. Serve with soy sauce and wasabi.", text_hi: "मैट को कसकर रोल करें, किनारे को पानी से सील करें, और 8 टुकड़ों में काट लें। चटनी के साथ परोसें।", duration: 4 }
    ]
  },
  {
    id: "kaggle-dum-biryani",
    title: "Chicken Dum Biryani",
    description: "An aromatic and classic Indian mixed rice dish made with layered basmati rice, marinated spiced chicken, fried onions, and whole spices.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/95BCU1n268Y",
    difficulty: "hard",
    prepTime: 25,
    cookTime: 35,
    servings: 8,
    calories: 680,
    tags: ["Indian", "Chicken", "Rice", "Dinner", "Kaggle"],
    ingredients: [
      { name: "Basmati Rice", quantity: 3, unit: "cups", alternative: "Brown Basmati rice" },
      { name: "Chicken Pieces", quantity: 800, unit: "g", alternative: "Paneer cubes or Mixed Vegetables" },
      { name: "Yogurt (Dahi)", quantity: 1, unit: "cup", alternative: "Coconut yogurt (dairy-free)" },
      { name: "Fried Onions (Birista)", quantity: 1, unit: "cup", alternative: "Sautéed shallots" },
      { name: "Ghee", quantity: 3, unit: "tbsp", alternative: "Coconut oil" },
      { name: "Ginger-Garlic Paste", quantity: 2, unit: "tbsp", alternative: "Minced ginger & garlic" },
      { name: "Garam Masala Powder", quantity: 2, unit: "tsp", alternative: "Allspice powder" },
      { name: "Saffron strands (steeped in milk)", quantity: 1, unit: "pinch", alternative: "Turmeric" }
    ],
    instructions: [
      { step: 1, text: "Marinate chicken with yogurt, ginger-garlic paste, garam masala, chili powder, and salt for 1 hour.", text_hi: "चिकन को दही, अदरक-लहसुन, मसाला और नमक के साथ 1 घंटे मैरीनेट करें।", duration: 60 },
      { step: 2, text: "Parboil basmati rice with whole spices (cinnamon, cardamom, cloves) until 70% cooked. Drain.", text_hi: "चावल को खड़े मसालों के साथ 70% पकने तक उबालें और छान लें।", duration: 15 },
      { step: 3, text: "In a heavy pot, layer the marinated chicken at the bottom. Cover with fried onions, mint, and cilantro.", text_hi: "भारी बर्तन में सबसे नीचे मैरीनेट किया हुआ चिकन फैलाएं। ऊपर तली प्याज और पुदीना डालें।", duration: 5 },
      { step: 4, text: "Add the parboiled rice on top. Drizzle ghee, saffron milk, and fried onions.", text_hi: "ऊपर उबले चावल डालें। घी, केसर का दूध और तली हुई प्याज छिड़कें।", duration: 5 },
      { step: 5, text: "Seal the pot with dough or foil, and cook on low heat (Dum) for 35 minutes to steam through.", text_hi: "बर्तन को सील करें और धीमी आंच (दम) पर 35 मिनट तक पकने दें।", duration: 35 }
    ]
  },
  {
    id: "kaggle-pad-thai",
    title: "Shrimp Pad Thai",
    description: "Famous Thai stir-fried noodles featuring a sweet, savory, and sour tamarind glaze, topped with peanuts and fresh lime.",
    image: "https://images.unsplash.com/photo-1559314809-0d155014e29e?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/U8JZS203D0Y",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 10,
    servings: 3,
    calories: 450,
    tags: ["Thai", "Noodles", "Seafood", "Kaggle", "Dinner"],
    ingredients: [
      { name: "Flat Rice Noodles", quantity: 250, unit: "g", alternative: "Shirataki noodles or Ramen noodles" },
      { name: "Shrimp (Peeled & Deveined)", quantity: 200, unit: "g", alternative: "Tofu blocks or Chicken strips" },
      { name: "Pad Thai Sauce (Tamarind + Fish Sauce)", quantity: 0.25, unit: "cup", alternative: "Soy sauce + lime juice + brown sugar" },
      { name: "Tofu (Diced)", quantity: 100, unit: "g", alternative: "Tempeh" },
      { name: "Eggs", quantity: 2, unit: "pcs", alternative: "Scrambled tofu" },
      { name: "Peanuts (Crushed)", quantity: 0.25, unit: "cup", alternative: "Toasted sesame seeds" },
      { name: "Bean Sprouts", quantity: 1, unit: "cup", alternative: "Shredded cabbage" }
    ],
    instructions: [
      { step: 1, text: "Soak rice noodles in warm water for 30 minutes until soft, then drain.", text_hi: "चावल के नूडल्स को गर्म पानी में 30 मिनट भिगोएँ और छान लें।", duration: 30 },
      { step: 2, text: "Heat oil in a wok. Cook shrimp until pink and set aside. Stir-fry tofu in the same oil.", text_hi: "कढ़ाई में तेल गर्म करें। झींगे को पकाकर निकाल लें। उसी तेल में टोफू भूनें।", duration: 4 },
      { step: 3, text: "Push tofu to the side. Crack eggs into wok and scramble until cooked.", text_hi: "टोफू को किनारे करें। कढ़ाई में अंडे डालें और स्क्रैम्बल करें।", duration: 2 },
      { step: 4, text: "Add noodles, shrimp, and tamarind sauce. Toss everything together on high heat.", text_hi: "नूडल्स, झींगा और सॉस डालें। तेज आंच पर सब कुछ एक साथ मिलाएं।", duration: 3 },
      { step: 5, text: "Stir in bean sprouts and garlic chives. Serve topped with crushed peanuts and lime wedges.", text_hi: "सलाद और प्याज के पत्ते मिलाएं। मूंगफली के दानों और नींबू के साथ परोसें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-margherita-pizza",
    title: "Margherita Pizza",
    description: "The classic Neapolitan pizza topped with fresh tomato sauce, creamy mozzarella slices, and fragrant fresh basil.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/v3HwL14C93c",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 10,
    servings: 4,
    calories: 620,
    tags: ["Italian", "Pizza", "Vegetarian", "Dinner", "Kaggle"],
    ingredients: [
      { name: "Pizza Dough", quantity: 1, unit: "ball", alternative: "Flatbread or Gluten-Free dough" },
      { name: "San Marzano Tomato Sauce", quantity: 0.5, unit: "cup", alternative: "Standard tomato purée" },
      { name: "Fresh Mozzarella Cheese", quantity: 150, unit: "g", alternative: "Vegan cheese slices" },
      { name: "Fresh Basil Leaves", quantity: 10, unit: "pcs", alternative: "Oregano" },
      { name: "Extra Virgin Olive Oil", quantity: 1, unit: "tbsp", alternative: "Avocado oil" }
    ],
    instructions: [
      { step: 1, text: "Preheat oven with pizza stone to 500°F (260°C) for 30 minutes.", text_hi: "ओवन को 500°F (260°C) पर 30 मिनट के लिए पहले से गर्म करें।", duration: 30 },
      { step: 2, text: "Stretch pizza dough into a 12-inch circle on parchment paper.", text_hi: "आटे को फैलाकर गोल रोटी जैसा आकार दें।", duration: 5 },
      { step: 3, text: "Spread tomato sauce evenly, leaving a border for the crust.", text_hi: "टमाटर का सॉस फैलाएं, किनारा खाली छोड़ दें।", duration: 2 },
      { step: 4, text: "Top with torn fresh mozzarella slices and a drizzle of olive oil.", text_hi: "मोज़ारेला चीज़ और थोड़ा सा जैतून का तेल डालें।", duration: 2 },
      { step: 5, text: "Bake on pizza stone for 8-10 minutes until crust is charred. Top with fresh basil and slice.", text_hi: "8-10 मिनट बेक करें जब तक कि क्रस्ट सिक न जाए। ताजी तुलसी डालकर काटें।", duration: 10 }
    ]
  },
  {
    id: "kaggle-pancakes",
    title: "Buttermilk Pancakes",
    description: "Fluffy, golden diner-style breakfast pancakes served with butter and warm maple syrup.",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/FLd00hx73Gs",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    calories: 320,
    tags: ["American", "Breakfast", "Kids Friendly", "Kaggle", "Easy"],
    ingredients: [
      { name: "All-Purpose Flour", quantity: 2, unit: "cups", alternative: "Gluten-Free flour mix" },
      { name: "Buttermilk", quantity: 1.5, unit: "cups", alternative: "Milk + 1 tbsp vinegar" },
      { name: "Eggs", quantity: 2, unit: "pcs", alternative: "Apple sauce (egg-free)" },
      { name: "Unsalted Butter (Melted)", quantity: 3, unit: "tbsp", alternative: "Coconut oil" },
      { name: "Sugar", quantity: 2, unit: "tbsp", alternative: "Honey" }
    ],
    instructions: [
      { step: 1, text: "Whisk flour, sugar, baking powder, and salt in a bowl.", text_hi: "एक कटोरी में आटा, चीनी, बेकिंग पाउडर और नमक मिलाएं।", duration: 2 },
      { step: 2, text: "Whisk buttermilk, eggs, and melted butter in another bowl.", text_hi: "दूसरे कटोरे में छाछ, अंडे और पिघला हुआ मक्खन मिलाएं।", duration: 2 },
      { step: 3, text: "Pour wet ingredients into dry and mix gently (lumps are okay).", text_hi: "गीली सामग्री को सूखी में डालें और धीरे से मिलाएँ (गाँठें ठीक हैं)।", duration: 1 },
      { step: 4, text: "Pour batter onto a hot buttered griddle. Cook until bubbles form, then flip.", text_hi: "तवे पर बैटर डालें। बुलबुले बनने तक पकाएं, फिर पलट दें।", duration: 3 },
      { step: 5, text: "Cook other side until golden brown. Serve hot with butter and maple syrup.", text_hi: "दूसरी तरफकें। मक्खन और सिरप के साथ परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-beef-burger",
    title: "Classic Beef Burger",
    description: "Juicy griddled beef patties topped with melted cheddar cheese, lettuce, tomatoes, and burger sauce in toasted brioche buns.",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/H0m-yNkhmF8",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    calories: 650,
    tags: ["American", "Lunch", "Grilling", "Comfort Food", "Kaggle"],
    ingredients: [
      { name: "Ground Beef (80/20 Lean)", quantity: 600, unit: "g", alternative: "Beyond Meat / Veggie patty" },
      { name: "Brioche Burger Buns", quantity: 4, unit: "pcs", alternative: "Gluten-free buns" },
      { name: "Cheddar Cheese Slices", quantity: 4, unit: "pcs", alternative: "Vegan cheese slices" },
      { name: "Lettuce Leaves & Tomato Slices", quantity: 1, unit: "set", alternative: "Pickled onions" },
      { name: "Butter", quantity: 1, unit: "tbsp", alternative: "Margarine" }
    ],
    instructions: [
      { step: 1, text: "Form ground beef into 4 round patties. Season both sides with salt and pepper.", text_hi: "मांस को 4 टिक्की का आकार दें। दोनों तरफ नमक-मिर्च छिड़कें।", duration: 5 },
      { step: 2, text: "Toast the split buns in butter in a hot skillet until golden. Set aside.", text_hi: "कढ़ाई में मक्खन डालकर बन को सुनहरा होने तक सेक लें।", duration: 2 },
      { step: 3, text: "Cook patties in a very hot skillet or grill for 3-4 minutes on the first side.", text_hi: "टिक्की को तेज गर्म तवे पर 3-4 मिनट तक सेकें।", duration: 4 },
      { step: 4, text: "Flip, place cheese on top of each patty, and cook for another 3 minutes until cheese is melted.", text_hi: "पलटें, ऊपर चीज़ स्लाइस रखें और पिघलने तक 3 मिनट पकाएं।", duration: 3 },
      { step: 5, text: "Assemble burgers with toasted buns, patties, lettuce, tomatoes, and spread sauce. Serve.", text_hi: "बन में टिक्की, पनीर, सलाद, टमाटर और सॉस रखकर परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-croissant",
    title: "French Croissants",
    description: "Authentic laminated pastry featuring thin flaky layers of butter dough baked to golden perfection.",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/2tB7E4oT9fI",
    difficulty: "hard",
    prepTime: 120,
    cookTime: 20,
    servings: 6,
    calories: 410,
    tags: ["French", "Baking", "Pastry", "Gourmet", "Kaggle"],
    ingredients: [
      { name: "Bread Flour", quantity: 500, unit: "g", alternative: "All-purpose flour" },
      { name: "European Butter (Cold block)", quantity: 250, unit: "g", alternative: "Vegan laminating butter" },
      { name: "Yeast (Active Dry)", quantity: 10, unit: "g", alternative: "Instant yeast" },
      { name: "Milk", quantity: 1.25, unit: "cups", alternative: "Water or Soy milk" },
      { name: "Egg Wash (Egg beaten with water)", quantity: 1, unit: "pc", alternative: "Milk wash" }
    ],
    instructions: [
      { step: 1, text: "Mix flour, yeast, sugar, salt, milk, and water to form a smooth dough. Chill overnight.", text_hi: "आटा, खमीर, दूध और पानी को मिलाकर गूंध लें। रात भर ठंडा करें।", duration: 120 },
      { step: 2, text: "Roll out butter block between parchment paper. Roll out dough and wrap around the butter block.", text_hi: "मक्खन को बेल लें। आटे को बेलकर मक्खन को उसके अंदर लपेट लें।", duration: 15 },
      { step: 3, text: "Perform three rounds of folding and rolling (laminating layers), chilling for 30 minutes between folds.", text_hi: "फोल्ड करने और बेलने (परतें बनाने) के तीन चक्र करें, बीच में 30 मिनट ठंडा करें।", duration: 90 },
      { step: 4, text: "Roll dough thin, cut into triangles, and roll tightly into croissant shapes. Rise for 2 hours.", text_hi: "आटे को पतला बेलें, तिकोना काटें और रोल करें। 2 घंटे फूलने दें।", duration: 120 },
      { step: 5, text: "Brush with egg wash. Bake at 390°F (200°C) for 18-20 minutes until flaky and deep golden brown.", text_hi: "अंडे का घोल लगाएं। 390°F (200°C) पर 18-20 मिनट सुनहरा होने तक बेक करें।", duration: 20 }
    ]
  },
  {
    id: "kaggle-tomyum",
    title: "Tom Yum Goong Soup",
    description: "Spicy, sour, and intensely aromatic Thai shrimp soup infused with fresh lemongrass, kaffir lime leaves, and galangal.",
    image: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/e1k1P2tK-4o",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 210,
    tags: ["Thai", "Soup", "Healthy", "Seafood", "Kaggle"],
    ingredients: [
      { name: "Shrimp (Head-on preferred)", quantity: 300, unit: "g", alternative: "Chicken or Mushrooms" },
      { name: "Lemongrass stalks (Smashed)", quantity: 2, unit: "pcs", alternative: "Lemon zest" },
      { name: "Galangal slices", quantity: 4, unit: "pcs", alternative: "Fresh ginger" },
      { name: "Kaffir Lime Leaves", quantity: 5, unit: "pcs", alternative: "Lime juice" },
      { name: "Thai Chili Paste (Nam Prik Pao)", quantity: 2, unit: "tbsp", alternative: "Chili flakes" },
      { name: "Fish Sauce & Lime Juice", quantity: 3, unit: "tbsp", alternative: "Soy sauce + apple cider vinegar" }
    ],
    instructions: [
      { step: 1, text: "Boil water or light chicken stock with lemongrass, galangal, and lime leaves to extract flavors.", text_hi: "पानी में लेमनग्रास, अदरक और नींबू की पत्तियां डालकर उबालें।", duration: 8 },
      { step: 2, text: "Add chili paste, fish sauce, and mushrooms. Simmer for 3 minutes.", text_hi: "चिली पेस्ट, फिश सॉस और मशरूम डालें। 3 मिनट उबालें।", duration: 3 },
      { step: 3, text: "Add shrimp and cook until pink and curled, about 2 minutes.", text_hi: "झींगे डालें और उनके गुलाबी और पकने तक 2 मिनट पकाएं।", duration: 2 },
      { step: 4, text: "Remove pot from heat. Stir in lime juice and fresh cilantro (adding lime to boiling soup causes bitterness).", text_hi: "आंच बंद करें। नींबू का रस और धनिया मिलाएं।", duration: 1 },
      { step: 5, text: "Serve hot, garnished with bird's eye chilies. Pair with steaming white rice.", text_hi: "गर्म-गर्म सूप चावल के साथ परोसें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-cookies",
    title: "Chocolate Chip Cookies",
    description: "Classic homemade chewy cookies packed with semi-sweet chocolate chips and baked to golden brown edges.",
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/fT443vN5KVE",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 12,
    calories: 220,
    tags: ["American", "Dessert", "Baking", "Easy", "Kaggle"],
    ingredients: [
      { name: "All-Purpose Flour", quantity: 2.25, unit: "cups", alternative: "Gluten-Free 1-to-1 baking flour" },
      { name: "Butter (Softened)", quantity: 1, unit: "cup", alternative: "Coconut oil or vegan butter" },
      { name: "Sugar & Brown Sugar", quantity: 1.5, unit: "cups", alternative: "Coconut sugar" },
      { name: "Chocolate Chips", quantity: 2, unit: "cups", alternative: "Dark chocolate chunks or raisins" },
      { name: "Eggs", quantity: 2, unit: "pcs", alternative: "Flax egg or banana mashed" }
    ],
    instructions: [
      { step: 1, text: "Preheat oven to 375°F (190°C). Beat butter, granulated sugar, and brown sugar until creamy.", text_hi: "ओवन को 375°F (190°C) पर गरम करें। मक्खन और दोनों प्रकार की चीनी को मलाईदार होने तक फेंटें।", duration: 5 },
      { step: 2, text: "Add eggs one at a time, then stir in vanilla extract.", text_hi: "एक-एक करके अंडे डालें, फिर वेनिला एक्सट्रेक्ट मिलाएं।", duration: 2 },
      { step: 3, text: "Gradually beat in flour, baking soda, and salt. Stir in chocolate chips.", text_hi: "धीरे-धीरे आटा, बेकिंग सोडा और नमक मिलाएं। फिर चॉकलेट चिप्स मिलाएं।", duration: 5 },
      { step: 4, text: "Drop rounded tablespoons of dough onto ungreased baking sheets.", text_hi: "चम्मच की मदद से बेकिंग शीट पर गोल आकार में आटा रखें।", duration: 5 },
      { step: 5, text: "Bake for 9 to 11 minutes or until golden brown. Cool on wire racks.", text_hi: "9 से 11 मिनट या सुनहरा होने तक बेक करें। तार की रैक पर ठंडा करें।", duration: 10 }
    ]
  },
  {
    id: "kaggle-guacamole",
    title: "Fresh Guacamole",
    description: "Classic creamy Mexican dip made with ripe mashed avocados, lime juice, red onion, and fresh cilantro.",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/qKqS_L_Z6p8",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 4,
    calories: 150,
    tags: ["Mexican", "Snack", "Vegan", "Kaggle", "15 Mins"],
    ingredients: [
      { name: "Avocados (Ripe)", quantity: 3, unit: "pcs", alternative: "Mashed green peas (low-fat option)" },
      { name: "Lime (Juiced)", quantity: 1, unit: "pc", alternative: "Lemon juice" },
      { name: "Red Onion (Finely chopped)", quantity: 0.25, unit: "cup", alternative: "White onion or scallions" },
      { name: "Fresh Cilantro (Chopped)", quantity: 3, unit: "tbsp", alternative: "Parsley" },
      { name: "Roma Tomato (Diced)", quantity: 1, unit: "pc", alternative: "Tomatillo" }
    ],
    instructions: [
      { step: 1, text: "Cut avocados in half, remove pits, and scoop the flesh into a medium bowl.", text_hi: "एवोकाडो को बीच से काटें, गुठली निकालें और पल्प को कटोरे में निकालें।", duration: 3 },
      { step: 2, text: "Mash the avocado flesh gently with a fork until chunky-smooth.", text_hi: "एवोकाडो पल्प को कांटे से हल्के से मैश करें जब तक कि वह चिकना न हो जाए।", duration: 2 },
      { step: 3, text: "Stir in the lime juice, chopped red onion, cilantro, and diced tomatoes.", text_hi: "नींबू का रस, कटा हुआ लाल प्याज, धनिया और कटे हुए टमाटर मिलाएं।", duration: 3 },
      { step: 4, text: "Season with salt and a pinch of cayenne pepper if heat is desired.", text_hi: "नमक और स्वादानुसार लाल मिर्च पाउडर मिलाएं।", duration: 1 },
      { step: 5, text: "Serve immediately with tortilla chips or cover with cling wrap directly on surface to prevent browning.", text_hi: "चिप्स के साथ परोसें या काला पड़ने से बचाने के लिए अच्छी तरह ढककर फ्रिज में रखें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-benedict",
    title: "Eggs Benedict",
    description: "Sophisticated breakfast dish featuring soft poached eggs and Canadian bacon over toasted English muffins, finished with rich hollandaise sauce.",
    image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/qS1eW3QNFfM",
    difficulty: "hard",
    prepTime: 15,
    cookTime: 10,
    servings: 2,
    calories: 490,
    tags: ["French", "Breakfast", "Gourmet", "Kaggle"],
    ingredients: [
      { name: "Eggs", quantity: 4, unit: "pcs", alternative: "Firm silken tofu slices" },
      { name: "Canadian Bacon", quantity: 4, unit: "slices", alternative: "Smoked salmon or spinach (Eggs Florentine)" },
      { name: "English Muffins", quantity: 2, unit: "pcs", alternative: "Sourdough bread slices" },
      { name: "Egg Yolks (For Sauce)", quantity: 3, unit: "pcs", alternative: "Silken tofu blended" },
      { name: "Butter (Melted)", quantity: 0.5, unit: "cup", alternative: "Margarine" },
      { name: "Lemon Juice", quantity: 1, unit: "tbsp", alternative: "White wine vinegar" }
    ],
    instructions: [
      { step: 1, text: "Make the hollandaise: whisk egg yolks and lemon juice in a double boiler. Slowly drizzle in melted butter while whisking constantly until thick.", text_hi: "सॉस बनाएं: डबल बॉयलर में अंडे की जर्दी और नींबू का रस फेंटें। लगातार चलाते हुए पिघला हुआ मक्खन डालें।", duration: 5 },
      { step: 2, text: "Poach the eggs in gently simmering water with a splash of vinegar for 3 minutes until white is set but yolk is runny.", text_hi: "सिरका मिले उबलते पानी में अंडों को 3 मिनट तक उबालें (पोच करें)।", duration: 5 },
      { step: 3, text: "Sear Canadian bacon slices in a hot pan for 1 minute on each side.", text_hi: "गर्म पैन में बेकन स्लाइस को दोनों तरफ से 1-1 मिनट सेकें।", duration: 2 },
      { step: 4, text: "Split and toast the English muffins.", text_hi: "इंग्लिश मफिन को बीच से काटें और टोस्ट करें।", duration: 2 },
      { step: 5, text: "Assemble: place bacon on toasted muffins, top with a poached egg, and ladle warm hollandaise sauce over top. Serve immediately.", text_hi: "परोसना: मफिन पर बेकन और अंडा रखें, ऊपर से गर्म सॉस डालकर तुरंत परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-teriyaki-curry",
    title: "Chicken Katsu Curry",
    description: "Crispy breaded chicken cutlets served over steamed rice with a thick, aromatic, mildly sweet Japanese curry gravy.",
    image: "https://images.unsplash.com/photo-1598515214211-89d3e73ae83b?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/2_8UoO7EEX4",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    calories: 780,
    tags: ["Japanese", "Dinner", "Chicken", "Comfort Food", "Kaggle"],
    ingredients: [
      { name: "Chicken Breasts", quantity: 4, unit: "pcs", alternative: "Firm tofu blocks or sweet potato slices" },
      { name: "Panko Breadcrumbs", quantity: 1.5, unit: "cups", alternative: "Standard breadcrumbs" },
      { name: "Flour & Eggs (For breading)", quantity: 2, unit: "sets", alternative: "Cornstarch slurry" },
      { name: "Japanese Curry Blocks", quantity: 4, unit: "pcs", alternative: "Garam masala + turmeric + chicken broth" },
      { name: "Potato & Carrot (Diced)", quantity: 1, unit: "cup", alternative: "Pumpkin" }
    ],
    instructions: [
      { step: 1, text: "Cook onions, potatoes, and carrots in a pot with water until tender. Add curry blocks, stir until dissolved, and simmer to thicken.", text_hi: "प्याज, आलू और गाजर को पानी में उबालें। करी ब्लॉक डालकर पिघलाएं और गाढ़ा करें।", duration: 15 },
      { step: 2, text: "Pound chicken breasts to even thickness. Season with salt and pepper.", text_hi: "चिकन ब्रेस्ट को बराबर मोटाई में बेलें। नमक-मिर्च छिड़कें।", duration: 5 },
      { step: 3, text: "Dredge chicken in flour, dip in beaten eggs, and coat thoroughly with panko breadcrumbs.", text_hi: "चिकन को आटे में लपेटें, अंडे में डुबोएं और ब्रेडक्रम्ब्स की परत चढ़ाएं।", duration: 5 },
      { step: 4, text: "Deep fry or pan fry the breaded chicken cutlets until crispy and golden brown (about 4 minutes per side).", text_hi: "चिकन कटलेट को कुरकुरा और सुनहरा होने तक तेल में डीप या पैन फ्राई करें।", duration: 8 },
      { step: 5, text: "Slice chicken katsu, lay over a bed of steamed rice, and ladle hot curry sauce over the top.", text_hi: "चिकन कटलेट को काटें, चावल के ऊपर रखें और ऊपर से गर्म करी डालकर परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-minestrone",
    title: "Minestrone Vegetable Soup",
    description: "Classic Italian vegetable soup made with tomatoes, beans, pasta, and lots of fresh regional vegetables.",
    image: "https://images.unsplash.com/photo-1547592165-e1d17f1a0655?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/3U_yVlhPZ8g",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 25,
    servings: 6,
    calories: 240,
    tags: ["Italian", "Soup", "Vegetarian", "Healthy", "Kaggle"],
    ingredients: [
      { name: "Cannellini Beans (Drained)", quantity: 1.5, unit: "cups", alternative: "Red kidney beans" },
      { name: "Ditalini or Small Pasta", quantity: 1, unit: "cup", alternative: "Gluten-Free small pasta" },
      { name: "Carrots, Celery, Onion (Chopped)", quantity: 1.5, unit: "cups", alternative: "Leeks" },
      { name: "Zucchini (Diced)", quantity: 1, unit: "pc", alternative: "Yellow squash" },
      { name: "Diced Tomatoes (Canned)", quantity: 1.5, unit: "cups", alternative: "Fresh crushed tomatoes" },
      { name: "Vegetable Broth", quantity: 4, unit: "cups", alternative: "Water" }
    ],
    instructions: [
      { step: 1, text: "Sauté onion, carrots, and celery in olive oil in a large pot until soft, about 5 minutes.", text_hi: "एक बड़े बर्तन में प्याज, गाजर और अजवाइन को मुलायम होने तक भूनें।", duration: 5 },
      { step: 2, text: "Add zucchini, garlic, and tomato paste. Sauté for another 2 minutes.", text_hi: "तोरी, लहसुन और टमाटर का पेस्ट डालें। 2 मिनट और भूनें।", duration: 2 },
      { step: 3, text: "Pour in vegetable broth and diced tomatoes. Bring to a boil, then simmer for 15 minutes.", text_hi: "सब्जी का सूप और कटे टमाटर डालें। उबाल आने दें, फिर 15 मिनट पकने दें।", duration: 15 },
      { step: 4, text: "Stir in cannellini beans and pasta. Cook for 8-10 minutes until pasta is al dente.", text_hi: "बीन्स और पास्ता मिलाएं। पास्ता के पकने तक 8-10 मिनट पकाएं।", duration: 10 },
      { step: 5, text: "Stir in spinach, season with salt/pepper, and serve topped with grated parmesan cheese.", text_hi: "पालक मिलाएं, नमक/काली मिर्च डालें और पनीर छिड़क कर परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-tiramisu",
    title: "Classic Tiramisu",
    description: "Famous Italian dessert featuring coffee-soaked ladyfinger cookies layered with a sweet, fluffy mascarpone whipped cream.",
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/9G3XlqG7gC8",
    difficulty: "hard",
    prepTime: 25,
    cookTime: 15,
    servings: 8,
    calories: 450,
    tags: ["Italian", "Dessert", "No-Bake", "Gourmet", "Kaggle"],
    ingredients: [
      { name: "Mascarpone Cheese", quantity: 500, unit: "g", alternative: "Cream cheese blended with heavy cream" },
      { name: "Ladyfinger Biscuits (Savoiardi)", quantity: 24, unit: "pcs", alternative: "Sponge cake slices" },
      { name: "Strong Espresso (Cooled)", quantity: 1.5, unit: "cups", alternative: "Strong decaf coffee" },
      { name: "Egg Yolks", quantity: 6, unit: "pcs", alternative: "Heavy whipping cream (egg-free)" },
      { name: "Sugar", quantity: 0.75, unit: "cup", alternative: "Maple syrup" },
      { name: "Cocoa Powder (For dusting)", quantity: 2, unit: "tbsp", alternative: "Grated dark chocolate" }
    ],
    instructions: [
      { step: 1, text: "Whisk egg yolks and sugar in a heatproof bowl over simmering water until thick and pale (about 8 minutes). Allow to cool.", text_hi: "अंडे की जर्दी और चीनी को पानी के ऊपर रखकर फेंटें जब तक कि वह गाढ़ी न हो जाए।", duration: 10 },
      { step: 2, text: "Beat mascarpone cheese into the cooled egg yolk mixture until smooth.", text_hi: "ठंडे किए गए अंडे के मिश्रण में मस्कारपोन पनीर को चिकना होने तक फेंटें।", duration: 3 },
      { step: 3, text: "In a separate bowl, whip heavy cream to stiff peaks, then fold gently into the mascarpone mixture.", text_hi: "अलग कटोरे में क्रीम फेंटें, फिर इसे पनीर के मिश्रण में हल्के से मिलाएं।", duration: 5 },
      { step: 4, text: "Quickly dip ladyfinger biscuits in espresso and arrange in a single layer at the bottom of a serving dish.", text_hi: "बिस्कुट को कॉफी में डुबोएं और सर्विंग डिश के नीचे एक परत में व्यवस्थित करें।", duration: 5 },
      { step: 5, text: "Spread half of the mascarpone cream over biscuits. Repeat layer of dipped biscuits and cream. Dust generously with cocoa powder and chill for 4 hours.", text_hi: "ऊपर बची क्रीम फैलाएं। दोबारा बिस्कुट और क्रीम की परत लगाएं। कोको पाउडर छिड़कें और 4 घंटे ठंडा करें।", duration: 15 }
    ]
  },
  {
    id: "kaggle-quesadilla",
    title: "Chicken Quesadilla",
    description: "Crispy grilled flour tortillas folded over a melted blend of cheeses, sautéed peppers, and spiced chicken.",
    image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/Q_3H3-N_2sA",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    calories: 520,
    tags: ["Mexican", "Lunch", "Quick Prep", "Easy", "Kaggle"],
    ingredients: [
      { name: "Flour Tortillas", quantity: 2, unit: "large", alternative: "Corn tortillas" },
      { name: "Shredded Cheese (Mexican Blend)", quantity: 1.5, unit: "cups", alternative: "Vegan cheddar style" },
      { name: "Cooked Chicken (Shredded)", quantity: 1, unit: "cup", alternative: "Sautéed black beans or tofu" },
      { name: "Bell Pepper & Onion (Sliced)", quantity: 0.5, unit: "cup", alternative: "Jalapenos" },
      { name: "Taco Seasoning", quantity: 1, unit: "tsp", alternative: "Chili powder + cumin + oregano" }
    ],
    instructions: [
      { step: 1, text: "Sauté sliced bell peppers and onions in a pan with taco seasoning until soft.", text_hi: "तवे पर शिमला मिर्च और प्याज को मसाले के साथ भूनें।", duration: 5 },
      { step: 2, text: "Place one tortilla on a hot buttered griddle or skillet.", text_hi: "गर्म तवे पर मक्खन लगाकर एक रोटी रखें।", duration: 1 },
      { step: 3, text: "Sprinkle half of the cheese over the entire tortilla, then top one half with chicken and sautéed peppers.", text_hi: "आधी चीज़ फैलाएं, फिर एक तरफ चिकन और भुनी हुई मिर्च-प्याज रखें।", duration: 2 },
      { step: 4, text: "Fold the tortilla in half to cover the filling. Press down with a spatula.", text_hi: "रोटी को आधा मोड़ लें। कलछी से हल्का दबाएं।", duration: 1 },
      { step: 5, text: "Cook until golden brown and crispy, about 3 minutes per side. Slice into triangles and serve with sour cream.", text_hi: "दोनों तरफ 3-3 मिनट सुनहरा होने तक सेकें। तिकोना काटकर मलाई के साथ परोसें।", duration: 6 }
    ]
  },
  {
    id: "kaggle-misosoup",
    title: "Tofu Miso Soup",
    description: "Classic comforting Japanese soup made with umami-rich fermented soybean paste, soft tofu cubes, and wakame seaweed.",
    image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/Lz0Y859k-2E",
    difficulty: "easy",
    prepTime: 5,
    cookTime: 10,
    servings: 4,
    calories: 90,
    tags: ["Japanese", "Soup", "Healthy", "Vegan", "Kaggle"],
    ingredients: [
      { name: "Dashi Stock (Kombu based)", quantity: 4, unit: "cups", alternative: "Vegetable broth" },
      { name: "Miso Paste (White or Red)", quantity: 3, unit: "tbsp", alternative: "Soy sauce + vegetable broth concentrate" },
      { name: "Silken Tofu (Diced)", quantity: 150, unit: "g", alternative: "Firm tofu" },
      { name: "Dried Wakame Seaweed", quantity: 2, unit: "tbsp", alternative: "Spinach leaves" },
      { name: "Green Onions (Sliced)", quantity: 2, unit: "pcs", alternative: "Chives" }
    ],
    instructions: [
      { step: 1, text: "Rehydrate dried wakame seaweed in a bowl of warm water for 5 minutes. Drain and set aside.", text_hi: "सूखे समुद्री घास (नोरी/वाकामे) को पानी में 5 मिनट भिगोकर रखें।", duration: 5 },
      { step: 2, text: "Bring dashi stock to a gentle simmer in a pot over medium heat.", text_hi: "बर्तन में दाशी ब्रोथ को मध्यम आंच पर गरम करें।", duration: 5 },
      { step: 3, text: "Ladle about 1/2 cup of warm dashi into a small bowl, add miso paste, and whisk until completely dissolved.", text_hi: "थोड़ा सा सूप लेकर कटोरी में मिसो पेस्ट के साथ मिलाकर घोल लें।", duration: 2 },
      { step: 4, text: "Add the diced tofu and rehydrated wakame to the pot. Simmer gently for 2 minutes (do not boil).", text_hi: "टोफू और घास को बर्तन में डालें। 2 मिनट तक धीमी आंच पर गर्म करें (उबालें नहीं)।", duration: 2 },
      { step: 5, text: "Remove pot from heat. Stir in the dissolved miso mixture and green onions. Serve hot immediately.", text_hi: "आंच बंद करें। घुला हुआ मिसो और हरी प्याज मिलाकर तुरंत परोसें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-butter-chicken",
    title: "Butter Chicken",
    description: "Classic creamy North Indian curry featuring tender spiced tandoori chicken simmered in a velvety buttery tomato gravy.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/a03U45jFxOI",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    calories: 610,
    tags: ["Indian", "Chicken", "Curry", "Gourmet", "Kaggle"],
    ingredients: [
      { name: "Chicken Thighs (Boneless)", quantity: 600, unit: "g", alternative: "Paneer cubes or firm tofu" },
      { name: "Yogurt & Lemon Juice", quantity: 0.5, unit: "cup", alternative: "Coconut cream" },
      { name: "Tomato Purée", quantity: 2, unit: "cups", alternative: "Canned crushed tomatoes" },
      { name: "Heavy Whipping Cream", quantity: 0.75, unit: "cup", alternative: "Coconut cream" },
      { name: "Butter", quantity: 4, unit: "tbsp", alternative: "Coconut oil" },
      { name: "Kashmiri Chili & Garam Masala", quantity: 2, unit: "tsp", alternative: "Mild curry powder" }
    ],
    instructions: [
      { step: 1, text: "Marinate chicken in yogurt, lemon juice, ginger-garlic paste, and spices for at least 1 hour.", text_hi: "चिकन को दही, नींबू और मसालों के साथ 1 घंटे मैरीनेट करें।", duration: 60 },
      { step: 2, text: "Sear chicken pieces in a pan until golden brown and cooked through. Set aside.", text_hi: "चिकन को पैन में सुनहरा होने तक सेकें और अलग रख लें।", duration: 10 },
      { step: 3, text: "In the same pan, melt butter. Sauté ginger and garlic, then add tomato purée and simmer for 10 minutes.", text_hi: "उसी पैन में मक्खन पिघलाएं। अदरक-लहसुन भूनें, टमाटर की प्यूरी डालकर 10 मिनट उबालें।", duration: 10 },
      { step: 4, text: "Blend the tomato gravy until completely smooth. Stir in heavy cream and spices.", text_hi: "टमाटर की ग्रेवी को मिक्सी में पीसकर छान लें। क्रीम और मसाले मिलाएं।", duration: 5 },
      { step: 5, text: "Add chicken back to the gravy. Simmer for 5 minutes, finish with kasuri methi, and serve hot.", text_hi: "चिकन को ग्रेवी में मिलाएं। 5 मिनट पकाकर कसूरी मेथी छिड़कें और परोसें।", duration: 5 }
    ]
  },
  {
    id: "kaggle-falafel",
    title: "Falafel Wrap",
    description: "Crispy herb-packed chickpea falafels wrapped in warm pita bread with crunchy vegetables and creamy tahini sauce.",
    image: "https://images.unsplash.com/photo-1547058886-f844855cf8e2?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/uB_0ZocR4y4",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    calories: 420,
    tags: ["Middle Eastern", "Vegetarian", "Healthy", "Lunch", "Kaggle"],
    ingredients: [
      { name: "Dried Chickpeas (Soaked)", quantity: 2, unit: "cups", alternative: "Canned chickpeas (adds less binding)" },
      { name: "Fresh Parsley & Cilantro", quantity: 1, unit: "cup", alternative: "Spinach" },
      { name: "Tahini (Sesame Paste)", quantity: 0.25, unit: "cup", alternative: "Greek yogurt" },
      { name: "Pita Bread", quantity: 4, unit: "pcs", alternative: "Flour wraps" },
      { name: "Tomato & Cucumber (Diced)", quantity: 1, unit: "cup", alternative: "Pickled onions" }
    ],
    instructions: [
      { step: 1, text: "Blend soaked chickpeas, herbs, onions, garlic, cumin, coriander, salt, and flour in a food processor until minced but not puréed.", text_hi: "भीगे चने, धनिया-पुदीना और मसालों को मिक्सी में दरदरा पीस लें।", duration: 10 },
      { step: 2, text: "Form mixture into small balls. Chill in fridge for 30 minutes to firm up.", text_hi: "मिश्रण को छोटे गोलों का आकार दें। सेट होने के लिए 30 मिनट फ्रिज में रखें।", duration: 30 },
      { step: 3, text: "Deep fry falafels in hot oil until deep brown and crispy (about 4 minutes). Drain.", text_hi: "गर्म तेल में कुरकुरा और भूरा होने तक तलें।", duration: 8 },
      { step: 4, text: "Whisk tahini, lemon juice, garlic, and water in a bowl to make the sauce.", text_hi: "तिल का पेस्ट (ताहिनी), नींबू और पानी मिलाकर सॉस बनाएं।", duration: 3 },
      { step: 5, text: "Warm pitas, stuff with falafels, diced tomato/cucumber salad, and drizzle with tahini sauce.", text_hi: "रोटी गरम करें, उसमें गोले और कटी सब्जियां भरकर सॉस डालें।", duration: 4 }
    ]
  },
  {
    id: "kaggle-caesar-salad",
    title: "Parmesan Caesar Salad",
    description: "Crisp romaine lettuce tossed in a creamy, garlic-parmesan dressing, topped with toasted herb croutons.",
    image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/N-0_J2mSPmY",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 0,
    servings: 2,
    calories: 290,
    tags: ["Italian", "Lunch", "Quick Prep", "Healthy", "Kaggle"],
    ingredients: [
      { name: "Romaine Lettuce Hearts", quantity: 2, unit: "heads", alternative: "Baby spinach" },
      { name: "Parmesan Cheese (Grated)", quantity: 0.5, unit: "cup", alternative: "Nutritional yeast" },
      { name: "Caesar Dressing", quantity: 0.25, unit: "cup", alternative: "Greek yogurt + lemon juice + garlic" },
      { name: "Toasted Croutons", quantity: 1, unit: "cup", alternative: "Toasted pumpkin seeds (gluten-free)" }
    ],
    instructions: [
      { step: 1, text: "Wash and dry romaine lettuce thoroughly, then chop into bite-sized pieces.", text_hi: "सलाद पत्तों को धोकर सुखाएं और छोटे टुकड़ों में काट लें।", duration: 5 },
      { step: 2, text: "Place chopped lettuce in a large mixing bowl.", text_hi: "कटे हुए पत्तों को बड़े कटोरे में डालें।", duration: 1 },
      { step: 3, text: "Drizzle Caesar dressing over lettuce and toss gently until well coated.", text_hi: "सॉस डालें और पत्तों को अच्छी तरह मिलने तक मिलाएं।", duration: 2 },
      { step: 4, text: "Add grated Parmesan cheese and croutons, and toss once more.", text_hi: "घिसा पनीर और क्रूटॉन (टोस्टेड ब्रेड) मिलाकर एक बार और चलाएं।", duration: 2 },
      { step: 5, text: "Divide into plates and garnish with extra Parmesan cheese. Serve fresh.", text_hi: "प्लेटों में निकालें और ऊपर से पनीर छिड़क कर ठंडा परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-applepie",
    title: "Cinnamon Apple Pie",
    description: "Classic American pie packed with sweet, cinnamon-spiced apples in a flaky golden butter crust.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/KbyxYJI4z9Q",
    difficulty: "medium",
    prepTime: 30,
    cookTime: 45,
    servings: 8,
    calories: 410,
    tags: ["American", "Dessert", "Baking", "Kaggle"],
    ingredients: [
      { name: "Pie Crust (Double)", quantity: 1, unit: "set", alternative: "Gluten-free pie dough" },
      { name: "Apples (Peeled & Sliced)", quantity: 6, unit: "large", alternative: "Pears" },
      { name: "Brown Sugar & Cinnamon", quantity: 0.5, unit: "cup", alternative: "Maple sugar" },
      { name: "Butter (Diced)", quantity: 2, unit: "tbsp", alternative: "Coconut oil" },
      { name: "Cornstarch", quantity: 1.5, unit: "tbsp", alternative: "Flour" }
    ],
    instructions: [
      { step: 1, text: "Preheat oven to 425°F (220°C). Toss sliced apples with sugar, cinnamon, nutmeg, and cornstarch.", text_hi: "ओवन को 425°F (220°C) पर गरम करें। सेब को चीनी और दालचीनी के साथ मिलाएं।", duration: 10 },
      { step: 2, text: "Roll out half of the dough and line a 9-inch pie dish. Fill with apple mixture.", text_hi: "आधे आटे को बेलकर पाई डिश में लगाएं। सेब का मिश्रण भरें।", duration: 10 },
      { step: 3, text: "Dot the apples with butter pieces. Roll out second crust and cover pie, crimping edges to seal.", text_hi: "सेब के ऊपर मक्खन के टुकड़े रखें। दूसरे आटे से पाई को ढककर किनारों को सील करें।", duration: 10 },
      { step: 4, text: "Cut small slits in top crust to vent steam. Brush with milk and sprinkle with sugar.", text_hi: "भाप निकलने के लिए ऊपरी परत में छोटे छेद करें। दूध लगाएं और चीनी छिड़कें।", duration: 5 },
      { step: 5, text: "Bake for 45 minutes until crust is golden and apple juices bubble through vents. Cool before slicing.", text_hi: "45 मिनट तक बेक करें जब तक कि ऊपरी हिस्सा सुनहरा न हो जाए। काटने से पहले ठंडा करें।", duration: 45 }
    ]
  },
  {
    id: "kaggle-stroganoff",
    title: "Creamy Beef Stroganoff",
    description: "Tender beef strips and earthy mushrooms sautéed and simmered in a velvety sour cream sauce over egg noodles.",
    image: "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/q9A1XlYsp3k",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    calories: 580,
    tags: ["Russian", "Dinner", "Meat", "Kaggle", "Comfort Food"],
    ingredients: [
      { name: "Beef Sirloin (Thin strips)", quantity: 500, unit: "g", alternative: "Chicken breast or mushrooms" },
      { name: "Egg Noodles", quantity: 300, unit: "g", alternative: "Rice noodles or fettuccine" },
      { name: "Mushrooms (Sliced)", quantity: 200, unit: "g", alternative: "Zucchini" },
      { name: "Sour Cream", quantity: 0.75, unit: "cup", alternative: "Greek yogurt" },
      { name: "Beef Broth", quantity: 1, unit: "cup", alternative: "Vegetable broth" },
      { name: "Flour", quantity: 2, unit: "tbsp", alternative: "Cornstarch" }
    ],
    instructions: [
      { step: 1, text: "Cook egg noodles according to package instructions. Drain and set aside.", text_hi: "नूडल्स को उबालकर छान लें और एक तरफ रख दें।", duration: 10 },
      { step: 2, text: "Sauté beef strips in hot oil in a skillet until browned, about 3 minutes. Remove beef and set aside.", text_hi: "पैन में मांस के टुकड़ों को तेज आंच पर 3 मिनट भूनकर निकाल लें।", duration: 5 },
      { step: 3, text: "Sauté onions and mushrooms in the same skillet until soft, about 5 minutes.", text_hi: "उसी तवे पर प्याज और मशरूम को 5 मिनट भूनें।", duration: 5 },
      { step: 4, text: "Sprinkle flour, pour in beef broth, and bring to a simmer to thicken sauce.", text_hi: "आटा छिड़कें, सूप डालें और सॉस को गाढ़ा होने के लिए उबालें।", duration: 5 },
      { step: 5, text: "Reduce heat, stir in sour cream and beef. Simmer for 2 minutes (do not boil). Serve over hot noodles.", text_hi: "आंच धीमी करें, खट्टा क्रीम और मांस मिलाएं। 2 मिनट पकाकर नूडल्स के साथ परोसें।", duration: 3 }
    ]
  },
  {
    id: "kaggle-shakshuka",
    title: "Shakshuka Eggs",
    description: "Vibrant North African dish of eggs poached in a spiced, simmering tomato and bell pepper sauce.",
    image: "https://images.unsplash.com/photo-1590412200988-a436bb7050a8?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/U33e8S0Uf9s",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    calories: 280,
    tags: ["Middle Eastern", "Breakfast", "Vegetarian", "Healthy", "Kaggle"],
    ingredients: [
      { name: "Eggs", quantity: 5, unit: "pcs", alternative: "Silken tofu blocks" },
      { name: "Crushed Tomatoes (Canned)", quantity: 2, unit: "cups", alternative: "Fresh tomato purée" },
      { name: "Red Bell Pepper & Onion (Diced)", quantity: 1, unit: "cup", alternative: "Leeks" },
      { name: "Garlic", quantity: 3, unit: "cloves", alternative: "1 tsp garlic powder" },
      { name: "Cumin & Paprika", quantity: 1, unit: "tsp", alternative: "Chili powder" }
    ],
    instructions: [
      { step: 1, text: "Sauté onion and bell pepper in olive oil in a skillet until soft, about 5 minutes.", text_hi: "तवे पर जैतून के तेल में प्याज और शिमला मिर्च भूनें।", duration: 5 },
      { step: 2, text: "Add garlic, cumin, paprika, and cook for 1 minute. Pour in crushed tomatoes and simmer to thicken.", text_hi: "लहसुन और मसाला डालें, 1 मिनट भूनें। फिर टमाटर डालकर पकाएं।", duration: 8 },
      { step: 3, text: "Use a spoon to make 5 small wells in the tomato sauce. Crack an egg into each well.", text_hi: "चम्मच से सॉस में 5 जगह खाली करें। प्रत्येक जगह एक अंडा तोड़कर डालें।", duration: 2 },
      { step: 4, text: "Cover the skillet and cook on medium-low heat for 5-8 minutes until egg whites are set but yolks are runny.", text_hi: "तवे को ढक दें और धीमी आंच पर 5-8 मिनट अंडों के पकने तक पकाएं।", duration: 8 },
      { step: 5, text: "Garnish with fresh cilantro or crumbled feta cheese. Serve warm with crusty bread.", text_hi: "ताजी धनिया या पनीर छिड़कें। ब्रेड के साथ गरमा-गरम परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-churros",
    title: "Churros con Chocolate",
    description: "Crispy fried Spanish pastry straws dusted in cinnamon sugar, served with a thick dark chocolate dipping sauce.",
    image: "https://images.unsplash.com/photo-1578645510447-e20b4311e3e7?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/e8659Z1yD_M",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 6,
    calories: 380,
    tags: ["Spanish", "Dessert", "Kids Friendly", "Kaggle"],
    ingredients: [
      { name: "Flour", quantity: 1, unit: "cup", alternative: "Gluten-Free flour mix" },
      { name: "Butter", quantity: 2, unit: "tbsp", alternative: "Coconut oil" },
      { name: "Cinnamon Sugar (For dusting)", quantity: 0.5, unit: "cup", alternative: "Powdered sugar" },
      { name: "Dark Chocolate (For dipping)", quantity: 100, unit: "g", alternative: "Chocolate syrup" },
      { name: "Frying Oil", quantity: 2, unit: "cups", alternative: "Air fry (spray with oil)" }
    ],
    instructions: [
      { step: 1, text: "Boil water, butter, sugar, and salt in a pot. Stir in flour all at once until a dough ball forms. Remove from heat and cool slightly, then beat in eggs.", text_hi: "पानी, मक्खन और नमक उबालें। आटा डालकर हिलाएं। ठंडा करके अंडा मिलाएं।", duration: 10 },
      { step: 2, text: "Spoon the dough into a pastry bag fitted with a star tip.", text_hi: "आटे को स्टार नोजल वाले पाइपिंग बैग में भरें।", duration: 5 },
      { step: 3, text: "Pipe 6-inch strips of dough into hot frying oil. Fry until golden brown and crispy.", text_hi: "गर्म तेल में पाइपिंग बैग से लंबे टुकड़े डालें। सुनहरा होने तक तलें।", duration: 5 },
      { step: 4, text: "Drain churros on paper towels, then roll immediately in cinnamon sugar.", text_hi: "अतिरिक्त तेल सुखाएं, फिर तुरंत चीनी-दालचीनी के पाउडर में लपेटें।", duration: 2 },
      { step: 5, text: "Melt dark chocolate with heavy cream in a bowl to make a thick dipping sauce. Serve warm.", text_hi: "चॉकलेट और क्रीम को पिघलाकर गाढ़ा सॉस बनाएं और परोसें।", duration: 5 }
    ]
  },
  {
    id: "kaggle-pho",
    title: "Beef Pho Noodles",
    description: "Authentic, deeply aromatic Vietnamese noodle soup made with slow-simmered beef broth, thin rice noodles, and fresh herbs.",
    image: "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/jZ_y-kK4Kk8",
    difficulty: "hard",
    prepTime: 30,
    cookTime: 150,
    servings: 4,
    calories: 490,
    tags: ["Vietnamese", "Soup", "Noodles", "Healthy", "Kaggle"],
    ingredients: [
      { name: "Beef Broth (Slow simmered)", quantity: 6, unit: "cups", alternative: "Rich vegetable broth" },
      { name: "Rice Noodles (Pho style)", quantity: 300, unit: "g", alternative: "Zucchini noodles" },
      { name: "Beef Flank (Thinly sliced raw)", quantity: 200, unit: "g", alternative: "Tofu slices or mushrooms" },
      { name: "Spices (Star Anise, Ginger, Onion charred)", quantity: 1, unit: "set", alternative: "Cloves + cinnamon" },
      { name: "Bean Sprouts & Basil Leaves", quantity: 2, unit: "cups", alternative: "Cilantro" }
    ],
    instructions: [
      { step: 1, text: "Char ginger and onion over open flame. Toast star anise, cinnamon, and cloves in a pot.", text_hi: "अदरक और प्याज को थोड़ा भून लें। दालचीनी और इलायची भूनें।", duration: 10 },
      { step: 2, text: "Add beef bones and water, simmer on low heat for 2 hours to extract rich broth, then strain.", text_hi: "हड्डियां और पानी डालकर धीमी आंच पर 2 घंटे उबालें, फिर छान लें।", duration: 120 },
      { step: 3, text: "Cook rice noodles in boiling water for 3 minutes, then drain and divide into bowls.", text_hi: "चावल के नूडल्स उबालें और कटोरों में निकालें।", duration: 5 },
      { step: 4, text: "Top noodles with raw thinly sliced beef flank and chopped green onions.", text_hi: "नूडल्स के ऊपर कच्चा कटा हुआ मांस और हरी प्याज रखें।", duration: 3 },
      { step: 5, text: "Pour piping hot broth directly over raw beef to cook it instantly. Serve with bean sprouts, lime, and hoisin sauce.", text_hi: "ऊपर से तेज उबलता सूप डालें ताकि मांस तुरंत पक जाए। सब्जियों के साथ परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-caesar-wrap",
    title: "Caesar Chicken Wrap",
    description: "Simple, delicious lunch wrap containing grilled chicken breast, romaine lettuce, parmesan cheese, and creamy Caesar dressing in flour tortillas.",
    image: "https://images.unsplash.com/photo-1626700051175-6518c4793f4f?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/4yW7K2kU7_M",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 5,
    servings: 2,
    calories: 410,
    tags: ["American", "Lunch", "Quick Prep", "Easy", "Kaggle"],
    ingredients: [
      { name: "Flour Tortillas (Large)", quantity: 2, unit: "pcs", alternative: "Gluten-free wraps" },
      { name: "Grilled Chicken Breast (Sliced)", quantity: 200, unit: "g", alternative: "Tofu strips" },
      { name: "Romaine Lettuce (Chopped)", quantity: 1, unit: "cup", alternative: "Spinach" },
      { name: "Parmesan Cheese", quantity: 0.25, unit: "cup", alternative: "Nutritional yeast" },
      { name: "Caesar Dressing", quantity: 2, unit: "tbsp", alternative: "Yogurt dressing" }
    ],
    instructions: [
      { step: 1, text: "Toss chopped romaine lettuce, grilled chicken, and Parmesan cheese with Caesar dressing in a bowl.", text_hi: "कटोरे में सलाद पत्ते, चिकन, पनीर और सॉस को एक साथ मिलाएं।", duration: 5 },
      { step: 2, text: "Warm the tortillas in a dry skillet for 15 seconds to make them pliable.", text_hi: "रोटी को तवे पर 15 सेकंड गरम करें ताकि मोड़ने में आसानी हो।", duration: 1 },
      { step: 3, text: "Divide the chicken salad mixture evenly onto the center of each tortilla.", text_hi: "तैयार मिश्रण को दोनों रोटियों के बीच बराबर फैलाएं।", duration: 2 },
      { step: 4, text: "Fold the sides inward, then roll up tightly from the bottom to form a wrap.", text_hi: "किनारों को अंदर मोड़ें, फिर नीचे से लपेट लें।", duration: 2 },
      { step: 5, text: "Slice diagonally and serve immediately or wrap in foil for lunch on the go.", text_hi: "तिरछा काटें और परोसें या लंच बॉक्स के लिए पैक करें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-frenchtoast",
    title: "Classic French Toast",
    description: "Golden griddled bread slices soaked in a spiced egg-milk wash, served with syrup and fresh berries.",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/17bQcZtT518",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 3,
    calories: 340,
    tags: ["French", "Breakfast", "Easy", "Kids Friendly", "Kaggle"],
    ingredients: [
      { name: "Thick Bread Slices", quantity: 6, unit: "pcs", alternative: "Gluten-free bread slices" },
      { name: "Eggs", quantity: 3, unit: "pcs", alternative: "Banana mash + milk" },
      { name: "Whole Milk", quantity: 0.5, unit: "cup", alternative: "Almond milk" },
      { name: "Cinnamon & Vanilla Extract", quantity: 1, unit: "tsp", alternative: "Nutmeg" },
      { name: "Butter (For cooking)", quantity: 2, unit: "tbsp", alternative: "Coconut oil" }
    ],
    instructions: [
      { step: 1, text: "Whisk eggs, milk, cinnamon, vanilla, and sugar in a shallow dish.", text_hi: "एक उथले बर्तन में अंडे, दूध, दालचीनी और वेनिला मिलाएं।", duration: 3 },
      { step: 2, text: "Melt butter in a skillet over medium heat.", text_hi: "तवे पर मध्यम आंच पर मक्खन पिघलाएं।", duration: 2 },
      { step: 3, text: "Dip bread slices into the egg mixture for 10 seconds per side until fully soaked.", text_hi: "ब्रेड स्लाइस को अंडे के घोल में दोनों तरफ 10-10 सेकंड डुबोएं।", duration: 2 },
      { step: 4, text: "Cook in hot skillet until golden brown, about 3 minutes per side.", text_hi: "तवे पर सुनहरा होने तक (लगभग 3 मिनट प्रति साइड) सेकें।", duration: 6 },
      { step: 5, text: "Serve warm topped with powdered sugar, maple syrup, and fresh berries.", text_hi: "चीनी पाउडर, सिरप और बेरी के साथ परोसें।", duration: 2 }
    ]
  },
  {
    id: "kaggle-souvlaki",
    title: "Chicken Souvlaki Pita",
    description: "Greek-style marinated grilled chicken skewers wrapped in warm pita bread with cucumbers, tomatoes, and cool tzatziki sauce.",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 440,
    tags: ["Greek", "Lunch", "Chicken", "Healthy", "Kaggle"],
    ingredients: [
      { name: "Chicken Breasts (Cubes)", quantity: 500, unit: "g", alternative: "Tofu cubes or lamb" },
      { name: "Lemon Juice & Olive Oil", quantity: 3, unit: "tbsp", alternative: "Vinegar" },
      { name: "Greek Yogurt (For tzatziki)", quantity: 1, unit: "cup", alternative: "Sour cream" },
      { name: "Pita Breads", quantity: 4, unit: "pcs", alternative: "Flour wraps" },
      { name: "Cucumber & Tomato (Sliced)", quantity: 1, unit: "cup", alternative: "Onions" }
    ],
    instructions: [
      { step: 1, text: "Marinate chicken cubes in lemon juice, olive oil, minced garlic, oregano, salt, and pepper for 1 hour.", text_hi: "चिकन को नींबू, जैतून का तेल, लहसुन और ओरेगानो के साथ 1 घंटे मैरीनेट करें।", duration: 60 },
      { step: 2, text: "Thread chicken onto skewers. Grill over medium-high heat until cooked through, about 12 minutes.", text_hi: "चिकन को सीख (स्क्यूअर्स) पर पिरोएं और 12 मिनट ग्रिल करें।", duration: 12 },
      { step: 3, text: "Make tzatziki: mix Greek yogurt, grated cucumber, lemon juice, garlic, and dill in a bowl.", text_hi: "दही की चटनी (त्सात्ज़िकी) बनाएं: दही, कद्दूकस खीरा, नींबू और लहसुन मिलाएं।", duration: 5 },
      { step: 4, text: "Warm pitas on the grill.", text_hi: "रोटी (पीता) को आंच पर गर्म करें।", duration: 2 },
      { step: 5, text: "Slide chicken off skewers onto pita, add sliced tomatoes, cucumbers, onions, and drizzle with tzatziki.", text_hi: "रोटी पर चिकन रखें, सब्जियां सजाएं और चटनी डालकर परोसें।", duration: 3 }
    ]
  },
  {
    id: "kaggle-beef-broccoli",
    title: "Broccoli Beef Stir Fry",
    description: "Quick Chinese-style dinner featuring tender beef strips and crunchy broccoli florets sautéed in a sweet soy-ginger glaze.",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/e4s4O8jL-Vw",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 4,
    calories: 390,
    tags: ["Chinese", "Stir-fry", "Quick Prep", "Beef", "Kaggle"],
    ingredients: [
      { name: "Beef Flank (Thinly Sliced)", quantity: 450, unit: "g", alternative: "Chicken strips or extra firm tofu" },
      { name: "Broccoli Florets", quantity: 3, unit: "cups", alternative: "Snap peas or green beans" },
      { name: "Soy Sauce & Oyster Sauce", quantity: 0.25, unit: "cup", alternative: "Tamari + mushroom sauce" },
      { name: "Brown Sugar", quantity: 2, unit: "tbsp", alternative: "Honey" },
      { name: "Ginger & Garlic (Minced)", quantity: 1, unit: "tbsp", alternative: "Ginger powder" }
    ],
    instructions: [
      { step: 1, text: "Whisk soy sauce, oyster sauce, water, brown sugar, garlic, ginger, and cornstarch in a bowl.", text_hi: "कटोरे में सोया सॉस, कॉर्नस्टार्च, चीनी, अदरक और लहसुन का घोल बनाएं।", duration: 5 },
      { step: 2, text: "Sauté sliced beef in a hot wok with oil until browned, about 3 minutes. Set aside.", text_hi: "कढ़ाई में तेल गर्म करके मांस को 3 मिनट भूनें और निकाल लें।", duration: 5 },
      { step: 3, text: "Stir-fry broccoli florets in the same wok with a splash of water for 3 minutes until crisp-tender.", text_hi: "उसी कढ़ाई में ब्रोकली को थोड़ा पानी डालकर 3 मिनट भूनें।", duration: 3 },
      { step: 4, text: "Return beef and pour in the sauce mixture. Cook, stirring constantly, until sauce bubbles and thickens.", text_hi: "मांस और तैयार सॉस को वापस डालें। सॉस के गाढ़ा होने तक लगातार चलाएं।", duration: 2 },
      { step: 5, text: "Serve hot over steamed jasmine rice, garnished with toasted sesame seeds.", text_hi: "चावल के ऊपर परोसें और ऊपर से तिल छिड़कें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-gazpacho",
    title: "Chilled Gazpacho Soup",
    description: "Vibrant and refreshing raw Spanish soup made with blended ripe tomatoes, cucumbers, peppers, garlic, and olive oil.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/T4b3T128Wmg",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 0,
    servings: 6,
    calories: 140,
    tags: ["Spanish", "Soup", "Healthy", "Vegan", "Kaggle"],
    ingredients: [
      { name: "Roma Tomatoes (Ripe)", quantity: 1, unit: "kg", alternative: "Canned whole plum tomatoes" },
      { name: "English Cucumber (Peeled)", quantity: 1, unit: "large", alternative: "Standard cucumbers" },
      { name: "Green Bell Pepper", quantity: 1, unit: "pc", alternative: "Red bell pepper" },
      { name: "Garlic", quantity: 2, unit: "cloves", alternative: "1/2 tsp garlic powder" },
      { name: "Extra Virgin Olive Oil", quantity: 0.3, unit: "cup", alternative: "Avocado oil" },
      { name: "Stale Bread (Soaked in water)", quantity: 1, unit: "slice", alternative: "Almond flour (optional thickener)" }
    ],
    instructions: [
      { step: 1, text: "Roughly chop tomatoes, cucumber, pepper, and onion. Place in a blender.", text_hi: "टमाटर, खीरा, मिर्च और प्याज को बड़े टुकड़ों में काटकर ब्लेंडर में डालें।", duration: 8 },
      { step: 2, text: "Add garlic, soaked bread, vinegar, salt, and half of the olive oil. Blend until smooth.", text_hi: "लहसुन, भीगी ब्रेड, सिरका, नमक और आधा तेल डालकर बारीक पीस लें।", duration: 4 },
      { step: 3, text: "With the blender running on low, slowly drizzle in the remaining olive oil to emulsify.", text_hi: "मशीन चलते हुए धीरे-धीरे बचा हुआ तेल मिलाएं ताकि पेस्ट गाढ़ा हो सके।", duration: 2 },
      { step: 4, text: "Strain through a mesh sieve for a ultra-smooth texture (optional). Chill in fridge for 2 hours.", text_hi: "छान लें और ठंडा होने के लिए 2 घंटे फ्रिज में रखें।", duration: 10 },
      { step: 5, text: "Serve cold, garnished with diced cucumber, tomatoes, croutons, and a drizzle of olive oil.", text_hi: "ठंडा परोसें, कटे खीरे-टमाटर और क्रूटॉन से सजाएं।", duration: 2 }
    ]
  },
  {
    id: "kaggle-baklava",
    title: "Honey Walnut Baklava",
    description: "Rich, sweet Mediterranean pastry consisting of layers of flaky phyllo dough filled with chopped walnuts, sweetened with honey syrup.",
    image: "https://images.unsplash.com/photo-1519676867240-f03562e64548?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/49Q_0N2e_1o",
    difficulty: "hard",
    prepTime: 30,
    cookTime: 30,
    servings: 12,
    calories: 480,
    tags: ["Greek", "Turkish", "Dessert", "Baking", "Kaggle"],
    ingredients: [
      { name: "Phyllo Pastry Dough", quantity: 1, unit: "box", alternative: "Puff pastry sheets" },
      { name: "Walnuts (Finely chopped)", quantity: 3, unit: "cups", alternative: "Pistachios or almonds" },
      { name: "Butter (Melted)", quantity: 1, unit: "cup", alternative: "Vegan butter" },
      { name: "Honey", quantity: 0.75, unit: "cup", alternative: "Maple syrup" },
      { name: "Lemon Peel & Cinnamon stick", quantity: 1, unit: "set", alternative: "Vanilla extract" }
    ],
    instructions: [
      { step: 1, text: "Boil water, sugar, honey, lemon juice, and a cinnamon stick in a pot to make the syrup. Cool completely.", text_hi: "पानी, चीनी, शहद और दालचीनी को उबालकर चाशनी बनाएं और पूरी तरह ठंडा करें।", duration: 15 },
      { step: 2, text: "Butter a baking pan. Layer 8 sheets of phyllo dough, brushing each sheet with melted butter.", text_hi: "बेकिंग पैन में मक्खन लगाएं। आटे की 8 परतें लगाएं, हर परत पर मक्खन लगाएं।", duration: 10 },
      { step: 3, text: "Sprinkle a layer of chopped walnuts, then layer 2 buttered phyllo sheets. Repeat process.", text_hi: "कटे अखरोट छिड़कें, फिर 2 परतें लगाएं। इसी प्रकार प्रक्रिया दोहराएं।", duration: 10 },
      { step: 4, text: "Finish with 8 sheets of buttered phyllo on top. Cut into diamonds. Bake at 325°F (160°C) for 50 minutes until golden.", text_hi: "ऊपर 8 परतें लगाएं। तिरछा काटें। 325°F (160°C) पर 50 मिनट बेक करें।", duration: 55 },
      { step: 5, text: "Pour the cooled honey syrup immediately over the hot baked baklava. Allow to rest for 4 hours to absorb.", text_hi: "गर्म बकलावा के ऊपर तुरंत ठंडी चाशनी डालें। सोखने के लिए 4 घंटे छोड़ दें।", duration: 5 }
    ]
  },
  {
    id: "kaggle-caprese",
    title: "Caprese Salad Skewers",
    description: "Simple, elegant Italian salad skewers made with fresh cherry tomatoes, baby mozzarella, and fresh basil leaves, drizzled with a rich balsamic glaze.",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6eb19675?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/2y-yG10712s",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 0,
    servings: 2,
    calories: 180,
    tags: ["Italian", "Snack", "Quick Prep", "Vegetarian", "Kaggle"],
    ingredients: [
      { name: "Cherry Tomatoes", quantity: 12, unit: "pcs", alternative: "Diced Roma tomatoes" },
      { name: "Baby Mozzarella (Bocconcini)", quantity: 12, unit: "pcs", alternative: "Tofu cubes" },
      { name: "Fresh Basil Leaves", quantity: 12, unit: "pcs", alternative: "Mint leaves" },
      { name: "Balsamic Vinegar (Reduced to glaze)", quantity: 0.25, unit: "cup", alternative: "Soy sauce reduction" }
    ],
    instructions: [
      { step: 1, text: "Thread one cherry tomato, one folded basil leaf, and one baby mozzarella ball onto a wooden skewer.", text_hi: "लकड़ी की सींक पर एक टमाटर, तुलसी का पत्ता और पनीर का गोला पिरोएं।", duration: 3 },
      { step: 2, text: "Repeat process for all 12 skewers, placing them neatly on a platter.", text_hi: "सभी 12 सींकों को इसी प्रकार तैयार करके प्लेट में सजाएं।", duration: 5 },
      { step: 3, text: "Drizzle extra virgin olive oil over the skewers.", text_hi: "ऊपर से थोड़ा सा जैतून का तेल छिड़कें।", duration: 1 },
      { step: 4, text: "Drizzle thick balsamic glaze pattern across skewers.", text_hi: "ऊपर से गाढ़ी सिरके की चटनी (बाल्समिक ग्लेज़) डालें।", duration: 1 },
      { step: 5, text: "Season with fresh cracked black pepper and a pinch of flaky sea salt. Serve fresh.", text_hi: "काली मिर्च और समुद्री नमक छिड़क कर तुरंत परोसें।", duration: 1 }
    ]
  },
  {
    id: "kaggle-shepherd",
    title: "Shepherd's Potato Pie",
    description: "Hearty and comforting British classic consisting of seasoned ground lamb and vegetables baked under a thick crust of mashed potatoes.",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/q61J51uK1jE",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 30,
    servings: 6,
    calories: 460,
    tags: ["British", "Dinner", "Meat", "Comfort Food", "Kaggle"],
    ingredients: [
      { name: "Ground Lamb", quantity: 600, unit: "g", alternative: "Ground Beef (Cottage Pie) or lentils" },
      { name: "Potatoes (For mashing)", quantity: 1, unit: "kg", alternative: "Sweet potatoes or cauliflower mash" },
      { name: "Peas and Carrots (Diced)", quantity: 1.5, unit: "cups", alternative: "Corn" },
      { name: "Beef Broth & Tomato Paste", quantity: 1, unit: "cup", alternative: "Vegetable stock" },
      { name: "Butter & Milk", quantity: 0.5, unit: "cup", alternative: "Olive oil" }
    ],
    instructions: [
      { step: 1, text: "Boil potatoes in salted water until soft. Mash with butter, milk, salt, and pepper until smooth.", text_hi: "आलुओं को उबालें। मक्खन, दूध, नमक और काली मिर्च मिलाकर चिकना मैश करें।", duration: 20 },
      { step: 2, text: "Brown minced lamb with onions and garlic in a skillet. Stir in flour and tomato paste.", text_hi: "कढ़ाई में प्याज-लहसुन के साथ कीमा भूनें। आटा और टमाटर का पेस्ट मिलाएं।", duration: 10 },
      { step: 3, text: "Pour in beef broth, add peas and carrots, and simmer for 10 minutes to thicken gravy.", text_hi: "सूप और सब्जियां डालें, ग्रेवी गाढ़ी होने के लिए 10 मिनट उबालें।", duration: 10 },
      { step: 4, text: "Spread meat mixture into a baking dish. Spread mashed potatoes evenly over the meat, scoring with a fork.", text_hi: "मांस को बेकिंग डिश में फैलाएं। ऊपर मैश किए आलू फैलाएं और कांटे से डिज़ाइन बनाएं।", duration: 5 },
      { step: 5, text: "Bake at 400°F (200°C) for 30 minutes until potato crust is golden brown and edges bubble.", text_hi: "400°F (200°C) पर 30 मिनट सुनहरा होने तक बेक करें।", duration: 30 }
    ]
  },
  {
    id: "kaggle-teriyaki-grill",
    title: "Chicken Teriyaki Grill",
    description: "Tender grilled chicken thigh glazed in a sweet, glossy homemade teriyaki sauce, served with broccoli.",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/2_8UoO7EEX4",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 430,
    tags: ["Japanese", "Chicken", "Quick Prep", "Kaggle", "Dinner"],
    ingredients: [
      { name: "Chicken Thighs (Boneless)", quantity: 4, unit: "pcs", alternative: "Firm tofu slabs" },
      { name: "Soy Sauce & Mirin", quantity: 0.5, unit: "cup", alternative: "Tamari + apple juice" },
      { name: "Brown Sugar", quantity: 3, unit: "tbsp", alternative: "Honey" },
      { name: "Garlic & Ginger (Grating)", quantity: 1, unit: "tsp", alternative: "Ginger powder" }
    ],
    instructions: [
      { step: 1, text: "Simmer soy sauce, mirin, sugar, garlic, and ginger in a pan for 5 minutes to thicken into teriyaki sauce.", text_hi: "सोया सॉस, मिरिन और चीनी को पकाकर गाढ़ी टेरियकी चटनी बनाएं।", duration: 5 },
      { step: 2, text: "Pan-fry chicken thighs skin-side down in a hot skillet until crispy (about 6 minutes).", text_hi: "चिकन को गर्म तवे पर 6 मिनट तक सेकें जब तक कि वह कुरकुरा न हो जाए।", duration: 6 },
      { step: 3, text: "Flip and cook other side for 5 minutes until chicken is cooked through.", text_hi: "पलटें और पकने तक दूसरी तरफ 5 मिनट सेकें।", duration: 5 },
      { step: 4, text: "Pour teriyaki sauce over chicken in the skillet, coating it thoroughly until glossy.", text_hi: "तैयार चटनी को चिकन के ऊपर डालें और अच्छी तरह लपेटें।", duration: 2 },
      { step: 5, text: "Slice chicken, spoon sauce over, and serve with steamed broccoli and white rice.", text_hi: "चिकन को काटें, सॉस डालें और चावल के साथ परोसें।", duration: 2 }
    ]
  }
];
