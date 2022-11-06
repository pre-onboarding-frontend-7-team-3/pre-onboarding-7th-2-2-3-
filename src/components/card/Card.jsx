import React from "react";
import Paper from "@mui/material/Paper";
import { Box, Grid, Table, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { getDateCovert } from "utils/getDateCovert";
import { vaildateCost } from "utils/vaildateCost";

const Card = ({ cardData }) => {
  function createData(name, description) {
    return { name, description };
  }

  const rows = [
    createData("상태", cardData.status),
    createData("광고 생성일", getDateCovert(cardData.startDate)),
    createData("일 희망 예산", vaildateCost(cardData.budget)),
    createData("광고 수익률", cardData.report.roas + "%"),
    createData("매출", vaildateCost(cardData.report.convValue)),
    createData("광고 비용", vaildateCost(cardData.report.cost)),
  ];

  return (
    <Grid item xs={4}>
      <Paper
        elevation={3}
        sx={{
          width: 305,
          borderRadius: "10px",
          border: "1 solid #D1D8DC",
        }}
      >
        <Box
          sx={{
            width: "305px",
            margin: "40px 20px 21px 10px",
          }}
        >
          <Box
            sx={{
              height: "40px",
            }}
          />
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#3A474E",
              marginBottom: "40px",
              marginLeft: "20px",
            }}
          >
            {cardData.title}
          </Typography>
          <Table sx={{ width: "280px" }} aria-label="simple table">
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell
                    component="th"
                    scope="row"
                    sx={{ fontWeight: 500, fontSize: "12px", color: "#94A2AD" }}
                  >
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Button
            variant="outlined"
            sx={{
              width: "92px",
              height: "40px",
              color: "#3A474E",
              fontWeight: "700",
              fontSize: "14px",
              margin: "20px 0 20px 20px",
              border: "1 solid black",
            }}
          >
            수정하기
          </Button>
        </Box>
      </Paper>
    </Grid>
  );
};

export default Card;
