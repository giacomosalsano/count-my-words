# Count My Words

![Visits](https://komarev.com/ghpvc/?username=giacomosalsano&color=00613D&style=flat&abbreviated=true&base=600&label=visits)

Project developed to learn Next.js and modern web development technologies.

**General Information** | **General Description** | **Design Overview** | **Use Case View** | **Technical Implementation** | **Features and Functionalities** | **User Interaction** | **Final Project**

## 1. General Information

This project was developed with the following tools:

- **Project Name**: Count My Words
- **Version**: 1.0
- **Technologies Used**: Next.js, TypeScript, Tailwind CSS, React, Lucide React
- **Run the Project**: 
  ```bash
  npm run dev
  # or
  yarn dev
  # or
  pnpm dev
  # or
  bun dev
  ```

## 2. General Description

Count My Words is a modern web application that provides real-time text analysis. The application features a clean interface for counting words, characters, sentences, and paragraphs, along with word frequency analysis. It includes a light/dark mode toggle and responsive design for optimal user experience.

### 2.1 Purpose

This project was designed to provide users with a fast, efficient, and privacy-focused tool for text analysis. The application processes text locally in the browser, ensuring user data privacy while offering comprehensive text statistics.

The project also serves to demonstrate modern web development skills such as React components, TypeScript, responsive design, and state management.

### 2.2 Scope

The system includes the following functionalities:

- Real-time text analysis with word, character, sentence, and paragraph counting
- Word frequency analysis showing the most common words
- Light and dark mode toggle for customizable viewing experience
- Responsive design that works on desktop and mobile devices
- Privacy-focused local processing (no data sent to servers)
- Modern UI with smooth transitions and hover effects
- FAQ section with common questions and answers

## 3. Design Overview

The design follows modern web principles with a minimalist approach:

- Clean, centered layout with a prominent text input area
- Green color scheme (#00613D) as the primary brand color
- Smooth transitions and hover effects for interactive elements
- Responsive design that adapts to different screen sizes
- Dark mode support with carefully chosen color contrasts
- Card-based layout for statistics and word frequency display

## 4. Use Case View

### Use Cases:

**Text Analysis:**
- Input: User types or pastes text into the input area
- Output: Real-time display of word count, character count, sentence count, and paragraph count

**Word Frequency Analysis:**
- Input: User enters text with multiple words
- Output: Display of the most frequent words with their count

**Theme Toggle:**
- Input: User clicks the theme toggle button
- Output: Application switches between light and dark themes

**FAQ Navigation:**
- Input: User clicks on FAQ questions
- Output: Accordion-style expansion of answers

## 5. Technical Implementation

Count My Words consists of several key files and components:

### 5.1 Project Structure
```
src/
├── app/
│   ├── globals.css          # Global styles and CSS variables
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page component
├── components/
│   ├── wordCounter.tsx      # Main text analysis component
│   ├── wordsList.tsx        # Word frequency display
│   ├── toggleButton.tsx     # Theme toggle component
│   ├── faqSection.tsx       # FAQ accordion component
│   └── ui/                  # Reusable UI components
└── shared/
    └── utils/
        └── getSystemTheme.tsx # System theme detection
```

### 5.2 CSS Architecture
- Custom CSS variables for consistent theming
- Tailwind CSS for utility-first styling
- Responsive design with mobile-first approach
- Dark mode support with CSS custom properties

### 5.3 React Components
- Functional components with TypeScript
- Custom hooks for theme management
- Responsive design with Tailwind CSS
- Accessibility features with ARIA labels

## 6. Features and Functionalities

**Real-time Text Analysis:**
- Word counting with accurate detection
- Character counting (with and without spaces)
- Sentence counting based on punctuation
- Paragraph counting based on line breaks

**Word Frequency Analysis:**
- Identifies most common words
- Filters out common stop words
- Displays word count in descending order

**Theme System:**
- Light and dark mode support
- System theme detection
- Persistent theme preference storage

**Responsive Design:**
- Mobile-first approach
- Adaptive layouts for different screen sizes
- Touch-friendly interface elements

**Privacy Features:**
- Local text processing
- No data transmission to external servers
- Client-side only functionality

## 7. User Interaction

Users can:
- Type or paste text into the input area for real-time analysis
- View comprehensive statistics including word count, character count, and more
- See the most frequent words in their text
- Toggle between light and dark themes using the theme button
- Expand/collapse FAQ sections for information
- Use the application on any device with responsive design

## 8. Deployment and Usage

To use Count My Words, follow these steps:

1. Clone the repository
2. Install dependencies: `npm install`
3. Run the development server: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in your browser
5. Start typing or paste text to see real-time analysis
6. Use the theme toggle to switch between light and dark modes

## 9. Final Project

Access the final project online at: [Count My Words](https://count-my-words.vercel.app)

---

**Technologies Used:**
- [Next.js](https://nextjs.org) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Lucide React](https://lucide.dev/) - Icon library
