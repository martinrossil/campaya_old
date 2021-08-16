import { DisplayContainer, IDisplayContainer, VerticalLayout, ViewBox } from 'enta';
import Colors from '../../design/Colors';
import Shadows from '../../design/Shadows';
import HorizontalContainer from '../containers/HorizontalContainer';
import PaperContainer from '../graphics/PaperContainer';
import CampayaIcon from '../icons/CampayaIcon';
import Icons from '../icons/Icons';
import CampayaText from '../text/CampayaText';

export default class ExpandableQuestionAnswer extends PaperContainer {
    public constructor(question = '', answer = '') {
        super(Colors.WHITE);
        this.name = 'ExpandableQuestionAnswer';
        this.percentWidth = 100;
        this.questionText = new CampayaText(16, 500, Colors.TEXT_COLOR, question);
        this.answerText = new CampayaText(16, 400, Colors.TEXT_COLOR, answer);
        this.addElement(this.expandableHeader);
        this.layout = new VerticalLayout();
        this.addFilter(Shadows.LARGE);
    }

    private questionText: CampayaText;
    private answerText: CampayaText;
    private expandIcon: CampayaIcon = new CampayaIcon(Icons.EXPAND_MORE, Colors.PRIMARY_GREEN, new ViewBox(4, 4, 16, 16));

    private _expandableHeader!: HorizontalContainer;
    private get expandableHeader(): HorizontalContainer {
        if (!this._expandableHeader) {
            this._expandableHeader = new HorizontalContainer(16, 'middle');
            this._expandableHeader.percentWidth = 100;
            this._expandableHeader.padding = 24;
            this._expandableHeader.cursor = 'pointer';
            this._expandableHeader.addElements([this.questionText, this.expandIcon]);
            this._expandableHeader.addEventListener('click', this.headerClick.bind(this));
        }
        return this._expandableHeader;
    }

    private headerClick(): void {
        if (!this.containsElement(this.answerContainer)) {
            this.addElement(this.answerContainer);
            this.expandIcon.pathData = Icons.EXPAND_LESS;
        } else {
            this.removeElement(this.answerContainer);
            this.expandIcon.pathData = Icons.EXPAND_MORE;
        }
    }

    private _answerContainer!: IDisplayContainer;
    private get answerContainer(): IDisplayContainer {
        if (!this._answerContainer) {
            this._answerContainer = new DisplayContainer();
            this._answerContainer.percentWidth = 100;
            this._answerContainer.paddingX = 24;
            this._answerContainer.paddingBottom = 24;
            this._answerContainer.addElement(this.answerText);
        }
        return this._answerContainer;
    }
}
customElements.define('expandable-question-answer', ExpandableQuestionAnswer);
