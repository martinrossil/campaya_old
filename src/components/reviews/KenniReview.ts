import { ViewBox } from 'enta';
import { PathData } from '../graphics/PathData';
import ReviewBubble from './ReviewBubble';
import CustomerReview from './CustomerReview';

export default class KenniReview extends CustomerReview {
    public constructor() {
        super('kenni.jpg', 'Kenni B.', 'Sommerhus i Rødby', 'Altid klar til at hjælpe', 'Campaya står altid klar til at besvare mine spørgsmål og bidrager med tips til at finjustere min boligprofil, så vi opnår rigtig god bookingaktivitet.');
        this.name = 'KenniReview';
        this.reviewBubble.top = -70;
        this.reviewBubble.right = 0;
        this.addElement(this.reviewBubble);
    }

    private reviewBubble: ReviewBubble = new ReviewBubble(PathData.BUBBLE_1, PathData.BUBBLE_1, PathData.STAR_1, new ViewBox(0, 0, 84, 73), 4, 2);
}
customElements.define('kenni-review', KenniReview);
