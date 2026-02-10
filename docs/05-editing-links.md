# Editing links

How to add, change, or remove links **without writing code**. You only edit one file: **`public/links.json`**.

---

## Where is it?

Open the file:

**`public/links.json`**

(in the project root, inside the `public` folder).

---

## What one link looks like

Each link is one object (one block in the list) with four fields:

```json
{
  "title": "ChatGPT",
  "url": "https://chat.openai.com/",
  "img": "imgs/app-icons/chatgpt.png",
  "category": "AI"
}
```

| Field | Meaning | Example |
|-------|--------|--------|
| `title` | Text shown under the icon | `"Google"` |
| `url` | Full address of the site | `"https://google.com"` |
| `img` | Path to the icon image | `"imgs/app-icons/google.png"` |
| `category` | Group name (same name = same group) | `"Popular"` |

---

## Add a new link

1. Open `public/links.json`.
2. Find the **last link** in the list (before the closing `]`).
3. After its closing `},` add a **comma** and then a new block, for example:

   ```json
   ,
   {
     "title": "My Site",
     "url": "https://example.com",
     "img": "imgs/app-icons/example.png",
     "category": "Others"
   }
   ```

4. Save the file.
5. Put the icon image in **`public/imgs/app-icons/`** (e.g. `example.png`) if you use one.
6. Refresh the app in the browser (or restart `ng serve`).

---

## Change a link

1. Open `public/links.json`.
2. Find the link (search by `title` or `url`).
3. Edit `title`, `url`, `img`, or `category`.
4. Save and refresh.

---

## Remove a link

1. Open `public/links.json`.
2. Delete the **whole block** for that link, including the `{ ... }`.
3. Make sure you don’t leave a comma alone (e.g. no `}, , {`).  
   - Correct: `}, {` between two links.  
   - Correct: last link has no comma after `}`.
4. Save and refresh.

---

## Categories

- You can **invent new categories**: just use a new name in `category` (e.g. `"My Category"`). All links with that name appear under one group.
- Spelling and spaces matter: `"Web Tools"` and `"WebTools"` are two different categories.

---

## JSON rules (avoid common mistakes)

- **Strings** must be in **double quotes** `"..."`.
- Separate **fields** with **commas**.
- No comma after the **last** field in an object.
- No comma after the **last** link in the list.

If the page stops loading or links disappear after you edit, check for a missing/extra comma or quote. You can validate the file at [jsonlint.com](https://jsonlint.com) by pasting the contents.
