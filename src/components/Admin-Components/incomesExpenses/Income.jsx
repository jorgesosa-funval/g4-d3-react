import React, { useState, useEffect } from 'react';

export const Income = () => {
    const [incomes, setIncomes] = useState([]);
    const [currentIncome, setCurrentIncome] = useState({ id: '', descripcion: '', monto: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        const storedIncomes = localStorage.getItem('incomes');
        if (storedIncomes) {
            setIncomes(JSON.parse(storedIncomes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('incomes', JSON.stringify(incomes));
    }, [incomes]);

    const handleAdd = () => {
        if (isEdit) {
            setIncomes(incomes.map(income => (income.id === currentIncome.id ? currentIncome : income)));
        } else {
            setIncomes([...incomes, { ...currentIncome, id: Date.now().toString() }]);
        }
        setCurrentIncome({ id: '', descripcion: '', monto: '' });
        setIsModalOpen(false);
        setIsEdit(false);
    };

    const handleDelete = (id) => {
        setIncomes(incomes.filter(income => income.id !== id));
        setDeleteId(null);
    };

    const handleDeleteAll = () => {
        setIncomes([]);
        setDeleteId(null);
    };

    const handleOpenModal = (income = { id: '', descripcion: '', monto: '' }, edit = false) => {
        setCurrentIncome(income);
        setIsEdit(edit);
        setIsModalOpen(true);
    };

    const handleDeleteConfirm = (id) => {
        setDeleteId(id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentIncome({ ...currentIncome, [name]: value });
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            setIsModalOpen(false);
            setDeleteId(null);
        }
        if (e.key === 'Enter' && e.target.name === 'monto') {
            handleAdd();
        }
    };

    const handleMontoChange = (e) => {
        const { value } = e.target;
        if (/^\d*\.?\d*$/.test(value)) {
            setCurrentIncome({ ...currentIncome, monto: value });
        }
    };

    return (
        <div className="bg-white py-3 w-[80%] ml-auto rounded-lg font-PrincipalFont">
           <div className="bg-primary-palet-700 w-full">
            <h2 className="text-3xl mb-4 py-6 px-4 text-white">Lista de Ingresos:</h2>
            </div>
            <table className="table-auto w-full mb-4 border-collapse">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Descripción</th>
                        <th className="px-4 py-2">Monto</th>
                        <th className="px-4 py-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {incomes.map((income) => (
                        <tr key={income.id} className="border-t border-b border-slate-400">
                            <td className="border border-slate-400 px-4 py-2">{income.descripcion}</td>
                            <td className="border border-slate-400 px-4 py-2">${income.monto}</td>
                            <td className="border border-slate-400 px-4 py-2 flex justify-around">
                                <button
                                    className="bg-slate-400 text-white px-2 py-1 rounded"
                                    onClick={() => handleOpenModal(income, true)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="bg-slate-400 text-white px-2 py-1 rounded"
                                    onClick={() => handleDeleteConfirm(income.id)}
                                >
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-around">
                <button
                    className="bg-slate-400 text-white px-4 py-2 rounded"
                    onClick={() => handleOpenModal()}
                >
                    Agregar
                </button>
                <button
                    className="bg-slate-400 text-white px-4 py-2 rounded"
                    onClick={() => handleDeleteConfirm('all')}
                >
                    Eliminar Todo
                </button>
            </div>

            {isModalOpen && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onKeyDown={handleKeyPress}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl mb-4">{isEdit ? 'Editar' : 'Agregar'} Ingreso</h2>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Descripción"
                            value={currentIncome.descripcion}
                            onChange={handleChange}
                            className="border p-2 mb-4 w-full"
                        />
                        <input
                            type="text"
                            name="monto"
                            placeholder="Monto"
                            value={currentIncome.monto}
                            onChange={handleMontoChange}
                            className="border p-2 mb-4 w-full"
                        />
                        <div className="flex justify-around">
                            <button
                                className="bg-slate-400 text-white px-4 py-2 rounded"
                                onClick={handleAdd}
                            >
                                Guardar
                            </button>
                            <button
                                className="bg-slate-400 text-white px-4 py-2 rounded"
                                onClick={() => setIsModalOpen(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {deleteId !== null && (
                <div
                    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
                    onKeyDown={handleKeyPress}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg">
                        <h2 className="text-2xl mb-4">Confirmar Eliminación</h2>
                        <p>¿Está seguro que desea eliminar {deleteId === 'all' ? 'todos los ingresos' : 'este ingreso'}?</p>
                        <div className="flex justify-around mt-4">
                            <button
                                className="bg-slate-400 text-white px-4 py-2 rounded"
                                onClick={() => deleteId === 'all' ? handleDeleteAll() : handleDelete(deleteId)}
                            >
                                Sí
                            </button>
                            <button
                                className="bg-slate-400 text-white px-4 py-2 rounded"
                                onClick={() => setDeleteId(null)}
                            >
                                No
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
