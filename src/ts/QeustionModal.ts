namespace SimpleMarkEditor {
    
    export class QuestionModal {
        
        constructor() {
            console.log("Load::QuestionModal");

            R.id.modalScroll.scroll(this.scrollDetect);
        }

        scrollDetect(): void {

            let scrollTop: number = R.id.modalScroll.scrollTop();
            console.log(screenTop);
            if(scrollTop > 40) {
                R.id.fixedHeader.show();
            }
            else {
                R.id.fixedHeader.hide();
            }
        }
    }
    
}