import { Plugin } from 'obsidian';
import addCommands from './commands/command-manager';
import { createSheetFile } from './sheets/sheet-manager';
import { SheetSelector } from './modals/sheet-selector';

interface CharacterSheetsSettings {
	mySetting: string;
}

const DEFAULT_SETTINGS: CharacterSheetsSettings = {
	mySetting: 'default'
}

export default class CharacterSheetsPlugin extends Plugin {
	settings: CharacterSheetsSettings;
	
	async onload() {
		this.addRibbonIcon('user-pen', 'Create new character sheet ', () => {
			new SheetSelector(this.app, (result) => createSheetFile(this.app, +result)).open();
		});

		addCommands(this);
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
