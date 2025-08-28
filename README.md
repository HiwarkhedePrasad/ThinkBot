# Thinkbot Chatbot

A modern, real-time chatbot interface built with React and Socket.IO, featuring a sleek dark theme and mobile-optimized design.

## 🚀 Features

- **Real-time messaging** with Socket.IO
- **Streaming responses** with live message chunks
- **Mobile-first responsive design**
- **Hidden scrollbars** for clean aesthetics
- **Smooth animations** and transitions
- **Dark theme** optimized for extended use
- **Touch-friendly** interface
- **Auto-scroll** to latest messages
- **Typing indicators** for bot responses
- **Enter key support** for message sending

## 🎨 Design Highlights

- **Modern UI/UX** with rounded corners and shadows
- **Invisible scrollbar** for seamless scrolling
- **Fixed input area** that stays at bottom
- **Responsive avatars** and text sizing
- **Hover effects** and micro-interactions
- **Professional color scheme** with proper contrast

## 🛠️ Technology Stack

- **React 18+** with Hooks
- **Socket.IO Client** for real-time communication
- **Tailwind CSS** for responsive styling
- **Socket.IO Server** (backend required)

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd thinkbot-chatbot
```

2. Install dependencies:
```bash
npm install
```

3. Install required packages:
```bash
npm install react socket.io-client
```

## 🚦 Usage

### Development

Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Production Build

Create a production build:
```bash
npm run build
```

## 🔧 Configuration

### Backend Setup

The chatbot connects to a Socket.IO server. Update the server URL in the component:

```javascript
const socket = io("https://thinkbot-backend.onrender.com");
```

Replace with your backend server URL.

### Socket Events

The application handles these Socket.IO events:

**Incoming Events:**
- `bot_message_chunk` - Receives streaming message chunks from bot
- `bot_message_done` - Signals completion of bot message

**Outgoing Events:**
- `user_message` - Sends user messages to server

## 📱 Mobile Optimization

The interface is fully optimized for mobile devices:

- **Touch-friendly buttons** and input areas
- **Responsive spacing** and typography
- **Mobile keyboard handling** with fixed input position
- **Adaptive avatar sizes** for different screen sizes
- **Horizontal padding** adjustments for small screens

## 🎯 Component Structure

```
Chatbot/
├── useState hooks for messages, typing state, input
├── useEffect for Socket.IO event listeners
├── useRef for scroll management
├── Header section
├── Messages container with hidden scrollbar
├── Fixed input area at bottom
└── Smooth animations and transitions
```

## 🚀 Key Features Explained

### Real-time Streaming
Messages are received in chunks and displayed as they arrive, creating a natural conversation flow.

### Invisible Scrollbar
Custom CSS ensures scrollbars are hidden across all browsers while maintaining functionality.

### Auto-scroll
Automatically scrolls to the latest message when new content arrives.

### Responsive Design
Adapts seamlessly from mobile (320px) to desktop (1920px+) screens.

## 🎨 Customization

### Colors
Modify the color scheme by updating Tailwind classes:
- Background: `bg-[#1f1f1f]`, `bg-[#2a2a2a]`
- Accents: `bg-blue-500`, `bg-green-500`
- Text: `text-white`, `text-gray-400`

### Layout
Adjust spacing and sizing with Tailwind utilities:
- Container: `max-w-3xl`, `max-w-4xl`
- Padding: `px-3 sm:px-4`, `py-3 sm:py-4`
- Avatar sizes: `w-7 h-7 sm:w-8 sm:h-8`

### Animations
Customize transitions and animations:
- Transition duration: `duration-200`
- Hover effects: `hover:scale-105`
- Fade-in animations: Custom keyframes included

## 🔒 Security Considerations

- **Message length limit** (2000 characters)
- **Input validation** before sending
- **XSS protection** with proper text rendering
- **Rate limiting** should be implemented server-side

## 📊 Performance

- **Optimized re-renders** with proper state management
- **Efficient scrolling** with refs instead of DOM queries
- **Memory management** with cleanup functions
- **Lazy loading** ready (can be implemented for message history)

## 🐛 Troubleshooting

### Common Issues

1. **Connection Failed**
   - Check if backend server is running
   - Verify server URL is correct
   - Check network connectivity

2. **Messages Not Appearing**
   - Ensure Socket.IO events match backend implementation
   - Check browser console for errors
   - Verify message format

3. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check for conflicting CSS rules
   - Verify responsive breakpoints

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋‍♂️ Support

For support and questions:
- Create an issue in the repository
- Check existing documentation
- Review Socket.IO documentation for server setup

## 🔄 Version History

- **v1.0.0** - Initial release with basic chat functionality
- **v1.1.0** - Added mobile optimization and invisible scrollbar
- **v1.2.0** - Enhanced animations and improved UX

---

**Built with ❤️ using React and Socket.IO**
