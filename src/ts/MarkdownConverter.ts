namespace SimpleMarkEditor {
    
    export class MarkdownConverter {
        
        constructor() {
            console.log("Load::MarkdownConverter");
            R.id.workSpace.keydown(() => this.keydown_convertTextToMarkdown());
        }
        
        keydown_convertTextToMarkdown(): void {
            let markdown: string = marked(R.id.workSpace.val().toString());
            R.id.translationSpace.html(markdown);
        }

    }
    
}