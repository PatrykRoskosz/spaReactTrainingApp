import {React, Component} from 'react';
import '../css/contactPage.css';
import {Prompt} from 'react-router-dom';

class ContactPage extends Component {
    state = {
        value: '',
        isEmpty: false,
    }

    handleChange = (e) => {
 const isEmpty = e.target.value.length !== '' ? true : false;
          this.setState({
            value: e.target.value,
            isEmpty,    
        })
    }

    handleSubimt = (e) => {
        e.preventDefault()
        this.setState({
            value: '',
        })
    }


    render(){

        return ( 
               <div className="contact">
                   <form onSubmit={this.handleSubimt}>
                        <h3>Napisz do nas</h3>
                        <textarea 
                            value={this.state.value}  
                            onChange={this.handleChange}
                            placeholder="Wpisz wiadomośc..."
                        >
                        </textarea>
                        <button>Wyślij</button>
                   </form>
                   <Prompt 
                        when={this.state.isEmpty}
                        message="Nie wyslałeś formularza czy chcesz przejść dalej?"
                   />
               </div>   
            );
    }   
}
 
export default ContactPage;