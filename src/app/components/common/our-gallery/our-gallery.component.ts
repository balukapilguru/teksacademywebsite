import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-our-gallery',
  templateUrl: './our-gallery.component.html',
  styleUrls: ['./our-gallery.component.scss'],
})
export class OurGalleryComponent {
  public _album: { src: string; caption: string; thumb: string }[] = [];

  constructor(public _lightbox: Lightbox) {
    for (let i = 1; i <= 16; i++) {
      const src = 'assets/img/courses/gimg' + i + '.png';
      const caption = 'Image ' + i;
      const thumb = 'assets/img/courses/gimg' + i + '.png';
      const album = {
        src: src,
        caption: caption,
        thumb: thumb,
      };
      this._album.push(album);
    }
  }

  open(index: number): void {
    // open lightbox
    this._lightbox.open(this._album, index);
  }

  close(): void {
    // close lightbox programmatically
    this._lightbox.close();
  }
}
