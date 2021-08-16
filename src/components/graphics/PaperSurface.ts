import { IColor, PathElement } from 'enta';

export default class PaperSurface extends PathElement {
    public constructor(fillColor: IColor) {
        super();
        this.name = 'PaperSurface';
        this.fillColor = fillColor;
    }

    protected validate(): void {
        super.validate();
        const w = this.actualWidth;
        const h = this.actualHeight;
        if (w > 0 && h > 0) {
            let p = 'M 0 0 ';
            p += 'L ' + Math.round(0.2 * w) + ' -3 ' + 'L ' + Math.round(0.4 * w) + ' 3 ' + 'L ' + Math.round(0.6 * w) + ' -3 ' + 'L ' + Math.round(0.8 * w) + ' 3 ' + ' L ' + w + ' 0 ';
            p += 'L ' + (w + 2) + ' ' + Math.round(0.3 * h) + ' ' + 'L ' + (w + -2) + ' ' + Math.round(0.6 * h) + ' ' + 'L ' + w + ' ' + h + ' ';
            p += 'L ' + Math.round(0.6 * w) + ' ' + (h + 3) + ' ' + 'L ' + Math.round(0.3 * w) + ' ' + (h - 3) + ' ' + 'L 0 ' + h + ' ';
            p += 'L -3 ' + Math.round(0.7 * h) + ' ' + 'L -3 ' + Math.round(0.4 * h) + ' ' + 'L 0 0z';
            this.pathData = p;
        }
    }
}
customElements.define('paper-surface', PaperSurface);
