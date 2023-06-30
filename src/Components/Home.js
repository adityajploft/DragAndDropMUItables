import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
// import './DataTable.css'; // Import the custom CSS file

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 90,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
  },
];

const computeFullName = (firstName, lastName) => {
  return `${firstName || ''} ${lastName || ''}`;
};

const initialRows = [
  { id: '1', lastName: 'Snow', firstName: 'Jon', age: 35, fullName: computeFullName('Jon', 'Snow') },
  { id: '2', lastName: 'Lannister', firstName: 'Cersei', age: 42, fullName: computeFullName('Cersei', 'Lannister') },
  { id: '3', lastName: 'Lannister', firstName: 'Jaime', age: 45, fullName: computeFullName('Jaime', 'Lannister') },
  { id: '4', lastName: 'Stark', firstName: 'Arya', age: 16, fullName: computeFullName('Arya', 'Stark') },
  { id: '5', lastName: 'Targaryen', firstName: 'Daenerys', age: null, fullName: computeFullName('Daenerys', 'Targaryen') },
  { id: '6', lastName: 'Melisandre', firstName: null, age: 150, fullName: computeFullName(null, 'Melisandre') },
  { id: '7', lastName: 'Clifford', firstName: 'Ferrara', age: 44, fullName: computeFullName('Ferrara', 'Clifford') },
  { id: '8', lastName: 'Frances', firstName: 'Rossini', age: 36, fullName: computeFullName('Rossini', 'Frances') },
  { id: '9', lastName: 'Roxie', firstName: 'Harvey', age: 65, fullName: computeFullName('Harvey', 'Roxie') },
];

export default function DataTable() {
  const [rows, setRows] = useState(initialRows);
  const [draggingId, setDraggingId] = useState(null);

  const onDragStart = (start) => {
    setDraggingId(start.draggableId);
  };

  const onDragEnd = (result) => {
    setDraggingId(null);

    if (!result.destination) {
      return;
    }

    const updatedRows = Array.from(rows);
    const [removed] = updatedRows.splice(result.source.index, 1);
    updatedRows.splice(result.destination.index, 0, removed);

    setRows(updatedRows);
  };

  return (
    <div className="custom-data-grid-container">
      <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <Droppable droppableId="rows">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSizeOptions={[5, 10]}
                checkboxSelection
                disableSelectionOnClick
                components={{
                  row: (props) => (
                    <Draggable
                      draggableId={props.row.id}
                      index={props.index}
                      isDragDisabled={draggingId !== null}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`custom-data-grid-row ${
                            props.isDragging ? 'dragging' : ''
                          }`}
                        >
                          {columns.map((column) => (
                            <div
                              key={column.field}
                              style={{
                                width: column.width,
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                              }}
                            >
                              {column.field === 'fullName' ? props.row.fullName : props.row[column.field]}
                            </div>
                          ))}
                        </div>
                      )}
                    </Draggable>
                  ),
                }}
              />
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}
