import React, { useState } from 'react';
import { X, Trash2, Copy, ShoppingBag, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ShoppingList({ isOpen, onClose, shoppingList, onRemoveItem, onClearList }) {
  const [copied, setCopied] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});

  if (!isOpen) return null;

  const toggleCheck = (idx) => {
    setCheckedItems(prev => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleCopyClipboard = () => {
    if (shoppingList.length === 0) return;
    
    // Format list
    const textList = shoppingList.map((item, idx) => {
      const checkMark = checkedItems[idx] ? '[x]' : '[ ]';
      const qtyStr = item.quantity ? `${item.quantity} ${item.unit || ''} ` : '';
      const altStr = item.alternative ? ` (Alt: ${item.alternative})` : '';
      return `${checkMark} ${qtyStr}${item.name} [Recipe: ${item.recipeTitle}]${altStr}`;
    }).join('\n');

    navigator.clipboard.writeText(`🛒 MY CULINARY CRAFT SHOPPING LIST:\n\n${textList}\n\nHappy Cooking! ✨`)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
        confetti({
          particleCount: 30,
          spread: 40,
          origin: { x: 0.85, y: 0.2 }
        });
      })
      .catch(err => {
        console.error('Failed to copy text: ', err);
      });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="shopping-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="drawer-header">
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={22} className="logo-icon" />
            <h3 className="serif-title" style={{ fontSize: '22px' }}>Shopping List</h3>
          </div>
          <button className="btn-icon-round" style={{ border: 'none' }} onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="drawer-body">
          {shoppingList.length === 0 ? (
            <div className="empty-state">
              <ShoppingBag size={48} className="empty-icon" />
              <p style={{ fontWeight: '500' }}>Your shopping list is empty.</p>
              <p style={{ fontSize: '13px', marginTop: '6px' }}>Go to any recipe details page and click "Add Needed to Shopping List" to add ingredients.</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '16px' }}>
                You have {shoppingList.length} items to shop. Check off items as you buy them!
              </p>
              
              {shoppingList.map((item, idx) => {
                const isChecked = !!checkedItems[idx];
                return (
                  <div key={idx} className="shopping-item-row" style={{ opacity: isChecked ? 0.6 : 1 }}>
                    <div className="shopping-item-left">
                      <input 
                        type="checkbox" 
                        className="ingredient-check-input"
                        checked={isChecked}
                        onChange={() => toggleCheck(idx)}
                      />
                      <div className="ingredient-info">
                        <span 
                          className="ingredient-name" 
                          style={{ 
                            textDecoration: isChecked ? 'line-through' : 'none',
                            fontWeight: '600'
                          }}
                        >
                          {item.quantity ? `${item.quantity} ${item.unit || ''} ` : ''}
                          {item.name}
                        </span>
                        <span style={{ display: 'block', fontSize: '11px', color: 'var(--text-muted)' }}>
                          Recipe: {item.recipeTitle}
                        </span>
                        {item.alternative && (
                          <span className="ingredient-alt-tag" style={{ marginTop: '2px', fontSize: '11px' }}>
                            Alt: {item.alternative}
                          </span>
                        )}
                      </div>
                    </div>

                    <button 
                      className="btn-remove-item" 
                      onClick={() => onRemoveItem(idx)}
                      aria-label="Remove item"
                      title="Remove item"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {shoppingList.length > 0 && (
          <div className="drawer-footer">
            <div style={{ display: 'flex', gap: '12px' }}>
              <button className="btn-pantry-check-secondary" style={{ flex: 1, marginTop: 0 }} onClick={onClearList}>
                Clear All
              </button>
              <button className="btn-pantry-check" style={{ flex: 2, marginTop: 0 }} onClick={handleCopyClipboard}>
                {copied ? <Check size={16} /> : <Copy size={16} />}
                {copied ? 'Copied List!' : 'Copy to Clipboard'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
