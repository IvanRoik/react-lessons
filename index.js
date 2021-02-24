const phones = [
   { name: 'Xiaomi Redmi Note 9 Pro', price: 7799, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/6/j691d6_1__2_1.jpg' },
   { name: 'Xiaomi Mi 10T Pro 8/128GB', price: 15000, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/3/j3s-10_41.jpg' },
   { name: 'Xiaomi Redmi Note 4x 3/32Gb', price: 2975, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1738.jpg' },
   { name: 'Xiaomi Redmi 5 3/32Gb', price: 4600, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1297_3.jpg' }
]

function createCard(phone) {
   return `
   <div class="card">
      <div class="card-img">
         <img
            src="${phone.img}"
            alt="${phone.name}"></div>
         <h3>${phone.name}</h3>
         <p>${phone.rpice} Uah</p>
      </div>
   `
}

const templates = phones.map(phone => createCard(phone))
const html = templates.join(' ');
document.querySelector('.list').innerHTML = html;