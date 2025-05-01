import { App, Command } from "obsidian";
import { createSheetFile } from "src/sheets/sheet-manager";

export default function standardSheetCommand(app: App) {
    const command: Command = {
        id: 'new-standard-cs',
        name: 'New character sheet',
        hotkeys: [{ modifiers: ['Mod'], key: "'" }],
        callback: () => {
            createSheetFile(app);
        }
    }

    return command;
}
