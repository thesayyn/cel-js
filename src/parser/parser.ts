import antlr4 from 'antlr4';
import CELLexer from './gen/CELLexer';
import CELParser from './gen/CELParser';
import CELVisitor from './gen/CELVisitor';

export function parse(input: string) {
    const chars = new antlr4.InputStream(input);
    const lexer = new CELLexer(chars);
    const tokens = new antlr4.CommonTokenStream(lexer);
    const parser = new CELParser(tokens);
    parser.buildParseTrees = true;
    parser.start().accept(new Visitor());
}



class Visitor extends CELVisitor {

    visit(ctx: antlr4.ParserRuleContext) {
        switch (ctx.constructor) {
            case CELParser.StartContext:
                return this.visitStart(ctx);
            case CELParser.ExprContext:
                return this.visitExpr(ctx);
        }
    }

    visitStart(ctx) {
        return this.visit(ctx.expr());
    }

    visitExpr(ctx) {
        console.log(ctx.op);
        const result = this.visit(ctx.e);

        throw new Error('Method not implemented.');
    }
    visitConditionalOr(ctx) {
        throw new Error('Method not implemented.');
    }
    visitConditionalAnd(ctx) {
        throw new Error('Method not implemented.');
    }
    visitRelation(ctx) {
        throw new Error('Method not implemented.');
    }
    visitCalc(ctx) {
        throw new Error('Method not implemented.');
    }
    visitMemberExpr(ctx) {
        throw new Error('Method not implemented.');
    }
    visitLogicalNot(ctx) {
        throw new Error('Method not implemented.');
    }
    visitNegate(ctx) {
        throw new Error('Method not implemented.');
    }
    visitSelectOrCall(ctx) {
        throw new Error('Method not implemented.');
    }
    visitPrimaryExpr(ctx) {
        throw new Error('Method not implemented.');
    }
    visitIndex(ctx) {
        throw new Error('Method not implemented.');
    }
    visitCreateMessage(ctx) {
        throw new Error('Method not implemented.');
    }
    visitIdentOrGlobalCall(ctx) {
        throw new Error('Method not implemented.');
    }
    visitNested(ctx) {
        throw new Error('Method not implemented.');
    }
    visitCreateList(ctx) {
        throw new Error('Method not implemented.');
    }
    visitCreateStruct(ctx) {
        throw new Error('Method not implemented.');
    }
    visitConstantLiteral(ctx) {
        throw new Error('Method not implemented.');
    }
    visitExprList(ctx) {
        throw new Error('Method not implemented.');
    }
    visitFieldInitializerList(ctx) {
        throw new Error('Method not implemented.');
    }
    visitMapInitializerList(ctx) {
        throw new Error('Method not implemented.');
    }
    visitInt(ctx) {
        throw new Error('Method not implemented.');
    }
    visitUint(ctx) {
        throw new Error('Method not implemented.');
    }
    visitDouble(ctx) {
        throw new Error('Method not implemented.');
    }
    visitString(ctx) {
        throw new Error('Method not implemented.');
    }
    visitBytes(ctx) {
        throw new Error('Method not implemented.');
    }
    visitBoolTrue(ctx) {
        throw new Error('Method not implemented.');
    }
    visitBoolFalse(ctx) {
        throw new Error('Method not implemented.');
    }
    visitNull(ctx) {
        throw new Error('Method not implemented.');
    }
}