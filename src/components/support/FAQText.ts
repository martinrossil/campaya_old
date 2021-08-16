import Colors from '../../design/Colors';
import VerticalContainer from '../containers/VerticalContainer';
import CampayaText from '../text/CampayaText';
import CampayaLabel from '../text/CampayLabel';

export default class FAQText extends VerticalContainer {
    public constructor() {
        super(32);
        this.percentWidth = 100;
        this.name = 'FAQText';
        this.addElements([
            new CampayaLabel(28, 500, Colors.TEXT_COLOR, 'Ofte stillede spørgsmål'),
            new CampayaText(16, 400, Colors.TEXT_COLOR, 'Hvis du er nysgerrig på vores effektive udlejningsløsning, er du altid velkommen til at ringe eller skrive.'),
            new CampayaText(16, 400, Colors.TEXT_COLOR, 'Vi har udvidede åbningstider hver dag, så du altid kan få svar på dine spørgsmål.'),
            new CampayaText(16, 400, Colors.TEXT_COLOR, 'Du kan også bladre spørgsmålene her igennem og blive klogere på vores prisvenlige og meget fleksible tilbud.'),
            new CampayaText(16, 500, Colors.TEXT_COLOR, 'Du er altid meget velkommen til at ringe med både små og store spørgsmål.')
        ])
    }
}
customElements.define('faq-text', FAQText);
