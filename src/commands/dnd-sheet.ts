import { App, Command } from "obsidian";
import { createSheetFile } from "src/sheets/sheet-manager";

export default function dndSheetCommand(app: App) {
	const sheetId = 1;

	const command: Command = {
		id: 'new-dnd-cs',
		name: 'New D&D character sheet',
		callback: () => {
			createSheetFile(app, sheetId);
		}
	}

	return command;
}
