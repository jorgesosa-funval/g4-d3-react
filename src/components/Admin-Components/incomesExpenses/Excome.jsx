import React, { useState, useEffect } from 'react';

export const Excome = () => {
    const [excomes, setExcomes] = useState([]);
    const [currentExcome, setCurrentExcome] = useState({ id: '', descripcion: '', monto: '' });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [deleteId, setDeleteId] = useState(null);

    useEffect(() => {
        const storedExcomes = localStorage.getItem('excomes');
        if (storedExcomes) {
            setExcomes(JSON.parse(storedExcomes));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('excomes', JSON.stringify(excomes));
    }, [excomes]);

    const handleAdd = () => {
        if (isEdit) {
            setExcomes(excomes.map(excome => (excome.id === currentExcome.id ? currentExcome : excome)));
        } else {
            setExcomes([...excomes, { ...currentExcome, id: Date.now().toString() }]);
        }
        setCurrentExcome({ id: '', descripcion: '', monto: '' });
        setIsModalOpen(false);
        setIsEdit(false);
    };

    const handleDelete = (id) => {
        setExcomes(excomes.filter(excome => excome.id !== id));
        setDeleteId(null);
    };

    const handleDeleteAll = () => {
        setExcomes([]);
        setDeleteId(null);
    };

    const handleOpenModal = (excome = { id: '', descripcion: '', monto: '' }, edit = false) => {
        setCurrentExcome(excome);
        setIsEdit(edit);
        setIsModalOpen(true);
    };

    const handleDeleteConfirm = (id) => {
        setDeleteId(id);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCurrentExcome({ ...currentExcome, [name]: value });
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
            setCurrentExcome({ ...currentExcome, monto: value });
        }
    };

    return (
        <div className="bg-white py-3 w-[80%] ml-auto rounded-lg font-PrincipalFont">
            <div className="bg-primary-palet-700 w-full">
            <h2 className="text-3xl mb-4 py-6 px-4 text-white">Lista de Egresos:</h2>
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
                    {excomes.map((excome) => (
                        <tr key={excome.id} className="border-t border-b border-slate-400">
                            <td className="border border-slate-400 px-4 py-2">{excome.descripcion}</td>
                            <td className="border border-slate-400 px-4 py-2">${excome.monto}</td>
                            <td className="border border-slate-400 px-4 py-2 flex justify-around">
                                <button
                                    className="bg-slate-400 text-white px-2 py-1 rounded"
                                    onClick={() => handleOpenModal(excome, true)}
                                >
                                    Editar
                                </button>
                                <button
                                    className="bg-slate-400 text-white px-2 py-1 rounded"
                                    onClick={() => handleDeleteConfirm(excome.id)}
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
                        <h2 className="text-2xl mb-4">{isEdit ? 'Editar' : 'Agregar'} Egreso</h2>
                        <input
                            type="text"
                            name="descripcion"
                            placeholder="Descripción"
                            value={currentExcome.descripcion}
                            onChange={handleChange}
                            className="border p-2 mb-4 w-full"
                        />
                        <input
                            type="text"
                            name="monto"
                            placeholder="Monto"
                            value={currentExcome.monto}
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
                        <p>¿Está seguro que desea eliminar {deleteId === 'all' ? 'todos los egresos' : 'este egreso'}?</p>
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
