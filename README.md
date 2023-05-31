# Strajk

### 1. Som användare vill jag kunna boka datum och tid samt ange antal spelare så att jag kan reservera 1 eller flera baner i bowlinghallen.
#### Acceptanskriterier:
- Bokningsformuläret skall visa fyra inmatningsfält.
- Det skall finnas ett inmatningsfält där användaren kan fylla i datum.
- Det skall finnas ett inmatningsfält där användaren kan fylla i tid.
- Det skall finnas ett inmatningsfält där användaren kan fylla i antal spelare.
- Det skall finnas ett inmatningsfält där användaren kan fylla i antal banor.
- Det skall vara möjligt att göra en komplett bokning.

#### Acceptanskriterier felhantering:
- Visa felmeddelande om användaren försöker göra en tom bokning eller glömmer att fylla i något av de obligatoriska fälten.

### 2. Som användare vill jag kunna välja skostorlek för varje spelare så varje spelare får skor som passar.
#### Acceptanskriterier:
- Visa ett nytt inputfält för skostorlek när man trycker på "+"-knappen.
- Möjliggör att det går att fylla i skostorleksinmatningsfältet.

#### Acceptanskriterier felhantering:
- Visa meddelande till användaren om antalet skostorlekar inte matchar antalet spelare.

### 3. Som användare vill jag kunna ta bort ett fält för skostorlek om jag råkade klicka i ett för mycket så jag inte boka skor i onödan.

#### Acceptanskriterier:
- Visa en "Ta bort"-knapp bredvid varje skostorleksfält.
- Ta bort motsvarande skostorleksfält när man trycker på "Ta bort"-knappen.

### 4. Som användare vill jag kunna skicka iväg min reservation och få tillbaka ett ett bokningsnummer och totalsumma så jag vet hur mycket jag ska betala. (120 kr / person + 100 kr / bana).

#### Acceptanskriterier: 
- Visa och beräkna den totala summan för bokningen baserat på antal personer och antal banor.
- Det skall visas bokningsinformationen + bokningsnummer som skall innehålla mer än 9 tecken.
- Inmatningsfälten skall ha attributet disabled (inaktiverade).

#### Acceptanskriterier felhantering:
- Det skall gå att återställa bokningsinformationen.

### 5. Som användare vill jag kunna navigera mellan boknings-och bekräftelsevyn.
Acceptanskriterier:
- Visa en navigationsikon.
- Möjliggör att trycka på navigationsikonen.
- Gör det möjligt att navigera korrekt mellan boknings- och bekräftelsevyn.

