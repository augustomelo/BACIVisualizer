app/
----- shared/   // acts as reusable components or partials of our site
---------- sidebar/
--------------- sidebarDirective.js
--------------- sidebarView.vue
---------- article/
--------------- articleDirective.js
--------------- articleView.vue
----- components/   // each component is treated as a mini Vue app
---------- home/
--------------- homeController.js
--------------- homeService.js
--------------- homeView.vue
---------- upload/
--------------- uploadController.js
--------------- uploadService.js
--------------- uploadView.vue
----- app.module.js
----- app.routes.js
assets/
----- img/      // Images and icons for your app
----- css/      // All styles and style related files (SCSS or LESS files)
----- js/       // JavaScript files written for your app that are not for angular
node_modules/   // All modules used by the app
dst/            // Production output
index.html
app.js      // Importes used by the application
