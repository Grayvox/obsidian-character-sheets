import { App } from "obsidian";
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


export function createSheetFile(app: App, sheetId: number) {
    const vault = app.vault;
    const randomNum = Math.floor(Math.random() * 90000);
    vault.create(`./Character${randomNum}.md`, getSheet(sheetId));
}
