  // quan trong, ham kiem tra validate
  export const validate = (caseVal, value, checkCallBack) => {
    let regex;
    switch (caseVal) {
      // check phone
      case 0: {
        regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
        break;
      }
      case 1: {
        regex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
        break;
      }
      // check pass
    }
    if (caseVal === 2) {
      let password = document.getElementById("inputPassword").value;
      let rePass = document.getElementById("inputPasswordAgain").value;
      checkCallBack(password === rePass);
    } else {
      const check = value.match(regex);
      if (check) {
        checkCallBack(true);
      } else {
        checkCallBack(false);
      }
    }
  };

