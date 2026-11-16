/* ==========================================================================
   SALTORIA COMMUNITY — UNIFIED LAYOUT ENGINE & UI HELPERS
   ========================================================================== */
const SALTORIA_NAV = [
  {
    group: "Main Menu",
    items: [
      { id: "dashboard", label: "Overview Dashboard", href: "/index.html", icon: "⚡" },
      { id: "catalog", label: "Studio Kits & Maps", href: "/catalog.html", icon: "📦", badge: "V7.2" }
    ]
  },
  {
    group: "Creator & Dev Tools",
    items: [
      { id: "lyric-converter", label: "LRC to Lua Converter", href: "/tools/lyric-converter.html", icon: "🎵", badge: "Tool" },
      { id: "command-gen", label: "Studio Batch Command", href: "/tools/command-generator.html", icon: "🛠️", badge: "Luau" },
      { id: "webhook-tester", label: "Discord Webhook Hub", href: "/tools/webhook-tester.html", icon: "📡", badge: "API" }
    ]
  },
  {
    group: "Community & Links",
    items: [
      { id: "discord", label: "Discord Server", href: "https://discord.com", external: true, icon: "💬" },
      { id: "store", label: "Saltoria Store", href: "/catalog.html#store", icon: "🛒" }
    ]
  }
];

function initSaltoriaLayout(activePageId, pageTitle) {
  const sidebarEl = document.getElementById("saltoria-sidebar");
  const topbarEl = document.getElementById("saltoria-topbar");

  if (sidebarEl) {
    let navHtml = `
      <a href="/index.html" class="sidebar-brand">
        <div class="brand-logo">SC</div>
        <div class="brand-text">
          <span class="brand-title">SALTORIA</span>
          <span class="brand-sub">Studio & Community</span>
        </div>
      </a>
      <div class="sidebar-nav">
    `;

    SALTORIA_NAV.forEach(group => {
      navHtml += `<div><div class="nav-group-label">${group.group}</div><ul class="nav-list">`;
      group.items.forEach(item => {
        const isActive = item.id === activePageId ? "active" : "";
        const target = item.external ? 'target="_blank" rel="noopener"' : "";
        const badge = item.badge ? `<span class="nav-badge">${item.badge}</span>` : "";
        navHtml += `
          <li>
            <a href="${item.href}" class="nav-link ${isActive}" ${target}>
              <span>${item.icon}</span>
              <span>${item.label}</span>
              ${badge}
            </a>
          </li>
        `;
      });
      navHtml += `</ul></div>`;
    });

    navHtml += `
      </div>
      <div class="sidebar-footer">
        <div class="status-card">
          <div class="status-dot"></div>
          <div>
            <div style="font-size:12px;font-weight:700;">All Systems Operational</div>
            <div style="font-size:11px;color:var(--text-muted);">Vercel Edge • v2.6</div>
          </div>
        </div>
      </div>
    `;
    sidebarEl.innerHTML = navHtml;
  }

  if (topbarEl) {
    topbarEl.innerHTML = `
      <div class="topbar-left">
        <button class="mobile-toggle" onclick="toggleSidebar()" aria-label="Toggle Menu">☰</button>
        <div class="breadcrumb">
          <span>Saltoria</span>
          <span>/</span>
          <span class="current">${pageTitle}</span>
        </div>
      </div>
      <div class="topbar-right">
        <span class="tag tag-cyan">● Studio Ready</span>
        <a href="/catalog.html" class="btn btn-secondary" style="padding:7px 14px;min-height:36px;font-size:12.5px;">Explore Kits</a>
      </div>
    `;
  }

  // Ensure toast container exists
  if (!document.getElementById("toast-container")) {
    const tc = document.createElement("div");
    tc.id = "toast-container";
    tc.className = "toast-container";
    document.body.appendChild(tc);
  }
}

function toggleSidebar() {
  const sb = document.getElementById("saltoria-sidebar");
  if (sb) sb.classList.toggle("open");
}

function showToast(message) {
  const container = document.getElementById("toast-container");
  if (!container) return;
  const toast = document.createElement("div");
  toast.className = "toast";
  toast.innerHTML = `<span style="color:var(--accent-cyan);">✔</span><span>${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(20px)";
    toast.style.transition = "all 0.25s ease";
    setTimeout(() => toast.remove(), 250);
  }, 2800);
}

function copyTextToClipboard(elementId, label = "Kode") {
  const el = document.getElementById(elementId);
  if (!el) return;
  const text = el.value || el.innerText;
  if (!text.trim()) {
    showToast("Tidak ada teks untuk disalin.");
    return;
  }
  navigator.clipboard.writeText(text).then(() => {
    showToast(`${label} berhasil disalin ke clipboard!`);
  });
}
