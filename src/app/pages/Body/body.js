import React, { useEffect } from "react";
import Container from "../Wrapper/containerWrapper";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "../Table/table";
import Card from "../Card/card";

import {
  fetchRecruitment,
  fetchRecruitmentStart,
} from "../../Redux/Recruitment/recruitment";
import { useSelector, useDispatch } from "react-redux";
import {
  pendingClearanceStart,
  fetchPendingClearance,
} from "../../Redux/PendingClearance/pendingClearance";
import {
  fetchQuotations,
  quotationsStart,
} from "../../Redux/Quotations/quotations";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./body.css";

const Body = () => {
  const recruitmentData = useSelector(fetchRecruitment);
  const pendingClearanceData = useSelector(fetchPendingClearance);
  const quotationsData = useSelector(fetchQuotations);
  const dispatch = useDispatch();
  console.log(quotationsData);

  useEffect(() => {
    dispatch(fetchRecruitmentStart());
    dispatch(pendingClearanceStart());
    dispatch(quotationsStart());
  }, []);

  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={8}>
          {recruitmentData && (
            <Paper elevation={3}>
              <Card name={"Recruitment"}>
                <Table data={recruitmentData} name={"Recruitment"} />
              </Card>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          {recruitmentData && (
            <Paper elevation={3}>
              <Card name={"Quotations"}>
                <div className="percentage__container">
                  <div className="percentage__container">
                    <Paper elevation={3}>
                      apple 1
                      <div className="percentage__paper">
                        <CircularProgressbar value={66} text={`${66}%`} />
                      </div>
                      apple
                    </Paper>
                  </div>
                  <div className="percentage__options">
                    <Paper elevation={3}>
                      <CircularProgressbar value={66} text={`${66}%`} />
                    </Paper>
                  </div>
                  <div className="percentage__options">
                    <Paper elevation={3}>
                      <CircularProgressbar value={66} text={`${66}%`} />
                    </Paper>
                  </div>
                  <div className="percentage__options">
                    <Paper elevation={3}>
                      <CircularProgressbar value={66} text={`${66}%`} />
                    </Paper>
                  </div>
                </div>
              </Card>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          {recruitmentData && (
            <Paper elevation={3}>
              <Card name={"Active Advisors"}>
                <Table data={recruitmentData} name={"Recruitment"} />
              </Card>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          {recruitmentData && (
            <Paper elevation={3}>
              <Card name={"Pending Clearance"}>
                <Table data={pendingClearanceData} name={"Pending Clearance"} />
              </Card>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Body;
