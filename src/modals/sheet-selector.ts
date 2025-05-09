import { 
	App, 
	Modal, 
	Setting, 
	DropdownComponent,
	ButtonComponent, 
} from "obsidian";

export class SheetSelector extends Modal {
	constructor(app: App, onSubmit: (result: string) => void) {
		super(app);
		this.setTitle('Character Sheets');
		this.setContent('Select a character sheet to generate!');

		let finalValue = '0';

		new Setting(this.contentEl)
			.addDropdown((dropdown: DropdownComponent) => {
				dropdown
					.addOption('0', 'Standard Character')
					.addOption('1', 'D&D Character')
					.onChange((value) => {
						finalValue = value;
					})
			})
		
		new Setting(this.contentEl)
			.addButton((button: ButtonComponent) => {
				button
					.setButtonText('Create sheet')
					.setCta()
					.onClick(() => {
						this.close();
						onSubmit(finalValue);
					});
			});
	}
}
