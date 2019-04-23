
const {List, Node} = require('./');

describe('List', () => {
  describe('unshift', () => {
    describe('when the list is empty', () => {
      it('unshifts the value onto the list', () => {
        const list = new List;

        list.unshift(1);
        expect(list.head).toEqual(new Node(1));
      });
    });

    describe('when the list is not empty', () => {
      it('unshifts the value onto the list', () => {
        const list = new List;

        list.unshift(1);
        list.unshift(2);

        const expectedList = new Node(2);
        expectedList.next = new Node(1);
        expect(list.head).toEqual(expectedList);
      });
    });
  });

  describe('push', () => {
    describe('when the list is empty', () => {
      it('pushes the value onto the list', () => {
        const list = new List;

        list.push(1);
        expect(list.head).toEqual(new Node(1));
      });
    });

    describe('when the list is not empty', () => {
      it('pushes the value onto the list', () => {
        const list = new List;

        list.push(1);
        list.push(2);

        const expectedList = new Node(1);
        expectedList.next = new Node(2);
        expect(list.head).toEqual(expectedList);
      });
    });
  });

  describe('pop', () => {
    describe('when the list is empty', () => {
      it('returns null', () => {
        const list = new List;

        expect(list.pop()).toEqual(null);
      });
    });

    describe('when the list has one element', () => {
      it('returns the last item in the list', () => {
        const list = new List;
        list.push(1);

        expect(list.pop()).toEqual(1);
      });
    });

    describe('when the list is not empty', () => {
      it('returns the last item in the list', () => {
        const list = new List;
        list.push(1);
        list.push(2);

        expect(list.pop()).toEqual(2);
      });
    });
  });

  describe('shift', () => {
    describe('when the list is empty', () => {
      it('returns null', () => {
        const list = new List;

        expect(list.shift()).toEqual(null);
      });
    });

    describe('when the list is not empty', () => {
      it('returns the first item in the list', () => {
        const list = new List;
        list.push(1);
        list.push(2);

        expect(list.shift()).toEqual(1);
      });
    });
  });

  describe('deleteAt', () => {
    describe('when the list is empty', () => {
      it('does nothing', () => {
        const list = new List;

        list.deleteAt(10);
        expect(list.head).toEqual(null);
      });
    });

    describe('when the list has one element', () => {
      describe('when the index is > than 0', () => {
        it('does nothing', () => {
          const list = new List;
          list.push(1);

          list.deleteAt(10);
          expect(list.head).toEqual(new Node(1));
        });
      });

      describe('when the index is equal to 0', () => {
        it('deletes the element', () => {
          const list = new List;
          list.push(1);

          list.deleteAt(0);
          expect(list.head).toEqual(null);
        });
      });
    });

    describe('when the list has > one element', () => {
      describe('when the index is > list length', () => {
        it('does nothing', () => {
          const list = new List;
          list.push(1);
          list.push(2);

          const expectedList = new Node(1);
          expectedList.next = new Node(2);

          list.deleteAt(10);
          expect(list.head).toEqual(expectedList);
        });
      });

      describe('when the index is <= list length', () => {
        it('does nothing', () => {
          const list = new List;
          list.push(1);
          list.push(2);

          const expectedList = new Node(1);

          list.deleteAt(1);
          expect(list.head).toEqual(expectedList);
        });
      });
    });
  });
});
