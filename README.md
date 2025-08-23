# 🎬 MovieApp - React Native & Expo

<div align="center">

![React Native](https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Expo](https://img.shields.io/badge/Expo-000000?style=for-the-badge&logo=expo&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

_A modern, cross-platform movie discovery app built with React Native and Expo_

[🚀 Get Started](#get-started) • [📱 Features](#features) • [🛠️ Tech Stack](#tech-stack) • [📖 Documentation](#documentation)

</div>

---

## ✨ Features

- 🎭 **Movie Discovery** - Browse and search through thousands of movies
- 🔍 **Smart Search** - Find your favorite films with intelligent search
- ⭐ **Movie Details** - Comprehensive information, ratings, and reviews
- 💾 **Save Favorites** - Keep track of movies you want to watch
- 📱 **Cross-Platform** - Works seamlessly on iOS, Android, and Web
- 🎨 **Modern UI** - Beautiful, intuitive interface with smooth animations
- 🌙 **Responsive Design** - Optimized for all screen sizes

## 🛠️ Tech Stack

- **Frontend Framework**: React Native
- **Development Platform**: Expo
- **Language**: TypeScript
- **Styling**: Tailwind CSS (NativeWind)
- **Navigation**: Expo Router
- **State Management**: React Hooks
- **API Integration**: Custom fetch hooks
- **Build Tool**: Metro Bundler

## 🚀 Get Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd HelloReactNativ
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npx expo start
   ```

### Running the App

After starting the development server, you'll see options to:

- 📱 **iOS Simulator** - Press `i` to open in iOS Simulator
- 🤖 **Android Emulator** - Press `a` to open in Android Emulator
- 🌐 **Web Browser** - Press `w` to open in web browser
- 📱 **Expo Go** - Scan QR code with Expo Go app on your device

## 📱 App Structure

```
app/
├── (tabs)/           # Tab-based navigation
│   ├── index.tsx     # Home screen with movie listings
│   ├── search.tsx    # Movie search functionality
│   ├── saved.tsx     # Saved/favorite movies
│   └── profile.tsx   # User profile
├── movies/           # Movie-specific routes
│   └── [id].tsx     # Individual movie details
└── _layout.tsx       # Root layout configuration
```

## 🎯 Key Components

- **MovieCard** - Displays movie information in a card format
- **SearchBar** - Handles movie search functionality
- **TabBarIcon** - Custom tab bar icons for navigation

## 🔧 Development

### Available Scripts

```bash
npm start          # Start the Expo development server
npm run android    # Start Android development build
npm run ios        # Start iOS development build
npm run web        # Start web development build
npm run reset-project  # Reset to blank project template
```

### Project Reset

When you're ready to start fresh:

```bash
npm run reset-project
```

This will move the starter code to `app-example` and create a blank `app` directory.

## 📚 Learning Resources

- **[Expo Documentation](https://docs.expo.dev/)** - Comprehensive guides and API reference
- **[React Native Docs](https://reactnative.dev/)** - Official React Native documentation
- **[Expo Tutorial](https://docs.expo.dev/tutorial/introduction/)** - Step-by-step learning path
- **[NativeWind](https://www.nativewind.dev/)** - Tailwind CSS for React Native

## 🤝 Contributing

We welcome contributions! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🌟 Community

Join our community of developers creating amazing cross-platform apps!

- **[Expo on GitHub](https://github.com/expo/expo)** - Open source platform
- **[Discord Community](https://chat.expo.dev)** - Chat with developers
- **[Expo Forums](https://forums.expo.dev/)** - Get help and share knowledge

---

<div align="center">

**Made with ❤️ using React Native & Expo**

[⬆️ Back to top](#-movieapp---react-native--expo)

</div>
