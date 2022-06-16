<h1 align="center">Adote um Pet 🐶</h1>

<h2>About</h2>

Aplication developed in Next.js consuming a Laravel API.
Improve the living condition of homeless animals with a small amount, register/adopt new pets and check the adopted pets report.


- Check out the application in action at <a href="https://rangel-pets.vercel.app">rangel-pets.vercel.app</a>
<h6 align="center"><kbd><img src="https://github.com/rangel-pci/files/blob/master/adote_um_pet.png" /></kbd></h6>

<h2>📋 Implemented Technologies</h2>

<h3>Front End</h3>

Reactjs/Nextjs
- <a href="https://www.typescriptlang.org/">TypeScript</a>
- <a href="https://mui.com/">Material-UI</a>
- Dark Mode
- <a href="https://www.npmjs.com/package/yup">Yup Validation</a>
- <a href="https://fkhadra.github.io/react-toastify">React-Toastify</a>
- <a href="https://react-dropzone.js.org/">React-Dropzone</a>

<h3>Back End</h3>

PHP/Laravel
- API
- <a href="https://image.intervention.io/v2">PHP Intervention Image</a>

<h2>⚙ Install & Run</h2>

```bash
#Clone the repository
$ git clone https://github.com/rangel-pci/adoteUmPet

#### FrontEnd step by step ####
$ cd adoteUmPet/frontend
$ npm install
$ npm run dev
```
Change the api baseUrl to you backend url in adoteUmPet/frontend/src/data/services/api.ts.<br>
After starting the application, the terminal will show you the address of the application, something like "http://localhost:3000".

```bash
#### BackEnd step by step ####
$ cd adoteUmPet/backend
$ composer require
```
Rename .env.example file to .env and configure with your database information, in this project i used SQLite but you can also use another DBMS like MySQL.
```bash
$ php artisan migrate
$ php artisan storage:link
$ php artisan serve
```
After starting the application, the terminal will show you the address of the application, something like "http://127.0.0.1:8000".
