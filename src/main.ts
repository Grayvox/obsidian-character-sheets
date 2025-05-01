import { Plugin } from 'obsidian';
import addCommands from './commands/command-manager';
import { createSheetFile } from './sheets/sheet-manager';

interface CharacterSheetsSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: CharacterSheetsSettings = {
	mySetting: 'default'
}

export default class CharacterSheetsPlugin extends Plugin {
	settings: CharacterSheetsSettings;
	
	async onload() {
		console.log('Character Sheets: Loading plugin...');

		this.addRibbonIcon('user-pen', 'Create new character sheet ', () => {
			createSheetFile(this.app);
		});

		addCommands(this);
	}

	onunload() {
		console.log('Character Sheets: Disabling plugin...');
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
