import { Component } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent {
    
  videos = [
    { thumbnail: 'assets/img/media/news media/teksacademymedia8.png', url: 'https://youtu.be/gEI9_5P5DBw' },
    // Add more video data
  ];

  showVideoPopup = false;
  currentVideoUrl = '';

  openVideoPopup(videoUrl: string) {
    this.currentVideoUrl = videoUrl;
    this.showVideoPopup = true;
  }

  closeVideoPopup() {
    this.currentVideoUrl = '';
    this.showVideoPopup = false;
  }


  activeTab: string = 'influencers';
  ngOnInit(): void {
  }



  public _influencers: {src: string, caption: string, thumb: string}[] = [];
  public _album: {src: string, caption: string, thumb: string}[] = [];
  
  constructor(public _lightbox: Lightbox) {

      for(let i = 1; i<=12; i++){
        const src = 'assets/img/media/influencers/influencers' + i + '.jpg';
        const caption = '';
        const thumb = 'assets/img/media/influencers/influencers' + i + '.jpg';
        const influencers = {
            src: src,
            caption: caption,
            thumb: thumb
        }
        this._influencers.push(influencers);
      }

      for (let i = 1; i <= 12; i++) {
          const src = 'assets/img/media/news media/newsmedia' + i + '.jpg';
          const caption = ''
          const thumb = 'assets/img/media/news media/newsmedia' + i + '.jpg';
          const album = {
              src: src,
              caption: caption,
              thumb: thumb
          };
          this._album.push(album);
      }
  }


  influencersOpen(index: number): void{
    this._lightbox.open(this._influencers, index); 
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
