import { Component, OnInit } from '@angular/core';
import { GetKingInfoService } from '../get-king-info.service'

@Component({
  selector: 'app-king-info',
  templateUrl: './king-info.component.html',
  styleUrls: ['./king-info.component.scss']
})
export class KingInfoComponent implements OnInit {

  //class properties
  posts = [];
  constructor(private postsService: GetKingInfoService) { }
  
  ngOnInit() {
    // Retrieve data from data service
    this.postsService.data().subscribe(posts => this.updateArray(posts));
            
  }

    //class method
  updateArray(posts){
        
    //filter houses
        this.posts = posts.filter(function (el) {
        return el.hse !== "House of Wessex";
      });

      //arrange alphabetically
      this.posts.sort((a, b) => a.nm.localeCompare(b.nm));

      //acronym for city and reverse first name
      for (var i = 0; i < this.posts.length; i++){
        this.posts[i].cty = this.posts[i].cty.replace('United Kingdom', 'UK');
        this.posts[i].nm = this.posts[i].nm.split(' ')[0].split('').reverse().join('');
        }


  }

}
