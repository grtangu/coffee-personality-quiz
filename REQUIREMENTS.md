# Coffee Personality Quiz — Requirements
*Spec for the Basecamp Coffee "What's Your Coffee Personality?" quiz*

---

## Personality → Coffee Pairings (3 results)

| Personality | Coffee | Tagline | Image |
|------------|--------|---------|-------|
| **Bold Adventurer** | Double Espresso | "You live for intensity" | `public/espresso.jpg` |
| **Zen Minimalist** | Black Coffee, Single Origin | "Simple. Clean. Perfect." | `public/pour-over.jpg` |
| **Practical Pragmatist** | Large Drip, Whatever's Fresh | "Just make it work" | `public/drip-coffee.jpg` |

---

## Result Display

**Option B — Show all percentages**

At the end of the quiz, show all 3 results with percentage breakdowns:
- "You're 60% Bold Adventurer, 30% Zen Minimalist, 10% Practical Pragmatist"
- Display all 3 coffee recommendations with their images
- Highlight the top result as the primary recommendation

---

## Visual Style

**Style 1 — Playful & Colorful**
- Bright gradient background (pink → yellow → teal)
- White card with rounded corners (border-radius: 24px)
- Bold, heavy typography
- Colorful accent badges
- Rounded option buttons with hover lift effect
- Progress dots at top of card

---

## Icons & Images

- **Icons:** Yes — emoji icons next to each answer option
- **Images:** Yes — one photo per coffee result (downloaded to `public/`)
  - `espresso.jpg` → Bold Adventurer
  - `pour-over.jpg` → Zen Minimalist
  - `drip-coffee.jpg` → Practical Pragmatist

---

## Quiz Questions (5 questions, lifestyle & preferences style)

### Q1: Your ideal Saturday morning looks like...
- 🏔️ Up at dawn, pack a bag, go somewhere new → **Bold Adventurer**
- 🧘 Slow morning, one perfect cup, total silence → **Zen Minimalist**
- ✅ Productive — errands done, inbox cleared, coffee in hand → **Practical Pragmatist**

### Q2: How do you order at a restaurant?
- 🌶️ Whatever sounds most interesting or challenging → **Bold Adventurer**
- 📖 Read the whole menu, pick the dish done best here → **Zen Minimalist**
- 🍽️ Something reliable — you know what you like → **Practical Pragmatist**

### Q3: Your travel style is...
- 🗺️ Book a flight, figure out the rest when you land → **Bold Adventurer**
- 🏡 One destination, deeply explored → **Zen Minimalist**
- 📋 Itinerary planned, hotels booked, no surprises → **Practical Pragmatist**

### Q4: Your workspace looks like...
- 🌍 Wherever you are — coffee shop, airport, park bench → **Bold Adventurer**
- 🪴 Minimal, clean, everything in its place → **Zen Minimalist**
- 🖥️ Functional — what matters is getting the work done → **Practical Pragmatist**

### Q5: When trying something new, you...
- 🚀 Dive in headfirst — figure it out as you go → **Bold Adventurer**
- 🔬 Research deeply first, then commit fully → **Zen Minimalist**
- 📝 Look for the most reliable, proven approach → **Practical Pragmatist**

---

## Scoring Logic

- Each answer maps to one personality
- Tally answers at the end
- Display all 3 personalities with percentage scores
- Primary result = highest percentage
- Show coffee recommendation + image for all 3 results
