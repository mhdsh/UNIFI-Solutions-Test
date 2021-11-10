import { Button, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { Todo } from '../../services/Models/Todo';
import uid from '../../utils/uid';

interface IProps {
  open: boolean;
  onClose(): any;
  onEntry?(todo: Todo): any;
  todoToEdit?: Todo;
}

const TodoEntry = (props: IProps) => {
  const { open, onClose, onEntry, todoToEdit } = props;

  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const handleAdd = () => {
    if (!title)
      return;

    const todo: Todo = {
      title,
      description,
      checked: false,
      id: todoToEdit ? todoToEdit.id : uid(),
      finishedAt: todoToEdit ? todoToEdit.finishedAt : '',
      createdAt: todoToEdit ? todoToEdit.createdAt : new Date().toLocaleDateString(),
      ArchiveAt:todoToEdit ? todoToEdit.ArchiveAt : ''
    };

    setTitle('');
    setDescription('');

    if (!onEntry)
      return;

    onEntry(todo);
    onClose();
  };

  useEffect(() => {
    if (todoToEdit) {
      setTitle(todoToEdit.title);
      setDescription(todoToEdit.description);
    }
  }, [todoToEdit]);
	
  return (
    <Dialog open={open} onClose={onClose}>
			<DialogTitle>{todoToEdit ? 'Edit Todo' : 'Add Todo'}</DialogTitle>
			<DialogContent style={{ width: 350, padding: '10px 20px 20px' }}>
        <TextField label="Task" variant="outlined" fullWidth value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField label="Description" variant="outlined" fullWidth multiline style={{ marginTop: 20 }} minRows={3} value={description} onChange={(e) => setDescription(e.target.value)} />
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button variant="contained" onClick={handleAdd}>{todoToEdit ? 'Edit Task' : 'Add Task'}</Button>
        </div>
			</DialogContent>
    </Dialog>
  );
};

export default TodoEntry;