import React, { useState } from 'react';
import './styles.css'

function Main(){
    const initialValues ={
        name : '',
        price : '',
        desc : '',
    }

    const [items, setItems] = useState([]);
    const [values, setValues] = useState(initialValues);

    function handleChanges(key, value){
        setValues({
            ...values,
            [key] : value,
            data : formattedDate(),
        })
    }

    function handleInputChange(event){
        handleChanges(
            event.target.getAttribute('name'),
            event.target.value,
        )
       
    }

    function formattedDate(){
        var data = new Date(),
            dia  = data.getDate().toString().padStart(2, '0'),
            mes  = (data.getMonth()+1).toString().padStart(2, '0'),
            ano  = data.getFullYear();
        return dia+"/"+mes+"/"+ano;
    }

    return(
    <>
    <div className="header">
        <form onSubmit={function sendValues(e){
            e.preventDefault();
            setItems([...items, values]);
            setValues(initialValues)
        }}>
            <div className="form">
            <input 
                type="text" 
                name="name" 
                placeholder="Digite o nome do produto" 
                required="required"
                onChange={handleInputChange}
                value={values.name}
                maxLength='30'
            />
            <input 
                type="text" 
                name="price" 
                placeholder="Digite o preço do produto"
                required="required"
                onChange={handleInputChange}
                value={values.price}
            />
            <input 
                type="text" 
                name="desc"    
                placeholder="Descrição do produto"
                required="required"
                onChange={handleInputChange}
                value={values.desc}
                maxLength='30'
            />
            
        <button type="submit">Enviar</button>
        </div>
        </form>
    </div>
    <h1 className="title">Lista de itens</h1>
    <table>
        <thead>
            <tr>
                <td>Nome</td>
                <td> Preço</td>
                <td>Descrição</td>
                <td>Data de inclusão</td>
            </tr>
        </thead>
        <tbody>
            
            {items.map((item) =>{
                return(
                    <>
                   <tr>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.desc}</td>
                    <td>{item.data}</td>
                    </tr>
                    </>
                )
            })}
           
        </tbody>
    </table>
    </>
    )
    
}

export default Main;