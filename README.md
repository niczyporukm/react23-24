
# PS 1 - 26.11.2023



Przed przystąpieniem do popniższych zadań upewnij się, że masz zainstalowane:

- NodeJS w wersji 18.0.0 lub wyższej

- Visual Studio Code



## Zadanie 1 - utworzenie aplikacji



- utwórz folder w którym będzie się znajdować twój projekt

- z poziomu konsoli / terminala wejdź do nowo utworzonego folderu i za pomocą narzędzia Vite stwórz nową aplikację (React / JavaScript) - https://vitejs.dev/guide/#scaffolding-your-first-vite-project

- wejdź do folderu z aplikacją / uruchom npm install aby zainstalować wszystkie wymagane paczki, a następnie odpal ją za pomocą komendy npm run dev i upewnij się że wyświetliła się ona w przeglądarce - domyślnie http://localhost:5173/



## Zadanie 2 - analiza plików



- prześledź w edytorze kodu pliki które zostały wygenerowane (pomijając na razie folder node modules) - postaraj się zrozumieć za co odpowiadają (omówienie plików z prowadzącym)




## Zadanie 4 - wprowadzenie i obserwacja przykładowych zmian -JS



- Jeżeli jeszcze tego nie zrobiłeś zmodyfikuj plik src/App.js i sprawdź czy dokonane zmiany po zapisaniu są widoczne w przeglądarce (utworzona przez Vite aplikacja posiada moduł hot-reload odpowiadający za nasłuchiwanie i samoczynne odświeżanie aplikacji po dokonanych zmianach, jest to bardzo pomocne narzędzie które z pewnością docenisz. W ramach tego zadania możesz np. zmodyfikować dowolny tekst / usunąć lub dodać nowy paragraf < p >



## Zadanie 5 - wprowadzenie i obserwacja przykładowych zmian - style CSS



- React to nie tylko JS, zwróć uwagę na klasy które zostały dodane do poszczególnych elementów w komponencie App.js (klasy dodajemy za pomocą właściwości "className"), odpowiadają one za otoczkę wizualną renderowanych elementów (CSS). Komponent App.js w 2-giej linii importuje powiązane klasy z pliku App.css, zlokalizuj tam wspomniane style, zmodyfikuj np. kolor tła / rozmiar czcionki, czy wysokość logo i sprawdź wyniki w przeglądarce.


## Zadanie 6 - Code formatter - Dodatek Prettier

Aby nie martwić się o styl w jaki piszemy kod (wcięcia / entery / długości linii itp.) doinstalumy narzędie, które będzie robiło to za Nas wedle globalnie ustalonych konwencji. Aby tego dokonać:

- zainstaluj do VSCode dodatek https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- w folderze z projektem zainstaluj paczkę prettiera https://prettier.io/docs/en/install komendą "npm install --save-dev --save-exact prettier"
- w ustawieniach projektu ustaw opcję "Format on save"

Aby sprawdzić czy wszystko działa poprawnie dodaj kilka enterów w dowolnym komponencie i zapisz plik. Kod powinien automatycznie powrócić do poprawnej formy.

## Zadanie 7 - Nowy komponent - https://react.dev/learn#components


W końcu czas utworzyć nowy komponent !!



Celem tego zadania jest stworzenie nowego komponentu, który wyświetli tekst "Hello world from my first component".



Aby to zrobić powinieneś:

- w folderze components utwórz folder o takie samej nazwie jaką będzie miał nowy komponent (./src/components/MyFirstComponent) - MyFirstComponent to tylko sugerowana nazwa

- folder ten powinien zawierać 2 pliki MyFirstComponent.jsx oraz MyFirstComponent.css

- wyświetl zawartość Twojego komponentu na ekranie (dodaj wywołanie nowo utworzonego komponentu w pliku index.js nad wywołaniem komponentu <App />)

- sprawdź wynik w przeglądarce



## Zadanie 8 - instalacja dodatku do Generowania komponentów



Za każdym razem gdy robimy nowy komponent, powinniśmy stworzyć dedykowany folder oraz plik .jsx, w któ©ym będzie definicja komponentu oraz powiązany plik ze stylami (.css)



Aby nie robić tego ręcznie możemy posłyżyć się pewnym dodatkiem do Visual Studio Code, który znajdziesz tutaj - https://marketplace.visualstudio.com/items?itemName=roberth.react-gensco



Zainstaluj ten dodatek, przejdź do jego ustawień, a następnie:

- odnzacz wszystkie opcje

- jako języki wybierz JavaScript, a jako język styli - css

- otwórz plik settings.json i wklej poniżej przygotowany szablon



```

"reactComponentGenerator.componentTemplate": [

"import React from 'react';",

"",

"import './${componentName}.css'"

"",

"const ${componentName} = () => {",

"return (<div className={'${componentName}'}>Sample text from ${componentName} component</div>)",

"}",

"",

"export default ${componentName};",

]

```

Aby utworzyć nowy komponent kliknij prawym przyciskiem myszy w miejscu gdzie ma się on znajdować, wybierz "Generate React Component", podaj nazwę i wciśnij enter. W wybranym miejscu powinien się utworzyć folder z plikami nowo utworzonego komponentu.



Jako nazwę dla nowego komponentu podaj "Images". Aby sprawdzić czy wszystko poszło zgodnie z oczekiwaniami wyświetl ten komponent wewnątrz komponentu App.



## Zadanie 9 - Komponent Images



Celem tego zadania będzie jest komponentu utworzonego w poprzednim zadaniu w taki sposób, aby wyświetlał on dwa obrazki tj. Logo Vite oraz logo React'a, które w tym momencie renderowane są przez komponent App.



Aby to zrobić przenieś < div> a, który zawiera w sobie wspomniane elementy z komponentu App, do komponentu Images. Zwróć uwagę na powiązane style w pliku App.css, one również powinny zostać przeniesione do pliku Images.css.



W rezultacie po wykonaniu tego zadania na w przeglądarce wszystko powinno wyświetlać się tak jak poprzednio, ponieważ nic nie zmieniliśmy, jedynie odseparowaliśmy część kodu do dedykowanego komponentu.



## Zadanie 10 - Komponent LinkImage



W ramach tego zadania utwórzmy nowy komponent o nazwie LinkedImage, który będzie odpowiedzialny za wyświetlenie pojedyńczego linku z logiem. Dodatkowo ten komponent będzie przyjmował dwie właściwości (propsy) takie jak "linkTo" oraz "imageSrc", dzięki czemy będzie on w pełni reużywalny.



## Zadanie 11 - Podział pozostałej zawartości komponentu App na mniejsze komponenty



W ramach ostatniego zadania utwórz dedykowane komponenty dla pozostałej zawartości komponentu App, a nastepnej użych ich w sposób jak poniżej

![image](https://github.com/niczyporukm/react23-24/assets/9209826/76e8497e-69cc-42bf-8db5-c6bdd382b6bb)


## Praca domowa



https://www.youtube.com/watch?v=opNgrPv3Qw8 - 2 godzinny kurs HTML / CSS dla początkujących
