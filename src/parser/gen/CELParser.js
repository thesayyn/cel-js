// Generated from /Users/thesayyn/Documents/cel-js/bin/../src/parser/gen/CEL.g4 by ANTLR 4.9.2
// jshint ignore: start
import antlr4 from 'antlr4';
import CELListener from './CELListener.js';
import CELVisitor from './CELVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003&\u00d3\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007",
    "\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f",
    "\u0004\r\t\r\u0004\u000e\t\u000e\u0003\u0002\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0005\u0003&\n\u0003\u0003\u0004\u0003\u0004\u0003\u0004\u0007\u0004",
    "+\n\u0004\f\u0004\u000e\u0004.\u000b\u0004\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0007\u00053\n\u0005\f\u0005\u000e\u00056\u000b\u0005\u0003\u0006",
    "\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0003\u0006\u0007\u0006",
    ">\n\u0006\f\u0006\u000e\u0006A\u000b\u0006\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0007\u0007L\n\u0007\f\u0007\u000e\u0007O\u000b\u0007\u0003\b",
    "\u0003\b\u0006\bS\n\b\r\b\u000e\bT\u0003\b\u0003\b\u0006\bY\n\b\r\b",
    "\u000e\bZ\u0003\b\u0005\b^\n\b\u0003\t\u0003\t\u0003\t\u0003\t\u0003",
    "\t\u0003\t\u0003\t\u0003\t\u0005\th\n\t\u0003\t\u0005\tk\n\t\u0003\t",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0003\t\u0005\tu\n",
    "\t\u0003\t\u0005\tx\n\t\u0003\t\u0007\t{\n\t\f\t\u000e\t~\u000b\t\u0003",
    "\n\u0005\n\u0081\n\n\u0003\n\u0003\n\u0003\n\u0005\n\u0086\n\n\u0003",
    "\n\u0005\n\u0089\n\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n\u0003\n",
    "\u0005\n\u0091\n\n\u0003\n\u0005\n\u0094\n\n\u0003\n\u0003\n\u0003\n",
    "\u0005\n\u0099\n\n\u0003\n\u0005\n\u009c\n\n\u0003\n\u0003\n\u0005\n",
    "\u00a0\n\n\u0003\u000b\u0003\u000b\u0003\u000b\u0007\u000b\u00a5\n\u000b",
    "\f\u000b\u000e\u000b\u00a8\u000b\u000b\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\f\u0003\f\u0003\f\u0007\f\u00b1\n\f\f\f\u000e\f\u00b4\u000b",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0007",
    "\r\u00be\n\r\f\r\u000e\r\u00c1\u000b\r\u0003\u000e\u0005\u000e\u00c4",
    "\n\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0005\u000e\u00c9\n\u000e",
    "\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e\u0003\u000e",
    "\u0005\u000e\u00d1\n\u000e\u0003\u000e\u0002\u0005\n\f\u0010\u000f\u0002",
    "\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014\u0016\u0018\u001a\u0002\u0005",
    "\u0003\u0002\u0003\t\u0003\u0002\u0019\u001b\u0004\u0002\u0014\u0014",
    "\u0018\u0018\u0002\u00ed\u0002\u001c\u0003\u0002\u0002\u0002\u0004\u001f",
    "\u0003\u0002\u0002\u0002\u0006\'\u0003\u0002\u0002\u0002\b/\u0003\u0002",
    "\u0002\u0002\n7\u0003\u0002\u0002\u0002\fB\u0003\u0002\u0002\u0002\u000e",
    "]\u0003\u0002\u0002\u0002\u0010_\u0003\u0002\u0002\u0002\u0012\u009f",
    "\u0003\u0002\u0002\u0002\u0014\u00a1\u0003\u0002\u0002\u0002\u0016\u00a9",
    "\u0003\u0002\u0002\u0002\u0018\u00b5\u0003\u0002\u0002\u0002\u001a\u00d0",
    "\u0003\u0002\u0002\u0002\u001c\u001d\u0005\u0004\u0003\u0002\u001d\u001e",
    "\u0007\u0002\u0002\u0003\u001e\u0003\u0003\u0002\u0002\u0002\u001f%",
    "\u0005\u0006\u0004\u0002 !\u0007\u0016\u0002\u0002!\"\u0005\u0006\u0004",
    "\u0002\"#\u0007\u0017\u0002\u0002#$\u0005\u0004\u0003\u0002$&\u0003",
    "\u0002\u0002\u0002% \u0003\u0002\u0002\u0002%&\u0003\u0002\u0002\u0002",
    "&\u0005\u0003\u0002\u0002\u0002\',\u0005\b\u0005\u0002()\u0007\u000b",
    "\u0002\u0002)+\u0005\b\u0005\u0002*(\u0003\u0002\u0002\u0002+.\u0003",
    "\u0002\u0002\u0002,*\u0003\u0002\u0002\u0002,-\u0003\u0002\u0002\u0002",
    "-\u0007\u0003\u0002\u0002\u0002.,\u0003\u0002\u0002\u0002/4\u0005\n",
    "\u0006\u000201\u0007\n\u0002\u000213\u0005\n\u0006\u000220\u0003\u0002",
    "\u0002\u000236\u0003\u0002\u0002\u000242\u0003\u0002\u0002\u000245\u0003",
    "\u0002\u0002\u00025\t\u0003\u0002\u0002\u000264\u0003\u0002\u0002\u0002",
    "78\b\u0006\u0001\u000289\u0005\f\u0007\u00029?\u0003\u0002\u0002\u0002",
    ":;\f\u0003\u0002\u0002;<\t\u0002\u0002\u0002<>\u0005\n\u0006\u0004=",
    ":\u0003\u0002\u0002\u0002>A\u0003\u0002\u0002\u0002?=\u0003\u0002\u0002",
    "\u0002?@\u0003\u0002\u0002\u0002@\u000b\u0003\u0002\u0002\u0002A?\u0003",
    "\u0002\u0002\u0002BC\b\u0007\u0001\u0002CD\u0005\u000e\b\u0002DM\u0003",
    "\u0002\u0002\u0002EF\f\u0004\u0002\u0002FG\t\u0003\u0002\u0002GL\u0005",
    "\f\u0007\u0005HI\f\u0003\u0002\u0002IJ\t\u0004\u0002\u0002JL\u0005\f",
    "\u0007\u0004KE\u0003\u0002\u0002\u0002KH\u0003\u0002\u0002\u0002LO\u0003",
    "\u0002\u0002\u0002MK\u0003\u0002\u0002\u0002MN\u0003\u0002\u0002\u0002",
    "N\r\u0003\u0002\u0002\u0002OM\u0003\u0002\u0002\u0002P^\u0005\u0010",
    "\t\u0002QS\u0007\u0015\u0002\u0002RQ\u0003\u0002\u0002\u0002ST\u0003",
    "\u0002\u0002\u0002TR\u0003\u0002\u0002\u0002TU\u0003\u0002\u0002\u0002",
    "UV\u0003\u0002\u0002\u0002V^\u0005\u0010\t\u0002WY\u0007\u0014\u0002",
    "\u0002XW\u0003\u0002\u0002\u0002YZ\u0003\u0002\u0002\u0002ZX\u0003\u0002",
    "\u0002\u0002Z[\u0003\u0002\u0002\u0002[\\\u0003\u0002\u0002\u0002\\",
    "^\u0005\u0010\t\u0002]P\u0003\u0002\u0002\u0002]R\u0003\u0002\u0002",
    "\u0002]X\u0003\u0002\u0002\u0002^\u000f\u0003\u0002\u0002\u0002_`\b",
    "\t\u0001\u0002`a\u0005\u0012\n\u0002a|\u0003\u0002\u0002\u0002bc\f\u0005",
    "\u0002\u0002cd\u0007\u0012\u0002\u0002dj\u0007&\u0002\u0002eg\u0007",
    "\u0010\u0002\u0002fh\u0005\u0014\u000b\u0002gf\u0003\u0002\u0002\u0002",
    "gh\u0003\u0002\u0002\u0002hi\u0003\u0002\u0002\u0002ik\u0007\u0011\u0002",
    "\u0002je\u0003\u0002\u0002\u0002jk\u0003\u0002\u0002\u0002k{\u0003\u0002",
    "\u0002\u0002lm\f\u0004\u0002\u0002mn\u0007\f\u0002\u0002no\u0005\u0004",
    "\u0003\u0002op\u0007\r\u0002\u0002p{\u0003\u0002\u0002\u0002qr\f\u0003",
    "\u0002\u0002rt\u0007\u000e\u0002\u0002su\u0005\u0016\f\u0002ts\u0003",
    "\u0002\u0002\u0002tu\u0003\u0002\u0002\u0002uw\u0003\u0002\u0002\u0002",
    "vx\u0007\u0013\u0002\u0002wv\u0003\u0002\u0002\u0002wx\u0003\u0002\u0002",
    "\u0002xy\u0003\u0002\u0002\u0002y{\u0007\u000f\u0002\u0002zb\u0003\u0002",
    "\u0002\u0002zl\u0003\u0002\u0002\u0002zq\u0003\u0002\u0002\u0002{~\u0003",
    "\u0002\u0002\u0002|z\u0003\u0002\u0002\u0002|}\u0003\u0002\u0002\u0002",
    "}\u0011\u0003\u0002\u0002\u0002~|\u0003\u0002\u0002\u0002\u007f\u0081",
    "\u0007\u0012\u0002\u0002\u0080\u007f\u0003\u0002\u0002\u0002\u0080\u0081",
    "\u0003\u0002\u0002\u0002\u0081\u0082\u0003\u0002\u0002\u0002\u0082\u0088",
    "\u0007&\u0002\u0002\u0083\u0085\u0007\u0010\u0002\u0002\u0084\u0086",
    "\u0005\u0014\u000b\u0002\u0085\u0084\u0003\u0002\u0002\u0002\u0085\u0086",
    "\u0003\u0002\u0002\u0002\u0086\u0087\u0003\u0002\u0002\u0002\u0087\u0089",
    "\u0007\u0011\u0002\u0002\u0088\u0083\u0003\u0002\u0002\u0002\u0088\u0089",
    "\u0003\u0002\u0002\u0002\u0089\u00a0\u0003\u0002\u0002\u0002\u008a\u008b",
    "\u0007\u0010\u0002\u0002\u008b\u008c\u0005\u0004\u0003\u0002\u008c\u008d",
    "\u0007\u0011\u0002\u0002\u008d\u00a0\u0003\u0002\u0002\u0002\u008e\u0090",
    "\u0007\f\u0002\u0002\u008f\u0091\u0005\u0014\u000b\u0002\u0090\u008f",
    "\u0003\u0002\u0002\u0002\u0090\u0091\u0003\u0002\u0002\u0002\u0091\u0093",
    "\u0003\u0002\u0002\u0002\u0092\u0094\u0007\u0013\u0002\u0002\u0093\u0092",
    "\u0003\u0002\u0002\u0002\u0093\u0094\u0003\u0002\u0002\u0002\u0094\u0095",
    "\u0003\u0002\u0002\u0002\u0095\u00a0\u0007\r\u0002\u0002\u0096\u0098",
    "\u0007\u000e\u0002\u0002\u0097\u0099\u0005\u0018\r\u0002\u0098\u0097",
    "\u0003\u0002\u0002\u0002\u0098\u0099\u0003\u0002\u0002\u0002\u0099\u009b",
    "\u0003\u0002\u0002\u0002\u009a\u009c\u0007\u0013\u0002\u0002\u009b\u009a",
    "\u0003\u0002\u0002\u0002\u009b\u009c\u0003\u0002\u0002\u0002\u009c\u009d",
    "\u0003\u0002\u0002\u0002\u009d\u00a0\u0007\u000f\u0002\u0002\u009e\u00a0",
    "\u0005\u001a\u000e\u0002\u009f\u0080\u0003\u0002\u0002\u0002\u009f\u008a",
    "\u0003\u0002\u0002\u0002\u009f\u008e\u0003\u0002\u0002\u0002\u009f\u0096",
    "\u0003\u0002\u0002\u0002\u009f\u009e\u0003\u0002\u0002\u0002\u00a0\u0013",
    "\u0003\u0002\u0002\u0002\u00a1\u00a6\u0005\u0004\u0003\u0002\u00a2\u00a3",
    "\u0007\u0013\u0002\u0002\u00a3\u00a5\u0005\u0004\u0003\u0002\u00a4\u00a2",
    "\u0003\u0002\u0002\u0002\u00a5\u00a8\u0003\u0002\u0002\u0002\u00a6\u00a4",
    "\u0003\u0002\u0002\u0002\u00a6\u00a7\u0003\u0002\u0002\u0002\u00a7\u0015",
    "\u0003\u0002\u0002\u0002\u00a8\u00a6\u0003\u0002\u0002\u0002\u00a9\u00aa",
    "\u0007&\u0002\u0002\u00aa\u00ab\u0007\u0017\u0002\u0002\u00ab\u00b2",
    "\u0005\u0004\u0003\u0002\u00ac\u00ad\u0007\u0013\u0002\u0002\u00ad\u00ae",
    "\u0007&\u0002\u0002\u00ae\u00af\u0007\u0017\u0002\u0002\u00af\u00b1",
    "\u0005\u0004\u0003\u0002\u00b0\u00ac\u0003\u0002\u0002\u0002\u00b1\u00b4",
    "\u0003\u0002\u0002\u0002\u00b2\u00b0\u0003\u0002\u0002\u0002\u00b2\u00b3",
    "\u0003\u0002\u0002\u0002\u00b3\u0017\u0003\u0002\u0002\u0002\u00b4\u00b2",
    "\u0003\u0002\u0002\u0002\u00b5\u00b6\u0005\u0004\u0003\u0002\u00b6\u00b7",
    "\u0007\u0017\u0002\u0002\u00b7\u00bf\u0005\u0004\u0003\u0002\u00b8\u00b9",
    "\u0007\u0013\u0002\u0002\u00b9\u00ba\u0005\u0004\u0003\u0002\u00ba\u00bb",
    "\u0007\u0017\u0002\u0002\u00bb\u00bc\u0005\u0004\u0003\u0002\u00bc\u00be",
    "\u0003\u0002\u0002\u0002\u00bd\u00b8\u0003\u0002\u0002\u0002\u00be\u00c1",
    "\u0003\u0002\u0002\u0002\u00bf\u00bd\u0003\u0002\u0002\u0002\u00bf\u00c0",
    "\u0003\u0002\u0002\u0002\u00c0\u0019\u0003\u0002\u0002\u0002\u00c1\u00bf",
    "\u0003\u0002\u0002\u0002\u00c2\u00c4\u0007\u0014\u0002\u0002\u00c3\u00c2",
    "\u0003\u0002\u0002\u0002\u00c3\u00c4\u0003\u0002\u0002\u0002\u00c4\u00c5",
    "\u0003\u0002\u0002\u0002\u00c5\u00d1\u0007\"\u0002\u0002\u00c6\u00d1",
    "\u0007#\u0002\u0002\u00c7\u00c9\u0007\u0014\u0002\u0002\u00c8\u00c7",
    "\u0003\u0002\u0002\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9\u00ca",
    "\u0003\u0002\u0002\u0002\u00ca\u00d1\u0007!\u0002\u0002\u00cb\u00d1",
    "\u0007$\u0002\u0002\u00cc\u00d1\u0007%\u0002\u0002\u00cd\u00d1\u0007",
    "\u001c\u0002\u0002\u00ce\u00d1\u0007\u001d\u0002\u0002\u00cf\u00d1\u0007",
    "\u001e\u0002\u0002\u00d0\u00c3\u0003\u0002\u0002\u0002\u00d0\u00c6\u0003",
    "\u0002\u0002\u0002\u00d0\u00c8\u0003\u0002\u0002\u0002\u00d0\u00cb\u0003",
    "\u0002\u0002\u0002\u00d0\u00cc\u0003\u0002\u0002\u0002\u00d0\u00cd\u0003",
    "\u0002\u0002\u0002\u00d0\u00ce\u0003\u0002\u0002\u0002\u00d0\u00cf\u0003",
    "\u0002\u0002\u0002\u00d1\u001b\u0003\u0002\u0002\u0002\u001f%,4?KMT",
    "Z]gjtwz|\u0080\u0085\u0088\u0090\u0093\u0098\u009b\u009f\u00a6\u00b2",
    "\u00bf\u00c3\u00c8\u00d0"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class CELParser extends antlr4.Parser {

    static grammarFileName = "CEL.g4";
    static literalNames = [ null, "'=='", "'!='", "'in'", "'<'", "'<='", 
                            "'>='", "'>'", "'&&'", "'||'", "'['", "']'", 
                            "'{'", "'}'", "'('", "')'", "'.'", "','", "'-'", 
                            "'!'", "'?'", "':'", "'+'", "'*'", "'/'", "'%'", 
                            "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, "EQUALS", "NOT_EQUALS", "IN", "LESS", 
                             "LESS_EQUALS", "GREATER_EQUALS", "GREATER", 
                             "LOGICAL_AND", "LOGICAL_OR", "LBRACKET", "RPRACKET", 
                             "LBRACE", "RBRACE", "LPAREN", "RPAREN", "DOT", 
                             "COMMA", "MINUS", "EXCLAM", "QUESTIONMARK", 
                             "COLON", "PLUS", "STAR", "SLASH", "PERCENT", 
                             "TRUE", "FALSE", "NULL", "WHITESPACE", "COMMENT", 
                             "NUM_FLOAT", "NUM_INT", "NUM_UINT", "STRING", 
                             "BYTES", "IDENTIFIER" ];
    static ruleNames = [ "start", "expr", "conditionalOr", "conditionalAnd", 
                         "relation", "calc", "unary", "member", "primary", 
                         "exprList", "fieldInitializerList", "mapInitializerList", 
                         "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = CELParser.ruleNames;
        this.literalNames = CELParser.literalNames;
        this.symbolicNames = CELParser.symbolicNames;
    }

    get atn() {
        return atn;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 4:
    	    		return this.relation_sempred(localctx, predIndex);
    	case 5:
    	    		return this.calc_sempred(localctx, predIndex);
    	case 7:
    	    		return this.member_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    relation_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    calc_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 1:
    			return this.precpred(this._ctx, 2);
    		case 2:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };

    member_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 3:
    			return this.precpred(this._ctx, 3);
    		case 4:
    			return this.precpred(this._ctx, 2);
    		case 5:
    			return this.precpred(this._ctx, 1);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	start() {
	    let localctx = new StartContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, CELParser.RULE_start);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        localctx.e = this.expr();
	        this.state = 27;
	        this.match(CELParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expr() {
	    let localctx = new ExprContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, CELParser.RULE_expr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 29;
	        localctx.e = this.conditionalOr();
	        this.state = 35;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===CELParser.QUESTIONMARK) {
	            this.state = 30;
	            localctx.op = this.match(CELParser.QUESTIONMARK);
	            this.state = 31;
	            localctx.e1 = this.conditionalOr();
	            this.state = 32;
	            this.match(CELParser.COLON);
	            this.state = 33;
	            localctx.e2 = this.expr();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalOr() {
	    let localctx = new ConditionalOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, CELParser.RULE_conditionalOr);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 37;
	        localctx.e = this.conditionalAnd();
	        this.state = 42;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CELParser.LOGICAL_OR) {
	            this.state = 38;
	            localctx.s9 = this.match(CELParser.LOGICAL_OR);
	            localctx.ops.push(localctx.s9);
	            this.state = 39;
	            localctx._conditionalAnd = this.conditionalAnd();
	            localctx.e1.push(localctx._conditionalAnd);
	            this.state = 44;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conditionalAnd() {
	    let localctx = new ConditionalAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, CELParser.RULE_conditionalAnd);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 45;
	        localctx.e = this.relation(0);
	        this.state = 50;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===CELParser.LOGICAL_AND) {
	            this.state = 46;
	            localctx.s8 = this.match(CELParser.LOGICAL_AND);
	            localctx.ops.push(localctx.s8);
	            this.state = 47;
	            localctx._relation = this.relation(0);
	            localctx.e1.push(localctx._relation);
	            this.state = 52;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	relation(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new RelationContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 8;
	    this.enterRecursionRule(localctx, 8, CELParser.RULE_relation, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 54;
	        this.calc(0);
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 61;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,3,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                localctx = new RelationContext(this, _parentctx, _parentState);
	                this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_relation);
	                this.state = 56;
	                if (!( this.precpred(this._ctx, 1))) {
	                    throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                }
	                this.state = 57;
	                localctx.op = this._input.LT(1);
	                _la = this._input.LA(1);
	                if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CELParser.EQUALS) | (1 << CELParser.NOT_EQUALS) | (1 << CELParser.IN) | (1 << CELParser.LESS) | (1 << CELParser.LESS_EQUALS) | (1 << CELParser.GREATER_EQUALS) | (1 << CELParser.GREATER))) !== 0))) {
	                    localctx.op = this._errHandler.recoverInline(this);
	                }
	                else {
	                	this._errHandler.reportMatch(this);
	                    this.consume();
	                }
	                this.state = 58;
	                this.relation(2); 
	            }
	            this.state = 63;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,3,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


	calc(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new CalcContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 10;
	    this.enterRecursionRule(localctx, 10, CELParser.RULE_calc, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 65;
	        this.unary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 75;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 73;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new CalcContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_calc);
	                    this.state = 67;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 68;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << CELParser.STAR) | (1 << CELParser.SLASH) | (1 << CELParser.PERCENT))) !== 0))) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 69;
	                    this.calc(3);
	                    break;

	                case 2:
	                    localctx = new CalcContext(this, _parentctx, _parentState);
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_calc);
	                    this.state = 70;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 71;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===CELParser.MINUS || _la===CELParser.PLUS)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 72;
	                    this.calc(2);
	                    break;

	                } 
	            }
	            this.state = 77;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, CELParser.RULE_unary);
	    var _la = 0; // Token type
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new MemberExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 78;
	            this.member(0);
	            break;

	        case 2:
	            localctx = new LogicalNotContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 80; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            do {
	                this.state = 79;
	                localctx.s19 = this.match(CELParser.EXCLAM);
	                localctx.ops.push(localctx.s19);
	                this.state = 82; 
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            } while(_la===CELParser.EXCLAM);
	            this.state = 84;
	            this.member(0);
	            break;

	        case 3:
	            localctx = new NegateContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 85;
	            		localctx.s18 = this.match(CELParser.MINUS);
	            		localctx.ops.push(localctx.s18);
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 88; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,7, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            this.state = 90;
	            this.member(0);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	member(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new MemberContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 14;
	    this.enterRecursionRule(localctx, 14, CELParser.RULE_member, _p);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        localctx = new PrimaryExprContext(this, localctx);
	        this._ctx = localctx;
	        _prevctx = localctx;

	        this.state = 94;
	        this.primary();
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 122;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 120;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,13,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new SelectOrCallContext(this, new MemberContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
	                    this.state = 96;
	                    if (!( this.precpred(this._ctx, 3))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 3)");
	                    }
	                    this.state = 97;
	                    localctx.op = this.match(CELParser.DOT);
	                    this.state = 98;
	                    localctx.id = this.match(CELParser.IDENTIFIER);
	                    this.state = 104;
	                    this._errHandler.sync(this);
	                    var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	                    if(la_===1) {
	                        this.state = 99;
	                        localctx.open = this.match(CELParser.LPAREN);
	                        this.state = 101;
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                        if(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
	                            this.state = 100;
	                            localctx.args = this.exprList();
	                        }

	                        this.state = 103;
	                        this.match(CELParser.RPAREN);

	                    }
	                    break;

	                case 2:
	                    localctx = new IndexContext(this, new MemberContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
	                    this.state = 106;
	                    if (!( this.precpred(this._ctx, 2))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
	                    }
	                    this.state = 107;
	                    localctx.op = this.match(CELParser.LBRACKET);
	                    this.state = 108;
	                    localctx.index = this.expr();
	                    this.state = 109;
	                    this.match(CELParser.RPRACKET);
	                    break;

	                case 3:
	                    localctx = new CreateMessageContext(this, new MemberContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, CELParser.RULE_member);
	                    this.state = 111;
	                    if (!( this.precpred(this._ctx, 1))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
	                    }
	                    this.state = 112;
	                    localctx.op = this.match(CELParser.LBRACE);
	                    this.state = 114;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===CELParser.IDENTIFIER) {
	                        this.state = 113;
	                        localctx.entries = this.fieldInitializerList();
	                    }

	                    this.state = 117;
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    if(_la===CELParser.COMMA) {
	                        this.state = 116;
	                        this.match(CELParser.COMMA);
	                    }

	                    this.state = 119;
	                    this.match(CELParser.RBRACE);
	                    break;

	                } 
	            }
	            this.state = 124;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, CELParser.RULE_primary);
	    var _la = 0; // Token type
	    try {
	        this.state = 157;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case CELParser.DOT:
	        case CELParser.IDENTIFIER:
	            localctx = new IdentOrGlobalCallContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CELParser.DOT) {
	                this.state = 125;
	                localctx.leadingDot = this.match(CELParser.DOT);
	            }

	            this.state = 128;
	            localctx.id = this.match(CELParser.IDENTIFIER);
	            this.state = 134;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,17,this._ctx);
	            if(la_===1) {
	                this.state = 129;
	                localctx.op = this.match(CELParser.LPAREN);
	                this.state = 131;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	                if(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
	                    this.state = 130;
	                    localctx.args = this.exprList();
	                }

	                this.state = 133;
	                this.match(CELParser.RPAREN);

	            }
	            break;
	        case CELParser.LPAREN:
	            localctx = new NestedContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 136;
	            this.match(CELParser.LPAREN);
	            this.state = 137;
	            localctx.e = this.expr();
	            this.state = 138;
	            this.match(CELParser.RPAREN);
	            break;
	        case CELParser.LBRACKET:
	            localctx = new CreateListContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 140;
	            localctx.op = this.match(CELParser.LBRACKET);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
	                this.state = 141;
	                localctx.elems = this.exprList();
	            }

	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CELParser.COMMA) {
	                this.state = 144;
	                this.match(CELParser.COMMA);
	            }

	            this.state = 147;
	            this.match(CELParser.RPRACKET);
	            break;
	        case CELParser.LBRACE:
	            localctx = new CreateStructContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 148;
	            localctx.op = this.match(CELParser.LBRACE);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 10)) & ~0x1f) == 0 && ((1 << (_la - 10)) & ((1 << (CELParser.LBRACKET - 10)) | (1 << (CELParser.LBRACE - 10)) | (1 << (CELParser.LPAREN - 10)) | (1 << (CELParser.DOT - 10)) | (1 << (CELParser.MINUS - 10)) | (1 << (CELParser.EXCLAM - 10)) | (1 << (CELParser.TRUE - 10)) | (1 << (CELParser.FALSE - 10)) | (1 << (CELParser.NULL - 10)) | (1 << (CELParser.NUM_FLOAT - 10)) | (1 << (CELParser.NUM_INT - 10)) | (1 << (CELParser.NUM_UINT - 10)) | (1 << (CELParser.STRING - 10)) | (1 << (CELParser.BYTES - 10)) | (1 << (CELParser.IDENTIFIER - 10)))) !== 0)) {
	                this.state = 149;
	                localctx.entries = this.mapInitializerList();
	            }

	            this.state = 153;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CELParser.COMMA) {
	                this.state = 152;
	                this.match(CELParser.COMMA);
	            }

	            this.state = 155;
	            this.match(CELParser.RBRACE);
	            break;
	        case CELParser.MINUS:
	        case CELParser.TRUE:
	        case CELParser.FALSE:
	        case CELParser.NULL:
	        case CELParser.NUM_FLOAT:
	        case CELParser.NUM_INT:
	        case CELParser.NUM_UINT:
	        case CELParser.STRING:
	        case CELParser.BYTES:
	            localctx = new ConstantLiteralContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 156;
	            this.literal();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	exprList() {
	    let localctx = new ExprListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, CELParser.RULE_exprList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 159;
	        localctx._expr = this.expr();
	        localctx.e.push(localctx._expr);
	        this.state = 164;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 160;
	                this.match(CELParser.COMMA);
	                this.state = 161;
	                localctx._expr = this.expr();
	                localctx.e.push(localctx._expr); 
	            }
	            this.state = 166;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldInitializerList() {
	    let localctx = new FieldInitializerListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, CELParser.RULE_fieldInitializerList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 167;
	        localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
	        localctx.fields.push(localctx._IDENTIFIER);
	        this.state = 168;
	        localctx.s21 = this.match(CELParser.COLON);
	        localctx.cols.push(localctx.s21);
	        this.state = 169;
	        localctx._expr = this.expr();
	        localctx.values.push(localctx._expr);
	        this.state = 176;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 170;
	                this.match(CELParser.COMMA);
	                this.state = 171;
	                localctx._IDENTIFIER = this.match(CELParser.IDENTIFIER);
	                localctx.fields.push(localctx._IDENTIFIER);
	                this.state = 172;
	                localctx.s21 = this.match(CELParser.COLON);
	                localctx.cols.push(localctx.s21);
	                this.state = 173;
	                localctx._expr = this.expr();
	                localctx.values.push(localctx._expr); 
	            }
	            this.state = 178;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	mapInitializerList() {
	    let localctx = new MapInitializerListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, CELParser.RULE_mapInitializerList);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 179;
	        localctx._expr = this.expr();
	        localctx.keys.push(localctx._expr);
	        this.state = 180;
	        localctx.s21 = this.match(CELParser.COLON);
	        localctx.cols.push(localctx.s21);
	        this.state = 181;
	        localctx._expr = this.expr();
	        localctx.values.push(localctx._expr);
	        this.state = 189;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                this.state = 182;
	                this.match(CELParser.COMMA);
	                this.state = 183;
	                localctx._expr = this.expr();
	                localctx.keys.push(localctx._expr);
	                this.state = 184;
	                localctx.s21 = this.match(CELParser.COLON);
	                localctx.cols.push(localctx.s21);
	                this.state = 185;
	                localctx._expr = this.expr();
	                localctx.values.push(localctx._expr); 
	            }
	            this.state = 191;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, CELParser.RULE_literal);
	    var _la = 0; // Token type
	    try {
	        this.state = 206;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,28,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new IntContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 193;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CELParser.MINUS) {
	                this.state = 192;
	                localctx.sign = this.match(CELParser.MINUS);
	            }

	            this.state = 195;
	            localctx.tok = this.match(CELParser.NUM_INT);
	            break;

	        case 2:
	            localctx = new UintContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 196;
	            localctx.tok = this.match(CELParser.NUM_UINT);
	            break;

	        case 3:
	            localctx = new DoubleContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===CELParser.MINUS) {
	                this.state = 197;
	                localctx.sign = this.match(CELParser.MINUS);
	            }

	            this.state = 200;
	            localctx.tok = this.match(CELParser.NUM_FLOAT);
	            break;

	        case 4:
	            localctx = new StringContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 201;
	            localctx.tok = this.match(CELParser.STRING);
	            break;

	        case 5:
	            localctx = new BytesContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 202;
	            localctx.tok = this.match(CELParser.BYTES);
	            break;

	        case 6:
	            localctx = new BoolTrueContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 203;
	            localctx.tok = this.match(CELParser.TRUE);
	            break;

	        case 7:
	            localctx = new BoolFalseContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 204;
	            localctx.tok = this.match(CELParser.FALSE);
	            break;

	        case 8:
	            localctx = new NullContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 205;
	            localctx.tok = this.match(CELParser.NULL);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

