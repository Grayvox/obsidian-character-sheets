import { Plugin, setIcon } from 'obsidian';

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

		this.addRibbonIcon('user-pen', 'Click me', () => {
			console.log('Hello, you!');
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
