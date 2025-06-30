# UsheGuard - AI-Powered Charity Advisor

A modern donation platform that combines blockchain technology (Algorand), AI assistance, and secure authentication to create a transparent and trustworthy charitable giving experience.

## 🚀 Features

- **AI Chat Assistant**: Get intelligent guidance on charitable giving
- **Blockchain Donations**: Secure, transparent donations using Algorand
- **Certificate System**: Earn blockchain-verified certificates for contributions
- **Modern UI**: Beautiful, responsive design with smooth animations
- **Secure Authentication**: Powered by Supabase Auth

## 🛠️ Tech Stack

- **Frontend**: React 19 + Vite
- **Styling**: Tailwind CSS
- **Blockchain**: Algorand (algosdk)
- **Backend**: Supabase (Auth + Database + Edge Functions)
- **Routing**: React Router DOM
- **Icons**: Lucide React

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd usheguard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Fill in your Supabase credentials:
   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

## 🔧 Configuration

### Supabase Setup

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Add them to your `.env` file

### Authentication

The app uses Supabase Auth with email/password authentication. Users can:
- Sign up with email and password
- Sign in to existing accounts
- Automatic session management

## 📱 Pages

- **Home**: Landing page with feature overview
- **Chat**: AI assistant for charitable giving guidance
- **Donate**: Make secure blockchain donations (demo mode)
- **Certificate**: View earned certificates and achievements
- **Profile**: User account information and statistics
- **Bonus**: Fun crypto-related content

## 🎨 Design Features

- **Glassmorphism**: Modern glass-like UI elements
- **Smooth Animations**: CSS animations and transitions
- **Responsive Design**: Works on all device sizes
- **Dark/Light Themes**: Consistent color scheme
- **Accessibility**: Proper ARIA labels and keyboard navigation

## 🔒 Security

- Secure authentication with Supabase
- Environment variable protection
- Input validation and sanitization
- CORS protection for API endpoints

## 🚀 Deployment

The project is configured for easy deployment on platforms like:
- Netlify
- Vercel
- Supabase hosting

Build the project:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

## 🆘 Support

For support, please open an issue on GitHub or contact the development team.