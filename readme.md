# Teknisk dokumentation – [Tema 8]

## Om projektet

I den sidste del af tema 8 har vi fået til opgave at arbejde i teams omkring udviklingen af et dynamisk website. Vi skal arbejde med Rest API, (fetch) data i JSON-format, lave dynamisk liste view og single view med denne data samt en præsentabel landings page.

Sitet består af flere sider, hvor brugeren kan:

- se en liste med indhold
- klikke sig videre til en detaljeside
- bruge filtrering

## Links

- GitHub repository: [indsæt link]
- GitHub Pages: [indsæt link]
- Figma: [indsæt link]
- Scrum: [indsæt link]

---

## Projektstruktur

Projektet er opdelt i HTML, CSS og JavaScript-filer.

```
figgys/
├── index.html
├── categories.html
├── product-list.html
├── product.html
├── css/
    ├── index.css
    ├── categories.css
    ├── product-list.css
    ├── product.css
│   └── style.css
├── js/
│   ├── index.js
│   ├── categories.js
│   ├── product-list.js
│   └── product.js
└── README.md
```

### Filbeskrivelser

- **index.html** – forsiden
- **product-list.html** – viser en liste med data fra API'et
- **product.html** – viser detaljer om en valgt vare
- **style.css** – styrer delte designs
- **index.css, categories.css, product-list.css, product.css** – styrer hver sin sides design
- **JavaScript-filer** – styrer det dynamiske indhold på de forskellige sider

---

## Hvordan koden fungerer

Vi har opdelt JavaScript og Css, så hver side har sine egne filer.

<!-- ### index.js

Bruges på forsiden.
Her bliver indhold vist dynamisk.

### product-list.js

Henter data fra Rest API'et og viser en liste med produkter på siden.

**Flow:**

1. Siden loader
2. JavaScript kører
3. Data hentes fra Rest API
4. Data bliver gennemgået med loop
5. HTML bliver indsat i DOM'en
6. Brugeren kan klikke på en vare -->

<!-- ### product-list.js

Bruges til detaljesiden. Den læser et id fra URL'en og henter derefter det rigtige produkt fra Rest API'et.

I stedet for at lave én side per produkt, bruger vi ét id i URL'en til at vise det rigtige indhold.

--- -->

## Navngivning

Vi har navngivet vores filer, variabler og funktioner så de så tydeligt som muligt er selvforklarende.

### Eksempler på variabler

```javascript
const listContainer;
const productId;
const productURL;
```

### Eksempler på funktioner

```javascript
showProducts();
myFunction();
getData();
if();
```

Vi har brugt camelCase i JavaScript, fordi det gør koden mere ensartet og lettere at læse.

---

## Data og JSON-struktur

Vi henter data fra et API i JSON-format.

**Et objekt kan fx se sådan ud:**

```json
{
  "id": 16,
  "title": "Apple",
  "description": "Fresh and crisp apples, perfect for snacking or incorporating into various recipes.",
  "category": "groceries",
  "price": 1.99,
  "discountPercentage": 12.62,
  "rating": 4.19,
  "stock": 8,
  "tags": "fruits"
}
```

### Felter vi bruger

- **id** – bruges til at sende brugeren videre til detaljesiden
- **title** – Varenavn
- **description** – beskrivelse af vare
- **category** – produktkategorier (fx protein, drinks, produce & essentials)
- **thumbnail** – vare billede

---

## Git og branches

Vi har brugt GitHub til at samarbejde om projektet.

Vi har arbejdet med branches, så vi ikke sad og ændrede i det samme på samme tid.
Der er nogle steder hvor navnene har været lidt "hurtige", da vi har været presset på tid.

### Eksempler på branches

- `api added`
- `category img added`
- `grundlæggende byggeblokke til product cards`
- `back button`

### Workflow

1. Lave en branch med feature-navn
2. Kode en feature
3. Committe ændringer
4. Pushe til GitHub
5. Merge til main

---

## Bæredygtighed

Vi har tænkt bæredygtighed ind i projektet gennem vores valg af teknologier, kode og visuelle elementer.

**Tiltag:**

- Ingen videoer
- Ingen tunge frameworks
- Genbruge af kode
- Optimerede billeder

---

<!-- ## Udfordringer undervejs

En af vores udfordringer var at få data fra Rest API’et vist korrekt på siderne.
Det var også lidt svært at få id med videre i URL’en til detaljesiden.

**Løsninger:**

- Console.logge data undervejs
- Teste fetch-kald separat
- Bruge URLSearchParams
- Dele opgaverne mere tydeligt i gruppen

--- -->

## Mulige forbedringer

Hvis vi skulle arbejde videre med projektet, kunne vi forbedre det ved at tilføje:

- Søgefunktion
- Error handling
- Form
- Tilføj til kurv funktion
- Lave recipe siden

---

## Gruppemedlemmer

- Erik Fjord Lyngstadaas
- Laurits-Emil Larsen
- Caroline Sparkov Hayes
- Monique Carvalho Skarby
