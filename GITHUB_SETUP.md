# How to Push Your Project to GitHub

Follow these steps to store your Kahani Buffet project on GitHub:

## Step 1: Initialize Git Repository

Open your terminal and navigate to your project folder:

```bash
cd "/Users/meetushi/kahani buffet"
```

Initialize a git repository:

```bash
git init
```

## Step 2: Add Your Files

Add all your project files:

```bash
git add .
```

Or add files individually:
```bash
git add index.html
git add styles.css
git add script.js
git add README.md
git add .gitignore
```

## Step 3: Make Your First Commit

Commit your files:

```bash
git commit -m "Initial commit: Kahani Buffet website"
```

## Step 4: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the **"+"** icon in the top right corner
3. Select **"New repository"**
4. Name your repository (e.g., `kahani-buffet` or `kahanibuffet-website`)
5. Choose **Public** or **Private**
6. **DO NOT** initialize with README, .gitignore, or license (since you already have files)
7. Click **"Create repository"**

## Step 5: Connect Local Repository to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
# Add the remote repository (replace YOUR_USERNAME and REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Rename your branch to main (if needed)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 6: Verify

Visit your GitHub repository page - you should see all your files there!

---

## Quick Reference Commands

```bash
# Check status
git status

# See what files are tracked
git ls-files

# View commit history
git log

# If you make changes later, use:
git add .
git commit -m "Description of changes"
git push
```

## Troubleshooting

**If you get authentication errors:**
- GitHub now requires a Personal Access Token instead of password
- Go to: Settings → Developer settings → Personal access tokens → Tokens (classic)
- Generate a new token with `repo` permissions
- Use the token as your password when pushing

**If you need to update the remote URL:**
```bash
git remote set-url origin https://github.com/YOUR_USERNAME/REPO_NAME.git
```

---

**Note:** Make sure you replace `YOUR_USERNAME` and `REPO_NAME` with your actual GitHub username and repository name!
