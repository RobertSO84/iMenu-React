import React, { useState, useEffect } from 'react'
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableTablesAdmin } from "../../components/Admin"
import { Modalbasic } from "../../components/Common/";
import { useTable } from '../../hooks'

export function TablesAdmin() { 
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);


    const { loading, tables, getTables } = useTable();

    useEffect(() => getTables(), []);

    const openCloseModal = () => setShowModal((prev) => !prev);

    const addTable = () => {
        setTitleModal("Crear mesa");
        setContentModal(<h1>Formulario para crear mesa</h1>);
        openCloseModal();

    };



    return (
        <>
            <HeaderPage title="Mesas" btnTitle="Crear nueva mesa" bntnClick={addTable}  />

            {loading ? (
                <Loader active inLine="centered">
                    Cargando...
                </Loader>
            ) : (
                <TableTablesAdmin tables={tables}  />
            )}

            <Modalbasic 
                show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal}
            />
        </>
    )
}
