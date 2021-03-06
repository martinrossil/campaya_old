import { ITypeFace, TypeFace } from 'enta';

export default class Typography {
    private static _sansSerif = 'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"';
    public static SANS_SERIF: ITypeFace = new TypeFace(Typography._sansSerif, 0.695, 0.09, -0.063);
}
