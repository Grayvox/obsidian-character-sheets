import CharacterSheetsPlugin from "src/main";
import standardSheetCommand from "./standard-sheet";

export default function addCommands(plugin: CharacterSheetsPlugin) {
    const commands = [
        standardSheetCommand(plugin.app)
    ]

    for (const command of commands) {
        plugin.addCommand(command);
    }
}