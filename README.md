
# PS 2 - 09.12.2023

## Zadanie 0 - React DevTools for Chrome

Pobierz dodatek do Chrome https://chromewebstore.google.com/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi, który umożliwia podgląd aplikacji pod kątem React'a.

Odpal projekt i sprawdź w przeglądarce, czy pojawiły się nowe karty [Profiler oraz Components] w DevToolsach.
Wejdź w zakładkę Profiler i włącz opcję "Highlight updates when components render", dzięki temu będziesz mógł obserwować które komponenty się przerenderowują w postaci mrygającej animacji.

## Zadanie 1 - Licznik

Wszystkie dzisiejsze zadania będą bazowały na liczniku, który będzie zwiększał liczbę co 3 sekundy, zacznijmy od stworzenia go i umieszczenia w Naszej aplikacji.

Aby zrobić prosty licznik w JavaScript musimy wykorzystać natywną funkcję setInterval, przykład poniżej

```
setInterval(() => {
	// ten kod bedzie wykonywał się cyklicznie co 3 sekundy
}, 3000);
```

Umieść kod licznika w komponencie App. Licznik ten powinien zwiększać wartość liczby, zatem utwórz zmienną
```
let counterValue = 0
```

i zwiększaj jej wartość wewnątrz licznika poprzez
```
counterValue = counterValue + 1
```
umieść w kodzie console.log'i które sprawdzą jak zmienia się wartość "counterValue"

Wartość licznika ("counterValue") przekaż jako props do komponentu < Header> i wyświetl na ekranie.

**Wiosek:**
counterValue jest zmienną, a nie stanem komponentu, zatem na ekranie nie zobaczymy żadnych zmian pomimo prawidłowego działania licznika

## Zadanie 2 - Licznik c.d - Stan (state) zamiast zmiennej

Aby komponent mógł się przerysować musimy użyć stanu (state) zamiast zwykłej zmiennej.
Zastąp w takim razie utworzoną w poprzednik zadaniu zmienną "counterValue" na stan za pomocą hook'a
`const  [state,  setState] = useState(initialState);` https://react.dev/reference/react/useState, nie zapomnij o jego zaimportowaniu u góry pliku.

W ramach tego zadania musisz zatem usunąć deklaracje zmiennej i zastąpić ją deklaracją stanu (patrz przykład powyżej) i użyć metody modyfikującej stan zamiast
```
counterValue = counterValue + 1
```
jak było to zrobione poprzednio.

W efekcie tego zadania licznik powinien działać poprawnie.

**Wniosek:**
Licznik działa poprawnie, lecz zwróć uwagę co jest logowane w konsoli. Za każdym powtórzeniem licznika pojawia się więcej console.log'ow. Związane jest to z faktem, że każde przerenderowanie komponentu uruchamia oddzielny licznik, takie zachowanie jest bardzo nieporządane i zajmiemy się tym w zadaniu 3.

## Zadanie 3 - Montowanie komponentu - jednorazowa inicjalizacja licznika

Wykorzystaj poznany na wykładzie hook `useEffect`, aby wykonać kod tylko jeden raz podczas cyklu życia komponentu, a mianowicie tuż po jego zamontowaniu. Aby tego dokonać użyj pustej tablicy zależności jak pokazano poniżej
```
useEffect(() => {

// ten kod wykona się tylko raz, tuż po pierwszym wyświetleniu komponentu
}, []); // pusta tablica zależności - componentDidMount
```

Zwróć uwagę, że każde przerenderowanie komponentu poprzez np zapisanie nowych zmian nadal powoduje powstawanie nowych liczników, zatem finalnie musimy użyć kodu jak poniżej, aby licznik funkcjonował poprawnie

```
useEffect(() => {

const  interval  =  setInterval(() => {

console.log("licznik");

setTimerValue((timerValue) =>  timerValue  +  1);

}, 1000);

return () =>  clearInterval(interval); // usuwanie poprzedniej instancji licznika przed utworzeniem nowej

}, []);
```


## Zadanie 4 - Renderowanie warunkowe

Celem tego zadania będzie obserwacja za pomocą dodatku do Chrome'a które komponenty rzeczywiście ulegają przerenderowaniu i zrozumienie dlaczego tak się dzieje. Aby to zrobić wykonaj poniższe czynności:

- W komponencie main.jsx dodaj drugie wywołanie komponentu < App shouldCount={true}  /> w którym przekażesz właściwość o nazwie "shouldCount". Następnie zmodyfikuj komponent App w taki sposób aby licznik liczył tylko w przypadku gdy `props.shouldCount === true`.
- W efekcie tego zadania powinieneś dwókrotnie wyrenderowane kompononent App, z tą różnicą, że jeden liczy a drugi nie.

**Wniosek:**
Zwróć uwagę co na ekranie zostaje przerysowywane i postaraj się zrozumieć dlaczego.

## Zadanie 5 - Renderowanie warunkowe c.d

Zmodyfikuj komponent Icons w taki sposób aby wyświetlał jedną bądź drugą ikonę w zależności od aktualnej wartości licznika (gdy liczba jest parzysta wyświetlamy ikonę Vite, zaś dla nieparzystej React).

Aby to zrobić musisz przekazać stan licznika z komponentu App do komponentu Icons, tam wykonać pewne obliczenia, przyda się nowa zmienna
```
const isEven = someValue % 2 === 0;
```
na podstawie której  będzie wyświetlana zawartość komponentu (potrzebne będą pewne zmiany w funkcji render - renderowanie warunkowe)

## Zadanie 6 - Renderowanie warunkowe c.d ...

Celem tego zadania jest takie zmodyfikowanie kodu, aby komponent < Icons /> wyświetlał się tylko wtedy, jeżeli wartość licznika jest mniejsza od 10 lub większa od 20. Zadanie jest podobne do poprzedniego. Będziesz potrzebował zmiennej którą będziesz mógł użyć jako warunek w funkcji render - zmiany w komponencie "App"


## Zadanie 7 - Obserwacja przerysowywania komponentów - optymalizacja

Spójrz na to co jest wyświetlane na ekranie i zwróć uwagę które komponenty się przerysowują. Można zauważyć, że w niektórych nic się nie zmienia, a pomimo to są co 3 sekundy rysowane na nowo. Nie jest to porządane zachowanie, poprawmy zatem ten błąd.

Aby tego dokonać utwórz nowy komponent, nazwij go np. "Animator" i umieść w nim komponent Header z licznikiem oraz komponent z ikonami. Przenieś tam również deklaracje i obsługę powiązanych stanów.

Efektem tego zadania powinno być wyeliminowanie zbędnych przerysowań komponentów których nie dotyczą zmiany.

## Zadanie 8 - Reapeater - wyświetlanie ikon od 1 do 10

Przeanalizuj kod komponentu < Reapeter /> - jak można zauważać wyświetla on pewną ilość razy zawartość, którą przekazaliśmy do niego jako zawartość tj. props.child.

Zmodyfikuj jego kod w taki sposób, aby wyświetlał on ilość ikon zgodną z resztą dzielenia przez 10 aktualnej wartości licznika, zatem dla:
1 - 1ikona
2 - 2 ikony
10 - 0 ikon
15 - 5 ikon
33 - 3 ikony

 Do wyliczenia reszty z dzielenia użyj operatora modulo  [%], podobnie jak to było w przypadku wyliczania liczby parzystej / nieparzystej.
