# TECH MANTRIX Design System (AI-Native Blue)

## Core Philosophy
- **Style:** AI-Native UI (Ambient, Intelligent, Responsive)
- **Theme:** "Department of Defense meets Apple" – Professional Blue/Black, clean, authoritative but high-tech.
- **Interaction:** Smooth, biological motion (300ms ease-out), Pulse effects, Streaming text.

## 1. Colors
| Token | Value | usage |
|-------|-------|-------|
| `primary` | `#1E40AF` (Blue-800) | Main actions, branding |
| `primary-light` | `#3B82F6` (Blue-500) | Gradients, hover states |
| `accent` | `#06B6D4` (Cyan-500) | AI indicators, active states |
| `cta` | `#06B6D4` (Cyan-500) | High-priority buttons |
| `background` | `#000000` (Black) | App background |
| `surface` | `rgba(255,255,255,0.03)` | Cards / Glass |

## 2. Typography
- **Headings:** `Poppins` (Bold, Tight tracking)
- **Body:** `Open Sans` (Readable, Clean)
- **Code:** `JetBrains Mono` (Technical data)

## 3. UI Patterns (Pro Max)
- **Glassmorphism:** `backdrop-blur-xl`, `border-white/10`
- **Focus States:** Visible 2px offset ring (`ring-2 ring-offset-2 ring-primary`)
- **Hover:** Transform `scale-105`, `border-primary/50` transition `duration-300`

## 4. Animation Guidelines
- **Micro-interactions:** 300ms `ease-out`
- **Entrances:** Staggered fade-up (GSAP)
- **AI Feedback:** Pulse animation on AI agents/icons

## 5. Accessibility (WCAG AA)
- Minimum contrast 4.5:1 for text.
- Focus indicators on ALL interactive elements.
- `prefers-reduced-motion` respected.
