import Colors from '../../design/Colors';
import VerticalContainer from '../containers/VerticalContainer';
import CampayaLabel from '../text/CampayLabel';

export default class ContactText extends VerticalContainer {
    public constructor() {
        super(16);
        this.name = 'ContactText';
        this.addElements([
            new CampayaLabel(16, 500, Colors.PRIMARY_GREEN_DARK, 'Tlf. 69 91 80 60'),
            new CampayaLabel(16, 500, Colors.PRIMARY_GREEN_DARK, 'husejer@campaya.dk'),
            new CampayaLabel(16, 400, Colors.TEXT_COLOR_MUTED, '07:00 - 18:00 alle dage')
        ]);
    }
}
customElements.define('contact-text', ContactText);
