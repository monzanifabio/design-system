# Design Guidelines

## 1. Color Palette

- **Primary Colors:**
  - Purple: `var(--purple-600)`
  - Black: `var(--black)`
  - Gray: `var(--gray-100)`, `var(--gray-200)`, `var(--gray-600)`
  - Green: `var(--green-600)`

- **Usage:**
  - Use `var(--purple-600)` for interactive elements and highlights.
  - Use `var(--black)` for primary text.
  - Use `var(--gray-100)` and `var(--gray-200)` for backgrounds and borders.
  - Use `var(--gray-600)` for secondary text.
  - Use `var(--green-600)` for success or active status indicators.

## 2. Typography

- **Font Sizes:**
  - Headings: 24px (main), 20px (section), 18px (subsection)
  - Body: 16px, 14px for secondary info

- **Font Weights:**
  - 600: Headings, labels, important info
  - 500: Secondary info
  - 400: Regular text

## 3. Spacing

- **Padding:**
  - Use multiples of 8px for padding and margins.
  - Card padding: 16px
  - Section gap: 16px

- **Gaps:**
  - Use `gap: 8px` or `gap: 16px` for spacing between elements in flex layouts.

## 4. Components

- **Card:**
  - Use for grouping related content.
  - Rounded corners, subtle border, and shadow if needed.

- **Button:**
  - Use `variant="outline"` for secondary actions.
  - Use icons where appropriate.

- **Tag:**
  - Use for status indicators.
  - Prefer `style="Light"` and `colour="Green"` for active statuses.

- **Tab:**
  - Use icons and clear labels.
  - Indicate selected state visually.

- **Select:**
  - Use for filtering and selection controls.
  - Ensure clear labels and accessible options.

- **Icon:**
  - Use consistent icon set.
  - Align icons with text and controls.

## 5. Layout

- **Columns:**
  - Use a two-column layout for main pages: fixed-width left column, flexible right column.
  - Maintain consistent alignment and spacing.

- **Responsiveness:**
  - Ensure layouts adapt gracefully to different screen sizes.
  - Use max-widths and auto margins for centering content.

## 6. Accessibility

- Ensure sufficient color contrast.
- Use semantic HTML elements where possible.
- Provide clear focus states for interactive elements.
- Use descriptive labels and alt text for icons.

## 7. Naming Conventions

- Use PascalCase for component names.
- Use camelCase for props and variables.
- Use clear, descriptive names for all UI elements.

---

Adhering to these guidelines will help maintain a consistent and professional user experience across the project.
