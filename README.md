# 🐱 Kitty Clash

> A cute and lightweight 2D browser fighting game built with Vanilla JavaScript and the HTML5 Canvas API.

**Kitty Clash** is a small interactive fighting game created as a portfolio project to demonstrate practical skills in **JavaScript, game logic, object-oriented programming, collision detection, basic AI behavior, state management, and interactive UI development**.

The project started as a simple canvas experiment and evolved into a functional two-character combat system where the player controls **Mochi**, while **Nube** acts as an AI-controlled opponent.

---

## 🎮 Live Demo

Run the project locally in a browser to play Kitty Clash.

```text
http://127.0.0.1:5501/index.html
```

---

## ✨ Features

### 🐱 Player Character — Mochi

* Move left and right.
* Jump using the keyboard.
* Attack using `X`.
* Face the direction of movement.
* Receive damage and knockback.
* Health tracking.

### 🤖 Enemy AI — Nube

* Automatically follows the player.
* Changes direction depending on Mochi's position.
* Stops when it reaches attack range.
* Automatically attacks Mochi.
* Has independent health and combat state.
* Receives damage and knockback.

### ⚔️ Combat System

* Attack hitboxes.
* Collision detection.
* Damage calculation.
* Knockback mechanics.
* Attack cooldown.
* Prevention of repeated damage from a single attack.
* Bidirectional combat.

### ❤️ Health System

Both characters have independent health values and visual health bars.

```text
MOCHI                              NUBE
████████████████████               ████████████████████
100 HP                             100 HP
```

### 🏆 Game State

The game detects when a character reaches zero health and displays the winner.

A new round can be started without reloading the page.

---

## 🕹️ Controls

| Key     | Action                       |
| ------- | ---------------------------- |
| `←`     | Move left                    |
| `→`     | Move right                   |
| `Space` | Jump                         |
| `X`     | Attack                       |
| `R`     | Restart after the match ends |

---

## 🧠 How It Works

Kitty Clash uses a simple game loop to continuously update the game state and render the current frame.

The main flow is:

```text
Input
  ↓
Player Update
  ↓
Enemy AI Update
  ↓
Attack Processing
  ↓
Collision Detection
  ↓
Damage / Knockback
  ↓
Health Update
  ↓
Rendering
  ↓
Next Frame
```

### Player

The `Player` class is responsible for:

* Position.
* Movement.
* Jump physics.
* Direction.
* Health.
* Attacks.
* Damage.
* Knockback.
* Character rendering.

### Enemy

`Enemy` extends the `Player` class and adds behavior specific to the AI opponent.

This allows the project to reuse common character functionality while adding enemy-specific logic.

For example:

```javascript
export default class Enemy extends Player {
```

This demonstrates the use of **object-oriented programming and inheritance** in JavaScript.

### Collision Detection

The game uses rectangular hitboxes to determine whether an attack has reached an opponent.

Conceptually:

```text
Attack Hitbox
      ↓
Collision Detection
      ↓
Opponent
      ↓
Damage
      ↓
Knockback
```

The system also uses a `hasHit` state to prevent the same attack from repeatedly damaging a character during its active frames.

---

## 🏗️ Project Structure

```text
kitty-clash/
│
├── assets/
│   ├── backgrounds/
│   ├── cats/
│   ├── sounds/
│   └── ui/
│
├── css/
│   └── style.css
│
├── js/
│   ├── engine/
│   │   ├── collision.js
│   │   ├── game.js
│   │   └── input.js
│   │
│   ├── entities/
│   │   ├── attack.js
│   │   ├── enemy.js
│   │   └── player.js
│   │
│   ├── scenes/
│   │   ├── arena.js
│   │   └── menu.js
│   │
│   ├── ui/
│   │   └── healthbar.js
│   │
│   └── main.js
│
├── .gitignore
├── index.html
├── LICENSE
└── README.md
```

The project is organized into separate layers to keep game logic, entities, rendering, scenes, and UI components independent and easier to maintain.

