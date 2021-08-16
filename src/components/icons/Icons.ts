export default class Icons {
    private static _CHECK_MARK: string;
    public static get CHECK_MARK(): string {
        if (!this._CHECK_MARK) {
            this._CHECK_MARK = 'M480 128c0 8.188-3.125 16.38-9.375 22.62l-256 256C208.4 412.9 200.2 416 192 416s-16.38-3.125-22.62-9.375l-128-128C35.13 272.4 32 264.2 32 256c0-18.28 14.95-32 32-32c8.188 0 16.38 3.125 22.62 9.375L192 338.8l233.4-233.4C431.6 99.13 439.8 96 448 96C465.1 96 480 109.7 480 128z';
        }
        return this._CHECK_MARK;
    }

    private static _EXPAND_MORE: string;
    public static get EXPAND_MORE(): string {
        if (!this._EXPAND_MORE) {
            this._EXPAND_MORE = 'M15.88 9.29L12 13.17 8.12 9.29c-.39-.39-1.02-.39-1.41 0-.39.39-.39 1.02 0 1.41l4.59 4.59c.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41-.39-.38-1.03-.39-1.42 0z';
        }
        return this._EXPAND_MORE;
    }

    private static _EXPAND_LESS: string;
    public static get EXPAND_LESS(): string {
        if (!this._EXPAND_LESS) {
            this._EXPAND_LESS = 'M11.29 8.71L6.7 13.3c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 10.83l3.88 3.88c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L12.7 8.71c-.38-.39-1.02-.39-1.41 0z';
        }
        return this._EXPAND_LESS;
    }
}
