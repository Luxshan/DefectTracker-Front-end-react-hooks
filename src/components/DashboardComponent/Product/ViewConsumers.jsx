import React from "react";
import MUIDataTable from "mui-datatables";

const columns = [
  {
    name: "CompanyName",
    label: "Company Name",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "Email",
    label: "Email",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseType",
    label: "License Type",
    options: {
      filter: true,
      sort: true
    }
  },
  {
    name: "LicenseStart",
    label: "License Start Date",
    options: {
      filter: true,
      sort: false
    }
  },
  {
    name: "LicenseExpire",
    label: "License Expiry Date",
    options: {
      filter: true,
      sort: false
    }
  }
];

const data = [
  {
    CompanyName: "Samuel Gnanam IT Centre",
    Email: "admin@sgic.com",
    LicenseType: "Platinum",
    LicenseStart: "12-03-2019",
    LicenseExpire: "12-03-2024"
  },
  {
    CompanyName: "Samuel Gnanam IT Centre",
    Email: "admin@sgic.com",
    LicenseType: "Platinum",
    LicenseStart: "12-03-2019",
    LicenseExpire: "12-03-2024"
  },
  {
    CompanyName: "Samuel Gnanam IT Centre",
    Email: "admin@sgic.com",
    LicenseType: "Platinum",
    LicenseStart: "12-03-2019",
    LicenseExpire: "12-03-2024"
  }
];

const options = {
  filterType: "checkbox",
  selectableRows: "none",
  responsive: "scrollMaxHeight"
};

export default function ViewConsumers() {
  return (
    <div>
      <MUIDataTable data={data} columns={columns} options={options} />
    </div>
  );
}
