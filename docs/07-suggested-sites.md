# Suggested sites to add to Rxlinks

Sites many people use often. Add the ones that fit your workflow. For each, you need: **title**, **url**, **img** path (icon in `public/imgs/app-icons/`), and **category**.

---

## Search & productivity

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| DuckDuckGo | https://duckduckgo.com | Popular | Privacy-focused search. |
| Bing | https://www.bing.com | Popular | Alternative search. |
| Ecosia | https://www.ecosia.org | Popular | Search that plants trees. |
| Notion | https://www.notion.so | Popular / Tools | Notes and wikis. |
| Todoist | https://todoist.com | Tools | Task lists. |
| Trello | https://trello.com | Tools | Boards and cards. |
| Google Drive | https://drive.google.com | Popular | Files and docs. |
| Dropbox | https://www.dropbox.com | Popular | File storage. |
| OneDrive | https://onedrive.live.com | Popular | Microsoft cloud storage. |

---

## Communication & social

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| Discord | https://discord.com | Social | Chat and communities. |
| Slack | https://slack.com | Social / Tools | Team chat. |
| Telegram Web | https://web.telegram.org | Social | Messaging. |
| Reddit | https://www.reddit.com | Social | Forums and discussions. |
| Twitter/X | https://x.com | Social | Short posts. |
| LinkedIn | https://www.linkedin.com | Social | Professional network. |
| Mastodon | https://mastodon.social | Social | Fediverse. |
| Bluesky | https://bsky.app | Social | Decentralized social. |

---

## Developer & learning

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| GitHub | https://github.com | Web Technologies / Popular | Code hosting. |
| GitLab | https://gitlab.com | Web Technologies | Code hosting. |
| Stack Overflow | https://stackoverflow.com | Learning | Q&A for devs. |
| MDN | https://developer.mozilla.org | Learning | Web docs. |
| npm | https://www.npmjs.com | Web Technologies | JS packages. |
| CodePen | https://codepen.io | Web Tools | Front-end playground. |
| JSFiddle | https://jsfiddle.net | Web Tools | Quick experiments. |
| Replit | https://replit.com | Learning / Web Tools | Online IDE. |
| Can I use | https://caniuse.com | Web Technologies | Browser support. |
| W3Schools | https://www.w3schools.com | Learning | Tutorials. |
| freeCodeCamp | https://www.freecodecamp.org | Learning | Free courses. |
| Frontend Mentor | https://www.frontendmentor.io | Learning | Practice projects. |

---

## Design & media

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| Figma | https://www.figma.com | Tools / Images & Photos | Design and prototypes. |
| Canva | https://www.canva.com | Tools | Templates and graphics. |
| Unsplash | https://unsplash.com | Images & Photos | Free photos. |
| Pexels | https://www.pexels.com | Images & Photos | Free photos/videos. |
| Dribbble | https://dribbble.com | Images & Photos | Design inspiration. |
| Behance | https://www.behance.net | Images & Photos | Portfolios. |
| Icons8 | https://icons8.com | Tools | Icons and illustrations. |
| Flaticon | https://www.flaticon.com | Tools | Icons. |
| Font Awesome | https://fontawesome.com | Web Technologies | Icons and kits. |

---

## AI & writing

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| ChatGPT | (already common) | AI | Chat and writing. |
| Grammarly | https://www.grammarly.com | Tools | Writing and grammar. |
| Hemingway Editor | https://hemingwayapp.com | Tools | Readability. |
| Copy.ai | https://www.copy.ai | AI | Marketing copy. |
| Hugging Face | https://huggingface.co | AI | Models and demos. |
| Poe | https://poe.com | AI | Multiple AI models. |
| Phind | https://www.phind.com | AI | Dev-focused search. |

---

## Video & entertainment

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| YouTube | https://www.youtube.com | Popular | Videos. |
| Vimeo | https://vimeo.com | Popular | Video hosting. |
| Twitch | https://www.twitch.tv | Games / Social | Streaming. |
| Netflix | https://www.netflix.com | Popular | Streaming. |
| Spotify | https://open.spotify.com | Popular | Music. |
| SoundCloud | https://soundcloud.com | Popular | Audio. |
| Internet Archive | https://archive.org | Tools / Learning | Old software, books, media. |

---

## Utilities & converters

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| TinyURL / Bitly | https://bitly.com | Tools | Short links. |
| Pastebin | https://pastebin.com | Tools | Share text/code. |
| JSON Formatter | https://jsonformatter.org | Web Tools | Validate/format JSON. |
| Regex101 | https://regex101.com | Web Tools | Test regex. |
| Carbon | https://carbon.now.sh | Web Tools | Code screenshots. |
| Lorem Ipsum | https://www.lipsum.com | Tools | Placeholder text. |
| Lorem Picsum | https://picsum.photos | Images & Photos | Placeholder images. |
| Favicon.io | https://favicon.io | Web Tools | Favicons. |
| Real Favicon Generator | https://realfavicongenerator.net | Web Tools | Favicons. |
| Squoosh | https://squoosh.app | Tools | Image compression. |
| Remove.bg | (you may have) | Tools | Remove image background. |
| TinyPNG | https://tinypng.com | Tools | Compress images. |

---

## News & reference

| Site | URL | Category idea | Notes |
|------|-----|---------------|--------|
| Wikipedia | https://www.wikipedia.org | Popular | Encyclopedia. |
| Wolfram Alpha | https://www.wolframalpha.com | Tools | Computation and answers. |
| Hacker News | https://news.ycombinator.com | Popular / Learning | Tech news. |
| Dev.to | (you may have) | Learning | Dev articles. |
| Medium | https://medium.com | Learning | Articles. |
| Substack | https://substack.com | Learning | Newsletters. |

---

## How to add a site

1. Choose **title**, **url**, **category** (use an existing one in `links.json` or add a new category).
2. Add an icon under `public/imgs/app-icons/` (e.g. `sitename.png` or `.webp`).
3. Add an object to `public/links.json`:

```json
{
  "title": "Site Name",
  "url": "https://example.com",
  "img": "imgs/app-icons/sitename.png",
  "category": "Tools"
}
```

See [Editing links](05-editing-links.md) for the full steps.

---

Pick sites you use often; this list is a starting point, not a must-add list.
