🕹️ Aim Dash — One-Page Reflex Game

Aim Dash is a fun and fast-paced browser game designed to test your reaction speed and precision.
Click the glowing target as quickly and accurately as possible within 30 seconds.
Your score, accuracy, and average reaction time are all tracked — can you beat your best?

🎯 Live Demo: 👉 Play on Netlify

(Replace with your actual deployed link)

🚀 Features

⚡ Smooth and responsive gameplay

🧠 Four difficulty levels: Easy, Normal, Hard, and Insane

⏱️ Live HUD updates: Time, Score, Accuracy, Reaction Time

🏆 Local best score saving (via LocalStorage)

📱 Fully responsive — works on mobile, tablet, and desktop

💫 Elegant neon UI with gradient effects

🧩 How to Play

Open the game in your browser or click the Netlify live link.

Choose your difficulty from the dropdown.

Hit Start or click “Start Game” on the overlay.

A glowing target will appear in the arena — click it as fast as you can.

Each hit scores 1 point. Missing reduces accuracy.

The game ends after 30 seconds — view your summary and play again!

⚙️ Project Structure
aim-dash/
│
├── index.html      # Main HTML page
├── style.css       # Game styling
└── script.js       # Core game logic


All assets are lightweight and contained within the same directory.
No external dependencies or frameworks required — everything runs in plain HTML, CSS, and JavaScript.

🧠 Technical Highlights

Uses JavaScript’s performance.now() for high-precision reaction tracking

Stores the best score locally using localStorage

Responsive layout with CSS Grid and Flexbox

Dynamic target placement calculated via getBoundingClientRect()

Clean transitions, shadows, and gradients for a futuristic look

🖥️ Local Development

To run the game locally:

# Clone the repository
git clone https://github.com/yourusername/aim-dash.git
cd aim-dash

# Open the project in VS Code or any editor
# Then open index.html in your browser


Or simply drag index.html into your browser window — no setup required.

🧑‍🎨 Credits

Created with ❤️ by Ahmed Shahriar
UI & Logic: Custom HTML, CSS, and JavaScript
Fonts: System UI fonts
Deployed with: Netlify

📜 License

This project is licensed under the MIT License — free to use, modify, and share.
