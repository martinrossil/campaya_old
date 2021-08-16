import Colors from '../../design/Colors';
import HorizontalContainer from '../containers/HorizontalContainer';
import VerticalContainer from '../containers/VerticalContainer';
import CampayaIcon from '../icons/CampayaIcon';
import Icons from '../icons/Icons';
import CampayaText from '../text/CampayaText';

export default class UniqueSellingPoint extends HorizontalContainer {
    public constructor(title = '', description = '') {
        super(16);
        this.name = 'UniqueSellingPoint';
        this.percentWidth = 100;
        this.titleText.text = title;
        this.descriptionText.text = description;
        this.addElements([new CampayaIcon(Icons.CHECK_MARK, Colors.PRIMARY_GREEN), this.textContainer]);
    }

    private _textContainer!: VerticalContainer;
    private get textContainer(): VerticalContainer {
        if (!this._textContainer) {
            this._textContainer = new VerticalContainer(24);
            this._textContainer.percentWidth = 100;
            this._textContainer.addElements([this.titleText, this.descriptionText]);
        }
        return this._textContainer;
    }

    private titleText: CampayaText = new CampayaText(22, 500, Colors.TEXT_COLOR);
    private descriptionText: CampayaText = new CampayaText(16, 400, Colors.TEXT_COLOR);
}
customElements.define('unique-selling-point', UniqueSellingPoint);
