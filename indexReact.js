function Card(props) {
   const classes = ['card']
   if (props.phone.marked) {
      classes.push('marked')
   }
   return (
      <div className={classes.join(' ')} onClick={props.onMark}>
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

class App extends React.Component {
   state = {
      phones: [
         { marked: false, name: 'Xiaomi Redmi Note 9 Pro', price: 7799, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/6/j691d6_1__2_1.jpg' },
         { marked: false, name: 'Xiaomi Mi 10T Pro 8/128GB', price: 15000, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/j/3/j3s-10_41.jpg' },
         { marked: false, name: 'Xiaomi Redmi Note 4x 3/32Gb', price: 2975, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1738.jpg' },
         { marked: false, name: 'Xiaomi Redmi 5 3/32Gb', price: 4600, img: 'https://i.allo.ua/media/catalog/product/cache/1/image/600x415/602f0fa2c1f0d1ba5e241f914e856ff9/f/i/file_1297_3.jpg' }
      ],
      visible: true,
      appTitle: 'Phone aplications'
   }

   handleMarked(name) {
      const phones = this.state.phones.concat()
      const phone = phones.find(p => p.name === name)
      phone.marked = !phone.marked
      this.setState({ phones })
   }
   toggleHandle() {
      this.setState({ visible: !this.state.visible })
   }
   renderPhones() {
      if (!this.state.visible) {
         return null
      }
      return this.state.phones.map(phone => {
         return (
            <Card
               phone={phone}
               key={phone.name + Math.random()}
               onMark={this.handleMarked.bind(this, phone.name)}
            />
         )
      })
   }
   titleChangeHandle(title) {
      if (title.trim() === '') {
         return
      }
      this.setState({
         appTitle: title
      })
   }
   render() {
      const style = {
         marginRight: 20
      }
      return (
         <div className="app">
            <h1>{this.state.appTitle}</h1>
            <button onClick={() => this.toggleHandle()} style={style}>Toggle</button>
            <input type="text" placeholder="change title" onChange={(event) => this.titleChangeHandle(event.target.value)} value={this.state.appTitle} />
            <hr />
            <div className="list">
               {this.renderPhones()}
            </div>
         </div>
      )
   }
}

ReactDOM.render(<App />, document.getElementById('root'));