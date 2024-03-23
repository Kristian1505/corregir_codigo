const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name'); // name es una clase por lo que necesitaba un .
const $b = document.querySelector('.blog'); // blog es una clase y estaba siendo seleccionada como un id
//const $l = document.querySelector('.location'); Este no existe en el html

async function displayUser(username) {  //Se añade async para indicar asincronía
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json(); //Se añade para convertir a json la respuesta
  console.log(data);
  $n.textContent = `${data.name}`; // Cambio de comillas
  $b.textContent = `${data.blog}`; // Cambio de comillas
  //$l.textContent = '${data.location}'; No está definido
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}` //Se cambia para referenciar el elemento de manera correcta
}

displayUser('stolinski').catch(handleError);