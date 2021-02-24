function Card(props) {
   return (
      <div className="card">
         <div className="card-img">
            <img
               src={props.phone.img}
               alt={props.phone.name} />
         </div>
         <h3>{props.phone.name}</h3>
         <p>{props.phone.price} Uah</p>
      </div>
   )
}
/*const app = (
   <div className="app">
      <div className="list">
         <Card phone={{ name: 'Xiaomi Redmi Note 9 Pro', price: 7799, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/6/j691d6_1__2_1.jpg' }} />
         <Card phone={{ name: 'Xiaomi Mi 10T Pro 8/128GB', price: 15000, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/3/j3s-10_41.jpg' }} />
         <Card phone={{ name: 'Xiaomi Redmi Note 4x 3/32Gb', price: 2975, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1738.jpg' }} />
         <Card phone={{ name: 'Xiaomi Redmi 5 3/32Gb black', price: 4600, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1297_3.jpg' }} />
      </div>
   </div>
)*/

class App extends React.Component {
   state = {
      phones: [
         { name: 'Xiaomi Redmi Note 9 Pro', price: 7799, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/6/j691d6_1__2_1.jpg' },
         { name: 'Xiaomi Mi 10T Pro 8/128GB', price: 15000, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/3/j3s-10_41.jpg' },
         { name: 'Xiaomi Redmi Note 4x 3/32Gb', price: 2975, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1738.jpg' },
         { name: 'Xiaomi Redmi 5 3/32Gb', price: 4600, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1297_3.jpg' }
      ]

   }

   renderPhones() {
      return this.state.phones.map(phone => {
         return (
            <Card phone={phone} key={phone.name + Math.random()} />
         )
      })
   }
   render() {
      return (
         <div className="app">
            <div className="list">
               {this.renderPhones()}
            </div>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));