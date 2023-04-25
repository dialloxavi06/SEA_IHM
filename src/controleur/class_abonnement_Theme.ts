// import {LesAdherents} from "../modele/data_adherent"
 import {UnTheme,LesThemesByAbonnement,TThemes, LesThemes, UnThemeByAbonnement} from "../modele/data_theme"
 

 type TStatutValeur = 'correct' | 'vide' | 'inconnu' | 'doublon'

type TAbonnemenTheme = {
    partie_abonnement_modifi: HTMLElement;
    edt_numéro_abonnement_modifi: HTMLInputElement;
    edt_date_abonnement_modifi: HTMLInputElement;
    edt_commentaire_modifi: HTMLInputElement;
    affich_prix_total_modifi: HTMLElement;
    adherant_info_modifi: HTMLElement;
    affich_numero_abonnement_modifi: HTMLElement;
    table_modifi: HTMLTableElement;
    select_theme_modifi:HTMLSelectElement
    version_papier_modifi: HTMLInputElement;
    btn_abonnement_true_modifi: HTMLInputElement;
    btn_abonnement_false_modifi: HTMLInputElement;
    btn_abonnement_ajouter_modifi: HTMLInputElement;
    btn_abonnement_modifier_modifi: HTMLInputElement;
    btn_abonnement_supprimer_modifi: HTMLInputElement;
    btn_abonnement_valider_modifi: HTMLInputElement;
    btn_abonnement_annuler_modifi: HTMLInputElement;
    }


class vueTheme {

 private _params : Tparams; 
 private _data : TThemes;
 private _form : TAbonnemenTheme
 private _erreur : {
    // tableau contenant les messages d'erreur pour chaque type d'erreur pour chaque zone de saisie à vérifier
    [key:string] : { statut : TStatutValeur, msg:{ [key in TStatutValeur] : string } } }
constructor() { // rien 
}
get form():TAbonnemenTheme { return this._form }
    


    initMsgErreur():void {
        // pour chaque champ à contrôler, création des 3 messages d'erreur + message pour correct 
        // avec chaîne vide si pas d'erreur générée pour un type d'erreur potentielle
        this._erreur = 
{
    select_theme_modifi: { statut :'vide', msg:{correct:""
        
    
        , vide:"Aucun theme choisi"
        ,inconnu:""
        ,doublon:""
        }}
        ,
        edtQte :
    {
            statut :'vide'
        , msg:{correct:""
        , vide:"Le nombre doit être un nombre entier supérieur à 0"
        ,inconnu:""
        ,doublon:""
            }
    }
}
        }


        init(params : Tparams, form :TAbonnemenTheme):void {
            this._data = {};

            this._params = params;

            this._form  = form;
             
            this.initMsgErreur();
             
            const ThemeByAbonnements = new LesThemes; if (this._params.statut === 'ajout') {
            this._data= ThemeByAbonnements.all();
            // tableau contenant les id des équipements dejà dans la salle
            const equiptsSalle : string[] = this._params.elts; for (let i in this._data) {
            const item : UnTheme = this._data[i];
            const id = item.themeNum;
            if (equiptsSalle.indexOf(id) === -1) { 
                // pas dans la liste des équipement déjà dans la salle
            this._form.select_theme_modifi.options.add(new Option(item.themeNum, id)); // text, value
         }
            } 
        }
            else { 
            // modification uniquement de l'abonnement possible
            const t = new LesThemes;
            const unTypabo : UnTheme = t.byThemeNum(this._params.id) ; 
            this.form.select_theme_modifi.options.add(new Option(unTypabo.themeLib, this._params.id));
            this.form.select_theme_modifi.selectedIndex = 0;
            this.form.select_theme_modifi.value = this._params.elts[0]; }
            }

            verifListeTheme():void {
                const err = this._erreur.listeEquipt 
                err.statut = "correct";
                const cible = this._form.select_theme_modifi; if (cible.value === "") {
                     err.statut = 'vide'
                   }
                }

                verifNbreTheme():void {
                    const err = this._erreur.edtQte
                    err.statut = "correct";
                    const valeur : string = this._form.select_theme_modifi.value;
                    if ( ! ( (Number.isInteger(Number(valeur))) && (Number(valeur)>0) ) ) {
                         err.statut = 'vide'
                       }
                    }

                    traiteErreur(uneErreur:{ statut : TStatutValeur, msg:{ [key in TStatutValeur] : string } }
                        ,zone : HTMLElement):boolean {
                        let correct = true;
                        zone.textContent ="";
                        if (uneErreur.statut !== "correct") { // non correct ==> erreur
                        if (uneErreur.msg[uneErreur.statut] !== '') { // erreur
                        zone.textContent = uneErreur.msg[uneErreur.statut];
                                correct = false;
                             }
                        }
                           return correct;
                        }
                        valider(fichierHTML:string, vue: vueTheme ) : void { let correct = true;
                            this.verifListeTheme();
                            this.verifNbreTheme();
                             
                            correct = this.traiteErreur(this._erreur.listeEquipt, this._form.partie_abonnement_modifi) && correct;
                            correct = this.traiteErreur(this._erreur.edtQte, this.form.partie_abonnement_modifi) && correct;
                             
                            if (correct) {
                            const lesTypabo = new LesThemes;
                            // ajout visuel de la ligne dans la grille tabulaire de la liste des équipements d'une salle
                            const inst = new LesThemes;
                            const unabo : UnTheme = inst.byThemeNum(this._form.select_theme_modifi.value);
                           
                           
                            const unTypabobytheme: UnThemeByAbonnement = new UnThemeByAbonnement(new UnTheme(unabo.themeNum, unabo.themeLib,
                                unabo.themeTarif), this._form.edt_commentaire_modifi.value);
                            } 

                            
                            this.annuler(fichierHTML)
                        }
                             
                            annuler(fichierHTML: string): void
                            { 
                                APIpageWeb.hide(fichierHTML);
                            }
                           
                        }

 let vueThemeEdit = new vueTheme;
 
export {vueThemeEdit}
export {vueTheme}
    