import { IColor, PathElement, ViewBox } from 'enta';
import Colors from '../../design/Colors';

export default class CampayaIcon extends PathElement {
    public constructor(icon = '', color: IColor = Colors.PRIMARY_GREEN, viewBox: ViewBox = new ViewBox(0, 0, 512, 512)) {
        super();
        this.name = 'CampayaIcon';
        this.size(24, 24);
        this.pathData = icon;
        this.viewBox = viewBox;
        this.fillColor = color;
    }
}
customElements.define('campaya-icon', CampayaIcon);
