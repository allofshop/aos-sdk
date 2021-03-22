import { ObjectValidator, ReputationScoreValidator } from '~/base/validator';

import { VoteDto } from '../type';

export class VoteValidator {
  private objectValidator: ObjectValidator;
  private reputationScoreValidator: ReputationScoreValidator;

  constructor() {
    this.objectValidator = new ObjectValidator();
    this.reputationScoreValidator = new ReputationScoreValidator();
  }

  public validate(body: VoteDto, location: string) {
    this.objectValidator.validate(body, location);
    this.reputationScoreValidator.validate(body.type, `${location}.type`);
  }
}
