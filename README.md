# Ecosis Chatbot

Welcome to the Ecosis Chatbot repository! This project is a multilingual chatbot built using Next.js. The chatbot is designed to enhance user experience on the Ecosis website by providing support in multiple languages.

### Snapshots
![image](https://github.com/user-attachments/assets/ec9ab4c9-9696-4cf0-b349-218f4098e94f)


## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Supported Languages](#supported-languages)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Multilingual Support**: Chatbot supports multiple languages, enabling a wide range of users to interact in their preferred language.
- **Seamless Integration**: Built with Next.js, making it easy to integrate into the Ecosis website.
- **Responsive Design**: Works well on various devices, ensuring a smooth user experience.
- **Extensible**: Easily extendable to add more languages or features as needed.

## Installation

To get started with the Ecosis Chatbot, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ecosis-chatbot.git
cd ecosis-chatbot
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server
```bash

npm run dev
```

### 4. Build for Production
``` bash

npm run build
npm start

```

### Usage
After installation, the chatbot can be accessed by navigating to the Ecosis website and interacting with the chatbot widget.

You can customize the chatbot's behavior and appearance by modifying the configuration files located in the config directory.

### Configuration
The chatbot configuration includes settings for languages, API keys, and other options. Update the .env file with your specific settings:

```bash

NEXT_PUBLIC_API_KEY=your-api-key
NEXT_PUBLIC_SUPPORTED_LANGUAGES=en,fr,es,de

```

### Supported Languages
The Ecosis Chatbot currently supports the following languages:

English (en)
French (fr)
Spanish (es)
German (de)
Additional languages can be added by modifying the language files in the locales directory.

### Contributing
We welcome contributions from the community! To contribute:

### Fork the repository

```bash
git fork https://github.com/your-username/ecosis-chatbot.git

```
### Create a new branch

```bash

git checkout -b feature/YourFeature

```

### Make your changes

### Commit your changes

```bash

git commit -m 'Add new feature'
```

### Push to the branch

```bash

git push origin feature/YourFeature
```

### Open a pull request
