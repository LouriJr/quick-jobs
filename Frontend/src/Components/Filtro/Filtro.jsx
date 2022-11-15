import './Filtro.css'
function Filtro({ filtro, setFiltro }) {
    return (
        <div>
            <input type="search" name="filtro" placeholder="Buscar vagas!" value={filtro} onChange={(e) => { setFiltro(e.target.value); }} />
        </div>
    )
}

export default Filtro