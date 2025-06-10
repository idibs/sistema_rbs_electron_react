import { useState } from 'react';

export default function Tabela({ inputs, data }) {
    const [filters, setFilters] = useState({
        nome: '',
        quantidade: '',
        peso: '',
        tipo: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFilters({
            ...filters,
            [name]: value
        });
    };

    // Função para filtrar os dados
    const filteredData = data.filter((item) => {
        return (
            (filters.nome === '' || (item.nome ?? '').toLowerCase().includes(filters.nome.toLowerCase())) &&
            (filters.quantidade === '' || String(item.quantidade ?? '').includes(filters.quantidade)) &&
            (filters.peso === '' || String(item.peso ?? '').includes(filters.peso)) &&
            (filters.tipo === '' || (item.tipo ?? '').toLowerCase().includes(filters.tipo.toLowerCase()))
        );
    });

    return (
        <div className='w-full max-w-6xl mx-auto p-4'>
            <div className="grid grid-cols-2 gap-4 mb-1">
                <div>
                    <h1 className="font-bold">Filtros:</h1>
                    <div className="grid grid-cols-2 py-2 gap-2">
                        {inputs.map((element, idx) => (
                            <input
                                key={idx}
                                type={element.type}
                                placeholder={element.placeholder}
                                name={element.name}
                                value={filters[element.value]}
                                onChange={handleChange}
                                className="border border-gray-500 px-4 py-2 rounded"
                            />
                        ))}
                    </div>
                </div>
                <div>
                    <h1 className="font-bold">clp</h1>
                    <div className="grid grid-cols-2 py-2 gap-2">
                        <button className=''></button>
                    </div>
                </div>
            </div>
            <div>
                <table className="table-auto border-collapse w-full">
                    <thead>
                        <tr>
                            {Object.keys(data[0]).map((key) => (
                                <th key={key} className="border border-gray-500 px-1 py-1">{key}</th>
                            ))}
                            <th className="border border-gray-500 px-1 py-1">Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredData.map((item, index) => (
                            <tr key={index}>
                                {Object.values(item).map((value, idx) => (
                                    <td key={idx} className="text-center border border-gray-500 py-1">{value}</td>
                                ))}
                                <td className="text-center border border-gray-500 py-1">
                                    <button type="button" class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Editar</button>
                                    <button>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
