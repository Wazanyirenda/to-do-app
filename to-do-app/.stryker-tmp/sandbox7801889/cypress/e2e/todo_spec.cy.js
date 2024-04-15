// @ts-nocheck
import ToDoPage from '../page_objects/ToDoPage';
describe('To-Do App', function() {
  beforeEach(function() {
    ToDoPage.visit();
  });

  it('Adds a new task', function() {
    ToDoPage.addTask('Buy groceries');
    cy.get('ul').should('contain', 'Buy groceries');
    
  });

  // it('Marks a task as completed', function() {
  //   ToDoPage.markTaskAsCompleted('Buy groceries');
  //   cy.get('li.completed').should('have.length', 1);
  // });

  // it('Deletes a task', function() {
  //   ToDoPage.deleteTask('Buy groceries');
  //   cy.get('ul').should('not.contain', 'Buy groceries');
  // });
});
