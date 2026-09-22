Сценарии для покрытия:
1. Вход
2. Пополнение баланса 
3. Перевод

Не совсем поняла часть задания про сценарии для покрытия. Судя по всему должно быть что то вроде тест кейсов, но в списке "что сдать" ничего такого нет. Поэтому я не стала расписывать каждый тест. 

| Тест | Критичность |
|---|---|
| Authorize positive | Критический |
| Authorize incorrect user | Высокий |
| Authorize incorrect password | Высокий |
| Authorize empty | Средний |
| Add balance | Критический |
| Add balance zero | Высокий |
| Add balance negative number | Высокий |
| Add balance decimal with dot | Высокий |
| Add balance decimal with comma | Средний |
| Add balance very large number | Критический |
| Close transfer form | Низкий |
| Transfer with insufficient balance | Критический |
| Transfer with negative amount | Критический |
| Transfer with zero amount | Критический |

Найденные баги: 
1. При работе с большими числами число показывается математической записью вида 1+e
2. Кнопка Cancel не работает 
