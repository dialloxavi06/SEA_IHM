import { VueListe } from "./class_abonnement_liste.js";
VueListe.init({ tableAbonnementListe: document.querySelector('[id=table_abonnement_liste]'),
    btnAbonnementDetail: document.querySelector('[id=btn_abonnement_detail]'),
    btnAbonnementAjouter: document.querySelector('[id=btn_abonnement_ajouter]'),
    btnAbonnementModifier: document.querySelector('[id=btn_abonnement_modifier]'),
    btnAbonnementSupprimer: document.querySelector('[id=btn_abonnement_supprimer]'),
    divTitreAbonnementEdit: document.querySelector('[id=div_titre_abonnement_edit]'),
    edtNumeroAbonnement: document.querySelector('[id=edt_numero_abonnement]'),
    edtDateAbonnement: document.querySelector('[id=edt_date_abonnement]'),
    edtCommentaire: document.querySelector('[id=edt_commentaire]'),
    numeroAdherentError: document.querySelector('[id=numero_adherent_error]'),
    edtNumeroAdherent: document.querySelector('[id=edt_numero_adherent]'),
    numeroAdhesionError: document.querySelector('[id=numero_adhesion_error]'),
    partieAbonnementEdit: document.querySelector('[id=partie_abonnement_edit]'),
    btnAbonnementValider: document.querySelector('[id=btn_abonnement_valider]')
    /* , chkMinialbum : document.querySelector('[id=chk_minialbum]')
    , btnValider : document.querySelector('[id=btn_valider]')
    , btnAnnuler : document.querySelector('[id=btn_annuler]')
    , choixPlages : document.querySelector('[id=choix_Plages]')
    , divError : document.querySelector('[id=div_error]') */
});
VueListe.form.btnAbonnementDetail.addEventListener('click', () => { VueListe.afficherClick("abonnement-liste", "partie_abonnement_edit"); });
VueListe.form.btnAbonnementAjouter.addEventListener('click', () => { VueListe.ajouterClick("abonnement-liste", 'partie_abonnement_edit'); });
VueListe.form.btnAbonnementModifier.addEventListener('click', () => { VueListe.afficherClick("abonnement-liste", "partie_abonnement_edit"); });
VueListe.form.btnAbonnementSupprimer.addEventListener('click', () => { VueListe.supprimerClick(); });
//# sourceMappingURL=ma_liste.js.map