export const healthProfilesList = [
  { id: 'All', label: 'All Recipes', emoji: '🍽️', tooltip: 'Show all recipes' },
  { id: 'Pregnant', label: 'Pregnant Care', emoji: '🤰', tooltip: 'Rich in Folate, Iron & Calcium' },
  { id: 'BP', label: 'Heart & BP Care', emoji: '❤️', tooltip: 'Low Sodium & Heart-Healthy Fats' },
  { id: 'Fever', label: 'Fever & Recovery', emoji: '🤒', tooltip: 'Light, Soothing & Hydrating' },
  { id: 'Diabetic', label: 'Diabetic Friendly', emoji: '🍏', tooltip: 'Low Glycemic, High Protein & Fiber' }
];

export const getRecipeHealthMatches = (recipe) => {
  const titleLower = recipe.title.toLowerCase();
  const descLower = recipe.description.toLowerCase();
  const tagsLower = (recipe.tags || []).map(t => t.toLowerCase());
  const ingredientsLower = (recipe.ingredients || []).map(ing => ing.name.toLowerCase());

  const matches = [];

  // 1. Pregnant Care: Rich in folate, calcium, iron, cooked proteins
  const isPregnantFriendly = 
    ingredientsLower.some(ing => 
      ing.includes('spinach') || 
      ing.includes('palak') ||
      ing.includes('avocado') || 
      ing.includes('lentil') || 
      ing.includes('dal') ||
      ing.includes('chicken') || 
      ing.includes('yogurt') || 
      ing.includes('paneer') || 
      ing.includes('milk')
    ) || tagsLower.includes('healthy');
  
  if (isPregnantFriendly) {
    matches.push({
      id: 'Pregnant',
      label: 'Pregnant Care',
      emoji: '🤰',
      reason: 'Rich in Folate, Iron & Calcium'
    });
  }

  // 2. Heart & BP Care: Low sodium, healthy fats, garlic/ginger. Avoid heavy butter/cream and deep fried.
  const isHeavyOrFried = 
    titleLower.includes('samosa') || 
    titleLower.includes('jamun') || 
    titleLower.includes('butter chicken') ||
    descLower.includes('fried') || 
    descLower.includes('velvety garlic sauce loaded with heavy cream');
    
  const hasHeartHealthyIngs = ingredientsLower.some(ing => 
    ing.includes('avocado') || 
    ing.includes('spinach') || 
    ing.includes('garlic') || 
    ing.includes('fish') || 
    ing.includes('olive oil') || 
    ing.includes('ginger') ||
    ing.includes('walnut')
  );

  if (hasHeartHealthyIngs && !isHeavyOrFried) {
    matches.push({
      id: 'BP',
      label: 'Heart & BP Care',
      emoji: '❤️',
      reason: 'Low Sodium & Heart-Healthy Fats'
    });
  }

  // 3. Fever & Recovery: Easy digest, soothing, warm broths. Avoid fried/heavy sweets.
  const isFriedOrSugary = 
    titleLower.includes('samosa') || 
    titleLower.includes('jamun') || 
    titleLower.includes('tacos') ||
    titleLower.includes('mousse');
    
  const isSoothing = 
    titleLower.includes('lassi') || 
    titleLower.includes('ramen') || 
    titleLower.includes('dal') || 
    titleLower.includes('paneer') || 
    descLower.includes('broth') ||
    ingredientsLower.some(ing => ing.includes('ginger') || ing.includes('garlic') || ing.includes('yogurt'));

  if (isSoothing && !isFriedOrSugary) {
    matches.push({
      id: 'Fever',
      label: 'Fever & Recovery',
      emoji: '🤒',
      reason: 'Light, Soothing & Hydrating'
    });
  }

  // 4. Diabetic Friendly: Low carb, high protein/fiber. Avoid high refined sugar/flours.
  const hasHighCarbsOrSugar = 
    titleLower.includes('pasta') || 
    titleLower.includes('naan') || 
    titleLower.includes('samosa') || 
    titleLower.includes('jamun') || 
    titleLower.includes('mousse') ||
    ingredientsLower.some(ing => ing.includes('sugar') || ing.includes('flour') || ing.includes('maida'));
    
  const isDiabeticFriendly = 
    tagsLower.includes('chicken') || 
    tagsLower.includes('fish') || 
    ingredientsLower.some(ing => ing.includes('paneer') || ing.includes('spinach') || ing.includes('lentil') || ing.includes('tofu'));

  if (isDiabeticFriendly && !hasHighCarbsOrSugar) {
    matches.push({
      id: 'Diabetic',
      label: 'Diabetic Friendly',
      emoji: '🍏',
      reason: 'Low Glycemic, High Protein & Fiber'
    });
  }

  return matches;
};

export const matchesHealthProfile = (recipe, profileId) => {
  if (profileId === 'All') return true;
  const matches = getRecipeHealthMatches(recipe);
  return matches.some(m => m.id === profileId);
};
