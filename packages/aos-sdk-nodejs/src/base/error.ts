export class ValueShouldBeString extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be string`;
  }
}

export class ValueShouldBeObject extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be object`;
  }
}

export class ValueShouldBeEnum extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be enum`;
  }
}

export class ValueShouldBeBoolean extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be boolean`;
  }
}

export class ValueShouldBeArray extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be array`;
  }
}

export class ValueShouldBeDate extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be date`;
  }
}

export class ValueShouldBeNumber extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} should be number`;
  }
}

export class InvalidKeyInObject extends Error {
  private location: string;
  constructor(location: string) {
    super();
    this.location = location;
    this.message = `${this.location} is invalid key`;
  }
}
