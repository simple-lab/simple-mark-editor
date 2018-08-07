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
            SimpleMarkEditor.R.class.questionViewBtn.click(this.toggleQuestion);
        }
        QuestionModal.prototype.scrollDetect = function () {
            var scrollTop = SimpleMarkEditor.R.id.modalScroll.scrollTop();
            if (scrollTop > 40) {
                SimpleMarkEditor.R.id.fixedHeader.show();
            }
            else {
                SimpleMarkEditor.R.id.fixedHeader.hide();
            }
        };
        QuestionModal.prototype.toggleQuestion = function () {
            var questionViewBtn = $(this);
            var questionContentBox = questionViewBtn.parents('.questionItem').find('.questionContentBox');
            questionViewBtn.toggleClass('opened');
            questionContentBox.toggleClass('opened');
            if (questionViewBtn.hasClass('opened')) {
                questionViewBtn.children().eq(0).text("질문 접기");
            }
            else {
                questionViewBtn.children().eq(0).text("질문 보기");
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
        R.class = {
            questionViewBtn: $(".questionViewBtn"),
            questionContentBox: $(".questionContentBox")
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