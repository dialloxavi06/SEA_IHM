import { vueThemeEdit } from "./class_abonnement_Theme.js";
vueThemeEdit.init(APIpageWeb.params, { btn_abonnement_true_modifi: document.querySelector('[id=btn_abonnement_true_modifi]'),
    btn_abonnement_false_modifi: document.querySelector('[id=btn_abonnement_false_modifi]'),
    btn_abonnement_ajouter_modifi: document.querySelector('[id=btn_abonnement_ajouter_modifi]'),
    btn_abonnement_modifier_modifi: document.querySelector('[id=btn_abonnement_modifier_modifi]'),
    btn_abonnement_supprimer_modifi: document.querySelector('[id=btn_abonnement_supprimer_modifi]'),
    btn_abonnement_valider_modifi: document.querySelector('[id=btn_abonnement_valider_modifi]'),
    edtQte: document.querySelector('[id=affich_prix_total_modifi]'),
    btn_abonnement_annuler_modifi: document.querySelector('[id=btn_abonnement_annuler_modifi]'),
    version_papier_modifi: document.querySelector('[id=version_papier_modifi]'),
    select_theme_modifi: document.querySelector('[id=select_theme_modifi]'),
    table_modifi: document.querySelector('[id=numero_adherent_error]')
});
vueThemeEdit.form.btn_abonnement_valider_modifi.addEventListener('click', () => { vueThemeEdit.valider("abonnement-detail", "table_modifi"); });
vueThemeEdit.form.btn_abonnement_annuler_modifi.addEventListener('click', () => { vueThemeEdit.annuler("abonnement-detail", 'table_modifi'); });
//# sourceMappingURL=mon_theme.js.map