import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, // Ensure your .env file has this key
  dangerouslyAllowBrowser: true, // Allows browser usage
});

const getFinancialAdvice = async (totalBudget, totalIncome, totalSpend) => {
  try {
    const userPrompt = `
    Based on the following financial data:
    - Total Budget: ${totalBudget} USD
    - Expenses: ${totalSpend} USD 
    - Incomes: ${totalIncome} USD
    provide detailed financial advice in 2 sentences to help the user manage their finances.
    `;

    const chatCompletion = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [{ role: "user", content: userPrompt }],
    });

    return chatCompletion.choices[0].message.content;
  } catch (error) {
    console.error("Error fetching financial advice:", error);
    return "Unable to fetch financial advice. Please try again later.";
  }
};

export default getFinancialAdvice;
