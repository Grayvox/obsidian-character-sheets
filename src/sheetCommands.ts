import { Command, Editor, MarkdownView } from "obsidian";
import { Sheets } from "./sheets";

export class SheetCommands extends Sheets {
    standardSheetCommand: Command = {
        id: 'new-cs',
        name: 'New character sheet',
        hotkeys: [{ modifiers: ['Mod'], key: "'" }],
        editorCallback: (editor: Editor, view: MarkdownView) => {
            editor.replaceRange(
                this.standard(),
                editor.getCursor()
            );
        },
    }
}