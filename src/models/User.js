class User {
  constructor(name, gender, birth, country, email, password, admin, date) {
    this._name = name;
    this._gender = gender;
    this._birth = birth;
    this._country = country;
    this._email = email;
    this._password = password;
    this._admin = admin;
    this._date = new Date().toLocaleDateString();
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
}
