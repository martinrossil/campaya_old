import { ViewBox } from 'enta';
import { PathData } from '../graphics/PathData';
import ReviewBubble from './ReviewBubble';
import CustomerReview from './CustomerReview';

export default class KiaReview extends CustomerReview {
    public constructor() {
        super('kia.jpg', 'Kia & Jacob', 'Feriebolig i Svaneke', 'Mere tilfredse lejere', 'I Campaya har vi en god samarbejdspartner. Der er god personlig kontakt og fleksibilitet, som gør, at vores lejere bliver mere tilfredse.');
        this.name = 'KiaReview';
        this.reviewBubble.bottom = -70;
        this.reviewBubble.right = 0;
        this.addElement(this.reviewBubble);
    }

    private reviewBubble: ReviewBubble = new ReviewBubble(PathData.BUBBLE_3, PathData.BUBBLE_3, PathData.STAR_3, new ViewBox(0, 0, 66, 69), 2, 2);
}
customElements.define('kia-review', KiaReview);
