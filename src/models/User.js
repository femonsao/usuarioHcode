class User {
  constructor(name, gender, birth, country, email, password, admin, date) {
    this._id;
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._email = email;
    this._password = password;
    this._photo = photo;
    this._admin = admin;
    this._date = new Date().toLocaleDateString();
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get gender() {
    return this._gender;
  }
  get birth() {
    return this._birth;
  }
  get country() {
    return this._country;
  }
  get email() {
    return this._email;
  }
  get password() {
    return this._password;
  }
  get admin() {
    return this._admin;
  }
  get date() {
    return this._date;
  }
  get photo() {
    return this._photo;
  }
  set name(value) {
    this._name = value;
  }
  set gender(value) {
    this._gender = value;
  }
  set birth(value) {
    this._birth = value;
  }
  set country(value) {
    this._country = value;
  }
  set email(value) {
    this._email = value;
  }
  set password(value) {
    this._password = value;
  }
  set admin(value) {
    this._admin = value;
  }
  set date(value) {
    this._date = value;
  }
  set photo(values) {
    this._photo = value;
  }

  loadFromJson(json) {
    for (name in json) {
      switch (name) {
        case "_register":
          this[name] = new Date(json[name]);

          break;

        default:
          this[name] = json[name];
      }
    }
  }

  static getUserStorage() {
    let users = [];

    // if (sessionStorage.getItem("users")) {
    //   users = JSON.parse(sessionStorage.getItem("users"));
    // }
    if (localStorage.getItem("users")) {
      users = JSON.parse(localStorage.getItem("users"));
    }

    return users;
  }

  getNewId() {
    if (!window.id) window.id = 0;

    id++;

    return id;
  }

  save() {
    let users = User.getUserStorage();

    if (this.id > 0) {
      let user = users.filter(u => {
        return u._id === this.id;
      });
    } else {
      this._id = this.getNewId();
    }

    users.push(data);

    //sessionStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("users", JSON.stringify(users));
  }

  delete() {}

  update() {}
}
