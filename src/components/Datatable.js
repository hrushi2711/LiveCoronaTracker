import React, { useEffect, useState } from "react";
import axios from "axios";
import "../App.css";
// import mydata from "./mydata.json";
import {
  GridComponent,
  ColumnDirective,
  ColumnsDirective,
  Page,
  Inject,
} from "@syncfusion/ej2-react-grids";
var myArray = [];
const Datatable = () => {
  const [datam, setDatam] = useState([]);

  // console.log(mydata);

  useEffect(() => {
    axios
      .get("https://api.covid19india.org/data.json")
      .then((response) => {
        setDatam(response);
        process(response.data);
        // const dataObject = response.data;
        // console.log(response.data);
        // dataProcessing(dataObject);
      })
      .catch((err) => {
        console.log("Got ERROR :::::" + err);
      });
  }, []);

  const localData = datam;
  console.log("NEW API " + localData);
  // console.log("NEW  cases_time_series API " + localData.cases_time_series);

  // const {
  //   statewise: { deaths },
  // } = datam;
  // console.log("state " + localData.statewise[0]);

  function process(obj) {
    const { statewise } = obj;
    console.log("process function obj " + statewise);
    const raw = Object.values(statewise);
    console.log(raw[1]);
    // myArray.push(raw[1]);
    // myArray.push(raw[2]);
    for (var i = 0; i < raw.length; i++) {
      myArray.push(raw[i]);
    }

    // for (var prop in statewise) {
    //   if (statewise.hasOwnProperty(prop)) {
    //     // or if (Object.prototype.hasOwnProperty.call(obj,prop)) for safety...
    //     console.log("prop: " + prop + " value: " + obj[prop]);
    //   }
    // }
    // var state = statewise.map(function (item) {
    //   return item.state;
    // });
    // var active = statewise.map(function (item) {
    //   return item.active;
    // });
    // var confirmed = statewise.map(function (item) {
    //   return item.confirmed;
    // });
    // var deaths = statewise.map(function (item) {
    //   return item.deaths;
    // });
    // myArray.push(state);

    // console.log("stateis " + JSON.stringify(myArray));
    // for (let [key, value] of Object.entries(statewise)) {
    //   console.log(`${key}: ${value}`);
    // }
  }

  return (
    <div style={{ margin: "5%", marginTop: "5%" }} className="control-pane">
      <GridComponent
        id="Grid"
        dataSource={myArray}
        allowPaging={true}
        pageSettings={{ pageCount: 15 }}
      >
        <ColumnsDirective>
          <ColumnDirective
            field="state"
            headerText="State"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="active"
            headerText="Active"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="confirmed"
            headerText="Confirmed"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="recovered"
            headerText="Recovered"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="deaths"
            headerText="Deaths"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="lastupdatedtime"
            headerText="Last Updated Time"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="deltaconfirmed"
            headerText="Delta Confirmed"
            textAlign="Left"
            width="60"
          />
          <ColumnDirective
            field="deltadeaths"
            headerText="Delta Deaths"
            textAlign="Left"
            width="60"
          />
        </ColumnsDirective>

        <Inject services={[Page]} />
      </GridComponent>
    </div>
  );
};

export default Datatable;
