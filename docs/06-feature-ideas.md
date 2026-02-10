# Feature ideas for Rxlinks

Ideas to make the app better. Some are small tweaks, others are bigger features. Use what fits your goals.

---

## Already in the app

- **Recently used links** – Last 8 clicked links, stored in the browser, shown under search.

---

## Quick wins

| Idea | What it does | Why it helps |
|------|--------------|--------------|
| **Favorites / Pinned** | Let users mark links as favorites and show a “Favorites” section at the top. | Like recent links, but user-chosen; great for daily drivers. |
| **Clear recent** (done) | Button to clear recently used. | Keeps the list tidy. |
| **Link count** | Show “X links” or “X categories” somewhere (e.g. footer or under search). | Gives a sense of what’s in the hub. |
| **Keyboard shortcut** | e.g. `Ctrl+K` or `/` to focus the search box. | Faster for power users. |
| **Open link in same tab** | Optional: some links open in same tab (e.g. internal or docs). | Fewer tabs when you want to stay in the hub. |

---

## Organizing & finding links

| Idea | What it does | Why it helps |
|------|--------------|--------------|
| **Custom categories** | Let users create their own categories and move links into them. | Same data, different mental model (work / personal / learning). |
| **Tags** | Add tags to links (e.g. `free`, `offline`, `API`) and filter by tag. | More flexible than a single category. |
| **Sort options** | Sort categories or links by: name, recently added, most clicked. | Easier to find what you use most. |
| **Collapse categories** | Click a category header to collapse/expand that section. | Less scrolling on big lists. |
| **Search in URL** | Extend search to link URLs, not only title/category. | Find links when you remember the domain. |

---

## Data & persistence

| Idea | What it does | Why it helps |
|------|--------------|--------------|
| **Export / import links** | Export my links (and maybe recent/favorites) as JSON; import from file or URL. | Backup, share, or merge hubs. |
| **Sync across devices** | Store recent + favorites in account or simple backend. | Same experience on phone and desktop. |
| **Click stats** | Count how often each link is clicked; show “Most used” or sort by usage. | Surfaces what you actually use. |
| **Last visited** | Store last visit time per link and show “Last used 2h ago”. | Complements “recent” with time context. |

---

## UX & polish

| Idea | What it does | Why it helps |
|------|--------------|--------------|
| **Drag-and-drop order** | Reorder links inside a category or reorder categories. | Put favorite links/categories first. |
| **Custom icons** | Let user pick emoji or upload icon per link/category. | Personalization without editing code. |
| **Compact / expanded view** | Toggle between small cards and larger cards (or list). | Fits different screen sizes and preferences. |
| **Copy link** | Right-click or button to copy URL without opening. | Quick paste into chat, email, or another app. |
| **QR code** | Generate QR for a link (e.g. for phone). | Easy “send to phone” or print. |
| **Toast on open** | Short message: “Opened in new tab” or “Link copied.” | Clear feedback. |

---

## Technical & maintenance

| Idea | What it does | Why it helps |
|------|--------------|--------------|
| **Link health check** | Periodically check if URLs still work (200 vs 404/redirect). | Keep the list valid. |
| **Backup links.json** | Auto or manual backup of `links.json` (e.g. to download). | Safety before big edits. |
| **PWA** | Make the app installable (manifest + service worker). | Use like an app from home screen. |
| **Offline fallback** | Cache the list (and maybe icons) for offline viewing. | Works on bad connections. |

---

## Bigger directions

- **Multi-hubs** – Several link lists (e.g. “Work”, “Personal”) and switch between them.
- **Sharing** – Share a read-only or editable hub via link.
- **Templates** – Start from a template (Developer, Designer, Student) and customize.
- **Browser extension** – “Add current tab to Rxlinks” from any page.
- **API** – Simple REST or JSON endpoint to add/update links for automation.

---

Pick one or two that match how you use the app; the “Quick wins” and “Organizing & finding” sections are a good place to start.
