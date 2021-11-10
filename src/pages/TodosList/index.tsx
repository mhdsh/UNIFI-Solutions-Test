import { Button, Grid } from '@mui/material';
import TodoDetails from '../../components/TodoDetails/TodoDetails';
import TodoEntry from '../../components/TodoEntry/TodoEntry';
import TodoItem from '../../components/TodoItem/TodoItem';
import WeatherWidget from '../../components/WeatherWidget/WeatherWidget';
import Header from './Header/Header';

import './TodosList.scss';
import useLogic from './useLogic';

const TodosList = () => {

  const {
    openEntry,
    handleCloseEntry,
    handleOpenEntry,
    todos,
    toggleTodo,
    handleAddTodo,
    deleteTodo,
    editIndex,
    setEditIndex,
    handeEditTodo,
    detailsIndex,
    openDetails,
    setDetailsIndex,
    handleOpenDetails,
    handleCloseDetails,
    toggleArchive
  } = useLogic();
  
  return (
        <>
        <Grid container spacing={2} justifyContent="center">
          <Grid item lg={4}>
            
            <WeatherWidget />

            <Header title={'Todos list'} />
            
            <div className="todos">
              { todos.map((todo, index) => (
                <TodoItem
                  key={todo.id}
                  title={<>{todo.title}{(todo.ArchiveAt ? <small style={{ color: '#999' }}> (Archived)</small> : '')}</>}
                  checked={todo.checked}
                  onToggleTodo={() => toggleTodo(todo.id)}
                  onDelete={() => deleteTodo(todo.id)}
                  onEdit={() => {
                    setEditIndex(index);
                    handleOpenEntry();
                  }}
                  onView={() => {
                    setDetailsIndex(index);
                    handleOpenDetails();
                  }}
                />
              ))
              }
            </div>

            <div className="add-todo">
              <Button variant="contained" onClick={handleOpenEntry}>Add task</Button>
            </div>

          </Grid>
        </Grid>

        <TodoEntry
          open={openEntry}
          onClose={handleCloseEntry}
          onEntry={todo => {
            if (editIndex)
              handeEditTodo(todo);
            else
              handleAddTodo(todo);
          }}
          todoToEdit={editIndex !== -1 ? todos[editIndex] : undefined}
        />
        
        <TodoDetails
          open={openDetails}
          onClose={handleCloseDetails}
          todo={todos[detailsIndex]}
          onArchive={toggleArchive}
        />
        </>
  );
};

export default TodosList;