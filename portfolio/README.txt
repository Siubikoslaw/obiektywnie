JAK DODAĆ NOWĄ SESJĘ DO PORTFOLIO
==================================

1. Stwórz nowy folder w tym katalogu (portfolio/), np.:
   portfolio/slub-kasia-marcin/

2. Wrzuć do niego zdjęcia, nazwane po kolei liczbami:
   1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg
   (wszystkie zdjęcia w jednej sesji muszą mieć to samo rozszerzenie —
   jeśli eksportujesz z Lightrooma/telefonu jako .jpg, użyj .jpg;
   jeśli masz .webp, użyj .webp)

3. Otwórz plik portfolio/sessions.json i dodaj JEDEN wpis na końcu listy, np.:

   {
       "id": "slub-kasia-marcin",
       "title": "Ślub Kasi i Marcina",
       "category": "sluby",
       "count": 5,
       "ext": "jpg"
   }

   Pola:
   - id       — musi być IDENTYCZNE z nazwą folderu z kroku 1
   - title    — nazwa sesji widoczna na stronie (nad zdjęciami)
   - category — jedna z: sluby / portrety / wydarzenia
                (to od tego zależy, w której sekcji się pojawi)
   - count    — ile zdjęć wrzuciłaś do tej sesji (np. 5)
   - ext      — rozszerzenie plików (jpg / webp / png)

   Pamiętaj o przecinku po poprzednim wpisie (}, przed nowym {).

4. Wrzuć cały folder portfolio/ (z nowym podfolderem i zaktualizowanym
   sessions.json) na serwer. To wszystko — zdjęcia pojawią się
   automatycznie na stronie portfolio.html, w odpowiedniej sekcji.

Nie trzeba nic zmieniać w plikach .html — cała galeria buduje się sama
na podstawie sessions.json.

PRZYKŁADOWE SESJE
==================
Foldery slub-przykladowy/, portret-przykladowy/ i wydarzenie-przykladowe/
to demo pokazujące jak to działa — użyto w nich zdjęć, które już są na
stronie. Możesz je śmiało usunąć (razem z ich wpisami w sessions.json),
gdy dodasz swoje prawdziwe sesje.
