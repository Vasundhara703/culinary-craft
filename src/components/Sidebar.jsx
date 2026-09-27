import React from 'react';
import { X, Home, BookOpen, User, PenTool, MessageSquare, Settings } from 'lucide-react';

export default function Sidebar({ isOpen, onClose, currentView, setView, isAdminAuthenticated }) {
  const handleNav = (view) => {
    setView(view);
    onClose();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Backdrop overlay */}
      {isOpen && (
        <div 
          className="sidebar-backdrop" 
          onClick={onClose}
          style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, 
            backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 9998,
            backdropFilter: 'blur(3px)'
          }}
        />
      )}
      
      {/* Sidebar Drawer */}
      <div 
        className={`sidebar-drawer ${isOpen ? 'open' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: isOpen ? 0 : '-300px',
          width: '280px',
          height: '100%',
          backgroundColor: 'var(--surface-primary)',
          boxShadow: 'var(--shadow-xl)',
          zIndex: 9999,
          transition: 'left 0.3s ease-in-out',
          display: 'flex',
          flexDirection: 'column',
          borderRight: '1px solid var(--border-color)',
          padding: '20px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img 
              src="/logo.png" 
              alt="Logo" 
              style={{ width: '32px', height: '32px', borderRadius: '50%', objectFit: 'cover' }} 
            />
            <span className="serif-title" style={{ fontSize: '18px', margin: 0 }}>CulinaryCraft</span>
          </div>
          <button 
            onClick={onClose} 
            className="btn-icon-round"
            style={{ width: '32px', height: '32px' }}
          >
            <X size={18} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px', flexGrow: 1 }}>
          <button 
            onClick={() => handleNav('landing')} 
            className={`nav-btn ${currentView === 'landing' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: currentView === 'landing' ? 'var(--accent-primary-light)' : 'transparent', color: currentView === 'landing' ? 'var(--accent-primary)' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: '500' }}
          >
            <Home size={18} /> About & Features
          </button>
          
          <button 
            onClick={() => handleNav('recipes')} 
            className={`nav-btn ${currentView === 'recipes' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: currentView === 'recipes' ? 'var(--accent-primary-light)' : 'transparent', color: currentView === 'recipes' ? 'var(--accent-primary)' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: '500' }}
          >
            <BookOpen size={18} /> Recipes
          </button>
          
          <button 
            onClick={() => handleNav('blogs')} 
            className={`nav-btn ${currentView === 'blogs' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: currentView === 'blogs' ? 'var(--accent-primary-light)' : 'transparent', color: currentView === 'blogs' ? 'var(--accent-primary)' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: '500' }}
          >
            <PenTool size={18} /> Chefs' Blogs
          </button>

          <button 
            onClick={() => handleNav('founder')} 
            className={`nav-btn ${currentView === 'founder' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: currentView === 'founder' ? 'var(--accent-primary-light)' : 'transparent', color: currentView === 'founder' ? 'var(--accent-primary)' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: '500' }}
          >
            <User size={18} /> About Founder
          </button>

          <button 
            onClick={() => handleNav('feedback')} 
            className={`nav-btn ${currentView === 'feedback' ? 'active' : ''}`}
            style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: currentView === 'feedback' ? 'var(--accent-primary-light)' : 'transparent', color: currentView === 'feedback' ? 'var(--accent-primary)' : 'var(--text-primary)', cursor: 'pointer', textAlign: 'left', fontWeight: '500' }}
          >
            <MessageSquare size={18} /> Feedback
          </button>
        </nav>

        {isAdminAuthenticated && (
          <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '20px', marginTop: 'auto' }}>
            <button 
              onClick={() => handleNav('admin')} 
              style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', borderRadius: 'var(--radius-md)', border: 'none', background: 'transparent', color: 'var(--accent-primary)', cursor: 'pointer', width: '100%', textAlign: 'left', fontWeight: '600' }}
            >
              <Settings size={18} /> Admin Panel
            </button>
          </div>
        )}
      </div>
    </>
  );
}
