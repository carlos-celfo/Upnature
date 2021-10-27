import http from "./Contactform.service";

class UpNatureForm {
    create(data) {http.post("/sandra", data)}
};

export default new UpNatureForm();