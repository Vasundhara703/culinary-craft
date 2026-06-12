import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowLeft, Clock, Users, Flame, Play, Pause, RotateCcw, 
  Check, CheckSquare, Square, ShoppingBag, Sparkles, BookOpen, Video,
  Volume2, VolumeX, Printer
} from 'lucide-react';
import confetti from 'canvas-confetti';
import AIChefCompanion from './AIChefCompanion';
import { getRecipeHealthMatches } from '../data/healthProfiles';
import { getYoutubeEmbedUrl } from '../utils/youtube';

const DEFAULT_RECIPE_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000";

export default function RecipeDetail({ recipe, onBack, onAddToShoppingList }) {
  const { title, description, image, videoUrl, difficulty, prepTime, cookTime, servings: baseServings, calories, tags, ingredients, instructions } = recipe;
  const healthMatches = getRecipeHealthMatches(recipe);

  // Servings state
  const [servings, setServings] = useState(baseServings);
  
  // Image Fallback Source state
  const [imgSrc, setImgSrc] = useState(image || DEFAULT_RECIPE_IMAGE);

  // Video playback states
  const [playVideo, setPlayVideo] = useState(false);
  const [showPoster, setShowPoster] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  // Reset video and poster state when recipe changes
  useEffect(() => {
    setImgSrc(image || DEFAULT_RECIPE_IMAGE);
    setPlayVideo(false);
    setShowPoster(false);
    setShowCelebration(false);
  }, [recipe]);

  // Ingredients checklist state (indexes of checked items)
  const [checkedIngredients, setCheckedIngredients] = useState({});
  
  // Tab state: 'instructions' or 'video'
  const [activeTab, setActiveTab] = useState('instructions');

  // Guided Cooking Mode state
  const [guidedMode, setGuidedMode] = useState(false);
  const [guidedStepIndex, setGuidedStepIndex] = useState(0);
  const [aiCompanionMode, setAiCompanionMode] = useState(false);

  // Active timers state (for normal instructions view and guided view)
  const [runningTimers, setRunningTimers] = useState({}); // step index -> seconds left
  const [timerIntervals, setTimerIntervals] = useState({}); // step index -> interval id

  // Text-To-Speech (Voice) States
  const [currentlySpeaking, setCurrentlySpeaking] = useState(null); // step number or 'guided'
  const [autoVoice, setAutoVoice] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' or 'hi'

  // Clean up timer intervals on unmount
  useEffect(() => {
    return () => {
      Object.values(timerIntervals).forEach(clearInterval);
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, [timerIntervals]);

  // Handle auto-speak transitions in Guided Cooking Mode
  useEffect(() => {
    if (guidedMode && autoVoice) {
      const step = instructions[guidedStepIndex];
      const stepText = language === 'hi' && step.text_hi ? step.text_hi : step.text;
      const prefix = language === 'hi' ? `कदम ${step.step}. ` : `Step ${step.step}. `;
      speakText(prefix + stepText, 'guided');
    } else {
      if (window.speechSynthesis && window.speechSynthesis.speaking && currentlySpeaking === 'guided') {
        window.speechSynthesis.cancel();
        setCurrentlySpeaking(null);
      }
    }
  }, [guidedStepIndex, guidedMode, autoVoice, language]);

  // Adjust servings
  const handleIncreaseServings = () => setServings(prev => prev + 1);
  const handleDecreaseServings = () => setServings(prev => Math.max(1, prev - 1));

  // Toggle ingredient check
  const toggleIngredient = (idx) => {
    setCheckedIngredients(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  // Add all checked or all ingredients to shopping list
  const handleAddSelectedToShopping = () => {
    const listToAdd = ingredients.map((ing, idx) => {
      const scaleFactor = servings / baseServings;
      const scaledQty = ing.quantity ? Number((ing.quantity * scaleFactor).toFixed(1)) : null;
      return {
        name: ing.name,
        quantity: scaledQty,
        unit: ing.unit,
        alternative: ing.alternative,
        recipeTitle: title,
        checked: checkedIngredients[idx] || false
      };
    });
    
    const unchecked = listToAdd.filter(item => !item.checked);
    
    if (unchecked.length === 0) {
      onAddToShoppingList(listToAdd);
    } else {
      onAddToShoppingList(unchecked);
    }
    
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 }
    });
  };

  // Format quantities nicely
  const formatQuantity = (qty) => {
    if (!qty) return '';
    const scaleFactor = servings / baseServings;
    const finalQty = qty * scaleFactor;
    return finalQty % 1 === 0 ? finalQty : finalQty.toFixed(1);
  };

  // Text-To-Speech helper
  const speakText = (text, key) => {
    if (!window.speechSynthesis) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }

    // Cancel current speaking if active
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      if (currentlySpeaking === key) {
        setCurrentlySpeaking(null);
        return;
      }
    }

    const utterance = new SpeechSynthesisUtterance(text);
    
    // Set language code based on current language
    utterance.lang = language === 'hi' ? 'hi-IN' : 'en-US';

    utterance.onend = () => {
      setCurrentlySpeaking(null);
    };
    
    utterance.onerror = () => {
      setCurrentlySpeaking(null);
    };

    // Attempt to set a native Hindi voice if Hindi is active
    const voices = window.speechSynthesis.getVoices();
    if (language === 'hi') {
      const hiVoice = voices.find(v => v.lang.startsWith('hi') || v.name.includes('India') || v.name.includes('Hindi'));
      if (hiVoice) utterance.voice = hiVoice;
    }

    setCurrentlySpeaking(key);
    window.speechSynthesis.speak(utterance);
  };

  // Step Timer functions (for standard inline list)
  const startTimer = (stepIdx, initialMinutes) => {
    if (timerIntervals[stepIdx]) {
      // Pause
      clearInterval(timerIntervals[stepIdx]);
      setTimerIntervals(prev => {
        const copy = { ...prev };
        delete copy[stepIdx];
        return copy;
      });
      return;
    }

    const totalSeconds = runningTimers[stepIdx] !== undefined 
      ? runningTimers[stepIdx] 
      : initialMinutes * 60;

    setRunningTimers(prev => ({ ...prev, [stepIdx]: totalSeconds }));

    const intervalId = setInterval(() => {
      setRunningTimers(prev => {
        const secondsLeft = prev[stepIdx];
        if (secondsLeft <= 1) {
          clearInterval(intervalId);
          
          // Audio & Voice Announcement upon completion
          if (window.speechSynthesis) {
            const utterance = new SpeechSynthesisUtterance(`Step ${stepIdx} timer completed!`);
            window.speechSynthesis.speak(utterance);
          }
          
          setTimerIntervals(oldInts => {
            const copy = { ...oldInts };
            delete copy[stepIdx];
            return copy;
          });
          return { ...prev, [stepIdx]: 0 };
        }
        return { ...prev, [stepIdx]: secondsLeft - 1 };
      });
    }, 1000);

    setTimerIntervals(prev => ({ ...prev, [stepIdx]: intervalId }));
  };

  const resetTimer = (stepIdx, minutes) => {
    if (timerIntervals[stepIdx]) {
      clearInterval(timerIntervals[stepIdx]);
      setTimerIntervals(prev => {
        const copy = { ...prev };
        delete copy[stepIdx];
        return copy;
      });
    }
    setRunningTimers(prev => ({ ...prev, [stepIdx]: minutes * 60 }));
  };

  const formatTimeDigits = (totalSeconds) => {
    if (totalSeconds === undefined) return '00:00';
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Guided Mode Functions
  const openGuidedMode = () => {
    // Warm up speech synthesis system on user click
    if (window.speechSynthesis) {
      window.speechSynthesis.speak(new SpeechSynthesisUtterance(''));
    }
    setGuidedStepIndex(0);
    setGuidedMode(true);
  };

  const closeGuidedMode = () => {
    if (window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setCurrentlySpeaking(null);
    setGuidedMode(false);
  };

  const handleNextStep = () => {
    if (guidedStepIndex < instructions.length - 1) {
      setGuidedStepIndex(prev => prev + 1);
    } else {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      setCurrentlySpeaking(null);
      
      // Massive confetti explosion!
      confetti({
        particleCount: 150,
        spread: 85,
        origin: { y: 0.6 }
      });
      setTimeout(() => {
        confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 } });
      }, 250);
      setTimeout(() => {
        confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 } });
      }, 400);

      setGuidedMode(false);
      setShowCelebration(true);
    }
  };

  const handlePrevStep = () => {
    if (guidedStepIndex > 0) {
      setGuidedStepIndex(prev => prev - 1);
    }
  };

  return (
    <div className="detail-view-container animate-fade-in">
      <button className="btn-back-nav" onClick={onBack}>
        <ArrowLeft size={18} /> Back to Recipes
      </button>

      <div className="detail-layout">
        {/* Left Column: Image, Info, Tabs (Steps/Video) */}
        <div>
          <div className="detail-image-hero">
            <img src={imgSrc} alt={title} onError={() => setImgSrc(DEFAULT_RECIPE_IMAGE)} />
            <div className="detail-image-overlay">
              <div className="detail-title-group">
                <span className={`card-badge badge-difficulty-${difficulty}`} style={{ marginBottom: '12px', display: 'inline-block' }}>
                  {difficulty}
                </span>
                <h1 className="serif-title">{title}</h1>
                <p style={{ opacity: 0.9, fontSize: '15px', maxWidth: '600px' }}>{description}</p>
                {/* Health Suitability Tags */}
                {healthMatches.length > 0 && (
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                    {healthMatches.map((m, idx) => (
                      <span 
                        key={idx} 
                        style={{ 
                          fontSize: '11px', 
                          background: 'rgba(255, 255, 255, 0.25)', 
                          color: '#fff', 
                          padding: '4px 10px', 
                          borderRadius: 'var(--radius-full)', 
                          backdropFilter: 'blur(4px)',
                          border: '1px solid rgba(255, 255, 255, 0.35)',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px'
                        }}
                        title={m.reason}
                      >
                        <span>{m.emoji}</span>
                        <strong>{m.label}</strong>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Stats Strip */}
          <div className="recipe-stats-strip">
            <div className="stat-box">
              <span className="stat-val">{prepTime + cookTime} mins</span>
              <span className="stat-lbl">Total Time</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{prepTime} mins</span>
              <span className="stat-lbl">Prep Time</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">{cookTime} mins</span>
              <span className="stat-lbl">Cook Time</span>
            </div>
            {calories && (
              <div className="stat-box">
                <span className="stat-val">{calories} kcal</span>
                <span className="stat-lbl">Calories</span>
              </div>
            )}
          </div>

          {/* Tab Header */}
          <div className="detail-tabs-header">
            <button 
              className={`tab-btn ${activeTab === 'instructions' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructions')}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <BookOpen size={16} /> Instructions ({instructions.length})
              </span>
            </button>
            {videoUrl && (
              <button 
                className={`tab-btn ${activeTab === 'video' ? 'active' : ''}`}
                onClick={() => setActiveTab('video')}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Video size={16} /> Video Tutorial
                </span>
              </button>
            )}
          </div>

          {/* Tab Content */}
          {activeTab === 'video' && videoUrl ? (
            <div className="video-section">
              {showPoster ? (
                <div className="recipe-poster-container animate-fade-in">
                  <div className="recipe-poster-actions">
                    <button 
                      className="btn-pantry-check-secondary"
                      style={{ width: 'auto', marginTop: 0, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => setShowPoster(false)}
                    >
                      <Video size={14} /> Back to Video
                    </button>
                    <button 
                      className="btn-pantry-check"
                      style={{ width: 'auto', marginTop: 0, padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => window.print()}
                    >
                      <Printer size={14} /> Print Poster
                    </button>
                  </div>
                  
                  <div className="recipe-poster-card">
                    <div className="recipe-poster-header">
                      <div className="recipe-poster-subtitle">Culinary Craft Kitchen Masterpiece</div>
                      <h2 className="recipe-poster-title serif-title">{title.toUpperCase()}</h2>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '14px', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto' }}>
                        {description}
                      </p>
                    </div>

                    <div className="recipe-poster-meta">
                      <div className="recipe-poster-meta-item">
                        <span className="recipe-poster-meta-label">Difficulty</span>
                        <span className="recipe-poster-meta-value" style={{ textTransform: 'capitalize' }}>{difficulty}</span>
                      </div>
                      <div className="recipe-poster-meta-item">
                        <span className="recipe-poster-meta-label">Prep Time</span>
                        <span className="recipe-poster-meta-value">{prepTime} mins</span>
                      </div>
                      <div className="recipe-poster-meta-item">
                        <span className="recipe-poster-meta-label">Cook Time</span>
                        <span className="recipe-poster-meta-value">{cookTime} mins</span>
                      </div>
                      <div className="recipe-poster-meta-item">
                        <span className="recipe-poster-meta-label">Calories</span>
                        <span className="recipe-poster-meta-value">{calories ? `${calories} kcal` : 'N/A'}</span>
                      </div>
                    </div>

                    <div className="recipe-poster-body">
                      <div>
                        <h4 className="recipe-poster-section-title">Ingredients</h4>
                        <ul className="recipe-poster-ingredients-list">
                          {ingredients.map((ing, idx) => (
                            <li key={idx}>
                              <strong>
                                {ing.quantity ? `${Number((ing.quantity * (servings / baseServings)).toFixed(1))}` : ''} {ing.unit}
                              </strong>{' '}
                              {ing.name}
                              {ing.alternative && (
                                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px' }}>
                                  Alt: {ing.alternative}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="recipe-poster-section-title">Instructions Cheat-Sheet</h4>
                        <ol className="recipe-poster-steps-list">
                          {instructions.map((stepItem, idx) => (
                            <li key={idx}>
                              {language === 'hi' && stepItem.text_hi ? stepItem.text_hi : stepItem.text}
                              {stepItem.duration && (
                                <span style={{ color: 'var(--accent-primary)', fontSize: '12px', marginLeft: '6px', fontWeight: '500' }}>
                                  ({stepItem.duration} mins)
                                </span>
                              )}
                            </li>
                          ))}
                        </ol>
                      </div>
                    </div>

                    <div className="recipe-poster-footer">
                      Culinary Craft Kitchens &bull; Est. 2026 &bull; Handcrafted Cooking Collection
                    </div>
                  </div>
                </div>
              ) : playVideo ? (
                <div>
                  <div className="video-wrapper animate-fade-in">
                    <iframe 
                      src={`${getYoutubeEmbedUrl(videoUrl)}?autoplay=1`} 
                      title={`${title} Cooking Tutorial`} 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '16px', gap: '12px', flexWrap: 'wrap' }}>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)', fontStyle: 'italic', margin: 0 }}>
                      Follow along with this step-by-step masterclass video to perfect your technique.
                    </p>
                    <button 
                      className="btn-pantry-check-secondary"
                      style={{ width: 'auto', marginTop: 0, padding: '8px 16px', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px' }}
                      onClick={() => {
                        setPlayVideo(false);
                        setShowPoster(true);
                      }}
                    >
                      <Sparkles size={14} /> Video not loading? Show Recipe Poster
                    </button>
                  </div>
                </div>
              ) : (
                <div className="video-wrapper">
                  <div 
                    className="video-placeholder-graphic"
                    style={{
                      backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.8)), url(${imgSrc})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      position: 'absolute',
                      width: '100%',
                      height: '100%',
                      top: 0,
                      left: 0
                    }}
                    onClick={() => setPlayVideo(true)}
                  >
                    <div className="video-play-btn animate-pulse-ring">
                      <Play size={28} fill="white" style={{ marginLeft: '4px' }} />
                    </div>
                    <h3 className="serif-title" style={{ color: '#fff', fontSize: '24px', marginBottom: '8px', textShadow: '0 2px 4px rgba(0,0,0,0.6)' }}>
                      Watch: {title} Video Guide
                    </h3>
                    <p style={{ color: '#e0e0e0', fontSize: '14px', textShadow: '0 1px 2px rgba(0,0,0,0.6)' }}>
                      Prep: {prepTime}m | Cook: {cookTime}m | Click to Play Tutorial
                    </p>
                    <button 
                      className="btn-pantry-check-secondary"
                      style={{ 
                        width: 'auto', 
                        marginTop: '20px', 
                        padding: '6px 14px', 
                        fontSize: '12px', 
                        borderColor: 'rgba(255,255,255,0.4)', 
                        color: '#fff',
                        backgroundColor: 'rgba(0,0,0,0.4)'
                      }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowPoster(true);
                      }}
                    >
                      Or Open Recipe Poster
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="instructions-section">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '12px' }}>
                <h3 className="serif-title" style={{ fontSize: '22px' }}>Preparation Steps</h3>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Language Selector */}
                  <div style={{ display: 'flex', gap: '4px', background: 'var(--bg-secondary)', padding: '4px', borderRadius: 'var(--radius-full)', border: '1px solid var(--border-color)' }}>
                    <button 
                      type="button"
                      className={`btn-filter ${language === 'en' ? 'active' : ''}`} 
                      style={{ padding: '6px 12px', fontSize: '12px', marginTop: 0 }}
                      onClick={() => setLanguage('en')}
                    >
                      English
                    </button>
                    <button 
                      type="button"
                      className={`btn-filter ${language === 'hi' ? 'active' : ''}`} 
                      style={{ padding: '6px 12px', fontSize: '12px', marginTop: 0 }}
                      onClick={() => setLanguage('hi')}
                    >
                      हिन्दी
                    </button>
                  </div>

                  <button 
                    className="btn-pantry-check-secondary" 
                    style={{ 
                      width: 'auto', 
                      marginTop: 0, 
                      padding: '10px 20px', 
                      borderColor: 'var(--accent-primary)', 
                      color: 'var(--accent-primary)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }} 
                    onClick={() => setAiCompanionMode(true)}
                  >
                    <Sparkles size={16} style={{ color: 'var(--accent-primary)' }} /> Cook With Us (AI Chef)
                  </button>
                  <button className="btn-pantry-check" style={{ width: 'auto', marginTop: 0, padding: '10px 20px' }} onClick={openGuidedMode}>
                    <Sparkles size={16} /> Start Guided Cooking
                  </button>
                </div>
              </div>

              <div className="instructions-list">
                {instructions.map((stepItem, idx) => {
                  const timerSeconds = runningTimers[stepItem.step];
                  const isTimerRunning = !!timerIntervals[stepItem.step];
                  const displayTime = timerSeconds !== undefined ? timerSeconds : stepItem.duration * 60;
                  
                  return (
                    <div key={idx} className="instruction-step">
                      <div className="step-num-bubble">{stepItem.step}</div>
                      <div className="step-details">
                        <p className="step-desc">
                          {language === 'hi' && stepItem.text_hi ? stepItem.text_hi : stepItem.text}
                        </p>
                        
                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', alignItems: 'center' }}>
                          {stepItem.duration && (
                            <div className={`step-timer-widget ${isTimerRunning ? 'timer-running' : ''}`}>
                              <Clock size={14} />
                              <span>{formatTimeDigits(displayTime)}</span>
                              <button 
                                className="btn-step-timer-action"
                                onClick={() => startTimer(stepItem.step, stepItem.duration)}
                              >
                                {isTimerRunning ? <Pause size={12} fill="white" /> : <Play size={12} fill="white" />}
                              </button>
                              {(timerSeconds !== undefined && timerSeconds !== stepItem.duration * 60) && (
                                <button 
                                  className="btn-step-timer-action"
                                  style={{ backgroundColor: 'var(--text-secondary)' }}
                                  onClick={() => resetTimer(stepItem.step, stepItem.duration)}
                                >
                                  <RotateCcw size={12} />
                                </button>
                              )}
                            </div>
                          )}

                          {/* Speech Reader Widget */}
                          <button
                            className={`step-timer-widget ${currentlySpeaking === stepItem.step ? 'timer-running' : ''}`}
                            style={{ cursor: 'pointer', border: 'none' }}
                            onClick={() => speakText(language === 'hi' && stepItem.text_hi ? stepItem.text_hi : stepItem.text, stepItem.step)}
                            title="Read step details aloud"
                          >
                            {currentlySpeaking === stepItem.step ? <VolumeX size={14} /> : <Volume2 size={14} />}
                            <span>{currentlySpeaking === stepItem.step ? 'Stop Voice' : 'Speak Step'}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Ingredients Side Panel */}
        <aside className="ingredients-side-panel">
          <div className="panel-header">
            <h3 className="panel-title serif-title">Ingredients</h3>
            
            <div className="servings-adjuster">
              <span className="servings-lbl">Servings:</span>
              <button className="btn-adjust" onClick={handleDecreaseServings}>-</button>
              <span className="servings-count">{servings}</span>
              <button className="btn-adjust" onClick={handleIncreaseServings}>+</button>
            </div>
          </div>

          <div className="ingredients-checklist">
            {ingredients.map((ing, idx) => {
              const isChecked = !!checkedIngredients[idx];
              return (
                <div key={idx} className={`ingredient-row ${isChecked ? 'checked' : ''}`}>
                  <input 
                    type="checkbox" 
                    id={`ing-${idx}`} 
                    className="ingredient-check-input"
                    checked={isChecked}
                    onChange={() => toggleIngredient(idx)}
                  />
                  <div className="ingredient-info">
                    <label htmlFor={`ing-${idx}`} style={{ cursor: 'pointer' }}>
                      <span className="ingredient-qty">
                        {formatQuantity(ing.quantity)} {ing.unit}
                      </span>
                      <span className="ingredient-name">{ing.name}</span>
                    </label>
                    {ing.alternative && (
                      <span className="ingredient-alt-tag">
                        💡 Alternative: {ing.alternative}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <button className="btn-pantry-check" onClick={handleAddSelectedToShopping}>
            <ShoppingBag size={18} /> Add Needed to Shopping List
          </button>
          
          <p style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center', marginTop: '12px' }}>
            Unchecked ingredients will be exported to your active shopping list.
          </p>
        </aside>
      </div>

      {/* Guided Cooking Mode Full-Screen Overlay */}
      {guidedMode && (
        <div className="guided-mode-overlay animate-fade-in">
          <div className="guided-header">
            <div>
              <span className="serif-title" style={{ fontSize: '20px' }}>Guided Cooking Mode</span>
              <span style={{ color: 'var(--text-secondary)', marginLeft: '12px', fontSize: '14px' }}>
                {title}
              </span>
            </div>
            <button className="btn-icon-round guided-close" onClick={closeGuidedMode}>
              <ArrowLeft size={18} /> Exit
            </button>
          </div>

          <div className="guided-body">
            <div className="guided-step-container">
              <div className="guided-step-indicator">
                {language === 'hi' ? `कदम ${instructions[guidedStepIndex].step} / ${instructions.length}` : `Step ${instructions[guidedStepIndex].step} of ${instructions.length}`}
              </div>
              <div className="guided-step-text">
                "{language === 'hi' && instructions[guidedStepIndex].text_hi ? instructions[guidedStepIndex].text_hi : instructions[guidedStepIndex].text}"
              </div>

              {/* Speech reader dashboard row */}
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginBottom: '40px' }}>
                <button 
                  className="btn-pantry-check-secondary"
                  style={{ width: 'auto', marginTop: 0, padding: '10px 20px', display: 'flex', alignItems: 'center', gap: '8px' }}
                  onClick={() => speakText(language === 'hi' && instructions[guidedStepIndex].text_hi ? instructions[guidedStepIndex].text_hi : instructions[guidedStepIndex].text, 'guided')}
                >
                  {currentlySpeaking === 'guided' ? <VolumeX size={16} /> : <Volume2 size={16} />}
                  {currentlySpeaking === 'guided' ? 'Stop Speaking' : 'Read Aloud'}
                </button>

                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}>
                  <input 
                    type="checkbox" 
                    checked={autoVoice} 
                    onChange={(e) => {
                      setAutoVoice(e.target.checked);
                      if (e.target.checked && window.speechSynthesis) {
                        window.speechSynthesis.speak(new SpeechSynthesisUtterance('')); // Warm up
                      }
                    }}
                    className="ingredient-check-input"
                    style={{ marginTop: 0 }}
                  />
                  {language === 'hi' ? 'ऑटो-रीड स्टेप्स' : 'Auto-read steps'}
                </label>
              </div>

              {instructions[guidedStepIndex].duration && (
                <div className="guided-step-timer">
                  <div className={`timer-ring-big ${!!timerIntervals[instructions[guidedStepIndex].step] ? 'active' : ''}`}>
                    <span className="timer-digits">
                      {formatTimeDigits(
                        runningTimers[instructions[guidedStepIndex].step] !== undefined 
                          ? runningTimers[instructions[guidedStepIndex].step] 
                          : instructions[guidedStepIndex].duration * 60
                      )}
                    </span>
                    <span className="timer-ring-lbl">Minutes Left</span>
                  </div>

                  <div className="timer-actions-row">
                    <button 
                      className="btn-pantry-check" 
                      style={{ width: 'auto', marginTop: 0, padding: '8px 16px', fontSize: '13px' }}
                      onClick={() => startTimer(instructions[guidedStepIndex].step, instructions[guidedStepIndex].duration)}
                    >
                      {!!timerIntervals[instructions[guidedStepIndex].step] ? <Pause size={14} /> : <Play size={14} />}
                      {!!timerIntervals[instructions[guidedStepIndex].step] ? 'Pause Timer' : 'Start Timer'}
                    </button>
                    {(runningTimers[instructions[guidedStepIndex].step] !== undefined && 
                      runningTimers[instructions[guidedStepIndex].step] !== instructions[guidedStepIndex].duration * 60) && (
                      <button 
                        className="btn-pantry-check-secondary" 
                        style={{ width: 'auto', marginTop: 0, padding: '8px 16px', fontSize: '13px' }}
                        onClick={() => resetTimer(instructions[guidedStepIndex].step, instructions[guidedStepIndex].duration)}
                      >
                        <RotateCcw size={14} /> Reset
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="guided-footer">
            <button 
              className="btn-nav-step" 
              onClick={handlePrevStep}
              disabled={guidedStepIndex === 0}
            >
              Previous Step
            </button>
            <div style={{ fontSize: '14px', fontWeight: '500', color: 'var(--text-secondary)' }}>
              Progress: {Math.round(((guidedStepIndex + 1) / instructions.length) * 100)}%
            </div>
            <button 
              className="btn-nav-step primary" 
              onClick={handleNextStep}
            >
              {guidedStepIndex === instructions.length - 1 ? 'Finish & Feast! 🍽️' : 'Next Step'}
            </button>
          </div>
        </div>
      )}

      {/* AI Chef Companion Overlay */}
      <AIChefCompanion 
        isOpen={aiCompanionMode}
        onClose={() => setAiCompanionMode(false)}
        recipe={recipe}
        currentStepIndex={guidedStepIndex}
        language={language}
      />

      {/* Celebration Modal */}
      {showCelebration && (
        <div 
          className="guided-mode-overlay animate-fade-in" 
          style={{ 
            zIndex: 9999, 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          }}
        >
          <div 
            className="glass-panel" 
            style={{ 
              maxWidth: '500px', 
              width: '90%', 
              padding: '40px', 
              borderRadius: 'var(--radius-lg)', 
              textAlign: 'center', 
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
              position: 'relative',
              backgroundColor: 'var(--surface-primary)'
            }}
          >
            <div className="celebration-bounce-icons" style={{
              fontSize: '64px',
              marginBottom: '20px'
            }}>
              🎉🥳🍽️
            </div>
            
            <h2 className="serif-title" style={{ fontSize: '32px', marginBottom: '16px', color: 'var(--text-primary)' }}>
              Feast Completed!
            </h2>
            
            <p style={{ fontSize: '16px', color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '12px' }}>
              Congratulations! You have successfully cooked **{title}**.
            </p>
            
            <p style={{ fontSize: '18px', fontWeight: 'bold', color: 'var(--accent-primary)', marginBottom: '24px' }}>
              Please visit us again for your next meal! ❤️✨
            </p>
            
            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px' }}>
              <button 
                className="btn-pantry-check" 
                style={{ width: '100%', padding: '14px', fontSize: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={() => {
                  setShowCelebration(false);
                  onBack(); // Redirects to Home Recipes view!
                }}
              >
                Done & Return to Home Recipes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
