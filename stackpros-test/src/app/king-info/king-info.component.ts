import { Component, OnInit } from '@angular/core';
import { GetKingInfoService } from '../get-king-info.service'

@Component({
  selector: 'app-king-info',
  templateUrl: './king-info.component.html',
  styleUrls: ['./king-info.component.scss']
})
export class KingInfoComponent implements OnInit {

  //class properties
  kingInfo = [];
  constructor(private kingInfoService: GetKingInfoService) { }
  
  ngOnInit() {
    // Fetch data from get-king-info service
    this.kingInfoService.data()
      .subscribe(kingInfo => this.updateArray(kingInfo));
            
  }

    //class method
  updateArray(kingInfo){
        
    //exclude kings form "House of Wessex"
        this.kingInfo = kingInfo.filter(function (el) {
        return el.hse !== "House of Wessex";
      });

      //reverse first name
      for (var i = 0; i < this.kingInfo.length; i++){
        this.kingInfo[i].nm = this.kingInfo[i].nm.split(' ')[0].split('').reverse().join('');
        }

      //arrange kings alphabetically
      this.kingInfo.sort((a, b) => a.nm.localeCompare(b.nm));  
      
      // acronym for Country name
      for (var i = 0; i < this.kingInfo.length; i++){
        this.kingInfo[i].cty = this.kingInfo[i].cty.replace('United Kingdom', 'UK');
        }

  }

}
