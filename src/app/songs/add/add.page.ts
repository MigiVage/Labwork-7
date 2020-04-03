/*
Eemil Hartikainen 1800699
Mikko Vauhkonen 1800691
Matias Kohanevic 1800715
*/

import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'; // Import Router for Navigation
import { SongService } from '../../services/song.service'; // Import SongService

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  // Empty song object
  song: Song = { title: '', released: 2019, singer: '', userId: '' };
  errorMessage: string;
  // Import dependencies
  constructor(private router: Router, private songService: SongService) { }

  ngOnInit() {
  }

  add() {
    // Simple validation
    if (this.song.title && this.song.title.length > 2 &&
      this.song.singer && this.song.singer.length > 2) {
      // Save song to firebase
      this.songService.add_SongInfo(this.song);
      // Reset values after saving
      this.song = { title: '', released: 2019, singer: '', userId: '' };
      this.router.navigate(['tabs', 'songs']); // Redirect back to songs page
    } else {
      this.errorMessage = 'Song title and singer name can not be empty!';
    }

  }
}
