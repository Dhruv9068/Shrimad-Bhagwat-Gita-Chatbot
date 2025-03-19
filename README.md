## Shrimad Bhagavad Gita Chatbot – Introduction
The Shrimad Bhagavad Gita Chatbot is an interactive and immersive application that brings the teachings of the Bhagavad Gita to life using modern web technologies. This chatbot is designed to provide users with wisdom and guidance from the Bhagavad Gita through prewritten responses while also offering a unique 3D experience.


## Features

- **Interactive 3D Book**: Explore a beautifully rendered 3D visualization of the Bhagavad Gita with realistic page-turning effects
- **2D Book View**: Read the Gita's verses in a clean, accessible format with Sanskrit text, transliteration, and explanations
- **Intelligent Chatbot**: Ask questions about the Gita's teachings and receive insightful responses
- **Sacred Audio Player**: Listen to Om chanting and other sacred mantras while exploring the text
- **Suggested Questions**: Get inspiration for what to ask the chatbot
- **Responsive Design**: Optimized for both desktop and mobile devices
- **Dark Mode**: Easy on the eyes with a beautiful amber-themed dark interface
- **Training Guide**: Information on how to enhance the chatbot with all 7000 verses


## Installation

1. Clone the repository:

```shellscript
git clone https://github.com/yourusername/bhagavad-gita-chatbot.git
cd bhagavad-gita-chatbot
```


2. Install dependencies:

```shellscript
npm install
```


3. Run the development server:

```shellscript
npm run dev
```


4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.


## Usage

### 3D Book View

- The application opens with a 3D visualization of the Bhagavad Gita
- Click on the book or the "Open Book" button to view its contents
- Navigate through chapters using the controls provided


### 2D Book View

- Access a more readable format of the Gita's content
- Navigate between chapters using the navigation buttons
- Return to the 3D view using the "Back to 3D View" button


### Chatbot

- Ask questions about the Bhagavad Gita's teachings
- Use suggested questions for inspiration
- The chatbot provides responses based on the Gita's wisdom
- Click on suggested questions to automatically send them to the chatbot


### Audio Player

- Play sacred mantras and chants while exploring the Gita
- Control volume and track selection
- Visual audio waveform display enhances the experience


## Project Structure

```plaintext
bhagavad-gita-chatbot/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── audio-player.tsx
│   ├── book-viewer-2d.tsx
│   ├── chapter-content.tsx
│   ├── chat-interface.tsx
│   ├── enhanced-book.tsx
│   ├── page-turn-effect.tsx
│   ├── simplified-book.tsx
│   ├── suggested-questions.tsx
│   ├── training-info.tsx
│   ├── welcome-modal.tsx
│   └── ui/
│       ├── accordion.tsx
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── sheet.tsx
│       ├── slider.tsx
│       ├── tabs.tsx
│       ├── tooltip.tsx
│       └── ... (other UI components)
├── lib/
│   └── utils.ts
├── public/
│   └── ... (static assets)
├── next.config.js
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Technologies Used

- **Frontend Framework**: Next.js 14 with React 18
- **3D Visualization**: Three.js with React Three Fiber and Drei
- **Styling**: Tailwind CSS with custom theme
- **UI Components**: Custom components built with Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect, useRef)
- **Animations**: React Spring for 3D animations
- **Typography**: Inter font from Google Fonts


## Recommended System Requirements

- **Browser**: Latest versions of Chrome, Firefox, Safari, or Edge
- **Hardware**: For optimal 3D performance, a device with dedicated graphics is recommended
- **Internet**: Stable connection for loading assets and audio files


## Contributing

Contributions are welcome! If you'd like to enhance the application:

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request


## Future Enhancements

- Integration with a language model for more sophisticated chatbot responses
- Additional languages and translations
- More detailed verse explanations and commentaries
- Community features for discussions and shared insights
- Mobile app versions for iOS and Android


## Credits

- **Bhagavad Gita Text**: Traditional Sanskrit verses with translations
- **3D Book Concept**: Inspired by digital sacred text presentations
- **Audio**: Traditional mantras and chants
- **Cover Art**: Traditional depictions of Krishna and Arjuna


Created with ❤️ and reverence for the timeless wisdom of the Bhagavad Gita.
