    import React, { useState } from 'react'

    export const Ejercicio4 = () => {
        const [items, setItems] = useState([])
        const [producto, setProducto] = useState('laptop')
        const [precio, setPrecio] = useState(0)
        const [cantidad, setCantidad] = useState(0)
        const [total, setTotal] = useState(0)
        function addItem() {
            const newItem = {
                producto: { producto },
                precio: { precio },
                cantidad: { cantidad }
            }
            setTotal(prevTotal => prevTotal + (precio * cantidad));
            setItems([...items, newItem]);
        }
        return (
            <div>
                <div class="mb-3">
                    <label>Producto: </label>
                    <select
                        value={producto}
                        onChange={e => setProducto(e.target.value)}
                    >
                        <option selected>Select one</option>
                        <option value="laptop">laptop</option>
                        <option value="mouse">mouse</option>
                        <option value="tv">tv</option>
                    </select>
                    <label for="" class="form-label">Precio : </label>
                    <input
                        type="number"
                        value={precio}
                        onChange={e => setPrecio(Number(e.target.value))}
                    />
                    <label for="" class="form-label">Cantidad : </label>
                    <input
                        type="number"
                        value={cantidad}
                        onChange={e => setCantidad(Number(e.target.value))}
                    />
                    <input
                        type="button"
                        value="añadir"
                        onClick={addItem}
                    />

                </div>
                <div>
                    <ul>
                        {items.map((item, index) => (
                            <li key={index}>
                                Producto: {item.producto.producto}, Precio: {item.precio.precio}, Cantidad: {item.cantidad.cantidad}
                            </li>
                        ))}
                    </ul>
                    <p>Total: {total}</p>
                </div>


            </div>
        )
    }
