import React from "react";

export default class Form extends React.Component{
    state = {
        firstName: "",
        lastName: "",
        email: "",
        number: "",
        city: "",
        street: "",
        postNumber: "",
        experience: ""
    };

    change = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    };

    render(){
        return(
            <form>
                <label htmlFor="ime">Ime:</label>
                <input id="ime" name="firstName" placeholder="First name" 
                value={this.state.firstName} onChange={e => this.change(e)} />
                <br/>
                <label htmlFor="prezime" id="labprez">Prezime:</label>
                <input  id="prezime" name="lastName" placeholder="Last name" 
                value={this.state.lastName} onChange={e => this.change(e)} />
                <br/>
                <label htmlFor="broj">Kontakt broj:</label>
                <input id="broj" name="number" type="tel" placeholder="Kontakt broj" 
                value={this.state.number} onChange={e => this.change(e)} />
                <br/>
                <label htmlFor="email">Email:</label>
                <input id="email" name="email" placeholder="Email" 
                value={this.state.email} onChange={e => this.change(e)} />
                <br/>
                <label htmlFor="grad">Grad:</label>
                <input id="grad" name="city" placeholder="Grad" 
                value={this.state.city} onChange={e => this.change(e)} />
                <br/>
                <label htmlFor="ulica">Ulica:</label>
                <input id="ulica" name="street" placeholder="Ulica i kućni broj" 
                value={this.state.street} onChange={e => this.change(e)} />
                <br/>
                <label htmlFor="postanskibroj">Poštanski broj:</label>
                <input id="postanskibroj" name="postNumber" placeholder="npr. 10000" 
                value={this.state.postNumber} onChange={e => this.change(e)} />
                 <br/>
                <label htmlFor="iskustvo">Jeste li već radili ovakav ili sličan posao?</label>
                <input  id="iskustvo" type="radio"/> Indoor
                    <input name="catphotourl" placeholder="catphotourl" required/>       
            </form>
        );
    }
}
