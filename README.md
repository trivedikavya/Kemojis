# Kemojis 🎯

**Transform your boring cursor into fun, interactive emojis!**

Kemojis is a Chrome extension that replaces your default cursor with customizable emojis, complete with interactive animations and effects. Make your browsing experience more fun and personalized!

## 🌟 Features

- **Custom Emoji Cursor**: Replace your cursor with any emoji you want
- **Interactive Effects**: 
  - 🖱️ **Click**: Bounce animation on left-click
  - 🖱️ **Right-click**: Tilt effect on context menu
  - 🖱️ **Double-click**: Full 360° rotation
  - 📜 **Scroll**: Directional rotation based on scroll direction
  - ⏰ **Idle Animation**: Gentle jumping when inactive for 30+ seconds
- **Customizable Size**: Adjust emoji size from 16px to 64px
- **Quick Emoji Selector**: Press `Ctrl + Alt + K` for quick emoji switching
- **Real-time Preview**: See changes instantly in the popup
- **Persistent Settings**: Your preferences are saved across browser sessions

##  Demo

> 🐦 **Tweet Preview**:  
> 👉 [Day 7 – Kemoji Chrome Extension on Twitter](https://twitter.com/iamkavyatrivedi/status/1947337951270342769)  
> *Shared as part of my #BuildInPublic journey! there *
>
https://x.com/iamkavyatrivedi/status/1947337951270342769/video/1




## 🚀 Installation

### From Chrome Web Store (Coming Soon)
1. Visit the Chrome Web Store
2. Search for "Kemojis"
3. Click "Add to Chrome"

### Manual Installation (Development)
1. Clone this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" in the top right
4. Click "Load unpacked" and select the extension folder
5. The Kemojis icon should appear in your extensions toolbar

## 🎮 How to Use

### Basic Setup
1. Click the Kemojis icon in your Chrome toolbar
2. Enter your favorite emoji in the input field
3. Adjust the size using the slider
4. Click "Save" to apply changes

### Interactive Effects
- **Left Click**: Watch your emoji bounce
- **Right Click**: See it tilt playfully  
- **Double Click**: Enjoy a full spin animation
- **Scroll**: Notice directional rotation effects
- **Stay Idle**: Your emoji will start jumping after 30 seconds of inactivity

## 📁 Project Structure

```
kemojis/
├── manifest.json          # Extension configuration
├── popup.html            # Settings popup interface
├── popup.js              # Popup functionality
├── content.js            # Main cursor logic and effects
├── emoji-cursor.js       # Cursor creation utility
├── emoji-selector.js     # Quick selector functionality
├── kemojislogo.png       # Extension icon
└── README.md            # This file
```

## 🛠️ Technical Details

- **Manifest Version**: 3 (Latest Chrome extension standard)
- **Permissions**: 
  - `storage`: Save user preferences
  - `scripting`: Inject cursor functionality
  - `activeTab`: Access current webpage
- **Host Permissions**: `<all_urls>` (Works on all websites)

## 🤝 Contributing

We welcome contributions from the community! Whether it's bug fixes, new features, or improvements, your help is appreciated.

### Contribution Guidelines

- Follow existing code style and structure
- Test your changes on multiple websites
- Update documentation if needed
- Ensure compatibility with Manifest V3
- Keep commits focused and well-described

## 🐛 Known Issues

- Some websites with strict CSP (Content Security Policy) might block the extension
- Performance may vary on websites with heavy JavaScript usage
- Emoji rendering might differ slightly across operating systems

## 📝 Changelog

### Version 1.0
- Initial release
- Basic emoji cursor functionality
- Interactive click, scroll, and idle animations
- Settings popup with size customization
- Quick emoji selector with keyboard shortcut

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who help improve Kemojis
- Inspired by the need to make web browsing more fun and personalized
- Built with ❤️ as my first Chrome extension



**Made with 🎯 by [Kavya Trivedi]** - *My first Chrome extension!*

⭐ If you enjoy using Kemojis, please consider giving it a star on GitHub!
