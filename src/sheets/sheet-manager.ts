import { App, Vault } from "obsidian";
import { standardSheet } from "./standard-sheet";
import { dndSheet } from "./dnd-sheet";

function getSheet(sheetId: number) {
	switch (sheetId) {
		case 0:
			return standardSheet;
		case 1:
			return dndSheet;
		default:
			return standardSheet;
	}
}

function verifyDefaultFolder(vault: Vault) {
	if (vault.getFolderByPath('./Characters/') === null) {
		vault.createFolder('./Characters/');
	}
}

export function createSheetFile(app: App, sheetId: number) {
    const vault = app.vault;
    const newFile = `Character${Math.floor(Math.random() * 90000)}`;
	verifyDefaultFolder(app.vault);
    vault.create(`./Characters/${newFile}.md`, getSheet(sheetId));
}
