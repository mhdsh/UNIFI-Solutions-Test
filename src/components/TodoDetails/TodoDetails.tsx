import { Button, Dialog, DialogContent, DialogTitle } from '@mui/material';
import { Todo } from '../../services/Models/Todo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface IProps {
  todo?: Todo,
  open: boolean;
  onClose(): any;
  onArchive?(id: number): any;
}

const TodoDetails = (props: IProps) => {
  const { todo, open, onClose, onArchive } = props;
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle><strong>Todo details</strong></DialogTitle>
      <DialogContent>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 450 }} size="small" aria-label="a dense table">
            <TableBody>
                <TableRow sx={{ height: 50, '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell><strong>Title</strong></TableCell>
                  <TableCell>{todo?.title}</TableCell>
                </TableRow>
                <TableRow sx={{ height: 50, '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell><strong>Description</strong></TableCell>
                  <TableCell>{todo?.description}</TableCell>
                </TableRow>
                <TableRow sx={{ height: 50, '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell><strong>Created At</strong></TableCell>
                  <TableCell>{todo?.createdAt}</TableCell>
                </TableRow>
                { todo?.finishedAt &&
                  <TableRow sx={{ height: 50, '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell><strong>Finished At</strong></TableCell>
                    <TableCell>{todo?.finishedAt}</TableCell>
                  </TableRow>
                }
                { todo?.ArchiveAt &&
                  <TableRow sx={{ height: 50, '&:last-child td, &:last-child th': { border: 0 } }}>
                    <TableCell><strong>Archived At</strong></TableCell>
                    <TableCell>{todo?.ArchiveAt}</TableCell>
                  </TableRow>
                }
            </TableBody>
          </Table>
        </TableContainer>
        
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Button variant="contained" onClick={() => {
            if (onArchive)
              onArchive(todo?.id || 0);
            onClose();
          }}>{ todo?.ArchiveAt ? 'Unarchive' : 'Archive' }</Button>
        </div>

      </DialogContent>
    </Dialog>
  );
};

export default TodoDetails;