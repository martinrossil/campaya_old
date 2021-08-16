import { DisplayContainer, HorizontalLayout, IHorizontalLayout, VerticalAlign } from 'enta';

export default class HorizontalContainer extends DisplayContainer {
    public constructor(horizontalGap = 0, verticalAlign: VerticalAlign = 'top') {
        super();
        this.name = 'HorizontalContainer';
        this.horizontalLayout.horizontalGap = horizontalGap;
        this.horizontalLayout.verticalAlign = verticalAlign;
        this.layout = this.horizontalLayout;
    }

    private horizontalLayout: IHorizontalLayout = new HorizontalLayout();
}
customElements.define('horizontal-container', HorizontalContainer);
