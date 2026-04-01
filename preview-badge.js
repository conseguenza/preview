/**
 * DevFlightTeam Professional Preview Badge
 * Non-removable preview indicator with legal disclaimer
 * For demonstration purposes only - not for distribution
 */

(function() {
  'use strict';

  // Configuration - DO NOT MODIFY
  const config = {
    teamName: 'DevFlightTeam',
    companyName: 'DevFlightTeam',
    message: 'PREVIEW MODE',
    disclaimer: 'Questa è un\'anteprima dimostrativa. Il prodotto non è ancora disponibile per la distribuzione commerciale. Tutti i contenuti sono protetti da copyright.',
    legalNote: '© 2026 DevFlightTeam - All Rights Reserved',
    badgeColor: '#b85c38',
    accentColor: '#c9a84c',
    backgroundColor: 'rgba(0, 0, 0, 0.95)',
    isLocked: true // Cannot be hidden
  };

  // Create overlay container
  const createOverlay = () => {
    const overlay = document.createElement('div');
    overlay.id = 'devflight-preview-overlay';
    overlay.innerHTML = `
      <div class="devflight-badge">
        <div class="devflight-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path d="M2 17L12 22L22 17" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <path d="M2 12L12 17L22 12" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
            <circle cx="12" cy="12" r="2" fill="currentColor"/>
          </svg>
        </div>
        <div class="devflight-content">
          <div class="devflight-badge-header">
            <span class="devflight-badge-status">⚠️ ${config.message}</span>
            <span class="devflight-badge-lock"><svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 10H5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2z"/><path d="M7 10V7a5 5 0 0 1 10 0v3"/></svg></span>
          </div>
          <div class="devflight-badge-team">
            <strong>${config.teamName}</strong>
          </div>
        </div>
      </div>
      <div class="devflight-tooltip">
        <div class="devflight-tooltip-content">
          <div class="devflight-tooltip-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="${config.badgeColor}" stroke-width="1.5">
              <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
              <path d="M2 17L12 22L22 17"/>
              <path d="M2 12L12 17L22 12"/>
            </svg>
            <strong>Anteprima Professionale</strong>
          </div>
          <div class="devflight-tooltip-body">
            <p class="devflight-disclaimer">${config.disclaimer}</p>
            <div class="devflight-legal">
              <p>Questo sito rappresenta una <strong>demo interattiva</strong> creata da ${config.companyName} per scopi dimostrativi.</p>
              <p>Il codice sorgente, il design e tutti i contenuti sono di proprietà esclusiva di ${config.companyName} e non possono essere:</p>
              <ul>
                <li>Distribuiti senza autorizzazione scritta</li>
                <li>Utilizzati per scopi commerciali</li>
                <li>Modificati o rivenduti</li>
                <li>Copiati in tutto o in parte</li>
              </ul>
              <div class="devflight-watermark">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z"/>
                  <path d="M2 17L12 22L22 17"/>
                </svg>
                <span>${config.legalNote}</span>
              </div>
            </div>
          </div>
          <div class="devflight-tooltip-footer">
            <div class="devflight-contact">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              <span>Per informazioni commerciali: <strong>sales@devflightteam.com</strong></span>
            </div>
          </div>
        </div>
      </div>
    `;
    
    // Add styles
    const styles = document.createElement('style');
    styles.id = 'devflight-styles';
    styles.textContent = `
      #devflight-preview-overlay {
        position: fixed;
        bottom: 20px;
        right: 20px;
        z-index: 999999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', system-ui, sans-serif;
        pointer-events: auto;
      }
      
      .devflight-badge {
        display: flex;
        align-items: center;
        gap: 10px;
        background: ${config.backgroundColor};
        backdrop-filter: blur(12px);
        border-radius: 48px;
        padding: 8px 18px 8px 14px;
        box-shadow: 0 6px 24px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.08);
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        animation: slideInRight 0.5s cubic-bezier(0.34, 1.2, 0.64, 1);
        position: relative;
        border-left: 3px solid ${config.badgeColor};
      }
      
      .devflight-badge:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.15);
        background: rgba(0, 0, 0, 0.98);
      }
      
      .devflight-icon {
        color: ${config.badgeColor};
        display: flex;
        align-items: center;
        justify-content: center;
        animation: pulse 2s infinite;
      }
      
      .devflight-icon svg {
        filter: drop-shadow(0 0 3px rgba(184, 92, 56, 0.6));
      }
      
      .devflight-content {
        display: flex;
        flex-direction: column;
        line-height: 1.3;
      }
      
      .devflight-badge-header {
        display: flex;
        align-items: center;
        gap: 6px;
      }
      
      .devflight-badge-status {
        font-size: 10px;
        font-weight: 700;
        letter-spacing: 0.5px;
        color: ${config.accentColor};
        text-transform: uppercase;
        background: rgba(201, 168, 76, 0.15);
        padding: 2px 8px;
        border-radius: 20px;
        display: inline-flex;
        align-items: center;
        gap: 4px;
      }
      
      .devflight-badge-lock {
        color: rgba(255, 255, 255, 0.5);
        display: inline-flex;
        align-items: center;
      }
      
      .devflight-badge-team {
        font-size: 11px;
        font-weight: 600;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 2px;
        letter-spacing: 0.3px;
      }
      
      .devflight-badge-team strong {
        color: white;
        font-weight: 700;
      }
      
      .devflight-tooltip {
        position: absolute;
        bottom: calc(100% + 15px);
        right: 0;
        width: 340px;
        max-width: calc(100vw - 40px);
        background: ${config.backgroundColor};
        backdrop-filter: blur(16px);
        border-radius: 16px;
        padding: 0;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1);
        opacity: 0;
        visibility: hidden;
        transform: translateY(12px) scale(0.96);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        pointer-events: none;
        z-index: 1000;
      }
      
      .devflight-tooltip::after {
        content: '';
        position: absolute;
        bottom: -8px;
        right: 24px;
        width: 0;
        height: 0;
        border-left: 8px solid transparent;
        border-right: 8px solid transparent;
        border-top: 8px solid ${config.backgroundColor};
        filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
      }
      
      .devflight-badge.active-tooltip .devflight-tooltip {
        opacity: 1;
        visibility: visible;
        transform: translateY(0) scale(1);
      }
      
      .devflight-tooltip-content {
        padding: 0;
      }
      
      .devflight-tooltip-header {
        display: flex;
        align-items: center;
        gap: 12px;
        padding: 16px 18px 12px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
      }
      
      .devflight-tooltip-header strong {
        font-size: 16px;
        font-weight: 700;
        color: white;
        letter-spacing: -0.2px;
      }
      
      .devflight-tooltip-body {
        padding: 16px 18px;
      }
      
      .devflight-disclaimer {
        font-size: 13px;
        line-height: 1.5;
        color: ${config.accentColor};
        background: rgba(201, 168, 76, 0.1);
        padding: 10px 12px;
        border-radius: 10px;
        margin-bottom: 16px;
        border-left: 3px solid ${config.accentColor};
        font-weight: 500;
      }
      
      .devflight-legal {
        margin-top: 12px;
      }
      
      .devflight-legal p {
        font-size: 11px;
        line-height: 1.5;
        color: rgba(255, 255, 255, 0.7);
        margin: 0 0 10px 0;
      }
      
      .devflight-legal p strong {
        color: ${config.accentColor};
      }
      
      .devflight-legal ul {
        margin: 10px 0;
        padding-left: 20px;
      }
      
      .devflight-legal li {
        font-size: 10px;
        line-height: 1.6;
        color: rgba(255, 255, 255, 0.6);
        margin: 6px 0;
      }
      
      .devflight-watermark {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 14px;
        padding-top: 12px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        font-size: 9px;
        color: rgba(255, 255, 255, 0.4);
        letter-spacing: 0.3px;
      }
      
      .devflight-watermark svg {
        flex-shrink: 0;
      }
      
      .devflight-tooltip-footer {
        padding: 12px 18px 16px;
        background: rgba(0, 0, 0, 0.3);
        border-radius: 0 0 16px 16px;
      }
      
      .devflight-contact {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 10px;
        color: rgba(255, 255, 255, 0.6);
      }
      
      .devflight-contact strong {
        color: ${config.accentColor};
        font-weight: 600;
      }
      
      /* No close button - this badge cannot be hidden */
      
      @keyframes slideInRight {
        from {
          opacity: 0;
          transform: translateX(120px) scale(0.9);
        }
        to {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
      }
      
      @keyframes pulse {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.85;
          transform: scale(0.96);
        }
      }
      
      /* Responsive adjustments */
      @media (max-width: 768px) {
        #devflight-preview-overlay {
          bottom: 12px;
          right: 12px;
          left: 12px;
        }
        
        .devflight-badge {
          padding: 6px 14px 6px 12px;
          width: auto;
        }
        
        .devflight-badge-status {
          font-size: 9px;
          padding: 2px 6px;
        }
        
        .devflight-badge-team {
          font-size: 9px;
        }
        
        .devflight-icon svg {
          width: 16px;
          height: 16px;
        }
        
        .devflight-tooltip {
          width: calc(100vw - 40px);
          right: -10px;
          bottom: calc(100% + 12px);
        }
        
        .devflight-tooltip::after {
          right: 20px;
        }
      }
      
      /* Reduced motion preference */
      @media (prefers-reduced-motion: reduce) {
        .devflight-badge,
        .devflight-tooltip,
        .devflight-icon {
          animation: none;
          transition: none;
        }
      }
      
      /* Print styles - badge remains visible for integrity */
      @media print {
        #devflight-preview-overlay {
          position: absolute;
          bottom: 20px;
          right: 20px;
          print-color-adjust: exact;
        }
      }
      
      /* Ensure badge is always visible */
      .devflight-badge {
        user-select: none;
        -webkit-user-select: none;
      }
    `;
    
    document.head.appendChild(styles);
    document.body.appendChild(overlay);
    
    return overlay;
  };
  
  // Initialize badge with interactions
  const initBadge = () => {
    const overlay = createOverlay();
    const badge = overlay.querySelector('.devflight-badge');
    let tooltipTimeout;
    
    // Toggle tooltip on badge click
    badge.addEventListener('click', (e) => {
      e.stopPropagation();
      badge.classList.toggle('active-tooltip');
      
      // Clear tooltip timeout
      if (tooltipTimeout) clearTimeout(tooltipTimeout);
      
      // Auto hide tooltip after 8 seconds
      if (badge.classList.contains('active-tooltip')) {
        tooltipTimeout = setTimeout(() => {
          badge.classList.remove('active-tooltip');
        }, 8000);
      }
    });
    
    // Close tooltip when clicking outside
    document.addEventListener('click', (e) => {
      if (!badge.contains(e.target)) {
        badge.classList.remove('active-tooltip');
        if (tooltipTimeout) clearTimeout(tooltipTimeout);
      }
    });
    
    // Prevent any attempts to hide or remove the badge
    const preventRemoval = () => {
      if (!document.getElementById('devflight-preview-overlay')) {
        // If badge is removed, re-add it
        const newOverlay = createOverlay();
        const newBadge = newOverlay.querySelector('.devflight-badge');
        
        newBadge.addEventListener('click', (e) => {
          e.stopPropagation();
          newBadge.classList.toggle('active-tooltip');
        });
        
        document.addEventListener('click', (e) => {
          if (!newBadge.contains(e.target)) {
            newBadge.classList.remove('active-tooltip');
          }
        });
      }
    };
    
    // Monitor for badge removal attempts
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.removedNodes.length > 0) {
          mutation.removedNodes.forEach((node) => {
            if (node.id === 'devflight-preview-overlay' || node.querySelector?.('#devflight-preview-overlay')) {
              setTimeout(preventRemoval, 10);
            }
          });
        }
      });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    // Add console warning
    console.log('%c⚠️ PREVIEW MODE ACTIVE', 'color: #c9a84c; font-size: 16px; font-weight: bold;');
    console.log('%cQuesta è un\'anteprima dimostrativa. Il prodotto non è disponibile per la distribuzione.', 'color: #b85c38; font-size: 12px;');
    console.log('%c© 2026 DevFlightTeam - All Rights Reserved', 'color: #5c6b3a; font-size: 11px;');
  };
  
  // Initialize immediately - cannot be disabled
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBadge);
  } else {
    initBadge();
  }
})();