import { Plugin } from 'obsidian';
import { SheetCommands } from './sheetCommands';
import { Sheets } from './sheets';

// Remember to rename these classes and interfaces!

interface MyPluginSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: MyPluginSettings = {
	mySetting: 'default'
}

export default class CharacterSheetsPlugin extends Plugin {
	settings: MyPluginSettings;
	
	async onload() {
		console.log('Character Sheets: Loading plugin...')

		const commands = new SheetCommands;
		const sheets = new Sheets;

		// Create new note with character sheet
		this.addRibbonIcon('user-pen', 'Click me', () => {
			const vault = this.app.vault
			const randomNum = Math.floor(Math.random() * 90000) + 10000;
			vault.create(`./Character${randomNum}.md`, sheets.standard())
		});

		// Generate commands
		this.addCommand(commands.standardSheetCommand);
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
