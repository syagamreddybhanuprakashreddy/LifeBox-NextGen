# LifeBox NextGen - Design System

## 1. Design Philosophy
**"Enterprise Maturity meets Modern Innovation"**
- **Clean & Structured**: Heavy use of whitespace, grid alignment, and separation of concerns.
- **Professional Palette**: Dark primary colors for authority, clean white backgrounds for readability, and subtle accents for guidance.
- **No Hype**: Avoid marketing fluff. Use direct, confident language.
- **Visuals**: Abstract, geometric, technical illustrations (dashboards, nodes, connections). No stock photos of people shaking hands.

## 2. Color Palette
### Primary Colors
- **Primary (Dark Purple/Black)**: `hsl(266, 4%, 20.8%)` - Used for Headings, key actions, footer.
- **Primary Foreground (Off-White)**: `hsl(248, 0.3%, 98.4%)` - Used for text on primary backgrounds.

### Secondary Colors
- **Secondary (Light Grey)**: `hsl(248, 0.7%, 96.8%)` - Used for section backgrounds, cards.
- **Secondary Foreground**: `hsl(266, 4%, 20.8%)`

### Accent Colors
- **Accent (Subtle Light)**: `hsl(248, 0.7%, 96.8%)` - Used for hover states, subtle highlights.
- **Accent Foreground**: `hsl(266, 4%, 20.8%)`

### Utility Colors
- **Muted Text**: `hsl(257, 4.6%, 55.4%)` - Used for descriptions, secondary text.
- **Border**: `hsl(256, 1.3%, 92.9%)` - Subtle dividers.
- **Destructive**: `hsl(27, 24.5%, 57.7%)` - Error states (muted red/orange).

## 3. Typography
**Font Family**: `Inter` (Sans-serif) for all text to ensure readability on screens.
- **Headings**: Bold (700) or ExtraBold (800). Tight tracking (`-0.02em`).
- **Body**: Regular (400) or Medium (500). Relaxed line height (`1.6`).
- **Monospace**: Used for code snippets or technical terms.

### Type Scale
- **H1**: 4xl (36px) to 6xl (60px)
- **H2**: 3xl (30px) to 4xl (36px)
- **H3**: xl (20px) to 2xl (24px)
- **Body**: base (16px) or lg (18px)
- **Small**: sm (14px)

## 4. Spacing System
Based on 4px grid (Tailwind defaults).
- **Section Padding**: `py-20` (80px) to `py-28` (112px)
- **Component Gap**: `gap-6` (24px) to `gap-12` (48px)
- **Container Padding**: `px-4` (16px) to `px-8` (32px)

## 5. UI Components
### Buttons
- **Primary**: Solid background, white text. Rounded corners (`rounded-md`).
- **Secondary**: Light background, dark text.
- **Outline**: Border only, transparent background.

### Cards
- **Feature Card**: White background, light shadow (`shadow-sm`), subtle border.
- **Service Card**: Transparent or secondary background, icon focused.

### Icons
- **Library**: Lucide React.
- **Style**: Stroke width 2px, consistent coloring (Accent or Foreground).

## 6. Layout Grid
- **Container**: Centered, max-width `1400px` (2xl).
- **Columns**: 
  - Mobile: 1 column
  - Tablet: 2 columns
  - Desktop: 3 or 4 columns
- **Gap**: Consistent 24px-32px gaps.

## 7. Motion & Interaction
- **Hover Effects**: Subtle lift (`-translate-y-1`), shadow increase (`shadow-md`).
- **Transitions**: `duration-200 ease-in-out` for all interactive elements.
- **No Auto-play**: Avoid carousels that move automatically. User control is paramount.
