import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';

import './TodoItem.scss';

interface IProps {
  title: React.ReactNode;
  checked?: boolean;
  onView?(): any;
  onEdit?(): any;
  onDelete?(): any;
  onToggleTodo?(): any;
}

const TodoItem = (props: IProps) => {
  const { title, checked, onView, onEdit, onDelete, onToggleTodo } = props;

  return (
        <>
          <div className={`todo-item${checked ? ' checked' : ''}`} onClick={onToggleTodo}>
              <span className="circle" />
              <span className="title">{title}</span>
              <div className="actions" onClick={(e) => e.stopPropagation()}>
                <DeleteRoundedIcon className="delete" onClick={onDelete} />
                <EditRoundedIcon className="edit" onClick={onEdit} />
                <VisibilityRoundedIcon className="view" onClick={onView} />
              </div>
          </div>
          <br />
        </>
  );
};

export default TodoItem;