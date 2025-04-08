import { Editor, MarkdownView, Plugin } from 'obsidian';
import { Sheets } from './sheets';

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
		const sheets = new Sheets;

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
				editor.replaceRange(
					sheets.createStandardSheet(),
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
