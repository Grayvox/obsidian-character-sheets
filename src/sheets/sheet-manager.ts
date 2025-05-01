import { App } from "obsidian";
import { standardSheet } from "./standard-sheet";

export function createSheetFile(app: App) {
    const vault = app.vault;
    const randomNum = Math.floor(Math.random() * 90000);
    vault.create(`./Character${randomNum}.md`, standardSheet);
}
