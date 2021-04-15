import {
  InvalidKeyInObject,
  ValueShouldBeArray,
  ValueShouldBeBoolean,
  ValueShouldBeDate,
  ValueShouldBeEnum,
  ValueShouldBeNumber,
  ValueShouldBeObject,
  ValueShouldBeString,
} from './error';
import { DateQuery, NumberQuery } from './type';
import { Gender, ReputationScore, SortType } from './vo';

export class StringValidator {
  public validate(value: string, location: string) {
    if (typeof value !== 'string') {
      throw new ValueShouldBeString(location);
    }
  }
}

export class BooleanValidator {
  public validate(value: boolean, location: string) {
    if (typeof value !== 'boolean') {
      throw new ValueShouldBeBoolean(location);
    }
  }
}

export class StringArrayValidator {
  private stringValidator: StringValidator;
  constructor() {
    this.stringValidator = new StringValidator();
  }

  public validate(value: string[], location: string) {
    if (typeof value !== 'object' || value.length === undefined) {
      throw new ValueShouldBeArray(location);
    }

    value.map((am) => {
      this.stringValidator.validate(am, location);
    });
  }
}

export class DateValidator {
  public validate(value: Date, location: string) {
    if (!(value instanceof Date)) {
      throw new ValueShouldBeDate(location);
    }
  }
}

export class ObjectValidator {
  public validate(value: Record<string, unknown>, location: string) {
    console.log('>>>>>>', typeof value);
    if (typeof value !== 'object') {
      throw new ValueShouldBeObject(location);
    }
  }
}

export class NumberValidator {
  public validate(value: number, location: string) {
    if (typeof value !== 'number') {
      throw new ValueShouldBeNumber(location);
    }
  }
}

export class NumberQueryValidator {
  private objectValidator: ObjectValidator;
  private numberValidator: NumberValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.numberValidator = new NumberValidator();
  }

  public validate(query: NumberQuery, location: string) {
    this.objectValidator.validate(query, location);

    for (const property in query) {
      if (
        property !== '$gt' &&
        property !== '$gte' &&
        property !== '$lt' &&
        property !== '$lte'
      ) {
        throw new InvalidKeyInObject(`${location}.${property}`);
      }
    }

    if (query.$gt !== undefined) {
      this.numberValidator.validate(query.$gt, `${location}.$gt`);
    }

    if (query.$gte !== undefined) {
      this.numberValidator.validate(query.$gte, `${location}.$gte`);
    }

    if (query.$lt !== undefined) {
      this.numberValidator.validate(query.$lt, `${location}.$lt`);
    }

    if (query.$lte !== undefined) {
      this.numberValidator.validate(query.$lte, `${location}.$lte`);
    }
  }
}

export class DateQueryValidator {
  private objectValidator: ObjectValidator;
  private dateValidator: DateValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.dateValidator = new DateValidator();
  }

  public validate(query: DateQuery, location: string) {
    this.objectValidator.validate(query, location);

    for (const property in query) {
      if (
        property !== '$gt' &&
        property !== '$gte' &&
        property !== '$lt' &&
        property !== '$lte'
      ) {
        throw new InvalidKeyInObject(`${location}.${property}`);
      }
    }

    if (query.$gt !== undefined) {
      this.dateValidator.validate(query.$gt, `${location}.$gt`);
    }

    if (query.$gte !== undefined) {
      this.dateValidator.validate(query.$gte, `${location}.$gte`);
    }

    if (query.$lt !== undefined) {
      this.dateValidator.validate(query.$lt, `${location}.$lt`);
    }

    if (query.$lte !== undefined) {
      this.dateValidator.validate(query.$lte, `${location}.$lte`);
    }
  }
}

export class SortQueryValidator {
  private objectValidator: ObjectValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
  }

  public validate(sort: Record<string, SortType>, location: string) {
    this.objectValidator.validate(sort, location);

    for (const property in sort) {
      if (sort[property] !== SortType.ASC && sort[property] !== SortType.DESC) {
        throw new ValueShouldBeEnum(`${location}.${property}`);
      }
    }
  }
}

export class ReputationScoreValidator {
  public validate(type: ReputationScore, location: string) {
    if (type !== ReputationScore.LIKE && type !== ReputationScore.DISLIKE) {
      throw new ValueShouldBeEnum(location);
    }
  }
}

export class GenderValidator {
  public validate(gender: Gender, location: string) {
    if (gender !== Gender.MALE && gender !== Gender.FEMALE) {
      throw new ValueShouldBeEnum(location);
    }
  }
}
