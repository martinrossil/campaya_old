import Colors from '../../design/Colors';
import CampayaLabel from './CampayLabel';

export default class CampayaUSP extends CampayaLabel {
    public constructor(fontSize = 24, text = '') {
        super(fontSize, 500, Colors.TEXT_COLOR, text);
        this.name = 'CampayaUSP';
    }
}
customElements.define('campaya-u-s-p', CampayaUSP);
