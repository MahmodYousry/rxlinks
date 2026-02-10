# How to use the app

How the Rxlinks page works when you open it in the browser.

---

## What you see

1. **Theme toggle (top)**  
   - Switch between **Light** and **Dark** theme.  
   - Your choice is saved in the browser (localStorage), so it stays next time you open the app.

2. **Search box**  
   - Type to filter links by **title** or **category**.  
   - Example: type “AI” to see only AI links; type “google” to find Google-related links.  
   - If nothing matches, you’ll see “No results found.”

3. **Categories and link cards**  
   - Links are grouped by category (e.g. AI, Popular, Social, Tools).  
   - Each **card** shows an icon and the link name.  
   - **Click a card** to open that site in a **new tab**.

---

## Tips

- **Search is instant** – no need to press Enter.  
- **Theme** – use the sun/moon toggle to switch; the page updates immediately.  
- **New tab** – every link opens in a new tab so you don’t lose the hub.

---

## If something doesn’t work

- **Blank page?** Check the browser console (F12 → Console) for errors.  
- **Wrong links?** Make sure you edited `public/links.json` and refreshed the page (or restarted `ng serve`).  
- **Images missing?** Icons live in `public/imgs/app-icons/`. Paths in `links.json` should be like `imgs/app-icons/filename.png`.
