
namespace SimpleMarkEditor {

    function startup(): void {
        
        successLog();

        let mdConverter = new MarkdownConverter();

    }
    export var app: any = startup();

    function successLog(): void {
        console.log("## startup-ts");
    }
}

