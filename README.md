<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1pCW1e10Sl46GbvJeghS__-qUmfinlzh3

## Run Locally

**Prerequisites:**  Node.js

1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## Deploy to GitHub Pages

This project is configured to automatically deploy to GitHub Pages when you push to the main branch.

### Setup:

1. Go to your GitHub repository settings
2. Navigate to "Secrets and variables" → "Actions"
3. Add a new repository secret named `GEMINI_API_KEY` with your Gemini API key
4. Go to "Pages" settings and set source to "GitHub Actions"
5. Push your code to the main branch

The site will be available at: `https://maome1.github.io/1/`

### Manual Deploy:

You can also deploy manually using:
```bash
npm run build
# Then upload the dist folder to your hosting service
```
