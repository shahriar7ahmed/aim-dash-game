# 🕹️ Aim Dash — One-Page Reflex Game

**Aim Dash** is a fun and fast-paced browser game designed to test your **reaction speed and precision**.  
Click the glowing target as quickly and accurately as possible within **30 seconds**.  
Your score, accuracy, and average reaction time are all tracked — can you beat your best?

🎯 **Live Demo:** https://aimdash.netlify.app/


---

## 🚀 Features

- ⚡ **Smooth and responsive gameplay**
- 🧠 **Four difficulty levels:** Easy, Normal, Hard, and Insane  
- ⏱️ **Live HUD updates:** Time, Score, Accuracy, Reaction Time  
- 🏆 **Local best score saving (via LocalStorage)**
- 📱 **Fully responsive** — works on mobile, tablet, and desktop  
- 💫 **Elegant neon UI with gradient effects**

---

## 🧩 How to Play

1. Open the game in your browser or click the Netlify live link.  
2. Choose your **difficulty** from the dropdown.  
3. Hit **Start** or click “Start Game” on the overlay.  
4. A glowing target will appear in the arena — **click it as fast as you can**.  
5. Each hit scores 1 point. Missing reduces accuracy.  
6. The game ends after **30 seconds** — view your summary and play again!

---

## ⚙️ Project Structure
aim-dash/
│
├── index.html # Main HTML page
├── style.css # Game styling
└── script.js # Core game logic
All assets are lightweight and contained within the same directory.  
No external dependencies or frameworks required — everything runs in plain HTML, CSS, and JavaScript.

---

## 🧠 Technical Highlights

- Uses **JavaScript’s `performance.now()`** for high-precision reaction tracking  
- Stores the **best score locally** using `localStorage`  
- Responsive layout with **CSS Grid and Flexbox**  
- Dynamic target placement calculated via `getBoundingClientRect()`  
- Clean transitions, shadows, and gradients for a futuristic look  

---

## 🖥️ Local Development

To run the game locally:

```bash
# Clone the repository
git clone https://github.com/yourusername/aim-dash.git
cd aim-dash

# Open the project in VS Code or any editor
# Then open index.html in your browser



---

Would you like me to add:
- ✅ a **screenshot preview section** (with image placeholder), and  
- ✅ **badges** (like “Built with JavaScript”, “Deployed on Netlify”, etc.)  

for a more **GitHub-ready** look?
