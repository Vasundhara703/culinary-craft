import React from 'react';
import { Sun, Moon, ShoppingBag, Settings, Home, LogOut } from 'lucide-react';

export default function Header({ 
  currentView, 
  setView, 
  theme, 
  toggleTheme, 
  shoppingListCount, 
  toggleShoppingListOpen,
  isUserAuthenticated,
  isAdminAuthenticated,
  onLogout
}) {
  const isLoggedIn = isUserAuthenticated || isAdminAuthenticated;

  return (
    <header className="app-header glass-panel">
      <div className="container header-container">
        <a 
          href="#" 
          className="logo-group" 
          onClick={(e) => { 
            e.preventDefault(); 
            if (isLoggedIn) {
              setView('home');
            } else {
              setView('landing');
            }
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px' }}
        >
          <img 
            src="/logo.png" 
            alt="Culinary Craft Logo" 
            style={{ 
              height: '48px', 
              width: '48px', 
              objectFit: 'cover', 
              borderRadius: '50%',
              border: '2px solid var(--accent-primary)',
              boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
              transition: 'transform 0.3s ease'
            }}
            className="logo-img-hover"
          />
          <span className="logo-text serif-title">
            Culinary<span className="serif-italic" style={{ color: 'var(--accent-red)', marginLeft: '4px' }}>Craft</span>
          </span>
        </a>

        <nav className="main-nav">
          {!isLoggedIn ? (
            <>
              <a href="#about" className="nav-link">About Us</a>
              <a href="#founder" className="nav-link">Founder</a>
              <a href="#blogs" className="nav-link">Chef Blogs</a>
              <a href="#feedback" className="nav-link">Feedback</a>
              <a 
                href="#login" 
                className="nav-link" 
                style={{ 
                  padding: '6px 16px', 
                  borderRadius: 'var(--radius-full)', 
                  background: 'var(--accent-primary)', 
                  color: '#fff', 
                  fontWeight: '600' 
                }}
              >
                Get Started
              </a>
            </>
          ) : (
            <>
              <a 
                href="#" 
                className={`nav-link ${currentView === 'home' ? 'active' : ''}`}
                onClick={(e) => { e.preventDefault(); setView('home'); }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Home size={16} /> Explore Recipes
                </span>
              </a>
              {isAdminAuthenticated && (
                <a 
                  href="#" 
                  className={`nav-link ${currentView === 'admin' ? 'active' : ''}`}
                  onClick={(e) => { e.preventDefault(); setView('admin'); }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Settings size={16} /> Admin Panel
                  </span>
                </a>
              )}
            </>
          )}
        </nav>

        <div className="header-actions">
          <button 
            onClick={toggleTheme} 
            className="btn-icon-round"
            aria-label="Toggle Light/Dark Theme"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {isLoggedIn && (
            <button 
              onClick={toggleShoppingListOpen} 
              className="btn-icon-round"
              aria-label="View Shopping List"
              title="View Shopping List"
            >
              <ShoppingBag size={20} />
              {shoppingListCount > 0 && (
                <span className="badge-count">{shoppingListCount}</span>
              )}
            </button>
          )}

          {isLoggedIn && (
            <button
              onClick={onLogout}
              className="btn-icon-round"
              style={{
                color: 'var(--accent-primary)',
                borderColor: 'rgba(211, 84, 0, 0.2)'
              }}
              title="Log Out"
              aria-label="Log Out"
            >
              <LogOut size={20} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}

