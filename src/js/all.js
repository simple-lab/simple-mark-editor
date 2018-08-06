var SimpleMarkEditor;
(function (SimpleMarkEditor) {
    var MarkdownConverter = /** @class */ (function () {
        function MarkdownConverter() {
            var _this = this;
            console.log("Load::MarkdownConverter");
            SimpleMarkEditor.R.id.workSpace.keydown(function () { return _this.keydown_convertTextToMarkdown(); });
        }
        MarkdownConverter.prototype.keydown_convertTextToMarkdown = function () {
            var markdown = marked(SimpleMarkEditor.R.id.workSpace.val().toString());
            SimpleMarkEditor.R.id.translationSpace.html(markdown);
        };
        return MarkdownConverter;
    }());
    SimpleMarkEditor.MarkdownConverter = MarkdownConverter;
})(SimpleMarkEditor || (SimpleMarkEditor = {}));
var SimpleMarkEditor;
(function (SimpleMarkEditor) {
    var QuestionModal = /** @class */ (function () {
        function QuestionModal() {
            console.log("Load::QuestionModal");
            SimpleMarkEditor.R.id.modalScroll.scroll(this.scrollDetect);
        }
        QuestionModal.prototype.scrollDetect = function () {
            var scrollTop = SimpleMarkEditor.R.id.modalScroll.scrollTop();
            console.log(screenTop);
            if (scrollTop > 40) {
                SimpleMarkEditor.R.id.fixedHeader.show();
            }
            else {
                SimpleMarkEditor.R.id.fixedHeader.hide();
            }
        };
        return QuestionModal;
    }());
    SimpleMarkEditor.QuestionModal = QuestionModal;
})(SimpleMarkEditor || (SimpleMarkEditor = {}));
var SimpleMarkEditor;
(function (SimpleMarkEditor) {
    var R = /** @class */ (function () {
        function R() {
        }
        R.id = {
            editor: $("#editor"),
            workSpace: $("#workSpace"),
            converter: $("#converter"),
            translationSpace: $("#translationSpace"),
            modalScroll: $("#modalScroll"),
            popupHeader: $("#popupHeader"),
            fixedHeader: $("#fixedHeader")
        };
        R.image = {};
        R.string = {};
        return R;
    }());
    SimpleMarkEditor.R = R;
})(SimpleMarkEditor || (SimpleMarkEditor = {}));
var SimpleMarkEditor;
(function (SimpleMarkEditor) {
    function startup() {
        successLog();
        var mdConverter = new SimpleMarkEditor.MarkdownConverter();
        var questionModal = new SimpleMarkEditor.QuestionModal();
    }
    SimpleMarkEditor.app = startup();
    function successLog() {
        console.log("## startup-ts");
    }
})(SimpleMarkEditor || (SimpleMarkEditor = {}));
//# sourceMappingURL=all.js.map