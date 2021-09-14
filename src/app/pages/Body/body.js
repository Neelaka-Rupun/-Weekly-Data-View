import React, { useEffect } from "react";
import Container from "../Wrapper/containerWrapper";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Table from "../Table/table";
import Card from "../Card/card";
import MeetingNotesAction from "../MeetingNotesAction/meetingNotesActions";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import Select from "../select/select";

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
import {
  fetchActiveAdvisors,
  activeAdvisorsStart,
} from "../../Redux/ActiveAdvisors/activeAdvisors";
import {
  fetchWeeklyNotes,
  weeklyNotesStart,
} from "../../Redux/WeeklyNotes/weeklyNotes";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./body.css";

const Body = () => {
  const recruitmentData = useSelector(fetchRecruitment);
  const pendingClearanceData = useSelector(fetchPendingClearance);
  const quotationsData = useSelector(fetchQuotations);
  const activeAdvisors = useSelector(fetchActiveAdvisors);
  const weeklyNotes = useSelector(fetchWeeklyNotes);
  const dispatch = useDispatch();
  console.log(weeklyNotes);

  useEffect(() => {
    dispatch(fetchRecruitmentStart());
    dispatch(pendingClearanceStart());
    dispatch(quotationsStart());
    dispatch(activeAdvisorsStart());
    dispatch(weeklyNotesStart());
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
                <div className="process__container">
                  {quotationsData &&
                    quotationsData.data.map((data) => (
                      <Paper elevation={3} className="process__inner">
                        <div className="process__topic">Week {data.Week}</div>
                        <div className="process__singleProcess">
                          <CircularProgressbar
                            value={data.Percentage}
                            text={`${data.Percentage}%`}
                            styles={buildStyles({
                              pathTransitionDuration: 0.5,
                              textColor:
                                data.Percentage < 75
                                  ? "red"
                                  : data.Percentage > 75 &&
                                    data.Percentage < 100
                                  ? "amber"
                                  : "green",
                              pathColor:
                                data.Percentage < 75
                                  ? "red"
                                  : data.Percentage > 75 &&
                                    data.Percentage < 100
                                  ? "amber"
                                  : "green",
                            })}
                          />
                        </div>
                        <div className="process__topic">{`T : ${data.T} | A : ${data.A}`}</div>
                      </Paper>
                    ))}
                </div>
              </Card>
            </Paper>
          )}
        </Grid>
        <Grid item xs={12} sm={6} md={8}>
          {recruitmentData && (
            <Paper elevation={3}>
              <Card name={"Active Advisors"}>
                <div className="process__container">
                  {activeAdvisors &&
                    activeAdvisors.data.map((data) => (
                      <Paper elevation={3} className="process__inner">
                        <div className="process__topic">Week {data.Week}</div>
                        <div className="process__singleProcess">
                          <CircularProgressbar
                            value={data.Percentage}
                            text={`${data.Percentage}%`}
                            styles={buildStyles({
                              pathTransitionDuration: 0.5,
                              textColor:
                                data.Percentage < 75
                                  ? "red"
                                  : data.Percentage > 75 &&
                                    data.Percentage < 100
                                  ? "amber"
                                  : "green",
                              pathColor:
                                data.Percentage < 75
                                  ? "red"
                                  : data.Percentage > 75 &&
                                    data.Percentage < 100
                                  ? "amber"
                                  : "green",
                            })}
                          />
                        </div>
                        <div className="process__topic">{`T : ${data.T} | A : ${data.A}`}</div>
                      </Paper>
                    ))}
                </div>
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
        <Grid item xs={12} sm={6} md={8}>
          {weeklyNotes && (
            <Paper elevation={3}>
              <Card name={"Active Advisors"}>
                <div className="process__container">
                  {weeklyNotes &&
                    weeklyNotes.data.map((data) => (
                      <Paper elevation={3} className="process__inner">
                        <div className="process__topic">Week {data.Week}</div>
                        <div className="process__singleProcess"></div>
                        <ol>
                          {data.data.map((task) => (
                            <li>
                              <Grid item xs={12} sm={6} md={8}>
                                {task.description}
                              </Grid>
                              <Grid item xs={12} sm={6} md={4}>
                                {task.status !== "" ? (
                                  <CheckCircleIcon />
                                ) : (
                                  <CancelIcon />
                                )}
                              </Grid>
                            </li>
                          ))}
                        </ol>
                        <div className="process__topic">{data.date}</div>
                        <div className="process__topic">
                          <Select selected={data.action} />
                        </div>
                      </Paper>
                    ))}
                </div>
              </Card>
            </Paper>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Body;
