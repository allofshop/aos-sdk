/**
 * @copyright Copyright © 2018-2019 Corretto, Inc. All rights reserved.
 */

import {
  InvalidKeyInObject,
  ValueShouldBeBoolean,
  ValueShouldBeDate,
  ValueShouldBeEnum,
  ValueShouldBeNumber,
  ValueShouldBeObject,
  ValueShouldBeString,
} from '../src/base/error';
import {
  BooleanValidator,
  DateQueryValidator,
  DateValidator,
  GenderValidator,
  NumberQueryValidator,
  NumberValidator,
  ObjectValidator,
  ReputationScoreValidator,
  SortQueryValidator,
  StringArrayValidator,
  StringValidator,
} from '../src/base/validator';
import { Gender, ReputationScore, SortType } from '../src/base/vo';

const location = 'location';

describe('StringValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const stringValidator: StringValidator = new StringValidator();

    expect(stringValidator.validate('hello', location)).toBeUndefined();
  });

  it('string 이외의 값 넣은 경우 - number', async () => {
    const stringValidator: StringValidator = new StringValidator();

    try {
      stringValidator.validate(2 as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeString(location));
    }
  });
});

describe('BooleanValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const booleanValidator: BooleanValidator = new BooleanValidator();

    expect(booleanValidator.validate(true, location)).toBeUndefined();
  });

  it('boolean 이외의 값 넣은 경우 - string', async () => {
    const booleanValidator: BooleanValidator = new BooleanValidator();

    try {
      booleanValidator.validate('hello' as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeBoolean(location));
    }
  });
});

describe('StringArrayValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const stringArrayValidator: StringArrayValidator = new StringArrayValidator();

    expect(
      stringArrayValidator.validate(['hello', 'hi'], location)
    ).toBeUndefined();
  });

  it('string[] 이외의 값 넣은 경우 - array에 number', async () => {
    const stringArrayValidator: StringArrayValidator = new StringArrayValidator();

    try {
      stringArrayValidator.validate(['hello', 2] as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeString(location));
    }
  });
});

describe('DateValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const dateValidator: DateValidator = new DateValidator();

    expect(dateValidator.validate(new Date(), location)).toBeUndefined();
  });

  it('Date 이외의 값 넣은 경우 - string', async () => {
    const dateValidator: DateValidator = new DateValidator();

    try {
      dateValidator.validate('hello' as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeDate(location));
    }
  });
});

describe('ObjectValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const objectValidator: ObjectValidator = new ObjectValidator();

    expect(
      objectValidator.validate({ hello: 'hello', hi: 'hi', total: 2 }, location)
    ).toBeUndefined();
  });

  it('object 이외의 값 넣은 경우 - string', async () => {
    const objectValidator: ObjectValidator = new ObjectValidator();

    try {
      objectValidator.validate('hello' as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeObject(location));
    }
  });
});

describe('NumberValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const numberValidator: NumberValidator = new NumberValidator();

    expect(numberValidator.validate(2, location)).toBeUndefined();
  });

  it('number 이외의 값 넣은 경우 - string', async () => {
    const numberValidator: NumberValidator = new NumberValidator();

    try {
      numberValidator.validate('hello' as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeNumber(location));
    }
  });
});

describe('NumberQueryValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const numberQueryValidator: NumberQueryValidator = new NumberQueryValidator();

    expect(
      numberQueryValidator.validate({ $gt: 2, $lte: 10 }, location)
    ).toBeUndefined();
  });

  it('numberQuery 이외의 값 넣은 경우 - string', async () => {
    const numberQueryValidator: NumberQueryValidator = new NumberQueryValidator();

    try {
      numberQueryValidator.validate({ $gt: 2, $lte: 'hello' } as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeNumber(`${location}.$lte`));
    }
  });

  it('numberQuery 이외의 key 값을 가지고 있는 경우', async () => {
    const numberQueryValidator: NumberQueryValidator = new NumberQueryValidator();

    try {
      numberQueryValidator.validate(
        { $gt: 2, $lte: 10, foo: 'hello' } as any,
        location
      );
    } catch (error) {
      expect(error).toStrictEqual(new InvalidKeyInObject(`${location}.foo`));
    }
  });
});

describe('DateQueryValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const dateQueryValidator: DateQueryValidator = new DateQueryValidator();

    expect(
      dateQueryValidator.validate(
        { $gt: new Date(), $lte: new Date() },
        location
      )
    ).toBeUndefined();
  });

  it('dateQuery 이외의 값 넣은 경우 - string', async () => {
    const dateQueryValidator: DateQueryValidator = new DateQueryValidator();

    try {
      dateQueryValidator.validate(
        { $gt: new Date(), $lte: 'hello' } as any,
        location
      );
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeDate(`${location}.$lte`));
    }
  });

  it('dateQuery 이외의 key 값을 가지고 있는 경우', async () => {
    const dateQueryValidator: DateQueryValidator = new DateQueryValidator();

    try {
      dateQueryValidator.validate(
        { $gt: new Date(), $lte: new Date(), foo: 'hello' } as any,
        location
      );
    } catch (error) {
      expect(error).toStrictEqual(new InvalidKeyInObject(`${location}.foo`));
    }
  });
});

describe('SortQueryValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const sortQueryValidator: SortQueryValidator = new SortQueryValidator();

    expect(
      sortQueryValidator.validate(
        { index: SortType.ASC, title: SortType.DESC },
        location
      )
    ).toBeUndefined();
  });

  it('sortQuery 이외의 값 넣은 경우 - string', async () => {
    const sortQueryValidator: SortQueryValidator = new SortQueryValidator();

    try {
      sortQueryValidator.validate(
        { index: SortType.ASC, title: 'hello' } as any,
        location
      );
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeEnum(`${location}.title`));
    }
  });
});

describe('ReputationScoreValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const reputationScoreValidator: ReputationScoreValidator = new ReputationScoreValidator();

    expect(
      reputationScoreValidator.validate(ReputationScore.LIKE, location)
    ).toBeUndefined();
  });

  it('reputationScore 이외의 값 넣은 경우 - string', async () => {
    const reputationScoreValidator: ReputationScoreValidator = new ReputationScoreValidator();

    try {
      reputationScoreValidator.validate('hello' as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeEnum(location));
    }
  });
});

describe('GenderValidator', () => {
  it('제대로된 값 넣은 경우', async () => {
    const genderValidator: GenderValidator = new GenderValidator();

    expect(genderValidator.validate(Gender.FEMALE, location)).toBeUndefined();
  });

  it('Gender 이외의 값 넣은 경우 - string', async () => {
    const genderValidator: GenderValidator = new GenderValidator();

    try {
      genderValidator.validate('hello' as any, location);
    } catch (error) {
      expect(error).toStrictEqual(new ValueShouldBeEnum(location));
    }
  });
});
