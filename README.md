Jag har skapat en "Review" komponent som hämtar data från firestore. Du kan även skriva en egen kommentar
som läggs in i firestore under "/recensioner". Om du är inloggad som admin har du tillgång till att
redigera en vald recension samt ta bort den.

Något som tog en del extra tid att lösa var ett out of bounds error som jag stöter på när sista
recensionen i firebase tas bort, tack ock lov var lösningen enkel men det var en del huvudvärk
att få bukt med.

INSTRUKTIONER:
1. Testa att scrolla ner på sidan tills du ser "Recensioner", här kan du skriva en kommentar eller spola igenom de redan skrivna kommentarerna på hemsidan.
2. Prova att logga in med uppgifterna, komponenten kommer nu att ha en knapp "Edit" där du kan trycka för att redigera den kommentar du valt, eller helt enkelt bara ta bort den från databasen. 

Jag skapar här ett konto för dig, och med all respekt måste jag be dig att inte spränga all data vi har i luften.

INLOGG: 
email: test@test.test
password: namnet på kursen med stor bokstav i början och inget mellanrum
