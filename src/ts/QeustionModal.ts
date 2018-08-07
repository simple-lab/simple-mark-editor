namespace SimpleMarkEditor {
    
    export class QuestionModal {
        
        constructor() {
            console.log("Load::QuestionModal");

            R.id.modalScroll.scroll(this.scrollDetect);
            R.class.questionViewBtn.click(this.toggleQuestion);
        }

        scrollDetect(): void {

            let scrollTop: number = R.id.modalScroll.scrollTop();
            
            if(scrollTop > 40) {
                R.id.fixedHeader.show();
            }
            else {
                R.id.fixedHeader.hide();
            }
        }

        toggleQuestion(): void {

            let questionViewBtn = $(this);
            let questionContentBox = questionViewBtn.parents('.questionItem').find('.questionContentBox');
            
            questionViewBtn.toggleClass('opened');
            questionContentBox.toggleClass('opened');

            if(questionViewBtn.hasClass('opened')) {
                questionViewBtn.children().eq(0).text("질문 접기");
            }
            else {
                questionViewBtn.children().eq(0).text("질문 보기");
            }
        }
        
    }
    
}