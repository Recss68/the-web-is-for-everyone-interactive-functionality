# DROP & HEAL

![image](https://github.com/user-attachments/assets/114de9b0-3f2f-4c04-ba3d-8a8813728712)

## Projectdoel 🚀 
In dit project lag de focus op het tonen van de opdrachten in de overzicht en dat de gebruiker

## Inleiding 

Rouw is een diep persoonlijke en vaak complexe ervaring die varieert van persoon tot persoon. Het rouwproces kent geen vast tijdspad of gestandaardiseerde aanpak en de intensiteit en duur van het rouwproces kunnen sterk verschillen. In onze hedendaagse samenleving krijgen veel jongvolwassenen te maken met rouw, maar vaak ontbreekt het aan toegankelijke en begrijpelijke ondersteuning die aansluit bij hun specifieke levensfase en persoonlijke behoeften. Drop & Heal streeft ernaar deze leemte te vullen met een innovatieve benadering die technologie gebruikt om een gepersonaliseerd ondersteuningsprogramma te bieden dat zich aanpast aan de unieke behoeften van elke gebruiker. Door gebruik te maken van een analyse, kan de app de specifieke rouwtaak waarin de gebruiker zich bevindt vast stellen en de gewenste hulp bieden.

## Gebruik 📚

Bij Drop & Heal krijgen de gebruikers de mogelijkheid om met elkaar te connecten, door berichten te plaatsen in een community pagina waar personen hun persoonlijke ervaring kunnen delen. Hierdoor weten gebruikers ook dat ze niet alleen zijn en kunnen kijken hoe andere personen hier doorheen zijn gekomen. Ik heb een community pagina gemaakt waar een persoon kan kiezen of ze alleen de berichten willen lezen of dat ze zelf ook wat willen delen. Ook is er voor duidelijkheid een Success State toegevoegd zodat de gebruiker kan ziet dat er daadwerkelijk ook wat gebeurt.  
[Bekijk de live site](https://the-web-is-for-everyone-interactive-875r.onrender.com/)

## Kenmerken 📚
* Er wordt gebruik gemaakt van Directus, hier komt alle data te staan en wordt er data opgehaald die vervolgens getoond kan worden in de Front End. Om data op te halen en te posten in de database is er gebruikt gemaakt van de [GET](https://github.com/Recss68/the-web-is-for-everyone-interactive-functionality/blob/8717c18577b8f773318d578878c7857107f21812/server.js#L93-L101) en [POST](https://github.com/Recss68/the-web-is-for-everyone-interactive-functionality/blob/8717c18577b8f773318d578878c7857107f21812/server.js#L103-L117) methodes.
* De [POST](https://github.com/Recss68/the-web-is-for-everyone-interactive-functionality/blob/8717c18577b8f773318d578878c7857107f21812/server.js#L103-L117) wordt verwerkt door een Formulier, de body data ( invoer van gebruiker ) wordt vervolgens opgehaald via de server file en plaatst dit dan in de database, waar we vervolgens doormiddel van de [GET methode](https://github.com/Recss68/the-web-is-for-everyone-interactive-functionality/blob/8717c18577b8f773318d578878c7857107f21812/server.js#L93-L101) onze data kunnen ophalen, dit geven we dan door aan de render om duidelijk te maken waar het naar toe gaat. Tot slot tonen we met gebruik van liquid in een herhalend structuur op de pagina.

## Ontwerpkeuzes ✏️



## Progressive Enhancement


## Instalatie
In dit project wordt gebruik gemaakt van Express JS. 

1. Fork dit project en open het in VS Code.
2. Open de terminal en voer `npm install` uit om alle benodigdheden te installeren.
3. Nu kun je in de terminal de `npm run` command executen en start de live server. 
4. Open je browser en open de volgende link http://localhost:8000 om het project te bekijken.
