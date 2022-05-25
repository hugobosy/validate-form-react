# Formularz z prostą walidacją

Technologie: `react` `html` `css` `javascript`

- Nazwa uzytkownika musi mieć conajmniej 10 znaków
- Email musi zawierać @ (walidacja prosta mozna wysłać formularz z samym znakiem @)
- Hasło musi mieć conajmniej 10 znaków
- Musi być zaznaczona akceptacja warunków

Gdy w którymś polu jest błąd zostanie wyświetlona informacja

Po wysłaniu formularza pojawi się wiadomość, która po 3 sekundach znika

## Czego mnie ten projekt nauczył?

Dowiedziałem się, ze uzywając hook useState w formularzu to do kazdego pola muszę zdefiniować osobny stan, aby kazde
pole było kontrolowane przez react.
