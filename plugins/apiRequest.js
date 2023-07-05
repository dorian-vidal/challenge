
//Adresse de base des appels API
var apiRootBase = "/api/";
//Définition des appels, APIs
var apiMap = {
  "submitQuestion": {
    "Url": apiRootBase + "question/create", // Adresse complète de l'appel
    "Methode": "POST"              // Méthode de l'appel
  },
};


var http = {
  resp: {},
  get: async function (url, headers, callback) {
    this.com("GET", url, headers, {}, async function (resp) {
      // return resp;
      callback(resp)
    })
  },
  put: async function (url, headers, body) {
    this.com("PUT", url, headers, body);
    return this.resp;
  },
  post: async function (url, headers, body) {
    this.com("POST", url, headers, body);
    return this.resp;
  },

  com: function (Method, url, headers, body, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(Method, url);
    //Envoie les informations du header adaptées avec la requête
    Object.keys(headers).some(function (key) {
      xhr.setRequestHeader(key, headers[key]);
    })
    if (["POST", "PUT"].indexOf(Method) > -1) {
      var Request = new FormData();
      Object.keys(body).some(function (key) {
        xhr.setRequestHeader(key, body[key]);
        Request.append(key, (typeof body[key] != "object") ? body[key] : JSON.stringify(body[key], null, 2));
      })
    }
    xhr.onload = function () {
      if (this.status === 200) {
        try {
          var json = JSON.parse(this.responseText);
          callback({
            statusCode: this.status,
            body: json
          })
        } catch (error) {
          callback({
            statusCode: this.status,
            body: {}
          })
        }
      } else {
        callback({
          statusCode: this.status,
          body: {}
        })
      }
    }
    xhr.send();
  }
}

function jsonDecode(data) {
  return data
}

function jsonEncode(data) {
  return data
}
// import store from '../store/index'
function changeNetworkIndicator(status) {
  // console.log(status);
  // store.state.networkIndicator = status;

}



var APICall = {
  setCredentials: function (login, eMail, pwd) {
    gLogin = login;
    gEmail = eMail;
    gPassword = pwd;
  },

  setSociety: function (society) {
    gSociety = society;
  },

  requestAPI: async function (action, silent, data) {
    var apiInfo = apiMap[action] || {};
    var response;
    if (apiMap[action] == null) {
      return {
        err: true,
        errCode: "NoAction",
        status: "KO",
        data: null
      };
    } else {
      var headers = {
        'Content-Type': 'application/json; charset=UTF-8',
        'X-Apple-Tz': '0',
        'X-Apple-Store-Front': '143444,12',
        'Cache-Control': 'no-cache',
        'X-MicrosoftAjax': 'Delta=true',
        'Access-Control-Allow-Origin': '*',
        'X-Requested-With': 'XMLHttpRequest',
      };

      var body = jsonEncode(data);
      //Formatage de l'url pour l'appel
      var url = apiInfo["Url"];
      if (!silent) {
        changeNetworkIndicator(true);
      }
      switch (apiInfo["Methode"]) {
        case "POST"://Methode pour les POST requests
          response = await http.post(
            url,
            headers,
            body
          );
          break;
        case "PUT": //Methode pour les PUT requests
          response = await http.put(
            url,
            headers,
            body
          );
          break;
        case "GET": //Methode pour les GET requests
          await http.get(
            url,
            headers, async function (res) {
              response = await res;
            }
          );
          console.log("step 0.1");
          break;
        default:
      }

      if (!silent) {
        changeNetworkIndicator(false);
      }
      if (response != null && (response.statusCode == 201 || response.statusCode == 200)) {
        try {
          var res = jsonDecode(response.body);
          return {
            err: res.isEmpty || false,
            errCode: res.isEmpty ? "NoResult" :response.statusCode,
            msg: res.isEmpty ? "" : res["msg"],
            status: res.isEmpty ? "KO" : res["Status"],
            data: res.isEmpty ? null : res["Data"]
          };
        } catch (e) {
          return {
            err: true,
            errCode: "BadData",
            status: "KO",
            data: null
          };
        }

      } else {
        // If the server did not return a 201 CREATED response,
        // then throw an exception.  
        return {
          err: true,
          errCode: "ConnectError",
          status: "KO",
          data: null
        };
      }

    }
  }
}

export default APICall;

