angular.module('app').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('de', {"English":"Englisch","French":"Französisch","German":"Deutsch","Home":"Heim","Italian":"Italienisch","Page 1":"Seite 1","Page 2":"Seite 2","This is home!!":"Das ist Home!!","This is page 1!!":"Das ist Seite 1!!","This is page 2!!":"Das ist Seite 2!!","Translate POC":"Übersetzung POC"});
    gettextCatalog.setStrings('en', {"English":"English","French":"French","German":"German","Home":"Home","Italian":"Italian","Page 1":"Page 1","Page 2":"Page 2","This is home!!":"This is home!!","This is page 1!!":"This is page 1!!","This is page 2!!":"This is page 2!!","Translate POC":"Translate POC"});
    gettextCatalog.setStrings('fr', {"English":"Anglais","French":"Français","German":"Allemand","Home":"Maison","Italian":"Italien","Page 1":"Page 1","Page 2":"Page 2","This is home!!":"ceci home!!","This is page 1!!":"ceci page 1!!","This is page 2!!":"ceci page 2!!","Translate POC":"Traduction POC"});
    gettextCatalog.setStrings('it', {"English":"Inglese","French":"Francese","German":"Tedesco","Home":"Casa","Italian":"Italiano","Page 1":"Pagina 1","Page 2":"Pagina 2","This is home!!":"questo e home!!","This is page 1!!":"questo e page 1!!","This is page 2!!":"questo e page 2!!","Translate POC":"Traduzione POC"});
/* jshint +W100 */
}]);