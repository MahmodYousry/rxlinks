# Getting started

Step-by-step guide to run Rxlinks on your machine.

---

## What you need

1. **Node.js**  
   - Version **20.19+**, **22.12+**, or **24+**. If you need to upgrade, use [nvm](https://github.com/coreybutler/nvm-windows) (Windows) or [nodejs.org](https://nodejs.org/) to install a supported version.  
   - Check: open a terminal and run `node -v`. You should see something like `v22.x.x` or `v20.19.x`.

2. **npm**  
   - Comes with Node.js. Check with `npm -v`.

---

## Install and run

1. **Open a terminal** in the project folder (where `package.json` is).

2. **Install dependencies:**
   ```bash
   npm install
   ```
   Wait until it finishes (no red errors).

3. **Start the app:**
   ```bash
   npm start
   ```
   or:
   ```bash
   ng serve
   ```

4. **Open the app in the browser:**  
   Go to **http://localhost:4200/**  
   You should see the link hub (categories and link cards).

5. **Stop the server:**  
   In the terminal, press **Ctrl+C**.

---

## Other useful commands

| Command | What it does |
|--------|----------------|
| `npm run build` | Builds the app for production. Output is in the `dist/` folder. |
| `npm test` | Runs the unit tests (Vitest). |
| `ng serve` | Same as `npm start` – starts the dev server. |

If a command fails, read the error message: it often says what’s wrong (e.g. wrong Node version, missing dependency).
