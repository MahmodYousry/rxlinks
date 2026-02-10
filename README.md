# Rxlinks

A personal link hub built with Angular: browse links by category (AI, Popular, Social, Games, Tools, etc.), search, and switch between light and dark theme. Links are loaded from a JSON file for easy editing.

## Development server

Run:

```bash
ng serve
```

Open [http://localhost:4200/](http://localhost:4200/). The app reloads when you change source files.

## Building

```bash
ng build
```

Output goes to `dist/`. Use `ng build --configuration development` for a dev build.

## Running unit tests

```bash
ng test
```

Uses Karma; run with `--no-watch --browsers=ChromeHeadless` for a single headless run.

## Editing links

Links are stored in **`public/links.json`**. Each entry has:

- `title` – label shown in the app  
- `url` – link URL  
- `img` – path to the icon (e.g. `imgs/app-icons/example.png`)  
- `category` – category name (e.g. `AI`, `Popular`, `Tools`)

Add, remove, or change entries in that file; no code changes needed. Restart or refresh the app to see updates.

## Tech stack

- Angular 20  
- PrimeNG, Bootstrap  
- Standalone components, lazy-loaded routes  

## Resources

- [Angular CLI](https://angular.dev/tools/cli)  
- [Angular Update Guide](https://angular.dev/update-guide)
