import { createRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';

type Food  = {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
}

interface ModalEditFoodProps {
  handleUpdateFood: (arg: Food) => void;
  setIsOpen: () => void;
  editingFood: {id: number};
  isOpen: boolean;
}

export function ModalEditFood(props: ModalEditFoodProps)  {


    const formRef = createRef()
  

  const handleSubmit = async (data: Food) => {

    props.handleUpdateFood(data);
    props.setIsOpen();
  };

  return(
      <Modal isOpen={props.isOpen} setIsOpen={props.setIsOpen}>
        <Form onSubmit={handleSubmit} initialData={props.editingFood}>
          <h1>Editar Prato</h1>
          <Input name="image" placeholder="Cole o link aqui" />

          <Input name="name" placeholder="Ex: Moda Italiana" />
          <Input name="price" placeholder="Ex: 19.90" />

          <Input name="description" placeholder="Descrição" />

          <button type="submit" data-testid="edit-food-button">
            <div className="text">Editar Prato</div>
            <div className="icon">
              <FiCheckSquare size={24} />
            </div>
          </button>
        </Form>
      </Modal>
    );
};

export default ModalEditFood;