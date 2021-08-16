import { IColor, ILinearGradient, IViewBox, PathElement } from 'enta';

export default class SinglePath extends PathElement {
    public constructor(path: string, color: IColor | ILinearGradient, box: IViewBox) {
        super();
        this.name = 'SinglePath';
        this.pathData = path;
        this.fillColor = color;
        this.viewBox = box;
    }

    protected validate(): void {
        this.invalidateInternalSize();
        super.validate();
    }

    protected updateInternalSize(): void {
        super.updateInternalSize();
        if (this.viewBox) {
            this.internalSize(this.viewBox.width, this.viewBox.height);
        }
    }

    protected updateInternalWidth(): void {
        super.updateInternalWidth();
        if (this.viewBox) {
            this.internalWidth = this.viewBox.width;
        }
    }

    protected updateInternalHeight(): void {
        super.updateInternalHeight();
        if (this.viewBox) {
            this.internalHeight = this.viewBox.height;
        }
    }
}
customElements.define('single-path', SinglePath);
