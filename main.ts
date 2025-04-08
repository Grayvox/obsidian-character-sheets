import { Editor, MarkdownView, Plugin } from 'obsidian';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class CharacterSheets extends Plugin {
	settings: MyPluginSettings;

	async onload() {
		console.log('Character Sheets: Loading plugin...')

		const standardSheet = `
[CS]

**NOTE** 
For this to remain a valid character sheet for the plugin, DO NOT remove the "[CS]" line near the top. 
It is OK to remove this "NOTE" right here.

## Basic Info
### Name

### Meaning of Name

### Nicknames

### Date of Birth

## Appearance
### Hair Color

### Hair Type / Length

### Eye Color

### Skin Tone

### Race

### Extra

## Relations
### Family

### Friends

### Allies

### Enemies

### Other

`;

		// Create new note with character sheet
		this.addRibbonIcon('user-pen', 'Click me', () => {
			console.log('Hello, you!');
		});

		// Create new character sheet
		this.addCommand({
			id: 'new-cs',
			name: 'New character sheet',
			hotkeys: [{ modifiers: ['Mod'], key: "'" }],
			editorCallback: (editor: Editor, view: MarkdownView) => {
				editor.replaceRange(
					standardSheet,
					editor.getCursor()
				);
			},
		});
	}

	onunload() {
		console.log('Character Sheets: Disabling plugin...')
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
