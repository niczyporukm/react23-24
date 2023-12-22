

# PS 3 - 17.12.2023



## Zadanie 1 Zdarzenie onClick - Ożywienie przycisku "Count is X"

W komponencie App wyrenderowany jest komponent "CounterButton". Dodaj do niego funkcjonalność, która bedzie zwiększała po kliknięciu wartość o 1, wartość ta powinna wyświetlać się zamiast symbolu "X" na przycisku.


## Zadanie 2 - Kliknięcie prawym przyckiem myszy - zdarzenie onContextMenu

  Do przycisku z zadania 1 dodaj funkcjonalność polegającą na zmniejszaniu licznika o 1 po naciśnięciu prawym przyciskiem myszy. Pamiętaj o wyłączeniu zdarzenia domyślnego (wyświetlania okienka właściwości z przeglądarki), za pomocą  `event.preventDefault()`. Dodatkowo licznik nie powinien przyjmować wartości mniejszej niż 0.

## Zadanie 3 - Opcjonalne wyświetlanie formularza - dedykowany przycisk

W ramach tego zadania utwórz przycisk po wciśnięciu którego w komponencie App renderowany będzie formularz (na ten moment wystarczy `< form> User form < /form>`

**Wskazówka:**
Aby zrealizować powyższe zadanie możesz utworzyć komponent Button, który będzie przyjmował 2 właściwości tj. "text" oraz "onClick" i umieścisz go w komponencie App. Komponent ten w swojej definicji powinien obsługiwać obie właściwości. Po kliknięciu tego przycisku w komponencie App powinien wyświetlić się ww. formularz, po ponownym kliknięciu powinien zniknąć (odmontować się).

## Zadanie 4 - Utworzenie komponentu UserForm - obsługa pola user name

Utworzony w zadaniu 3 fragment formularza zastąp nowym komponentem "UserForm". Komponent ten będzie rozwijany we wszystkich kolejnych zadaniach, w nim będzie się znajdować cała logika związana z rozwijaniem i osługą nowych pól w formularzu.
W ramach tego zadania dodaj do pliku UserForm.css style podane przez prowadzacego, dzięki którym tworzony formularz będzie wyglądał bardziej czytelnie.
W utworzonym komponencie dodaj pole tekstowe dla wartości Name. Podobny przykład znajduje się na jednym z ostatnich slajdów z wykładu. Pole tekstowe będzie wyglądało jak poniżej
```
<input

type="text"

placeholder="Name"

value={userName}
wewrewer

onChange={(e) => setUserName(e.target.value)}

/>
```
Dodaj niezbędną logikę (stan), który będzie odpowiedzilny za poprawne działanie pola tekstowego.


## Zadanie 5 - Kolejne pole formularza - password

  Celem tego zadania jest dodanie kolejnego pola w formularzu. Tym razem będzie to hasło, czyli `< input type="password" />` który zamiast jawnych znaków domyślnie wyświetla ciąg znaków w postaci `****....`
Dodaj ww. pole tekstowe oraz nowy stan do poprawnej obsługi tego pola.

Dodatkowo w ramach tego zadania dodaj przycisk, który będzie zawierał tekst "Show password" lub "Hide password". Rolą tego przycisku będzie pokazanie / schowanie wpisanego hasła.

## Zadanie 6 - Kolejne pole w formularzu - age

Kolejnym polem, które dodamy do formularza bedzie wiek "age". W tym celu użyjmy `< input type="number" />
Dodatkowym założeniem jest to, że pole to powinno przyjmować wartości z zakresu o 1 do 100 (włącznie), niezaleznie od tego, czy bedziemy zmieniali jego wartość za pomocą wbudowanych przez przeglądarkę strzałek, czy wpisywali cyfry ręcznie.


## Zadanie 7 - Kolejne pole w formularzu - isVegan

Następnym polem w formularzu będzie "Is vegan", które będzie listą rozwijaną (dropdown) jednokrotnego wyboru. Użyj do tego pola
```
< select value={...} onChange={...}>
	< option>... < /option>
	< option> ... < /option>
	< option> ... < /option>
< /select>
  ```

**Wskazówka:**
Bardzo zbliżony przykład znajduje się na jednym z ostatnich slajdów na wykładzie.

## Zadanie 8 - Kolejne pole w formularzu - foodPreferences

Ostatnim polem w formularzu będzie "Food preferences", które będzie listą wielokronego wyboru
`<input type="checkbox name="..." checked={...} onChange={...}>`

Załóżmy, że posidamy następującą kolekcję składników:

 - tofu
 - beans
 - chicken
 - beef
 - fich

Wyświetl checkbox dla każdej z opcji i obsłuż to w formularzu w taki sposób aby w stanie komponentu posiadać pełną kontrolę na modyfikowanych wartościach.