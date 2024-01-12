# PS 4 - 13.01.2024



## Zadanie 1 Formularz c.d

W ramach tego zadania u góry formularza utworzonego na poprzednich zajęciach wypisz aktualne wartości w postaci paragrafów < p/> dla wszystkich z utworzonych pól tj. Imie, hasło, wiek, weganin.
< p> Imie: {userName} < /p>
  Będzie to pomocne przy analizowaniu tego co znajduje się w stanach komponentu UserForm

## Zadanie 2 - Nowe pole Food preferences.

Na dole formularza dodaj nowe pola dotyczące Food preferences dla dwóch pozycji :
 - beans
 - chicken

Niech to będą checkboxy czyli < input type='checkbox'> https://react.dev/reference/react-dom/components/input#usage przy czym każdy z nich powinien się zawierać w etykiecie < label> ... < /label> jak w podlinkowanym przykładzie.

Zwróć uwagę, że każdy input powinien mieć właściwość "name", która będzie definiowała unikalną nazwę.

## Zadanie 3 - Food preferences - funkcja do zarządzania stanem - dodawanie do listy

W ramach tego zadania napisz funkcję, która bedzie powiązana z nowo dodanym polem w formularzu, nazwijmy ją "handleFoodPreference".

Funkcja ta powinna być wyzwalana po kliknięciu w dowolny checkbox, otrzymywać zdarzenie - event, na podstawie którego będzie dodawać wartości w stanie.

Musisz zatem utworzyć nowy stan o nazwie "foodPreferences", w którym będą przetrzymywane zaznaczone pozycje, a domyślnie będzie pustą listą "[]"

W ramach tego zadania wystarczy zrób jedynie dodawanie zaznaczonych wartości do stanu oraz dodaj właściwość checked={} do każdego z inputów, dla przykładu

`checked={foodPreferences.includes("beans")}`

dzięki temu wartość inputa bedzie zawsze powiązana ze stanem faktycznym.

Podpowiedź: W tym zadaniu musisz wykorzystać dwie rzeczy pochodzące ze zdarzenia tj.
  - event.target.name - informacja o tym, który checkbox został kliknięty
  - event.target.checked - informacja o tym jaki jest stan checkboxa po kliknięciu

## Zadanie 4 - Food preferences - funkcja do zarządzania stanem - dodawanie / usuwanie z listy

W ramach tego zadania zmodyfikuj funkcję "handleFoodPreference" w taki sposób aby obsługiwała zaznaczanie oraz odnaczanie checkboxów. Będziesz do tego potrzebował wartości "checked pochodzącej ze zdarzenia. Szablon może zatem wyglądać jak poniżej
```
const  handleSelectFoodPreferences  = (event) => {
const  name  =  event.target.name;
const  checked  =  event.target.checked;

	if (checked) {
		// dodawanie elementu do stanu
	} else {
		// usuwanie elementu ze stanu - usuwanie z listy
	}
};
```

## Zadanie 5 - Mapowanie elementów za pomocą .map()

W ramach tego zadania zoptymalizujmy jedno z pól formularza tj.
```
<label>
	Is Vegan ?
	<select  value={isVegan}  onChange={(e) =>  setIsVegan(e.target.value)}>
		<option  value=""></option>
		<option  value="Yes">Yes</option>
		<option  value="No">No</option>
	</select>
</label>
```
poprzez użycie funkcji mapującej. Zwróć uwagę, że < select> zawiera 3 opcje
 - " "
 - "Yes"
 - "No"

Można zatem umieścić je w tablicy na podstawie której dokonamy natępnie mapowania tj.
`const isVeganOptions = ["", "Yes", "No"]`

i dokonać mapowania jak poniżej
```
isVeganOptions.map((valueFromArray) => <option value={valueFromArray}>{valueFromArray}</option>)
```

Dzięki takiemu zabiegowi w bardzo prosty sposób można w przyszłości manipulować ilością elementów za pomocą jednej zmiany na liście zamiast usuwania całych < option> wewnątrz select'a.


## Zadanie 6 - Is Vegan - display only beans

Celem tego zadania jest spełnienie poniższej funkcjonalości:
 - jeżeli użytkownik zaznaczy opcję isVegan, z listy FoodPreferences powinna zniknąć opcja chicken, oraz jeżeli był on wcześniej zaznaczony powinien zniknąć ze stanu
 - odznaczenie opcji isVegan powinno z powrotem pokazać wszystkie pozycje

## Zadanie 7 - Mapowanie elementów za pomocą .map() - c.d

W ramach tego zadania wykonaj podobną optymalizację jak w zadaniu 5, przy czym powinna się ona tyczyć pola FoodPreferences. Każda z potraw może być wegańska lub nie, zatem tutaj kolekcja na której będziemy malowali będzie listą obiektów tj.
```
const foodPreferencesList = [
	{
		name: 'Bean'
		isVegan: true
	},
	{
		name: 'Chicken'
		isVegan: false
	}
]
```
```
foodPreferencesList.map((singleFood) => <input type="checkbox name={singleFood.name} checked={...} onChange={...}>)
```

## Zadanie 8 - Optymalizacja
W ramach tego zadania utwórz komponenty IsVeganFormInput oraz FoodPreferencesInput i przenieś do nich logikę bezpośrednio związaną z tymi polami formularza. Pamiętaj o komunikacji dziecko -> rodzic | rodzic -> dziecko, aby funkcjonalność z poprzednich zadań pozostała taka sama.
