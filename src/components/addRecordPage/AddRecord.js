import React, { useEffect, useState } from "react";
import useHttpHook from "../../Hooks/useHttpHook";
import classes from "./AddRecord.module.css";
import logo from "../../images/LOGO-10 1.png";
import LeptopForm from "./leptop information/LeptopForm";
import EmployeeForm from "./employee information/EmployeeForm";
function AddRecord() {
  const [sendRequest] = useHttpHook();
  const [page, setPage] = useState("employee");
  const [teams, setTeams] = useState();
  const [brands, setBrands] = useState();
  const [cpus, setCpus] = useState();
  const [positions, setPositions] = useState();
  useEffect(() => {
    let configForTeam = {
      url: "https://pcfy.redberryinternship.ge/api/teams",
      type: "get",
    };
    let configForPositions = {
      url: "https://pcfy.redberryinternship.ge/api/positions",
      type: "get",
    };
    let configForBrands = {
      url: "https://pcfy.redberryinternship.ge/api/brands",
      type: "get",
    };
    let configForCpus = {
      url: "https://pcfy.redberryinternship.ge/api/cpus",
      type: "get",
    };
    sendRequest(configForTeam, setTeams);
    sendRequest(configForPositions, setPositions);
    sendRequest(configForBrands, setBrands);
    sendRequest(configForCpus, setCpus);
  }, []);

  return (
    teams &&
    positions &&
    brands &&
    cpus && (
      <div className={classes.page}>
        <div className={classes.main}>
          <div className={classes.chooseForm}>
            <div className={page === "employee" ? classes.active : ""}>
              <span>თანამშრომლის ინფო</span>
            </div>
            <div className={page === "leptop" ? classes.active : ""}>
              <span>ლეპტოპის მახასიათებლები</span>
            </div>
          </div>
          <div className={classes.mainForm}>
            {page === "employee" && (
              <EmployeeForm
                changePage={setPage}
                positions={positions}
                teams={teams}
              />
            )}
            {page === "leptop" && (
              <LeptopForm brands={brands} cpus={cpus} changePage={setPage} />
            )}
          </div>
          <div>
            <img src={logo} />
          </div>
        </div>
      </div>
    )
  );
}

export default AddRecord;