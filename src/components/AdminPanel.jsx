import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Edit, Save, RotateCcw, ArrowLeft, Check, Lock } from 'lucide-react';

export default function AdminPanel({ recipes, onAddRecipe, onUpdateRecipe, onDeleteRecipe, onRestoreDefaults, onLogout, syncStatus }) {
  const [activeTab, setActiveTab] = useState('list'); // 'list' or 'form'
  const [editingRecipeId, setEditingRecipeId] = useState(null);

  // Form states
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [difficulty, setDifficulty] = useState('easy');
  const [prepTime, setPrepTime] = useState(10);
  const [cookTime, setCookTime] = useState(15);
  const [servings, setServings] = useState(4);
  const [calories, setCalories] = useState(350);
  const [tags, setTags] = useState('');
  
  // Dynamic ingredients list
  const [ingredients, setIngredients] = useState([
    { name: '', quantity: '', unit: '', alternative: '' }
  ]);
  
  // Dynamic instructions list
  const [instructions, setInstructions] = useState([
    { step: 1, text: '', duration: '' }
  ]);

  // Load recipe into form for editing
  const handleEditClick = (recipe) => {
    setEditingRecipeId(recipe.id);
    setTitle(recipe.title);
    setDescription(recipe.description);
    setImage(recipe.image || '');
    setVideoUrl(recipe.videoUrl || '');
    setDifficulty(recipe.difficulty || 'easy');
    setPrepTime(recipe.prepTime || 10);
    setCookTime(recipe.cookTime || 15);
    setServings(recipe.servings || 4);
    setCalories(recipe.calories || 350);
    setTags(recipe.tags ? recipe.tags.join(', ') : '');
    
    // Set ingredients, ensuring quantity handles empty states
    setIngredients(recipe.ingredients.map(ing => ({
      name: ing.name,
      quantity: ing.quantity !== null && ing.quantity !== undefined ? ing.quantity : '',
      unit: ing.unit || '',
      alternative: ing.alternative || ''
    })));

    // Set instructions
    setInstructions(recipe.instructions.map(inst => ({
      step: inst.step,
      text: inst.text,
      duration: inst.duration || ''
    })));

    setActiveTab('form');
  };

  // Reset form
  const resetForm = () => {
    setEditingRecipeId(null);
    setTitle('');
    setDescription('');
    setImage('');
    setVideoUrl('');
    setDifficulty('easy');
    setPrepTime(10);
    setCookTime(15);
    setServings(4);
    setCalories(350);
    setTags('');
    setIngredients([{ name: '', quantity: '', unit: '', alternative: '' }]);
    setInstructions([{ step: 1, text: '', duration: '' }]);
  };

  // Switch to Create mode
  const handleCreateNewClick = () => {
    resetForm();
    setActiveTab('form');
  };

  // Dynamic ingredient rows handlers
  const handleAddIngredientRow = () => {
    setIngredients(prev => [...prev, { name: '', quantity: '', unit: '', alternative: '' }]);
  };

  const handleRemoveIngredientRow = (idx) => {
    if (ingredients.length === 1) return;
    setIngredients(prev => prev.filter((_, i) => i !== idx));
  };

  const handleIngredientChange = (idx, field, val) => {
    setIngredients(prev => prev.map((ing, i) => {
      if (i === idx) {
        return { ...ing, [field]: val };
      }
      return ing;
    }));
  };

  // Dynamic instruction rows handlers
  const handleAddInstructionRow = () => {
    setInstructions(prev => {
      const nextStepNum = prev.length + 1;
      return [...prev, { step: nextStepNum, text: '', duration: '' }];
    });
  };

  const handleRemoveInstructionRow = (idx) => {
    if (instructions.length === 1) return;
    const filtered = instructions.filter((_, i) => i !== idx);
    // Recalculate step numbers
    const updated = filtered.map((inst, i) => ({
      ...inst,
      step: i + 1
    }));
    setInstructions(updated);
  };

  const handleInstructionChange = (idx, field, val) => {
    setInstructions(prev => prev.map((inst, i) => {
      if (i === idx) {
        return { ...inst, [field]: val };
      }
      return inst;
    }));
  };

  // Save Recipe handler
  const handleSaveRecipe = (e) => {
    e.preventDefault();

    // Validation
    if (!title.trim() || !description.trim()) {
      alert("Please fill out the Recipe Title and Description.");
      return;
    }

    // Filter out incomplete ingredients and parse quantity
    const filteredIngredients = ingredients
      .filter(ing => ing.name.trim() !== '')
      .map(ing => ({
        name: ing.name.trim(),
        quantity: ing.quantity === '' ? null : Number(ing.quantity),
        unit: ing.unit.trim(),
        alternative: ing.alternative.trim() || null
      }));

    if (filteredIngredients.length === 0) {
      alert("Please add at least one valid ingredient.");
      return;
    }

    // Filter out incomplete instructions
    const filteredInstructions = instructions
      .filter(inst => inst.text.trim() !== '')
      .map((inst, idx) => ({
        step: idx + 1,
        text: inst.text.trim(),
        duration: inst.duration === '' ? null : Number(inst.duration)
      }));

    if (filteredInstructions.length === 0) {
      alert("Please add at least one cooking instruction step.");
      return;
    }

    // Parse tags
    const parsedTags = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');

    const finalRecipe = {
      id: editingRecipeId || `recipe-${Date.now()}`,
      title: title.trim(),
      description: description.trim(),
      image: image.trim() || "https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=1000",
      videoUrl: videoUrl.trim() || null,
      difficulty,
      prepTime: Number(prepTime) || 10,
      cookTime: Number(cookTime) || 15,
      servings: Number(servings) || 4,
      calories: calories === '' ? null : Number(calories),
      tags: parsedTags.length > 0 ? parsedTags : ["Homemade"],
      ingredients: filteredIngredients,
      instructions: filteredInstructions
    };

    if (editingRecipeId) {
      onUpdateRecipe(finalRecipe);
      alert("Recipe updated successfully!");
    } else {
      onAddRecipe(finalRecipe);
      alert("New recipe added successfully!");
    }

    resetForm();
    setActiveTab('list');
  };

  const handleCancelClick = () => {
    resetForm();
    setActiveTab('list');
  };

  return (
    <div className="admin-section container animate-fade-in">
      <div className="admin-header">
        <div>
          <h2 className="serif-title" style={{ fontSize: '32px' }}>Content Management Dashboard</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Add, edit, or remove recipes from your local catalog database.</p>
        </div>
        
        <div className="admin-tabs">
          {activeTab === 'list' ? (
            <>
              {onLogout && (
                <button 
                  className="btn-pantry-check-secondary" 
                  style={{ width: 'auto', marginTop: 0, borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)', display: 'flex', alignItems: 'center', gap: '6px' }} 
                  onClick={onLogout}
                >
                  <Lock size={16} /> Lock Admin
                </button>
              )}
              <button className="btn-pantry-check-secondary" style={{ width: 'auto', marginTop: 0 }} onClick={onRestoreDefaults}>
                <RotateCcw size={16} /> Restore Default Recipes
              </button>
              <button className="btn-pantry-check" style={{ width: 'auto', marginTop: 0 }} onClick={handleCreateNewClick}>
                <Plus size={16} /> Add New Recipe
              </button>
            </>
          ) : (
            <button className="btn-pantry-check-secondary" style={{ width: 'auto', marginTop: 0 }} onClick={handleCancelClick}>
              <ArrowLeft size={16} /> Back to Recipe List
            </button>
          )}
        </div>
      </div>

      {/* Cloud Sync Status Banner */}
      {syncStatus === 'pending_verification' && (
        <div className="glass-panel animate-fade-in" style={{
          padding: '16px 20px',
          background: 'rgba(245, 158, 11, 0.1)',
          border: '1px solid rgba(245, 158, 11, 0.3)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#f59e0b', fontWeight: '600' }}>
            <span>☁️ Cloud Sync Pending Verification</span>
          </div>
          <p style={{ fontSize: '13px', margin: 0, color: 'var(--text-secondary)' }}>
            A database verification email was sent to <strong>mishravasundhara6@gmail.com</strong>. Please check your inbox (including your spam/junk folder) and click the activation link to instantly enable database synchronization across all other devices.
          </p>
        </div>
      )}

      {syncStatus === 'syncing' && (
        <div className="glass-panel animate-fade-in" style={{
          padding: '12px 20px',
          background: 'rgba(59, 130, 246, 0.1)',
          border: '1px solid rgba(59, 130, 246, 0.2)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          color: '#3b82f6'
        }}>
          <span className="spinner" style={{ display: 'inline-block', width: '12px', height: '12px', border: '2px solid #3b82f6', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></span>
          <span>Syncing recipes database to the cloud...</span>
        </div>
      )}

      {syncStatus === 'synced' && (
        <div className="glass-panel animate-fade-in" style={{
          padding: '12px 20px',
          background: 'rgba(16, 185, 129, 0.1)',
          border: '1px solid rgba(16, 185, 129, 0.2)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          color: '#10b981'
        }}>
          <span>☁️</span>
          <span>Cloud Sync Active. All edits are synced across devices!</span>
        </div>
      )}

      {syncStatus === 'error' && (
        <div className="glass-panel animate-fade-in" style={{
          padding: '12px 20px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.2)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          fontSize: '13px',
          color: '#ef4444'
        }}>
          <span>⚠️</span>
          <span>Cloud sync offline. Edits are saved to this browser locally but won\'t sync to other devices.</span>
        </div>
      )}

      {activeTab === 'list' ? (
        <div className="admin-list-view">
          {recipes.length === 0 ? (
            <div className="glass-panel empty-state">
              <p>No recipes found in the database. Click "Restore Default Recipes" or add a new recipe.</p>
            </div>
          ) : (
            <div style={{ overflowX: 'auto' }}>
              <table className="admin-grid-table">
                <thead>
                  <tr>
                    <th>Recipe Title</th>
                    <th>Category Tags</th>
                    <th>Difficulty</th>
                    <th>Time (Prep/Cook)</th>
                    <th>Ingredients</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {recipes.map((recipe) => (
                    <tr key={recipe.id}>
                      <td style={{ fontWeight: '600' }}>{recipe.title}</td>
                      <td>
                        <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                          {recipe.tags.map((tag, i) => (
                            <span key={i} className="card-tag" style={{ fontSize: '10px' }}>{tag}</span>
                          ))}
                        </div>
                      </td>
                      <td style={{ textTransform: 'capitalize' }}>
                        <span className={`card-badge badge-difficulty-${recipe.difficulty}`} style={{ padding: '3px 8px', fontSize: '10px' }}>
                          {recipe.difficulty}
                        </span>
                      </td>
                      <td>{recipe.prepTime}m / {recipe.cookTime}m</td>
                      <td>{recipe.ingredients.length} items</td>
                      <td>
                        <div className="admin-actions-cell">
                          <button className="btn-action-small edit" onClick={() => handleEditClick(recipe)}>
                            <Edit size={14} /> Edit
                          </button>
                          <button className="btn-action-small delete" onClick={() => {
                            if (window.confirm(`Are you sure you want to delete "${recipe.title}"?`)) {
                              onDeleteRecipe(recipe.id);
                            }
                          }}>
                            <Trash2 size={14} /> Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <form className="admin-form-card" onSubmit={handleSaveRecipe}>
          <h3 className="form-title serif-title">
            {editingRecipeId ? `Edit Recipe: ${title}` : 'Create New Gourmet Recipe'}
          </h3>

          <div className="form-grid">
            <div className="form-group full-width">
              <label className="form-label">Recipe Title *</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Creamy Tuscan Garlic Chicken" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required
              />
            </div>

            <div className="form-group full-width">
              <label className="form-label">Description / Summary *</label>
              <textarea 
                className="form-textarea" 
                rows="3" 
                placeholder="Give a short overview of this recipe, its background or mouth-watering description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              ></textarea>
            </div>

            <div className="form-group">
              <label className="form-label">Cover Image URL</label>
              <input 
                type="url" 
                className="form-input" 
                placeholder="https://images.unsplash.com/..." 
                value={image} 
                onChange={(e) => setImage(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">YouTube Video Embed Link</label>
              <input 
                type="url" 
                className="form-input" 
                placeholder="https://www.youtube.com/embed/YOUR_ID" 
                value={videoUrl} 
                onChange={(e) => setVideoUrl(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Difficulty Level</label>
              <select className="form-select" value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>

            <div className="form-group">
              <label className="form-label">Calories (kcal)</label>
              <input 
                type="number" 
                className="form-input" 
                placeholder="e.g. 450" 
                value={calories} 
                onChange={(e) => setCalories(e.target.value)} 
              />
            </div>

            <div className="form-group">
              <label className="form-label">Prep Time (minutes)</label>
              <input 
                type="number" 
                className="form-input" 
                value={prepTime} 
                onChange={(e) => setPrepTime(e.target.value)} 
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Cook Time (minutes)</label>
              <input 
                type="number" 
                className="form-input" 
                value={cookTime} 
                onChange={(e) => setCookTime(e.target.value)} 
                min="0"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Default Servings</label>
              <input 
                type="number" 
                className="form-input" 
                value={servings} 
                onChange={(e) => setServings(e.target.value)} 
                min="1"
                required
              />
            </div>

            <div className="form-group">
              <label className="form-label">Category Tags (comma-separated)</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Vegetarian, Italian, Dinner, Quick Prep" 
                value={tags} 
                onChange={(e) => setTags(e.target.value)} 
              />
            </div>
          </div>

          {/* INGREDIENTS SECTION */}
          <div className="form-dynamic-section">
            <div className="section-subtitle">
              <span>Ingredients List</span>
              <button 
                type="button" 
                className="btn-pantry-check" 
                style={{ width: 'auto', marginTop: 0, padding: '6px 12px', fontSize: '13px' }}
                onClick={handleAddIngredientRow}
              >
                <Plus size={14} /> Add Ingredient
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {ingredients.map((ing, idx) => (
                <div key={idx} className="dynamic-row">
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Ingredient Name (e.g. Chicken)" 
                    value={ing.name}
                    onChange={(e) => handleIngredientChange(idx, 'name', e.target.value)}
                    required
                  />
                  <input 
                    type="number" 
                    step="any"
                    className="form-input" 
                    placeholder="Qty" 
                    value={ing.quantity}
                    onChange={(e) => handleIngredientChange(idx, 'quantity', e.target.value)}
                  />
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Unit (e.g. g, tbsp)" 
                    value={ing.unit}
                    onChange={(e) => handleIngredientChange(idx, 'unit', e.target.value)}
                  />
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder="Alternative Suggestion (e.g. Coconut Cream)" 
                    value={ing.alternative}
                    onChange={(e) => handleIngredientChange(idx, 'alternative', e.target.value)}
                  />
                  <button 
                    type="button" 
                    className="btn-action-small delete" 
                    style={{ padding: '10px' }}
                    onClick={() => handleRemoveIngredientRow(idx)}
                    disabled={ingredients.length === 1}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* INSTRUCTIONS SECTION */}
          <div className="form-dynamic-section">
            <div className="section-subtitle">
              <span>Preparation Steps</span>
              <button 
                type="button" 
                className="btn-pantry-check" 
                style={{ width: 'auto', marginTop: 0, padding: '6px 12px', fontSize: '13px' }}
                onClick={handleAddInstructionRow}
              >
                <Plus size={14} /> Add Step
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {instructions.map((inst, idx) => (
                <div key={idx} className="dynamic-row-steps">
                  <input 
                    type="text" 
                    className="form-input" 
                    placeholder={`Step ${inst.step} details...`} 
                    value={inst.text}
                    onChange={(e) => handleInstructionChange(idx, 'text', e.target.value)}
                    required
                  />
                  <input 
                    type="number" 
                    className="form-input" 
                    placeholder="Time (mins)" 
                    value={inst.duration}
                    onChange={(e) => handleInstructionChange(idx, 'duration', e.target.value)}
                  />
                  <button 
                    type="button" 
                    className="btn-action-small delete" 
                    style={{ padding: '10px' }}
                    onClick={() => handleRemoveInstructionRow(idx)}
                    disabled={instructions.length === 1}
                  >
                    <Trash2 size={15} />
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="form-actions">
            <button type="button" className="btn-pantry-check-secondary" style={{ width: 'auto', marginTop: 0 }} onClick={handleCancelClick}>
              Cancel
            </button>
            <button type="submit" className="btn-pantry-check" style={{ width: 'auto', marginTop: 0 }}>
              <Save size={16} /> {editingRecipeId ? 'Save Changes' : 'Create Recipe'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
