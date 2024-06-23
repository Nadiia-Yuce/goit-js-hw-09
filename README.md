Завдання 1 - Галерея зображень

Виконуй це завдання у файлах 1-gallery.html і 1-gallery.js.

У попередньому домашньому завданні ти самостійно створив/-ла галерею зображень,
використовуючи делегування подій, і додав/-ла через CDN бібліотеку модальне
вікно для відображення повнорозмірної версії зображення.

Створення галерей — це повсякденна задача розробника, але писати їх вручну
кожного разу занадто трудомістко. Для цього існують бібліотеки, які реалізують
усю логіку роботи галереї.

Зроби таку саму галерею, але використовуючи бібліотеку SimpleLightbox, яка
повністю візьме на себе обробку кліків по зображеннях, відкриття і закриття
модального вікна, а також гортання зображень за допомогою клавіатури.

Подивися демовідео роботи галереї.

Зверни увагу на такі деталі:

Тобі більше не потрібно вручну встановлювати делегування подій, оскільки
бібліотека SimpleLightbox автоматично відстежує кліки по картках галереї. Немає
необхідності додавати слухачі подій для елементів галереї. Окрема бібліотека
BasicLightbox для створення модальних вікон більше не потрібна, оскільки
функціонал відкриття модального вікна вбудовано в бібліотеку SimpleLightbox. Для
встановлення бібліотек тепер не потрібно додавати CDN-посилання в index.html.
Замість цього ми встановлюємо бібліотеки через npm в терміналі.

Виконуй це завдання у файлах 1-gallery.html і 1-gallery.js. Розбий його на
декілька підзавдань:

Використовуй код з минулого домашнього завдання та виконай його рефакторинг. Не
потрібно писати все з нуля. Наприклад, створення елементів галереї буде таким
самим. А ось код делегування та відкриття модального вікна потрібно видалити.

Необхідно трохи змінити розмітку картки галереї, використовуй цей шаблон.

<li class="gallery-item">
	<a class="gallery-link" href="large-image.jpg">
		<img 
			class="gallery-image" 
			src="small-image.jpg" 
			alt="Image description" 
			/>
	</a>
</li>

Додай бібліотеку SimpleLightbox як залежність проєкту, використовуючи npm .

Для того щоб підключити CSS код бібліотеки в проєкт, необхідно додати ще один
імпорт, крім того, що описаний у документації.

// Описаний в документації import SimpleLightbox from "simplelightbox"; //
Додатковий імпорт стилів import "simplelightbox/dist/simple-lightbox.min.css";

Наступний крок це ініціалізація бібліотеки після створення і додання елементів
галереї у ul.gallery. Для цього ознайомся з документацією SimpleLightbox —
насамперед секції «Usage» і «Markup».

Після цього подивись у документації секцію «Options» і додай відображення
підписів до зображень з атрибута alt. Нехай підпис буде знизу і з'являється
через 250 мілісекунд після відкриття модального вікна.

На що буде звертати увагу ментор при перевірці:

На живій сторінці відображається галерея зображень із масиву даних images
Галерея зображень стилізована згідно з макетом Дані для галереї створені
динамічно в JS Відсутні власні слухачі Підключена бібліотека SimpleLightbox з
використанням npm Екземпляр бібліотеки ініціалізований після додавання елементів
галереї у DOM і поза межами будь-яких функцій При кліку по елементу галереї
відкривається модальне вікно підключеної бібліотеки, в якому міститься збільшена
версія зображення, по якому клікнули. Весь базовий функціонал бібліотеки працює
Через 250 мілісекунд після відкривання модального вікна вміст атрибута alt
з’являється знизу, як підпис до зображення

Завдання 2 - Форма зворотного зв'язку

Виконуй це завдання у файлах 2-form.html і 2-form.js.

Додай у HTML розмітку форми. У JS напиши скрипт, який буде зберігати значення
полів у локальне сховище, коли користувач щось друкує.

<form class="feedback-form" autocomplete="off">
  <label>
    Email
    <input type="email" name="email" autofocus />
  </label>
  <label>
    Message
    <textarea name="message" rows="8"></textarea>
  </label>
  <button type="submit">Submit</button>
</form>

Виконуй це завдання у файлах 2-form.html і 2-form.js. Розбий його на декілька
підзавдань:

Оголоси поза будь-якими функціями об’єкт formData з полями email та message, які
спочатку мають порожні рядки як значення: { email: "", message: "" }.
Використовуй метод делегування для відстеження змін у формі через подію input.
Зберігай актуальні дані з полів email та message у formData та записуй цей
об’єкт у локальне сховище. Використовуй ключ "feedback-form-state" для
зберігання даних у сховищі. При завантаженні сторінки перевір, чи є дані у
локальному сховищі. Якщо так, використовуй їх для заповнення форми та об'єкта
formData. Якщо ні, залиш поля форми порожніми. Перед відправленням форми
переконайся, що обидва поля форми заповнені. Якщо будь-яке з полів (властивостей
об’єкта formData) порожнє, показуй сповіщення з текстом «Fill please all
fields». Якщо всі поля заповнені, виведи у консоль об’єкт formData з актуальними
значеннями, очисти локальне сховище, об’єкт formData і поля форми.

На що буде звертати увагу ментор при перевірці:

