import { DisplayContainer } from 'enta';
import Colors from '../../design/Colors';
import CampayaLabel from '../text/CampayLabel';

export default class CampayaInput extends DisplayContainer {
    public constructor(prompt = '') {
        super();
        this.name = 'CampayaInput';
        this.percentWidth = 100;
        this.height = 48;
        this.paddingTop = 18;
        this.paddingLeft = 16;
        this.cornerSize = 8;
        this.backgroundColor = Colors.INPUT_BG_COLOR;
        this.promptElement.text = prompt;
        this.addElement(this.promptElement);
    }

    private promptElement: CampayaLabel = new CampayaLabel(16, 400, Colors.TEXT_COLOR_DULLED);
}
customElements.define('campaya-input', CampayaInput);
