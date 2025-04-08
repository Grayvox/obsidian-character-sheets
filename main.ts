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
				const sel = editor.getSelection()
			
				console.log(`You have selected: ${sel}`);
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
