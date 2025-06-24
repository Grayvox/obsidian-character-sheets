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
		this.setTitle('Character sheets');
		this.setContent('Select a character sheet to generate!');

		let finalValue = '0';

		new Setting(this.contentEl)
			.addDropdown((dropdown: DropdownComponent) => {
				dropdown
					.addOption('0', 'Standard character')
					.addOption('1', 'D&D character')
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
