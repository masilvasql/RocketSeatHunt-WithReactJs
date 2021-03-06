import React from 'react'
import api from '../../services/api'
import './styles.css'

export default class Product extends React.Component{

    state = { 
        product:{}
    }

    async componentDidMount(){
        const { id } = this.props.match.params //  captura parâmetros da rota 
        const response = await api.get(`/products/${id}`)
        this.setState({product:response.data})
    }

    render(){
        const { product } = this.state 
        return(
            <div className = 'product-info'>
                <h1>{product.title}</h1>
                <p>{product.description}</p>
                <p>
                    URL:<a href={product.url}>{product.url}</a>
                </p>
            </div>
        )
    }
}