// // import React, { useState } from 'react';
// // import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// // import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// // function createData(name, calories, fat, carbs, protein) {
// //   return { name, calories, fat, carbs, protein };
// // }

// // const columns = [
// //   { id: 'name', label: 'Dessert (100g serving)', align: 'left' },
// //   { id: 'calories', label: 'Calories', align: 'right' },
// //   { id: 'fat', label: 'Fat (g)', align: 'right' },
// //   { id: 'carbs', label: 'Carbs (g)', align: 'right' },
// //   { id: 'protein', label: 'Protein (g)', align: 'right' },
// // ];

// // const initialRows = [
// //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
// //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
// //   createData('Eclair', 262, 16.0, 24, 6.0),
// //   createData('Cupcake', 305, 3.7, 67, 4.3),
// //   createData('Gingerbread', 356, 16.0, 49, 3.9),
// // ];

// // export default function BasicTable() {
// //   const [rows, setRows] = useState(initialRows);
// //   const [draggingIndex, setDraggingIndex] = useState(null);

// //   const onDragEnd = (result) => {
// //     if (!result.destination) {
// //       return;
// //     }

// //     if (result.type === 'ROW') {
// //       const updatedRows = Array.from(rows);
// //       const [movedRow] = updatedRows.splice(result.source.index, 1);
// //       updatedRows.splice(result.destination.index, 0, movedRow);

// //       setRows(updatedRows);
// //       setDraggingIndex(null); // Reset the draggingIndex after drag and drop
// //     }
// //   };

// //   return (
// //     <>
// //       <h1>Basic Table In MUI Table</h1>
// //       <DragDropContext onDragEnd={onDragEnd}>
// //         <TableContainer component={Paper}>
// //           <Table sx={{ minWidth: 650 }} aria-label="simple table">
// //             <TableHead>
// //               <TableRow>
// //                 {columns.map((column) => (
// //                   <TableCell key={column.id} align={column.align}>
// //                     {column.label}
// //                   </TableCell>
// //                 ))}
// //               </TableRow>
// //             </TableHead>
// //             <Droppable droppableId="rows">
// //               {(provided) => (
// //                 <TableBody ref={provided.innerRef} {...provided.droppableProps}>
// //                   {rows.map((row, index) => (
// //                     <Draggable key={row.name} draggableId={row.name} index={index} type="ROW">
// //                       {(provided, snapshot) => (
// //                         <TableRow
// //                           ref={provided.innerRef}
// //                           {...provided.draggableProps}
// //                           {...provided.dragHandleProps}
// //                           style={{
// //                             ...provided.draggableProps.style,
// //                             backgroundColor: snapshot.isDragging ? 'lightgray' : 'white', // Highlight the currently dragging row
// //                           }}
// //                         >
// //                           {columns.map((column) => (
// //                             <TableCell key={column.id} align={column.align}>
// //                               {row[column.id]}
// //                             </TableCell>
// //                           ))}
// //                         </TableRow>
// //                       )}
// //                     </Draggable>
// //                   ))}
// //                   {provided.placeholder}
// //                 </TableBody>
// //               )}
// //             </Droppable>
// //           </Table>
// //         </TableContainer>
// //       </DragDropContext>
// //     </>
// //   );
// // }


// import React, { useState } from 'react';
// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
// import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// const columns = [
//   { id: 'name', label: 'Dessert (100g serving)', align: 'left' },
//   { id: 'calories', label: 'Calories', align: 'right' },
//   { id: 'fat', label: 'Fat (g)', align: 'right' },
//   { id: 'carbs', label: 'Carbs (g)', align: 'right' },
//   { id: 'protein', label: 'Protein (g)', align: 'right' },
// ];

// export default function BasicTable() {
//   const [draggingIndex, setDraggingIndex] = useState(null);

//   const onDragEnd = (result) => {
//     if (!result.destination) {
//       return;
//     }

//     if (result.type === 'COLUMN') {
//       const updatedColumns = Array.from(columns);
//       const [movedColumn] = updatedColumns.splice(result.source.index, 1);
//       updatedColumns.splice(result.destination.index, 0, movedColumn);

//       setDraggingIndex(null); // Reset the draggingIndex after drag and drop
//     }
//   };

//   return (
//     <>
//       <h1>Basic Table In MUI Table</h1>
//       <DragDropContext onDragEnd={onDragEnd}>
//         <TableContainer component={Paper}>
//           <Table sx={{ minWidth: 650 }} aria-label="simple table">
//             <TableHead>
//               <Droppable droppableId="columns" direction="horizontal">
//                 {(provided) => (
//                   <TableRow ref={provided.innerRef} {...provided.droppableProps}>
//                     {columns.map((column, index) => (
//                       <Draggable key={column.id} draggableId={column.id} index={index} type="COLUMN">
//                         {(provided, snapshot) => (
//                           <TableCell
//                             ref={provided.innerRef}
//                             {...provided.draggableProps}
//                             {...provided.dragHandleProps}
//                             style={{
//                               ...provided.draggableProps.style,
//                               backgroundColor: snapshot.isDragging ? 'lightgray' : 'white', // Highlight the currently dragging column
//                             }}
//                             align={column.align}
//                           >
//                             {column.label}
//                           </TableCell>
//                         )}
//                       </Draggable>
//                     ))}
//                     {provided.placeholder}
//                   </TableRow>
//                 )}
//               </Droppable>
//             </TableHead>
//             <TableBody>
//               <TableRow>
//                 {columns.map((column) => (
//                   <TableCell key={column.id} align={column.align}>
//                     Sample Data
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//       </DragDropContext>
//     </>
//   );
// }

