# Deploying your resume to GitHub Pages

You'll end up with a live link like `https://<your-username>.github.io/resume/`
(or on a repo named exactly `<your-username>.github.io`, the link is just
`https://<your-username>.github.io/`).

## 1. Create the repo
1. Go to github.com → **New repository**.
2. Name it `resume` (any name works, but `<your-username>.github.io` gives you the shortest URL).
3. Keep it **Public** (GitHub Pages on the free tier requires this for personal accounts).
4. Don't initialize with a README (you already have one).

## 2. Upload the files
Easiest path, no git required:
1. Open your new repo on github.com.
2. Click **Add file → Upload files**.
3. Drag in `index.html`, `Tarun_Siddhartha_M_CV.pdf`, and this `README.md`.
4. Commit.

(If you're comfortable with git instead: `git init`, `git add .`, `git commit -m "resume"`,
then `git remote add origin <repo-url>` and `git push -u origin main`.)

## 3. Turn on Pages
1. In the repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **Deploy from a branch**.
3. Branch: `main`, folder: `/ (root)`. Save.
4. Wait ~1 minute, then refresh — GitHub shows your live URL at the top of that page.

## 4. Share it
The link is permanent and updates automatically any time you push a new
`index.html`. Put it in your email signature, LinkedIn "Featured" section, or
job applications directly.

## Updating later
Just edit `index.html` (any text editor, or ask Claude) and re-upload /
re-commit. Changes go live within a minute or two. If your role, company, or
dates change, update the **Experience** section and re-export a fresh PDF to
replace `Tarun_Siddhartha_M_CV.pdf` so the download button stays current.
