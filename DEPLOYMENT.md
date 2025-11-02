# Deployment Guide

## Vercel Deployment

This project is optimized for deployment on Vercel. Follow these steps:

### 1. Prerequisites
- GitHub repository with your code
- Vercel account
- Supabase project set up
- Resend account for email functionality
- OpenAI API key for AI chat

### 2. Environment Variables

Set these environment variables in your Vercel dashboard:

```
VITE_SUPABASE_PROJECT_ID=ypernrnhcijvwaxyikvo
VITE_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlwZXJucm5oY2lqdndheHlpa3ZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjExNjgyMjEsImV4cCI6MjA3Njc0NDIyMX0.aeEYsrtHr9a12WRsuOP9W8u2vIhJ1bINPu_dm_t7oZ4
VITE_SUPABASE_URL=https://ypernrnhcijvwaxyikvo.supabase.co
RESEND_API_KEY=re_Ci9iSbng_N19z1aftf4vJW56kpRhCS4du
OPENAI_API_KEY=your_openai_api_key_here
```

### 3. Supabase Functions

Make sure your Supabase functions are deployed:

```bash
# Install Supabase CLI
npm install -g supabase

# Login to Supabase
supabase login

# Link to your project
supabase link --project-ref your_project_id

# Deploy functions
supabase functions deploy
```

### 4. Deploy to Vercel

1. Connect your GitHub repository to Vercel
2. Import the project
3. Add environment variables in Vercel dashboard
4. Deploy

### 5. Post-Deployment

- Test contact form functionality
- Test AI chat feature
- Verify all links and social media connections work
- Check mobile responsiveness

## Email Configuration

The contact form sends emails to: **Ofbyteind@gmail.com**

Make sure your Resend account is configured with the correct domain and API key.

## Troubleshooting

- If builds fail, check that all environment variables are set
- For Supabase function errors, check the function logs in Supabase dashboard
- For email issues, verify Resend API key and domain configuration