import { useState } from 'react';
import { franqueados } from '../server/franqueados.json';

export default function Franqueado () {
    const [filteredFranqueados, setFilteredFranqueados] = useState([]);
    const [selectedUnidade, setSelectedUnidade] = useState('');
    const [selectedUF, setselectedUF] = useState('');

    function handleUnidade(event) {
        const selectedValue = event.target.value;

        const filtered = franqueados.filter(({ unidade }) => unidade === selectedValue)
        setFilteredFranqueados(filtered);
        setSelectedUnidade(filtered[0].unidade)
    }

    function handleUF(event) {
        const selectedValue = event.target.value;

        const filtered = franqueados.filter(({ uf }) => uf === selectedValue)
        setFilteredFranqueados(filtered);
        setselectedUF(filtered[0].uf);
        setSelectedUnidade('');
    }

    return(
        <>
            <div className="vertex-franqueados">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                        <p>Encontre o <strong>franqueado</strong> mais perto de <span>você</span></p>

                        <img src="/lupa-pesquisa.png" alt=""/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="area-white franqueados" id="a-vertex-na-sua-cidade">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <img src="/pesquise-franqueados.png" alt="Pesquise nossos franqueados"/>

                            <form>
                                <div className="table-responsive">
                                    <table>
                                        <thead>
                                        <tr>
                                            <th className="unidades">
                                            <span></span>
                                            <select value={selectedUnidade} onChange={handleUnidade}>
                                                <option className="title">Unidade</option>
                                                { franqueados.map(franqueado => {
                                                    return(
                                                        <option 
                                                            key={franqueado.id} 
                                                            value={franqueado.unidade}
                                                            { ...selectedUnidade === franqueado.unidade ? 'selected' : '' }
                                                        >
                                                            {franqueado.unidade}
                                                        </option>
                                                    )
                                                })}
                                            </select>
                                            </th>
                                            
                                            <th className="estados">
                                            <span></span>

                                            <select value={selectedUF} onChange={handleUF}>
                                                <option className="title">UF</option>
                                                <option value="SP">SP</option>
                                                <option value="SC">SC</option>
                                                <option value="RJ">RJ</option>
                                                <option value="MG">MG</option>
                                                <option value="GO">GO</option>
                                                <option value="AC">AC</option>
                                                <option value="DF">DF</option>
                                                <option value="ES">ES</option>
                                                <option value="PA">PA</option>
                                                <option value="MT">MT</option>
                                                <option value="PB">PB</option>
                                                <option value="PR">PR</option>
                                            </select>
                                            </th>
                                            <th>Telefone</th>
                                            <th>E-Mail</th>
                                            <th>Instagram</th>
                                        </tr>
                                        </thead>
                                    </table>
                                </div>
                            </form>
                        </div>

                        <div className="col-12">
                            <table className="table">
                                <tbody>
                                    { filteredFranqueados.map(franqueado => {
                                        return(
                                            <tr>
                                                <td>{franqueado.unidade}</td>
                                                <td>{franqueado.telefone}</td>
                                                <td>{franqueado.email}</td>
                                                <td>{franqueado.instagram}</td>
                                                <td>{franqueado.uf}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}