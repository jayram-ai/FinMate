# FinMate - AI Expense Tracker

FinMate is an AI-based personal finance management application that helps users track expenses, budget, and get intelligent financial advice. Built as a part of the TechXcelerate Hackathon at Anurag University.

Features
- AI Financial Advisor: Offers real-time advice based on income and expenditure.
- Budget & Expense Tracking: Organize and track transactions.
- Income Management: Add and visualize sources of income.
- Interactive Dashboard: User-friendly UI for financial analysis.

Tech Stack
- Frontend: Next.js, React, Tailwind CSS
- Backend: Firebase (Firestore)
- Authentication: Clerk
- AI Integration: OpenAI API (for financial insights)
- Deployment: Vercel

Installation & Setup
```sh
# Clone the repository
git clone https://github.com/jayram-ai/FinMate.git
cd FinMate

# Install dependencies
npm install

# Create a .env.local file and add required API keys
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_key
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_key
OPENAI_API_KEY=your_openai_key

# Run the development server
npm run dev
```

Deployment
To deploy the project on Vercel:
```sh
vercel
```
Follow the CLI instructions to complete the deployment.

Team
- Mohammad Umar Shaik
- Jayram
- Aashritha

Acknowledgments
Built for TechXcelerate Hackathon 2025 at Anurag University

