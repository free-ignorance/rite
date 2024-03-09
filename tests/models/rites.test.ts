import {
  getRite, defaultRiteResponse, slackRiteResponse
} from '../../src/models/rites';

describe('/models', () => {
  describe('/rites.ts', () => {
    describe('getRite', () => {
      it('should return a rite', () => {
        const rite = getRite();
        expect(rite).toBeDefined();
      });
    });
    describe('slackRiteResponse', () => {
      it('should return a slack rite', () => {
        const rite = slackRiteResponse();
        expect(rite).toBeDefined();
      });
      it('should return a slack rite with a response type', () => {
        const rite = slackRiteResponse();
        expect(rite.response_type).toEqual("in_channel");
      });
    });
    describe('defaultRiteResponse', () => {
      it('should return a rite response', () => {
        const rite = defaultRiteResponse();
        expect(rite).toBeDefined();
      });
      it('should return a rite response with a message', () => {
        const rite = defaultRiteResponse();
        expect(rite.data.rite).toBeDefined();
      });
    });
  });
});