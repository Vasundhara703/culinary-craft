import React, { useState, useEffect, useRef } from 'react';
import Header from './components/Header';
import RecipeCard from './components/RecipeCard';
import RecipeDetail from './components/RecipeDetail';
import AdminPanel from './components/AdminPanel';
import ShoppingList from './components/ShoppingList';
import { defaultRecipes } from './data/defaultRecipes';
import { kaggleRecipes } from './data/kaggleRecipes';
import { Search, Flame, Clock, Check } from 'lucide-react';
import { healthProfilesList, matchesHealthProfile } from './data/healthProfiles';

const checkIsLocal = () => {
  const hn = window.location.hostname;
  return hn === 'localhost' || 
         hn === '127.0.0.1' || 
         hn.startsWith('192.168.') || 
         hn.startsWith('10.') || 
         hn.startsWith('172.') || 
         hn.endsWith('.local');
};

export default function App() {
  // Database States
  const [recipes, setRecipes] = useState([]);
  const [shoppingList, setShoppingList] = useState([]);
  const recipesRef = useRef([]);

  useEffect(() => {
    recipesRef.current = recipes;
  }, [recipes]);
  
  // Navigation & Session Auth
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(() => {
    return sessionStorage.getItem('user_authed') === 'true';
  });
  const [userDisplayName, setUserDisplayName] = useState(() => {
    return sessionStorage.getItem('user_name') || '';
  });
  const [currentView, setView] = useState(() => {
    if (sessionStorage.getItem('admin_authed') === 'true') return 'admin';
    if (sessionStorage.getItem('user_authed') === 'true') return 'home';
    return 'landing';
  });
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [returnView, setReturnView] = useState('home');
  
  // Creator Card Slide State
  const [creatorSlide, setCreatorSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCreatorSlide(prev => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  // Interface Options
  const [theme, setTheme] = useState('light');
  const [isShoppingListOpen, setIsShoppingListOpen] = useState(false);
  
  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedDifficulty, setSelectedDifficulty] = useState('All');
  const [maxTime, setMaxTime] = useState(150); // minutes
  const [selectedHealthProfile, setSelectedHealthProfile] = useState('All');

  // Admin Authentication States
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    return sessionStorage.getItem('admin_authed') === 'true';
  });
  const adminAuthedRef = useRef(isAdminAuthenticated);
  useEffect(() => {
    adminAuthedRef.current = isAdminAuthenticated;
  }, [isAdminAuthenticated]);
  
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [syncStatus, setSyncStatus] = useState('syncing');

  // Unified Login Inputs
  const [loginUsername, setLoginUsername] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginErrorMsg, setLoginErrorMsg] = useState('');

  // OTP States
  const [otpSent, setOtpSent] = useState(false);
  const [otpLoading, setOtpLoading] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  // Feedback Form States
  const [feedbackName, setFeedbackName] = useState('');
  const [feedbackEmail, setFeedbackEmail] = useState('');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackStatus, setFeedbackStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [feedbackErrorMsg, setFeedbackErrorMsg] = useState('');

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    if (!feedbackName.trim() || !feedbackEmail.trim() || !feedbackMessage.trim()) {
      alert("Please fill in all feedback fields.");
      return;
    }
    
    setFeedbackStatus('submitting');
    setFeedbackErrorMsg('');
    
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: feedbackName.trim(),
          email: feedbackEmail.trim(),
          message: feedbackMessage.trim()
        })
      });
      
      const data = await response.json();
      if (response.ok) {
        setFeedbackStatus('success');
        setFeedbackName('');
        setFeedbackEmail('');
        setFeedbackMessage('');
      } else {
        setFeedbackStatus('error');
        setFeedbackErrorMsg(data.error || 'Failed to submit feedback.');
      }
    } catch (err) {
      console.error("Feedback submit error:", err);
      setFeedbackStatus('error');
      setFeedbackErrorMsg('Network error. Failed to connect to server.');
    }
  };

  // Route Guard to redirect unauthenticated visitors to landing portal
  useEffect(() => {
    const isAdmin = sessionStorage.getItem('admin_authed') === 'true';
    const isUser = sessionStorage.getItem('user_authed') === 'true';
    if (!isAdmin && !isUser && currentView !== 'landing') {
      setView('landing');
    }
  }, [currentView]);

  const handleSendOTP = async (e) => {
    e.preventDefault();
    const emailLower = loginEmail.trim().toLowerCase();
    const usernameTrim = loginUsername.trim();

    if (!emailLower) {
      setLoginErrorMsg('Please fill in your Gmail/Email first.');
      return;
    }

    if (emailLower === 'mishravasundhara6@gmail.com' || emailLower === 'admin@culinarycraft.com') {
      setLoginErrorMsg('Admin accounts use a static passcode. Please enter the passcode.');
      return;
    }

    setOtpLoading(true);
    setLoginErrorMsg('');
    setOtpMessage('');

    try {
      const response = await fetch('/api/otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: emailLower,
          username: usernameTrim || 'Guest Chef',
          action: 'send'
        })
      });

      const data = await response.json();
      if (response.ok) {
        setOtpSent(true);
        if (data.status === 'logged') {
          setOtpMessage(data.message);
        } else {
          setOtpMessage('One-time passcode sent to your email!');
        }
      } else {
        setLoginErrorMsg(data.error || 'Failed to send OTP.');
      }
    } catch (err) {
      console.error("OTP send error:", err);
      setLoginErrorMsg('Network error. Failed to connect to server.');
    } finally {
      setOtpLoading(false);
    }
  };

  const handleUnifiedLogin = async (e) => {
    e.preventDefault();
    const emailLower = loginEmail.trim().toLowerCase();
    const usernameTrim = loginUsername.trim();
    const password = loginPassword.trim();

    if (!emailLower || !password) {
      setLoginErrorMsg('Please fill in Gmail and Passcode.');
      return;
    }

    // Check if it's the Admin logging in
    if (
      (emailLower === 'mishravasundhara6@gmail.com' || emailLower === 'admin@culinarycraft.com') && 
      password === 'craft2026'
    ) {
      setIsAdminAuthenticated(true);
      sessionStorage.setItem('admin_authed', 'true');
      sessionStorage.setItem('admin_email', emailLower);
      
      // Clear login inputs
      setLoginUsername('');
      setLoginEmail('');
      setLoginPassword('');
      setLoginErrorMsg('');
      setOtpSent(false);
      setOtpMessage('');
      
      setView('admin');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // It's a standard user logging in
      if (!usernameTrim) {
        setLoginErrorMsg('Please choose a username to enter as a guest.');
        return;
      }

      if (emailLower === 'mishravasundhara6@gmail.com' || emailLower === 'admin@culinarycraft.com') {
        setLoginErrorMsg('Incorrect Admin passcode. Please try again.');
        return;
      }

      // Guest logins verify the OTP via API
      setLoginErrorMsg('');
      try {
        const response = await fetch('/api/otp', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            email: emailLower,
            otp: password,
            action: 'verify'
          })
        });

        const data = await response.json();
        if (response.ok) {
          setIsUserAuthenticated(true);
          setUserDisplayName(usernameTrim);
          sessionStorage.setItem('user_authed', 'true');
          sessionStorage.setItem('user_name', usernameTrim);
          sessionStorage.setItem('user_email', emailLower);
          
          // Clear login inputs
          setLoginUsername('');
          setLoginEmail('');
          setLoginPassword('');
          setLoginErrorMsg('');
          setOtpSent(false);
          setOtpMessage('');
          
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          setLoginErrorMsg(data.error || 'Verification failed. Please check your passcode.');
        }
      } catch (err) {
        console.error("OTP verify error:", err);
        setLoginErrorMsg('Network error. Failed to verify OTP.');
      }
    }
  };

  const handleLogout = () => {
    setIsAdminAuthenticated(false);
    setIsUserAuthenticated(false);
    setUserDisplayName('');
    sessionStorage.removeItem('admin_authed');
    sessionStorage.removeItem('admin_email');
    sessionStorage.removeItem('user_authed');
    sessionStorage.removeItem('user_name');
    sessionStorage.removeItem('user_email');
    setOtpSent(false);
    setOtpMessage('');
    
    setView('landing');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Load Initial Settings
  useEffect(() => {
    // 1. Theme
    const savedTheme = sessionStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // 2. Recipes Database (Offline-first Load)
    let initialRecipes = [...defaultRecipes, ...kaggleRecipes];
    const savedRecipes = localStorage.getItem('recipes_db');
    const dbVersion = localStorage.getItem('recipes_db_version');
    
    if (savedRecipes) {
      try {
        const parsed = JSON.parse(savedRecipes);
        
        // Upgrade database to v4 to incorporate new Indian recipes without losing user edits
        if (dbVersion !== 'v4') {
          // Identify which default/Kaggle recipes are not already in the user's database
          const existingIds = new Set(parsed.map(r => r.id));
          const missingRecipes = [...defaultRecipes, ...kaggleRecipes].filter(r => !existingIds.has(r.id));
          
          if (missingRecipes.length > 0) {
            // Append missing recipes to the user's existing recipes
            const merged = [...parsed, ...missingRecipes];
            initialRecipes = merged;
            localStorage.setItem('recipes_db', JSON.stringify(merged));
            const timestamp = Date.now();
            localStorage.setItem('recipes_db_last_updated', timestamp.toString());
            // Proactively upload to cloud to share the merged dataset across other devices (only if admin is authed)
            if (adminAuthedRef.current) {
              uploadToCloud({
                recipes: merged,
                lastUpdated: timestamp
              });
            }
          } else {
            initialRecipes = parsed;
          }
          localStorage.setItem('recipes_db_version', 'v4');
        } else {
          initialRecipes = parsed;
        }
      } catch (e) {
        console.error("Failed to parse local recipes database, loading defaults with Kaggle dataset", e);
        initialRecipes = [...defaultRecipes, ...kaggleRecipes];
        localStorage.setItem('recipes_db', JSON.stringify(initialRecipes));
        localStorage.setItem('recipes_db_version', 'v4');
        localStorage.setItem('recipes_db_last_updated', '0');
      }
    } else {
      localStorage.setItem('recipes_db', JSON.stringify(initialRecipes));
      localStorage.setItem('recipes_db_version', 'v4');
    }
    setRecipes(initialRecipes);

    // 3. Cloud Synchronization (Background Fetch & Sync)
    const syncWithCloud = async () => {
      try {
        const isLocal = checkIsLocal();
        const url = isLocal 
          ? `https://kvdb.io/TvGYRp8bXXZoRaeWemPWCu/recipes_db?t=${Date.now()}` 
          : `/api/recipes?t=${Date.now()}`;
        const response = await fetch(url);
        if (response.ok) {
          const cloudData = await response.json();
          let cloudRecipes = [];
          let cloudLastUpdated = 0;
          
          // Parse if cloud data is in container format
          if (cloudData && typeof cloudData === 'object' && Array.isArray(cloudData.recipes)) {
            cloudRecipes = cloudData.recipes;
            cloudLastUpdated = Number(cloudData.lastUpdated) || 0;
          } else if (Array.isArray(cloudData)) {
            // Fallback for old database format
            cloudRecipes = cloudData;
            cloudLastUpdated = 0;
          }
          
          const localLastUpdated = Number(localStorage.getItem('recipes_db_last_updated')) || 0;
          const localRecipes = JSON.parse(localStorage.getItem('recipes_db')) || [];
          
          if (cloudRecipes.length > 0) {
            if (cloudLastUpdated > localLastUpdated) {
              // Cloud data is newer, update local state
              setRecipes(cloudRecipes);
              localStorage.setItem('recipes_db', JSON.stringify(cloudRecipes));
              localStorage.setItem('recipes_db_last_updated', cloudLastUpdated.toString());
              setSyncStatus('synced');
            } else if (localLastUpdated > cloudLastUpdated) {
              // Local data is newer
              if (adminAuthedRef.current) {
                // Push to cloud only if admin is authenticated
                await uploadToCloud({
                  recipes: localRecipes,
                  lastUpdated: localLastUpdated
                });
              } else {
                // Otherwise, a normal visitor's local storage is out-of-sync or contains defaults.
                // Sync DOWN from the cloud to get the latest admin edits.
                setRecipes(cloudRecipes);
                localStorage.setItem('recipes_db', JSON.stringify(cloudRecipes));
                localStorage.setItem('recipes_db_last_updated', cloudLastUpdated.toString());
                setSyncStatus('synced');
              }
            } else {
              // Timestamps are equal, fully synced
              setSyncStatus('synced');
            }
          }
        } else if (response.status === 404) {
          // Cloud key does not exist yet. Upload our current state only if admin is authenticated!
          if (adminAuthedRef.current) {
            const localLastUpdated = Number(localStorage.getItem('recipes_db_last_updated')) || 0;
            const localRecipes = JSON.parse(localStorage.getItem('recipes_db')) || [];
            await uploadToCloud({
              recipes: localRecipes,
              lastUpdated: localLastUpdated
            });
          } else {
            setSyncStatus('synced');
          }
        } else {
          const text = await response.text();
          if (text.includes('not verified')) {
            setSyncStatus('pending_verification');
          } else {
            setSyncStatus('error');
          }
        }
      } catch (err) {
        console.error("Cloud connection failed:", err);
        setSyncStatus('error');
      }
    };

    syncWithCloud();

    // Start background polling every 10 seconds to keep all devices synced in real-time
    const intervalId = setInterval(syncWithCloud, 10000);

    // 4. Shopping List
    const savedList = localStorage.getItem('shopping_list');
    if (savedList) {
      try {
        setShoppingList(JSON.parse(savedList));
      } catch (e) {
        console.error("Failed to parse shopping list", e);
      }
    }

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Sync to Cloud Helper
  const uploadToCloud = async (dataToSync) => {
    // Double check authentication before uploading to the cloud
    if (!adminAuthedRef.current) {
      console.log("Cloud upload bypassed: User is not authenticated as administrator.");
      return;
    }
    try {
      const isLocal = checkIsLocal();
      const url = isLocal ? 'https://kvdb.io/TvGYRp8bXXZoRaeWemPWCu/recipes_db' : '/api/recipes';
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToSync)
      });
      const text = await response.text();
      if (response.ok) {
        setSyncStatus('synced');
      } else if (text.includes('not verified')) {
        setSyncStatus('pending_verification');
      } else {
        setSyncStatus('error');
      }
    } catch (err) {
      console.error("Cloud save failed:", err);
      setSyncStatus('error');
    }
  };

  // Theme Toggler
  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
    sessionStorage.setItem('theme', nextTheme);
    if (nextTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  // Sync Helper
  const updateAndSyncDatabase = (updatedRecipes) => {
    const timestamp = Date.now();
    setRecipes(updatedRecipes);
    localStorage.setItem('recipes_db', JSON.stringify(updatedRecipes));
    localStorage.setItem('recipes_db_last_updated', timestamp.toString());
    uploadToCloud({
      recipes: updatedRecipes,
      lastUpdated: timestamp
    });
  };

  // Recipe CRUD Handlers
  const handleAddRecipe = (newRecipe) => {
    const updated = [newRecipe, ...recipes];
    updateAndSyncDatabase(updated);
  };

  const handleUpdateRecipe = (updatedRecipe) => {
    const updated = recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r);
    updateAndSyncDatabase(updated);
    // If the active detail view is editing, refresh its info
    if (selectedRecipe && selectedRecipe.id === updatedRecipe.id) {
      setSelectedRecipe(updatedRecipe);
    }
  };

  const handleDeleteRecipe = (id) => {
    const updated = recipes.filter(r => r.id !== id);
    updateAndSyncDatabase(updated);
    if (selectedRecipe && selectedRecipe.id === id) {
      setSelectedRecipe(null);
      setView('home');
    }
  };

  const handleRestoreDefaults = () => {
    if (window.confirm("This will overwrite all your custom changes and restore default recipes (including the Kaggle dataset). Proceed?")) {
      const mergedDefaults = [...defaultRecipes, ...kaggleRecipes];
      setRecipes(mergedDefaults);
      localStorage.setItem('recipes_db', JSON.stringify(mergedDefaults));
      localStorage.setItem('recipes_db_version', 'v4');
      const timestamp = Date.now();
      localStorage.setItem('recipes_db_last_updated', timestamp.toString());
      uploadToCloud({
        recipes: mergedDefaults,
        lastUpdated: timestamp
      });
      alert("Database restored to defaults!");
    }
  };

  // Shopping List Handlers
  const handleAddToShoppingList = (items) => {
    setShoppingList(prev => {
      // Consolidate list by merging duplicate names from same/different recipes
      const updated = [...prev];
      items.forEach(newItem => {
        const existingIdx = updated.findIndex(
          existingItem => existingItem.name.toLowerCase() === newItem.name.toLowerCase() && 
                          existingItem.unit === newItem.unit
        );
        if (existingIdx > -1) {
          // Add quantities if they are numeric
          if (updated[existingIdx].quantity && newItem.quantity) {
            updated[existingIdx].quantity = Number((updated[existingIdx].quantity + newItem.quantity).toFixed(1));
          }
          // Append recipe source title if different
          if (!updated[existingIdx].recipeTitle.includes(newItem.recipeTitle)) {
            updated[existingIdx].recipeTitle += `, ${newItem.recipeTitle}`;
          }
        } else {
          updated.push(newItem);
        }
      });
      localStorage.setItem('shopping_list', JSON.stringify(updated));
      return updated;
    });
  };

  const handleRemoveShoppingItem = (idx) => {
    setShoppingList(prev => {
      const updated = prev.filter((_, i) => i !== idx);
      localStorage.setItem('shopping_list', JSON.stringify(updated));
      return updated;
    });
  };

  const handleClearShoppingList = () => {
    if (window.confirm("Clear your entire shopping list?")) {
      setShoppingList([]);
      localStorage.removeItem('shopping_list');
    }
  };

  // Navigation handlers
  const handleOpenDetail = (recipe, fromView = 'home') => {
    setSelectedRecipe(recipe);
    setReturnView(fromView);
    setView('detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setView(returnView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Extract all unique tags across recipes for the sidebar filters
  const allTags = ['All', ...new Set(recipes.flatMap(r => r.tags || []))];

  // Filtering Logic
  const filteredRecipes = recipes.filter(recipe => {
    // 1. Search Query (Matches title, description, or ingredient name)
    const matchesSearch = 
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.some(ing => ing.name.toLowerCase().includes(searchQuery.toLowerCase()));

    // 2. Tag filter
    const matchesTag = selectedTag === 'All' || recipe.tags.includes(selectedTag);

    // 3. Difficulty filter
    const matchesDifficulty = selectedDifficulty === 'All' || recipe.difficulty === selectedDifficulty.toLowerCase();

    // 4. Cooking Time Filter (prepTime + cookTime)
    const totalTime = recipe.prepTime + recipe.cookTime;
    const matchesTime = totalTime <= maxTime;

    // 5. Health Care Profile filter
    const matchesHealth = matchesHealthProfile(recipe, selectedHealthProfile);

    return matchesSearch && matchesTag && matchesDifficulty && matchesTime && matchesHealth;
  });

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header 
        currentView={currentView}
        setView={setView}
        theme={theme}
        toggleTheme={toggleTheme}
        shoppingListCount={shoppingList.length}
        toggleShoppingListOpen={() => setIsShoppingListOpen(true)}
        isUserAuthenticated={isUserAuthenticated}
        isAdminAuthenticated={isAdminAuthenticated}
        onLogout={handleLogout}
      />

      <main style={{ flexGrow: 1 }}>
        {currentView === 'home' && (
          <>
            {/* Hero Section */}
            <section className="hero-section">
              <div className="container">
                <span className="hero-subtitle">Taste the Craft</span>
                <h1 className="hero-title serif-title">
                  Discover, Personalize, and Cook <br />
                  <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>Exceptional Recipes</span>
                </h1>
                <p className="hero-description">
                  A curated space for culinary explorers. Scale servings instantly, swap ingredients easily, and master cooking with guided timers.
                </p>

                {/* Search & Filters Panel */}
                <div className="filter-dashboard">
                  <div className="search-box">
                    <Search className="search-icon-left" size={22} />
                    <input 
                      type="text" 
                      className="search-input" 
                      placeholder="Search recipes, keywords, or ingredients (e.g. spinach)..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>

                  {/* Category Filter row */}
                  <div className="categories-bar">
                    {allTags.slice(0, 8).map((tag, idx) => (
                      <button
                        key={idx}
                        className={`btn-filter ${selectedTag === tag ? 'active' : ''}`}
                        onClick={() => setSelectedTag(tag)}
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  {/* Sub Filters Row */}
                  <div className="filter-expand-row">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>Difficulty:</span>
                      <select 
                        className="filter-select"
                        value={selectedDifficulty}
                        onChange={(e) => setSelectedDifficulty(e.target.value)}
                      >
                        <option value="All">All Levels</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                      </select>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Clock size={16} style={{ color: 'var(--text-muted)' }} />
                      <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
                        Max Time: <strong style={{ color: 'var(--accent-primary)' }}>{maxTime} mins</strong>
                      </span>
                      <input 
                        type="range" 
                        min="15" 
                        max="180" 
                        step="5"
                        value={maxTime} 
                        onChange={(e) => setMaxTime(Number(e.target.value))} 
                        style={{ cursor: 'pointer', accentColor: 'var(--accent-primary)' }}
                      />
                    </div>
                  </div>

                  {/* Health & Care Specialized Dietary Filters */}
                  <div className="health-profiles-section" style={{ borderTop: '1px dashed var(--border-color)', paddingTop: '16px', marginTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                      <span className="health-filter-title" style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text-secondary)' }}>
                        🩺 Specialized Health Care:
                      </span>
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
                        Filter dishes suited for specific medical & recovery needs
                      </span>
                    </div>
                    <div className="categories-bar" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {healthProfilesList.map((profile) => (
                        <button
                          key={profile.id}
                          type="button"
                          className={`btn-filter ${selectedHealthProfile === profile.id ? 'active' : ''}`}
                          style={{ 
                            fontSize: '12px', 
                            padding: '6px 12px', 
                            marginTop: 0,
                            borderColor: selectedHealthProfile === profile.id ? 'var(--accent-cool)' : 'var(--border-color)',
                            color: selectedHealthProfile === profile.id ? '#fff' : 'var(--text-primary)',
                            backgroundColor: selectedHealthProfile === profile.id ? 'var(--accent-cool)' : 'transparent'
                          }}
                          onClick={() => setSelectedHealthProfile(profile.id)}
                          title={profile.tooltip}
                        >
                          <span style={{ marginRight: '6px' }}>{profile.emoji}</span>
                          {profile.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Recipes Grid */}
            <section className="recipes-grid-section container">
              <div className="grid-header">
                <div className="grid-title-info">
                  Gourmet Collection
                  <span className="grid-title-count">({filteredRecipes.length} recipes found)</span>
                </div>
              </div>

              {filteredRecipes.length === 0 ? (
                <div className="glass-panel empty-state" style={{ padding: '60px 24px' }}>
                  <p style={{ fontSize: '18px', fontWeight: '600' }}>No recipes match your criteria.</p>
                  <p style={{ fontSize: '14px', color: 'var(--text-secondary)', marginTop: '8px' }}>
                    Try adjusting your filters, clearing your search query, or restoring defaults in the Admin Panel.
                  </p>
                </div>
              ) : (
                <div className="recipes-grid">
                  {filteredRecipes.map((recipe) => (
                    <RecipeCard 
                      key={recipe.id} 
                      recipe={recipe} 
                      onClick={() => handleOpenDetail(recipe, 'home')}
                    />
                  ))}
                </div>
              )}
            </section>
          </>
        )}

        {currentView === 'landing' && (
          <>
            {/* Landing Hero / About Section */}
            <section className="landing-hero" id="about">
              <div className="container">
                <div className="hero-glass-card animate-fade-in">
                  <span className="hero-subtitle">Welcome to Culinary Craft</span>
                  <h1 className="hero-title serif-title">
                    The Art of Cooking, <br />
                    <span className="serif-italic" style={{ color: 'var(--accent-primary)' }}>Personalized For You</span>
                  </h1>
                  <p className="hero-description" style={{ margin: '0 auto 24px auto' }}>
                    Discover exquisite recipes, dynamically adjust serving sizes, check alternative ingredients to match your dietary profile, and cook hands-free with guided voice timers and multilingual instructions.
                  </p>
                  <div style={{ marginTop: '24px' }}>
                    <a 
                      href="#login" 
                      className="btn-pantry-check" 
                      style={{ 
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '12px 32px',
                        fontSize: '15px',
                        fontWeight: '600',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-full)',
                        boxShadow: '0 4px 12px rgba(var(--accent-primary-rgb), 0.25)',
                        transition: 'transform 0.2s ease, box-shadow 0.2s ease'
                      }}
                    >
                      Get Started
                    </a>
                  </div>
                </div>

                {/* Highlights Grid */}
                <div className="about-features-container">
                  <div className="about-feature-card">
                    <div className="about-feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale"><path d="m16 16 3-8 3 8c-.87.65-2.24.75-3 .75s-2.13-.1-3-.75Z"/><path d="m2 16 3-8 3 8c-.87.65-2.24.75-3 .75s-2.13-.1-3-.75Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h18"/></svg>
                    </div>
                    <h3 className="about-feature-title">Dynamic Scaling</h3>
                    <p className="about-feature-desc">Scale serving sizes instantly. Ingredient quantities automatically adjust in real-time with decimal precision.</p>
                  </div>
                  
                  <div className="about-feature-card">
                    <div className="about-feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-timer"><line x1="10" x2="14" y1="2" y2="2"/><line x1="12" x2="12" y1="14" y2="11"/><circle cx="12" cy="14" r="8"/></svg>
                    </div>
                    <h3 className="about-feature-title">Smart Step Timers</h3>
                    <p className="about-feature-desc">Interactive timers integrated directly into cooking steps, complete with voice countdown narration alerts.</p>
                  </div>
                  
                  <div className="about-feature-card">
                    <div className="about-feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mic"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v1a7 7 0 0 1-14 0v-1"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                    </div>
                    <h3 className="about-feature-title">Voice & Guided AI</h3>
                    <p className="about-feature-desc">Hands-free guided cooking mode with full text-to-speech support and interactive AI Chef chat rescue tips.</p>
                  </div>

                  <div className="about-feature-card">
                    <div className="about-feature-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-languages"><path d="m5 8 6 6"/><path d="m4 14 6-6 2-3"/><path d="M2 5h12"/><path d="M7 2h1"/><path d="m22 22-5-10-5 10"/><path d="M14 18h6"/></svg>
                    </div>
                    <h3 className="about-feature-title">Bilingual Support</h3>
                    <p className="about-feature-desc">Translate instructions instantly between English and Hindi, with native accent voice synthesis for both.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* The primary founder profile is rendered side-by-side with the feedback form in the section below */}

            {/* Famous Chefs' Blogs Section */}
            <section className="container animate-fade-in" id="blogs" style={{ marginTop: '60px', marginBottom: '20px' }}>
              <div style={{ marginBottom: '32px', textAlign: 'center' }}>
                <h2 className="serif-title" style={{ fontSize: '32px', color: 'var(--text-primary)', margin: 0 }}>
                  Famous Chefs' Blogs
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginTop: '4px' }}>
                  Learn secrets, stories, and culinary wisdom directly from world-renowned master chefs.
                </p>
              </div>

              <div className="chefs-blogs-grid">
                {/* Blog Card 1: Gordon Ramsay */}
                <div className="chef-blog-card glass-panel">
                  <div className="chef-blog-img-container">
                    <img 
                      className="chef-blog-img" 
                      src="https://www.tastingtable.com/img/gallery/gordon-ramsay-tba-embargo-98-at-9am-et-exclusive/intro-1757090181.webp" 
                      alt="Gordon Ramsay's Culinary Precision"
                      loading="lazy"
                    />
                    <span className="chef-blog-badge">Mastery</span>
                  </div>
                  <div className="chef-blog-content">
                    <span className="chef-blog-name">Chef Gordon Ramsay</span>
                    <h3 className="chef-blog-title">The Art of Precision & British Flavours</h3>
                    <p className="chef-blog-desc">
                      Explore Gordon's signature techniques, masterclasses, and elevated home recipes, showcasing that cooking is about passion, detail, and respect for ingredients.
                    </p>
                    <a 
                      href="https://www.gordonramsay.com/gr/recipes/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="chef-blog-link"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Blog Card 2: Ranveer Brar */}
                <div className="chef-blog-card glass-panel">
                  <div className="chef-blog-img-container">
                    <img 
                      className="chef-blog-img" 
                      src="https://images.ottplay.com/images/ranbrar-871.jpeg?impolicy=ottplay-202501_high&width=600" 
                      alt="Ranveer Brar's Heritage Cooking"
                      loading="lazy"
                    />
                    <span className="chef-blog-badge">Heritage</span>
                  </div>
                  <div className="chef-blog-content">
                    <span className="chef-blog-name">Chef Ranveer Brar</span>
                    <h3 className="chef-blog-title">Reviving Heritage: Traditions & Culinary Tales</h3>
                    <p className="chef-blog-desc">
                      Embark on a flavorful journey with Chef Ranveer as he uncovers the historical tales, deep cultural roots, and time-tested techniques behind authentic Indian cuisine.
                    </p>
                    <a 
                      href="https://ranveerbrar.com/recipes/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="chef-blog-link"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Blog Card 3: Jamie Oliver */}
                <div className="chef-blog-card glass-panel">
                  <div className="chef-blog-img-container">
                    <img 
                      className="chef-blog-img" 
                      src="https://site.outlookindia.com/traveller/wp-content/uploads/files/2015/03/091015143231-JAMIE.ITALIAN.0300.jpg" 
                      alt="Jamie Oliver's Fresh Meals"
                      loading="lazy"
                    />
                    <span className="chef-blog-badge">Simplicity</span>
                  </div>
                  <div className="chef-blog-content">
                    <span className="chef-blog-name">Chef Jamie Oliver</span>
                    <h3 className="chef-blog-title">Fresh, Healthy & Simple Meals</h3>
                    <p className="chef-blog-desc">
                      Discover Jamie's advocacy for fresh ingredients, zero-waste recipes, and fast, wholesome meals designed to inspire everyone to get in the kitchen and start cooking.
                    </p>
                    <a 
                      href="https://www.jamieoliver.com/recipes/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="chef-blog-link"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Blog Card 4: Vikas Khanna */}
                <div className="chef-blog-card glass-panel">
                  <div className="chef-blog-img-container">
                    <img 
                      className="chef-blog-img" 
                      src="https://fashionablyfoody.wordpress.com/wp-content/uploads/2013/05/vikas.jpg" 
                      alt="Vikas Khanna's Progressive Cuisine"
                      loading="lazy"
                      style={{ objectPosition: 'center 15%' }}
                    />
                    <span className="chef-blog-badge">Innovation</span>
                  </div>
                  <div className="chef-blog-content">
                    <span className="chef-blog-name">Chef Vikas Khanna</span>
                    <h3 className="chef-blog-title">Bridging Cultures: Michelin-Starred Cuisine</h3>
                    <p className="chef-blog-desc">
                      Explore Vikas's culinary philosophy that merges traditional Indian flavors with avant-garde global presentations, showcasing his Michelin-starred creations.
                    </p>
                    <a 
                      href="https://vkhanna.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="chef-blog-link"
                    >
                      Read More
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                        <path d="M5 12h14"/>
                        <path d="m12 5 7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* Creator & Feedback Section */}
            <section className="bottom-dashboard-grid container" style={{ marginTop: '40px', marginBottom: '60px' }}>
              
              {/* Creator / Founder Card */}
              <div 
                id="founder"
                className="glass-panel animate-fade-in creator-card" 
                style={{ 
                  borderRadius: 'var(--radius-lg)', 
                  border: '1px solid var(--border-color)', 
                  boxShadow: 'var(--shadow-lg)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  alignItems: 'stretch', 
                  justifyContent: 'stretch',
                  overflow: 'hidden',
                  position: 'relative',
                  height: '100%',
                  minHeight: '560px',
                  padding: 0
                }}
              >
                {/* Slides Track */}
                <div style={{ 
                  width: '100%', 
                  overflow: 'hidden',
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{ 
                    display: 'flex',
                    width: '200%',
                    height: '100%',
                    transform: `translateX(-${creatorSlide * 50}%)`,
                    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
                  }}>
                    {/* Slide 1: Photo & Name */}
                    <div className="creator-slide-1">
                      <div className="creator-overlay-card">
                        <span className="creator-subtitle">Meet the Founder</span>
                        <h2 className="serif-title creator-name">Vasundhara Mishra</h2>
                        <p className="creator-role">Full Stack Developer</p>
                        <button 
                          onClick={(e) => { e.preventDefault(); setCreatorSlide(1); }} 
                          className="btn-read-story"
                        >
                          Read Biography
                          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
                            <path d="M5 12h14"/>
                            <path d="m12 5 7 7-7 7"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Slide 2: Bio Description & Connect */}
                    <div className="creator-slide-2">
                      <div className="creator-bio-header">
                        <img 
                          src="/vasundhara.jpg" 
                          alt="Vasundhara Mishra Avatar" 
                          className="creator-avatar"
                        />
                        <div>
                          <h3 className="serif-title creator-bio-name">Vasundhara Mishra</h3>
                          <p className="creator-bio-title">Founder & Developer</p>
                        </div>
                      </div>
                      
                      <div className="creator-bio-content">
                        <p className="creator-bio-text">
                          I am a Computer Science (AIML) undergraduate with hands-on experience as an Intern at Intechnative. Currently, I serve as an HR at Manipal Runners Club and a Marketing Executive at Devforge, where I actively contribute to team coordination, people management, and strategic promotions.
                        </p>
                        <p className="creator-bio-text" style={{ marginTop: '12px' }}>
                          Beyond academics and professional roles, I have represented at the state level in Lawn Tennis and Swimming, which has strengthened my discipline, resilience, and competitive mindset. I am passionate about leadership, continuous learning, and applying my technical and organizational skills to create real-world impact.
                        </p>
                      </div>
                      
                      {/* Social Connect */}
                      <div className="creator-connect-section">
                        <span className="connect-label">Connect:</span>
                        <div className="connect-links">
                          <a 
                            href="https://www.instagram.com/vasundhara_mishra_/" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="creator-social-link"
                            title="Instagram"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                          </a>
                          <a 
                            href="https://www.linkedin.com/in/vasundhara-mishra-1914093a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="creator-social-link"
                            title="LinkedIn"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                              <rect width="4" height="12" x="2" y="9"/>
                              <circle cx="4" cy="4" r="2"/>
                            </svg>
                          </a>
                        </div>
                      </div>

                      <button 
                        onClick={(e) => { e.preventDefault(); setCreatorSlide(0); }} 
                        className="btn-creator-back"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left">
                          <path d="m12 19-7-7 7-7"/>
                          <path d="M19 12H5"/>
                        </svg>
                        Back to Profile
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Dots / Page Indicators */}
                <div className="creator-dots-container">
                  <button 
                    onClick={() => setCreatorSlide(0)}
                    aria-label="View Founder Profile"
                    style={{ 
                      width: creatorSlide === 0 ? '24px' : '8px', 
                      height: '8px', 
                      borderRadius: '4px', 
                      backgroundColor: creatorSlide === 0 ? 'var(--accent-primary)' : 'var(--border-color)', 
                      border: 'none', 
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                  <button 
                    onClick={() => setCreatorSlide(1)}
                    aria-label="View Biography"
                    style={{ 
                      width: creatorSlide === 1 ? '24px' : '8px', 
                      height: '8px', 
                      borderRadius: '4px', 
                      backgroundColor: creatorSlide === 1 ? 'var(--accent-primary)' : 'var(--border-color)', 
                      border: 'none', 
                      padding: 0,
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  />
                </div>
              </div>

              {/* Feedback Form Card */}
              <div id="feedback" className="glass-panel animate-fade-in feedback-card">
                <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                  <h2 className="serif-title" style={{ fontSize: '28px', marginBottom: '8px', color: 'var(--text-primary)' }}>Share Your Feedback</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>
                    Have suggestions, questions, or want to submit a recipe request? We'd love to hear from you!
                  </p>
                </div>

                {feedbackStatus === 'success' ? (
                  <div className="animate-fade-in" style={{ textAlign: 'center', padding: '20px 0' }}>
                    <div style={{
                      width: '56px',
                      height: '56px',
                      borderRadius: 'var(--radius-full)',
                      backgroundColor: 'rgba(16, 185, 129, 0.1)',
                      color: 'var(--accent-cool)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 16px auto'
                    }}>
                      <Check size={28} />
                    </div>
                    <h3 className="serif-title" style={{ fontSize: '20px', marginBottom: '8px', color: 'var(--text-primary)' }}>Feedback Sent!</h3>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px', maxWidth: '400px', margin: '0 auto 24px auto' }}>
                      Thank you for your valuable input. A confirmation email has been sent to your inbox.
                    </p>
                    <button 
                      onClick={() => setFeedbackStatus('idle')} 
                      className="btn-pantry-check-secondary"
                      style={{ width: 'auto', marginTop: 0 }}
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFeedbackSubmit}>
                    <div className="feedback-grid">
                      <div className="form-group" style={{ margin: 0 }}>
                        <label htmlFor="feedback-name" className="form-label" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Your Name *</label>
                        <input 
                          type="text" 
                          id="feedback-name"
                          className="form-input" 
                          placeholder="Chef Gastronomer" 
                          value={feedbackName}
                          onChange={(e) => setFeedbackName(e.target.value)}
                          required
                          style={{ fontSize: '14px', padding: '10px 14px' }}
                        />
                      </div>
                      <div className="form-group" style={{ margin: 0 }}>
                        <label htmlFor="feedback-email" className="form-label" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Email Address *</label>
                        <input 
                          type="email" 
                          id="feedback-email"
                          className="form-input" 
                          placeholder="you@example.com" 
                          value={feedbackEmail}
                          onChange={(e) => setFeedbackEmail(e.target.value)}
                          required
                          style={{ fontSize: '14px', padding: '10px 14px' }}
                        />
                      </div>
                    </div>

                    <div className="form-group" style={{ marginBottom: '20px' }}>
                      <label htmlFor="feedback-msg" className="form-label" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Message or Suggestion *</label>
                      <textarea 
                        id="feedback-msg"
                        className="form-textarea" 
                        rows="4" 
                        placeholder="Write your suggestions, review, or thoughts here..."
                        value={feedbackMessage}
                        onChange={(e) => setFeedbackMessage(e.target.value)}
                        required
                        style={{ fontSize: '14px', padding: '10px 14px' }}
                      ></textarea>
                    </div>

                    {feedbackStatus === 'error' && (
                      <p style={{ color: 'var(--accent-primary)', fontSize: '13px', marginBottom: '16px', textAlign: 'center', fontWeight: '500' }}>
                        ⚠️ {feedbackErrorMsg}
                      </p>
                    )}

                    <button 
                      type="submit" 
                      className="btn-pantry-check" 
                      style={{ width: '100%', padding: '12px', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                      disabled={feedbackStatus === 'submitting'}
                    >
                      {feedbackStatus === 'submitting' ? (
                        <>
                          <span className="spinner" style={{ display: 'inline-block', width: '14px', height: '14px', border: '2px solid #fff', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
                          Sending...
                        </>
                      ) : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </section>

            {/* Unified Login Section */}
            <section className="login-portal-section" id="login">
              <div className="login-portal-card glass-panel animate-fade-in" style={{ background: 'var(--surface-primary)', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-lg)' }}>
                <h2 className="serif-title login-portal-title">Join the Culinary Journey</h2>
                <p className="login-portal-subtitle">Login to explore recipes or manage the database</p>
                
                <form onSubmit={handleUnifiedLogin}>
                  <div className="form-group" style={{ marginBottom: '16px', textAlign: 'left' }}>
                    <label htmlFor="login-username" className="form-label" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Username</label>
                    <input 
                      type="text" 
                      id="login-username"
                      className="form-input" 
                      placeholder="Chef Explorer" 
                      value={loginUsername}
                      onChange={(e) => setLoginUsername(e.target.value)}
                      style={{ fontSize: '14px', padding: '10px 14px' }}
                    />
                    <span style={{ fontSize: '10px', color: 'var(--text-muted)' }}>Required for guest access (not needed for admin)</span>
                  </div>
                  
                  <div className="form-group" style={{ marginBottom: '16px', textAlign: 'left' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <label htmlFor="login-email" className="form-label" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px', margin: 0 }}>Gmail / Email *</label>
                      {loginEmail.trim() && 
                       !(loginEmail.trim().toLowerCase() === 'mishravasundhara6@gmail.com' || loginEmail.trim().toLowerCase() === 'admin@culinarycraft.com') && (
                        <button 
                          type="button"
                          onClick={handleSendOTP}
                          disabled={otpLoading}
                          style={{
                            background: 'none',
                            border: 'none',
                            color: 'var(--accent-primary)',
                            fontSize: '11.5px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            padding: 0,
                            textDecoration: 'underline'
                          }}
                        >
                          {otpLoading ? 'Sending...' : (otpSent ? 'Resend OTP' : 'Send OTP')}
                        </button>
                      )}
                    </div>
                    <input 
                      type="email" 
                      id="login-email"
                      className="form-input" 
                      placeholder="you@gmail.com" 
                      value={loginEmail}
                      onChange={(e) => {
                        setLoginEmail(e.target.value);
                        setOtpSent(false);
                        setOtpMessage('');
                      }}
                      required
                      style={{ fontSize: '14px', padding: '10px 14px', marginTop: '6px' }}
                    />
                    {otpMessage && (
                      <span style={{ fontSize: '11px', color: 'var(--accent-secondary)', marginTop: '4px', display: 'block', fontWeight: '600' }}>
                        ✓ {otpMessage}
                      </span>
                    )}
                  </div>

                  <div className="form-group" style={{ marginBottom: '24px', textAlign: 'left' }}>
                    <label htmlFor="login-password" className="form-label" style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      {(loginEmail.trim().toLowerCase() === 'mishravasundhara6@gmail.com' || loginEmail.trim().toLowerCase() === 'admin@culinarycraft.com') 
                        ? 'Admin Passcode *' 
                        : 'One-Time Passcode (OTP) *'}
                    </label>
                    <input 
                      type="password" 
                      id="login-password"
                      className="form-input" 
                      placeholder={(loginEmail.trim().toLowerCase() === 'mishravasundhara6@gmail.com' || loginEmail.trim().toLowerCase() === 'admin@culinarycraft.com')
                        ? '••••••••'
                        : '6-digit OTP code'}
                      value={loginPassword}
                      onChange={(e) => setLoginPassword(e.target.value)}
                      required
                      style={{ fontSize: '14px', padding: '10px 14px' }}
                    />
                    {!(loginEmail.trim().toLowerCase() === 'mishravasundhara6@gmail.com' || loginEmail.trim().toLowerCase() === 'admin@culinarycraft.com') && !otpSent && (
                      <span style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                        Click "Send OTP" to generate and receive your verification code.
                      </span>
                    )}
                  </div>

                  {loginErrorMsg && (
                    <p style={{ color: 'var(--accent-primary)', fontSize: '13px', marginBottom: '16px', textAlign: 'center', fontWeight: '500' }}>
                      ⚠️ {loginErrorMsg}
                    </p>
                  )}

                  <button 
                    type="submit" 
                    className="btn-pantry-check" 
                    style={{ width: '100%', padding: '12px', fontSize: '14px', fontWeight: '600' }}
                  >
                    Login & Explore Recipes
                  </button>
                </form>
              </div>
            </section>
          </>
        )}

        {currentView === 'detail' && selectedRecipe && (
          <div className="container">
            <RecipeDetail 
              recipe={selectedRecipe}
              onBack={handleBack}
              onAddToShoppingList={handleAddToShoppingList}
            />
          </div>
        )}

        {/* Unauthenticated admin access is handled by route guard redirection to landing portal */}

        {currentView === 'admin' && isAdminAuthenticated && (
          <AdminPanel 
            recipes={recipes}
            onAddRecipe={handleAddRecipe}
            onUpdateRecipe={handleUpdateRecipe}
            onDeleteRecipe={handleDeleteRecipe}
            onRestoreDefaults={handleRestoreDefaults}
            onLogout={handleLogout}
            syncStatus={syncStatus}
          />
        )}


      </main>

      {/* Shopping List Drawer */}
      <ShoppingList 
        isOpen={isShoppingListOpen}
        onClose={() => setIsShoppingListOpen(false)}
        shoppingList={shoppingList}
        onRemoveItem={handleRemoveShoppingItem}
        onClearList={handleClearShoppingList}
      />

      {/* Footer */}
      <footer className="app-footer" style={{ padding: '48px 0', borderTop: '1px solid var(--border-color)', background: 'var(--bg-secondary)', width: '100%' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px', textAlign: 'center' }}>
          <a 
            href="#" 
            className="logo-group" 
            onClick={(e) => { 
              e.preventDefault(); 
              if (isUserAuthenticated || isAdminAuthenticated) {
                setView('home'); 
              } else {
                setView('landing'); 
              }
            }}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', textDecoration: 'none' }}
          >
            <img 
              src="/logo.png" 
              alt="Culinary Craft Logo" 
              style={{ 
                height: '64px', 
                width: '64px', 
                objectFit: 'cover', 
                borderRadius: '50%',
                border: '2px solid var(--accent-primary)',
                boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
                transition: 'transform 0.3s ease'
              }}
              className="logo-img-hover"
            />
            <span className="serif-title" style={{ fontSize: '20px', color: 'var(--text-primary)', marginTop: '4px' }}>
              Culinary<span className="serif-italic" style={{ color: 'var(--accent-primary)', marginLeft: '4px' }}>Craft</span>
            </span>
          </a>
          
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <a 
              href="https://www.instagram.com/vasundhara_mishra_/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              title="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/vasundhara-mishra-1914093a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="footer-social-link"
              title="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>

          <p style={{ width: '100%', borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: '8px', color: 'var(--text-muted)', fontSize: '13px', textAlign: 'center', fontWeight: '500', maxWidth: '600px' }}>
            &copy; {new Date().getFullYear()} Culinary Craft. Designed &amp; Developed with passion by Vasundhara Mishra.
          </p>
        </div>
      </footer>
    </div>
  );
}