На живій сторінці відображається форма з двома елементами форми і кнопкою типу
submit Форма стилізована згідно з макетом На формі прослуховуються події input і
submit При введенні даних у будь-який елемент форми вони записуються у локальне
сховище під ключем "feedback-form-state", збережені дані не містять пробіли по
краях Введення даних в одне поле форми не видаляє дані в сховищі для іншого При
оновленні сторінки дані з локального сховища підставляються в елементи форми, у
полях форми відсутні undefined При сабміті форми є перевірка, щоб обидва
елементи форми були заповнені Під час сабміту форми, якщо обидва елементи форми
заповнені, виводиться у консоль об'єкт з полями email, message та їхніми
поточними значеннями, а також очищаються сховище і поля форми Якщо після сабміту
форми ввести в будь-який елемент форми дані, то в локальному сховищі не
з’являються дані від попереднього сабміта

# Vanilla App Template

Цей проект було створено за допомогою Vite. Для знайомства та налаштування
додаткових можливостей [звернись до документації](https://vitejs.dev/).

## Створення репозиторію за шаблоном

Використовуй цей репозиторій організації GoIT як шаблон для створення
репозиторію свого проекту. Для цього натисни на кнопку `«Use this template»` і
обери опцію `«Create a new repository»`, як показано на зображенні.

![Creating repo from a template step 1](./assets/template-step-1.png)

На наступному етапі відкриється сторінка створення нового репозиторію. Заповни
поле його імені, переконайся, що репозиторій публічний, після чого натисни
кнопку `«Create repository from template»`.

![Creating repo from a template step 2](./assets/template-step-2.png)

Після того, як репозиторій буде створено, необхідно перейти в налаштування
створеного репозиторію на вкладку `Settings` > `Actions` > `General` як показано
на зображенні.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Проскроливши сторінку до самого кінця, в секції `«Workflow permissions»` обери
опцію `«Read and write permissions»` і постав галочку в чекбоксі. Це необхідно
для автоматизації процесу деплою проекту.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Тепер у тебе є особистий репозиторій проекту, зі структурою файлів та папок
репозиторію-шаблону. Далі працюй з ним, як з будь-яким іншим особистим
репозиторієм, клонуй його собі на комп'ютер, пиши код, роби коміти та відправляй
їх на GitHub.

## Підготовка до роботи

1. Переконайся, що на комп'ютері встановлено LTS-версію Node.js.
   [Скачай та встанови](https://nodejs.org/en/) її якщо необхідно.
2. Встанови базові залежності проекту в терміналі командою `npm install`.
3. Запусти режим розробки, виконавши в терміналі команду `npm run dev`.
4. Перейдіть у браузері за адресою
   [http://localhost:5173](http://localhost:5173). Ця сторінка буде автоматично
   перезавантажуватись після збереження змін у файли проекту.

## Файли і папки

- Файли розмітки компонентів сторінки повинні лежати в папці `src/partials` та
  імпортуватись до файлу `index.html`. Наприклад, файл з розміткою хедера
  `header.html` створюємо у папці `partials` та імпортуємо в `index.html`.
- Файли стилів повинні лежати в папці `src/css` та імпортуватись до HTML-файлів
  сторінок. Наприклад, для `index.html` файл стилів називається `index.css`.
- Зображення додавай до папки `src/img`. Збирач оптимізує їх, але тільки при
  деплої продакшн версії проекту. Все це відбувається у хмарі, щоб не
  навантажувати твій комп'ютер, тому що на слабких компʼютерах це може зайняти
  багато часу.

## Деплой

Продакшн версія проекту буде автоматично збиратися та деплоїтись на GitHub
Pages, у гілку `gh-pages`, щоразу, коли оновлюється гілка `main`. Наприклад,
після прямого пуша або прийнятого пул-реквесту. Для цього необхідно у файлі
`package.json` змінити значення прапора `--base=/<REPO>/`, для команди `build`,
замінивши `<REPO>` на назву свого репозиторію, та відправити зміни на GitHub.

```json
"build": "vite build --base=/<REPO>/",
```

Далі необхідно зайти в налаштування GitHub-репозиторію (`Settings` > `Pages`) та
виставити роздачу продакшн версії файлів з папки `/root` гілки `gh-pages`, якщо
це не було зроблено автоматично.

![GitHub Pages settings](./assets/repo-settings.png)

### Статус деплою

Статус деплою крайнього коміту відображається іконкою біля його ідентифікатора.

- **Жовтий колір** - виконується збірка та деплой проекту.
- **Зелений колір** - деплой завершився успішно.
- **Червоний колір** - під час лінтингу, збірки чи деплою сталася помилка.

Більш детальну інформацію про статус можна переглянути натиснувши на іконку, і в
вікні, що випадає, перейти за посиланням `Details`.

![Deployment status](./assets/deploy-status.png)

### Жива сторінка

Через якийсь час, зазвичай кілька хвилин, живу сторінку можна буде подивитися за
адресою, вказаною на вкладці `Settings` > `Pages` в налаштуваннях репозиторію.
Наприклад, ось посилання на живу версію для цього репозиторію

[https://goitacademy.github.io/vanilla-app-template/](https://goitacademy.github.io/vanilla-app-template/).

Якщо відкриється порожня сторінка, переконайся, що у вкладці `Console` немає
помилок пов'язаних з неправильними шляхами до CSS та JS файлів проекту
(**404**). Швидше за все у тебе неправильне значення прапора `--base` для
команди `build` у файлі `package.json`.

## Як це працює

![How it works](./assets/how-it-works.png)

1. Після кожного пуша у гілку `main` GitHub-репозиторію, запускається
   спеціальний скрипт (GitHub Action) із файлу `.github/workflows/deploy.yml`.
2. Усі файли репозиторію копіюються на сервер, де проект ініціалізується та
   проходить лінтинг та збірку перед деплоєм.
3. Якщо всі кроки пройшли успішно, зібрана продакшн версія файлів проекту
   відправляється у гілку `gh-pages`. В іншому випадку, у лозі виконання скрипта
   буде вказано в чому проблема.