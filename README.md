# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/fd9e1453-d606-4db0-b605-b711b4dd43b5

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/fd9e1453-d606-4db0-b605-b711b4dd43b5) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/fd9e1453-d606-4db0-b605-b711b4dd43b5) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Render — Auto-deploys & Environment Variables

If you connected this repository to Render (https://render.com) using the provided `render.yaml`, Render will build the project on pushes to `main` by default.

Automatic deploys
- When you create the Static Site on Render, connect the GitHub repo `Dongarilingababu/wed-website` and select the `main` branch.
- Ensure "Auto-Deploy" is enabled in the service settings so Render deploys on every push to `main`.

Environment variables (secrets)
- For client-exposed variables in a Vite app, use the `VITE_` prefix (for example `VITE_API_URL`). Only variables with the `VITE_` prefix are exposed to browser JavaScript.
- Do NOT commit real secrets into the repository. Use the Render dashboard to add sensitive values.
	1. Open your service in Render.
	2. Go to the "Environment" tab.
	3. Click "Add Environment Variable" and enter the key and value.
- Use the `.env.example` file in this repo as a template for which variables you may need locally. Copy it to `.env` for local development and fill in real values.

Node version and build
- This repo recommends Node 18 (see `engines.node` in `package.json`). Render will use the Node version you specify in the service settings or via `engines` in `package.json`.
- Render will run the `buildCommand` from `render.yaml`: `npm install && npm run build` and publish the `dist` directory.

If you'd like, I can automate creating the Render service via the Render API — I will need a Render API key from you to do that. Alternatively, I can walk you through the dashboard steps interactively.

