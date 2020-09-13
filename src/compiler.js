function visit(node) {
  switch (node.kind) {
    case "operator":
      return visitOperator(node);
    case "identifier":
      return visitIdentifier(node);
    case "iterable":
      return visitIterable(node);
    case "literal":
      return visitLiteral(node);
    default:
      throw new Error(`Invalid kind ${node.kind}`);
  }
}

function visitLiteral(node) {
  return () => node.value;
}

function visitIdentifier(node) {
  return (ctx) => ctx[node.id];
}

function visitIterable(node) {
  switch (node.type) {
    case "dictionary":
      return (ctx) =>
        node.list
          .map(([k, v]) => [k.id, visit(v)(ctx)])
          .reduce((t, h) => ({ ...t, [h[0]]: h[1] }), {});
    case "map":
      return (ctx) =>
        new Map(node.list.map(([k, v]) => [visit(k)(ctx), visit(v)(ctx)]));
    case "list":
      return (ctx) => node.list.map((i) => visit(i)(ctx));
    default:
      throw new Error(`Invalid iterable type ${node.type}`);
  }
}

function visitOperator(node) {
  switch (node.category) {
    case "binary":
      return visitBinaryOperator(node);
    default:
      throw new Error(`unknown operator ${node.category}`);
  }
}

function visitBinaryOperator(node) {
  switch (node.type) {
    case "and": 
      return visitBinaryOperatorAnd(node);
    case "greater":
      return visitBinaryOperatorGreater(node);
    case "less":
        return visitBinaryOperatorLess(node);
    default:
      throw new Error(`unknown operator ${node.type}`)
      
  }
}

function visitBinaryOperatorSelect(node) {
  const lhs = visit(node.lhs);
  console.log(node.rhs.id);
  return () => {}
}

function visitBinaryOperatorAnd(node) {
  const lhs = visit(node.lhs);
  const rhs = visit(node.rhs);
  return (ctx) => lhs(ctx) && rhs(ctx);
}

function visitBinaryOperatorGreater(node) {
  const lhs = visit(node.lhs);
  const rhs = visit(node.rhs);
  return (ctx) => lhs(ctx) > rhs(ctx);
}

function visitBinaryOperatorLess(node) {
  const lhs = visit(node.lhs);
  const rhs = visit(node.rhs);
  return (ctx) => lhs(ctx) < rhs(ctx);
}


export const compile = visit;
