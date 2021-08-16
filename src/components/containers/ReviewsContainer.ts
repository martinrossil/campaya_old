import { HorizontalLayout } from 'enta';
import Colors from '../../design/Colors';
import PaperContainer from '../graphics/PaperContainer';
import KenniReview from '../reviews/KenniReview';
import KiaReview from '../reviews/KiaReview';
import TrineReview from '../reviews/TrineReview';

export default class ReviewsContainer extends PaperContainer {
    public constructor() {
        super(Colors.PAPER_COLOR);
        this.percentWidth = 100;
        this.paddingY = 64;
        this.paddingX = 24;
        this.layout = new HorizontalLayout(24);
        this.addElements([
            new KenniReview(),
            new KiaReview(),
            new TrineReview()
        ]);
    }
}
customElements.define('reviews-container', ReviewsContainer);
