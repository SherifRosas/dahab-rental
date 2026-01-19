# 🚀 Deployment Guide: Dahab Rental AI

To get your project running online for a **free test**, we will use **Vercel**. It is the industry standard for Next.js and takes less than 3 minutes.

## 1. Prepare your GitHub

Vercel works best by connecting to a GitHub repository.

1. Create a new repository on [GitHub](https://github.com/new).
2. Set it to **Private** or **Public**.
3. Push your code:

   ```bash
   git init
   git add .
   git commit -m "Initial Dahab Rental MVP"
   git branch -M main
   git remote add origin YOUR_URL
   git push -u origin main
   ```

## 2. Connect to Vercel

1. Go to [Vercel.com](https://vercel.com) and sign up (Free Hobby plan).
2. Click **"Add New"** -> **"Project"**.
3. Import your GitHub repository.
4. Click **Deploy**.

## 3. Environment Variables (Important)

Once you upgrade from the "Mock" version to the "Real" version, you will add your keys in the Vercel Dashboard:

- `OPENAI_API_KEY`
- `STRIPE_SECRET_KEY`
- `NEXT_PUBLIC_SUPABASE_URL`

## ✅ Your Live Link

Your site will be live at something like: `dahab-rental-seven.vercel.app`. You can share this link with anyone for testing!
