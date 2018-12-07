# Quince Angular

Live version: https://krisztian-kugler.github.io/quince-angular/

## Technologies

* Angular 7
* RxJS
* Pug
* Sass

## Notes

* Implemented my own solution for alphabetical list sorting (using a tweaked bubble sort technique).
* The persons list gets sorted immediately at launch. Clicking the name header swaps the sorting order.
* The app doesn't allow you to create a new person if the name is less than 3 chars.
* When a new person is created, it gets placed to its proper position in the sorted list.
* Checkboxes and checkbox logic are completely self-made, it's easier to style them this way.
* Data dump gets updated on every change (create, delete, check/uncheck employee, change sort order).

## Development and Build instructions

Run `npm install` to install all packages / dependencies.

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build. Then upload the content of the `dist` folder to a web server of your choice.
