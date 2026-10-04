JAK DODAĆ NOWĄ SESJĘ DO PORTFOLIO
==================================

Najprościej: skrypt, który sam zmniejsza zdjęcia, zamienia je na WebP,
robi miniatury i dopisuje sesję do sessions.json.

Jednorazowo (potrzebny Python):   pip install pillow

Potem, z głównego folderu strony:

   python tools/optimize_portfolio.py "C:/zdjecia/sesja" slub-kasia-marcin "Ślub Kasi i Marcina" sluby

   - pierwszy argument  - folder z JPG-ami (np. wyeksportowanymi z Lightrooma)
   - drugi              - id sesji = nazwa folderu w portfolio/ (bez polskich znaków i spacji)
   - trzeci             - tytuł widoczny na stronie
   - czwarty            - kategoria: sluby / portrety / wydarzenia

   Domyślnie bierze pierwsze 5 zdjęć (alfabetycznie). Żeby wybrać własne,
   dodaj na końcu --pick z numerami zdjęć liczonymi od 0 (kolejność = kolejność
   na stronie), np.:   --pick 3,0,7,2,9

   Uruchomienie skryptu drugi raz dla tego samego id nadpisuje sesję.

Na koniec wrzuć cały folder portfolio/ na serwer. Nie trzeba nic zmieniać
w plikach .html - galeria buduje się sama na podstawie sessions.json.


CO POWSTAJE
===========
portfolio/<id>/1.webp, 2.webp ...        duże zdjęcie (do 1920 px, do powiększenia)
portfolio/<id>/1-sm.webp, 2-sm.webp ...  miniatura (do 720 px, widoczna w galerii)
portfolio/sessions.json                  lista sesji (wpis dopisuje skrypt)

Skrypt usuwa też dane EXIF (w tym lokalizację GPS) z publikowanych zdjęć.


RĘCZNIE (bez skryptu)
=====================
Można też wrzucić gotowe pliki 1.jpg, 2.jpg ... (albo .webp/.png) do
portfolio/<id>/ i dodać do sessions.json wpis:

   { "id": "slub-kasia-marcin", "title": "Ślub Kasi i Marcina",
     "category": "sluby", "count": 5, "ext": "jpg" }

Taka galeria zadziała, ale bez miniatur - strona pobierze pełne zdjęcia
i będzie wolniejsza, dlatego lepiej używać skryptu.
