import React, { useState, useEffect, useRef } from 'react';
import { 
  X, Volume2, VolumeX, Send, HelpCircle, AlertTriangle, 
  Sparkles, RefreshCw, MessageSquare, Mic, Play, ArrowLeft, ArrowRight
} from 'lucide-react';
import { getYoutubeEmbedUrl } from '../utils/youtube';

// Specialized AI Chef Personalities and their system messages
const CHEFS = {
  aria: {
    name: "Chef Aria (The Food Scientist)",
    avatar: "🧬",
    color: "var(--accent-cool)",
    welcome: "Hello! I am Aria, your AI food scientist. I will help you understand the chemical and thermal reactions in this recipe to ensure perfect execution. Ask me anything about temperatures, starches, or culinary physics!",
    welcome_hi: "नमस्ते! मैं आपकी एआई फूड साइंटिस्ट एरिया हूँ। मैं आपको इस रेसिपी के रासायनिक और तापीय बदलावों को समझाने में मदद करूँगी जिससे आपकी कुकिंग बिल्कुल परफेक्ट हो। तापमान, स्टार्च या पाक भौतिकी के बारे में कुछ भी पूछें!"
  },
  marco: {
    name: "Chef Marco (The Tuscan Soul)",
    avatar: "👨‍🍳",
    color: "var(--accent-primary)",
    welcome: "Ciao, my friend! I am Marco. For me, cooking is not just formulas; it is about love, passion, and fresh herbs! Let's make this dish sing together. Ask me any home-cooking secrets!",
    welcome_hi: "नमस्ते मेरे दोस्त! मैं मार्को हूँ। मेरे लिए, खाना पकाना केवल सूत्र नहीं है; यह प्यार, जुनून और ताजी जड़ी-बूटियों का मेल है! चलो आज इस डिश को मिलकर लाजवाब बनाते हैं। खाना पकाने के घरेलू रहस्य पूछें!"
  },
  ranveer: {
    name: "Chef Ranveer (The Spice Alchemist)",
    avatar: "🌶️",
    color: "var(--accent-warm)",
    welcome: "Namaste! I am Ranveer. Cooking is a spiritual journey of balancing spices, texture, and aroma. I will guide you on blooming, roasting, and infusing deep layers of flavor. Ask me about spice chemistry!",
    welcome_hi: "नमस्ते! मैं रणवीर हूँ। खाना पकाना मसालों, बनावट और सुगंध को संतुलित करने की एक यात्रा है। मैं आपको मसालों को भूनने और उनके स्वाद को ग्रेवी में निखारने का मार्गदर्शन करूँगा। मसाले के बारे में पूछें!"
  }
};

