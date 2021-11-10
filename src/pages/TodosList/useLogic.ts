import { useEffect, useState } from 'react';
import { Todo } from '../../services/Models/Todo';
import todosList from '../../services/FakeAPI/Todos.json';

const useLogic = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [openEntry, setOpenEntry] = useState<boolean>(false);
  const [editIndex, setEditIndex] = useState<number>(-1);
  const [openDetails, setOpenDetails] = useState<boolean>(false);
  const [detailsIndex, setDetailsIndex] = useState<number>(-1);
    
  const handleCloseEntry = () => setOpenEntry(false);
  const handleOpenEntry = () => setOpenEntry(true);

  const handleCloseDetails = () => setOpenDetails(false);
  const handleOpenDetails = () => setOpenDetails(true);

  const toggleTodo = (id: number) => {
    const temp = [ ...todos ];
    const index = temp.findIndex(item => item.id === id);
    if (index !== -1) {
      temp[index].checked = !temp[index].checked;
      if (temp[index].checked)
        temp[index].finishedAt = new Date().toLocaleDateString();
      else
        temp[index].finishedAt = '';
    }
    setTodos(temp);
  };

  const deleteTodo = (id: number) => {
    const temp = [ ...todos ].filter(item => item.id !== id);
    setTodos(temp);
  };

  const handleAddTodo = (todo: Todo) => {
    const temp = [ ...todos ];
    temp.push(todo);
    setTodos(temp);
  };

  const handeEditTodo = (todo: Todo) => {
    const temp = [ ...todos ];
    const index = temp.findIndex(item => item.id === todo.id);
    if (index !== -1)
      temp[index] = todo;
    setTodos(temp);
  };

  const toggleArchive = (id: number) => {
    const temp = [ ...todos ];
    const index = temp.findIndex(item => item.id === id);
    if (index !== -1) {
      if (temp[index].ArchiveAt)
        temp[index].ArchiveAt = '';
      else
        temp[index].ArchiveAt = new Date().toLocaleDateString();
    }
  };

  useEffect(() => {
    setTodos(todosList);
  }, []);
    
  return {
    openEntry,
    handleCloseEntry,
    handleOpenEntry,
    todos,
    toggleTodo,
    handleAddTodo,
    handeEditTodo,
    deleteTodo,
    editIndex,
    setEditIndex,
    openDetails,
    detailsIndex,
    setDetailsIndex,
    handleOpenDetails,
    handleCloseDetails,
    toggleArchive
  };
};

export default useLogic;