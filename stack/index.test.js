
const {Stack, Node} = require('./');

describe('Stack', () => {
  describe('isEmpty', () => {
    describe('when the stack is empty', () => {
      it('returns true', () => {
        const stack = new Stack;
        expect(stack.isEmpty()).toEqual(true);
      });
    });

    describe('when the stack is not empty', () => {
      it('returns false', () => {
        const stack = new Stack;
        stack.push(1);
        expect(stack.isEmpty()).toEqual(false);
      });
    });
  });

  describe('push', () => {
    describe('when the list is empty', () => {
      it('pushs the value onto the list', () => {
        const list = new Stack;

        list.push(1);
        expect(list.head).toEqual(new Node(1));
      });
    });

    describe('when the list is not empty', () => {
      it('pushs the value onto the list', () => {
        const list = new Stack;

        list.push(1);
        list.push(2);

        const expectedStack = new Node(2);
        expectedStack.next = new Node(1);
        expect(list.head).toEqual(expectedStack);
      });
    });
  });

  describe('pop', () => {
    describe('when the list is empty', () => {
      it('returns null', () => {
        const list = new Stack;

        expect(list.pop()).toEqual(null);
      });
    });

    describe('when the list is not empty', () => {
      it('returns the first item in the list', () => {
        const list = new Stack;
        list.push(1);
        list.push(2);

        expect(list.pop()).toEqual(2);
      });
    });
  });
});
