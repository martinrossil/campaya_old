import Colors from '../../design/Colors';
import Shadows from '../../design/Shadows';
import HorizontalContainer from '../containers/HorizontalContainer';
import VerticalContainer from '../containers/VerticalContainer';
import PaperContainer from '../graphics/PaperContainer';
import CampayaText from '../text/CampayaText';
import CampayaLabel from '../text/CampayLabel';
import AvatarImage from './AvatarImage';

export default class CustomerReview extends PaperContainer {
    private avatarURL = '';
    private avatarName = '';
    private avatarLocation = '';
    private usp = '';
    private review = '';
    public constructor(avatarURL = '', avatarName = '', avatarLocation = '', usp = '', review = '', percentWidth = 100) {
        super(Colors.WHITE);
        this.name = 'CustomerReview';
        this.percentWidth = percentWidth;
        this.avatarURL = avatarURL;
        this.avatarName = avatarName;
        this.avatarLocation = avatarLocation;
        this.usp = usp;
        this.review = review;
        this.padding = 32;
        this.addElement(this.verticalContainer);
        this.addFilter(Shadows.REAL);
    }

    private _verticalContainer!: VerticalContainer;
    private get verticalContainer(): VerticalContainer {
        if (!this._verticalContainer) {
            this._verticalContainer = new VerticalContainer(24);
            this._verticalContainer.percentWidth = 100;
            this._verticalContainer.addElements([
                this.profileContainer,
                new CampayaLabel(16, 500, Colors.TEXT_COLOR, this.usp),
                new CampayaText(16, 400, Colors.TEXT_COLOR_DULLED, this.review)
            ]);
        }
        return this._verticalContainer;
    }

    private _profileContainer!: HorizontalContainer;
    private get profileContainer(): HorizontalContainer {
        if (!this._profileContainer) {
            this._profileContainer = new HorizontalContainer(16, 'middle');
            this._profileContainer.addElements([
                new AvatarImage(this.avatarURL, this.avatarName),
                this.avatarTextContainer
            ]);
        }
        return this._profileContainer;
    }

    private _avatarTextContainer!: VerticalContainer;
    private get avatarTextContainer(): VerticalContainer {
        if (!this._avatarTextContainer) {
            this._avatarTextContainer = new VerticalContainer(16);
            this._avatarTextContainer.addElements([
                new CampayaLabel(16, 500, Colors.TEXT_COLOR, this.avatarName),
                new CampayaLabel(16, 400, Colors.TEXT_COLOR_MUTED, this.avatarLocation)
            ]);
        }
        return this._avatarTextContainer;
    }
}
customElements.define('customer-review', CustomerReview);
