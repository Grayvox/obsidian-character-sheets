import { App, Command } from "obsidian";
import { createSheetFile } from "src/sheets/sheet-manager";

export default function standardSheetCommand(app: App) {
	const sheetId = 0;

    const command: Command = {
        id: 'new-standard-cs',
        name: 'New standard character sheet',
        callback: () => {
            createSheetFile(app, sheetId);
        }
    }

    return command;
}
