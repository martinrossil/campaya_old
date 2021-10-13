import { ViewBox } from 'enta';
import Colors from '../../design/Colors';
import { PathData } from './PathData';
import SinglePath from './SinglePath';

export default class CampayaLogo extends SinglePath {
    public constructor(width = NaN, height = NaN) {
        super(PathData.LOGO, Colors.PRIMARY_GREEN, new ViewBox(0, 0, 603, 110));
        this.name = 'CampayaLogo';
        this.size(width, height);
    }
}
customElements.define('campaya-logo', CampayaLogo);
