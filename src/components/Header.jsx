import React from 'react';
import { Sun, Moon, ShoppingBag, Settings, Lock, Home, LogOut, Menu } from 'lucide-react';

export default function Header({ 
  currentView, 
  setView, 
  theme, 
  toggleTheme, 
  shoppingListCount, 
  toggleShoppingListOpen,
  isAdminAuthenticated,
  onLogout,
  onToggleSidebar
}) {
  const navigateToSection = (e, sectionId) => {
    e.preventDefault();
    if (currentView !== 'landing') {
      setView('landing');
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 50);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="app-header glass-panel">
      <div className="container header-container">
        <a 
          href="#" 
          className="logo-group" 
          onClick={(e) => { 
            e.preventDefault(); 
            setView('landing');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}
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

        {/* Header center area is now empty because navigation is in sidebar */}
        <div className="main-nav-placeholder" style={{ flexGrow: 1 }}></div>

        <div className="header-actions">
          {/* Hamburger Menu - Toggle Sidebar */}
          <button 
            onClick={onToggleSidebar}
            className="btn-icon-round"
            aria-label="Open Navigation Menu"
            title="Open Navigation Menu"
            style={{ 
              backgroundColor: 'var(--accent-primary)', 
              color: 'white', 
              border: 'none',
              boxShadow: '0 2px 8px rgba(211, 84, 0, 0.3)'
            }}
          >
            <Menu size={20} />
          </button>

          {/* Shopping Bag - always visible to all users */}
          <button 
            onClick={toggleShoppingListOpen} 
            className="btn-icon-round"
            aria-label="View Shopping List"
            title="View Shopping List"
            style={{ position: 'relative' }}
          >
            <ShoppingBag size={20} />
            {shoppingListCount > 0 && (
              <span className="badge-count">{shoppingListCount}</span>
            )}
          </button>

          {/* Theme Toggle */}
          <button 
            onClick={toggleTheme} 
            className="btn-icon-round"
            aria-label="Toggle Light/Dark Theme"
            title="Toggle Light/Dark Theme"
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Admin Logout button if logged in as Admin */}
          {isAdminAuthenticated && (
            <button
              onClick={onLogout}
              className="btn-icon-round"
              style={{
                color: 'var(--accent-primary)',
                borderColor: 'rgba(211, 84, 0, 0.25)'
              }}
              title="Log Out Admin"
              aria-label="Log Out Admin"
            >
              <LogOut size={18} />
            </button>
          )}
        </div>
      </div>
    </header>
  );
}


