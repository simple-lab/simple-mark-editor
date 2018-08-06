
namespace SimpleMarkEditor {

    function startup(): void {
        
        successLog();

        let mdConverter = new MarkdownConverter();

        let questionModal = new QuestionModal();
    }
    export var app: any = startup();

    function successLog(): void {
        console.log("## startup-ts");
    }
}

