import { ViewBox } from 'enta';
import { PathData } from '../graphics/PathData';
import ReviewBubble from './ReviewBubble';
import CustomerReview from './CustomerReview';

export default class TrineReview extends CustomerReview {
    public constructor(percentWidth = 100) {
        super('trine.jpg', 'Trine L.', 'Sommerhus i Allinge', 'Opfylder alle vores ønsker', 'Campaya har fra dag ét opfyldt alle vores ønsker og været meget behjælpsomme med at få os godt i gang. Campaya varetager i den grad ejers ønsker, og det er vi rigtig glade for.', percentWidth);
        this.name = 'TrineReview';
        this.reviewBubble.top = -70;
        this.reviewBubble.right = 0;
        this.addElement(this.reviewBubble);
    }

    private reviewBubble: ReviewBubble = new ReviewBubble(PathData.BUBBLE_2, PathData.BUBBLE_2, PathData.STAR_2, new ViewBox(0, 0, 86, 62), 3, 2);
}
customElements.define('trine-review', TrineReview);
