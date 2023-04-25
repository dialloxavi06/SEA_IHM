import { LesAbonnements } from "../modele/data_abonnement";
class VueListeAbo {
    constructor() {
        // rien mettre
    }
    get form() { return this._form; }
    get data() { return this._data; }
    get grille() { return this._grille; }
    init(form) {
        this._form = form;
        this.form.partieAbonnementEdit.hidden = true;
        this._grille = new GrilleTabulaire;
        this._data = [];
        this._form = form;
        const lesAbon = new LesAbonnements;
        this._data = lesAbon.listAll();
        // this.form.tableAbonnementListe.textContent = 'Liste des abonnements';
        this._grille = APIpageWeb.showArray(this.form.tableAbonnementListe.id, this._data, 'abon_num', true);
    }
    afficherClick(nomFichierHTML, idConteneur) {
        if (this._grille.getIdSelect() !== "") { // est-ce qu'une ligne est sélectionnée dans le tableau ?
            const chaine = '?affi&' + encodeURIComponent(this._grille.getIdSelect());
            // affichage 'affi' du détail de la salle sélectionnée 'id' 
            APIpageWeb.showModal(nomFichierHTML + chaine, idConteneur);
        }
    }
    modifierClick(nomFichierHTML, idConteneur) {
        if (this._grille.getIdSelect() !== "") { // est-ce qu'une ligne est sélectionnée dans le tableau ?
            const chaine = '?modif&' + encodeURIComponent(this._grille.getIdSelect());
            // affichage avec modifications autorisées 'modif' du détail de la salle sélectionnée 'id'
            APIpageWeb.showModal(nomFichierHTML + chaine, idConteneur);
        }
    }
    ajouterClick(nomFichierHTML, idConteneur) {
        const chaine = '?ajout&'; // ajout 'ajout' d'un nouvel album ==> id vide 
        APIpageWeb.showModal(nomFichierHTML + chaine, idConteneur);
    }
    supprimerClick() {
        if (this._grille.getIdSelect() !== "") {
            APIpageWeb.confirmation("Suppression salle", "Confirmez-vous la suppression de la salle " + this._grille.getIdSelect(), VueListeAbo, "supprimeambonnement()");
        }
    }
    afficherAjoutAbonnement() {
        this.form.partieAbonnementEdit.hidden = false;
    }
    ajouterabonnement() {
        let numAbon = this.form.edtNumeroAbonnement.value;
        let DateAbonnement = this.form.edtDateAbonnement.value;
        let commenAbon = this.form.edtCommentaire.value;
        let numAdh = this.form.edtNumeroAbonnement.value;
        let table = this.form.tableAbonnementListe;
        let newrow = table.insertRow();
        let numcell = newrow.insertCell();
        let lecell = newrow.insertCell();
        let adherentcell = newrow.insertCell();
        let CSPcell = newrow.insertCell();
        let adhesioncell = newrow.insertCell();
        let montcell = newrow.insertCell();
        numcell.innerHTML = numAdh;
        lecell.innerHTML = DateAbonnement;
        adherentcell.innerHTML = DateAbonnement;
        lecell.innerHTML = commenAbon;
        CSPcell.innerHTML = numAdh;
        adhesioncell.innerHTML = commenAbon;
        numcell.innerHTML = numAdh;
        montcell.innerHTML = numAdh;
        console.log(numAbon);
        console.log(DateAbonnement);
        console.log(commenAbon);
        console.log(numAdh);
    }
}
let VueListe = new VueListeAbo;
export { VueListe };
//# sourceMappingURL=class_abonnement_liste.js.map