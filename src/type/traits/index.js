export const Trait = {
    // Adder: types provide a '+' operator overload.
    Adder: Symbol.for('Adder'),

    // Comparer: types support ordering comparisons '<', '<=', '>', '>='.
    Comparer: Symbol.for('Comparer'),

    // Container: types support 'in' operations.
    Container: Symbol.for('Container'),

    // Divider: types support '/' operations.
    Divider: Symbol.for('Divider'),

    // FieldTester: types support the detection of field value presence.
    FieldTester: Symbol.for('FieldTester'),

    // Indexer: types support index access with dynamic values.
    Indexer: Symbol.for('Indexer'),

    // Iterable: types can be iterated over in comprehensions.
    Iterable: Symbol.for('Iterable'),

    // Iterator: types support iterator semantics.
    Iterator: Symbol.for('Iterator'),

    // Matcher: types support pattern matching via 'matches' method.
    Matcher: Symbol.for('Matcher'),

    // Modder: types support modulus operations '%'
    Modder:  Symbol.for('Modder'),

    // Multiplier: types support '*' operations.
    Multiplier:  Symbol.for('Multiplier'),

    // Negator: types support either negation via '!' or '-'
    Negator:  Symbol.for('Negator'),

    // Receiver: types support dynamic dispatch to instance methods.
    Receiver:  Symbol.for('Receiver'),

    // Sizer: types support the size() method.
    Sizer:  Symbol.for('Sizer'),

    // Subtractor: type support '-' operations.
    Subtractor:  Symbol.for('Subtractor')
}