---

## 🛠️ Technologies

* **HTML5**
* **CSS3**
* **JavaScript (ES6+)**
* **HTML5 Canvas API**
* **Git**
* **GitHub**

No game engine or external JavaScript framework is required.

The game was intentionally developed using **Vanilla JavaScript** to demonstrate understanding of the underlying concepts rather than relying on an existing game engine.

---

## 🚀 Running the Project Locally

### 1. Clone the repository

```bash
git clone git@github.com:Galadriel3109/kitty-clash.git
```

### 2. Enter the project directory

```bash
cd kitty-clash
```

### 3. Start a local server

Python can be used to serve the project locally:

```bash
python3 -m http.server 5501
```

### 4. Open the game

Visit:

```text
http://127.0.0.1:5501/index.html
```

---

## 🧪 Development & Debugging

The project was developed incrementally, testing each gameplay system independently before integrating it into the complete game.

During development, several issues were identified and resolved, including:

* Player movement and boundary handling.
* Jump physics.
* Attack hitbox positioning.
* Collision detection.
* Enemy movement.
* Enemy pursuit behavior.
* Knockback direction.
* Attack state management.
* Repeated damage during a single attack.
* Health synchronization.
* Game-over state handling.
* Restart behavior.

This iterative approach helped keep the game logic manageable while progressively adding functionality.

---

## 📐 Design Approach

The project intentionally follows a **simple architecture** rather than introducing unnecessary complexity.

The main design principles are:

* Separation of responsibilities.
* Reusable classes.
* Small independent game systems.
* Minimal dependencies.
* Incremental development.
* Clear state management.
* Reusable combat mechanics.

The goal was not to build a large commercial game, but to create a compact project that demonstrates how an interactive application can be designed, implemented, tested, debugged, and delivered.

---

## 🎯 Portfolio Objectives

Kitty Clash was developed as a portfolio project to demonstrate practical skills beyond traditional data and business applications.

The project highlights experience with:

* JavaScript programming.
* Object-oriented design.
* Event-driven interaction.
* Game state management.
* Basic artificial intelligence.
* Collision detection.
* Physics and movement.
* UI rendering.
* Debugging.
* Git version control.
* Project organization.
* Iterative software development.

It also demonstrates the ability to take an idea from an initial concept to a functional, interactive product.

---

## 🔮 Future Improvements

The current version intentionally focuses on **core gameplay and clean architecture**.

Potential future improvements include:

* ❤️ Enhanced health bar visuals.
* 🏆 Improved victory and defeat screens.
* 🎵 Sound effects and background music.
* ✨ Additional attack and impact effects.
* 🌿 More dynamic background elements.
* 🐱 Animated character sprites.
* 🎨 Additional cat characters.
* 🏟️ Multiple arenas.
* 📱 Improved responsive support.
* 🏅 Score and match statistics.

These improvements are intentionally kept as future iterations so the current version remains lightweight and easy to maintain.

---

## 📚 What I Learned

Building Kitty Clash provided practical experience in designing an interactive application from the ground up.

The project helped reinforce concepts such as:

* Designing reusable JavaScript classes.
* Using inheritance to extend game entities.
* Managing state across multiple objects.
* Implementing simple AI behavior.
* Detecting collisions between entities.
* Handling real-time interactions.
* Debugging browser-based JavaScript applications.
* Structuring a project for maintainability.
* Using Git throughout the development process.

Most importantly, the project reinforced an iterative development approach:

> **Build → Test → Debug → Refactor → Improve**

---

## 👩‍💻 About the Developer

**Frida Gala Juarez V.**

Project Manager & Systems Analyst focused on technology, automation, data, and AI-enabled workflows.

This project is part of my technical portfolio and demonstrates my interest in combining **business understanding, problem solving, software development, and interactive technology**.

---

## 📄 License

This project is available under the terms specified in the included [`LICENSE`](LICENSE) file.
