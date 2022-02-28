import React, { useState, useEffect } from 'react';
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableCategoryAdmin, AddEditCategoryForm } from "../../components/Admin";
import { Modalbasic } from "../../components/Common";
import { useCategory } from "../../hooks";

export function CategoriesAdmin() {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState(null);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false);
    const { loading, categories, getCategories, deleteCategory } = useCategory();
    
    useEffect(() => getCategories(), [refetch]);

    const openCloseModal = () => setShowModal(prev => !prev); 
    const onRefetch = () => setRefetch(prev => !prev); 


    const addCategory = () => {
        setTitleModal("Nueva categoría");
        setContentModal(<AddEditCategoryForm onClose={openCloseModal} onRefetch={onRefetch} />);
        openCloseModal();
    }

    const updateCategory = (data) => {
        setTitleModal("Actualizar categoria");
        setContentModal(
          <AddEditCategoryForm
            onClose={openCloseModal}
            onRefetch={onRefetch}
            category={data}
          />
        );
        openCloseModal();
      };

    const onDeleteCategory = async (data) => {
    const result = window.confirm(`¿Eliminar categoría ${data.title}?`);
    if (result) {
        await deleteCategory(data.id);
        onRefetch();
    }
    };
    


    return (
        <>
            <HeaderPage title="Categorias" btnTitle="Nueva categoría" btnClick={addCategory} />
            {loading ? (
                <Loader active inline>
                    Cargando...
                </Loader>
            ) : (
                <TableCategoryAdmin 
                    categories={categories}
                    updateCategory={updateCategory}
                    deleteCategory={onDeleteCategory} 
                />
            )}
            <Modalbasic
                show={showModal}
                onClose={openCloseModal}
                title={titleModal}
                children={contentModal} 
            />
        </>
    );
}
