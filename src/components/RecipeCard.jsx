import React from 'react';

const DEFAULT_RECIPE_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000";

export default function RecipeCard({ recipe, onClick }) {
  const { title, description, image, difficulty, prepTime, cookTime, servings, calories, tags } = recipe;
  const totalTime = prepTime + cookTime;
  const [imgSrc, setImgSrc] = React.useState(image || DEFAULT_RECIPE_IMAGE);

  React.useEffect(() => {
    setImgSrc(image || DEFAULT_RECIPE_IMAGE);
  }, [image]);

  // Generate a deterministic rating between 4.3 and 4.9 based on title length
  const rating = ((title.length % 7) * 0.1 + 4.3).toFixed(1);

  return (
    <article className="recipe-card animate-fade-in" onClick={onClick}>
      <div className="card-media-wrapper">
        <img 
          src={imgSrc} 
          alt={title} 
          className="card-img" 
          loading="lazy" 
          onError={() => setImgSrc(DEFAULT_RECIPE_IMAGE)}
        />
      </div>
      
      <div className="card-content">
        <div className="card-tags">
          {tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="card-tag">{tag}</span>
          ))}
        </div>
        
        <div className="card-title-row">
          <h3 className="card-title serif-title">{title}</h3>
          <span className="card-rating-badge">★ {rating}</span>
        </div>
        
        <p className="card-description">{description}</p>
        
        <div className="card-action-row">
          <div className="card-meta-info">
            {totalTime} Min
          </div>
          <button className="btn-card-action">
            View Recipe
          </button>
        </div>
      </div>
    </article>
  );
}

