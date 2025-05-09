import CharacterSheetsPlugin from "src/main";
import standardSheetCommand from "./standard-sheet";
import dndSheetCommand from "./dnd-sheet";

export default function addCommands(plugin: CharacterSheetsPlugin) {
    const commands = [
        standardSheetCommand(plugin.app),
		dndSheetCommand(plugin.app)
    ]

    for (const command of commands) {
        plugin.addCommand(command);
    }
}
