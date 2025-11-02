# 🚀 Quick Deploy to Vercel

## Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

## Step 2: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your GitHub repository
4. Add these environment variables:

```
VITE_SUPABASE_PROJECT_ID=ypernrnhcijvwaxyikvo
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZXJucm5oY2lqdndheHlpa3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjgyMjEsImV4cCI6MjA3Njc0NDIyMX0.aeEYsrtHr9a12WRsuOP9W8u2vIhJ1bINPu_dm_t7oZ4
VITE_SUPABASE_URL=https://ypernrnhcijvwaxyikvo.supabase.co
RESEND_API_KEY=re_Ci9iSbng_N19z1aftf4vJW56kpRhCS4du
```

## Step 3: Deploy Supabase Functions
```bash
# Install Supabase CLI (if not installed)
npm install -g supabase

# Login
supabase login

# Link project
supabase link --project-ref ypernrnhcijvwaxyikvo

# Deploy functions
supabase functions deploy send-contact-email
supabase functions deploy ai-chat

# Set secrets
supabase secrets set RESEND_API_KEY=re_Ci9iSbng_N19z1aftf4vJW56kpRhCS4du
supabase secrets set OPENAI_API_KEY=your_openai_key_here
```

## Step 4: Test Everything
- ✅ Contact form → Check Ofbyteind@gmail.com
- ✅ WhatsApp button → +91 8101862947
- ✅ AI Chatbot (need OpenAI key)
- ✅ All links working

## 🎉 Your website is LIVE!

**Features Working:**
- Contact form sends to Ofbyteind@gmail.com
- WhatsApp integration
- Professional design
- Mobile responsive
- Fast loading

**Note:** AI Chatbot needs OpenAI API key to work fully.