export default function AIChefCompanion({ isOpen, onClose, recipe, currentStepIndex = 0, language = 'en' }) {
  if (!isOpen) return null;

  const { title, videoUrl, instructions, ingredients } = recipe;

  const [selectedChef, setSelectedChef] = useState('aria'); // 'aria', 'marco', 'ranveer'
  const [activeStep, setActiveStep] = useState(currentStepIndex);
  
  // Chat History
  const [chatLog, setChatLog] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const logEndRef = useRef(null);
  const isHi = language === 'hi';
  
  // Initialize Welcome Message when Chef changes
  useEffect(() => {
    const chefInfo = CHEFS[selectedChef];
    const welcomeText = isHi ? chefInfo.welcome_hi : chefInfo.welcome;
    setChatLog([
      {
        sender: 'ai',
        text: welcomeText,
        chef: selectedChef,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  }, [selectedChef, language]);

  // Handle Step changes - AI proactively comments on the new step!
  useEffect(() => {
    triggerStepCommentary(activeStep);
  }, [activeStep, selectedChef]);

  // Scroll to bottom of chat
  useEffect(() => {
    logEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatLog, isTyping]);

  // Clean up speech on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Text-To-Speech function
  const speakAIResponse = (text) => {
    if (!window.speechSynthesis) return;

    window.speechSynthesis.cancel(); // Stop current speech
    
    // Clean text of emojis before reading
    const cleanText = text.replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD00-\uDFFF]/g, '');
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = isHi ? 'hi-IN' : 'en-US';
    
    // Choose voice based on language and chef
    const voices = window.speechSynthesis.getVoices();
    if (isHi) {
      const hiVoice = voices.find(v => v.lang.startsWith('hi') || v.name.includes('India') || v.name.includes('Hindi'));
      if (hiVoice) utterance.voice = hiVoice;
    } else if (voices.length > 0) {
      if (selectedChef === 'aria') {
        const femaleVoice = voices.find(v => v.name.includes('Google US English') || v.name.includes('Samantha') || v.name.includes('Zira'));
        if (femaleVoice) utterance.voice = femaleVoice;
      } else if (selectedChef === 'marco') {
        const maleVoice = voices.find(v => v.name.includes('Google UK English Male') || v.name.includes('Daniel') || v.name.includes('David'));
        if (maleVoice) utterance.voice = maleVoice;
      } else {
        const indianVoice = voices.find(v => v.name.includes('India') || v.name.includes('Veena') || v.name.includes('Rishi'));
        if (indianVoice) utterance.voice = indianVoice;
      }
    }

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeech = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setIsSpeaking(false);
  };

  // AI Step commentary generator
  const triggerStepCommentary = (stepIdx) => {
    const stepNum = stepIdx + 1;
    const step = instructions[stepIdx];
    const stepText = isHi && step?.text_hi ? step.text_hi : (step?.text || "");
    
    setIsTyping(true);

    setTimeout(() => {
      let commentary = "";
      
      if (selectedChef === 'aria') {
        commentary = getAriaScienceTip(recipe.id, stepNum, stepText);
      } else if (selectedChef === 'marco') {
        commentary = getMarcoTuscanTip(recipe.id, stepNum, stepText);
      } else {
        commentary = getRanveerSpiceTip(recipe.id, stepNum, stepText);
      }

      let responseText = "";
      if (isHi) {
        const translatedCommentary = translateCommentaryToHindi(commentary);
        responseText = `कदम ${stepNum} मार्गदर्शन: ${translatedCommentary}`;
      } else {
        responseText = `Step ${stepNum} Guidance: ${commentary}`;
      }

      setChatLog(prev => [
        ...prev,
        {
          sender: 'ai',
          text: responseText,
          chef: selectedChef,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
      speakAIResponse(responseText);
    }, 800);
  };

  // Translation mapping to Hindi
  const translateCommentaryToHindi = (text) => {
    if (text.includes("denaturation") || text.includes("Maillard")) {
      return "🔬 चिकन को पैन में सेकने से 'मेलार्ड रिएक्शन' (Maillard reaction) होता है। यह सतह पर प्रोटीन और शर्करा को जोड़कर गहरा, समृद्ध स्वाद बनाता है। ध्यान रखें कि चिकन की सतह सूखी हो ताकि वह उबलने के बजाय अच्छे से सिक सके।";
    }
    if (text.includes("emulsification")) {
      return "🔬 जब आप ग्रेवी में क्रीम या दूध मिलाते हैं, तो वह 'इमल्सीफिकेशन' (मिश्रण) बनाता है। आंच को हमेशा धीमा रखें; तेज आंच पर उबालने से क्रीम फट सकती है और तेल अलग हो सकता है।";
    }
    if (text.includes("amylose")) {
      return "🔬 पास्ता का उबला हुआ पानी स्टार्च (amylose) से भरपूर होता है। यह पानी पेस्टो सॉस को पास्ता के साथ बांधने में प्राकृतिक गोंद का काम करता है। पानी को फेंकने के बजाय सॉस में मिलाएं।";
    }
    if (text.includes("glutamic acid")) {
      return "🔬 कोम्बु और बोनिटो फ्लेक्स को धीमी आंच पर उबालने से उमामी स्वाद (Glutamic acid) निकलता है, जो स्वाद ग्रंथियों को जगाता है और सूप को स्वादिष्ट बनाता है।";
    }
    if (text.includes("simmers")) {
      return "🔬 काली दाल (उड़द) को लंबे समय तक उबालने से उसकी बाहरी त्वचा के जटिल स्टार्च टूटते हैं, जिससे ग्रेवी बिना किसी कृत्रिम गाढ़ेपन के गाढ़ी और मलाईदार बनती है।";
    }
    if (text.includes("hot pan")) {
      return "👨‍🍳 पैन को हमेशा अच्छा गर्म रखें! जब आप चिकन डालें तो 'छन-छन' की आवाज आनी चाहिए। अगर आवाज नहीं आ रही तो पैन ठंडा है। चिकन को बार-बार न पलटें, उसे एक तरफ से सिकने दें।";
    }
    if (text.includes("Rinsing")) {
      return "👨‍🍳 पास्ता को उबलने के बाद कभी भी ठंडे पानी से न धोएं। पानी से स्टार्च धुल जाता है जिससे पेस्टो सॉस पास्ता पर चिपक नहीं पाती। गैस बंद करके ही पेस्टो मिलाएं।";
    }
    if (text.includes("folding")) {
      return "👨‍🍳 अंडे की सफेदी को चॉकलेट में बहुत धीरे-धीरे और प्यार से फोल्ड करें (figure-eight motion)। अगर आप ज्यादा तेजी से मिलाएंगे, तो उसकी हवा निकल जाएगी और मूस स्पंजी नहीं बनेगा।";
    }
    if (text.includes("oil-soluble")) {
      return "🌶️ भारतीय मसाले वसा (तेल या घी) में घुलनशील होते हैं। घी में मसालों को भूनने से उनके सुगंधित तेल बाहर आते हैं। आंच हमेशा धीमी रखें ताकि मसाले जलें नहीं।";
    }
    if (text.includes("Kasuri Methi")) {
      return "🌶️ कसूरी मेथी को हमेशा हथेलियों के बीच रगड़ कर ही ग्रेवी में डालें। इससे रगड़ के कारण कोशिकाएं टूटती हैं और सूखी मेथी की भीनी खुशबू तुरंत जाग उठती है।";
    }
    if (text.includes("Dum cooking")) {
      return "🌶️ दम पुलाव भाप के दबाव का खेल है। बासमती चावल नीचे पक रहे चिकन की खुशबूदार भाप को सोखता है। जब तक दम पूरा न हो, ढक्कन की सील को बिल्कुल न खोलें।";
    }
    return "💡 तापमान और आंच को संतुलित रखें। मसालों की सुगंध ही आपका मार्गदर्शन करेगी। जब मसालों से भीनी खुशबू आने लगे, तभी प्यूरी या पानी मिलाएं।";
  };

  // Recipe Specific Commentaries
  const getAriaScienceTip = (recipeId, stepNum, stepText) => {
    if (recipeId.includes('chicken') || recipeId.includes('tandoori')) {
      if (stepNum === 1 || stepNum === 2) return "🔬 Protein denaturation is key here. Searing above 285°F (140°C) triggers the Maillard reaction, rearranging amino acids to create complex carbonyl flavor compounds. Keep the surface dry to avoid steam-boiling.";
      return "🔬 When simmering in cream or sauce, emulsification occurs. Keep heat at a low simmer; boiling will break the emulsion, separating the fat from the liquids.";
    }
    if (recipeId.includes('pasta')) {
      return "🔬 Boiling pasta causes starch granules to absorb water and gelatinize. Saving pasta cooking water is crucial; it contains released amylose starch, which acts as a natural emulsifier to bind the fat-based pesto sauce.";
    }
    if (recipeId.includes('ramen')) {
      return "🔬 Slow-simmering dashi extracts glutamic acid from kombu and guanylic acid from bonito flakes, creating a synergetic umami effect that multiplies flavor receptors on your tongue.";
    }
    if (recipeId.includes('dal')) {
      return "🔬 Simmering Urad Dal for hours breaks down complex starches and pectin in the cell walls. This releases starch polymers, creating a natural creamy suspension without curdling.";
    }
    return `🔬 Thermochemical reaction tip: For step ${stepNum}, ensure your heat source allows steady heat transfer. Direct convection heat maintains the moisture equilibrium.`;
  };

  const getMarcoTuscanTip = (recipeId, stepNum, stepText) => {
    if (recipeId.includes('chicken') || recipeId.includes('tandoori')) {
      return "👨‍🍳 Ah, the secret is a hot pan! Listen for the sizzle—if it's silent, your pan is too cold. Let it get a beautiful dark crust, don't move it around too much. Patience, my friend!";
    }
    if (recipeId.includes('pasta')) {
      return "👨‍🍳 Mamma mia! Never rinse the pasta. Rinsing washes away all the beautiful starch that helps the pesto stick. Toss the pesto off the heat so the fresh basil stays green and sweet!";
    }
    if (recipeId.includes('mousse')) {
      return "👨‍🍳 Gently! When folding the egg whites, treat them like a sleeping baby. Do a figure-eight fold. If you fold too fast, you lose all the precious air bubbles and the mousse goes flat.";
    }
    return `👨‍🍳 For step ${stepNum}, taste as you go! Cooking is not a rulebook, it is an emotion. If it feels like it lacks spirit, add a tiny drop of olive oil or a squeeze of fresh lemon.`;
  };

  const getRanveerSpiceTip = (recipeId, stepNum, stepText) => {
    if (recipeId.includes('butter-chicken') || recipeId.includes('tikka') || recipeId.includes('biryani') || recipeId.includes('dal')) {
      if (stepText.includes('spices') || stepText.includes('sauté') || stepNum === 3) {
        return "🌶️ Spices are oil-soluble. Blooming them in warm butter or ghee releases essential oils that are locked inside. Sauté them on low heat; burning the spices will make the gravy bitter.";
      }
      if (stepText.includes('cream') || stepText.includes('fenugreek') || stepText.includes('methi')) {
        return "🌶️ Fenugreek leaves (Kasuri Methi) are bitter-sweet. Always rub them between your palms. This friction heats up the leaf cells and instantly wakes up the herbal aroma. Don't skip it!";
      }
    }
    if (recipeId.includes('biryani')) {
      return "🌶️ Dum cooking is about steam pressure. The long grain Basmati absorbs the spiced steam from the chicken underneath, elongating rather than breaking. Do not disturb the seal!";
    }
    return `🌶️ Flavor alchemy tip: In step ${stepNum}, the aroma is your guide. When spices are roasted perfectly, they release a sweet, toasted scent. That is when you add your liquids.`;
  };

  // Chat Submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userInput.trim()) return;

    const userMessage = {
      sender: 'user',
      text: userInput.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatLog(prev => [...prev, userMessage]);
    setUserInput('');
    setIsTyping(true);

    // Mock AI response generation
    setTimeout(() => {
      const responseText = generateAIResponse(userInput.trim());
      const aiResponse = {
        sender: 'ai',
        text: responseText,
        chef: selectedChef,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setChatLog(prev => [...prev, aiResponse]);
      setIsTyping(false);
      speakAIResponse(responseText);
    }, 1200);
  };

  // Quick Action Buttons Handlers
  const handleQuickAction = (actionType) => {
    setIsTyping(true);
    setTimeout(() => {
      let responseText = "";
      const currentStepText = instructions[activeStep]?.text || "";

      if (actionType === 'science') {
        const engText = `🔬 Science Explanation: ${getAriaScienceTip(recipe.id, activeStep + 1, currentStepText)}`;
        responseText = isHi ? translateCommentaryToHindi(engText) : engText;
      } else if (actionType === 'rescue') {
        responseText = getRescueTip(recipe.id);
      } else if (actionType === 'swaps') {
        responseText = getSwapsTip();
      } else {
        const engText = `💡 Pro-Tip: ${selectedChef === 'aria' ? getAriaScienceTip(recipe.id, activeStep+1, currentStepText) : selectedChef === 'marco' ? getMarcoTuscanTip(recipe.id, activeStep+1, currentStepText) : getRanveerSpiceTip(recipe.id, activeStep+1, currentStepText)}`;
        responseText = isHi ? translateCommentaryToHindi(engText) : engText;
      }

      setChatLog(prev => [
        ...prev,
        {
          sender: 'ai',
          text: responseText,
          chef: selectedChef,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
      speakAIResponse(responseText);
    }, 800);
  };

  const getRescueTip = (recipeId) => {
    if (recipeId.includes('dal') || recipeId.includes('butter-chicken') || recipeId.includes('tikka')) {
      return isHi 
        ? "🆘 डिश रेस्क्यू: यदि ग्रेवी टमाटर के कारण खट्टी हो गई है, तो अम्लता को बेअसर करने के लिए आधा चम्मच चीनी, शहद या थोड़ा मक्खन मिलाएं। यदि बहुत नमकीन है, तो छिला आलू या 2 चम्मच क्रीम मिलाएं।"
        : "🆘 Dish Rescue: If your gravy feels too sour or acidic due to tomatoes, add 1/2 teaspoon of sugar, honey, or a tablespoon of butter to instantly neutralize it. If it is too salty, add a raw peeled potato or 2 tablespoons of cream.";
    }
    if (recipeId.includes('mousse')) {
      return isHi 
        ? "🆘 डिजर्ट रेस्क्यू: यदि चॉकलेट जम (seized) गई है, तो एक चम्मच उबलता पानी या एक बूंद तेल मिलाकर फेंटें। यदि मलाई मक्खन में बदल गई है, तो ठंडी मलाई मिलाकर बिल्कुल धीरे से चलाएं।"
        : "🆘 Dessert Rescue: If your chocolate seized (went grainy or hard), whisk in a teaspoon of boiling water or a drop of vegetable oil. If your whipped cream turned into butter, add 2 tablespoons of fresh cold cream and whisk very gently.";
    }
    return isHi 
      ? "🆘 सामान्य उपाय: यदि खाना थोड़ा जल जाता है, तो जले हुए भाग को खुरचे बिना तुरंत दूसरे बर्तन में निकालें। धुएं की महक दबाने के लिए चुटकी भर चीनी या नींबू का रस मिलाएं।"
      : "🆘 General Rescue: If a dish burns slightly, transfer it immediately to a new pan without scraping the burnt bottom. Add a pinch of sugar or lemon juice to mask the smoky smell.";
  };

  const getSwapsTip = () => {
    const swaps = ingredients.filter(ing => ing.alternative).map(ing => {
      return isHi 
        ? `• **${ing.name}** की जगह: **${ing.alternative}**`
        : `• For **${ing.name}**, you can use **${ing.alternative}**.`;
    });
    if (swaps.length > 0) {
      return isHi 
        ? `🥛 इस रेसिपी के लिए सामग्री विकल्प:\n\n${swaps.join('\n')}`
        : `🥛 Diet & Pantry Swaps for this recipe:\n\n${swaps.join('\n')}`;
    }
    return isHi 
      ? "🥛 यदि कोई सामग्री नहीं मिल रही, तो मुझे चैट में बताएं और मैं उसका विकल्प सुझाऊंगा!"
      : "🥛 Substitution: If you are missing an ingredient, tell me what you need to replace, and I will recommend a pantry alternative!";
  };

  // Simple NLP keyword-matching chatbot logic
  const generateAIResponse = (query) => {
    const q = query.toLowerCase();
    
    // Check for ingredient alternatives
    if (q.includes('swap') || q.includes('substitute') || q.includes('replace') || q.includes('alternative') || q.includes('instead') || q.includes('बदल') || q.includes('विकल्प') || q.includes('जगह')) {
      const matchedIng = ingredients.find(ing => q.includes(ing.name.toLowerCase()));
      if (matchedIng && matchedIng.alternative) {
        return isHi 
          ? `🥛 बिल्कुल! आप ${matchedIng.name} की जगह ${matchedIng.alternative} का उपयोग कर सकते हैं।`
          : `🥛 Sure! For ${matchedIng.name}, the recommended alternative is: ${matchedIng.alternative}.`;
      }
      return getSwapsTip();
    }

    if (q.includes('salty') || q.includes('salt') || q.includes('नमक') || q.includes('नमकीन')) {
      if (selectedChef === 'aria') {
        return isHi
          ? "🔬 अतिरिक्त नमक के प्रभाव को दबाने के लिए ग्रेवी में खटास (नींबू का रस, सिरका) मिलाएं, जो स्वाद को संतुलित करेगी, या आलू के टुकड़े डालें जो घुले हुए नमक को सोख लेंगे।"
          : "🔬 Excess sodium perception can be suppressed. Add an acid (lemon juice, vinegar) or starches (like potato chunks) to absorb dissolved salts.";
      }
      if (selectedChef === 'marco') {
        return isHi
          ? "👨‍🍳 अरे, थोड़ा नमक ज्यादा हो गया! सॉस में एक छिला हुआ आलू 5 मिनट के लिए डाल दें, वह स्पंज की तरह नमक सोख लेगा। और थोड़ा पानी या क्रीम मिलाएं।"
          : "👨‍🍳 Ah, a bit too salty! Drop a peeled potato in the sauce for 5 minutes, it acts like a sponge. And add a splash of water or cream to dilute.";
      }
      return isHi
        ? "🌶️ नमक कम करने के लिए ग्रेवी में एक चम्मच दही, काजू का पेस्ट, या गूंथा हुआ आटा (atta ball) डालें। आटा नमक सोख लेगा, जिसे बाद में निकाल लें।"
        : "🌶️ To balance excess salt, stir in a spoonful of unsalted yogurt, cashew paste, or a small ball of wheat dough (atta).";
    }

    if (q.includes('spicy') || q.includes('chili') || q.includes('hot') || q.includes('तीखा') || q.includes('मिर्च')) {
      return isHi
        ? "🌶️ यदि खाना ज्यादा तीखा हो गया है, तो वसा (fat) मिलाएं! मिर्च का तीखापन वसा में घुलनशील होता है। थोड़ी मलाई, मक्खन, या दही मिलाएं। नींबू का रस या एक चम्मच चीनी भी मदद करेगी।"
        : "🌶️ If it is too spicy, add fat! Capsaicin is fat-soluble. Stir in cream, butter, yogurt, or coconut milk. A squeeze of lime juice or a teaspoon of sugar also breaks the heat.";
    }

    if (q.includes('burn') || q.includes('burnt') || q.includes('smoke') || q.includes('जल') || q.includes('जला') || q.includes('धुआं')) {
      return getRescueTip(recipe.id);
    }

    if (q.includes('hello') || q.includes('hi ') || q.includes('hey') || q.includes('नमस्ते') || q.includes('हेलो')) {
      return isHi
        ? `👋 नमस्ते! मैं यहाँ कदम ${activeStep + 1} पर आपका मार्गदर्शन कर रहा हूँ। आज क्या पकाना है?`
        : `👋 Hello! I am here guiding you on step ${activeStep + 1}. What can I help you cook right now?`;
    }

    // Default response based on personality
    if (selectedChef === 'aria') {
      return isHi
        ? `🔬 खाद्य विज्ञान के दृष्टिकोण से, पैन का तापमान स्थिर रखना महत्वपूर्ण है। क्या आप स्टार्च बॉन्डिंग, मेलार्ड ब्राउनिंग, या पायस (emulsion) संरक्षण के बारे में जानना चाहते हैं?`
        : `🔬 From a food science perspective, you want to maintain the temperature of your pan. Let me know if you want to discuss starch bonding, Maillard browning, or emulsion preservation!`;
    } else if (selectedChef === 'marco') {
      return isHi
        ? `👨‍🍳 यह बहुत बढ़िया सवाल है! मेरी दादी कहती थीं: आंच धीमी रखें, ताजी जड़ी-बूटियों का प्रयोग करें और दिल से पकाएं। मुझे बताएं कि क्या आपको कोई और मदद चाहिए!`
        : `👨‍🍳 That is a wonderful question! In my home, we say: keep the fire low, use the freshest herbs, and cook with your heart. Let me know if you need helper tips!`;
    } else {
      return isHi
        ? `🌶️ बहुत ही सुंदर प्रश्न है। हर मसाले का अपना महत्व है। मसालों को भूनने से उनका स्वाद बदलता है। मुझसे पूछें कि मसालों का स्वाद कैसे जगाया जाए!`
        : `🌶️ A wonderful query. Every spice has its own destiny. Searing, roasting, or simmering changes their molecular composition. Ask me how to wake up your spices!`;
    }
  };

  const handleNextStep = () => {
    if (activeStep < instructions.length - 1) {
      setActiveStep(prev => prev + 1);
    }
  };

  const handlePrevStep = () => {
    if (activeStep > 0) {
      setActiveStep(prev => prev - 1);
    }
  };

  return (
    <div className="guided-mode-overlay animate-fade-in" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      {/* Header */}
      <div className="guided-header" style={{ borderBottomColor: 'var(--border-color)', background: 'var(--surface-primary)' }}>
        <div>
          <span className="serif-title" style={{ fontSize: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sparkles size={20} style={{ color: 'var(--accent-primary)' }} /> 
            {isHi ? "हमारे साथ पकाएं (एआई शेफ गाइड)" : "Cook With Us (AI Chef Companion)"}
          </span>
          <span style={{ color: 'var(--text-secondary)', marginLeft: '8px', fontSize: '13px' }}>
            {isHi ? "इंटरैक्टिव कुकिंग:" : "Interactive Cooking for:"} <strong>{title}</strong>
          </span>
        </div>
        <button className="btn-icon-round" style={{ border: 'none' }} onClick={onClose}>
          <X size={20} />
        </button>
      </div>

      {/* Main Split Body */}
      <div style={{ flexGrow: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', overflow: 'hidden' }}>
        
        {/* Left Side: Video + Progress Navigation */}
        <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', borderRight: '1px solid var(--border-color)' }}>
          
          {/* YouTube Video Embed */}
          <div className="video-wrapper" style={{ marginBottom: 0, borderRadius: 'var(--radius-lg)' }}>
            <iframe 
              src={getYoutubeEmbedUrl(videoUrl)} 
              title={`${title} Cooking Tutorial`} 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
            ></iframe>
          </div>

          {/* Current Step Instruction card */}
          <div className="glass-panel" style={{ padding: '20px', background: 'var(--surface-primary)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span className="card-badge badge-quick-prep" style={{ background: 'var(--accent-primary)', fontSize: '11px' }}>
                {isHi ? `सक्रिय कदम ${activeStep + 1} / ${instructions.length}` : `Active Step ${activeStep + 1} of ${instructions.length}`}
              </span>
              {instructions[activeStep]?.duration && (
                <span className="card-badge" style={{ background: 'var(--bg-secondary)', color: 'var(--text-primary)', fontSize: '11px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  ⏱️ {instructions[activeStep].duration} {isHi ? 'मिनट' : 'mins'}
                </span>
              )}
            </div>
            <p className="serif-title" style={{ fontSize: '20px', lineHeight: '1.4', margin: '12px 0', fontWeight: '600' }}>
              "{isHi && instructions[activeStep]?.text_hi ? instructions[activeStep].text_hi : instructions[activeStep]?.text}"
            </p>

            {/* Step navigation buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
              <button 
                className="btn-nav-step" 
                onClick={handlePrevStep}
                disabled={activeStep === 0}
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                <ArrowLeft size={14} /> {isHi ? 'पीछे' : 'Back'}
              </button>
              <button 
                className="btn-nav-step primary" 
                onClick={handleNextStep}
                disabled={activeStep === instructions.length - 1}
                style={{ padding: '8px 16px', fontSize: '13px' }}
              >
                {isHi ? 'अगला कदम' : 'Next Step'} <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Tips checklist card */}
          <div className="glass-panel" style={{ padding: '16px', background: 'var(--glass-bg)', fontSize: '13px' }}>
            <span style={{ fontWeight: '700', display: 'block', marginBottom: '8px' }}>{isHi ? "💡 सुझाव:" : "💡 Pro-Tip for cooks:"}</span>
            <span>{isHi 
              ? "आप दाईं ओर चैट बॉक्स में शेफ से सवाल पूछ सकते हैं जैसे \"खाना जल रहा है\" या \"नमक कैसे कम करें\"। वे तुरंत बोलकर जवाब देंगे!" 
              : "You can ask the AI Chef specific questions like \"My pan is burning\" or \"Substitute cream\" in the chat log on the right. They speak their responses instantly!"}</span>
          </div>
        </div>

        {/* Right Side: AI Chat Companion Panel */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', background: 'var(--surface-primary)' }}>
          
          {/* Chef Personality Selector Header */}
          <div style={{ padding: '16px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-secondary)' }}>
            <span style={{ fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
              {isHi ? "एआई शेफ व्यक्तित्व चुनें:" : "Select AI Chef Personality:"}
            </span>
            <div style={{ display: 'flex', gap: '8px' }}>
              {Object.entries(CHEFS).map(([key, chef]) => (
                <button
                  key={key}
                  className={`btn-filter ${selectedChef === key ? 'active' : ''}`}
                  onClick={() => setSelectedChef(key)}
                  style={{ 
                    padding: '8px 12px', 
                    fontSize: '12px', 
                    flexGrow: 1, 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center', 
                    gap: '4px',
                    borderColor: selectedChef === key ? chef.color : 'var(--border-color)',
                    background: selectedChef === key ? chef.color : 'var(--surface-primary)'
                  }}
                >
                  <span>{chef.avatar}</span>
                  <span>{key === 'aria' ? (isHi ? 'एरिया (विज्ञान)' : 'Aria (Science)') : key === 'marco' ? (isHi ? 'मार्को (घरेलू)' : 'Marco (Tuscan)') : (isHi ? 'रणवीर (मसाले)' : 'Ranveer (Spice)')}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Chef status panel */}
          <div style={{ padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid var(--border-color)', background: 'var(--glass-bg)' }}>
            <div 
              style={{ 
                width: '40px', 
                height: '40px', 
                borderRadius: '50%', 
                background: 'var(--bg-secondary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                fontSize: '22px',
                border: `3px solid ${CHEFS[selectedChef].color}`,
                boxShadow: isSpeaking ? `0 0 12px ${CHEFS[selectedChef].color}` : 'none',
                animation: isSpeaking ? 'pulse-ring 1.5s infinite' : 'none'
              }}
            >
              {CHEFS[selectedChef].avatar}
            </div>
            <div style={{ flexGrow: 1 }}>
              <strong style={{ fontSize: '14px', display: 'block' }}>{CHEFS[selectedChef].name}</strong>
              <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>
                {isSpeaking ? (isHi ? '🔊 बोल रहे हैं...' : '🔊 Speaking...') : isTyping ? (isHi ? '💬 सोच रहे हैं...' : '💬 Thinking...') : (isHi ? '🟢 ऑनलाइन और सुन रहे हैं' : '🟢 Online & Listening')}
              </span>
            </div>
            {isSpeaking && (
              <button 
                className="btn-icon-round" 
                style={{ width: '30px', height: '30px', background: '#e74c3c', color: 'white', border: 'none' }}
                onClick={handleStopSpeech}
                title="Mute Speech"
              >
                <VolumeX size={14} />
              </button>
            )}
          </div>

          {/* Chat Logs Window */}
          <div style={{ flexGrow: 1, overflowY: 'auto', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {chatLog.map((msg, idx) => (
              <div 
                key={idx} 
                style={{ 
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '85%',
                  background: msg.sender === 'user' ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  color: msg.sender === 'user' ? 'white' : 'var(--text-primary)',
                  borderRadius: msg.sender === 'user' ? '12px 12px 0 12px' : '0 12px 12px 12px',
                  padding: '12px 16px',
                  boxShadow: 'var(--shadow-sm)',
                  fontSize: '13.5px',
                  lineHeight: '1.4'
                }}
              >
                {msg.sender === 'ai' && (
                  <span style={{ fontSize: '10px', color: CHEFS[msg.chef]?.color, fontWeight: '700', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>
                    {CHEFS[msg.chef]?.name}
                  </span>
                )}
                <p style={{ whiteSpace: 'pre-line' }}>{msg.text}</p>
                <span style={{ display: 'block', fontSize: '9px', textAlign: 'right', marginTop: '4px', opacity: 0.7 }}>
                  {msg.timestamp}
                </span>
              </div>
            ))}
            {isTyping && (
              <div style={{ 
                alignSelf: 'flex-start',
                background: 'var(--bg-secondary)',
                borderRadius: '0 12px 12px 12px',
                padding: '12px 16px',
                fontSize: '13px',
                color: 'var(--text-muted)'
              }}>
                {isHi ? 'विचार विमर्श जारी है...' : 'Typing commentary...'}
              </div>
            )}
            <div ref={logEndRef} />
          </div>

          {/* Quick Inquiry Chips */}
          <div style={{ padding: '8px 16px', display: 'flex', gap: '6px', overflowX: 'auto', background: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)' }}>
            <button className="btn-action-small" onClick={() => handleQuickAction('science')} style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>
              🧬 {isHi ? 'विज्ञान व्याख्या' : 'Explain Science'}
            </button>
            <button className="btn-action-small" onClick={() => handleQuickAction('rescue')} style={{ fontSize: '11px', whiteSpace: 'nowrap', color: '#e74c3c' }}>
              🆘 {isHi ? 'बचाव युक्तियाँ' : 'Help! I Failed'}
            </button>
            <button className="btn-action-small" onClick={() => handleQuickAction('swaps')} style={{ fontSize: '11px', whiteSpace: 'nowrap', color: 'var(--accent-secondary)' }}>
              🥛 {isHi ? 'सामग्री बदलाव' : 'Diet Swaps'}
            </button>
            <button className="btn-action-small" onClick={() => handleQuickAction('tip')} style={{ fontSize: '11px', whiteSpace: 'nowrap' }}>
              💡 {isHi ? 'कदम प्रो-टिप' : 'Step Pro-Tip'}
            </button>
          </div>

          {/* Message Input Footer */}
          <form onSubmit={handleSendMessage} style={{ padding: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', gap: '8px', background: 'var(--surface-primary)' }}>
            <input 
              type="text" 
              className="form-input" 
              placeholder={isHi ? `${CHEFS[selectedChef].name.split(' ')[1]} से सवाल पूछें...` : `Ask ${CHEFS[selectedChef].name.split(' ')[1]} a cooking question...`}
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              style={{ flexGrow: 1, borderRadius: 'var(--radius-full)', padding: '10px 16px', fontSize: '13px' }}
            />
            <button 
              type="submit" 
              className="btn-icon-round" 
              style={{ background: 'var(--accent-primary)', color: 'white', border: 'none', width: '38px', height: '38px' }}
              disabled={!userInput.trim() || isTyping}
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
