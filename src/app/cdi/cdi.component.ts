import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as html2pdf from 'html2pdf.js';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import { ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-cdi',
  templateUrl: './cdi.component.html',
  styleUrls: ['./cdi.component.css'],
})
export class CdiComponent implements OnInit {
  public user!: any;
  public cdiForm!: FormGroup;
  public choix = 0;
  @ViewChild('content') content!: ElementRef;
  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    this.cdiForm = new FormGroup({
      /* Informations sur l'employée */
      /*
        Nom de l'employé
        Date de naissance de l'employé
        Adresse de l'employé
      */

      civilite_employe: new FormControl(''),
      nom_employe: new FormControl(this.user.lastName),
      prenom_employe: new FormControl(this.user.firstName),
      email_employe: new FormControl(this.user.email),
      date_naissance_employe: new FormControl('', Validators.required),
      lieu_naissance_employe: new FormControl('', Validators.required),
      adresse_employe: new FormControl('', Validators.required),
      nationalite_employe: new FormControl('', Validators.required),

      /* Informations sur l'employeur */
      /*
              Informations sur l'employeur :
                - Nom de l'entreprise
                - Nom du représentant de l'entreprise
                - Poste du représentant
                - Adresse du siège social
                
            */

      nom_entreprise: new FormControl(''),
      nom_representant_entreprise: new FormControl(),
      poste_du_representant: new FormControl(),
      adresse_du_siege_social: new FormControl(),
      /** fin */

      /* Détails du contrat: */
      /*
      - Poste de l'employé
      - Description des responsabilités et tâches de l'employé
      - Lieu de travail
      - Rémunération (montant et fréquence)
      - Nombre d'heures de travail par semaine
      - Répartition des heures de travail (par jour, par semaine)
      - Nombre de jours de congé par an
      - Période de préavis pour la résiliation du contrat
      */

      poste_de_employe: new FormControl('', Validators.required),
      description_des_responsabilites_taches_de_employe: new FormControl(
        '',
        Validators.required
      ),
      lieu_de_travail: new FormControl('', Validators.required),
      remuneration_montant: new FormControl('', Validators.required),
      remuneration_frequence: new FormControl('', Validators.required),
      temps_hebdomadaire: new FormControl('', Validators.required),
      repartition_des_heures_de_travail: new FormControl(
        '',
        Validators.required
      ),
      nombre_de_jours_de_conge_par_an: new FormControl('', Validators.required),
      periode_de_preavis: new FormControl('', Validators.required),
      date_debut_employe: new FormControl('', Validators.required),
    });
  }
  suivant(num: any) {
    this.choix = num;
  }
  afficher() {
    this.choix = 0;
    alert(JSON.stringify(this.cdiForm.value));
  }

  public downloadPDF(): void {
    var element = document.getElementById('cdi_contenu');
    const opt = {
      filename: 'CDI_contrat.pdf',
      margin: 10,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 10 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // New Promise-based usage:
    html2pdf().from(element).set(opt).save();
  }

}
