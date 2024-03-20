const refs = {
  formEl: document.querySelector('form'),
  infoEl: document.querySelector('user-list'),
};
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = refs.formEl.elements.query.value;
  getEl(query)
    .then(data => {
      symbolTemplate(data);
      refs.infoEl.innerHTML = markup;
    })
    .catch(err => {
      console.log(err);
      refs.infoEl.innerHTML = '';
    });
});
function getEl(query) {
  const BASE_URL = 'https://pixabay.com/';
  const END_POINT = '/api';
  const params = new URLSearchParams({
    key: 42924833-4b721b8caf67a58fd43475ecb,
    q: query,
    image_type: photo,
    orientation: horizontal,
    safesearch: true,


  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  const options = {
    headers: {
      // 'X-RapidAPI-Key': 'f6fe44fec7msh9f58de139869781p15408ajsn8e7b73b5d6b1',
      // 'X-RapidAPI-Host': 'binance43.p.rapidapi.com',
    },
  };

  return fetch(url, options).then(res => res.json());
}
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements.superhero.value;
  getSuperhero(query).then(data => {
    const markup = heroTemplate(data);
    refs.heroEl.insertAdjacentHTML('beforeend', markup);
  });
})
// export const fetchUsersBtn = document.querySelector('.btn');
// export const form = document.querySelector('form');
// form.addEventListener('click', evt => {
//   evt.preventDefault();
//   if (text.value == '') {
//     return alert('Please, check input information!!!');
//   }
// });
// fetchUsersBtn.addEventListener('click', () => {
//   fetchUsers()
//     .then(users => renderUsers(users))
//     .catch(error => console.log(error));
// });

// function fetchUsers() {
//   return fetch(
//     'https://pixabay.com/api/?key=42924833-4b721b8caf67a58fd43475ecb&q=""&image_type=photo&orientation=horizontal&safesearch=true'
//   ).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
// }

// function renderUsers(users) {
//   const markup = users
//     .map(user => {
//       return `
//             <li>
//               <p><b>Name</b>: ${user.name}</p>
//               <p><b>Email</b>: ${user.email}</p>
//               <p><b>Company</b>: ${user.company.name}</p>
//             </li>
//         `;
//     })
//     .join('');
//   userList.insertAdjacentHTML('beforeend', markup);
// }
