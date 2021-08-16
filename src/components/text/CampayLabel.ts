import { FontWeight, IColor, LabelElement } from 'enta';
import Typography from '../../design/Typography';

export default class CampayaLabel extends LabelElement {
    public constructor(fontSize = 16, fontWeight: FontWeight = 400, textColor: IColor, text = '') {
        super();
        this.name = 'CampayaLabel';
        this.typeFace = Typography.SANS_SERIF;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.textColor = textColor;
        this.text = text;
        this.enabled = false;
    }
}
customElements.define('campaya-label', CampayaLabel);
