## Posten sporingsapp

Laget i React. Kan kjøres lokalt (npm start - http://localhost:3000/).

Koden ligger hovedsakelig i App.js. Input feltet og knappen sender ikke noe output. 

Fant ikke helt ut av hvordan jeg skulle bruke api kallet som jeg fant i den gamle sporingsløsningen (https://tracking.bring.com/api/v2/tracking.json). Valgte å bruke et api kall jeg fant her https://developer.bring.com/api/tracking/ med ferdig utfylt input (https://api.bring.com/tracking/api/v2/tracking.json?q=TESTPACKAGEATPICKUPPOINT). Bruker samme JSON-obkjet så vidt jeg kan se. Tok utgangspunkt i at jeg skulle displaye den samme dataen.

Den ene stringen skulle vist en link, men fikk det ikke til å virke. Mangler Serialization?