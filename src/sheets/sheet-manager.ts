import { App, TFile, Vault } from "obsidian";
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
	if (vault.getFolderByPath('Characters') === null) {
		vault.createFolder('Characters');
	}
}

export async function createSheetFile(app: App, sheetId: number) {
    const vault = app.vault;
	const num = Math.floor(Math.random() * 90000);
	verifyDefaultFolder(app.vault);
    await vault.create(`Characters/Character${num}.md`, getSheet(sheetId));
	const filePath: TFile | null = app.vault.getFileByPath(`Characters/Character${num}.md`);
	app.workspace.getLeaf('tab').openFile(filePath as TFile);
}
