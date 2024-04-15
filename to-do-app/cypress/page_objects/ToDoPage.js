class ToDoPage {
    visit() {
      cy.visit('http://localhost:3000/');
    }
  
    addTask(taskText) {
      cy.get('input[type="text"]').type(taskText);
      cy.contains('Add Task').click();
    }

    markTaskAsCompleted(taskText) {
      cy.contains('li', taskText).click();
    }
  
    deleteTask(taskText) {
      cy.contains('li', taskText).siblings('button').click();
    }
  }
  
  export default new ToDoPage();
  