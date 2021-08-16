import { ScrollContainer, VerticalLayout } from 'enta';
import FormUniqueContainer from '../components/containers/FormUniqueContainer';
import HorizontalContainer from '../components/containers/HorizontalContainer';
import QuestionsContainer from '../components/containers/QuestionsContainer';
import CampayaLogo from '../components/graphics/CampayaLogo';
import PaperContainer from '../components/graphics/PaperContainer';
import KenniReview from '../components/reviews/KenniReview';
import KiaReview from '../components/reviews/KiaReview';
import TrineReview from '../components/reviews/TrineReview';
import CampayaUSP from '../components/text/CampayaUSP';
import Colors from '../design/Colors';

export default class TabletView extends ScrollContainer {
    public constructor() {
        super();
        this.name = 'TabletView';
        this.percentWidth = 100;
        this.percentHeight = 100;
        this.paddingX = 24;
        this.paddingY = 48;
        this.layout = new VerticalLayout(40, 'center');
        this.addElements([
            new CampayaLogo(452, 83),
            new CampayaUSP(30, 'Alle sommerhuse samlet ét sted'),
            new FormUniqueContainer(),
            this.reviewsContainer,
            new QuestionsContainer()
        ]);
    }

    private _reviewsContainer!: PaperContainer;
    private get reviewsContainer(): PaperContainer {
        if (!this._reviewsContainer) {
            this._reviewsContainer = new PaperContainer(Colors.PAPER_COLOR);
            this._reviewsContainer.percentWidth = 100;
            this._reviewsContainer.paddingTop = 64;
            this._reviewsContainer.paddingX = 24;
            this._reviewsContainer.paddingBottom = 32;
            this._reviewsContainer.layout = new VerticalLayout(96, 'center');
            this._reviewsContainer.addElements([
                this.reviewsRowOne,
                new TrineReview(50)
            ]);
        }
        return this._reviewsContainer;
    }

    private _reviewsRowOne!: HorizontalContainer;
    private get reviewsRowOne(): HorizontalContainer {
        if (!this._reviewsRowOne) {
            this._reviewsRowOne = new HorizontalContainer(24);
            this._reviewsRowOne.percentWidth = 100;
            this._reviewsRowOne.addElements([
                new KenniReview(),
                new KiaReview()
            ]);
        }
        return this._reviewsRowOne;
    }
}
customElements.define('tablet-view', TabletView);
