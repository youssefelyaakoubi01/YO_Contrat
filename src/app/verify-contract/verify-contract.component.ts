import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-contract',
  templateUrl: './verify-contract.component.html',
  styleUrls: ['./verify-contract.component.css']
})
export class VerifyContractComponent implements OnInit {
  
   
  resultat:any = null ;
  public verifyGroup!: FormGroup;
  Type_de_Contrat:any = null;
  Temps_de_travail_hebdomadaire_etat:any= null;
  Salaire_minimal_etat :any=null;
  Conges_annuels_etat :any =null;
  Preavis_etat:any = null;
  click_btn=false;
  cdi_legal =  {
    Type_de_Contrat: "",
    Temps_de_travail_hebdomadaire: 44,
    Salaire_minimal: 3000,
    Conges_annuels: 18,
    Preavis: 2,
    
}
 
  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.verifyGroup = new FormGroup({
      contrat_Fichier : new FormControl("",Validators.required)
    })
  }


  verify_contract(resultat:any){
    
   if( resultat.Temps_de_travail_hebdomadaire <= this.cdi_legal.Temps_de_travail_hebdomadaire   ){
      this.Temps_de_travail_hebdomadaire_etat = 1;
   }else {
    this.Temps_de_travail_hebdomadaire_etat = 0;
   }
   if( resultat.Salaire_minimal >= this.cdi_legal.Salaire_minimal  ){
      this.Salaire_minimal_etat = 1;
   }else {
    this.Salaire_minimal_etat = 0;
   }
   if( resultat.Conges_annuels >= this.cdi_legal.Conges_annuels   ){
      this.Conges_annuels_etat = 1;
   }else {
    this.Conges_annuels_etat = 0;
   }

   if( resultat.Preavis >= this.cdi_legal.Preavis   ){
      this.Preavis_etat = 1;
   }else {
    this.Preavis_etat = 0;
   }


  }
  onFileSelected(event: any) {
    this.click_btn=true;
    this.resultat=null;
    const file: File = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('pdfFile', file, file.name);

    this.http.post('http://localhost:3000/verifier_contrat', formData)
      .subscribe(response => {
      if(response){
        
        
        console.log(response);
        
        this.resultat = response;
        this.resultat = this.resultat.objet;

        
        console.log(this.resultat);
        
        this.verify_contract(this.resultat)
      }
     
        
        // Gérez la réponse du serveur ici
      });
  }
  attendre_fonction(){
    this.click_btn=true;
  
  }

}
