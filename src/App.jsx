import React from 'react'

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      list : ['Go to GYM!','Eat healthy','Go to shopping'],
      input : '',
    }
  }
  render(){
    return(
      <div>
        <section className='header'>
        <h1>Todo-App</h1>
        </section>

        <section className='input-wrapper'>
          <input type="text" placeholder='Enter your task' onChange={(e)=>{
              this.setState({
                input : e.target.value,
              })

            }
          }/>
          <button type='Submit'onClick={()=>{
            this.setState({
              /**
               * ["Go to GYM!", "Eat healthy", "Go to shopping"]
               * [...["Go to GYM!", "Eat healthy"],"something"]
               * ["Go to GYM!", "Eat healthy","something"]
               */
              list : [...this.state.list,this.state.input],//spread operator
              
            })
          }}>Add</button>
        </section>

        <section className='list-wrapper'>
          <ul>
            {this.state.list.map((element,index) => {
              return <li key={index}>{element}</li>
            })}
          </ul>
        </section>
      </div>
    )
  }
}
export default App;