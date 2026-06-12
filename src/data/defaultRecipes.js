export const defaultRecipes = [
  {
    id: "tuscan-chicken",
    title: "Creamy Tuscan Garlic Chicken",
    description: "Tender pan-seared chicken breasts bathed in a rich, velvety garlic sauce loaded with sun-dried tomatoes and fresh baby spinach. A restaurant-quality Italian classic made in under 25 minutes.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/kYJ_85k_X2E",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 420,
    tags: ["Quick Prep", "Chicken", "Gluten-Free", "Comfort Food", "Italian"],
    ingredients: [
      { name: "Chicken Breasts", quantity: 4, unit: "pcs", alternative: "Firm Tofu blocks (pressed and sliced) or Portobello Mushrooms" },
      { name: "Olive Oil", quantity: 2, unit: "tbsp", alternative: "Avocado Oil or Butter" },
      { name: "Garlic", quantity: 6, unit: "cloves", alternative: "1.5 tsp Garlic Powder" },
      { name: "Sun-dried Tomatoes", quantity: 0.5, unit: "cup", alternative: "Cherry tomatoes (halved and roasted)" },
      { name: "Baby Spinach", quantity: 3, unit: "cups", alternative: "Kale (destemmed and chopped)" },
      { name: "Heavy Cream", quantity: 1, unit: "cup", alternative: "Coconut Cream or Cashew Cream (for a dairy-free option)" },
      { name: "Chicken Broth", quantity: 0.5, unit: "cup", alternative: "Vegetable Broth" },
      { name: "Parmesan Cheese", quantity: 0.5, unit: "cup", alternative: "Nutritional Yeast (vegan alternative) or Pecorino Romano" },
      { name: "Italian Seasoning", quantity: 1, unit: "tsp", alternative: "Dried Oregano + Dried Basil" }
    ],
    instructions: [
      {
        step: 1,
        text: "Season the chicken breasts generously with salt, pepper, and Italian seasoning on both sides.",
        text_hi: "चिकन ब्रेस्ट के दोनों तरफ नमक, काली मिर्च और इटैलियन सीजनिंग अच्छी तरह छिड़कें।",
        duration: 2
      },
      {
        step: 2,
        text: "Heat olive oil in a large skillet over medium-high heat. Add chicken breasts and sear until golden brown, about 5 minutes per side. Remove chicken from skillet and set aside on a plate.",
        text_hi: "एक बड़े पैन में मध्यम-तेज आंच पर जैतून का तेल गर्म करें। चिकन ब्रेस्ट डालकर दोनों तरफ से सुनहरा भूरा होने तक (लगभग 5 मिनट प्रति साइड) सेकें। चिकन को निकालकर प्लेट में रख लें।",
        duration: 10
      },
      {
        step: 3,
        text: "In the same skillet, reduce heat to medium. Add minced garlic and sauté for 1 minute until fragrant. Add sun-dried tomatoes and spinach. Cook until spinach is wilted, about 2 minutes.",
        text_hi: "उसी पैन में आंच मध्यम कर दें। बारीक कटा हुआ लहसुन डालें और 1 मिनट तक भूनें। फिर सूखे टमाटर और पालक डालें। पालक के सिकुड़ने तक लगभग 2 मिनट पकाएं।",
        duration: 3
      },
      {
        step: 4,
        text: "Pour in the chicken broth and heavy cream. Bring to a gentle simmer, scraping up browned bits from the pan. Stir in the grated Parmesan cheese until melted and incorporated.",
        text_hi: "चिकन ब्रॉथ और हैवी क्रीम डालें। इसे धीमी आंच पर उबलने दें और पैन में चिपके मसालों को खुरच कर मिलाएं। घिसा हुआ परमेसन चीज़ डालकर पिघलने तक मिलाएं।",
        duration: 3
      },
      {
        step: 5,
        text: "Return the chicken and accumulated juices to the skillet. Simmer for another 2-3 minutes until the sauce thickens slightly and chicken is warmed through (internal temp 165°F / 74°C). Serve warm!",
        text_hi: "चिकन और उसका जूस वापस पैन में डालें। सॉस के थोड़ा गाढ़ा होने और चिकन के पूरी तरह गर्म होने तक 2-3 मिनट और पकाएं। गर्मागर्म परोसें!",
        duration: 3
      }
    ]
  },
  {
    id: "avocado-pesto-pasta",
    title: "Zesty Avocado Pesto Pasta",
    description: "A vibrant, nutrient-packed vegan pasta. Fresh avocado provides a velvety creaminess to this quick pesto sauce, enriched with fresh basil, garlic, spinach, toasted walnuts, and a splash of lemon juice.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/gT55zC22U7M",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 10,
    servings: 2,
    calories: 380,
    tags: ["Quick Prep", "Vegan", "Vegetarian", "Healthy", "15 Mins"],
    ingredients: [
      { name: "Pasta (Spaghetti or Penne)", quantity: 200, unit: "g", alternative: "Gluten-Free pasta or Zucchini Noodles (zoodles)" },
      { name: "Ripe Avocados", quantity: 2, unit: "pcs", alternative: "Greek Yogurt or Silken Tofu (not vegan if using yogurt)" },
      { name: "Fresh Basil Leaves", quantity: 1.5, unit: "cups", alternative: "Fresh Spinach or Arugula mix" },
      { name: "Walnuts", quantity: 0.25, unit: "cup", alternative: "Pine Nuts, Sunflower Seeds (nut-free), or Almonds" },
      { name: "Garlic", quantity: 2, unit: "cloves", alternative: "1/2 tsp Garlic Powder" },
      { name: "Lemon Juice", quantity: 2, unit: "tbsp", alternative: "Lime Juice or Apple Cider Vinegar" },
      { name: "Olive Oil", quantity: 3, unit: "tbsp", alternative: "Avocado Oil" },
      { name: "Nutritional Yeast", quantity: 2, unit: "tbsp", alternative: "Parmesan Cheese (non-vegan)" },
      { name: "Salt and Black Pepper", quantity: 0.5, unit: "tsp", alternative: "To taste" }
    ],
    instructions: [
      {
        step: 1,
        text: "Bring a large pot of salted water to a boil. Cook the pasta according to package instructions. Reserve 1/2 cup of pasta water before draining.",
        text_hi: "एक बड़े बर्तन में नमकीन पानी उबालें। पैकेट के निर्देशों के अनुसार पास्ता पकाएं। पानी छानने से पहले आधा कप पास्ता का पानी निकाल कर रख लें।",
        duration: 10
      },
      {
        step: 2,
        text: "While pasta cooks, prepare the pesto. Combine avocados, basil, walnuts, garlic, lemon juice, nutritional yeast, and olive oil in a food processor or high-speed blender.",
        text_hi: "जब तक पास्ता पक रहा हो, पेस्टो तैयार करें। फूड प्रोसेसर या ब्लेंडर में एवोकाडो, तुलसी, अखरोट, लहसुन, नींबू का रस, न्यूट्रिशनल यीस्ट और जैतून का तेल मिला लें।",
        duration: 4
      },
      {
        step: 3,
        text: "Blend ingredients until smooth and creamy. Season with salt and pepper to taste. If the pesto is too thick, add 1-2 tablespoons of the reserved warm pasta cooking water and blend again.",
        text_hi: "सामग्री को चिकना और मलाईदार होने तक पीस लें। स्वादानुसार नमक और काली मिर्च डालें। यदि पेस्टो बहुत गाढ़ा हो, तो इसमें 1-2 बड़े चम्मच गरम पास्ता का पानी मिलाएं और फिर से ब्लेंड करें।",
        duration: 2
      },
      {
        step: 4,
        text: "Drain the pasta and return it to the pot. Pour the avocado pesto over the hot pasta and toss gently until well coated. Add cherry tomatoes or basil leaves for garnish, and serve immediately.",
        text_hi: "पास्ता का पानी छान लें और इसे वापस बर्तन में डालें। गरम पास्ता पर एवोकाडो पेस्टो डालें और अच्छी तरह मिलने तक धीरे से मिलाएं। सजावट के लिए चेरी टमाटर डालें और तुरंत परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "classic-shoyu-ramen",
    title: "Authentic Tokyo Shoyu Ramen",
    description: "An elegant, deeply satisfying bowl of classic soy sauce-based ramen. Features a slow-simmered, complex dashi broth, perfectly bouncy noodles, tender chashu pork, marinated soft-boiled egg, and aromatic scallion oil.",
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/2O9q2xN8t6k",
    difficulty: "hard",
    prepTime: 40,
    cookTime: 120,
    servings: 2,
    calories: 720,
    tags: ["Japanese", "Noodles", "Comfort Food", "Gourmet"],
    ingredients: [
      { name: "Ramen Noodles (Fresh)", quantity: 2, unit: "portions", alternative: "Dry Ramen noodles or Soba/Rice noodles (gluten-free)" },
      { name: "Dashi stock (Kombu + Katsuobushi)", quantity: 4, unit: "cups", alternative: "High-quality Chicken broth mixed with Soy Sauce" },
      { name: "Chashu Pork (Sliced)", quantity: 4, unit: "slices", alternative: "Braised Shiitake Mushrooms or Grilled Chicken slices" },
      { name: "Soy Sauce (Shoyu)", quantity: 0.25, unit: "cup", alternative: "Tamari (gluten-free alternative) or Coconut Aminos" },
      { name: "Mirin", quantity: 2, unit: "tbsp", alternative: "Dry Sherry + 1 tsp sugar" },
      { name: "Ginger (Sliced)", quantity: 1, unit: "inch", alternative: "1/2 tsp ginger powder" },
      { name: "Ramen Eggs (Ajitsuke Tamago)", quantity: 2, unit: "pcs", alternative: "Soft-boiled Eggs or Soft Silken Tofu" },
      { name: "Green Onions (Finely Sliced)", quantity: 0.5, unit: "cup", alternative: "Chives" },
      { name: "Nori (Seaweed Sheets)", quantity: 1, unit: "pc", alternative: "Toasted sesame seeds" }
    ],
    instructions: [
      {
        step: 1,
        text: "Make the dashi broth: steep kombu in water for 30 minutes, bring to a bare simmer, remove kombu, add bonito flakes (katsuobushi), boil for 1 minute, then strain.",
        text_hi: "दाशी ब्रोथ बनाएं: कोम्बु (समुद्री घास) को 30 मिनट पानी में भिगोएं, फिर इसे उबलने दें, कोम्बु को निकालें और बोनिटो फ्लेक्स डालें। 1 मिनट उबालकर छान लें।",
        duration: 35
      },
      {
        step: 2,
        text: "Make the Shoyu Tare: In a small saucepan, combine soy sauce, mirin, sake, a slice of ginger, and a clove of garlic. Simmer gently for 10 minutes to cook off alcohol, then strain and set aside.",
        text_hi: "शोयु तारे (सॉस बेस) बनाएं: एक छोटे पैन में सोया सॉस, मिरिन, साके, अदरक और लहसुन की कली मिलाएं। 10 मिनट तक धीमी आंच पर पकाएं, फिर छान कर रख लें।",
        duration: 15
      },
      {
        step: 3,
        text: "Cook ramen eggs: boil eggs for 6 minutes and 30 seconds, plunge into ice water immediately, peel, and marinate in a mix of soy sauce, mirin, and water for at least 2 hours.",
        text_hi: "रामेन अंडे पकाएं: अंडों को ठीक 6 मिनट 30 सेकंड तक उबालें, तुरंत बर्फ के पानी में डालें, छीलें, और सोया सॉस तथा मिरिन के मिश्रण में कम से कम 2 घंटे मैरीनेट करें।",
        duration: 20
      },
      {
        step: 4,
        text: "Prepare toppings: slice the chashu pork, chop green onions, and cut the nori sheet into quarters.",
        text_hi: "टॉपिंग तैयार करें: चाशू पोर्क (या मशरूम) को स्लाइस करें, हरी प्याज काटें और नोरी शीट को चार भागों में काट लें।",
        duration: 10
      },
      {
        step: 5,
        text: "Assembly: Cook the fresh ramen noodles in boiling water for 2 minutes, then drain thoroughly. In each serving bowl, add 2 tablespoons of Shoyu Tare. Pour in 1.5 cups of piping hot dashi broth. Add noodles and fold them. Top with 2 slices of chashu, half a ramen egg, a handful of scallions, and a sheet of nori. Enjoy immediately!",
        text_hi: "परोसना: ताजे रामेन नूडल्स को उबलते पानी में 2 मिनट पकाकर छान लें। कटोरों में 2 चम्मच शोयु तारे और 1.5 कप गरम दाशी ब्रोथ डालें। नूडल्स, अंडा, चाशू और नोरी शीट सजाकर तुरंत परोसें।",
        duration: 10
      }
    ]
  },
  {
    id: "baja-fish-tacos",
    title: "Crispy Baja Fish Tacos",
    description: "Crispy, beer-battered white fish nestled in warm corn tortillas. Topped with a crunchy, zesty cabbage slaw and a smoky chipotle lime crema. The ultimate coastal summer recipe.",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/lB1iW6J-L4Y",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    calories: 510,
    tags: ["Seafood", "Mexican", "Quick Prep", "Comfort Food"],
    ingredients: [
      { name: "White Fish fillets (Cod or Halibut)", quantity: 450, unit: "g", alternative: "Crispy Cauliflower florets or Extra-firm Tofu (sliced)" },
      { name: "All-Purpose Flour", quantity: 1, unit: "cup", alternative: "Gluten-free baking flour (1-to-1 ratio)" },
      { name: "Light Beer (Cold)", quantity: 1, unit: "cup", alternative: "Sparkling water / Club soda (non-alcoholic)" },
      { name: "Corn Tortillas", quantity: 8, unit: "pcs", alternative: "Flour Tortillas or Butter Lettuce leaves (low-carb)" },
      { name: "Shredded Cabbage Mix", quantity: 2, unit: "cups", alternative: "Shredded Lettuce or Broccoli slaw" },
      { name: "Mayonnaise", quantity: 0.5, unit: "cup", alternative: "Greek Yogurt (healthier alternative) or Vegan mayo" },
      { name: "Sour Cream", quantity: 0.25, unit: "cup", alternative: "Coconut Yogurt (unsweetened) or Cashew cream" },
      { name: "Chipotle Peppers in Adobo Sauce", quantity: 1, unit: "tbsp", alternative: "Chipotle Powder or Smoked Paprika (1 tsp)" },
      { name: "Lime Juice", quantity: 2, unit: "tbsp", alternative: "Lemon Juice" },
      { name: "Frying Oil (Canola or Vegetable)", quantity: 2, unit: "cups", alternative: "Air fry fish instead (spray with oil spray)" }
    ],
    instructions: [
      {
        step: 1,
        text: "Prepare the chipotle lime crema: whisk together mayonnaise, sour cream, minced chipotle pepper, and 1 tbsp lime juice in a bowl. Season with salt to taste and chill.",
        text_hi: "चिपोटल लाइम क्रेमा तैयार करें: एक कटोरी में मेयोनेज़, खट्टा क्रीम, पिसा हुआ चिपोटल मिर्च और 1 बड़ा चम्मच नींबू का रस एक साथ फेंटें। नमक मिलाकर फ्रिज में रखें।",
        duration: 5
      },
      {
        step: 2,
        text: "Make the quick slaw: toss the shredded cabbage with the remaining lime juice, chopped cilantro, and a pinch of salt. Set aside.",
        text_hi: "सलाद बनाएं: कटी हुई पत्तागोभी को बचे हुए नींबू के रस, बारीक कटे धनिये और एक चुटकी नमक के साथ मिलाएं और एक तरफ रख दें।",
        duration: 5
      },
      {
        step: 3,
        text: "Prepare fish batter: whisk together flour, 1 tsp salt, pepper, and cold beer in a bowl until smooth. Cut fish into 3-inch strips, pat dry with paper towels, and dust lightly with flour.",
        duration: 5
      },
      {
        step: 4,
        text: "Heat oil in a heavy-bottomed pot to 375°F (190°C). Dip fish strips in the batter, letting excess drip off, and fry in batches for 3-4 minutes until golden brown and crispy. Drain on paper towels.",
        text_hi: "एक भारी बर्तन में तेल 375°F (190°C) पर गर्म करें। मछली के टुकड़ों को बैटर में डुबोएं और 3-4 मिनट तक सुनहरा और कुरकुरा होने तक तलें। पेपर टॉवल पर निकालें।",
        duration: 10
      },
      {
        step: 5,
        text: "Warm corn tortillas on a dry skillet. Place two fish strips in each tortilla. Top with cabbage slaw and drizzle generously with chipotle crema. Serve with fresh lime wedges.",
        text_hi: "सूखे तवे पर मक्के की टॉर्टिला गरम करें। प्रत्येक टॉर्टिला में तली हुई मछली के दो टुकड़े रखें। ऊपर से पत्तागोभी का सलाद डालें और चिपोटल क्रेमा छिड़क कर नींबू के साथ परोसें।",
        duration: 5
      }
    ]
  },
  {
    id: "chocolate-mousse",
    title: "Classic French Chocolate Mousse",
    description: "A luxurious, airy, and intensely chocolatey French dessert. This traditional recipe uses whipped egg whites and rich dark chocolate to create a cloud-like texture that melts on the tongue. Simple yet sophisticated.",
    image: "https://images.unsplash.com/photo-1541795795328-f073b763494e?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/rWl-f8c5bA0",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 5,
    servings: 4,
    calories: 320,
    tags: ["Dessert", "French", "Sweet", "Gluten-Free"],
    ingredients: [
      { name: "High-Quality Dark Chocolate (60-70%)", quantity: 150, unit: "g", alternative: "Semi-sweet Chocolate chips or Dairy-free Dark Chocolate" },
      { name: "Unsalted Butter", quantity: 30, unit: "g", alternative: "Coconut Oil (dairy-free alternative)" },
      { name: "Eggs (Separated)", quantity: 3, unit: "large", alternative: "0.5 cup Aquafaba (chickpea water, whipped - vegan)" },
      { name: "Caster Sugar", quantity: 2, unit: "tbsp", alternative: "Maple Syrup or Coconut Sugar" },
      { name: "Heavy Whipping Cream", quantity: 0.5, unit: "cup", alternative: "Coconut Whipped Cream (dairy-free)" },
      { name: "Vanilla Extract", quantity: 1, unit: "tsp", alternative: "Espresso Powder (1/2 tsp) to intensify chocolate flavor" }
    ],
    instructions: [
      {
        step: 1,
        text: "Chop the dark chocolate. Place it along with the butter in a heat-proof bowl set over a saucepan of gently simmering water (bain-marie). Melt together, stirring occasionally, then remove from heat and let cool slightly.",
        text_hi: "डार्क चॉकलेट को काट लें। इसे मक्खन के साथ एक हीट-प्रूफ कटोरे में रखें और डबल बॉयलर पर पिघलाएं। पिघलने के बाद आंच से हटाएं और थोड़ा ठंडा होने दें।",
        duration: 5
      },
      {
        step: 2,
        text: "Whisk the egg yolks into the melted chocolate one at a time until smooth and glossy. Stir in the vanilla extract.",
        text_hi: "पिघली हुई चॉकलेट में एक-एक करके अंडे की जर्दी (yolks) डालकर चिकना होने तक फेंटें। फिर वैनिला एक्सट्रेक्ट मिलाएं।",
        duration: 3
      },
      {
        step: 3,
        text: "In a separate clean, dry glass bowl, whip the egg whites until soft peaks form. Gradually add caster sugar while continuing to whip until stiff, glossy peaks form.",
        text_hi: "एक साफ, सूखे कटोरे में अंडे की सफेदी (whites) को झागदार होने तक फेंटें। फिर धीरे-धीरे चीनी मिलाते हुए तब तक फेंटें जब तक यह कड़ा और चमकदार न हो जाए।",
        duration: 5
      },
      {
        step: 4,
        text: "In another bowl, whip the heavy cream to medium peaks. Gently fold the whipped cream into the cooled chocolate mixture.",
        text_hi: "एक अन्य कटोरे में हैवी क्रीम को अच्छी तरह फेंट लें। फेंटे हुए क्रीम को धीरे-धीरे ठंडे चॉकलेट मिश्रण में मिलाएं।",
        duration: 3
      },
      {
        step: 5,
        text: "Add a third of the whipped egg whites to the chocolate mix to lighten it, folding gently. Fold in the remaining egg whites in two batches using a rubber spatula in a figure-eight motion. Do not overmix or you will lose the air. Spoon into serving cups and chill for at least 3 hours before serving.",
        text_hi: "फेंटे हुए अंडे की सफेदी के एक तिहाई हिस्से को चॉकलेट मिश्रण में मिलाएं, फिर बाकी हिस्से को भी धीरे से मिलाएं ताकि हवा बाहर न निकले। कप में डालकर 3 घंटे फ्रिज में ठंडा करें।",
        duration: 4
      }
    ]
  },
  {
    id: "indian-butter-chicken",
    title: "Aromatic Butter Chicken",
    description: "Classic Murgh Makhani featuring tender, yogurt-marinated grilled chicken chunks smothered in a creamy, spice-infused, aromatic tomato butter sauce. A staple of Indian restaurants worldwide.",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/F0S12a-337k",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 25,
    servings: 4,
    calories: 580,
    tags: ["Indian", "Chicken", "Gluten-Free", "Comfort Food"],
    ingredients: [
      { name: "Chicken Thighs (Boneless)", quantity: 600, unit: "g", alternative: "Paneer cubes or Chickpeas (drained)" },
      { name: "Plain Yogurt (Greek)", quantity: 0.5, unit: "cup", alternative: "Coconut Yogurt (unsweetened)" },
      { name: "Garam Masala", quantity: 2, unit: "tsp", alternative: "Curry Powder" },
      { name: "Ginger-Garlic Paste", quantity: 2, unit: "tbsp", alternative: "1 tbsp minced fresh ginger + 1 tbsp minced garlic" },
      { name: "Tomato Puree", quantity: 400, unit: "g", alternative: "Crushed Canned Tomatoes (blended smooth)" },
      { name: "Unsalted Butter", quantity: 50, unit: "g", alternative: "Ghee or Coconut Oil" },
      { name: "Heavy Cream", quantity: 0.75, unit: "cup", alternative: "Cashew Cream (soaked cashews blended with water) or Coconut Cream" },
      { name: "Kasuri Methi (Dried Fenugreek Leaves)", quantity: 1, unit: "tbsp", alternative: "Fresh Cilantro (chopped) for garnish" },
      { name: "Kashmiri Chili Powder", quantity: 1, unit: "tsp", alternative: "Sweet Paprika + pinch of cayenne" }
    ],
    instructions: [
      {
        step: 1,
        text: "In a bowl, combine chicken thighs with yogurt, 1 tbsp ginger-garlic paste, 1 tsp garam masala, Kashmiri chili, lime juice, and salt. Marinate for at least 30 minutes (preferably overnight).",
        text_hi: "एक बड़े बर्तन में चिकन को दही, अदरक-लहसुन पेस्ट, गरम मसाला, कश्मीरी मिर्च, नींबू का रस और नमक के साथ मिलाएं। कम से कम 30 मिनट मैरीनेट होने दें।",
        duration: 35
      },
      {
        step: 2,
        text: "Heat a skillet over high heat. Sear the marinated chicken pieces in batches for 3-4 minutes on each side until charred and cooked through. Set aside.",
        text_hi: "तेज आंच पर एक पैन गर्म करें। मैरीनेट किए हुए चिकन को दोनों तरफ से 3-4 मिनट तक सेकें जब तक कि वह हल्का सा ग्रिल न हो जाए। फिर अलग रख दें।",
        duration: 10
      },
      {
        step: 3,
        text: "In a medium pot, melt butter. Sauté the remaining ginger-garlic paste, spices (garam masala, cardamom, cumin), and chili powder for 1 minute. Pour in tomato puree and simmer for 10 minutes until sauce reduces.",
        text_hi: "एक बर्तन में मक्खन पिघलाएं। बचा हुआ अदरक-लहसुन पेस्ट, मसाले और मिर्च पाउडर डालकर 1 मिनट भूनें। टमाटर की प्यूरी डालें और 10 मिनट तक पकने दें।",
        duration: 12
      },
      {
        step: 4,
        text: "Stir in heavy cream and cooked chicken. Simmer on low heat for 8-10 minutes. Rub fenugreek leaves (kasuri methi) between your palms and stir into the sauce.",
        text_hi: "हैवी क्रीम और पके हुए चिकन को ग्रेवी में मिलाएं। धीमी आंच पर 8-10 मिनट पकने दें। कसूरी मेथी को हथेलियों में रगड़कर ग्रेवी में मिलाएं।",
        duration: 10
      },
      {
        step: 5,
        text: "Garnish with a drizzle of heavy cream and fresh coriander. Serve hot alongside butter naan or steamed basmati rice.",
        text_hi: "ऊपर से थोड़ी सी क्रीम और हरा धनिया डालकर सजाएं। गर्मागर्म बटर नान या बासमती चावल के साथ परोसें।",
        duration: 3
      }
    ]
  },
  {
    id: "palak-paneer",
    title: "Dhaba Style Palak Paneer",
    description: "A popular North Indian dish of soft paneer cubes cooked in a smooth, creamy, mildly spiced spinach gravy (palak saag). Flavorful, wholesome, and extremely nutritious.",
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/kU7f_g5z81o",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 340,
    tags: ["Indian", "Vegetarian", "Healthy", "Comfort Food"],
    ingredients: [
      { name: "Paneer (Cottage Cheese)", quantity: 300, unit: "g", alternative: "Extra-Firm Tofu cubes (pan-fried) - for vegan" },
      { name: "Fresh Palak (Spinach)", quantity: 500, unit: "g", alternative: "Frozen chopped spinach (thawed and drained)" },
      { name: "Ghee", quantity: 2, unit: "tbsp", alternative: "Coconut Oil or Vegan butter" },
      { name: "Onion (Finely Chopped)", quantity: 1, unit: "medium", alternative: "Shallots" },
      { name: "Tomatoes (Finely Chopped)", quantity: 2, unit: "medium", alternative: "0.5 cup Canned tomato puree" },
      { name: "Ginger-Garlic Paste", quantity: 1, unit: "tbsp", alternative: "Minced fresh ginger & garlic" },
      { name: "Green Chilies", quantity: 2, unit: "pcs", alternative: "1/2 tsp chili flakes" },
      { name: "Heavy Cream", quantity: 2, unit: "tbsp", alternative: "Coconut Cream (for a dairy-free option)" },
      { name: "Garam Masala", quantity: 1, unit: "tsp", alternative: "Curry powder" },
      { name: "Kasuri Methi (Dried Fenugreek)", quantity: 1, unit: "tsp", alternative: "Fresh cilantro" }
    ],
    instructions: [
      {
        step: 1,
        text: "Blanch spinach: Cook spinach leaves in boiling water for 2 minutes, then immediately plunge into ice-cold water to retain the vibrant green color. Drain and blend into a smooth puree.",
        text_hi: "पालक उबालें: पालक के पत्तों को उबलते पानी में 2 मिनट पकाएं, फिर तुरंत बर्फ के पानी में डालें ताकि हरा रंग बना रहे। पानी छानकर चिकनी प्यूरी बना लें।",
        duration: 5
      },
      {
        step: 2,
        text: "Heat ghee in a pan. Add chopped onions and sauté until translucent. Add ginger-garlic paste and green chilies, and cook for 2 minutes until fragrant.",
        text_hi: "पैन में घी गरम करें। कटे प्याज डालकर भूनें। फिर अदरक-लहसुन पेस्ट और हरी मिर्च डालकर 2 मिनट तक भूनें।",
        duration: 5
      },
      {
        step: 3,
        text: "Add chopped tomatoes, salt, and garam masala. Cook until tomatoes are completely soft and start releasing oil, about 5 minutes.",
        text_hi: "कटे टमाटर, नमक और गरम मसाला डालें। टमाटर के पूरी तरह गलने और तेल छोड़ने तक लगभग 5 मिनट पकाएं।",
        duration: 5
      },
      {
        step: 4,
        text: "Pour in the spinach puree and 1/4 cup of water. Simmer on low heat for 5 minutes. Stir in the paneer cubes and let them simmer in the gravy for 2-3 minutes to absorb flavors.",
        text_hi: "पालक की प्यूरी और 1/4 कप पानी डालें। धीमी आंच पर 5 मिनट पकने दें। पनीर के टुकड़े डालें और ग्रेवी में 2-3 मिनट पकने दें।",
        duration: 8
      },
      {
        step: 5,
        text: "Crush kasuri methi between your palms and stir it in. Add heavy cream, mix gently, and serve hot with naan or jeera rice.",
        text_hi: "कसूरी मेथी को रगड़कर मिलाएं। हैवी क्रीम डालकर धीरे से मिलाएं और गरमा-गरम नान या जीरा राइस के साथ परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "dal-makhani",
    title: "Rich Restaurant Dal Makhani",
    description: "A slow-cooked, ultra-creamy Punjabi black lentil dish. Simmered for hours with butter, cream, and spices to achieve its signature rich, velvety texture. An absolute masterpiece of Indian cooking.",
    image: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/l_aTq_54j3A",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 50,
    servings: 6,
    calories: 390,
    tags: ["Indian", "Vegetarian", "Comfort Food", "Gourmet"],
    ingredients: [
      { name: "Whole Black Lentils (Urad Dal)", quantity: 1, unit: "cup", alternative: "Canned brown lentils (reduces cook time to 20m)" },
      { name: "Red Kidney Beans (Rajma)", quantity: 0.25, unit: "cup", alternative: "Black beans" },
      { name: "Unsalted Butter", quantity: 60, unit: "g", alternative: "Vegan butter or Ghee" },
      { name: "Heavy Cream", quantity: 0.5, unit: "cup", alternative: "Cashew cream or Coconut cream" },
      { name: "Tomato Puree", quantity: 1, unit: "cup", alternative: "Freshly blended Roma tomatoes" },
      { name: "Ginger-Garlic Paste", quantity: 1.5, unit: "tbsp", alternative: "Minced fresh ginger & garlic" },
      { name: "Kashmiri Red Chili Powder", quantity: 1.5, unit: "tsp", alternative: "Paprika + pinch of cayenne" },
      { name: "Garam Masala", quantity: 1, unit: "tsp", alternative: "Curry powder" },
      { name: "Kasuri Methi", quantity: 1, unit: "tbsp", alternative: "Cilantro" }
    ],
    instructions: [
      {
        step: 1,
        text: "Wash and soak black lentils and kidney beans in water overnight (at least 8 hours). Drain and pressure cook with 4 cups of water and salt until completely soft.",
        text_hi: "उड़द दाल और राजमा को रात भर (8 घंटे) भिगोएँ। पानी छानकर कुकर में 4 कप पानी और नमक के साथ पूरी तरह गलने तक पकाएँ।",
        duration: 25
      },
      {
        step: 2,
        text: "In a deep, heavy-bottomed pot, melt half the butter. Add ginger-garlic paste and sauté for 1 minute. Add Kashmiri chili powder and tomato puree, cooking for 5-6 minutes until oil separates.",
        text_hi: "एक बड़े बर्तन में आधा मक्खन पिघलाएं। अदरक-लहसुन पेस्ट डालकर 1 मिनट भूनें। कश्मीरी मिर्च और टमाटर प्यूरी डालकर तेल छोड़ने तक 5 मिनट पकाएं।",
        duration: 7
      },
      {
        step: 3,
        text: "Add the boiled lentils and kidney beans along with their cooking water. Stir well and bring to a simmer. Mash some lentils against the side of the pot with a ladle to thicken the gravy.",
        text_hi: "पकी हुई दाल और राजमा को पानी सहित मसाले में डालें। हिलाएं और उबलने दें। दाल को कलछी से थोड़ा मैश करें ताकि ग्रेवी गाढ़ी हो जाए।",
        duration: 10
      },
      {
        step: 4,
        text: "Simmer on low heat for 30 minutes, stirring frequently so it doesn't stick. The longer it simmers, the creamier it gets. Slowly add the remaining butter, cream, and garam masala.",
        text_hi: "धीमी आंच पर 30 मिनट तक पकने दें और लगातार हिलाते रहें। बचा हुआ मक्खन, मलाई (क्रीम) और गरम मसाला डालकर मिलाएं।",
        duration: 30
      },
      {
        step: 5,
        text: "Stir in crushed kasuri methi. Garnish with a swirl of fresh cream and serve hot with tandoori roti or garlic naan.",
        text_hi: "कसूरी मेथी रगड़कर मिलाएं। ऊपर से क्रीम से सजाकर तंदूरी रोटी या गार्लिक नान के साथ परोसें।",
        duration: 3
      }
    ]
  },
  {
    id: "chicken-biryani",
    title: "Hyderabadi Chicken Dum Biryani",
    description: "The crown jewel of Indian rice dishes. Layers of marinated chicken, aromatic long-grain Basmati rice, caramelized onions (birista), fresh mint, coriander, and saffron milk, slow-cooked to perfection under seal ('Dum').",
    image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/yYmB72H-l-k",
    difficulty: "hard",
    prepTime: 30,
    cookTime: 45,
    servings: 4,
    calories: 780,
    tags: ["Indian", "Chicken", "Gourmet", "Comfort Food"],
    ingredients: [
      { name: "Basmati Rice (Long Grain)", quantity: 2, unit: "cups", alternative: "Sela Rice or Jasmine Rice" },
      { name: "Chicken Thighs (Bone-in)", quantity: 600, unit: "g", alternative: "Paneer cubes + Mixed Vegetables (for Veg Biryani)" },
      { name: "Yogurt (Dahi)", quantity: 1, unit: "cup", alternative: "Coconut Yogurt (unsweetened)" },
      { name: "Fried Onions (Birista)", quantity: 1.5, unit: "cups", alternative: "Sautéed onions (takes longer)" },
      { name: "Ghee", quantity: 0.25, unit: "cup", alternative: "Cooking oil or Vegan butter" },
      { name: "Ginger-Garlic Paste", quantity: 2, unit: "tbsp", alternative: "Minced ginger & garlic" },
      { name: "Biryani Masala Powder", quantity: 2, unit: "tbsp", alternative: "Garam Masala + Cardamom + Cumin" },
      { name: "Fresh Mint & Coriander (Chopped)", quantity: 1, unit: "cup", alternative: "Cilantro only" },
      { name: "Saffron Strands", quantity: 15, unit: "pieces", alternative: "1/4 tsp turmeric (for color)" },
      { name: "Warm Milk", quantity: 4, unit: "tbsp", alternative: "Warm water" }
    ],
    instructions: [
      {
        step: 1,
        text: "Marinate chicken: In a large bowl, mix chicken with yogurt, ginger-garlic paste, biryani masala, half the fried onions, mint, coriander, 2 tbsp ghee, chili, and salt. Marinate for 1 hour.",
        text_hi: "चिकन मैरीनेट करें: एक बड़े कटोरे में चिकन, दही, अदरक-लहसुन पेस्ट, बिरयानी मसाला, आधे तले हुए प्याज, पुदीना, धनिया, घी और नमक को मिलाकर 1 घंटे रखें।",
        duration: 35
      },
      {
        step: 2,
        text: "Par-cook rice: Wash and soak Basmati rice for 30 minutes. Boil in salted water with whole spices (cardamom, cloves, bay leaf) until 70% cooked (grain should have a bite). Drain and set aside.",
        text_hi: "चावल पकाएं: बासमती चावल को धोकर 30 मिनट भिगोएं। खड़े मसालों (इलायची, लौंग, तेजपत्ता) के साथ पानी में 70% तक उबालें, फिर छान कर रख लें।",
        duration: 25
      },
      {
        step: 3,
        text: "Prepare assembly: Soak saffron strands in warm milk. In a heavy pot, layer the marinated chicken at the bottom. Spread the par-cooked rice evenly over the chicken.",
        text_hi: "परत लगाएं: केसर को गुनगुने दूध में भिगोएं। एक भारी बर्तन के तले में मैरीनेट किया हुआ चिकन फैलाएं। इसके ऊपर पके हुए चावल की परत बिछाएं।",
        duration: 10
      },
      {
        step: 4,
        text: "Garnish layer: Top the rice with remaining fried onions, chopped mint, coriander, saffron milk, and drizzle the remaining ghee on top.",
        text_hi: "सजावट: चावल के ऊपर बचे हुए तले प्याज, पुदीना, धनिया, केसर दूध और थोड़ा घी छिड़कें।",
        duration: 5
      },
      {
        step: 5,
        text: "Dum cook: Seal the pot with aluminum foil or dough and cover with a tight lid. Cook on medium heat for 5 minutes, then place on a hot tawa (flat pan) on low heat for 35 minutes. Let it rest for 10 minutes before opening and serving with raita.",
        text_hi: "दम पर पकाएं: बर्तन को ढक्कन और फॉयल से अच्छी तरह बंद (सील) करें। 5 मिनट मध्यम आंच पर, फिर 35 मिनट धीमी आंच पर तवे के ऊपर दम पर पकाएं। गरमा-गरम परोसें।",
        duration: 45
      }
    ]
  },
  {
    id: "punjabi-samosa",
    title: "Punjabi Samosa with Chutney",
    description: "Classic Indian street food: triangular, crispy golden pastry shells stuffed with a savory spiced potato and green peas filling. Served with sweet tamarind and spicy mint chutneys.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/ZfWlYtS5-8g",
    difficulty: "medium",
    prepTime: 25,
    cookTime: 20,
    servings: 4,
    calories: 290,
    tags: ["Indian", "Vegetarian", "Snack", "Comfort Food"],
    ingredients: [
      { name: "All-Purpose Flour (Maida)", quantity: 2, unit: "cups", alternative: "Whole wheat flour (denser shell) or puff pastry sheets" },
      { name: "Carom Seeds (Ajwain)", quantity: 1, unit: "tsp", alternative: "Cumin seeds" },
      { name: "Ghee", quantity: 4, unit: "tbsp", alternative: "Vegetable Oil" },
      { name: "Potatoes (Boiled & Cubed)", quantity: 4, unit: "medium", alternative: "Boiled Sweet Potatoes" },
      { name: "Green Peas (Matar)", quantity: 0.5, unit: "cup", alternative: "Edamame or skipped" },
      { name: "Ginger & Green Chili (Minced)", quantity: 1, unit: "tbsp", alternative: "Chili powder + Ginger powder" },
      { name: "Garam Masala", quantity: 1, unit: "tsp", alternative: "Curry powder" },
      { name: "Amchur (Dry Mango Powder)", quantity: 1, unit: "tsp", alternative: "1 tbsp Lemon juice" },
      { name: "Frying Oil", quantity: 2, unit: "cups", alternative: "Bake at 400°F (200°C) for 25m or Air fry" }
    ],
    instructions: [
      {
        step: 1,
        text: "Make dough: Mix flour, ajwain, salt, and warm ghee. Rub ghee into the flour with fingertips until crumbly. Add cold water in small parts to knead a very stiff dough. Cover and rest for 30 minutes.",
        text_hi: "मैदा गूंथें: मैदा, अजवाइन, नमक और घी मिलाएं। थोड़ा-थोड़ा ठंडा पानी मिलाकर कड़ा आटा गूंथें। ढककर 30 मिनट रख दें।",
        duration: 35
      },
      {
        step: 2,
        text: "Make stuffing: Heat 1 tbsp oil in a pan. Sauté ginger and green chili. Add peas and cubed potatoes. Stir in garam masala, amchur, coriander powder, and salt. Mash potatoes slightly and cook for 3 minutes.",
        text_hi: "स्टफिंग बनाएं: पैन में तेल गरम करके अदरक, हरी मिर्च भूनें। मटर और आलू डालें। फिर गरम मसाला, अमचूर और नमक डालकर 3 मिनट पकाएं और हल्का मैश करें।",
        duration: 10
      },
      {
        step: 3,
        text: "Shape samosas: Divide dough into equal balls. Roll each ball into an oval sheet. Cut horizontally in half. Take one half, form a cone by overlapping the straight edge and sealing with water.",
        text_hi: "समोसे का आकार दें: लोई बेलें और दो हिस्सों में काटें। एक हिस्से के किनारों पर पानी लगाकर मोड़ें और कोन का आकार दें।",
        duration: 15
      },
      {
        step: 4,
        text: "Stuff & Seal: Fill the cone with potato stuffing. Fold a small pleat on the back round edge, moisten edges with water, and press flat to seal tightly.",
        text_hi: "भरें और बंद करें: कोन में आलू का मसाला भरें। किनारों पर पानी लगाकर दबाते हुए समोसे को बंद कर लें।",
        duration: 10
      },
      {
        step: 5,
        text: "Fry: Heat oil on low-medium heat (oil should not be too hot). Fry samosas slowly in batches for 10-12 minutes until crispy and light golden brown. Serve hot with chutneys.",
        text_hi: "तलें: धीमी-मध्यम आंच पर तेल गरम करें। समोसों को सुनहरा होने तक 10-12 मिनट धीरे-धीरे तलें। चटनी के साथ परोसें।",
        duration: 15
      }
    ]
  },
  {
    id: "mango-lassi",
    title: "Classic Mango Lassi",
    description: "A cool, refreshing, sweet yogurt drink blended with ripe sweet mango pulp, milk, a pinch of aromatic cardamom, and garnished with saffron. The ultimate summer drink.",
    image: "https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/i9Yy517mH8k",
    difficulty: "easy",
    prepTime: 5,
    cookTime: 0,
    servings: 2,
    calories: 220,
    tags: ["Quick Prep", "Indian", "Drinks", "Sweet", "Vegetarian", "15 Mins"],
    ingredients: [
      { name: "Ripe Mango Pulp (Kesar or Alphonso)", quantity: 1, unit: "cup", alternative: "Frozen Mango chunks (thawed and pureed)" },
      { name: "Plain Yogurt (Thick)", quantity: 1, unit: "cup", alternative: "Coconut yogurt or Soy yogurt (for vegan)" },
      { name: "Whole Milk (Cold)", quantity: 0.5, unit: "cup", alternative: "Almond milk, Oat milk, or Cold Water" },
      { name: "Sugar or Honey", quantity: 2, unit: "tbsp", alternative: "Maple syrup, Stevia, or skipped if mangoes are sweet" },
      { name: "Cardamom Powder", quantity: 0.25, unit: "tsp", alternative: "Pinch of nutmeg or vanilla" },
      { name: "Ice Cubes", quantity: 4, unit: "pcs", alternative: "Skipped" }
    ],
    instructions: [
      {
        step: 1,
        text: "Peel the fresh mangoes and chop them, discarding the seed. Put the chopped mangoes (or canned pulp) in a blender.",
        text_hi: "पके आम को छीलकर छोटे टुकड़ों में काट लें। टुकड़ों को ब्लेंडर जार में डालें।",
        duration: 3
      },
      {
        step: 2,
        text: "Add thick yogurt, cold milk, sugar, cardamom powder, and ice cubes into the blender jar.",
        text_hi: "अब ब्लेंडर में दही, ठंडा दूध, चीनी, इलायची पाउडर और बर्फ के टुकड़े डालें।",
        duration: 1
      },
      {
        step: 3,
        text: "Blend on high speed for 1-2 minutes until completely smooth, frothy, and creamy. Pour into tall glasses, garnish with saffron strands or pistachio slivers, and serve chilled.",
        text_hi: "सामग्री को 1-2 मिनट चिकना और मलाईदार होने तक पीस लें। गिलासों में निकालें, केसर से सजाएं और ठंडा-ठंडा परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "paneer-tikka-masala",
    title: "Paneer Tikka Masala",
    description: "Soft paneer cubes and crunchy bell peppers marinated in spiced yogurt, grilled to smoky perfection, and then tossed in a creamy, tangy, rich onion-tomato tikka masala gravy.",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/9g0n6vR8a-s",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    calories: 450,
    tags: ["Indian", "Vegetarian", "Comfort Food", "Gourmet"],
    ingredients: [
      { name: "Paneer (Cubes)", quantity: 300, unit: "g", alternative: "Tofu cubes (pressed and cubed)" },
      { name: "Bell Peppers (Cubed)", quantity: 1.5, unit: "cups", alternative: "Zucchini slices or Broccoli florets" },
      { name: "Onion (Cubed for grill)", quantity: 1, unit: "medium", alternative: "Pearl onions" },
      { name: "Yogurt (Thick)", quantity: 0.5, unit: "cup", alternative: "Cashew paste" },
      { name: "Ginger-Garlic Paste", quantity: 1.5, unit: "tbsp", alternative: "Minced fresh ginger & garlic" },
      { name: "Tomato Paste/Puree", quantity: 1, unit: "cup", alternative: "Canned tomato sauce" },
      { name: "Garam Masala", quantity: 1.5, unit: "tsp", alternative: "Curry powder" },
      { name: "Heavy Cream", quantity: 3, unit: "tbsp", alternative: "Coconut cream" },
      { name: "Butter", quantity: 2, unit: "tbsp", alternative: "Coconut oil" },
      { name: "Kasuri Methi", quantity: 1, unit: "tsp", alternative: "Fresh coriander" }
    ],
    instructions: [
      {
        step: 1,
        text: "Marinate: Mix yogurt, ginger-garlic paste, garam masala, chili, salt, and lemon juice. Toss paneer cubes, onion cubes, and bell pepper cubes in the marinade. Rest for 20 minutes.",
        text_hi: "मैरीनेट करें: दही में अदरक-लहसुन पेस्ट, मसाले और नमक मिलाएं। इसमें पनीर, शिमला मिर्च और प्याज डालकर 20 मिनट के लिए रख दें।",
        duration: 20
      },
      {
        step: 2,
        text: "Grill: Thread paneer and veggies onto skewers (or place in a single layer on a baking pan). Grill or pan-sear on medium-high heat with a drizzle of oil until charred on all sides, about 6-8 minutes.",
        text_hi: "ग्रिल करें: पनीर और सब्जियों को सीख (skewers) पर लगाएं। तवे पर थोड़ा तेल डालकर मध्यम-तेज आंच पर सभी तरफ से हल्का सा ग्रिल करें (6-8 मिनट)।",
        duration: 8
      },
      {
        step: 3,
        text: "Make gravy base: Melt butter in a pan. Sauté chopped onions until golden. Add ginger-garlic paste, spices, and tomato puree. Simmer for 10 minutes until butter separates.",
        text_hi: "ग्रेवी बनाएं: पैन में मक्खन गरम करके प्याज भूनें। अदरक-लहसुन पेस्ट, मसाले और टमाटर प्यूरी डालकर 10 मिनट तेल छोड़ने तक पकाएं।",
        duration: 12
      },
      {
        step: 4,
        text: "Combine: Add heavy cream and 1/2 cup of water to the gravy, bringing it to a simmer. Fold in the grilled paneer and vegetable tikka pieces carefully so paneer doesn't break.",
        text_hi: "मिलाएं: ग्रेवी में हैवी क्रीम और थोड़ा पानी डालकर उबालें। अब ग्रिल किया हुआ पनीर और सब्जियां सावधानी से ग्रेवी में डालें।",
        duration: 5
      },
      {
        step: 5,
        text: "Finish: Simmer on low heat for 3 minutes. Sprinkle crushed kasuri methi on top and serve hot with garlic naan.",
        text_hi: "परोसें: 3 मिनट धीमी आंच पर पकाएं, ऊपर से कसूरी मेथी छिड़कें और गर्मागर्म गार्लिक नान के साथ परोसें।",
        duration: 3
      }
    ]
  },
  {
    id: "tandoori-chicken",
    title: "Restaurant Style Tandoori Chicken",
    description: "Smoky, juicy bone-in chicken pieces marinated in spiced yogurt and grilled to char-spotted perfection. The ultimate Indian classic appetizer.",
    image: "https://images.unsplash.com/photo-1610057099443-fde8c4d90ef8?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/0lFHJe3RK0c", // Ranveer Brar Tandoori Chicken
    difficulty: "medium",
    prepTime: 15,
    cookTime: 25,
    servings: 3,
    calories: 410,
    tags: ["Indian", "Chicken", "Grill", "Comfort Food"],
    ingredients: [
      { name: "Chicken Drumsticks/Thighs", quantity: 600, unit: "g", alternative: "Paneer blocks or Cauliflower heads" },
      { name: "Plain Greek Yogurt", quantity: 0.5, unit: "cup", alternative: "Cashew curd" },
      { name: "Kashmiri Lal Mirch", quantity: 2, unit: "tsp", alternative: "Paprika" },
      { name: "Ginger-Garlic Paste", quantity: 1.5, unit: "tbsp", alternative: "Minced fresh ginger & garlic" },
      { name: "Kasturi Methi", quantity: 1, unit: "tsp", alternative: "Fresh chopped coriander" },
      { name: "Lemon Juice", quantity: 2, unit: "tbsp", alternative: "Lime juice" },
      { name: "Mustard Oil (Sarson ka tel)", quantity: 2, unit: "tbsp", alternative: "Vegetable oil or butter" },
      { name: "Tandoori Masala Powder", quantity: 1.5, unit: "tsp", alternative: "Garam Masala + Cardamom" }
    ],
    instructions: [
      {
        step: 1,
        text: "Cut deep slits in the chicken pieces. Rub with salt and 1 tbsp lemon juice and rest for 15 minutes.",
        text_hi: "चिकन के टुकड़ों में गहरे कट लगाएँ। नमक और 1 चम्मच नींबू का रस लगाकर 15 मिनट रखें।",
        duration: 15
      },
      {
        step: 2,
        text: "Prepare marinade: Mix yogurt, spices, mustard oil, ginger-garlic paste, and tandoori masala. Rub it all over the chicken, ensuring it goes into the slits. Marinate for 2 hours.",
        text_hi: "मैरीनेड तैयार करें: दही, मसाले, सरसों का तेल, अदरक-लहसुन पेस्ट और तंदूरी मसाला मिलाएँ। इसे चिकन के टुकड़ों पर अच्छी तरह लगाकर 2 घंटे मैरीनेट करें।",
        duration: 120
      },
      {
        step: 3,
        text: "Preheat your oven to 425°F (220°C) or prepare a grill. Arrange chicken on a wire rack or baking tray.",
        text_hi: "ओवन को 425°F (220°C) पर प्रीहीट करें या ग्रिल तैयार करें। चिकन को बेकिंग ट्रे पर रखें।",
        duration: 10
      },
      {
        step: 4,
        text: "Bake for 20-25 minutes, turning once halfway and brushing with melted butter, until the chicken is cooked through and has charred edges.",
        text_hi: "20-25 मिनट बेक करें, बीच में एक बार पलटें और पिघला मक्खन लगाएँ, जब तक चिकन अच्छी तरह पक न जाए और किनारे हल्के काले (charred) न हो जाएँ।",
        duration: 25
      },
      {
        step: 5,
        text: "Broil on high for 2-3 minutes for extra smokiness. Garnish with chaat masala, onion rings, and lime juice.",
        text_hi: "अतिरिक्त स्मोकी स्वाद के लिए 2-3 मिनट तेज आंच पर ब्रोइल करें। ऊपर से चाट मसाला, प्याज के छल्ले और नींबू का रस छिड़क कर गरमा-गरम परोसें।",
        duration: 3
      }
    ]
  },
  {
    id: "garlic-naan",
    title: "Homemade Soft Garlic Naan",
    description: "Super soft, restaurant-style flatbread brushed with garlic butter and fresh coriander. Baked on a stovetop skillet without an oven or tandoor.",
    image: "https://images.unsplash.com/photo-1633945274426-46a48d093e86?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/aGZ-2S82Q3s", // Kunal Kapur Garlic Naan
    difficulty: "medium",
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    calories: 280,
    tags: ["Indian", "Vegetarian", "Bread", "Comfort Food"],
    ingredients: [
      { name: "All-Purpose Flour (Maida)", quantity: 2, unit: "cups", alternative: "1 cup Wheat Flour + 1 cup Maida" },
      { name: "Instant Yeast (or Baking Powder)", quantity: 1, unit: "tsp", alternative: "1 tsp baking powder + 1/4 tsp baking soda" },
      { name: "Plain Yogurt (Curd)", quantity: 0.25, unit: "cup", alternative: "Warm water" },
      { name: "Minced Garlic", quantity: 3, unit: "tbsp", alternative: "Garlic butter directly" },
      { name: "Butter (Melted)", quantity: 4, unit: "tbsp", alternative: "Ghee or olive oil" },
      { name: "Fresh Cilantro (Chopped)", quantity: 0.25, unit: "cup", alternative: "Parsley" },
      { name: "Nigella Seeds (Kalonji)", quantity: 1, unit: "tsp", alternative: "Black sesame seeds" }
    ],
    instructions: [
      {
        step: 1,
        text: "Make dough: Whisk flour, yeast, salt, sugar, yogurt, and warm water. Knead into a soft dough. Rest in a warm place for 1-2 hours until doubled.",
        text_hi: "मैदा गूंथें: मैदा, यीस्ट, नमक, चीनी, दही और गुनगुना पानी मिलाकर एक नरम आटा गूंथ लें। 1-2 घंटे के लिए किसी गरम जगह पर रखें।",
        duration: 80
      },
      {
        step: 2,
        text: "Divide dough into 4-6 balls. Roll each ball into an oval teardrop shape, about 1/4 inch thick.",
        text_hi: "आटे को 4-6 लोइयों में बांटें। प्रत्येक लोई को ओवल (अंडाकार) आकार में लगभग 1/4 इंच मोटा बेलें।",
        duration: 10
      },
      {
        step: 3,
        text: "Sprinkle minced garlic, kalonji, and chopped coriander on the rolled dough. Press gently with a rolling pin so they stick.",
        text_hi: "बेले हुए नान पर कटा हुआ लहसुन, कलौंजी और हरा धनिया छिड़कें। बेलन से धीरे से दबाएं ताकि वे चिपक जाएं।",
        duration: 5
      },
      {
        step: 4,
        text: "Flip the naan and brush water on the plain backside. Place it on a hot iron tawa (skillet), water side down, so it sticks.",
        text_hi: "नान को पलटें और सादे हिस्से पर पानी लगाएँ। गरम लोहे के तवे पर पानी वाला हिस्सा नीचे करके रखें ताकि वह तवे से चिपक जाए।",
        duration: 3
      },
      {
        step: 5,
        text: "Cook until bubbles appear. Flip the tawa upside down directly over the flame to char the garlic side. Remove, brush with garlic butter, and serve hot.",
        text_hi: "बुलबुले उठने तक पकाएं। फिर तवे को उल्टा करके नान की लहसुन वाली साइड को सीधे आंच पर सेकें। उतारकर लहसुन-मक्खन लगाएं और गरमा-गरम परोसें।",
        duration: 3
      }
    ]
  },
  {
    id: "gulab-jamun",
    title: "Festive Sweet Gulab Jamun",
    description: "Soft, melt-in-the-mouth Indian berry-sized milk dumplings fried to golden brown and steeped in a warm, cardamom and rose water infused sugar syrup.",
    image: "https://images.unsplash.com/photo-1605333396915-47ed6b68a00e?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/o04K5o47_3s", // Sanjyot Keer Gulab Jamun
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 5,
    calories: 330,
    tags: ["Indian", "Vegetarian", "Sweet", "Dessert"],
    ingredients: [
      { name: "Khoya (Mawa) / Milk Powder", quantity: 1.5, unit: "cups", alternative: "1 cup Milk powder + 1 tbsp Ghee + 2 tbsp Milk" },
      { name: "All-Purpose Flour (Maida)", quantity: 0.25, unit: "cup", alternative: "Fine Semolina (Suji)" },
      { name: "Baking Powder", quantity: 0.25, unit: "tsp", alternative: "Baking Soda (pinch)" },
      { name: "Sugar", quantity: 2, unit: "cups", alternative: "Jaggery powder" },
      { name: "Water", quantity: 1.5, unit: "cups", alternative: "Rose water only" },
      { name: "Cardamom Pods (Crushed)", quantity: 4, unit: "pcs", alternative: "Cardamom powder" },
      { name: "Rose Water", quantity: 1, unit: "tsp", alternative: "Saffron strands" },
      { name: "Ghee or Oil for frying", quantity: 2, unit: "cups", alternative: "Vegetable oil" }
    ],
    instructions: [
      {
        step: 1,
        text: "Make sugar syrup: Boil sugar, water, and crushed cardamoms for 5-7 minutes until sticky. Stir in rose water and set aside on warm.",
        text_hi: "चाशनी बनाएँ: चीनी, पानी और कुचली हुई इलायची को 5-7 मिनट उबालें जब तक यह हल्की चिपचिपी न हो जाए। गुलाब जल मिलाकर गुनगुना रखें।",
        duration: 10
      },
      {
        step: 2,
        text: "Make dough: Mix milk powder, flour, and baking powder. Add ghee and milk, mixing gently to form a soft dough. Do not knead, just bring it together.",
        text_hi: "लोई का आटा बनाएँ: मिल्क पाउडर, मैदा और बेकिंग पाउडर मिलाएँ। घी और दूध डालकर हल्के हाथों से गूंथें (ज्यादा न मसलें) ताकि नरम आटा बन जाए।",
        duration: 10
      },
      {
        step: 3,
        text: "Divide dough and roll into small, smooth balls. Ensure there are no cracks, or they will break while frying.",
        text_hi: "छोटी-छोटी लोइयां बनाएं और चिकनी बॉल्स (गोलियां) रोल करें। ध्यान रहे कि इनमें दरारें (cracks) न हों, वर्ना वे तलते समय फट जाएँगी।",
        duration: 10
      },
      {
        step: 4,
        text: "Fry: Heat ghee on low heat. Deep fry the balls slowly, stirring the ghee constantly around them (not directly touching them) until they turn golden brown. Drain and soak in warm syrup for 2 hours.",
        text_hi: "तलें: धीमी आंच पर घी गर्म करें। बॉल्स को सुनहरा भूरा होने तक तलें और चम्मच से घी को हिलाते रहें। निकालकर गुनगुनी चाशनी में 2 घंटे डूबने दें।",
        duration: 15
      }
    ]
  },
  {
    id: "punjabi-chole",
    title: "Spiced Punjabi Chole Masala",
    description: "A classic North Indian chickpea curry simmered in a spicy, tangy tomato-onion gravy infused with ginger, garlic, and freshly ground spices. Hearty, high-protein, and completely vegan.",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5F_C23wV6O0",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    calories: 290,
    tags: ["Indian", "Vegan", "Vegetarian", "Gluten-Free", "Healthy"],
    ingredients: [
      { name: "Chickpeas (Kabuli Chana) - Soaked & Boiled", quantity: 2, unit: "cups", alternative: "Canned chickpeas (drained and rinsed)" },
      { name: "Onion (Finely Chopped)", quantity: 2, unit: "medium", alternative: "Shallots" },
      { name: "Tomatoes (Puréed)", quantity: 3, unit: "medium", alternative: "1 cup Canned tomato purée" },
      { name: "Ginger-Garlic Paste", quantity: 1, unit: "tbsp", alternative: "Minced fresh ginger & garlic" },
      { name: "Chole Masala Powder", quantity: 2, unit: "tbsp", alternative: "Garam Masala + Coriander Powder + Amchur (1 tsp each)" },
      { name: "Amchur (Dry Mango Powder)", quantity: 1, unit: "tsp", alternative: "1 tbsp Lemon juice" },
      { name: "Oil or Ghee", quantity: 2, unit: "tbsp", alternative: "Coconut Oil (for vegan option)" },
      { name: "Kasuri Methi", quantity: 1, unit: "tsp", alternative: "Fresh cilantro" }
    ],
    instructions: [
      {
        step: 1,
        text: "Heat oil or ghee in a deep pot. Add finely chopped onions and sauté on medium heat until golden brown, about 5-7 minutes.",
        text_hi: "एक गहरे बर्तन में तेल या घी गर्म करें। बारीक कटे प्याज डालें और मध्यम आंच पर सुनहरा भूरा होने तक (लगभग 5-7 मिनट) भूनें।",
        duration: 7
      },
      {
        step: 2,
        text: "Add ginger-garlic paste and sauté for another 2 minutes until the raw aroma disappears. Pour in the tomato purée and cook until the oil starts separating from the masala.",
        text_hi: "अदरक-लहसुन का पेस्ट डालें और कच्ची महक जाने तक 2 मिनट और भूनें। फिर टमाटर की प्यूरी डालें और मसाला से तेल अलग होने तक पकाएं।",
        duration: 5
      },
      {
        step: 3,
        text: "Add the chole masala powder, turmeric, red chili powder, amchur, and salt. Sauté the spices for 1 minute, adding a splash of water if the masala sticks.",
        text_hi: "छोले मसाला पाउडर, हल्दी, लाल मिर्च पाउडर, अमचूर और नमक डालें। मसाले को 1 मिनट तक भूनें, यदि मसाला बर्तन में चिपक रहा हो तो थोड़ा पानी डालें।",
        duration: 2
      },
      {
        step: 4,
        text: "Add the boiled chickpeas along with 1 cup of their cooking water. Mash a small handful of chickpeas with a ladle to thicken the gravy. Simmer on low heat for 10 minutes to absorb flavors.",
        text_hi: "उबले हुए छोले और 1 कप छोले उबलने वाला पानी डालें। ग्रेवी को गाढ़ा करने के लिए थोड़े से छोलों को कलछी से मैश कर दें। स्वाद को सोखने के लिए धीमी आंच पर 10 मिनट तक पकने दें।",
        duration: 10
      },
      {
        step: 5,
        text: "Rub kasuri methi between your palms and stir it in. Garnish with chopped fresh coriander leaves and serve hot with bhature, naan, or basmati rice.",
        text_hi: "कसूरी मेथी को हथेलियों में रगड़कर ग्रेवी में मिलाएं। बारीक कटे धनिये से सजाकर भटूरे, नान या चावल के साथ गर्मागर्म परोसें।",
        duration: 3
      }
    ]
  },
  {
    id: "french-onion-soup",
    title: "Classic French Onion Soup",
    description: "Rich, deeply caramelized onions simmered in a savory beef broth, topped with a toasted baguette slice smothered in melted, golden Gruyère cheese. The ultimate comforting bowl.",
    image: "https://images.unsplash.com/photo-1620418029653-a75d5a7d36c1?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 40,
    servings: 4,
    calories: 310,
    tags: ["French", "Soup", "Comfort Food", "Warm"],
    ingredients: [
      { name: "Yellow Onions (Thinly Sliced)", quantity: 4, unit: "large", alternative: "Red onions or Sweet onions" },
      { name: "Unsalted Butter", quantity: 3, unit: "tbsp", alternative: "Olive Oil" },
      { name: "Beef Broth (Low Sodium)", quantity: 4, unit: "cups", alternative: "Rich Vegetable Broth + 1 tbsp Soy Sauce" },
      { name: "Dry White Wine", quantity: 0.5, unit: "cup", alternative: "Beef broth mixed with 1 tsp apple cider vinegar" },
      { name: "French Baguette (Sliced)", quantity: 4, unit: "slices", alternative: "Sourdough bread slices" },
      { name: "Gruyère Cheese (Grated)", quantity: 1, unit: "cup", alternative: "Swiss Cheese or Provolone" },
      { name: "Garlic (Minced)", quantity: 2, unit: "cloves", alternative: "1/2 tsp Garlic powder" },
      { name: "Thyme (Fresh sprigs)", quantity: 3, unit: "pcs", alternative: "1/2 tsp dried thyme" }
    ],
    instructions: [
      {
        step: 1,
        text: "Melt butter in a large heavy pot over medium heat. Add the sliced onions and cook, stirring frequently, until they are soft and translucent, about 10 minutes.",
        text_hi: "एक बड़े भारी बर्तन में मध्यम आंच पर मक्खन पिघलाएं। कटे हुए प्याज डालें और उनके नरम होने तक लगभग 10 मिनट तक लगातार हिलाते हुए पकाएं।",
        duration: 10
      },
      {
        step: 2,
        text: "Reduce heat to medium-low and continue cooking the onions for another 25-30 minutes, stirring occasionally, until they are deep golden brown and caramelized.",
        text_hi: "आंच को मध्यम-धीमी कर दें और प्याज को और 25-30 मिनट तक पकाएं, जब तक कि वे गहरे सुनहरे भूरे और कैरामलाइज़्ड न हो जाएं।",
        duration: 30
      },
      {
        step: 3,
        text: "Add minced garlic and thyme, and cook for 1 minute. Pour in the white wine to deglaze the pot, scraping up all the browned bits from the bottom. Simmer until the wine reduces by half, about 3 minutes.",
        text_hi: "बारीक कटा लहसुन और थाइम (अजवायन के पत्ते) डालें और 1 मिनट पकाएं। बर्तन को डीग्लेज करने के लिए सफेद वाइन डालें और तले से चिपके हिस्सों को खुरचें। वाइन के आधा रहने तक (लगभग 3 मिनट) उबालें।",
        duration: 4
      },
      {
        step: 4,
        text: "Pour in the beef broth. Bring to a boil, then reduce heat and simmer uncovered for 10 minutes to blend the flavors. Season with salt and pepper to taste.",
        text_hi: "बीफ ब्रॉथ (या वेज ब्रॉथ) डालें। उबाल आने दें, फिर आंच धीमी करें और स्वाद को मिलाने के लिए 10 मिनट तक बिना ढके पकने दें। स्वादानुसार नमक और काली मिर्च मिलाएं।",
        duration: 10
      },
      {
        step: 5,
        text: "Toast the baguette slices. Ladle the hot soup into oven-safe bowls, place a toasted baguette slice on top, and cover with grated Gruyère cheese. Broil in the oven for 3-4 minutes until the cheese is melted and bubbling golden brown. Serve hot!",
        text_hi: "बैगेट स्लाइस को टोस्ट करें। गर्म सूप को ओवन-सेफ कटोरे में डालें, ऊपर एक टोस्टेड बैगेट स्लाइस रखें, और कसा हुआ ग्रुयेर पनीर छिड़कें। पनीर के पिघलने और सुनहरा होने तक 3-4 मिनट ब्रोइल करें। गरमा-गरम परोसें!",
        duration: 5
      }
    ]
  },
  {
    id: "chilli-paneer",
    title: "Restaurant Style Chilli Paneer",
    description: "A popular Indo-Chinese starter where cubes of crisp pan-fried paneer are tossed in a sweet, sour, spicy, and tangy chilli sauce, loaded with crunchy bell peppers and onions.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/Pj1M31B5v64",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    calories: 360,
    tags: ["Vegetarian", "Indo-Chinese", "Paneer", "Spicy", "Starter"],
    ingredients: [
      { name: "Paneer (Cottage Cheese)", quantity: 250, unit: "g", alternative: "Firm Tofu blocks (pressed and cubed)" },
      { name: "Cornstarch", quantity: 3, unit: "tbsp", alternative: "All-purpose flour (Maida) or Arrowroot powder" },
      { name: "All-purpose Flour (Maida)", quantity: 2, unit: "tbsp", alternative: "Rice flour (for extra crispiness)" },
      { name: "Soy Sauce", quantity: 2, unit: "tbsp", alternative: "Tamari or Coconut Aminos" },
      { name: "Chili Sauce (Red or Green)", quantity: 2, unit: "tbsp", alternative: "Sriracha or Schezwan sauce" },
      { name: "Tomato Ketchup", quantity: 1, unit: "tbsp", alternative: "Tomato paste mixed with 1/2 tsp sugar" },
      { name: "Garlic (Finely Chopped)", quantity: 6, unit: "cloves", alternative: "1.5 tsp Garlic paste" },
      { name: "Ginger (Finely Chopped)", quantity: 1, unit: "inch", alternative: "1 tsp Ginger paste" },
      { name: "Green Bell Pepper (Capsicum, Cubed)", quantity: 1, unit: "cup", alternative: "Red or Yellow Bell Peppers" },
      { name: "Red Onion (Cubed & Layers Separated)", quantity: 1, unit: "cup", alternative: "White or Yellow onions" },
      { name: "Green Chillies (Sliced)", quantity: 3, unit: "pcs", alternative: "1/2 tsp dry Red Chili flakes" },
      { name: "Spring Onion (Chopped)", quantity: 0.25, unit: "cup", alternative: "Fresh Cilantro leaves" },
      { name: "Black Pepper Powder", quantity: 0.5, unit: "tsp", alternative: "White Pepper powder" },
      { name: "Cooking Oil", quantity: 3, unit: "tbsp", alternative: "Sesame oil or Butter" }
    ],
    instructions: [
      {
        step: 1,
        text: "In a bowl, gently toss paneer cubes with 2 tbsp of cornstarch, flour, black pepper powder, and salt. Sprinkle a tiny bit of water to make the coating stick evenly to the paneer.",
        text_hi: "एक कटोरे में पनीर के टुकड़ों को 2 बड़े चम्मच कॉर्नस्टार्च, मैदा, काली मिर्च और नमक के साथ मिलाएं। पनीर पर कोटिंग चिपकाने के लिए थोड़ा पानी छिड़कें।",
        duration: 5
      },
      {
        step: 2,
        text: "Heat 2 tbsp oil in a pan over medium heat. Shallow fry paneer cubes until they are light golden and crispy on all sides. Drain and set them aside on a plate.",
        text_hi: "एक पैन में 2 बड़े चम्मच तेल गर्म करें और पनीर के टुकड़ों को सभी तरफ से सुनहरा और कुरकुरा होने तक हल्का तलें। फिर निकाल कर अलग रख लें।",
        duration: 7
      },
      {
        step: 3,
        text: "In the same pan, add the remaining 1 tbsp of oil. Sauté the chopped ginger, garlic, and green chillies on high heat for 1 minute. Add cubed onions and capsicum, sautéing for 2 minutes until they are translucent but still crunchy.",
        text_hi: "उसी पैन में बचा हुआ 1 बड़ा चम्मच तेल डालें। अदरक, लहसुन और हरी मिर्च को तेज आंच पर 1 मिनट के लिए भूनें। प्याज और शिमला मिर्च डालें और 2 मिनट तक भूनें जब तक वे थोड़े पक जाएं पर क्रंची रहें।",
        duration: 3
      },
      {
        step: 4,
        text: "In a small cup, mix soy sauce, chili sauce, ketchup, vinegar, and a pinch of salt. Pour this sauce mix into the pan and stir. Dissolve the remaining 1 tbsp cornstarch in 3 tbsp water to make a slurry and pour it in, cooking for 1 minute until bubbly.",
        text_hi: "एक छोटे कप में सोया सॉस, चिली सॉस, केचप और सिरका मिलाएं। इसे पैन में डालें और अच्छी तरह चलाएं। बचे हुए 1 चम्मच कॉर्नस्टार्च को 3 चम्मच पानी में घोलकर स्लरी बनाएं और सॉस में डालें, 1 मिनट तक उबलने दें।",
        duration: 2
      },
      {
        step: 5,
        text: "Add the fried paneer cubes back to the pan. Toss quickly on high heat for 1-2 minutes until the sauce thickens and glazes the paneer cubes. Garnish with chopped spring onion greens and serve immediately!",
        text_hi: "तले हुए पनीर के टुकड़े डालें। तेज आंच पर 1-2 मिनट तक चलाएं जब तक कि सॉस गाढ़ा न हो जाए और पनीर पर लिपट न जाए। कटे हुए हरे प्याज से सजाएं और गरमागरम परोसें!",
        duration: 3
      }
    ]
  },
  {
    id: "handi-biryani",
    title: "Traditional Handi Veg Biryani",
    description: "An aromatic, layers-packed vegetable biryani slow-cooked in a traditional clay pot (handi) under seal (dum) with basmati rice, mixed vegetables, saffron, and fresh herbs.",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/jZ_vX8S72fI",
    difficulty: "hard",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    calories: 480,
    tags: ["Vegetarian", "Rice", "Biryani", "Indian Main", "Claypot Cooking"],
    ingredients: [
      { name: "Basmati Rice", quantity: 2, unit: "cups", alternative: "Jasmine rice or Sona Masoori" },
      { name: "Mixed Vegetables (Carrot, Beans, Peas, Cauliflower)", quantity: 2, unit: "cups", alternative: "Paneer cubes or Tofu" },
      { name: "Plain Yogurt (Dahi)", quantity: 0.5, unit: "cup", alternative: "Coconut yogurt or Cashew cream" },
      { name: "Sliced Crispy Fried Onions (Birista)", quantity: 1, unit: "cup", alternative: "Shallots" },
      { name: "Ginger-Garlic Paste", quantity: 1, unit: "tbsp", alternative: "1 tbsp freshly grated ginger & garlic" },
      { name: "Biryani Masala Powder", quantity: 1.5, unit: "tbsp", alternative: "Garam masala + ground coriander + ground cumin" },
      { name: "Saffron Strands", quantity: 10, unit: "pcs", alternative: "A pinch of turmeric powder" },
      { name: "Ghee (Clarified Butter)", quantity: 3, unit: "tbsp", alternative: "Vegetable oil or Vegan butter" },
      { name: "Fresh Mint Leaves (Pudina)", quantity: 0.5, unit: "cup", alternative: "Fresh Dill leaves" },
      { name: "Fresh Cilantro (Dhania)", quantity: 0.5, unit: "cup", alternative: "Fresh Parsley" },
      { name: "Whole Spices (Cardamom, Cloves, Cinnamon, Bay leaf)", quantity: 1, unit: "tbsp", alternative: "Garam masala powder" },
      { name: "Warm Milk", quantity: 3, unit: "tbsp", alternative: "Warm water or Almond milk" }
    ],
    instructions: [
      {
        step: 1,
        text: "Soak the basmati rice for 30 minutes. Boil 6 cups of water with whole spices and salt. Add the rice and cook until 70% done (still has a bite). Drain completely and set aside.",
        text_hi: "बासमती चावल को 30 मिनट के लिए भिगो दें। 6 कप पानी में साबुत मसालों और नमक के साथ उबालें। चावल डालें और 70% पकने तक पकाएं। पानी को पूरी तरह छान लें और अलग रख दें।",
        duration: 10
      },
      {
        step: 2,
        text: "In a mixing bowl, marinate the mixed vegetables with yogurt, ginger-garlic paste, half of the fried onions, biryani masala, chopped mint, cilantro, and salt. Set aside for 15-20 minutes.",
        text_hi: "एक कटोरे में मिश्रित सब्जियों को दही, अदरक-लहसुन का पेस्ट, आधे तले हुए प्याज, बिरयानी मसाला, पुदीना, धनिया और नमक के साथ मैरीनेट करें। इसे 15-20 मिनट के लिए छोड़ दें।",
        duration: 15
      },
      {
        step: 3,
        text: "Heat 2 tbsp ghee in a clay pot (handi) or deep heavy pot. Add the marinated vegetables and cook over medium heat for 8-10 minutes, stirring occasionally until they are partially tender.",
        text_hi: "हांडी (मिट्टी के बर्तन) में 2 चम्मच घी गर्म करें। मैरीनेट की हुई सब्जियां डालें और मध्यम आंच पर 8-10 मिनट तक पकाएं जब तक कि वे थोड़ी पक जाएं।",
        duration: 10
      },
      {
        step: 4,
        text: "Layer the parboiled rice evenly over the vegetable curry base in the pot. Sprinkle the remaining fried onions, saffron dissolved in warm milk, chopped mint, cilantro, and the remaining 1 tbsp ghee on top.",
        text_hi: "पकी हुई सब्जियों के ऊपर पके हुए चावल की परत लगाएं। ऊपर से बचे हुए तले हुए प्याज, केसर का दूध, कटा हुआ पुदीना, धनिया और बचा हुआ 1 चम्मच घी छिड़कें।",
        duration: 5
      },
      {
        step: 5,
        text: "Seal the lid of the clay pot using wheat dough or double layer foil. Slow cook (dum) on very low heat (using a flat pan/tawa underneath the pot to distribute heat) for 20 minutes. Rest for 10 minutes before fluffing and serving with Raita!",
        text_hi: "हांडी के ढक्कन को गूंथे हुए आटे या एल्यूमीनियम फॉयल से सील करें। धीमी आंच पर (जलने से बचाने के लिए नीचे तवा रखकर) 20 मिनट तक पकाएं (दम दें)। 10 मिनट आराम दें, फिर रायते के साथ परोसें!",
        duration: 30
      }
    ]
  },
  {
    id: "honey-chili-potato",
    title: "Crispy Honey Chili Potatoes",
    description: "An addictive Indo-Chinese dish made with crisp, deep-fried french-fried potatoes tossed in a sweet, spicy, and sticky sauce made with honey, chili paste, garlic, and sesame seeds.",
    image: "https://images.unsplash.com/photo-1518013006308-4178494957e8?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5aC8qL826w4",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 20,
    servings: 3,
    calories: 390,
    tags: ["Vegetarian", "Potatoes", "Indo-Chinese", "Sweet & Spicy", "Appetizer"],
    ingredients: [
      { name: "Potatoes (Cut into thick French Fries)", quantity: 3, unit: "large", alternative: "Sweet potatoes or Cassava strips" },
      { name: "Cornstarch", quantity: 4, unit: "tbsp", alternative: "All-purpose flour" },
      { name: "Rice Flour", quantity: 2, unit: "tbsp", alternative: "All-purpose flour" },
      { name: "Honey", quantity: 2, unit: "tbsp", alternative: "Maple syrup or Agave nectar" },
      { name: "Chili Sauce (Red or Green)", quantity: 2, unit: "tbsp", alternative: "Sriracha" },
      { name: "Soy Sauce", quantity: 1, unit: "tbsp", alternative: "Tamari" },
      { name: "Garlic (Finely Chopped)", quantity: 6, unit: "cloves", alternative: "Garlic paste" },
      { name: "White Sesame Seeds (Toasted)", quantity: 1, unit: "tbsp", alternative: "Black sesame seeds or chopped peanuts" },
      { name: "Spring Onion (Chopped)", quantity: 2, unit: "tbsp", alternative: "Fresh coriander" },
      { name: "Vinegar", quantity: 1, unit: "tsp", alternative: "Lemon juice" },
      { name: "Cooking Oil", quantity: 1, unit: "cup", alternative: "For deep frying, or cooking spray for air-frying" }
    ],
    instructions: [
      {
        step: 1,
        text: "Parboil the potato strips in salted boiling water for 5 minutes. Drain completely and pat dry with a clean kitchen towel.",
        text_hi: "आलू की स्ट्रिप्स को नमकीन पानी में 5 मिनट के लिए उबालें। पूरी तरह से छान लें और किचन टॉवल से सुखाएं।",
        duration: 10
      },
      {
        step: 2,
        text: "Toss the potato strips with 3 tbsp cornstarch, rice flour, and salt in a bowl. Shake off any excess. Deep fry in hot oil or air fry at 400°F (200°C) until golden-brown and extremely crispy. Drain on paper towels.",
        text_hi: "आलू की पट्टियों पर 3 चम्मच कॉर्नस्टार्च, चावल का आटा और नमक छिड़कें। एक्स्ट्रा आटा झाड़ लें। तेल गर्म करके सुनहरा और अत्यंत कुरकुरा होने तक डीप फ्राई या एयर फ्राई करें। पेपर टॉवल पर निकालें।",
        duration: 15
      },
      {
        step: 3,
        text: "In another pan, heat 1 tbsp of oil. Sauté the chopped garlic and spring onion whites for 1 minute. Stir in the soy sauce, chili sauce, vinegar, and 2 tbsp water. Let it simmer on low heat.",
        text_hi: "दूसरे पैन में 1 चम्मच तेल गर्म करें। लहसुन और हरे प्याज के सफेद हिस्से को 1 मिनट के लिए भूनें। सोया सॉस, चिली सॉस, सिरका और 2 चम्मच पानी मिलाएं। धीमी आंच पर उबलने दें।",
        duration: 3
      },
      {
        step: 4,
        text: "Make a slurry by mixing the remaining 1 tbsp cornstarch with 2 tbsp water. Pour it into the simmering sauce, stirring until it thickens. Turn off the heat and stir in the honey.",
        text_hi: "बचे हुए 1 चम्मच कॉर्नस्टार्च और 2 चम्मच पानी के साथ स्लरी बनाएं। इसे सॉस में डालें और गाढ़ा होने तक पकाएं। आंच बंद कर दें और शहद डालकर मिलाएं।",
        duration: 2
      },
      {
        step: 5,
        text: "Add the fried crispy potatoes to the sauce. Quickly toss until every potato is coated. Garnish with toasted sesame seeds and spring onion greens. Serve immediately to keep them crispy!",
        text_hi: "तले हुए कुरकुरे आलू को सॉस में डालें। तुरंत टॉस करें जब तक कि हर आलू पर सॉस की कोटिंग न हो जाए। भुने हुए तिल और हरे प्याज से सजाकर तुरंत परोसें!",
        duration: 2
      }
    ]
  },
  {
    id: "crispy-corn",
    title: "Spicy Crispy Fried Corn",
    description: "A bar-style crunchy snack where sweet corn kernels are coated in flour, deep-fried until puffed and crispy, then seasoned with spices, onions, lime juice, and cilantro.",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/MhH5k5hF8-s",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    calories: 290,
    tags: ["Vegetarian", "Corn", "Snacks", "Crispy", "Easy Recipe"],
    ingredients: [
      { name: "Sweet Corn Kernels (Fresh or Frozen)", quantity: 2, unit: "cups", alternative: "Canned corn kernels (well drained)" },
      { name: "Cornstarch", quantity: 3, unit: "tbsp", alternative: "Rice flour" },
      { name: "Rice Flour", quantity: 2, unit: "tbsp", alternative: "All-purpose flour" },
      { name: "Chaat Masala", quantity: 1, unit: "tsp", alternative: "Lemon juice + black salt + roasted cumin powder" },
      { name: "Red Chili Powder", quantity: 1, unit: "tsp", alternative: "Cayenne pepper or paprika" },
      { name: "Red Onion (Finely Chopped)", quantity: 0.5, unit: "cup", alternative: "Spring onions" },
      { name: "Fresh Cilantro (Chopped)", quantity: 3, unit: "tbsp", alternative: "Fresh parsley" },
      { name: "Lime Juice", quantity: 1, unit: "tbsp", alternative: "Dry mango powder (Amchur)" },
      { name: "Salt", quantity: 0.5, unit: "tsp", alternative: "Black salt (Kala namak)" },
      { name: "Cooking Oil", quantity: 1, unit: "cup", alternative: "For deep frying, or cooking spray for air-frying" }
    ],
    instructions: [
      {
        step: 1,
        text: "Boil sweet corn kernels in salted water for 3-4 minutes. Drain them completely and transfer them to a dry mixing bowl.",
        text_hi: "यदि ताजे या फ्रोजन कॉर्न का उपयोग कर रहे हैं, तो उन्हें नमकीन पानी में 3-4 मिनट के लिए उबालें। पानी पूरी तरह छान लें और एक कटोरे में निकालें।",
        duration: 5
      },
      {
        step: 2,
        text: "Add cornstarch, rice flour, salt, and 1/2 tsp of red chili powder to the warm corn. Toss well so each kernel is coated. If too dry, sprinkle 1 tsp water to help the flour stick.",
        text_hi: "कॉर्न में कॉर्नस्टार्च, चावल का आटा, नमक और 1/2 छोटा चम्मच मिर्च पाउडर मिलाएं। जब तक प्रत्येक दाने पर अच्छी तरह से कोटिंग न हो जाए, तब तक टॉस करें। यदि बहुत सूखा है तो 1 छोटा चम्मच पानी छिड़कें।",
        duration: 3
      },
      {
        step: 3,
        text: "Heat oil in a deep pan. Fry corn in small batches on medium-high heat. Cover the pan partially since corn kernels can pop. Fry until golden-crisp, then drain on paper towels.",
        text_hi: "एक गहरे पैन में तेल गर्म करें। मध्यम-तेज आंच पर कॉर्न के दानों को छोटे बैचों में तलें। पैन को आंशिक रूप से ढक दें क्योंकि कॉर्न फूट सकते हैं। सुनहरा और कुरकुरा होने तक तलें। पेपर टॉवल पर निकालें।",
        duration: 7
      },
      {
        step: 4,
        text: "Transfer the fried corn to a dry bowl. Add the chopped onion, cilantro, chaat masala, remaining 1/2 tsp of red chili powder, and lime juice.",
        text_hi: "तले हुए कुरकुरे कॉर्न को एक सूखे कटोरे में डालें। कटा हुआ प्याज, धनिया, चाट मसाला, बचा हुआ 1/2 छोटा चम्मच लाल मिर्च पाउडर और नींबू का रस मिलाएं।",
        duration: 2
      },
      {
        step: 5,
        text: "Toss everything together quickly so the corn kernels remain crispy. Taste and adjust seasoning, and serve immediately!",
        text_hi: "सभी चीजों को तुरंत एक साथ टॉस करें ताकि कॉर्न क्रंची बना रहे। आवश्यकतानुसार सीजनिंग को एडजस्ट करें और तुरंत परोसें!",
        duration: 2
      }
    ]
  },
  {
    id: "hara-bhara-kabab",
    title: "Hara Bhara Kabab",
    description: "A nutritious and tasty vegetarian starter patty made with fresh spinach, green peas, mashed potatoes, and fragrant Indian spices.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5F2w-2v7NlE",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 4,
    calories: 180,
    tags: ["Vegetarian", "Indian", "Starter", "Healthy"],
    ingredients: [
      { name: "Fresh Spinach (Palak)", quantity: 2, unit: "cups", alternative: "Kale or Swiss chard" },
      { name: "Green Peas", quantity: 1, unit: "cup", alternative: "Edamame or boiled green beans" },
      { name: "Potatoes (Boiled & Mashed)", quantity: 2, unit: "large", alternative: "Sweet potatoes or boiled raw banana" },
      { name: "Ginger-Garlic Paste", quantity: 1, unit: "tsp", alternative: "1/2 tsp ginger powder + 1/2 tsp garlic powder" },
      { name: "Green Chillies", quantity: 2, unit: "pcs", alternative: "1/2 tsp red chili flakes" },
      { name: "Garam Masala Powder", quantity: 1, unit: "tsp", alternative: "Allspice powder" },
      { name: "Breadcrumbs", quantity: 4, unit: "tbsp", alternative: "Roasted chickpea flour (Besan)" },
      { name: "Cornstarch", quantity: 2, unit: "tbsp", alternative: "Rice flour or arrowroot powder" },
      { name: "Cashew Halves (for garnish)", quantity: 12, unit: "pcs", alternative: "Almond slices" },
      { name: "Cooking Oil", quantity: 2, unit: "tbsp", alternative: "Ghee or butter" }
    ],
    instructions: [
      {
        step: 1,
        text: "Blanch spinach in hot water for 2 minutes, plunge in ice water, squeeze out water, and grind with green peas and green chillies into a coarse paste.",
        text_hi: "पालक को 2 मिनट गर्म पानी में उबालें, फिर ठंडे पानी में डालें, निचोड़कर हरी मटर और मिर्च के साथ पीस लें।",
        duration: 5
      },
      {
        step: 2,
        text: "Mix the spinach-peas paste with mashed potatoes, ginger-garlic paste, garam masala, salt, breadcrumbs, and cornstarch to make a dough.",
        text_hi: "पालक-मटर पेस्ट को उबले आलू, अदरक-लहसुन पेस्ट, गरम मसाला, नमक, ब्रेडक्रम्ब्स और कॉर्नस्टार्च के साथ मिलाकर मिश्रण तैयार करें।",
        duration: 5
      },
      {
        step: 3,
        text: "Divide into equal portions, shape into flat patties, and press a cashew half in the center of each patty.",
        text_hi: "मिश्रण को बराबर भागों में बांटकर टिकिया का आकार दें और प्रत्येक के बीच में काजू का टुकड़ा दबाएं।",
        duration: 5
      },
      {
        step: 4,
        text: "Heat 2 tbsp oil in a skillet. Pan-fry the kababs on medium heat until golden and crispy on both sides.",
        text_hi: "एक पैन में 2 चम्मच तेल गर्म करें। कबाब को मध्यम आंच पर दोनों तरफ से सुनहरा और कुरकुरा होने तक सेकें।",
        duration: 8
      },
      {
        step: 5,
        text: "Serve hot with green mint chutney or tomato ketchup.",
        text_hi: "पुदीने की चटनी या टोमैटो केचप के साथ गर्मागर्म परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "paneer-tikka-starter",
    title: "Classic Paneer Tikka",
    description: "Skewered paneer cubes, bell peppers, and onions marinated in a spiced yogurt blend and roasted to perfection.",
    image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/g2Jd4P0oZlg",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 15,
    servings: 3,
    calories: 280,
    tags: ["Vegetarian", "Indian", "Starter", "Paneer"],
    ingredients: [
      { name: "Paneer", quantity: 300, unit: "g", alternative: "Firm Tofu blocks" },
      { name: "Thick Yogurt (Hung Curd)", quantity: 0.5, unit: "cup", alternative: "Vegan sour cream or cashew paste" },
      { name: "Ginger-Garlic Paste", quantity: 1, unit: "tbsp", alternative: "1/2 tbsp freshly grated ginger & garlic" },
      { name: "Kashmiri Red Chili Powder", quantity: 1, unit: "tbsp", alternative: "Paprika" },
      { name: "Kasuri Methi", quantity: 1, unit: "tsp", alternative: "Dried oregano" },
      { name: "Mustard Oil", quantity: 1, unit: "tbsp", alternative: "Olive oil or vegetable oil" },
      { name: "Bell Peppers (mixed colors, cubed)", quantity: 1.5, unit: "cups", alternative: "Zucchini slices" },
      { name: "Onions (cubed & layers separated)", quantity: 1, unit: "cup", alternative: "Shallots" },
      { name: "Chaat Masala", quantity: 1, unit: "tsp", alternative: "Lemon juice" }
    ],
    instructions: [
      {
        step: 1,
        text: "Whisk hung curd with ginger-garlic paste, chili powder, salt, kasuri methi, mustard oil, and lemon juice in a large bowl.",
        text_hi: "दही को अदरक-लहसुन पेस्ट, मिर्च, नमक, कसूरी मेथी, सरसों तेल और नींबू रस के साथ अच्छी तरह फेंटें।",
        duration: 5
      },
      {
        step: 2,
        text: "Gently mix paneer cubes, bell peppers, and onions in the marinade. Cover and refrigerate for 20-30 minutes.",
        text_hi: "पनीर, शिमला मिर्च और प्याज को दही के मिश्रण में मिलाएं। ढककर 20-30 मिनट के लिए फ्रिज में रखें।",
        duration: 25
      },
      {
        step: 3,
        text: "Thread the marinated paneer and vegetables alternately onto wooden or metal skewers.",
        text_hi: "मैरीनेट किए पनीर और सब्जियों को एक-एक करके सीख (स्क्यूअर्स) पर पिरोएं।",
        duration: 5
      },
      {
        step: 4,
        text: "Roast on a hot griddle with a brush of butter or bake in a preheated oven at 400°F (200°C) for 12-15 minutes until charred at the edges.",
        text_hi: "गर्म तवे पर मक्खन लगाकर या ओवन में 200 डिग्री सेल्सियस पर 12-15 मिनट तक किनारों के सिकने तक सेकें।",
        duration: 15
      },
      {
        step: 5,
        text: "Sprinkle chaat masala on top and serve hot with lemon wedges and mint chutney.",
        text_hi: "ऊपर से चाट मसाला छिड़कें और नींबू व पुदीने की चटनी के साथ परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "onion-pakora",
    title: "Crispy Onion Pakora (Kanda Bhaji)",
    description: "Crispy, deep-fried onion fritters made with gram flour, rice flour, green chillies, and warm spices. A perfect rainy-day tea snack.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5F2w-2v7NlE",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 220,
    tags: ["Vegetarian", "Indian", "Starter", "Snacks"],
    ingredients: [
      { name: "Onions (thinly sliced)", quantity: 2, unit: "large", alternative: "Cabbage or Potato julienned" },
      { name: "Gram Flour (Besan)", quantity: 1, unit: "cup", alternative: "Chickpea flour" },
      { name: "Rice Flour", quantity: 2, unit: "tbsp", alternative: "Cornstarch" },
      { name: "Green Chillies (chopped)", quantity: 2, unit: "pcs", alternative: "Red pepper flakes" },
      { name: "Ajwain (Carom Seeds)", quantity: 0.5, unit: "tsp", alternative: "Cumin seeds" },
      { name: "Turmeric Powder", quantity: 0.25, unit: "tsp", alternative: "Curry powder" },
      { name: "Red Chili Powder", quantity: 0.5, unit: "tsp", alternative: "Cayenne pepper" },
      { name: "Fresh Cilantro (chopped)", quantity: 3, unit: "tbsp", alternative: "Fresh parsley" },
      { name: "Oil", quantity: 1, unit: "cup", alternative: "For deep frying, or cooking spray for air frying" }
    ],
    instructions: [
      {
        step: 1,
        text: "Rub sliced onions with salt in a bowl and let them sit for 5 minutes. The onions will release their natural water.",
        text_hi: "कटे हुए प्याज में नमक मिलाकर 5 मिनट रखें ताकि प्याज अपना प्राकृतिक पानी छोड़ दें।",
        duration: 5
      },
      {
        step: 2,
        text: "Add chopped green chillies, cilantro, ajwain, turmeric, and chili powder. Mix well.",
        text_hi: "हरी मिर्च, धनिया पत्ता, अजवाइन, हल्दी और लाल मिर्च पाउडर डालकर मिलाएं।",
        duration: 2
      },
      {
        step: 3,
        text: "Add gram flour and rice flour. Mix using your hands, squeezing the onions to form a tight, moist mixture. Do not add water unless absolutely needed.",
        text_hi: "बेसन & चावल का आटा मिलाएं। बिना पानी डाले हाथों से निचोड़ते हुए मिश्रण को मिलाएं।",
        duration: 3
      },
      {
        step: 4,
        text: "Drop small portions of the onion mixture into hot oil. Fry on medium heat until golden brown and super crunchy.",
        text_hi: "गर्म तेल में छोटे-छोटे हिस्से डालें। मध्यम आंच पर सुनहरा और कुरकुरा होने तक तलें।",
        duration: 8
      },
      {
        step: 5,
        text: "Drain on paper towels and serve hot with green chutney and hot tea (Chai).",
        text_hi: "पेपर टॉवल पर निकालें और हरी चटनी व गरमागरम चाय के साथ परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "gobi-manchurian",
    title: "Crispy Gobi Manchurian",
    description: "A legendary Indo-Chinese starter of crispy fried cauliflower florets tossed in a sweet, sour, spicy, and umami-rich Manchurian sauce.",
    image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/H3k9YvGZ1Lw",
    difficulty: "medium",
    prepTime: 20,
    cookTime: 20,
    servings: 3,
    calories: 340,
    tags: ["Vegetarian", "Indian", "Starter", "Indo-Chinese"],
    ingredients: [
      { name: "Cauliflower Florets (Gobi)", quantity: 3, unit: "cups", alternative: "Broccoli or Mushroom heads" },
      { name: "Cornstarch", quantity: 4, unit: "tbsp", alternative: "All-purpose flour" },
      { name: "All-purpose Flour (Maida)", quantity: 3, unit: "tbsp", alternative: "Rice flour" },
      { name: "Soy Sauce", quantity: 2, unit: "tbsp", alternative: "Tamari" },
      { name: "Chili Sauce (Red or Green)", quantity: 2, unit: "tbsp", alternative: "Sriracha" },
      { name: "Tomato Ketchup", quantity: 2, unit: "tbsp", alternative: "Chili-garlic sauce" },
      { name: "Ginger (finely chopped)", quantity: 1, unit: "tbsp", alternative: "Ginger paste" },
      { name: "Garlic (finely chopped)", quantity: 1.5, unit: "tbsp", alternative: "Garlic paste" },
      { name: "Spring Onion (Chopped)", quantity: 0.25, unit: "cup", alternative: "Cilantro" },
      { name: "Oil", quantity: 1, unit: "cup", alternative: "For frying + 1 tbsp for sauce" }
    ],
    instructions: [
      {
        step: 1,
        text: "Blanch gobi florets in salted boiling water for 3 minutes, then drain and cool completely.",
        text_hi: "फूलगोभी के टुकड़ों को नमकीन पानी में 3 मिनट उबालें, फिर पानी छानकर ठंडा होने दें।",
        duration: 5
      },
      {
        step: 2,
        text: "Make a smooth, thick batter of maida, cornstarch, salt, pepper, and water. Dip gobi florets and deep-fry until golden-brown and crispy.",
        text_hi: "मैदा, कॉर्नस्टार्च, नमक, मिर्च & पानी का घोल बनाएं। गोभी को डुबोकर तेल में कुरकुरा होने तक तलें।",
        duration: 10
      },
      {
        step: 3,
        text: "Heat 1 tbsp oil in a pan. Sauté chopped ginger, garlic, and spring onion whites for 2 minutes on high heat.",
        text_hi: "एक पैन में 1 चम्मच तेल गर्म करें। बारीक कटे अदरक, लहसुन और प्याज के सफेद हिस्से को तेज आंच पर 2 मिनट भूनें।",
        duration: 3
      },
      {
        step: 4,
        text: "Add soy sauce, chili sauce, tomato ketchup, and a splash of water. Mix a cornstarch slurry (1 tsp cornstarch + 2 tbsp water) and cook until sauce thickens.",
        text_hi: "सोया सॉस, चिली सॉस, टोमैटो केचप और थोड़ा पानी डालें। कॉर्नस्टार्च की स्लरी डालकर सॉस को गाढ़ा होने दें।",
        duration: 3
      },
      {
        step: 5,
        text: "Add the fried crispy gobi. Toss quickly for 1 minute on high heat so the sauce coats the florets. Garnish with spring onion greens and serve immediately.",
        text_hi: "तली गोभी डालें और तेज आंच पर 1 मिनट चलाएं ताकि सॉस लिपट जाए। हरे प्याज से सजाकर तुरंत परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "aloo-tikki",
    title: "Crispy Street Style Aloo Tikki",
    description: "Crispy, spiced potato patties stuffed with soft green peas or paneer, shallow fried until gold, and served with tangy street chutneys.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5F2w-2v7NlE",
    difficulty: "easy",
    prepTime: 15,
    cookTime: 15,
    servings: 3,
    calories: 210,
    tags: ["Vegetarian", "Indian", "Starter", "Snacks"],
    ingredients: [
      { name: "Potatoes (Boiled & Mashed)", quantity: 4, unit: "medium", alternative: "Sweet potatoes" },
      { name: "Breadcrumbs", quantity: 4, unit: "tbsp", alternative: "Roasted rice flour or cornstarch" },
      { name: "Cornstarch", quantity: 2, unit: "tbsp", alternative: "Arrowroot powder" },
      { name: "Chaat Masala", quantity: 1, unit: "tsp", alternative: "Lemon juice + salt" },
      { name: "Red Chili Powder", quantity: 0.5, unit: "tsp", alternative: "Cayenne pepper" },
      { name: "Green Peas (Boiled)", quantity: 0.5, unit: "cup", alternative: "Grated paneer" },
      { name: "Fresh Cilantro (chopped)", quantity: 3, unit: "tbsp", alternative: "Fresh mint" },
      { name: "Oil", quantity: 3, unit: "tbsp", alternative: "Ghee for shallow frying" }
    ],
    instructions: [
      {
        step: 1,
        text: "Mix mashed potatoes with breadcrumbs, cornstarch, salt, chili powder, and chaat masala to form a smooth dough.",
        text_hi: "उबले आलू को ब्रेडक्रम्ब्स, कॉर्नस्टार्च, नमक, लाल मिर्च और चाट मसाला के साथ मिलाकर चिकना मिश्रण बनाएं।",
        duration: 5
      },
      {
        step: 2,
        text: "In a stuffing bowl, mash green peas with a pinch of garam masala and salt for the filling.",
        text_hi: "एक कटोरी में उबले मटर को एक चुटकी गरम मसाला और नमक के साथ मैश कर स्टफिंग तैयार करें।",
        duration: 3
      },
      {
        step: 3,
        text: "Take a portion of potato mixture, make a well in the center, stuff with a spoonful of peas, and seal to shape into a flat patty.",
        text_hi: "आलू के मिश्रण का एक भाग लें, बीच में जगह बनाकर मटर की स्टफिंग भरें और सील कर टिकिया का आकार दें।",
        duration: 5
      },
      {
        step: 4,
        text: "Heat oil in a flat pan. Shallow fry tikkis on medium-low heat until both sides are perfectly golden brown and crispy.",
        text_hi: "तवे पर तेल गर्म करें। टिक्की को धीमी-मध्यम आंच पर दोनों तरफ से सुनहरा और कुरकुरा होने तक सेकें।",
        duration: 10
      },
      {
        step: 5,
        text: "Garnish with sweet yogurt, green chutney, and tamarind chutney. Serve hot!",
        text_hi: "मीठी दही, हरी चटनी और इमली की चटनी के साथ सजाकर गर्मागर्म परोसें!",
        duration: 2
      }
    ]
  },
  {
    id: "breakfast-poha",
    title: "Kanda Poha",
    description: "A light, healthy, and staple Indian breakfast made of flattened rice flakes, turmeric, potatoes, onions, curry leaves, and crunchy roasted peanuts.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/5F2w-2v7NlE",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 15,
    servings: 3,
    calories: 240,
    tags: ["Vegetarian", "Indian", "Breakfast", "Healthy"],
    ingredients: [
      { name: "Poha (Flattened Rice - Thick)", quantity: 2, unit: "cups", alternative: "Rolled oats (cooked dry)" },
      { name: "Onion (finely chopped)", quantity: 1, unit: "medium", alternative: "Leeks" },
      { name: "Potato (finely cubed)", quantity: 1, unit: "small", alternative: "Sweet potato" },
      { name: "Peanuts", quantity: 3, unit: "tbsp", alternative: "Cashew pieces" },
      { name: "Mustard Seeds", quantity: 1, unit: "tsp", alternative: "Cumin seeds" },
      { name: "Curry Leaves", quantity: 10, unit: "leaves", alternative: "Bay leaf" },
      { name: "Turmeric Powder", quantity: 0.5, unit: "tsp", alternative: "Saffron water" },
      { name: "Green Chillies (chopped)", quantity: 2, unit: "pcs", alternative: "Chili flakes" },
      { name: "Fresh Cilantro", quantity: 3, unit: "tbsp", alternative: "Parsley" },
      { name: "Lemon Juice", quantity: 1, unit: "tbsp", alternative: "Lime juice" },
      { name: "Cooking Oil", quantity: 2, unit: "tbsp", alternative: "Ghee" }
    ],
    instructions: [
      {
        step: 1,
        text: "Rinse poha in a colander under running water for 30 seconds until damp but not soggy. Sprinkle a pinch of salt and sugar, and set aside to fluff up.",
        text_hi: "पोहे को पानी से 30 सेकंड धोएं। थोड़ा नमक और चीनी छिड़क कर अलग रख दें ताकि वह फूल जाए।",
        duration: 5
      },
      {
        step: 2,
        text: "Heat oil in a pan. Roast peanuts on low heat until crunchy and light brown. Remove and keep aside.",
        text_hi: "पैन में तेल गर्म करें। मूंगफली को धीमी आंच पर कुरकुरा होने तक भूनकर अलग निकाल लें।",
        duration: 5
      },
      {
        step: 3,
        text: "Sauté mustard seeds, curry leaves, and green chillies in the same oil. Add chopped onions and cubed potatoes, cooking until potatoes are soft (about 6-7 mins).",
        text_hi: "उसी तेल में राई, कड़ी पत्ता और हरी मिर्च भूनें। प्याज और आलू के टुकड़े डालकर आलू के पकने तक (6-7 मिनट) पकाएं।",
        duration: 8
      },
      {
        step: 4,
        text: "Stir in the turmeric powder and salt. Add the fluffed poha and fried peanuts. Toss gently on low heat for 2-3 minutes.",
        text_hi: "हल्दी और नमक मिलाएं। फूला हुआ पोहा और भुनी मूंगफली डालकर धीमी आंच पर 2-3 मिनट हल्के हाथों से मिलाएं।",
        duration: 3
      },
      {
        step: 5,
        text: "Turn off heat. Mix in lemon juice and chopped coriander. Serve hot with a sprinkle of grated coconut or sev.",
        text_hi: "गैस बंद कर नींबू रस और धनिया मिलाएं। ऊपर से कसा हुआ नारियल या सेव छिड़ककर परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "breakfast-dosa",
    title: "Classic Potato Masala Dosa",
    description: "A paper-thin, crispy fermented rice and lentil crepe rolled with a spiced potato mash filling, served with coconut chutney and sambar.",
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/CCab5oq0U3A",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 20,
    servings: 3,
    calories: 320,
    tags: ["Vegetarian", "Indian", "Breakfast", "Gluten-Free"],
    ingredients: [
      { name: "Dosa Batter (Fermented)", quantity: 3, unit: "cups", alternative: "Instant Oats dosa batter" },
      { name: "Potatoes (boiled & mashed)", quantity: 3, unit: "medium", alternative: "Mashed sweet potato" },
      { name: "Onion (sliced)", quantity: 1, unit: "large", alternative: "Leeks" },
      { name: "Mustard Seeds", quantity: 1, unit: "tsp", alternative: "Cumin seeds" },
      { name: "Urad Dal", quantity: 1, unit: "tsp", alternative: "Chana dal" },
      { name: "Curry Leaves", quantity: 8, unit: "leaves", alternative: "Bay leaf" },
      { name: "Turmeric Powder", quantity: 0.5, unit: "tsp", alternative: "Ginger powder" },
      { name: "Green Chillies (chopped)", quantity: 2, unit: "pcs", alternative: "Chili flakes" },
      { name: "Ginger (grated)", quantity: 1, unit: "tsp", alternative: "Ginger paste" },
      { name: "Ghee or Butter", quantity: 3, unit: "tbsp", alternative: "Vegetable oil" },
      { name: "Fresh Cilantro", quantity: 3, unit: "tbsp", alternative: "Parsley" }
    ],
    instructions: [
      {
        step: 1,
        text: "Cook the potato stuffing: Heat 1 tbsp oil, sauté mustard seeds, urad dal, curry leaves, green chillies, and ginger. Add onions and sauté until soft.",
        text_hi: "मसाला आलू बनाएं: तेल गर्म कर राई, उड़द दाल, कड़ी पत्ता, मिर्च और अदरक भूनें। प्याज डालकर नरम होने तक पकाएं।",
        duration: 5
      },
      {
        step: 2,
        text: "Stir in turmeric, salt, and mashed potatoes with 3 tbsp water. Simmer for 3 minutes, then add coriander leaves and set aside.",
        text_hi: "हल्दी, नमक, उबले आलू और 3 चम्मच पानी मिलाएं। 3 मिनट पकाकर धनिया पत्ता डालें और अलग रखें।",
        duration: 5
      },
      {
        step: 3,
        text: "Heat a non-stick flat tawa. Splash water to cool, wipe with a damp cloth, pour a ladle of dosa batter, and spread in a circular motion to make a thin crepe.",
        text_hi: "तवे को गर्म करें, पानी छिड़क कर पोंछें, फिर एक चमचा बैटर डालकर गोल घुमाते हुए डोसा फैलाएं।",
        duration: 3
      },
      {
        step: 4,
        text: "Drizzle ghee or butter around the edges and cook on medium heat until the bottom turns golden-brown and crispy.",
        text_hi: "किनारों पर घी या मक्खन लगाएं और डोसे के नीचे से सुनहरा व कुरकुरा होने तक मध्यम आंच पर सेकें।",
        duration: 4
      },
      {
        step: 5,
        text: "Place a portion of potato masala in the center, fold the dosa over it, and serve hot with sambar and coconut chutney.",
        text_hi: "बीच में आलू मसाला रखें, डोसे को मोड़ें और सांबर व नारियल की चटनी के साथ गर्मागर्म परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "breakfast-idli",
    title: "Soft and Fluffy Steamed Idli",
    description: "Healthy steamed savory cakes made from fermented black lentil and rice batter. Soft, fluffy, and naturally gluten-free.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/1vG1B7H4g5E",
    difficulty: "medium",
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    calories: 160,
    tags: ["Vegetarian", "Indian", "Breakfast", "Healthy", "Gluten-Free"],
    ingredients: [
      { name: "Idli Batter (Fermented)", quantity: 4, unit: "cups", alternative: "Semolina (Rava) idli batter" },
      { name: "Cooking Oil or Ghee", quantity: 1, unit: "tbsp", alternative: "Cooking spray" },
      { name: "Water", quantity: 2, unit: "cups", alternative: "Vegetable stock for steam" }
    ],
    instructions: [
      {
        step: 1,
        text: "Bring 2 cups of water to a boil in an idli steamer or deep pot. Grease the idli plates/molds lightly with oil.",
        text_hi: "स्टीमर या गहरे बर्तन में 2 कप पानी गर्म करें। इडली के सांचों में हल्का तेल लगाएं।",
        duration: 5
      },
      {
        step: 2,
        text: "Stir the fermented idli batter gently. Do not over-mix to keep the air pockets intact. Pour batter into the greased molds.",
        text_hi: "इडली बैटर को धीरे से चलाएं। सांचों में बैटर भरें।",
        duration: 3
      },
      {
        step: 3,
        text: "Place the idli plates into the steamer. Cover with the lid and steam on medium-high heat for 10-12 minutes.",
        text_hi: "सांचों को स्टीमर में रखें। ढक्कन लगाकर मध्यम-तेज आंच पर 10-12 मिनट भाप में पकाएं।",
        duration: 12
      },
      {
        step: 4,
        text: "Turn off the heat. Let it cool for 2-3 minutes. Use a wet spoon to gently scoop out the fluffy idlis from the plates.",
        text_hi: "गैस बंद कर दें। 2-3 मिनट ठंडा होने दें। गीले चम्मच की मदद से इडली को बाहर निकालें।",
        duration: 3
      },
      {
        step: 5,
        text: "Serve warm with tomato chutney, coconut chutney, and hot sambar.",
        text_hi: "टमाटर की चटनी, नारियल की चटनी और गर्म सांबर के साथ गर्मागर्म परोसें।",
        duration: 2
      }
    ]
  },
  {
    id: "breakfast-paratha",
    title: "Classic Dhaba Aloo Paratha",
    description: "A popular whole wheat flatbread stuffed with a spicy, zesty mashed potato mixture, griddled with generous dollops of ghee or butter.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/CCab5oq0U3A",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 20,
    servings: 3,
    calories: 290,
    tags: ["Vegetarian", "Indian", "Breakfast", "Comfort Food"],
    ingredients: [
      { name: "Whole Wheat Flour (Atta)", quantity: 2, unit: "cups", alternative: "Gluten-free flour blend" },
      { name: "Potatoes (boiled & mashed)", quantity: 3, unit: "medium", alternative: "Mashed sweet potato" },
      { name: "Green Chillies (chopped)", quantity: 2, unit: "pcs", alternative: "1/2 tsp red chili flakes" },
      { name: "Ginger (finely chopped)", quantity: 1, unit: "tsp", alternative: "Ginger powder" },
      { name: "Coriander Powder", quantity: 1, unit: "tsp", alternative: "Cumin powder" },
      { name: "Chaat Masala", quantity: 1, unit: "tsp", alternative: "Amchur (dry mango powder)" },
      { name: "Ajwain (Carom Seeds)", quantity: 0.5, unit: "tsp", alternative: "Cumin seeds" },
      { name: "Ghee or Butter", quantity: 4, unit: "tbsp", alternative: "Oil" },
      { name: "Fresh Cilantro", quantity: 3, unit: "tbsp", alternative: "Parsley" }
    ],
    instructions: [
      {
        step: 1,
        text: "Knead whole wheat flour with water and 1 tsp oil into a soft, smooth dough. Cover and rest for 15 minutes.",
        text_hi: "गेहूं के आटे में पानी और 1 चम्मच तेल मिलाकर नरम गूंथ लें। ढककर 15 मिनट के लिए छोड़ दें।",
        duration: 10
      },
      {
        step: 2,
        text: "Mix mashed potatoes with chopped chillies, ginger, coriander powder, chaat masala, ajwain, fresh cilantro, and salt for the filling.",
        text_hi: "आलू के मिश्रण में हरी मिर्च, अदरक, धनिया पाउडर, चाट मसाला, अजवाइन, धनिया पत्ता और नमक मिलाकर भरावन तैयार करें।",
        duration: 5
      },
      {
        step: 3,
        text: "Pinch a ball of dough, roll into a 4-inch circle, place a ball of potato filling in the center, pleat the edges to cover, and seal.",
        text_hi: "आटे की लोई लें, गोल बेलें, बीच में आलू का भरावन रखें और किनारों को समेटकर बंद करें।",
        duration: 5
      },
      {
        step: 4,
        text: "Dust with dry flour and roll gently into a 7-inch flatbread, keeping it even to prevent the filling from leaking.",
        text_hi: "सूखा आटा लगाकर हल्के हाथों से 7 इंच गोल पराठा बेलें ताकि भरावन बाहर न निकले।",
        duration: 3
      },
      {
        step: 5,
        text: "Cook on a hot tawa. Flip and apply ghee/butter on both sides. Press gently until golden brown spots appear on both sides. Serve hot with pickle and yogurt!",
        text_hi: "गर्म तवे पर सेकें। दोनों तरफ घी/मक्खन लगाकर चित्तीदार होने तक सेकें। अचार और दही के साथ परोसें।",
        duration: 7
      }
    ]
  },
  {
    id: "breakfast-vada",
    title: "Crispy Medu Vada",
    description: "Crispy on the outside, soft and fluffy inside, these donut-shaped black gram lentil fritters are flavored with ginger, curry leaves, and black pepper.",
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/1vG1B7H4g5E",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 20,
    servings: 3,
    calories: 260,
    tags: ["Vegetarian", "Indian", "Breakfast", "Gluten-Free"],
    ingredients: [
      { name: "Urad Dal (split black gram)", quantity: 1.5, unit: "cups", alternative: "Moong dal (yellow lentils)" },
      { name: "Ginger (finely chopped)", quantity: 1, unit: "tsp", alternative: "Ginger paste" },
      { name: "Green Chillies (chopped)", quantity: 2, unit: "pcs", alternative: "1/2 tsp black pepper powder" },
      { name: "Whole Black Peppercorns", quantity: 1, unit: "tsp", alternative: "Ground black pepper" },
      { name: "Curry Leaves (chopped)", quantity: 10, unit: "leaves", alternative: "Fresh cilantro" },
      { name: "Rice Flour", quantity: 2, unit: "tbsp", alternative: "Semolina (Rava)" },
      { name: "Oil", quantity: 1, unit: "cup", alternative: "For deep frying, or cooking spray for air frying" }
    ],
    instructions: [
      {
        step: 1,
        text: "Grind the soaked urad dal with minimal ice-cold water (2-3 tbsp) into a thick, fluffy, and smooth batter in a grinder.",
        text_hi: "भीगी उड़द दाल को बहुत कम ठंडे पानी (2-3 चम्मच) के साथ पीसकर गाढ़ा व फ्लफी पेस्ट बना लें।",
        duration: 15
      },
      {
        step: 2,
        text: "Beat the batter vigorously in a circular motion with your hands for 5 minutes to incorporate air, making the vadas soft and fluffy inside.",
        text_hi: "बैटर को हाथों से 5 मिनट तेजी से फेंटें ताकि हवा भरने से वड़ा नरम बने।",
        duration: 5
      },
      {
        step: 3,
        text: "Add chopped ginger, green chillies, peppercorns, curry leaves, salt, and rice flour. Mix well.",
        text_hi: "कटा अदरक, हरी मिर्च, साबुत काली मिर्च, कड़ी पत्ता, नमक और चावल का आटा डालकर मिलाएं।",
        duration: 3
      },
      {
        step: 4,
        text: "Wet your hands, take a small portion of batter, shape into a ball, make a hole in the center with your thumb, and drop gently into hot oil.",
        text_hi: "हातों को गीला करें, बैटर लें, गोल कर अंगूठे से बीच में छेद करें और गर्म तेल में डालें।",
        duration: 5
      },
      {
        step: 5,
        text: "Deep fry on medium heat until golden brown and crispy on both sides. Serve hot with sambar and coconut chutney.",
        text_hi: "मध्यम आंच पर सुनहरा व कुरकुरा होने तक तलें। नारियल चटनी व सांबर के साथ परोसें।",
        duration: 8
      }
    ]
  },
  {
    id: "dessert-gajar-halwa",
    title: "Traditional Gajar Ka Halwa",
    description: "A rich, classic Indian carrot pudding slow-cooked with grated red carrots, whole milk, sugar, ghee, cardamom, and garnished with roasted nuts.",
    image: "https://images.unsplash.com/photo-1620418029653-a75d5a7d36c1?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 45,
    servings: 4,
    calories: 380,
    tags: ["Vegetarian", "Indian", "Dessert", "Sweet", "Comfort Food"],
    ingredients: [
      { name: "Carrots (Grated)", quantity: 5, unit: "cups", alternative: "Orange carrots" },
      { name: "Full Fat Milk", quantity: 4, unit: "cups", alternative: "Almond milk + coconut cream" },
      { name: "Ghee", quantity: 4, unit: "tbsp", alternative: "Vegan butter or Coconut oil" },
      { name: "Sugar", quantity: 1, unit: "cup", alternative: "Jaggery powder or Maple syrup" },
      { name: "Cardamom Powder", quantity: 1, unit: "tsp", alternative: "Nutmeg powder" },
      { name: "Mixed Nuts (Cashews, Almonds, Pistachios)", quantity: 0.25, unit: "cup", alternative: "Raisins" },
      { name: "Khoya (Mawa/Milk solids)", quantity: 0.25, unit: "cup", alternative: "Milk powder" }
    ],
    instructions: [
      {
        step: 1,
        text: "In a heavy-bottomed pot, combine the grated carrots and milk. Cook over medium heat, stirring occasionally, until all the milk evaporates (about 30-35 mins).",
        text_hi: "एक भारी बर्तन में घिसी गाजर और दूध मिलाएं। दूध के पूरी तरह सूखने तक (30-35 मिनट) मध्यम आंच पर पकाएं।",
        duration: 35
      },
      {
        step: 2,
        text: "Once the milk evaporates, add ghee and sugar. Stir continuously on medium heat. The sugar will release moisture and turn liquid.",
        text_hi: "दूध सूखने के बाद घी और चीनी मिलाएं। चीनी पानी छोड़ेगी, लगातार चलाते रहें।",
        duration: 5
      },
      {
        step: 3,
        text: "Continue cooking and stirring for another 10-12 minutes until the mixture thickens and turns a glossy, deep orange-red color.",
        text_hi: "मिश्रण के गाढ़े होने और चमकीले गहरे लाल रंग के होने तक 10-12 मिनट और भूनें।",
        duration: 10
      },
      {
        step: 4,
        text: "Stir in the cardamom powder and khoya (if using) for 2 minutes until fully blended.",
        text_hi: "इलायची पाउडर और खोया (यदि उपयोग कर रहे हैं) डालकर 2 मिनट तक अच्छी तरह मिलाएं।",
        duration: 2
      },
      {
        step: 5,
        text: "Roast chopped nuts in 1 tsp ghee until golden. Top the halwa with the nuts and serve warm!",
        text_hi: "काजू-बादाम को घी में भूनकर हलवे पर सजाएं। गर्मागर्म परोसें!",
        duration: 3
      }
    ]
  },
  {
    id: "dessert-rasgulla",
    title: "Spongy Bengali Rasgulla",
    description: "Light, spongy, and melt-in-the-mouth cottage cheese (chhena) balls slow-boiled in a fragrant, sweet sugar syrup.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "hard",
    prepTime: 20,
    cookTime: 25,
    servings: 5,
    calories: 220,
    tags: ["Vegetarian", "Indian", "Dessert", "Sweet"],
    ingredients: [
      { name: "Whole Milk", quantity: 4, unit: "cups", alternative: "Skimmed milk for lighter balls" },
      { name: "Lemon Juice or Vinegar", quantity: 2, unit: "tbsp", alternative: "Citric acid powder" },
      { name: "Sugar", quantity: 1.5, unit: "cups", alternative: "Light organic sugar" },
      { name: "Water (for syrup)", quantity: 5, unit: "cups", alternative: "Rose water diluted in water" },
      { name: "Cardamom Pods (crushed)", quantity: 3, unit: "pcs", alternative: "1 tsp Rose water" }
    ],
    instructions: [
      {
        step: 1,
        text: "Make Chhena: Boil milk, turn off heat, and add diluted lemon juice gradually until whey separates. Strain in a muslin cloth and rinse with cold water. Hang for 30 minutes to drain.",
        text_hi: "छेना बनाएं: दूध उबालें, नींबू रस डालकर फाड़ें। कपड़े में छानकर ठंडे पानी से धोएं। 30 मिनट टांग कर रखें।",
        duration: 15
      },
      {
        step: 2,
        text: "Knead the chhena with the heel of your palm for 8-10 minutes until it becomes smooth, oil-free, and dough-like.",
        text_hi: "छेना को हथेली की मदद से 8-10 मिनट तक गूंथें जब तक कि वह चिकना और मावे जैसा न हो जाए।",
        duration: 10
      },
      {
        step: 3,
        text: "Divide into equal small portions and roll into smooth balls without any cracks.",
        text_hi: "बराबर छोटे भागों में बांटकर बिना दरार वाली चिकनी गोलियां बना लें।",
        duration: 5
      },
      {
        step: 4,
        text: "Boil sugar, water, and crushed cardamom in a large wide pot. Drop the balls gently into the boiling syrup, cover, and boil on high heat for 15 minutes.",
        text_hi: "चौड़े बर्तन में चीनी, पानी और इलायची उबालें। उबलती चाशनी में गोलियां डालें, ढककर तेज आंच पर 15 मिनट उबालें।",
        duration: 15
      },
      {
        step: 5,
        text: "Turn off heat, let it cool completely. Chilling in the refrigerator for 2 hours makes them extra spongy and sweet.",
        text_hi: "आंच बंद कर ठंडा करें। फ्रिज में 2 घंटे ठंडा करने के बाद परोसें।",
        duration: 5
      }
    ]
  },
  {
    id: "dessert-kheer",
    title: "Creamy Saffron Rice Kheer",
    description: "A comforting, rich Indian rice pudding slow-cooked with basmati rice, full-fat milk, cardamom, saffron, and loaded with roasted dry fruits.",
    image: "https://images.unsplash.com/photo-1620418029653-a75d5a7d36c1?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "easy",
    prepTime: 10,
    cookTime: 30,
    servings: 4,
    calories: 290,
    tags: ["Vegetarian", "Indian", "Dessert", "Sweet", "Gluten-Free"],
    ingredients: [
      { name: "Basmati Rice", quantity: 0.25, unit: "cup", alternative: "Jasmine rice" },
      { name: "Full Fat Milk", quantity: 4, unit: "cups", alternative: "Almond milk + coconut cream" },
      { name: "Sugar", quantity: 0.5, unit: "cup", alternative: "Condensed milk or Jaggery powder" },
      { name: "Cardamom Powder", quantity: 0.5, unit: "tsp", alternative: "Cinnamon powder" },
      { name: "Saffron Strands", quantity: 12, unit: "pcs", alternative: "Vanilla extract" },
      { name: "Chopped Nuts (Almonds, Pistachios)", quantity: 2, unit: "tbsp", alternative: "Raisins" },
      { name: "Ghee", quantity: 1, unit: "tsp", alternative: "Oil to roast nuts" }
    ],
    instructions: [
      {
        step: 1,
        text: "Coarsely crush the soaked rice. Boil milk in a heavy pot, add the crushed rice, and cook on medium-low heat for 20 minutes, stirring frequently until rice is cooked.",
        text_hi: "भीगे चावल को थोड़ा दरदरा करें। दूध उबालें, चावल डालकर धीमी आंच पर 20 मिनट चलाकर पकाएं।",
        duration: 20
      },
      {
        step: 2,
        text: "Mash a few cooked rice grains against the sides of the pot to thicken the milk naturally.",
        text_hi: "कलछी से थोड़े पके चावल को बर्तन के किनारों पर मैश करें ताकि खीर गाढ़ी हो सके।",
        duration: 2
      },
      {
        step: 3,
        text: "Add sugar and saffron milk. Simmer on low heat for 8-10 minutes until the kheer reaches a creamy, semi-thick consistency.",
        text_hi: "चीनी और केसर का दूध मिलाएं। धीमी आंच पर 8-10 मिनट तक मलाईदार होने तक पकाएं।",
        duration: 10
      },
      {
        step: 4,
        text: "Stir in the cardamom powder and half of the chopped nuts. Cook for 1 minute, then turn off the heat.",
        text_hi: "इलायची पाउडर और आधे मेवे डालकर 1 मिनट पकाएं, फिर आंच बंद करें।",
        duration: 2
      },
      {
        step: 5,
        text: "Pour into serving bowls, garnish with remaining nuts, and serve warm or chilled!",
        text_hi: "कटोरे में निकालें, बचे मेवे से सजाकर गर्म या ठंडा परोसें।",
        duration: 1
      }
    ]
  },
  {
    id: "dessert-rasmalai",
    title: "Delicate Saffron Rasmalai",
    description: "Super soft, flattened cottage cheese patties soaked in a chilled, sweet, and thickened milk infused with cardamom, saffron, and pistachios.",
    image: "https://images.unsplash.com/photo-1601050690597-df056fb4ce78?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "hard",
    prepTime: 25,
    cookTime: 35,
    servings: 4,
    calories: 310,
    tags: ["Vegetarian", "Indian", "Dessert", "Sweet"],
    ingredients: [
      { name: "Rasgulla balls (soft cottage cheese patties)", quantity: 12, unit: "pcs", alternative: "Homemade chhena patties" },
      { name: "Full Fat Milk (for Rabdi)", quantity: 4, unit: "cups", alternative: "Condensed milk + water" },
      { name: "Sugar", quantity: 0.5, unit: "cup", alternative: "Organic sugar" },
      { name: "Saffron Strands", quantity: 15, unit: "pcs", alternative: "Yellow food coloring" },
      { name: "Cardamom Powder", quantity: 0.5, unit: "tsp", alternative: "Rose water" },
      { name: "Pistachios & Almonds (slivered)", quantity: 3, unit: "tbsp", alternative: "Cashew bits" }
    ],
    instructions: [
      {
        step: 1,
        text: "Cook Rabdi: Boil 4 cups of milk in a wide pot. Reduce heat and simmer, scraping cream from sides back into the milk, until it reduces to half its volume (about 25 mins).",
        text_hi: "रबड़ी बनाएं: दूध उबालें, गाढ़ा होने व आधा रहने तक (25 मिनट) मलाई खुरचते हुए पकाएं।",
        duration: 25
      },
      {
        step: 2,
        text: "Add sugar, saffron, and cardamom powder to the reduced milk. Simmer for 3 minutes, then set the hot saffron milk (Ras) aside.",
        text_hi: "दूध में चीनी, केसर और इलायची पाउडर डालकर 3 मिनट उबालें और अलग रखें।",
        duration: 3
      },
      {
        step: 3,
        text: "Take readymade or fresh warm rasgullas. Gently press them between your palms to squeeze out the sugar syrup without breaking them.",
        text_hi: "रसगुल्लों को हथेलियों के बीच धीरे से दबाकर चाशनी निचोड़ लें (ध्यान रहे वे टूटे नहीं)।",
        duration: 3
      },
      {
        step: 4,
        text: "Drop the squeezed patties into the warm rabdi. Simmer on very low heat for 2-3 minutes so they absorb the saffron milk.",
        text_hi: "दबाए रसगुल्लों को रबड़ी में डालें। धीमी आंच पर 2-3 मिनट पकाएं ताकि वे रस सोख लें।",
        duration: 3
      },
      {
        step: 5,
        text: "Turn off heat, garnish with slivered pistachios and almonds. Chill in the refrigerator for at least 4 hours before serving!",
        text_hi: "पिस्ता और बादाम से सजाएं। फ्रिज में 4 घंटे ठंडा करके परोसें।",
        duration: 5
      }
    ]
  },
  {
    id: "dessert-kaju-katli",
    title: "Premium Kaju Katli",
    description: "The classic Indian cashew fudge, thin, smooth, and meltingly soft diamonds decorated with edible silver leaf.",
    image: "https://images.unsplash.com/photo-1620418029653-a75d5a7d36c1?auto=format&fit=crop&q=80&w=1000",
    videoUrl: "https://www.youtube.com/embed/n3H5wO1mpe0",
    difficulty: "medium",
    prepTime: 15,
    cookTime: 15,
    servings: 6,
    calories: 260,
    tags: ["Vegetarian", "Indian", "Dessert", "Sweet", "Gluten-Free"],
    ingredients: [
      { name: "Raw Cashews", quantity: 2, unit: "cups", alternative: "Raw almonds (peeled and ground)" },
      { name: "Sugar", quantity: 1, unit: "cup", alternative: "Maple syrup (will change color)" },
      { name: "Water", quantity: 0.5, unit: "cup", alternative: "Coconut milk" },
      { name: "Ghee", quantity: 1, unit: "tbsp", alternative: "Coconut oil or vegan butter" },
      { name: "Cardamom Powder", quantity: 0.5, unit: "tsp", alternative: "Rose water" },
      { name: "Edible Silver Leaf (Vark)", quantity: 2, unit: "sheets", alternative: "Grated pistachios" }
    ],
    instructions: [
      {
        step: 1,
        text: "Grind raw cashews in a blender into a fine dry powder. Sieve the powder to remove any large bits. (Blend in pulses to prevent the cashews from releasing oil and turning into cashew butter).",
        text_hi: "काजू को बारीक पीस लें और छान लें। ध्यान रहे कि वे तेल न छोड़ें, इसलिए पल्स पर पीसें।",
        duration: 10
      },
      {
        step: 2,
        text: "Boil sugar and water in a non-stick pan until the sugar dissolves. Add the cashew powder and cardamom powder. Cook on low heat, stirring constantly.",
        text_hi: "नॉन-स्टिक पैन में चीनी व पानी उबालें। घुलने पर काजू का पाउडर डालें और धीमी आंच पर लगातार चलाते हुए पकाएं।",
        duration: 8
      },
      {
        step: 3,
        text: "Cook for about 8-10 minutes until the mixture forms a soft dough that begins to leave the sides of the pan.",
        text_hi: "8-10 मिनट तक पकाएं जब तक कि मिश्रण कड़ाही छोड़ने लगे और आटे जैसा गोल हो जाए।",
        duration: 8
      },
      {
        step: 4,
        text: "Transfer the dough to a greased parchment paper. Knead it gently for 2 minutes while warm to make it smooth. Place another parchment on top and roll into a 1/4-inch sheet.",
        text_hi: "घी लगी बटर पेपर पर निकालें, गर्म रहते 2 मिनट गूंथें। ऊपर दूसरा पेपर रख 1/4 इंच मोटा बेल लें।",
        duration: 5
      },
      {
        step: 5,
        text: "Apply silver leaf (if using), cool completely, and cut into diamond shapes using a sharp knife. Enjoy!",
        text_hi: "चांदी का वर्क लगाएं, ठंडा होने दें और चाकू से काजू कतली के आकार (डायमंड) में काट लें।",
        duration: 5
      }
    ]
  }
];
