import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import "./table.css";

const BasicTable = ({ data, name }) => {
  return (
    <TableContainer component={Paper}>
      <Table className="table__container" aria-label="simple table">
        <TableHead>
          <TableRow>
            {data.data &&
              Object.keys(data.data[0]).map((tableTopic, index) => (
                <TableCell align={index !== 0 ? "right" : ""}>
                  {index !== 0 ? tableTopic : ""}
                </TableCell>
              ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.data.map((tableData, index) => (
            <TableRow key={index}>
              <TableCell component="th" scope="row">
                Week {tableData.Week}
              </TableCell>
              <TableCell align="right">
                {name === "Recruitment"
                  ? tableData.Existing
                  : tableData.Proposals}
              </TableCell>
              <TableCell align="right">
                {name === "Recruitment"
                  ? tableData.Registrations
                  : tableData.Suspense}
              </TableCell>
              <TableCell align="right">
                {name === "Recruitment"
                  ? tableData.NewCodes
                  : tableData.Renewals}
              </TableCell>
              {name !== "Recruitment" && (
                <TableCell align="right">{tableData.Revivals}</TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BasicTable;
