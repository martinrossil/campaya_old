import { DisplayContainer, HorizontalAlign, IVerticalLayout, VerticalLayout } from 'enta';

export default class VerticalContainer extends DisplayContainer {
    public constructor(verticalGap = 0, horizontalAlign: HorizontalAlign = 'left') {
        super();
        this.name = 'VerticalContainer';
        this.verticalLayout.verticalGap = verticalGap;
        this.verticalLayout.horizontalAlign = horizontalAlign;
        this.layout = this.verticalLayout;
    }

    private verticalLayout: IVerticalLayout = new VerticalLayout();
}
customElements.define('vertical-container', VerticalContainer);
