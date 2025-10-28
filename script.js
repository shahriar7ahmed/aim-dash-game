// DOM elements
const arena = document.getElementById('arena');
const target = document.getElementById('target');
const overlay = document.getElementById('overlay');
const overlayStart = document.getElementById('overlayStart');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');
const difficultySel = document.getElementById('difficulty');
const scoreEl = document.getElementById('score');
const bestEl = document.getElementById('best');
const timeEl = document.getElementById('time');
const accuracyEl = document.getElementById('accuracy');
const avgEl = document.getElementById('avg');

// Game state
let playing = false;
let score = 0;
let best = parseInt(localStorage.getItem('aimdash_best') || '0', 10);
let clicks = 0;
let hits = 0;
let startTime = 0;
let lastMoveTime = 0;
let reactionTimes = [];
let timerId = null;
let moveId = null;
let remaining = 30000;

bestEl.textContent = best;

const DIFF = {
  easy:   { moveEvery: 900, jitter: 0.85, size: 72 },
  normal: { moveEvery: 700, jitter: 1.00, size: 64 },
  hard:   { moveEvery: 520, jitter: 1.15, size: 58 },
  insane: { moveEvery: 380, jitter: 1.35, size: 52 },
};

function clamp(n, min, max) { return Math.max(min, Math.min(max, n)); }

function formatTime(ms) {
  const s = (ms / 1000).toFixed(1);
  return `${s}s`;
}

function placeTarget() {
  const rect = arena.getBoundingClientRect();
  const size = target.offsetWidth;
  const pad = 6;

  const x = Math.random() * (rect.width - size - pad * 2);
  const y = Math.random() * (rect.height - size - pad * 2);

  target.style.left = `${clamp(x + pad, 0, rect.width - size)}px`;
  target.style.top  = `${clamp(y + pad, 0, rect.height - size)}px`;
  lastMoveTime = performance.now();
}

function moveTargetLoop() {
  if (!playing) return;
  const diff = DIFF[difficultySel.value];
  placeTarget();
  clearTimeout(moveId);
  moveId = setTimeout(moveTargetLoop, diff.moveEvery);
}

function updateHUD() {
  scoreEl.textContent = score;
  const acc = clicks === 0 ? 100 : Math.round((hits / clicks) * 100);
  accuracyEl.textContent = `${acc}%`;

  if (reactionTimes.length === 0) {
    avgEl.textContent = '—';
  } else {
    const avg = reactionTimes.reduce((a,b)=>a+b,0) / reactionTimes.length;
    avgEl.textContent = `${Math.round(avg)} ms`;
  }
}

function startGame() {
  if (playing) return;
  playing = true;

  score = 0; clicks = 0; hits = 0; reactionTimes = [];
  remaining = 30000;
  startTime = performance.now();

  const diff = DIFF[difficultySel.value];
  target.style.width = diff.size + 'px';
  target.style.height = diff.size + 'px';

  overlay.style.display = 'none';
  target.style.display = 'grid';
  placeTarget();
  moveTargetLoop();

  clearInterval(timerId);
  timerId = setInterval(() => {
    const now = performance.now();
    remaining = clamp(30000 - (now - startTime), 0, 30000);
    timeEl.textContent = formatTime(remaining);
    if (remaining <= 0) endGame();
  }, 60);

  updateHUD();
}

function endGame() {
  playing = false;
  clearInterval(timerId);
  clearTimeout(moveId);
  target.style.display = 'none';

  if (score > best) {
    best = score;
    localStorage.setItem('aimdash_best', String(best));
    bestEl.textContent = best;
  }

  const acc = clicks === 0 ? 100 : Math.round((hits / clicks) * 100);
  const avg = reactionTimes.length
    ? Math.round(reactionTimes.reduce((a,b)=>a+b,0)/reactionTimes.length) + ' ms'
    : '—';

  overlay.innerHTML = `
    <h2>Time’s up!</h2>
    <p>Score: <strong>${score}</strong> • Accuracy: <strong>${acc}%</strong> • Avg. reaction: <strong>${avg}</strong></p>
    <button id="overlayRestart" class="primary">Play again</button>
  `;
  overlay.style.display = 'block';
  document.getElementById('overlayRestart').addEventListener('click', startGame, { once: true });
}

arena.addEventListener('click', (e) => {
  if (!playing) return;
  clicks++;
  if (e.target === target || target.contains(e.target)) {
    hits++;
    score++;
    const rt = performance.now() - lastMoveTime;
    reactionTimes.push(rt);
    updateHUD();
    placeTarget();
  } else {
    arena.style.boxShadow = 'inset 0 0 0 2px rgba(248,113,113,0.25)';
    setTimeout(() => (arena.style.boxShadow = ''), 100);
    updateHUD();
  }
});

function resetGame() {
  playing = false;
  clearInterval(timerId);
  clearTimeout(moveId);
  score = 0; clicks = 0; hits = 0; reactionTimes = [];
  remaining = 30000;
  timeEl.textContent = '30.0s';
  scoreEl.textContent = '0';
  accuracyEl.textContent = '100%';
  avgEl.textContent = '—';
  target.style.display = 'none';
  overlay.innerHTML = `
    <h2>Ready to dash?</h2>
    <p>Choose a difficulty, hit Start, and chase the glowing target. Miss less, click faster.</p>
    <button id="overlayStart" class="primary">Start game</button>
  `;
  overlay.style.display = 'block';
  document.getElementById('overlayStart').addEventListener('click', startGame, { once: true });
}

startBtn.addEventListener('click', startGame);
resetBtn.addEventListener('click', resetGame);
overlayStart.addEventListener('click', startGame);
window.addEventListener('resize', () => { if (playing) placeTarget(); });
