import { Plugin } from 'obsidian';
import { SheetCommands } from './sheetCommands';
import { sheets } from './sheets';

interface CharacterSheetsSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: CharacterSheetsSettings = {
	mySetting: 'default'
}

export default class CharacterSheetsPlugin extends Plugin {
	settings: CharacterSheetsSettings;
	
	async onload() {
		console.log('Character Sheets: Loading plugin...')

		const commands = new SheetCommands;

		this.addRibbonIcon('user-pen', 'Create new character sheet ', () => {
			const vault = this.app.vault
			const randomNum = Math.floor(Math.random() * 90000) + 10000;
			vault.create(`./Character${randomNum}.md`, sheets.standard)
		});

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