CELParser.EOF = antlr4.Token.EOF;
CELParser.EQUALS = 1;
CELParser.NOT_EQUALS = 2;
CELParser.IN = 3;
CELParser.LESS = 4;
CELParser.LESS_EQUALS = 5;
CELParser.GREATER_EQUALS = 6;
CELParser.GREATER = 7;
CELParser.LOGICAL_AND = 8;
CELParser.LOGICAL_OR = 9;
CELParser.LBRACKET = 10;
CELParser.RPRACKET = 11;
CELParser.LBRACE = 12;
CELParser.RBRACE = 13;
CELParser.LPAREN = 14;
CELParser.RPAREN = 15;
CELParser.DOT = 16;
CELParser.COMMA = 17;
CELParser.MINUS = 18;
CELParser.EXCLAM = 19;
CELParser.QUESTIONMARK = 20;
CELParser.COLON = 21;
CELParser.PLUS = 22;
CELParser.STAR = 23;
CELParser.SLASH = 24;
CELParser.PERCENT = 25;
CELParser.TRUE = 26;
CELParser.FALSE = 27;
CELParser.NULL = 28;
CELParser.WHITESPACE = 29;
CELParser.COMMENT = 30;
CELParser.NUM_FLOAT = 31;
CELParser.NUM_INT = 32;
CELParser.NUM_UINT = 33;
CELParser.STRING = 34;
CELParser.BYTES = 35;
CELParser.IDENTIFIER = 36;

