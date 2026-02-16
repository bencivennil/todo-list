# Next.js - Mini TODO demo

Breve descrizione
- Repo: installazione base di Next.js.
- page.tsx: contiene una pagina Home con un componente che attualmente mostra un button che lancia un `alert()` JavaScript.
- API route di esempio: una rotta (es. `/api/todos`) che restituisce una Promise con un array di todo. Esempio di payload:
```json
[
    { id: 1, title: "Task 1", completed: false, category: "work" },
    { id: 2, title: "Task 2", completed: true, category: "personal" },
    { id: 3, title: "Task 3", completed: false, category: "work" },
    { id: 4, title: "Task 4", completed: false, category: "work" },
    { id: 5, title: "Task 5", completed: false, category: "personal" },
    { id: 6, title: "Task 6", completed: false, category: "personal" },
    { id: 7, title: "Task 7", completed: false, category: "personal" },
    { id: 8, title: "Task 8", completed: false, category: "work" },
    { id: 9, title: "Task 9", completed: false, category: "work" },
    { id: 10, title: "Task 10", completed: false, category: "work" },
    { id: 11, title: "Task 11", completed: false, category: "personal" },
    { id: 12, title: "Task 12", completed: false, category: "work" },
]
```
---

## Task 1 — Fetch e gestione stati
User story
- Come utente, voglio che il componente esegua una fetch a `/api/todos` e mostri la lista, in modo da vedere i miei todo.

Criteri di accettazione
- Il componente esegue una chiamata a `/api/todos` al click del button.
- UI gestisce e mostra chiaramente tre stati:
  - loading: visualizza un indicatore (es. spinner o testo "Loading...").
  - success: mostra la lista di todo (title + stato completed).
  - error: mostra un messaggio leggibile (eventualmente un modo per ritentare).
- I todo sono tipizzati nel file types/todo.ts

---

## Task 2 — Split in due componenti con caricamento indipendente
User story
- Come utente, voglio poter caricare separatamente i todo per categoria `work` e `personal`, in modo da controllare i dati per ciascuna vista.

Criteri di accettazione
- La pagina Home ospita due componenti figlio distinti:
  - `<WorkTodos />` — mostra solo i todo con `category === "work"`.
  - `<PersonalTodos />` — mostra solo i todo con `category === "personal"`.
- In ciascun componente:
  - Deve esserci un button che triggera il caricamento dei dati per quella categoria (quindi due button separati). La fetch deve partire solo quando il button viene premuto.
  - Ogni componente gestisce i propri stati: loading, success, error (indipendenti l'uno dall'altro).
  - Se la chiamata fallisce, mostra messaggio di errore e possibilità di retry solo per quel componente.

Suggerimenti tecnici
- Valuta debouncing e prevenzione di chiamate duplicate se il button viene premuto ripetutamente molto velocemente.

---

## Task 3 — Split con fetch all'atterraggio e rendering sempre attivo
User story
- Come utente, voglio che i dati vengano caricati automaticamente all'atterraggio nella Home e che i due componenti figlio mostrino sempre la lista della propria categoria, senza dover premere bottoni.

Criteri di accettazione
- Il fetch dei todo viene eseguito una sola volta all'atterraggio nella Home.
- I due componenti (`<WorkTodos />` e `<PersonalTodos />`) mostrano sempre la lista filtrata per categoria.
- Non ci sono bottoni per il caricamento.
- Gestione degli stati globali:
  - Mentre i dati globali sono in loading, mostra uno stato appropriato nella Home (es. skeleton o spinner).
  - In caso di errore nel fetch globale, la Home mostra un errore coerente e possibilità di retry (che rilancia la fetch globale).
- Evita fetch duplicati: la chiamata deve eseguirsi una sola volta per atterraggio.

---
