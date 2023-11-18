import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContratService {

  public contrats = [
    {numero:1,type:"CDI",etat:"ilégal",heurs_hebdomadaire:50},
    {numero:2,type:"CDD",etat:"légal",heurs_hebdomadaire:39},
    {numero:3,type:"CDI",etat:"ilégal",heurs_hebdomadaire:55},
    {numero:4,type:"CDD",etat:"légal",heurs_hebdomadaire:40}
  ];

  constructor() { }
}
