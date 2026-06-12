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
  }
];
