import { FontWeight, IColor, TextAlign, TextElement } from 'enta';
import Typography from '../../design/Typography';

export default class CampayaText extends TextElement {
    public constructor(fontSize = 16, fontWeight: FontWeight = 400, textColor: IColor, text = '', textAlign: TextAlign = 'left') {
        super();
        this.name = 'CampayaText';
        this.typeFace = Typography.SANS_SERIF;
        this.percentWidth = 100;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
        this.textColor = textColor;
        this.textAlign = textAlign;
        this.text = text;
        this.lineHeight = 1.4;
        this.enabled = false;
    }
}
customElements.define('campaya-text', CampayaText);