CELParser.RULE_start = 0;
CELParser.RULE_expr = 1;
CELParser.RULE_conditionalOr = 2;
CELParser.RULE_conditionalAnd = 3;
CELParser.RULE_relation = 4;
CELParser.RULE_calc = 5;
CELParser.RULE_unary = 6;
CELParser.RULE_member = 7;
CELParser.RULE_primary = 8;
CELParser.RULE_exprList = 9;
CELParser.RULE_fieldInitializerList = 10;
CELParser.RULE_mapInitializerList = 11;
CELParser.RULE_literal = 12;

class StartContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_start;
        this.e = null; // ExprContext
    }

	EOF() {
	    return this.getToken(CELParser.EOF, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterStart(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitStart(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitStart(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_expr;
        this.e = null; // ConditionalOrContext
        this.op = null; // Token
        this.e1 = null; // ConditionalOrContext
        this.e2 = null; // ExprContext
    }

	conditionalOr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalOrContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalOrContext,i);
	    }
	};

	COLON() {
	    return this.getToken(CELParser.COLON, 0);
	};

	QUESTIONMARK() {
	    return this.getToken(CELParser.QUESTIONMARK, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_conditionalOr;
        this.e = null; // ConditionalAndContext
        this.s9 = null; // Token
        this.ops = []; // of Tokens
        this._conditionalAnd = null; // ConditionalAndContext
        this.e1 = []; // of ConditionalAndContexts
    }

	conditionalAnd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConditionalAndContext);
	    } else {
	        return this.getTypedRuleContext(ConditionalAndContext,i);
	    }
	};

	LOGICAL_OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.LOGICAL_OR);
	    } else {
	        return this.getToken(CELParser.LOGICAL_OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterConditionalOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitConditionalOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitConditionalOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConditionalAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_conditionalAnd;
        this.e = null; // RelationContext
        this.s8 = null; // Token
        this.ops = []; // of Tokens
        this._relation = null; // RelationContext
        this.e1 = []; // of RelationContexts
    }

	relation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationContext);
	    } else {
	        return this.getTypedRuleContext(RelationContext,i);
	    }
	};

	LOGICAL_AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.LOGICAL_AND);
	    } else {
	        return this.getToken(CELParser.LOGICAL_AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterConditionalAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitConditionalAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitConditionalAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_relation;
        this.op = null; // Token
    }

	calc() {
	    return this.getTypedRuleContext(CalcContext,0);
	};

	relation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationContext);
	    } else {
	        return this.getTypedRuleContext(RelationContext,i);
	    }
	};

	LESS() {
	    return this.getToken(CELParser.LESS, 0);
	};

	LESS_EQUALS() {
	    return this.getToken(CELParser.LESS_EQUALS, 0);
	};

	GREATER_EQUALS() {
	    return this.getToken(CELParser.GREATER_EQUALS, 0);
	};

	GREATER() {
	    return this.getToken(CELParser.GREATER, 0);
	};

	EQUALS() {
	    return this.getToken(CELParser.EQUALS, 0);
	};

	NOT_EQUALS() {
	    return this.getToken(CELParser.NOT_EQUALS, 0);
	};

	IN() {
	    return this.getToken(CELParser.IN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterRelation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitRelation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitRelation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CalcContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_calc;
        this.op = null; // Token
    }

	unary() {
	    return this.getTypedRuleContext(UnaryContext,0);
	};

	calc = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CalcContext);
	    } else {
	        return this.getTypedRuleContext(CalcContext,i);
	    }
	};

	STAR() {
	    return this.getToken(CELParser.STAR, 0);
	};

	SLASH() {
	    return this.getToken(CELParser.SLASH, 0);
	};

	PERCENT() {
	    return this.getToken(CELParser.PERCENT, 0);
	};

	PLUS() {
	    return this.getToken(CELParser.PLUS, 0);
	};

	MINUS() {
	    return this.getToken(CELParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCalc(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCalc(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCalc(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_unary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class LogicalNotContext extends UnaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.s19 = null; // Token;
        this.ops = []; // of Tokens;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	EXCLAM = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.EXCLAM);
	    } else {
	        return this.getToken(CELParser.EXCLAM, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterLogicalNot(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitLogicalNot(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitLogicalNot(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.LogicalNotContext = LogicalNotContext;

class MemberExprContext extends UnaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterMemberExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitMemberExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitMemberExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.MemberExprContext = MemberExprContext;

class NegateContext extends UnaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.s18 = null; // Token;
        this.ops = []; // of Tokens;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	MINUS = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.MINUS);
	    } else {
	        return this.getToken(CELParser.MINUS, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterNegate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitNegate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitNegate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.NegateContext = NegateContext;

class MemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_member;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class SelectOrCallContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.id = null; // Token;
        this.open = null; // Token;
        this.args = null; // ExprListContext;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	DOT() {
	    return this.getToken(CELParser.DOT, 0);
	};

	IDENTIFIER() {
	    return this.getToken(CELParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(CELParser.RPAREN, 0);
	};

	LPAREN() {
	    return this.getToken(CELParser.LPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterSelectOrCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitSelectOrCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitSelectOrCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.SelectOrCallContext = SelectOrCallContext;

class PrimaryExprContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterPrimaryExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitPrimaryExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitPrimaryExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.PrimaryExprContext = PrimaryExprContext;

class IndexContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.index = null; // ExprContext;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	RPRACKET() {
	    return this.getToken(CELParser.RPRACKET, 0);
	};

	LBRACKET() {
	    return this.getToken(CELParser.LBRACKET, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterIndex(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitIndex(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitIndex(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.IndexContext = IndexContext;

class CreateMessageContext extends MemberContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.entries = null; // FieldInitializerListContext;
        super.copyFrom(ctx);
    }

	member() {
	    return this.getTypedRuleContext(MemberContext,0);
	};

	RBRACE() {
	    return this.getToken(CELParser.RBRACE, 0);
	};

	LBRACE() {
	    return this.getToken(CELParser.LBRACE, 0);
	};

	COMMA() {
	    return this.getToken(CELParser.COMMA, 0);
	};

	fieldInitializerList() {
	    return this.getTypedRuleContext(FieldInitializerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCreateMessage(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCreateMessage(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCreateMessage(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CreateMessageContext = CreateMessageContext;

class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_primary;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class CreateListContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.elems = null; // ExprListContext;
        super.copyFrom(ctx);
    }

	RPRACKET() {
	    return this.getToken(CELParser.RPRACKET, 0);
	};

	LBRACKET() {
	    return this.getToken(CELParser.LBRACKET, 0);
	};

	COMMA() {
	    return this.getToken(CELParser.COMMA, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCreateList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCreateList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCreateList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CreateListContext = CreateListContext;

class CreateStructContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null; // Token;
        this.entries = null; // MapInitializerListContext;
        super.copyFrom(ctx);
    }

	RBRACE() {
	    return this.getToken(CELParser.RBRACE, 0);
	};

	LBRACE() {
	    return this.getToken(CELParser.LBRACE, 0);
	};

	COMMA() {
	    return this.getToken(CELParser.COMMA, 0);
	};

	mapInitializerList() {
	    return this.getTypedRuleContext(MapInitializerListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterCreateStruct(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitCreateStruct(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitCreateStruct(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.CreateStructContext = CreateStructContext;

class ConstantLiteralContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterConstantLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitConstantLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitConstantLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.ConstantLiteralContext = ConstantLiteralContext;

class NestedContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.e = null; // ExprContext;
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(CELParser.LPAREN, 0);
	};

	RPAREN() {
	    return this.getToken(CELParser.RPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterNested(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitNested(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitNested(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.NestedContext = NestedContext;

class IdentOrGlobalCallContext extends PrimaryContext {

    constructor(parser, ctx) {
        super(parser);
        this.leadingDot = null; // Token;
        this.id = null; // Token;
        this.op = null; // Token;
        this.args = null; // ExprListContext;
        super.copyFrom(ctx);
    }

	IDENTIFIER() {
	    return this.getToken(CELParser.IDENTIFIER, 0);
	};

	RPAREN() {
	    return this.getToken(CELParser.RPAREN, 0);
	};

	DOT() {
	    return this.getToken(CELParser.DOT, 0);
	};

	LPAREN() {
	    return this.getToken(CELParser.LPAREN, 0);
	};

	exprList() {
	    return this.getTypedRuleContext(ExprListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterIdentOrGlobalCall(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitIdentOrGlobalCall(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitIdentOrGlobalCall(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.IdentOrGlobalCallContext = IdentOrGlobalCallContext;

class ExprListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_exprList;
        this._expr = null; // ExprContext
        this.e = []; // of ExprContexts
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COMMA);
	    } else {
	        return this.getToken(CELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterExprList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitExprList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitExprList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FieldInitializerListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_fieldInitializerList;
        this._IDENTIFIER = null; // Token
        this.fields = []; // of Tokens
        this.s21 = null; // Token
        this.cols = []; // of Tokens
        this._expr = null; // ExprContext
        this.values = []; // of ExprContexts
    }

	IDENTIFIER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.IDENTIFIER);
	    } else {
	        return this.getToken(CELParser.IDENTIFIER, i);
	    }
	};


	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COLON);
	    } else {
	        return this.getToken(CELParser.COLON, i);
	    }
	};


	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COMMA);
	    } else {
	        return this.getToken(CELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterFieldInitializerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitFieldInitializerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitFieldInitializerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MapInitializerListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_mapInitializerList;
        this._expr = null; // ExprContext
        this.keys = []; // of ExprContexts
        this.s21 = null; // Token
        this.cols = []; // of Tokens
        this.values = []; // of ExprContexts
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	COLON = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COLON);
	    } else {
	        return this.getToken(CELParser.COLON, i);
	    }
	};


	COMMA = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(CELParser.COMMA);
	    } else {
	        return this.getToken(CELParser.COMMA, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterMapInitializerList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitMapInitializerList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitMapInitializerList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = CELParser.RULE_literal;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BytesContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	BYTES() {
	    return this.getToken(CELParser.BYTES, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterBytes(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitBytes(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitBytes(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.BytesContext = BytesContext;

class UintContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	NUM_UINT() {
	    return this.getToken(CELParser.NUM_UINT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterUint(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitUint(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitUint(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.UintContext = UintContext;

class NullContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	NULL() {
	    return this.getToken(CELParser.NULL, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterNull(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitNull(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitNull(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.NullContext = NullContext;

class BoolFalseContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	FALSE() {
	    return this.getToken(CELParser.FALSE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterBoolFalse(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitBoolFalse(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitBoolFalse(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.BoolFalseContext = BoolFalseContext;

class StringContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	STRING() {
	    return this.getToken(CELParser.STRING, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterString(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitString(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitString(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.StringContext = StringContext;

class DoubleContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.sign = null; // Token;
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	NUM_FLOAT() {
	    return this.getToken(CELParser.NUM_FLOAT, 0);
	};

	MINUS() {
	    return this.getToken(CELParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterDouble(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitDouble(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitDouble(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.DoubleContext = DoubleContext;

class BoolTrueContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	TRUE() {
	    return this.getToken(CELParser.TRUE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterBoolTrue(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitBoolTrue(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitBoolTrue(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.BoolTrueContext = BoolTrueContext;

class IntContext extends LiteralContext {

    constructor(parser, ctx) {
        super(parser);
        this.sign = null; // Token;
        this.tok = null; // Token;
        super.copyFrom(ctx);
    }

	NUM_INT() {
	    return this.getToken(CELParser.NUM_INT, 0);
	};

	MINUS() {
	    return this.getToken(CELParser.MINUS, 0);
	};

	enterRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof CELListener ) {
	        listener.exitInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof CELVisitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

CELParser.IntContext = IntContext;


CELParser.StartContext = StartContext; 
CELParser.ExprContext = ExprContext; 
CELParser.ConditionalOrContext = ConditionalOrContext; 
CELParser.ConditionalAndContext = ConditionalAndContext; 
CELParser.RelationContext = RelationContext; 
CELParser.CalcContext = CalcContext; 
CELParser.UnaryContext = UnaryContext; 
CELParser.MemberContext = MemberContext; 
CELParser.PrimaryContext = PrimaryContext; 
CELParser.ExprListContext = ExprListContext; 
CELParser.FieldInitializerListContext = FieldInitializerListContext; 
CELParser.MapInitializerListContext = MapInitializerListContext; 
CELParser.LiteralContext = LiteralContext; 
