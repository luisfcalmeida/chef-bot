# Chef Bot

**Chef Bot** is a recipe generator that helps you create meals using the ingredients you have at home. Simply enter a few ingredients, and the bot will suggest creative recipes for you!

## Features

- Input at least 4 ingredients, and Chef Bot will generate recipe ideas.
- Uses AI-powered suggestions to recommend meals.
- API key securely handled with environment variables.

## Tech Stack

- **Frontend:** React
- **API:** Spoonacular API

## Installation & Setup

1.  **Clone the repository:**
    git clone https://github.com/luisfcalmeida/chef-bot.git
    cd chef-bot

2.  **Install dependencies:**
    npm install

3.  **Set up environment variables:**
    Create a .env.local file in the root directory.
    Add your API credentials:

        VITE_APP_ID=your_app_id
        VITE_API_KEY=your_api_key
        VITE_USER_ID=your_user_id

4.  **Run the development server:**
    npm run dev

5.  **Open in browser:**
    http://localhost:5173

## Contributing

Contributions are welcome! If you find a bug or have a suggestion:
Fork the repo
Create a new branch (feature/new-feature)
Submit a pull request

## 📜 License

This project is licensed under the MIT License.
