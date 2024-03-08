# PS 6 - 09.03.2024 - React Router / LocalStorage / cutomHooks

## Zadanie 0 Instalacja ReactRouter
Zainstaluj paczkę React Router'a zgodnie z oficjalną dokumentacją https://reactrouter.com/en/dev/start/tutorial#setup

npm install react-router-dom localforage match-sorter sort-by

## Zadanie 1 Routing wstępna konfiguracja

Zgodnie z oficjalną dokumentacją https://reactrouter.com/en/dev/start/tutorial#adding-a-router
Zmodyfikuj plik main.js w taki sposób aby opakować aplikację w komponent ReactRoutera.

Umieśc komponent App w ścieżce domyślnej tj. "/", a następnie sprawdź czy wszystko działa poprawnie (aplikacja powinna zachowywać się tak jak poprzednio)

Dodatkowo w ramach tego zadania przenieśmy komponent App do ścieżki /dashboard, która będzie traktowana jako głowna.

Aby tego dokonać musimy posłużyć się pewnym "trikiem", a mianowicie w ścieżce głównej wyrenderować komponent który będzie Nas przenosił na nową ściezkę tj. dashboard

```
const  RedirectToDashboard  = () => {

const  navigate  =  useNavigate(); // przypisanie do zmiennej wartości hooka
                                   // useNavigate z biblioteki react-router

// useEffect, który będzie reagował na zmiany w nawigacji
useEffect(() => {
	navigate("/dashboard");
}, [navigate]);

// komponent nie musi nic zwracać (jest typowym komponentem pomocniczym)
return  null;
};
```
umieść powyższy komponent bezpośrednio w pliku main.jsx (przykład był pokazany na wykładzie).

Po wykonaniu tego zadania, przy wchodzeniu na adres http://localhost:5000/ powinieneś zostać przekierowywany na http://localhost:5000/dashboard

## Zadanie 2 - Routing - strona logowania

W ramach tego zadania:

- utwórz nowy komponent o nazwie "Login"
- dodaj nowy routing dla adresu /login i umieść w nim utworzony komponent < Login />
- jeżeli wykonasz powyższe punkty, powinieneś mieć możliwość przełączania się pomiędzy komponentami za pomocą modyfikacji adresu url (zwróć uwagę, że dla niezdefiniowanych adresów pojawia się domyślna strona 404)
## Zadanie 3 - Nawigowanie za pomocą przycisków

W ramach tego zadania:

- w komponencie Login utwórz przycisk, a jego kliknięcie powinno przenieść użytkownika na adres /dashboard. Użyj do tego useNavigate - https://reactrouter.com/en/dev/hooks/use-navigate#usenavigate
- w komponencie App dodaj funkcjonalność, która będzie przenosiła Cię z kolei na stronę logowania, użyj w tym przypadku innego sposobu do nawigacji, a mianowicie NavLink - https://reactrouter.com/en/dev/components/nav-link, który będzie tak na prawdę reacowym odpowiednikiem < a > z html'a

Po wykonaniu powyższych punktów powinieneś mieć możliwość łatwego nawigowania pomiedzy stronami login oraz page poprzez klikanie na odpowienie miejsca.

## Zadanie 4 - Formularz logowania

W ramach tego zadania:

- w komponencie Login utwórz formularz, który będzie zawierał 2 pola tekstowe "username" oraz "password", dodaj odpowienie stany do poprawnego zarządzania formularzem
- przycisk Zaloguj powinien również znajdować się w formularzu, a jego kliknięcie przed przenesiem użytkownika na /dashboard, powinno wypisać w konsoli informacje o użytkowniku, w formie obiektu z dwoma polami tj. {username: '...', password: '....'}

## Zadanie 5 - LocalStorage - zapis

W ramach tego zadania:

- zastąp wypisywanie informacji o użytkowniku na ekranie zapisaniem ich do localStorage (pod kluczem "signedUser".
- zaloguj się, przejdź do /dashboard i sprawdź w konsoli przeglądarki, czy masz dostęp do dodanego użytkownika


## Zadanie 6 - LocalStorage - odczyt

Skoro mamy globalny dostęp do informacji o zalogowanym użytkowniku, możemy coś z tym zrobić, zatem:

- w komponencie App wykorzystaj kompnent < Paragraph > i wypisz w nim następujący tekst "Witaj, jesteś zalogowany jako: [nazwa użytkownika]", gdzie userName będzie pochodził z localStorage

## Zadanie 7 - Auth Guard

Skoro zaimplementowaliśmy stronę logowania oraz zawartość dostępną po zalogowaniu, przydało by się zabezpieczyć to w pewien sposób przed nieautoryzowanym dostępem.

W ramach tego zadania dodaj funkcjonalność, która bedzie przenosiła użytkownika z adresu /dashboard (komponent < App >) do adresu /login (komponent < Login >) jeżeli w localStorage nie będzie informacji o użytkowniku.

Info: Aby testować powyższe zachowanie możesz usuwać dane z localStorage bezpośrednio w konsoli przeglądarki za pomocą komendy localStorage.clear()

## Zadanie 8 - useAuth - custom Hook

W ramach tego zadania funkcjonalność z zadania 7 umieść w customHook'u, zatem

- utwórz nowy folder w src/hooks/
- utwórz plik useAutch.js - plik z customHookiem musi zaczynać się od "use"m podobnie jak natywne hook'i z React'a.
- umieść w tym pliku logikę z zadania 7
- użyj utworzony hook w komponencie App


## Zadanie 9 - Rejestracja użytkownika  (extra)

W ramach tego zadania:

- utwórz nowy routing dla adresu /register w którym umieścisz podobny formularz jak w /login
- wciśnięcie przycisku "Register" po uzupełnieniu formularza powinno dodać użytkownika do puli zarejestrowanych użytkowników (powinni oni być zapisywani w localeStorage), po zapisaniu użytkownik powinien być przeniesiony do /login
- w procesie logowania przenosimy użytkownika tylko wtedy, jeżeli poda on prawidłowe wartości tj. użyje danych jednego z zarejestrowanych użytkowników)