import React from 'react';
import { Clock, Users, Flame } from 'lucide-react';

const DEFAULT_RECIPE_IMAGE = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&q=80&w=1000";

export default function RecipeCard({ recipe, onClick }) {
  const { title, description, image, difficulty, prepTime, cookTime, servings, calories, tags } = recipe;
  const totalTime = prepTime + cookTime;
  const isQuickPrep = totalTime <= 25;
  const [imgSrc, setImgSrc] = React.useState(image || DEFAULT_RECIPE_IMAGE);

  React.useEffect(() => {
    setImgSrc(image || DEFAULT_RECIPE_IMAGE);
  }, [image]);

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
        <div className="card-overlay-badges">
          <span className={`card-badge badge-difficulty-${difficulty}`}>
            {difficulty}
          </span>
          {isQuickPrep && (
            <span className="card-badge badge-quick-prep">
              Quick Prep
            </span>
          )}
        </div>
      </div>
      <div className="card-content">
        <div className="card-tags">
          {tags.slice(0, 3).map((tag, idx) => (
            <span key={idx} className="card-tag">{tag}</span>
          ))}
        </div>
        <h3 className="card-title serif-title">{title}</h3>
        <p className="card-description">{description}</p>
        
        <div className="card-meta-footer">
          <div className="card-meta-item">
            <Clock size={15} style={{ color: 'var(--accent-primary)' }} />
            <span>{totalTime} mins</span>
          </div>
          <div className="card-meta-item">
            <Users size={15} style={{ color: 'var(--accent-cool)' }} />
            <span>{servings} servings</span>
          </div>
          {calories && (
            <div className="card-meta-item">
              <Flame size={15} style={{ color: 'var(--accent-warm)' }} />
              <span>{calories} kcal</span>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
