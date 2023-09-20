import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Styles from './Home.module.scss';
import Avatar from '@mui/material/Avatar';
import Leaderboard from './Leaderboard';
import {Clock} from 'assets/icons/index';
import { FastRun } from 'assets/icons/index';
import { StarIcon } from 'assets/icons/index';

function createData(
  id: number,
  name: string ,
  waktu: number,
  jaraktempuh: number,
  point: number,
) {
  return { id, name, waktu, jaraktempuh, point };
}

const rows = [
  createData(4, 'Frozen yoghurt', 159, 100, 100),
  createData(5, 'Ice cream sandwich', 237, 9.0, 37),
  createData(6, 'Eclair', 262, 16.0, 24),
  createData(7, 'Cupcake', 305, 3.7, 67),
  createData(8, 'mahmud', 356, 16.0, 49),
  createData(9, 'mahmud', 356, 16.0, 49),
  createData(10, 'mahmud', 356, 16.0, 49),
  createData(11, 'mahmud', 356, 16.0, 49),
  createData(12, 'mahmud', 356, 16.0, 49),
  createData(13, 'mahmud', 356, 16.0, 49),
  createData(14, 'mahmud', 356, 16.0, 49),
];

export default function DenseTable() {
  return (
    <>
        <TableContainer component={Paper}  className={Styles.body}>
          <Table sx={{ minWidth: 380, minHeight: 450 }} size="small" aria-label="a dense table">
            {/* <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead> */}
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell className={Styles.id}>{row.id}</TableCell>
                  <Avatar className={Styles.profile} src="assets/images/profil.jpg" />
                  <TableCell className={Styles.all} component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <Clock className={Styles.icon}/>
                  <TableCell className={Styles.all} align="right">{row.waktu}</TableCell>
                  <FastRun className={Styles.icon}/>
                  <TableCell className={Styles.all} align="right">{row.jaraktempuh}</TableCell>
                  <StarIcon className={Styles.icon}/>
                  <TableCell className={Styles.all} align="right">{row.point}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </>
  );
}