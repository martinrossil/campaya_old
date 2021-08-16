import { DisplayContainer, ILabelElement } from 'enta';
import Colors from '../../design/Colors';
import CampayaLabel from '../text/CampayLabel';

export default class PrimaryButton extends DisplayContainer {
    public constructor() {
        super();
        this.name = 'PrimaryButton';
        this.percentWidth = 100;
        this.height = 54;
        this.backgroundColor = Colors.PRIMARY_GREEN;
        this.cornerSize = 27;
        this.cursor = 'pointer';
        this.addElement(this.labelElement);
    }

    private _labelElement!: ILabelElement;
    private get labelElement(): ILabelElement {
        if (!this._labelElement) {
            this._labelElement = new CampayaLabel(22, 500, Colors.BUTTON_TEXT_COLOR, 'Opret dig gratis');
            this._labelElement.centerOffset = 0;
            this._labelElement.middleOffset = 0;
        }
        return this._labelElement;
    }
}
customElements.define('primary-button', PrimaryButton);
