import { Command, Editor, MarkdownView } from "obsidian";
import { sheets } from "./sheets";

export class SheetCommands {
    standardSheetCommand: Command = {
        id: 'new-cs',
        name: 'New character sheet',
        hotkeys: [{ modifiers: ['Mod'], key: "'" }],
        editorCallback: (editor: Editor, view: MarkdownView) => {
            editor.replaceRange(
                sheets.standard,
                editor.getCursor()
            );
        },
    }
}