import { ImageElement } from 'enta';

export default class AvatarImage extends ImageElement {
    public constructor(url = '', name = '') {
        super();
        this.name = 'AvatarImage';
        this.size(80, 80);
        this.source = url;
        this.objectFit = 'cover';
        this.cornerSize = 40;
        this.clip = 'hidden';
        this.alt = name;
    }
}
customElements.define('avatar-image', AvatarImage);
