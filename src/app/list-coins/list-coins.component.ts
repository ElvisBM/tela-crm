import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.scss'],
  host: {class:'container-fluid'}
})
export class ListCoinsComponent implements OnInit{
  listCoins: String[] = [];
  constructor(private conexaoApi: HttpClient) {}

  ngOnInit(): void {
    this.conexaoApi.get('https://api.coinmarketcap.com/v1/ticker/').subscribe(data => {
      this.listCoins = data;
  });
  }

}
