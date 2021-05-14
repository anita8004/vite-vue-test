import axios from "axios";

const service = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: {
    Authorization: "",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true
  }
});

const refreshService = axios.create({
  baseURL: "",
  timeout: 10000,
  headers: {
    Authorization: "",
    "Access-Control-Allow-Origin": "*",
    crossDomain: true
  }
});

function updateAuthorizationToken() {
  axios.defaults.headers.common["Authorization"] = "";
}

function tokenExpired() {
  console.log("UNAUTHORIZED");
  // ElMessageBox({
  //   message: "Token expired",
  //   showConfirmButton: false,
  //   closeOnClickModal: false,
  //   closeOnPressEscape: false
  // }).then(() => {
  //   setTimeout(() => {
  //     ls.clear();
  //     location.href = "/";
  //   }, 1000);
  // });
}

function refreshToken() {
  // BaseApi.refreshToken()
  //   .then(result => {
  //     axios.defaults.headers.common["Authorization"] =
  //       result.data.token;
  //     ls.set<IUserStore>(userStorageKey, {
  //       ...userData,
  //       token: result.data.token
  //     });
  //   })
  //   .catch(error => {
  //     console.log(error?.data);
  //     tokenExpired();
  //   });
}

service.interceptors.request.use(
  config => {
    console.log("before request, ", config);
    return config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response?.status == 200) {
      return Promise.resolve(response);
    } else {
      if (response?.status === 204) {
        console.warn("未找到資源");
      }
      return Promise.reject(response);
    }
  },
  error => {
    if (error) {
      const errorResponse = error.response;
      if (errorResponse?.status === 401) {
        // const userData = ls.get<IUserStore>(userStorageKey);
        // if (userData?.token !== userData?.refresh_token) {
        //   refreshToken();
        // } else {
        //   tokenExpired();
        // }
      }
      // here we reject a error.response, so that user could catch it later on ...
      // 要回傳error.response才能接收到error message
      return Promise.reject(error.response);
    } else {
      // 斷網
      // here we reject a error.response, so that user could catch it later on ,.
      return Promise.reject(error.response);
    }
  }
);

function postFunc(url: string, data: Record<string, any>): Promise<any> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function refreshFunc(url: string, data: Record<string, any>): Promise<any> {
  return new Promise((resolve, reject) => {
    service({
      method: "post",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

function getFunc<T>(url: string, data: Record<string, any> = {}): Promise<T> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    service({
      method: "get",
      url,
      params: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function putFunc(url: string, data: Record<string, any>): Promise<any> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    service({
      method: "put",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function delFunc(url: string, data: Record<string, any>): Promise<any> {
  updateAuthorizationToken();
  return new Promise((resolve, reject) => {
    service({
      method: "delete",
      url,
      data: data
    })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  });
}

const BaseApi = {};
export default BaseApi;
