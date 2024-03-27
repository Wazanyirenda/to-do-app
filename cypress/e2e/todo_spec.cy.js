// todo_spec.js

import ToDoPage from '../page_objects/ToDoPage'; // Adjust the path as per your project structure

describe('To-Do App', function() {
  beforeEach(function() {
    ToDoPage.visit();
  });

  it('Adds a new task', function() {
    ToDoPage.addTask('Buy groceries');
    cy.get('ul').should('contain', 'Buy groceries');
  });

  it('Marks a task as completed', function() {
    ToDoPage.addTask('Walk the dog');
    ToDoPage.markTaskAsCompleted('Walk the dog');
    cy.get('li.completed').should('have.length', 1);
  });

  it('Deletes a task', function() {
    ToDoPage.addTask('Do laundry');
    ToDoPage.deleteTask('Do laundry');
    cy.get('ul').should('not.contain', 'Do laundry');
  });
});
