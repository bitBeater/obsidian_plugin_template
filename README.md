# Obsidian Plugin Template

## Introduction

This project is a template for creating plugins for Obsidian, a popular
note-taking and knowledge management application. It includes scripts for
building, deploying, and managing the plugin lifecycle.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Configuration](#configuration)
- [Dependencies](#dependencies)
- [Building the Plugin](#building-the-plugin)
- [Deploying the Plugin](#deploying-the-plugin)
- [Manifest generation](#manifest-generation)
- [Troubleshooting](#troubleshooting)
- [Contributors](#contributors)
- [License](#license)

## Installation

To use this template, clone the repository to your local machine:

```bash
git clone [URL_TO_REPOSITORY]
```

Navigate to the cloned directory:

```bash
cd [CLONED_DIRECTORY]
```

## Usage

This template is designed to streamline the development of Obsidian plugins. Use
the provided scripts to build and deploy your plugin.

## Features

- **Build Script**: Bundles the plugin, generates the manifest file, and outputs
  the JavaScript bundle and assets to the `dist` directory.
- **Deploy Script**: Builds the plugin and copies the content of the `dist`
  directory to the specified Obsidian plugins directory.
- **Manifest Creation Script**: Automatically generates the `manifest.json` file
  required for Obsidian plugins from the `package.json` file.

## Configuration

### Setting the Obsidian Plugin Directory

Configure the deployment directory in the `scripts/deploy.ts` file:

```typescript
const DEPLOY_DIR =
  "C:/Users/username/your_vault_name/.obsidian/plugins/your_plugin_name";
```

### Setting the package.json File

You have to confugure the `package.json`. Default configuration is as follows:

```json
{
  "name": null,
  "version": null,
  "description": null,
  "license": null,
  "author": {
    "name": null,
    "email": null,
    "url": null
  },
  ...
```

## Dependencies

List all dependencies here, and provide instructions for installation if
necessary.

## Building the Plugin

To build the plugin, run:

```bash
npm run build
```

## Deploying the Plugin

Before deploying, ensure the `DEPLOY_DIR` in `scripts/deploy.ts` is set to your
Obsidian plugin directory. To deploy the plugin, run:

```bash
npm run deploy
```

## Manifest generation

The manifest file is crucial for Obsidian to recognize and use the plugin. It is
generated from the `package.json` file. Here is a sample manifest snippet:

```json
{
  "id": "packageJson.author + packageJson.name",
  "minAppVersion": "packageJson.manifest.minAppVersion",
  "isDesktopOnly": "packageJson.manifest.isDesktopOnly",
  "name": "packageJson.name",
  "version": "packageJson.version",
  "description": "packageJson.description",
  "author": "packageJson.author.name",
  "authorUrl": "packageJson.author?.url",
  "fundingUrl": "packageJson.funding.url"
}
```
