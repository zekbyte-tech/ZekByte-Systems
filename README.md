## Deployment to GitHub/CloudFare

### 1. Create a new GitHub repository

* Log into GitHub
* Click “New Repository”
* Create an empty repository (public or private is fine)

### 2. Upload the Astro project

Inside the project folder, run:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

### 3. Create a Cloudflare Pages project

* Log into Cloudflare
* Go to “Workers & Pages”
* Click “Create”
* Select “Pages”
* Connect your GitHub account
* Select the repository

### 4. Configure the build settings

Use:

* Framework preset: Astro
* Build command: `npm run build`
* Build output directory: `dist`

Then click “Save and Deploy”.

Cloudflare will build and deploy the website automatically.

### 5. Add the custom domain

Inside the Cloudflare Pages project:

* Go to “Custom Domains”
* Click “Set up a custom domain”
* Enter your domain name

### 6. Update the DNS

If your domain is already managed inside Cloudflare:

* Cloudflare usually configures this automatically

If your domain is registered elsewhere:

* Update the nameservers to the ones Cloudflare provides
* Wait for DNS propagation

### 7. Final check

Once DNS propagation finishes:

* Test the website
* Verify HTTPS
* Verify page loading speed
* Verify the domain points correctly to the new Astro website

After that, every new GitHub push will automatically redeploy the website through Cloudflare Pages.

## Content Management

Everything you need to edit is inside:

```txt
src/content/
```

### Main Content Files

#### Blog Posts

Add new blog posts inside:

```txt
src/content/blog/
```

#### Homepage Configuration

Edit:

```txt
src/content/home.yaml
```

#### About Page

Edit:

```txt
src/content/about.mdx
```

#### Site-Wide Configuration

Edit:

```txt
src/content/site.yaml
```

# Local Development

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

The website will be available at:

```txt
http://localhost:4321
```

# Production Build

Before pushing changes, always verify the project builds locally:

```bash
npm run build
```

If the build completes successfully, the project is ready to deploy.

# Git Workflow

After making changes and confirming the build works:

```bash
git add .
git commit -m "Update content"
git push origin main
```

Cloudflare Pages will automatically deploy the latest version after the push completes.

