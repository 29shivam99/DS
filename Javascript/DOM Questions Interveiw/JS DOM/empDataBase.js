(async function () {
  let res = await fetch("./data.json");
  let data = await res.json();
  let employees = data;

  let empList = document.querySelector(".employees-list");
  let empInfo = document.querySelector(".employees-info");

  employees.forEach((item) => {
    let employee = document.createElement("div");
    employee.classList.add("employee");
    employee.innerHTML = item.firstName;
    let crossMark = document.createElement("span");
    crossMark.innerHTML = "X";
    crossMark.classList.add("cross-mark");
    employee.append(crossMark);
    empList.append(employee);
  });

  // selected employee

  let selectedEmp = employees[0];
  let selectedEmpInfo = document.createElement("div");
  selectedEmpInfo.innerHTML = `
    <img src="${selectedEmp.imageURL}" />
    <span>
      ${selectedEmp.firstName} 
      ${selectedEmp.lastName} 
    </span>
    <span>
      ${selectedEmp.email} 
    </span>
    <span>
      ${selectedEmp.contactNumber} 
    </span>
    <span>
      ${selectedEmp.DOB} 
    </span>
    <span>
      ${selectedEmp.address} 
    </span>
  `;

  selectedEmpInfo.classList.add("selected-emp-info");

  empInfo.append(selectedEmpInfo);
})();
