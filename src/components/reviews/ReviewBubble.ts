import { DisplayContainer, IViewBox } from 'enta';
import Colors from '../../design/Colors';
import SinglePath from '../graphics/SinglePath';

export default class ReviewBubble extends DisplayContainer {
    public constructor(background: string, foreground: string, star: string, viewBox: IViewBox, left = 0, top = 0) {
        super();
        this.name = 'ReviewBubble';
        this.backgroundBubble = new SinglePath(background, Colors.WHITE, viewBox);
        this.foregroundBubble = new SinglePath(foreground, Colors.INPUT_BG_COLOR, viewBox);
        this.starShape = new SinglePath(star, Colors.PRIMARY_GREEN, viewBox);
        this.foregroundBubble.left = left;
        this.foregroundBubble.top = top;
        this.foregroundBubble.percentWidth = 95;
        this.foregroundBubble.percentHeight = 95;
        this.addElements([this.backgroundBubble, this.foregroundBubble, this.starShape]);
    }

    private backgroundBubble: SinglePath;
    private foregroundBubble: SinglePath;
    private starShape: SinglePath;
}
customElements.define('review-bubble', ReviewBubble);
